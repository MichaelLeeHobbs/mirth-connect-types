// java.text.* — date formatting and Unicode normalization.

declare namespace java {
  namespace text {
    /** Formats and parses dates with a pattern such as `yyyy-MM-dd HH:mm:ss`. */
    class SimpleDateFormat extends java.lang.Object {
      constructor(pattern: JString);
      constructor(pattern: JString, locale: java.util.Locale);

      format(date: java.util.Date): java.lang.String;
      /** Parses text into a date; throws `ParseException` if it doesn't match. */
      parse(source: JString): java.util.Date;
      /** With `false`, rejects out-of-range fields instead of rolling them over. */
      setLenient(lenient: boolean): void;
      toPattern(): java.lang.String;
    }

    /** Unicode normalization, e.g. NFKD to strip accents. */
    class Normalizer extends java.lang.Object {
      static normalize(src: JCharSequence, form: Normalizer.Form): java.lang.String;
      static isNormalized(src: JCharSequence, form: Normalizer.Form): boolean;
    }
    namespace Normalizer {
      class Form extends java.lang.Object {
        static readonly NFC: Form;
        static readonly NFD: Form;
        static readonly NFKC: Form;
        static readonly NFKD: Form;
      }
    }
  }
}
