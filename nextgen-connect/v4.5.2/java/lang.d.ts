// java.lang.* — core language types: Object, String, primitives wrappers, etc.

declare namespace java {
  namespace lang {
    /**
     * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html
     */
    interface CharSequence {
      /** Returns the char value at the specified index. */
      charAt(index: java.lang.Integer): java.lang.Character;

      /** Returns a stream of int zero-extending the char values from this sequence. */
      chars?(): java.util.stream.IntStream;

      /** Returns a stream of code point values from this sequence. */
      codePoints?(): java.util.stream.IntStream;

      /** Returns the length of this character sequence. */
      length(): java.lang.Integer;

      /** Returns a CharSequence that is a subsequence of this sequence. */
      subSequence(start: java.lang.Integer, end: java.lang.Integer): CharSequence;

      /** Returns a string containing the characters in this sequence in the same order as this sequence. */
      toString(): string;
    }

    interface Comparable<T> {
      /**
       * Compares this object with the specified object for order. Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.
       * @param o the object to be compared
       * @throws NullPointerException if the specified object is null
       */
      compareTo(o: T): int;
    }

    interface ConstantDesc {
      /** Resolves this descriptor reflectively. */
      resolveConstantDesc?(lookup: any): java.lang.Object;
    }

    interface Constable {
      describeConstable?<T extends ConstantDesc>(): T | undefined;
    }

    /** Implementing this interface allows an object to be the target of the "for-each loop" statement. */
    interface Iterable<T> {
      iterator(): java.util.Iterator<T>;
    }

    /**
     * Instances of the class Class represent classes and interfaces in a running Java application.
     * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html
     */
    interface Class<T = any> {
      /** Returns the name of the entity represented by this Class object. */
      getName(): java.lang.String;

      /** Returns the simple name of the underlying class. */
      getSimpleName(): java.lang.String;

      /** Returns the canonical name of the underlying class. */
      getCanonicalName(): java.lang.String;

      /** Determines if the specified Object is assignment-compatible with the object represented by this Class. */
      isInstance(obj: java.lang.Object): boolean;

      /** Determines if the class or interface represented by this Class object is a superclass or superinterface of the class or interface represented by the specified Class parameter. */
      isAssignableFrom(cls: Class<any>): boolean;

      /** Determines if the specified Class object represents an interface type. */
      isInterface(): boolean;

      /** Determines if this Class object represents an array class. */
      isArray(): boolean;

      /** Determines if the specified Class object represents a primitive type. */
      isPrimitive(): boolean;

      /** Returns true if this class is an enum type. */
      isEnum(): boolean;

      /** Returns the Class representing the superclass of the entity represented by this Class. */
      getSuperclass(): Class<any> | null;

      /** Returns a string describing this Class. */
      toString(): string;
    }

    class Object {
      constructor();

      /** Creates and returns a copy of this object. */
      protected clone(): java.lang.Object;

      /** Indicates whether some other object is "equal to" this one. */
      equals(obj: java.lang.Object): boolean;

      /** Called by the garbage collector on an object when garbage collection determines that there are no more references to the object. */
      finalize(): void;

      /** Returns the runtime class of this Object. */
      getClass(): java.lang.Class;

      /** Returns a hash code value for the object. */
      hashCode(): int;

      /** Wakes up a single thread that is waiting on this object's monitor. */
      notify(): void;

      /** Wakes up all threads that are waiting on this object's monitor. */
      notifyAll(): void;

      /** Returns a string representation of the object. */
      toString(): string;

      /** Causes the current thread to wait until another thread invokes the notify() method or the notifyAll() method for this object. */
      wait(): void;
      /** Causes the current thread to wait until either another thread invokes the notify() method or the notifyAll() method for this object, or a specified amount of time has elapsed. */
      wait(timeout: long): void;
      /** Causes the current thread to wait until another thread invokes the notify() method or the notifyAll() method for this object, or some other thread interrupts the current thread, or a certain amount of real time has elapsed. */
      wait(timeout: long, nanos: int): void;
    }

    class Throwable extends java.lang.Object implements java.io.Serializable {
      constructor();
      constructor(message: java.lang.String);
      constructor(message: java.lang.String, cause: java.lang.Throwable);
      constructor(cause: java.lang.Throwable);

