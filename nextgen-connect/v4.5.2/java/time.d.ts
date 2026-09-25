// java.time.* — the core date/time types channel scripts use for time zones and formatting.

declare namespace java {
  namespace time {
    /** An instantaneous point on the UTC time-line. */
    class Instant extends java.lang.Object implements java.time.temporal.TemporalAccessor {
      static now(): Instant;
      static ofEpochMilli(epochMilli: long): Instant;
      static ofEpochSecond(epochSecond: long): Instant;
      /** Parses an ISO-8601 instant such as `2026-09-24T16:00:00Z`. */
      static parse(text: JString): Instant;

      toEpochMilli(): long;
      getEpochSecond(): long;
      atZone(zone: ZoneId): ZonedDateTime;
      plusSeconds(seconds: long): Instant;
      plusMillis(millis: long): Instant;
      minusSeconds(seconds: long): Instant;
      minusMillis(millis: long): Instant;
      isBefore(other: Instant): boolean;
      isAfter(other: Instant): boolean;
      toString(): string;
    }

    /** A time-zone ID such as `America/New_York`, with the rules for its offsets. */
    class ZoneId extends java.lang.Object {
      static of(zoneId: JString): ZoneId;
      static systemDefault(): ZoneId;
      /** Wraps an offset in a region-style ID, e.g. `ofOffset('UTC', ZoneOffset.UTC)`. */
      static ofOffset(prefix: JString, offset: ZoneOffset): ZoneId;

      getId(): java.lang.String;
      getRules(): java.time.zone.ZoneRules;
      /** Returns a display name such as `ET` (`TextStyle.SHORT`) or `Eastern Time` (`TextStyle.FULL`). */
      getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): java.lang.String;
      toString(): string;
    }

    /** A fixed offset from UTC, such as `-05:00`. */
    class ZoneOffset extends ZoneId {
      static readonly UTC: ZoneOffset;
      static of(offsetId: JString): ZoneOffset;
      static ofHours(hours: int): ZoneOffset;

      getTotalSeconds(): int;
    }

    /** A date without a time or zone, such as `2026-09-24`. */
    class LocalDate extends java.lang.Object implements java.time.temporal.TemporalAccessor {
      static now(): LocalDate;
      static now(zone: ZoneId): LocalDate;
      static of(year: int, month: int, dayOfMonth: int): LocalDate;
      static parse(text: JString): LocalDate;
      static parse(text: JString, formatter: java.time.format.DateTimeFormatter): LocalDate;

      format(formatter: java.time.format.DateTimeFormatter): java.lang.String;
      atStartOfDay(zone: ZoneId): ZonedDateTime;
      plusDays(days: long): LocalDate;
      minusDays(days: long): LocalDate;
      plusMonths(months: long): LocalDate;
      minusMonths(months: long): LocalDate;
      getYear(): int;
      getMonthValue(): int;
      getDayOfMonth(): int;
      isBefore(other: LocalDate): boolean;
      isAfter(other: LocalDate): boolean;
      toString(): string;
    }

    /** A date and time without a zone, such as `2026-09-24T12:00`. */
    class LocalDateTime extends java.lang.Object implements java.time.temporal.TemporalAccessor {
      static now(): LocalDateTime;
      static now(zone: ZoneId): LocalDateTime;
      static of(year: int, month: int, dayOfMonth: int, hour: int, minute: int): LocalDateTime;
      static of(
        year: int,
        month: int,
        dayOfMonth: int,
        hour: int,
        minute: int,
        second: int,
      ): LocalDateTime;
      static parse(text: JString): LocalDateTime;
      static parse(text: JString, formatter: java.time.format.DateTimeFormatter): LocalDateTime;

