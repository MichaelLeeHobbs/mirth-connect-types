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
          constructor(message: java.lang.String);
          constructor(cause: java.lang.Throwable);
          constructor(message: java.lang.String, cause: java.lang.Throwable);
        }
      }
    }
  }
}
