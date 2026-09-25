// javax.crypto.* — ciphers, MACs, and secret keys, as channel scripts use them for AES and HMAC.

declare namespace javax {
  namespace crypto {
    /** A secret (symmetric) key. */
    interface SecretKey extends java.security.Key {}
    const SecretKey: JavaInterface<SecretKey>;

    /**
     * A cipher for encryption and decryption.
     *
     * @example
     * var cipher = javax.crypto.Cipher.getInstance('AES/GCM/NoPadding');
     * var key = new javax.crypto.spec.SecretKeySpec(keyBytes, 'AES');
     * cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, new javax.crypto.spec.GCMParameterSpec(128, iv));
     * var ciphertext = cipher.doFinal(new java.lang.String(plain).getBytes('UTF-8'));
     */
    class Cipher extends java.lang.Object {
      static readonly ENCRYPT_MODE: int;
      static readonly DECRYPT_MODE: int;
      static readonly WRAP_MODE: int;
      static readonly UNWRAP_MODE: int;

      /** Returns a Cipher for the transformation, e.g. "AES/CBC/PKCS5Padding". */
      static getInstance(transformation: JString): Cipher;

      /** Initializes this cipher with a key. */
      init(opmode: int, key: java.security.Key): void;
      init(opmode: int, key: java.security.Key, random: java.security.SecureRandom): void;
      /** Initializes this cipher with a key and parameters such as an IV. */
      init(
        opmode: int,
        key: java.security.Key,
        params: java.security.spec.AlgorithmParameterSpec,
      ): void;
      init(
        opmode: int,
        key: java.security.Key,
        params: java.security.spec.AlgorithmParameterSpec,
        random: java.security.SecureRandom,
      ): void;

      /** Continues a multi-part operation; returns the output so far, or null. */
      update(input: byte[]): byte[] | null;
      update(input: byte[], inputOffset: int, inputLen: int): byte[] | null;

      /** Supplies additional authenticated data (AEAD modes such as GCM). */
      updateAAD(src: byte[]): void;

      /** Finishes the operation and returns the result. */
      doFinal(): byte[];
      doFinal(input: byte[]): byte[];
      doFinal(input: byte[], inputOffset: int, inputLen: int): byte[];

      /** Returns the initialization vector, or null. */
      getIV(): byte[] | null;

      /** Returns the block size in bytes. */
      getBlockSize(): int;

      /** Returns the transformation this cipher was created with. */
      getAlgorithm(): java.lang.String;
    }

    /** A message authentication code (e.g. "HmacSHA256"). */
    class Mac extends java.lang.Object {
      static getInstance(algorithm: JString): Mac;

      init(key: java.security.Key): void;
      init(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec): void;

      update(input: byte[]): void;
      update(input: byte[], offset: int, len: int): void;

      doFinal(): byte[];
      doFinal(input: byte[]): byte[];

      getMacLength(): int;
      getAlgorithm(): java.lang.String;
    }

    /** Converts key specifications (e.g. `PBEKeySpec`) into secret keys. */
    class SecretKeyFactory extends java.lang.Object {
      /** Returns a factory for the algorithm, e.g. "PBKDF2WithHmacSHA256". */
      static getInstance(algorithm: JString): SecretKeyFactory;

      generateSecret(keySpec: java.security.spec.KeySpec): SecretKey;

      getAlgorithm(): java.lang.String;
    }

    /** Generates random secret keys. */
    class KeyGenerator extends java.lang.Object {
      static getInstance(algorithm: JString): KeyGenerator;

      init(keysize: int): void;
      init(keysize: int, random: java.security.SecureRandom): void;

      generateKey(): SecretKey;

      getAlgorithm(): java.lang.String;
    }

    namespace spec {
      /** A secret key built from raw bytes. */
      class SecretKeySpec
        extends java.lang.Object
        implements java.security.spec.KeySpec, javax.crypto.SecretKey
      {
        constructor(key: byte[], algorithm: JString);
        constructor(key: byte[], offset: int, len: int, algorithm: JString);

        getAlgorithm(): java.lang.String;
        getFormat(): java.lang.String;
        getEncoded(): byte[];
      }

      /** An initialization vector (e.g. for CBC mode). */
      class IvParameterSpec
        extends java.lang.Object
        implements java.security.spec.AlgorithmParameterSpec
      {
        constructor(iv: byte[]);
        constructor(iv: byte[], offset: int, len: int);

        getIV(): byte[];
      }

      /** GCM parameters: the authentication tag length in bits and the IV. */
      class GCMParameterSpec
        extends java.lang.Object
        implements java.security.spec.AlgorithmParameterSpec
      {
        constructor(tLen: int, src: byte[]);
        constructor(tLen: int, src: byte[], offset: int, len: int);

        getTLen(): int;
        getIV(): byte[];
      }

      /** Password-based key derivation input (e.g. for PBKDF2). */
      class PBEKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
        constructor(password: JCharacter[]);
        constructor(password: JCharacter[], salt: byte[], iterationCount: int);
        constructor(password: JCharacter[], salt: byte[], iterationCount: int, keyLength: int);

        getPassword(): char[];
        getSalt(): byte[] | null;
        getIterationCount(): int;
        getKeyLength(): int;

        /** Clears the internal copy of the password. */
        clearPassword(): void;
      }
    }
  }
}