      /** Combines this date-time with a zone, interpreting it as local time there. */
      atZone(zone: ZoneId): ZonedDateTime;
      format(formatter: java.time.format.DateTimeFormatter): java.lang.String;
      toLocalDate(): LocalDate;
      plusDays(days: long): LocalDateTime;
      plusHours(hours: long): LocalDateTime;
      plusMinutes(minutes: long): LocalDateTime;
      plusSeconds(seconds: long): LocalDateTime;
      minusDays(days: long): LocalDateTime;
      minusHours(hours: long): LocalDateTime;
      minusMinutes(minutes: long): LocalDateTime;
      minusSeconds(seconds: long): LocalDateTime;
      getYear(): int;
      getMonthValue(): int;
      getDayOfMonth(): int;
      getHour(): int;
      getMinute(): int;
      getSecond(): int;
      isBefore(other: LocalDateTime): boolean;
      isAfter(other: LocalDateTime): boolean;
      toString(): string;
    }

    /** A date and time in a time zone, such as `2026-09-24T12:00-04:00[America/New_York]`. */
    class ZonedDateTime extends java.lang.Object implements java.time.temporal.TemporalAccessor {
      static now(): ZonedDateTime;
      static now(zone: ZoneId): ZonedDateTime;
      static ofInstant(instant: Instant, zone: ZoneId): ZonedDateTime;
      static of(localDateTime: LocalDateTime, zone: ZoneId): ZonedDateTime;
      static parse(text: JString): ZonedDateTime;
      static parse(text: JString, formatter: java.time.format.DateTimeFormatter): ZonedDateTime;

      /** Returns the same instant expressed in another zone. */
      withZoneSameInstant(zone: ZoneId): ZonedDateTime;
      /** Returns the same local date-time in another zone (a different instant). */
      withZoneSameLocal(zone: ZoneId): ZonedDateTime;
      getZone(): ZoneId;
      getOffset(): ZoneOffset;
      toInstant(): Instant;
      toEpochSecond(): long;
      toLocalDateTime(): LocalDateTime;
      toLocalDate(): LocalDate;
      format(formatter: java.time.format.DateTimeFormatter): java.lang.String;
      plusDays(days: long): ZonedDateTime;
      plusHours(hours: long): ZonedDateTime;
      plusMinutes(minutes: long): ZonedDateTime;
      minusDays(days: long): ZonedDateTime;
      minusHours(hours: long): ZonedDateTime;
      minusMinutes(minutes: long): ZonedDateTime;
      getYear(): int;
      getMonthValue(): int;
      getDayOfMonth(): int;
      getHour(): int;
      getMinute(): int;
      getSecond(): int;
      isBefore(other: ZonedDateTime): boolean;
      isAfter(other: ZonedDateTime): boolean;
      toString(): string;
    }

    namespace zone {
      /** The offset rules of a time zone. */
      class ZoneRules extends java.lang.Object {
        /** Whether daylight saving time is in effect at the instant. */
        isDaylightSavings(instant: Instant): boolean;
        getOffset(instant: Instant): ZoneOffset;
      }
    }

    namespace format {
      /** Formats and parses date-time text. */
      class DateTimeFormatter extends java.lang.Object {
        /** Creates a formatter from a pattern such as `yyyyMMddHHmmss`. */
        static ofPattern(pattern: JString): DateTimeFormatter;
        static ofPattern(pattern: JString, locale: java.util.Locale): DateTimeFormatter;

        static readonly ISO_LOCAL_DATE: DateTimeFormatter;
        static readonly ISO_LOCAL_DATE_TIME: DateTimeFormatter;
        static readonly ISO_OFFSET_DATE_TIME: DateTimeFormatter;
        static readonly ISO_ZONED_DATE_TIME: DateTimeFormatter;
        static readonly ISO_INSTANT: DateTimeFormatter;

        format(temporal: java.time.temporal.TemporalAccessor): java.lang.String;
        withZone(zone: ZoneId): DateTimeFormatter;
      }

      /** The length of a text representation, e.g. for `ZoneId#getDisplayName`. */
      class TextStyle extends java.lang.Object {
        static readonly FULL: TextStyle;
        static readonly FULL_STANDALONE: TextStyle;
        static readonly SHORT: TextStyle;
        static readonly SHORT_STANDALONE: TextStyle;
        static readonly NARROW: TextStyle;
        static readonly NARROW_STANDALONE: TextStyle;
      }
    }

    namespace temporal {
      /** Read access to a date/time object; what `DateTimeFormatter#format` accepts. */
      interface TemporalAccessor {}
    }
  }
}
