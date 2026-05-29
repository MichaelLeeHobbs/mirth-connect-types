/**
 * Parses one Javadoc (Javadoc 1.8) class/enum/interface HTML page into a
 * structured model. The model is intentionally close to the Java source: type
 * strings are normalized to fully-qualified Java names (e.g.
 * `java.util.List<com.mirth.connect.userutil.Attachment>`) but not yet mapped
 * to TypeScript — that is `type-map.ts`'s job.
 */

import { parse, type HTMLElement } from 'node-html-parser';

export interface ParamModel {
  type: string;
  name: string;
  doc?: string;
}

export interface MethodModel {
  static: boolean;
  name: string;
  /** Type parameters declared on the method itself (rare), e.g. `T`. */
  typeParams: string[];
  returnType: string;
  params: ParamModel[];
  jsdoc?: string;
  deprecated?: string | true;
  returnsDoc?: string;
  throws: { type: string; doc?: string }[];
  since?: string;
}

export interface ConstructorModel {
  params: ParamModel[];
  jsdoc?: string;
  deprecated?: string | true;
  throws: { type: string; doc?: string }[];
}

export interface FieldModel {
  static: boolean;
  name: string;
  type: string;
  jsdoc?: string;
  deprecated?: string | true;
}

export interface EnumConstantModel {
  name: string;
  jsdoc?: string;
}

export interface ClassModel {
  package: string;
  kind: 'class' | 'interface' | 'enum';
  name: string;
  /** Type parameters declared on the class, e.g. `['V']`. */
  typeParams: string[];
  extends?: string;
  implements: string[];
  jsdoc?: string;
  enumConstants: EnumConstantModel[];
  fields: FieldModel[];
  constructors: ConstructorModel[];
  methods: MethodModel[];
}

// --- text helpers ----------------------------------------------------------

/** Collapse runs of whitespace into single spaces and trim. */
function collapse(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Convert a doc fragment's HTML into clean text, preserving paragraph breaks
 * (`<p>`, `<br>`, list items) as newlines and collapsing other whitespace.
 */
function htmlToText(el: HTMLElement | null | undefined): string {
  if (!el) return '';
  let html = el.innerHTML;
  // Drop the Javadoc "Description copied from..." preamble links cleanly.
  html = html.replace(/<\/(p|div|li|tr|dd|dt)>/gi, '\n');
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<li[^>]*>/gi, '\n');
  const text = stripTags(html);
  return text
    .split('\n')
    .map((line) => collapse(line))
    .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const ENTITIES: Record<string, string> = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&hellip;': '...',
};

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;|&amp;|&lt;|&gt;|&quot;|&#39;|&apos;|&hellip;/g, (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ''));
}

// --- signature type extraction ---------------------------------------------

/**
 * Maps the package recorded in a Javadoc anchor title (e.g.
 * `class in com.mirth.connect.userutil` or `class or interface in java.lang`)
 * to a fully-qualified Java name for the given simple type name.
 */
function fqnFromAnchor(a: HTMLElement): string {
  const simple = collapse(stripTags(a.innerHTML));
  const title = a.getAttribute('title') ?? '';
  // Type-variable links (title "type parameter in <Class>") are not real types;
  // pass the variable name through unqualified.
  if (title.startsWith('type parameter')) return simple;
  // title forms: "class in <pkg>", "enum in <pkg>", "class or interface in <pkg>"
  const m = title.match(/in\s+([\w.]+)$/);
  if (m) {
    // Map nested types: Javadoc renders Map.Entry's link text as "Map.Entry".
    return `${m[1]}.${simple}`;
  }
  // External Java links carry the package in their href (docs.oracle.com/.../java/util/Map.html).
  const href = a.getAttribute('href') ?? '';
  const hm = href.match(/\/(java|javax)\/([\w/]+?)\.html/);
  if (hm) {
    const pkgPath = `${hm[1]}/${hm[2]}`.replace(/\/[A-Z][\w$]*$/, '');
    return `${pkgPath.replace(/\//g, '.')}.${simple}`;
  }
  return simple;
}

/**
 * Reads a signature `<pre>` element and returns a normalized Java type string,
 * with every anchor replaced by its fully-qualified name and entities decoded.
 * The result still contains the full signature text (modifiers, name, params).
 */