      /** Returns the detail message string of this throwable. */
      getMessage(): java.lang.String;
      /** Returns a localized description of this throwable. */
      getLocalizedMessage(): java.lang.String;
      /** Returns the cause of this throwable, or null if the cause is nonexistent or unknown. */
      getCause(): java.lang.Throwable;
      /** Initializes the cause of this throwable to the specified value. */
      initCause(cause: java.lang.Throwable): java.lang.Throwable;
      /** Provides programmatic access to the stack trace (an array of StackTraceElement). */
      getStackTrace(): java.lang.Object[];
      /** Prints this throwable and its backtrace to the standard error stream. */
      printStackTrace(): void;
    }

    class Exception extends java.lang.Throwable implements java.io.Serializable {
      constructor();
      constructor(message: java.lang.String);
      constructor(message: java.lang.String, cause: java.lang.Throwable);
      constructor(cause: java.lang.Throwable);
    }

    class String
      extends java.lang.Object
      implements java.io.Serializable, java.lang.CharSequence, Comparable<java.lang.String>
    {
      constructor();
      constructor(byteArray: Byte[]);
      constructor(byteArray: Byte[], charset: java.lang.String);
      constructor(ascii: Byte[], hibyte: java.lang.Integer);
      constructor(bytes: Byte[], offset: java.lang.Integer, length: java.lang.Integer);
      constructor(
        ascii: Byte[],
        hibyte: java.lang.Integer,
        offset: java.lang.Integer,
        count: java.lang.Integer,
      );
      constructor(
        bytes: Byte[],
        offset: java.lang.Integer,
        length: java.lang.Integer,
        charsetName: java.lang.String,
      );
      constructor(bytes: Byte[], charsetName: java.lang.String);
      constructor(chars: java.lang.Character[]);
      constructor(
        chars: java.lang.Character[],
        offset: java.lang.Integer,
        count: java.lang.Integer,
      );
      constructor(
        codePoints: java.lang.Integer[],
        offset: java.lang.Integer,
        count: java.lang.Integer,
      );
      constructor(original: java.lang.String);
      constructor(buffer: java.lang.StringBuffer);
      constructor(builder: java.lang.StringBuilder);

      /** Returns the JavaChar value at the specified index. */
      charAt(index: java.lang.Integer): java.lang.Character;

      /** Returns the character (Unicode code point) at the specified index. */
      codePointAt(index: java.lang.Integer): java.lang.Integer;

      /** Returns the character (Unicode code point) before the specified index.*/
      codePointBefore(index: java.lang.Integer): java.lang.Integer;

      /** Returns the number of Unicode code points in the specified text range of this String. */
      codePointCount(beginIndex: java.lang.Integer, endIndex: java.lang.Integer): java.lang.Integer;

      /** Compares two strings lexicographically. */
      compareTo(anotherString: String): int;

      /** Compares two strings lexicographically, ignoring case differences.*/
      compareToIgnoreCase(str: String): java.lang.Integer;

      /** Concatenates the specified string to the end of this string. */
      concat(str: String): String;

      /** Returns true if and only if this string contains the specified sequence of JavaChar values. */
      contains(s: CharSequence): java.lang.Boolean;

      /** Compares this string to the specified CharSequence. */
      contentEquals(cs: CharSequence): java.lang.Boolean;
      /** Compares this string to the specified StringBuffer.*/
      contentEquals(sb: java.lang.StringBuffer): java.lang.Boolean;

      /** Equivalent to valueOf(JavaChar[]). */
      static copyValueOf(data: java.lang.Character[]): java.lang.String;
      /** Equivalent to valueOf(JavaChar[], JavaInteger, JavaInteger). */
      static copyValueOf(
        data: java.lang.Character[],
        offset: java.lang.Integer,
        count: java.lang.Integer,
      ): java.lang.String;

      /** Tests if this string ends with the specified suffix.*/
      endsWith(suffix: String): java.lang.Boolean;

      /** Compares this string to the specified object.*/
      equals(anObject: Object): boolean;

      /** Compares this String to another String, ignoring case considerations. */
      equalsIgnoreCase(anotherString: String): java.lang.Boolean;

      /** Returns a formatted string using the specified locale, format string, and arguments. */
      static format(
        l: java.util.Locale,
        format: java.lang.String,
        ...args: any[]
      ): java.lang.String;
      /** Returns a formatted string using the specified format string and arguments. */
      static format(format: java.lang.String, ...args: any[]): java.lang.String;

      /** Encodes this String into a sequence of bytes using the platform's default charset, storing the result into a new byte array. */
      getBytes(): Byte[];
      /** Encodes this String into a sequence of bytes using the given charset, storing the result into a new byte array. */
      getBytes(charset: java.nio.charset.Charset): Byte[];
      /** Deprecated. This method does not properly convert characters into bytes. As of JDK 1.1, the preferred way to do this is via the getBytes() method, which uses the platform's default charset. */
      getBytes(
        srcBegin: java.lang.Integer,
        srcEnd: java.lang.Integer,
        dst: Byte[],
        dstBegin: java.lang.Integer,
      ): void;
      /** Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array. */
      getBytes(charsetName: java.lang.String): Byte[];

      /** Copies characters from this string into the destination character array. */
      getChars(
        srcBegin: java.lang.Integer,
        srcEnd: java.lang.Integer,
        dst: java.lang.Character[],
        dstBegin: java.lang.Integer,
      ): void;

      /** Returns a hash code for this string. */
      hashCode(): int;

      /** Returns the index within this string of the first occurrence of the specified character. */
      indexOf(ch: java.lang.Integer): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified character, starting the search at the specified index. */
      indexOf(ch: java.lang.Integer, fromIndex: java.lang.Integer): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified substring. */
      indexOf(str: String): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified substring, starting at the specified index. */
      indexOf(str: String, fromIndex: java.lang.Integer): java.lang.Integer;

      /** Returns a canonical representation for the string object. */
      intern(): java.lang.String;

      /** Returns true if, and only if, length() is 0. */
      isEmpty(): java.lang.Boolean;

      /** Returns a new String composed of copies of the CharSequence elements joined together with a copy of the specified delimiter. */
      static join(delimiter: CharSequence, ...elements: CharSequence[]): java.lang.String;
      /** Returns a new String composed of copies of the CharSequence elements joined together with a copy of the specified delimiter. */
      static join(delimiter: CharSequence, elements: java.lang.String[]): java.lang.String;

      /** Returns the index within this string of the last occurrence of the specified character. */
      lastIndexOf(ch: java.lang.Integer): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified character, searching backward starting at the specified index. */
      lastIndexOf(ch: java.lang.Integer, fromIndex: java.lang.Integer): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified substring. */
      lastIndexOf(str: String): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index. */
      lastIndexOf(str: String, fromIndex: java.lang.Integer): java.lang.Integer;

      /** Returns the length of this string. */
      length(): java.lang.Integer;

      /** Tells whether or not this string matches the given regular expression. */
      matches(regex: String): java.lang.Boolean;

      /** Returns the index within this String that is offset from the given index by codePointOffset code points. */
      offsetByCodePoints(
        index: java.lang.Integer,
        codePointOffset: java.lang.Integer,
      ): java.lang.Integer;

      /** Tests if two string regions are equal. */
      regionMatches(
        ignoreCase: java.lang.Boolean,
        toffset: java.lang.Integer,
        other: String,
        ooffset: java.lang.Integer,
        len: java.lang.Integer,
      ): java.lang.Boolean;
      /** Tests if two string regions are equal. */
      regionMatches(
        toffset: java.lang.Integer,
        other: String,
        ooffset: java.lang.Integer,
        len: java.lang.Integer,
      ): java.lang.Boolean;

      /** Returns a string resulting from replacing all occurrences of oldChar in this string with newChar. */
      replace(oldChar: java.lang.Character, newChar: java.lang.Character): String;
      /** Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence. */
      replace(target: CharSequence, replacement: CharSequence): String;

      /** Replaces each substring of this string that matches the given regular expression with the given replacement. */
      replaceAll(regex: String, replacement: String): String;

      /** Replaces the first substring of this string that matches the given regular expression with the given replacement. */
      replaceFirst(regex: String, replacement: String): String;

      /** Splits this string around matches of the given regular expression. */
      split(regex: java.lang.String): java.lang.String[];
      /** Splits this string around matches of the given regular expression. */
      split(regex: java.lang.String, limit: java.lang.Integer): java.lang.String[];

      /** Tests if this string starts with the specified prefix. */
      startsWith(prefix: String): java.lang.Boolean;
      /** Tests if the substring of this string beginning at the specified index starts with the specified prefix. */
      startsWith(prefix: String, toffset: java.lang.Integer): java.lang.Boolean;

      /** Returns a character sequence that is a subsequence of this sequence. */
      subSequence(beginIndex: java.lang.Integer, endIndex: java.lang.Integer): CharSequence;

      /** Returns a string that is a substring of this string. */
      substring(beginIndex: java.lang.Integer): String;
      /** Returns a string that is a substring of this string. */
      substring(beginIndex: java.lang.Integer, endIndex: java.lang.Integer): String;

      /** Converts this string to a new character array. */
      toCharArray(): java.lang.Character[];

      /** Converts all of the characters in this String to lower case using the rules of the default locale. */
      toLowerCase(): java.lang.String;
      /** Converts all of the characters in this String to lower case using the rules of the given Locale. */
      toLowerCase(locale: java.util.Locale): java.lang.String;

      /** This object (which is already a string!) is itself returned. */
      toString(): string;

      /** Converts all of the characters in this String to upper case using the rules of the default locale. */
      toUpperCase(): java.lang.String;
      /** Converts all of the characters in this String to upper case using the rules of the given Locale. */
      toUpperCase(locale: java.util.Locale): java.lang.String;

      /** Returns a string whose value is this string, with any leading and trailing whitespace removed. */
      trim(): java.lang.String;

      /** Returns the string representation of the boolean argument. */
      static valueOf(b: boolean): java.lang.String;
      /** Returns the string representation of the JavaChar argument. */
      static valueOf(c: java.lang.Character): java.lang.String;
      /** Returns the string representation of the JavaChar array argument. */
      static valueOf(data: java.lang.Character[]): java.lang.String;
      /** Returns the string representation of a specific subarray of the JavaChar array argument. */
      static valueOf(
        data: java.lang.Character[],
        offset: java.lang.Integer,
        count: java.lang.Integer,
      ): java.lang.String;
      /** Returns the string representation of the double argument. */
      static valueOf(d: java.lang.Double): java.lang.String;
      /** Returns the string representation of the float argument. */
      static valueOf(f: java.lang.Float): java.lang.String;
      /** Returns the string representation of the JavaInteger argument. */
      static valueOf(i: java.lang.Integer): java.lang.String;
      /** Returns the string representation of the long argument. */
      static valueOf(l: java.lang.Long): java.lang.String;
      /** Returns the string representation of the Object argument. */
      static valueOf(obj: Object): java.lang.String;
    }

