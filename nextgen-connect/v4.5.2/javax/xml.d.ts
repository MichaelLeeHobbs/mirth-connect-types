// javax.xml.bind.* — not part of the JDK since Java 11. Mirth 4.5.2 ships it in
// server-lib/javax/jaxb/jaxb-api-2.4.0, which is why channel scripts can use it.

declare namespace javax {
  namespace xml {
    namespace bind {
      /** Static converters between Java values and their XML Schema lexical forms. */
      class DatatypeConverter extends java.lang.Object {
        /** Encodes bytes as an uppercase hex string. */
        static printHexBinary(val: byte[]): java.lang.String;

        /** Decodes a hex string into bytes. */
        static parseHexBinary(lexicalXSDHexBinary: JString): byte[];

        /** Encodes bytes as Base64. */
        static printBase64Binary(val: byte[]): java.lang.String;

        /** Decodes a Base64 string into bytes. */
        static parseBase64Binary(lexicalXSDBase64Binary: JString): byte[];
      }
    }
  }
}
