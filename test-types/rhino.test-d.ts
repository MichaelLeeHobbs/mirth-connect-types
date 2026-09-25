/**
 * Rhino top-level objects, scope built-ins, and JDK classes that real channel code uses. Each
 * call below runs on Mirth 4.5.2 (Rhino 1.7.13, `rhino.languageversion = es6`).
 */

// Packages mirrors the top-level Java packages; third-party packages resolve as any.
const list = new Packages.java.util.ArrayList();
list.add('x');
const isList: boolean = list instanceof Packages.java.util.ArrayList;
const entityUtils = Packages.org.apache.http.util.EntityUtils;
const hapi = Packages.ca.uhn.hl7v2;
// ...and works as a type, as in JSDoc `@param {Packages.java.util.ArrayList} list`.
const typedList: Packages.java.util.ArrayList<string> = new java.util.ArrayList<string>();

// JavaAdapter implements a Java interface, with or without `new`.
const task = new JavaAdapter(java.lang.Runnable, { run() {} });
importPackage(Packages.java.util.concurrent);

// JSON.parse accepts a Java string return without String(...).
const parsedJavaString: unknown = JSON.parse(XmlUtil.toJson('<a/>'));

// E4X lists: children() is an XMLList, which appendChild accepts and which indexes to XML.
const doc = new XML('<a/>');
const kids = new XML('<z><b/><c/></z>').children();
doc.appendChild(kids);
const first: XML = kids[0];
const kidCount: number = kids.length();

// Scope built-ins.
const line = reader.readLine();
const attachment = getAttachment('attachment-id', true);
const otherAttachment = getAttachment('channel-id', 42, 'attachment-id');

// Making a real byte[] and copying into it.
const src = new java.lang.String('abcd').getBytes();
const dest = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 2);
java.lang.System.arraycopy(src, 1, dest, 0, 2);
const slice: number[] = java.util.Arrays.copyOfRange(src, 0, 2);
const b64 = String(java.util.Base64.getEncoder().encodeToString(src));
const raw: number[] = java.util.Base64.getDecoder().decode(b64);
const uuid = String(java.util.UUID.randomUUID());

// java.time, including the destructuring style from real code.
const {
  LocalDateTime,
  ZoneId,
  format: { DateTimeFormatter, TextStyle },
} = java.time;
const zdt = LocalDateTime.parse('20260924120000', DateTimeFormatter.ofPattern('yyyyMMddHHmmss'))
  .atZone(ZoneId.of('America/New_York'))
  .withZoneSameInstant(ZoneId.of('UTC'));
const dst: boolean = zdt.getZone().getRules().isDaylightSavings(zdt.toInstant());
const abbrev = String(zdt.getZone().getDisplayName(TextStyle.SHORT, java.util.Locale.US));
const stamp = java.time.ZonedDateTime.ofInstant(
  java.time.Instant.ofEpochMilli(Date.now()),
  ZoneId.of('UTC'),
);

const utc = ZoneId.ofOffset('UTC', java.time.ZoneOffset.UTC);

// java.text and java.security, as used for mTLS client certificates.
const ascii = String(java.text.Normalizer.normalize('é', java.text.Normalizer.Form.NFKD));
const stampText = new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(
  new java.util.Date(),
);
const keyStore = java.security.KeyStore.getInstance('PKCS12');
const certStream = new java.io.FileInputStream('/opt/certs/client.p12');
keyStore.load(certStream, new java.lang.String('secret').toCharArray());
certStream.close();

// E4X settings and full markup.
const savedSettings = XML.settings();
XML.prettyPrinting = false;
const markup: string = new XML('<a><b/></a>').toXMLString();
XML.setSettings(savedSettings);

// Retry back-off and the stack-trace-to-string idiom.
java.lang.Thread.sleep(250);
const sw = new java.io.StringWriter();
new java.lang.Exception('boom').printStackTrace(new java.io.PrintWriter(sw));
const trace = String(sw.toString());

// Mirth internals are untyped instead of errors, bare or through Packages.
const controllers = com.mirth.connect.server.controllers.ControllerFactory.getFactory();
const xmlSerializer = Packages.com.mirth.connect.model.converters.ObjectXMLSerializer.getInstance();
// ...while the declared types under those packages still resolve.
declare const typedSerializer: com.mirth.connect.model.converters.IMessageSerializer;

// Calendar arithmetic.
const cal = java.util.Calendar.getInstance();
cal.add(java.util.Calendar.SECOND, -5);

void isList;
void entityUtils;
void markup;
void trace;
void controllers;
void xmlSerializer;
void typedSerializer;
void hapi;
void typedList;
void utc;
void ascii;
void stampText;
void task;
void parsedJavaString;
void first;
void kidCount;
void line;
void attachment;
void otherAttachment;
void slice;
void raw;
void uuid;
void dst;
void abbrev;
void stamp;