    /** A thread-safe, mutable sequence of characters. */
    class StringBuffer extends java.lang.Object implements java.io.Serializable, CharSequence {
      constructor();
      constructor(seq: CharSequence);
      constructor(capacity: java.lang.Integer);
      constructor(str: java.lang.String);

      append(s: java.lang.String): StringBuffer;
      append(c: java.lang.Character): StringBuffer;
      append(i: java.lang.Integer): StringBuffer;

      charAt(index: java.lang.Integer): java.lang.Character;

      length(): java.lang.Integer;

      subSequence(start: java.lang.Integer, end: java.lang.Integer): CharSequence;

      toString(): string;
    }

    /** A mutable sequence of characters (not thread-safe). */
    class StringBuilder extends java.lang.Object implements java.io.Serializable, CharSequence {
      constructor();
      constructor(seq: CharSequence);
      constructor(capacity: java.lang.Integer);
      constructor(str: java.lang.String);

      append(s: java.lang.String): StringBuilder;
      append(c: java.lang.Character): StringBuilder;
      append(i: java.lang.Integer): StringBuilder;

      charAt(index: java.lang.Integer): java.lang.Character;

      length(): java.lang.Integer;

      subSequence(start: java.lang.Integer, end: java.lang.Integer): CharSequence;

      toString(): string;
    }