function preToSignatureText(pre: HTMLElement): string {
  let html = pre.innerHTML;
  // Replace each anchor with its FQN simple-resolved text.
  html = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, (anchorHtml) => {
    const wrapper = parse(anchorHtml);
    const a = wrapper.querySelector('a');
    if (!a) return stripTags(anchorHtml);
    // Skip the @Deprecated annotation link; mark it for the caller.
    const text = collapse(stripTags(a.innerHTML));
    if (text === '@Deprecated') return '@Deprecated';
    return fqnFromAnchor(a);
  });
  return decodeEntities(stripTags(html));
}

/**
 * Parses a normalized signature string into modifiers, name, type params,
 * return type, parameters (types + names), and throws.
 */
interface ParsedSignature {
  modifiers: string[];
  typeParams: string[];
  returnType?: string;
  name: string;
  params: { type: string; name: string }[];
  isDeprecatedAnnotated: boolean;
}

function parseSignature(sig: string, isConstructor: boolean): ParsedSignature {
  let s = collapse(sig);
  const isDeprecatedAnnotated = s.includes('@Deprecated');
  s = s.replace(/@Deprecated/g, '').trim();

  // throws clause.
  const throwsIdx = s.search(/\bthrows\b/);
  if (throwsIdx !== -1) s = s.slice(0, throwsIdx).trim();

  // Parameter list.
  const parenIdx = s.indexOf('(');
  const head = s.slice(0, parenIdx).trim();
  const paramStr = s.slice(parenIdx + 1, s.lastIndexOf(')')).trim();

  const params: { type: string; name: string }[] = [];
  for (const part of splitTopLevel(paramStr)) {
    const p = part.trim();
    if (!p) continue;
    // last whitespace-separated token is the name; the rest is the type.
    const lastSpace = lastTopLevelSpace(p);
    const type = p.slice(0, lastSpace).trim();
    const name = p.slice(lastSpace + 1).trim();
    params.push({ type, name });
  }

  // head = modifiers... [typeParams] returnType name   (for constructors: modifiers... name)
  const tokens = splitTopLevel(head, ' ').filter(Boolean);
  const modifiers: string[] = [];
  const typeParams: string[] = [];
  let idx = 0;
  const MODS = new Set([
    'public',
    'protected',
    'private',
    'static',
    'final',
    'abstract',
    'default',
  ]);
  while (idx < tokens.length && MODS.has(tokens[idx])) {
    modifiers.push(tokens[idx]);
    idx++;
  }
  // Optional method type-parameter block like `<T>`.
  if (idx < tokens.length && tokens[idx].startsWith('<')) {
    const tp = tokens[idx].replace(/^<|>$/g, '');
    for (const v of tp.split(',')) typeParams.push(v.trim());
    idx++;
  }
  const rest = tokens.slice(idx);
  const name = rest.length ? rest[rest.length - 1] : '';
  const returnType = isConstructor ? undefined : rest.slice(0, -1).join(' ').trim() || undefined;

  return { modifiers, typeParams, returnType, name, params, isDeprecatedAnnotated };
}

/** Split on top-level commas (or a custom delimiter) ignoring `<...>` nesting. */
function splitTopLevel(s: string, delim = ','): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of s) {
    if (ch === '<') depth++;
    else if (ch === '>') depth--;
    if (ch === delim && depth === 0) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out;
}

/** Index of the last top-level space (used to split `Type name`). */
function lastTopLevelSpace(s: string): number {
  let depth = 0;
  let last = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '<') depth++;
    else if (ch === '>') depth--;
    else if (ch === ' ' && depth === 0) last = i;
  }
  return last;
}

// --- detail-section <dl> parsing -------------------------------------------

interface DlInfo {
  params: Map<string, string>;
  returns?: string;
  throws: { type: string; doc?: string }[];
  deprecated?: string;
  since?: string;
}

function parseDl(dl: HTMLElement | null): DlInfo {
  const info: DlInfo = { params: new Map(), throws: [] };
  if (!dl) return info;
  const children = dl.childNodes.filter(
    (n) => (n as Partial<HTMLElement>).rawTagName != null,
  ) as unknown as HTMLElement[];
  let section: 'params' | 'returns' | 'throws' | 'since' | 'other' = 'other';
  for (const child of children) {
    const tag = child.rawTagName?.toLowerCase();
    if (tag === 'dt') {
      const label = collapse(child.text).toLowerCase();
      if (label.startsWith('parameters')) section = 'params';
      else if (label.startsWith('returns')) section = 'returns';
      else if (label.startsWith('throws')) section = 'throws';
      else if (label.startsWith('since')) section = 'since';
      else section = 'other';
    } else if (tag === 'dd') {
      if (section === 'params') {
        const code = child.querySelector('code');
        const pname = code ? collapse(code.text) : '';
        let rest = collapse(stripTags(child.innerHTML));
        // strip leading "name - "
        rest = rest.replace(/^[\w$]+\s*-\s*/, '');
        if (pname) info.params.set(pname, rest);
      } else if (section === 'returns') {
        info.returns = collapse(stripTags(child.innerHTML));
      } else if (section === 'throws') {
        const code = child.querySelector('code');
        const type = code ? collapse(code.text) : '';
        let rest = collapse(stripTags(child.innerHTML));
        rest = rest.replace(/^[\w$.]+\s*-\s*/, '');
        info.throws.push({ type, doc: rest || undefined });
      } else if (section === 'since') {
        info.since = collapse(stripTags(child.innerHTML));
      }
    }
  }
  return info;
}

