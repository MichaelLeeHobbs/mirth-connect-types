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
    const Key: JavaInterface<Key>;

    /** A storage facility for keys and certificates (JKS, PKCS12). */
    class KeyStore extends java.lang.Object {
      /** Returns a keystore of the type, e.g. "PKCS12" or "JKS". */
      static getInstance(type: JString): KeyStore;
      static getDefaultType(): java.lang.String;

      /** Loads the keystore; pass `null` for both to create an empty one. */
      load(stream: java.io.InputStream | null, password: JCharacter[] | null): void;
      getKey(alias: JString, password: JCharacter[]): Key | null;
      containsAlias(alias: JString): boolean;
      size(): int;
      getType(): java.lang.String;
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
      const AlgorithmParameterSpec: JavaInterface<AlgorithmParameterSpec>;

      /** Marker interface for key specifications. */
      interface KeySpec {}
      const KeySpec: JavaInterface<KeySpec>;
    }
  }
}