    /** Wrapper class for primitive int. */
    class Integer extends java.lang.Object implements java.io.Serializable, Comparable<Integer> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: java.lang.String);

      byteValue(): Byte;

      compareTo(anotherInteger: java.lang.Integer): int;

      doubleValue(): Double;

      equals(obj: java.lang.Object): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseInt(s: java.lang.String): int;
      static parseInt(s: java.lang.String, radix: int): int;

      static valueOf(i: int): java.lang.Integer;
      static valueOf(s: java.lang.String): java.lang.Integer;
      static valueOf(s: java.lang.String, radix: int): java.lang.Integer;
    }

    /** Wrapper class for primitive long. */
    class Long extends java.lang.Object implements java.io.Serializable, Comparable<Long> {
      static MAX_VALUE: long;
      static MIN_VALUE: long;
      static SIZE: int;
      static BYTES: int;

      constructor(value: long);
      constructor(s: java.lang.String);

      byteValue(): Byte;

      compareTo(anotherLong: Long): int;

      doubleValue(): Double;

      equals(obj: java.lang.Object): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): long;

      shortValue(): Short;

      toString(): string;

      static parseLong(s: java.lang.String): long;
      static parseLong(s: java.lang.String, radix: int): long;

      static valueOf(l: long): Long;
      static valueOf(s: java.lang.String): Long;
      static valueOf(s: java.lang.String, radix: int): Long;
    }

    /** Wrapper class for primitive double. */
    class Double extends java.lang.Object implements java.io.Serializable, Comparable<Double> {
      static MAX_VALUE: number;
      static MIN_VALUE: number;
      static NaN: number;
      static NEGATIVE_INFINITY: number;
      static POSITIVE_INFINITY: number;
      static SIZE: int;
      static BYTES: int;

      constructor(value: number);
      constructor(s: java.lang.String);

      byteValue(): Byte;

      compareTo(anotherDouble: Double): int;

      doubleValue(): number;

      equals(obj: java.lang.Object): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      isInfinite(): boolean;

      isNaN(): boolean;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseDouble(s: java.lang.String): number;

      static valueOf(d: number): Double;
      static valueOf(s: java.lang.String): Double;
    }

    /** Wrapper class for primitive float. */
    class Float extends java.lang.Object implements java.io.Serializable, Comparable<Float> {
      static MAX_VALUE: number;
      static MIN_VALUE: number;
      static NaN: number;
      static NEGATIVE_INFINITY: number;
      static POSITIVE_INFINITY: number;
      static SIZE: int;
      static BYTES: int;

      constructor(value: number);
      constructor(s: java.lang.String);

      byteValue(): Byte;

      compareTo(anotherFloat: Float): int;

      doubleValue(): Double;

      equals(obj: java.lang.Object): boolean;

      floatValue(): number;

      hashCode(): int;

      intValue(): int;

      isInfinite(): boolean;

      isNaN(): boolean;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseFloat(s: java.lang.String): number;

      static valueOf(f: number): Float;
      static valueOf(s: java.lang.String): Float;
    }

    /** Wrapper class for primitive boolean. */
    class Boolean extends java.lang.Object implements java.io.Serializable, Comparable<Boolean> {
      static TRUE: Boolean;
      static FALSE: Boolean;

      constructor(value: boolean);
      constructor(s: java.lang.String);

      booleanValue(): boolean;

      compareTo(b: Boolean): int;

      equals(obj: java.lang.Object): boolean;

      hashCode(): int;

      toString(): string;

      static parseBoolean(s: java.lang.String): boolean;

      static valueOf(b: boolean): Boolean;
      static valueOf(s: java.lang.String): Boolean;
    }

    /** Wrapper class for primitive short. */
    class Short extends java.lang.Object implements java.io.Serializable, Comparable<Short> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: java.lang.String);

      byteValue(): Byte;

      compareTo(anotherShort: Short): int;

      doubleValue(): Double;

      equals(obj: java.lang.Object): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): int;

      toString(): string;

      static parseShort(s: java.lang.String): int;
      static parseShort(s: java.lang.String, radix: int): int;

      static valueOf(s: int): Short;
      static valueOf(s: java.lang.String): Short;
      static valueOf(s: java.lang.String, radix: int): Short;
    }

    /** Wrapper class for primitive byte. */
    class Byte extends java.lang.Object implements java.io.Serializable, Comparable<Byte> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: java.lang.String);

      byteValue(): int;

      compareTo(anotherByte: Byte): int;

      doubleValue(): Double;

      equals(obj: java.lang.Object): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseByte(s: java.lang.String): int;
      static parseByte(s: java.lang.String, radix: int): int;

      static valueOf(b: int): Byte;
      static valueOf(s: java.lang.String): Byte;
      static valueOf(s: java.lang.String, radix: int): Byte;
    }

    /** Wrapper class for primitive char. */
    class Character
      extends java.lang.Object
      implements java.io.Serializable, Comparable<Character>
    {
      static MAX_VALUE: string;
      static MIN_VALUE: string;
      static SIZE: int;
      static BYTES: int;

      constructor(value: string);

      charValue(): string;

      compareTo(anotherCharacter: Character): int;

      equals(obj: java.lang.Object): boolean;

      hashCode(): int;

      toString(): string;

      static valueOf(c: string): Character;
    }

    /**
     * A class loader is an object that is responsible for loading classes.
     */
    abstract class ClassLoader extends java.lang.Object {
      /** Returns the parent class loader for delegation. */
      getParent(): ClassLoader | null;

      /** Loads the class with the specified binary name. */
      loadClass(name: java.lang.String): java.lang.Class;

      /** Returns the system class loader for delegation. */
      static getSystemClassLoader(): ClassLoader;
    }
  }
}