/**
 * Extracts the description text and deprecation note from a detail member's
 * leading `<div class="block">` elements (Javadoc places the deprecation note
 * in its own block before the real description).
 */
function extractDescription(blocks: HTMLElement[]): { description: string; deprecated?: string } {
  let deprecated: string | undefined;
  const descParts: string[] = [];
  for (const block of blocks) {
    const depLabel = block.querySelector('.deprecatedLabel');
    if (depLabel) {
      const comment = block.querySelector('.deprecationComment');
      deprecated = comment ? htmlToText(comment) : '';
      continue;
    }
    const txt = htmlToText(block);
    if (txt) descParts.push(txt);
  }
  return { description: descParts.join('\n\n'), deprecated };
}

/** Collects the direct-child `<div class="block">` blocks of a member `<li>`. */
function memberBlocks(li: HTMLElement): HTMLElement[] {
  return li.querySelectorAll(':scope > div.block');
}

// --- main parse ------------------------------------------------------------

export function parseClassHtml(html: string): ClassModel {
  const root = parse(html);

  // Package + kind + name come from the header + the description <pre>.
  const subTitle = root.querySelector('div.header div.subTitle');
  const pkg = subTitle ? collapse(subTitle.text) : '';

  const descContainer = root.querySelector('div.description');
  const declPre = descContainer?.querySelector('pre') ?? null;
  const declText = declPre ? preToSignatureText(declPre) : '';

  let kind: ClassModel['kind'] = 'class';
  if (/\benum\b/.test(declText)) kind = 'enum';
  else if (/\binterface\b/.test(declText)) kind = 'interface';

  // Class name + type params: node-html-parser keeps <pre> content as raw text,
  // so parse the declaration text (e.g. "public class Future<V> extends ...").
  let name = '';
  let typeParams: string[] = [];
  {
    const dm = declText.match(/\b(?:class|interface|enum)\s+([A-Za-z_$][\w$]*)\s*(<[^]*?>)?/);
    if (dm) {
      name = dm[1];
      if (dm[2]) {
        const inner = dm[2].replace(/^<|>$/g, '');
        typeParams = splitTopLevel(inner).map((s) => s.trim().split(/\s+/)[0]);
      }
    }
  }

  // extends / implements from decl text (already FQN-normalized).
  let extendsType: string | undefined;
  const implementsTypes: string[] = [];
  {
    const extM = declText.match(/\bextends\s+([^]*?)(?:\s+implements\s|$)/);
    if (extM) extendsType = collapse(extM[1]).replace(/\s*implements[\s\S]*$/, '') || undefined;
    const implM = declText.match(/\bimplements\s+(.+)$/);
    if (implM) {
      for (const t of splitTopLevel(collapse(implM[1]))) {
        const tt = t.trim();
        if (tt) implementsTypes.push(tt);
      }
    }
  }
  // For enums, Javadoc shows `extends Enum<Self>`; we don't model that base.
  if (kind === 'enum') extendsType = undefined;

  // Class JSDoc (description block).
  const classDescBlock = descContainer?.querySelector('li.blockList > div.block') ?? null;
  const jsdoc = htmlToText(classDescBlock) || undefined;

  const model: ClassModel = {
    package: pkg,
    kind,
    name,
    typeParams,
    extends: extendsType,
    implements: implementsTypes,
    jsdoc,
    enumConstants: [],
    fields: [],
    constructors: [],
    methods: [],
  };

  // --- detail sections ---
  const details = root.querySelector('div.details');
  if (!details) return model;

  // Enum constant detail.
  parseEnumConstants(details, model);
  // Field detail.
  parseFields(details, model);
  // Constructor detail.
  parseConstructors(details, model);
  // Method detail.
  parseMethods(details, model);

  return model;
}

