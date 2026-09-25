// Rhino top-level objects available in every Mirth script scope (Mirth builds it on Rhino's
// ImporterTopLevel), plus how Rhino's JS built-ins accept Java values.

/**
 * Rhino's root of all Java packages. `Packages.java` is the same object as `java`, and it works in
 * JSDoc types too (`@param {Packages.java.util.ArrayList} list`). Third-party top-level packages
 * on Mirth's classpath (`Packages.org.apache.http…`, `Packages.ca.uhn.hl7v2…`) are `any`. For
 * another top-level name, merge it in from your own `.d.ts`:
 * `declare namespace Packages { const au: any; }`.
 */
declare namespace Packages {
  export import java = globalThis.java;
  export import javax = globalThis.javax;
  export import com = globalThis.com;
  const org: any;
  const ca: any;
  const edu: any;
  const net: any;
  const io: any;
}

/**
 * Implements Java interfaces (or extends a Java class) with a JS object, with or without `new`.
 *
 * @example
 * var task = new JavaAdapter(java.lang.Runnable, { run: function () { logger.info('ran'); } });
 */
declare var JavaAdapter: {
  new (...javaTypesThenImplementation: any[]): any;
  (...javaTypesThenImplementation: any[]): any;
};

/** Makes every class in the given Java packages available by simple name in this scope. */
declare function importPackage(...javaPackages: any[]): void;

/**
 * Makes a Java class available by simple name.
 *
 * @deprecated Mirth logs an error when this is called. Use `importPackage` or the
 * fully-qualified class name.
 */
declare function importClass(...javaClasses: any[]): void;

/** Rhino's `JSON.parse` converts a Java string argument to a JS string first. */
interface JSON {
  parse(text: JString, reviver?: (this: any, key: string, value: any) => any): any;
}

/**
 * An E4X list of XML nodes, as returned by `children()`, `elements()`, and `descendants()`.
 * Index it for a single node (`list[0]`); a one-item list also supports the `XML` methods.
 */
interface XMLList extends XML {
  [index: number]: XML;
}

declare var XMLList: {
  new (value?: JString | XML | XMLList): XMLList;
  prototype: XMLList;
};
