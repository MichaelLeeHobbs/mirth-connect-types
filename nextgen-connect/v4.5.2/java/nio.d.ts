// java.nio.* — charset types.

declare namespace java {
  namespace nio {
    namespace charset {
      /** A named mapping between sequences of sixteen-bit Unicode code units and sequences of bytes. */
      class Charset extends java.lang.Object {
        static defaultCharset(): Charset;

        static forName(charsetName: java.lang.String): Charset;

        name(): java.lang.String;

        displayName(): java.lang.String;

        toString(): string;
      }
    }
  }
}