/** Returns the member `<li class="blockList">` elements under a detail anchor. */
function detailMembers(details: HTMLElement, anchorName: string): HTMLElement[] {
  const anchor = details.querySelectorAll(`a[name="${anchorName}"]`)[0];
  if (!anchor) return [];
  // The members are siblings following the anchor inside the same <ul>.
  // node-html-parser doesn't expose siblings easily; instead, find the enclosing
  // <ul class="blockList"> that contains this anchor and read its member <li>s.
  let container: HTMLElement | null = anchor.parentNode as HTMLElement | null;
  while (container && container.rawTagName?.toLowerCase() !== 'ul') {
    container = container.parentNode as HTMLElement | null;
  }
  if (!container) return [];
  // Each member is `<ul class="blockList|blockListLast"><li class="blockList">...`.
  const lis: HTMLElement[] = [];
  for (const ul of container.querySelectorAll('ul.blockList, ul.blockListLast')) {
    const li = ul.querySelector(':scope > li.blockList');
    if (li && li.querySelector(':scope > h4')) lis.push(li);
  }
  return lis;
}

function parseEnumConstants(details: HTMLElement, model: ClassModel): void {
  for (const li of detailMembers(details, 'enum.constant.detail')) {
    const h4 = li.querySelector(':scope > h4');
    if (!h4) continue;
    const cname = collapse(h4.text);
    const blocks = memberBlocks(li);
    const { description } = extractDescription(blocks);
    model.enumConstants.push({ name: cname, jsdoc: description || undefined });
  }
}

function parseFields(details: HTMLElement, model: ClassModel): void {
  for (const li of detailMembers(details, 'field.detail')) {
    const h4 = li.querySelector(':scope > h4');
    const pre = li.querySelector(':scope > pre');
    if (!h4 || !pre) continue;
    const fname = collapse(h4.text);
    const sig = preToSignatureText(pre);
    const isStatic = /\bstatic\b/.test(sig.replace(/@Deprecated/g, ''));
    // Field signature: `modifiers Type name`
    const cleaned = collapse(sig.replace(/@Deprecated/g, '')).replace(/=.+$/, '');
    const toks = splitTopLevel(cleaned, ' ').filter(Boolean);
    const MODS = new Set(['public', 'protected', 'private', 'static', 'final']);
    let i = 0;
    while (i < toks.length && MODS.has(toks[i])) i++;
    const type = toks.slice(i, -1).join(' ');
    const blocks = memberBlocks(li);
    const { description, deprecated } = extractDescription(blocks);
    model.fields.push({
      static: isStatic,
      name: fname,
      type,
      jsdoc: description || undefined,
      deprecated: deprecated !== undefined ? deprecated || true : undefined,
    });
  }
}

function parseConstructors(details: HTMLElement, model: ClassModel): void {
  for (const li of detailMembers(details, 'constructor.detail')) {
    const pre = li.querySelector(':scope > pre');
    if (!pre) continue;
    const sig = preToSignatureText(pre);
    const parsed = parseSignature(sig, true);
    const dl = li.querySelector(':scope > dl');
    const dlInfo = parseDl(dl);
    const blocks = memberBlocks(li);
    const { description, deprecated } = extractDescription(blocks);
    model.constructors.push({
      params: parsed.params.map((p) => ({
        type: p.type,
        name: p.name,
        doc: dlInfo.params.get(p.name),
      })),
      jsdoc: description || undefined,
      deprecated:
        deprecated !== undefined || parsed.isDeprecatedAnnotated ? deprecated || true : undefined,
      throws: dlInfo.throws,
    });
  }
}

function parseMethods(details: HTMLElement, model: ClassModel): void {
  for (const li of detailMembers(details, 'method.detail')) {
    const pre = li.querySelector(':scope > pre');
    if (!pre) continue;
    const sig = preToSignatureText(pre);
    const parsed = parseSignature(sig, false);
    const dl = li.querySelector(':scope > dl');
    const dlInfo = parseDl(dl);
    const blocks = memberBlocks(li);
    const { description, deprecated } = extractDescription(blocks);
    model.methods.push({
      static: parsed.modifiers.includes('static'),
      name: parsed.name,
      typeParams: parsed.typeParams,
      returnType: parsed.returnType ?? 'void',
      params: parsed.params.map((p) => ({
        type: p.type,
        name: p.name,
        doc: dlInfo.params.get(p.name),
      })),
      jsdoc: description || undefined,
      deprecated:
        deprecated !== undefined || parsed.isDeprecatedAnnotated ? deprecated || true : undefined,
      returnsDoc: dlInfo.returns,
      throws: dlInfo.throws,
      since: dlInfo.since,
    });
  }
}
