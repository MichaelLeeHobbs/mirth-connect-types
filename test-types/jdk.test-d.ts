/**
 * JDK classes channel scripts use directly, and the shapes Rhino returns for Java primitives.
 * Each call below runs on Mirth 4.5.2 (Rhino 1.7.13, Java 17).
 */

// Java byte[] and char[] come back as arrays of JS numbers; char comes back as a number.
const keyBytes: number[] = new java.lang.String('0123456789abcdef').getBytes('UTF-8');
const chars: number[] = new java.lang.String('pw').toCharArray();
const code: number = new java.lang.String('ab').charAt(1);

// javax.crypto: AES-GCM and PBKDF2.
const cipher = javax.crypto.Cipher.getInstance('AES/GCM/NoPadding');
const key = new javax.crypto.spec.SecretKeySpec(keyBytes, 'AES');
cipher.init(
  javax.crypto.Cipher.ENCRYPT_MODE,
  key,
  new javax.crypto.spec.GCMParameterSpec(128, keyBytes),
);
const sealed: number[] = cipher.doFinal(keyBytes);
const spec = new javax.crypto.spec.PBEKeySpec(chars, keyBytes, 1000, 256);
const derived = javax.crypto.SecretKeyFactory.getInstance('PBKDF2WithHmacSHA1')
  .generateSecret(spec)
  .getEncoded();

// javax.xml.bind ships with Mirth (jaxb-api), not the JDK.
const hex = String(javax.xml.bind.DatatypeConverter.printHexBinary(keyBytes));
const unhex: number[] = javax.xml.bind.DatatypeConverter.parseHexBinary(hex);

// java.util.Properties is a Hashtable, so put/get take any key and value (JSch config).
const config = new java.util.Properties();
config.put('StrictHostKeyChecking', 'no');

// In-memory streams.
const input = new java.io.ByteArrayInputStream(keyBytes);
const output = new java.io.ByteArrayOutputStream();
output.write(keyBytes);
const copied: number[] = output.toByteArray();

// StringBuffer.append with a JS string.
new java.lang.StringBuffer().append(String(' a ').trim());

// msg/tmp depend on the channel data type (XML, JSON, or raw text), so any property is allowed.
const messageDate: unknown = msg.messageDT;
msg = ['reprocess-event'];
tmp = msg;

void code;
void sealed;
void derived;
void unhex;
void input;
void copied;
void messageDate;
