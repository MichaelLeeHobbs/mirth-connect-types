// java.security.* — the key and parameter types javax.crypto builds on.

declare namespace java {
  namespace security {
    /** The top-level interface for all keys. */
    interface Key extends java.io.Serializable {
      /** Returns the standard algorithm name for this key, e.g. "AES". */
      getAlgorithm(): java.lang.String;

      /** Returns the name of the primary encoding format of this key, or null. */
      getFormat(): java.lang.String | null;

      /** Returns the key in its primary encoding format, or null. */
      getEncoded(): byte[] | null;
    }

    /** A cryptographically strong random number generator. */
    class SecureRandom extends java.lang.Object {
      constructor();
      constructor(seed: byte[]);

      /** Returns a SecureRandom implementing the named algorithm, e.g. "SHA1PRNG". */
      static getInstance(algorithm: JString): SecureRandom;

      /** Returns a SecureRandom using a strong algorithm. */
      static getInstanceStrong(): SecureRandom;

      /** Fills `bytes` with random bytes. */
      nextBytes(bytes: byte[]): void;

      /** Returns a random int. */
      nextInt(): int;

      /** Returns a random int between 0 (inclusive) and `bound` (exclusive). */
      nextInt(bound: int): int;
    }

    namespace spec {
      /** Marker interface for cryptographic parameter specifications. */
      interface AlgorithmParameterSpec {}

      /** Marker interface for key specifications. */
      interface KeySpec {}
    }
  }
}
