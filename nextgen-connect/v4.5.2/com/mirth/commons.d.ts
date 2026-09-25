// com.mirth.commons.* — shared utility/exception types.

declare namespace com {
  namespace mirth {
    namespace commons {
      namespace encryption {
        /**
         * Exception thrown when encryption or decryption fails.
         */
        class EncryptionException extends java.lang.Exception {
          constructor();
          constructor(message: JString);
          constructor(cause: java.lang.Throwable);
          constructor(message: JString, cause: java.lang.Throwable);
        }
      }
    }
  }
}
