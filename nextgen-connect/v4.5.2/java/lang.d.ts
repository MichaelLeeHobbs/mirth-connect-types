// java.lang.* — core language types: Object, String, primitives wrappers, etc.

declare namespace java {
  namespace lang {
    /**
     * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html
     */
    interface CharSequence {
      /** Returns the char value at the specified index. */
      charAt(index: JInteger): char;

      /** Returns a stream of int zero-extending the char values from this sequence. */
      chars?(): java.util.stream.IntStream;

      /** Returns a stream of code point values from this sequence. */
      codePoints?(): java.util.stream.IntStream;

      /** Returns the length of this character sequence. */
      length(): java.lang.Integer;

      /** Returns a CharSequence that is a subsequence of this sequence. */
      subSequence(start: JInteger, end: JInteger): CharSequence;

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
      isInstance(obj: JObject): boolean;

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
      equals(obj: JObject): boolean;

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
      constructor(message: JString);
      constructor(message: JString, cause: java.lang.Throwable);
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
      constructor(message: JString);
      constructor(message: JString, cause: java.lang.Throwable);
      constructor(cause: java.lang.Throwable);
    }

    class String
      extends java.lang.Object
      implements java.io.Serializable, java.lang.CharSequence, Comparable<java.lang.String>
    {
      constructor();
      constructor(byteArray: byte[]);
      constructor(byteArray: byte[], charset: JString);
      constructor(ascii: byte[], hibyte: JInteger);
      constructor(bytes: byte[], offset: JInteger, length: JInteger);
      constructor(ascii: byte[], hibyte: JInteger, offset: JInteger, count: JInteger);
      constructor(bytes: byte[], offset: JInteger, length: JInteger, charsetName: JString);
      constructor(bytes: byte[], charsetName: JString);
      constructor(chars: JCharacter[]);
      constructor(chars: JCharacter[], offset: JInteger, count: JInteger);
      constructor(codePoints: JInteger[], offset: JInteger, count: JInteger);
      constructor(original: JString);
      constructor(buffer: java.lang.StringBuffer);
      constructor(builder: java.lang.StringBuilder);

      /** Returns the JavaChar value at the specified index. */
      charAt(index: JInteger): char;

      /** Returns the character (Unicode code point) at the specified index. */
      codePointAt(index: JInteger): java.lang.Integer;

      /** Returns the character (Unicode code point) before the specified index.*/
      codePointBefore(index: JInteger): java.lang.Integer;

      /** Returns the number of Unicode code points in the specified text range of this String. */
      codePointCount(beginIndex: JInteger, endIndex: JInteger): java.lang.Integer;

      /** Compares two strings lexicographically. */
      compareTo(anotherString: JString): int;

      /** Compares two strings lexicographically, ignoring case differences.*/
      compareToIgnoreCase(str: JString): java.lang.Integer;

      /** Concatenates the specified string to the end of this string. */
      concat(str: JString): String;

      /** Returns true if and only if this string contains the specified sequence of JavaChar values. */
      contains(s: JCharSequence): java.lang.Boolean;

      /** Compares this string to the specified CharSequence. */
      contentEquals(cs: JCharSequence): java.lang.Boolean;
      /** Compares this string to the specified StringBuffer.*/
      contentEquals(sb: java.lang.StringBuffer): java.lang.Boolean;

      /** Equivalent to valueOf(JavaChar[]). */
      static copyValueOf(data: JCharacter[]): java.lang.String;
      /** Equivalent to valueOf(JavaChar[], JavaInteger, JavaInteger). */
      static copyValueOf(data: JCharacter[], offset: JInteger, count: JInteger): java.lang.String;

      /** Tests if this string ends with the specified suffix.*/
      endsWith(suffix: JString): java.lang.Boolean;

      /** Compares this string to the specified object.*/
      equals(anObject: JObject): boolean;

      /** Compares this String to another String, ignoring case considerations. */
      equalsIgnoreCase(anotherString: JString): java.lang.Boolean;

      /** Returns a formatted string using the specified locale, format string, and arguments. */
      static format(l: java.util.Locale, format: JString, ...args: any[]): java.lang.String;
      /** Returns a formatted string using the specified format string and arguments. */
      static format(format: JString, ...args: any[]): java.lang.String;

      /** Encodes this String into a sequence of bytes using the platform's default charset, storing the result into a new byte array. */
      getBytes(): byte[];
      /** Encodes this String into a sequence of bytes using the given charset, storing the result into a new byte array. */
      getBytes(charset: java.nio.charset.Charset): byte[];
      /** Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array. */
      getBytes(charsetName: JString): byte[];

      /** Copies characters from this string into the destination character array. */
      getChars(srcBegin: JInteger, srcEnd: JInteger, dst: JCharacter[], dstBegin: JInteger): void;

      /** Returns a hash code for this string. */
      hashCode(): int;

      /** Returns the index within this string of the first occurrence of the specified character. */
      indexOf(ch: JInteger): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified character, starting the search at the specified index. */
      indexOf(ch: JInteger, fromIndex: JInteger): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified substring. */
      indexOf(str: JString): java.lang.Integer;
      /** Returns the index within this string of the first occurrence of the specified substring, starting at the specified index. */
      indexOf(str: JString, fromIndex: JInteger): java.lang.Integer;

      /** Returns a canonical representation for the string object. */
      intern(): java.lang.String;

      /** Returns true if, and only if, length() is 0. */
      isEmpty(): java.lang.Boolean;

      /** Returns a new String composed of copies of the CharSequence elements joined together with a copy of the specified delimiter. */
      static join(delimiter: JCharSequence, ...elements: JCharSequence[]): java.lang.String;
      /** Returns a new String composed of copies of the CharSequence elements joined together with a copy of the specified delimiter. */
      static join(delimiter: JCharSequence, elements: JString[]): java.lang.String;

      /** Returns the index within this string of the last occurrence of the specified character. */
      lastIndexOf(ch: JInteger): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified character, searching backward starting at the specified index. */
      lastIndexOf(ch: JInteger, fromIndex: JInteger): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified substring. */
      lastIndexOf(str: JString): java.lang.Integer;
      /** Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index. */
      lastIndexOf(str: JString, fromIndex: JInteger): java.lang.Integer;

      /** Returns the length of this string. */
      length(): java.lang.Integer;

      /** Tells whether or not this string matches the given regular expression. */
      matches(regex: JString): java.lang.Boolean;

      /** Returns the index within this String that is offset from the given index by codePointOffset code points. */
      offsetByCodePoints(index: JInteger, codePointOffset: JInteger): java.lang.Integer;

      /** Tests if two string regions are equal. */
      regionMatches(
        ignoreCase: JBoolean,
        toffset: JInteger,
        other: JString,
        ooffset: JInteger,
        len: JInteger,
      ): java.lang.Boolean;
      /** Tests if two string regions are equal. */
      regionMatches(
        toffset: JInteger,
        other: JString,
        ooffset: JInteger,
        len: JInteger,
      ): java.lang.Boolean;

      /** Returns a string resulting from replacing all occurrences of oldChar in this string with newChar. */
      replace(oldChar: JCharacter, newChar: JCharacter): String;
      /** Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence. */
      replace(target: JCharSequence, replacement: JCharSequence): String;

      /** Replaces each substring of this string that matches the given regular expression with the given replacement. */
      replaceAll(regex: JString, replacement: JString): String;

      /** Replaces the first substring of this string that matches the given regular expression with the given replacement. */
      replaceFirst(regex: JString, replacement: JString): String;

      /** Splits this string around matches of the given regular expression. */
      split(regex: JString): java.lang.String[];
      /** Splits this string around matches of the given regular expression. */
      split(regex: JString, limit: JInteger): java.lang.String[];

      /** Tests if this string starts with the specified prefix. */
      startsWith(prefix: JString): java.lang.Boolean;
      /** Tests if the substring of this string beginning at the specified index starts with the specified prefix. */
      startsWith(prefix: JString, toffset: JInteger): java.lang.Boolean;

      /** Returns a character sequence that is a subsequence of this sequence. */
      subSequence(beginIndex: JInteger, endIndex: JInteger): CharSequence;

      /** Returns a string that is a substring of this string. */
      substring(beginIndex: JInteger): String;
      /** Returns a string that is a substring of this string. */
      substring(beginIndex: JInteger, endIndex: JInteger): String;

      /** Converts this string to a new character array. */
      toCharArray(): char[];

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
      static valueOf(c: JCharacter): java.lang.String;
      /** Returns the string representation of the JavaChar array argument. */
      static valueOf(data: JCharacter[]): java.lang.String;
      /** Returns the string representation of a specific subarray of the JavaChar array argument. */
      static valueOf(data: JCharacter[], offset: JInteger, count: JInteger): java.lang.String;
      /** Returns the string representation of the double argument. */
      static valueOf(d: JDouble): java.lang.String;
      /** Returns the string representation of the float argument. */
      static valueOf(f: JFloat): java.lang.String;
      /** Returns the string representation of the JavaInteger argument. */
      static valueOf(i: JInteger): java.lang.String;
      /** Returns the string representation of the long argument. */
      static valueOf(l: JLong): java.lang.String;
      /** Returns the string representation of the Object argument. */
      static valueOf(obj: JObject): java.lang.String;
    }

    /** A thread-safe, mutable sequence of characters. */
    class StringBuffer extends java.lang.Object implements java.io.Serializable, CharSequence {
      constructor();
      constructor(seq: JCharSequence);
      constructor(capacity: JInteger);
      constructor(str: JString);

      append(s: JString): StringBuffer;
      append(c: JCharacter): StringBuffer;
      append(i: JInteger): StringBuffer;

      charAt(index: JInteger): char;

      length(): java.lang.Integer;

      subSequence(start: JInteger, end: JInteger): CharSequence;

      toString(): string;
    }

    /** A mutable sequence of characters (not thread-safe). */
    class StringBuilder extends java.lang.Object implements java.io.Serializable, CharSequence {
      constructor();
      constructor(seq: JCharSequence);
      constructor(capacity: JInteger);
      constructor(str: JString);

      append(s: JString): StringBuilder;
      append(c: JCharacter): StringBuilder;
      append(i: JInteger): StringBuilder;

      charAt(index: JInteger): char;

      length(): java.lang.Integer;

      subSequence(start: JInteger, end: JInteger): CharSequence;

      toString(): string;
    }

    /** Wrapper class for primitive int. */
    class Integer extends java.lang.Object implements java.io.Serializable, Comparable<Integer> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: JString);

      byteValue(): Byte;

      compareTo(anotherInteger: JInteger): int;

      doubleValue(): Double;

      equals(obj: JObject): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseInt(s: JString): int;
      static parseInt(s: JString, radix: int): int;

      static valueOf(i: int): java.lang.Integer;
      static valueOf(s: JString): java.lang.Integer;
      static valueOf(s: JString, radix: int): java.lang.Integer;
    }

    /** Wrapper class for primitive long. */
    class Long extends java.lang.Object implements java.io.Serializable, Comparable<Long> {
      static MAX_VALUE: long;
      static MIN_VALUE: long;
      static SIZE: int;
      static BYTES: int;

      constructor(value: long);
      constructor(s: JString);

      byteValue(): Byte;

      compareTo(anotherLong: JLong): int;

      doubleValue(): Double;

      equals(obj: JObject): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): long;

      shortValue(): Short;

      toString(): string;

      static parseLong(s: JString): long;
      static parseLong(s: JString, radix: int): long;

      static valueOf(l: long): Long;
      static valueOf(s: JString): Long;
      static valueOf(s: JString, radix: int): Long;
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
      constructor(s: JString);

      byteValue(): Byte;

      compareTo(anotherDouble: JDouble): int;

      doubleValue(): number;

      equals(obj: JObject): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      isInfinite(): boolean;

      isNaN(): boolean;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseDouble(s: JString): number;

      static valueOf(d: number): Double;
      static valueOf(s: JString): Double;
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
      constructor(s: JString);

      byteValue(): Byte;

      compareTo(anotherFloat: JFloat): int;

      doubleValue(): Double;

      equals(obj: JObject): boolean;

      floatValue(): number;

      hashCode(): int;

      intValue(): int;

      isInfinite(): boolean;

      isNaN(): boolean;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseFloat(s: JString): number;

      static valueOf(f: number): Float;
      static valueOf(s: JString): Float;
    }

    /** Wrapper class for primitive boolean. */
    class Boolean extends java.lang.Object implements java.io.Serializable, Comparable<Boolean> {
      static TRUE: Boolean;
      static FALSE: Boolean;

      constructor(value: boolean);
      constructor(s: JString);

      booleanValue(): boolean;

      compareTo(b: JBoolean): int;

      equals(obj: JObject): boolean;

      hashCode(): int;

      toString(): string;

      static parseBoolean(s: JString): boolean;

      static valueOf(b: boolean): Boolean;
      static valueOf(s: JString): Boolean;
    }

    /** Wrapper class for primitive short. */
    class Short extends java.lang.Object implements java.io.Serializable, Comparable<Short> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: JString);

      byteValue(): Byte;

      compareTo(anotherShort: JShort): int;

      doubleValue(): Double;

      equals(obj: JObject): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): int;

      toString(): string;

      static parseShort(s: JString): int;
      static parseShort(s: JString, radix: int): int;

      static valueOf(s: int): Short;
      static valueOf(s: JString): Short;
      static valueOf(s: JString, radix: int): Short;
    }

    /** Wrapper class for primitive byte. */
    class Byte extends java.lang.Object implements java.io.Serializable, Comparable<Byte> {
      static MAX_VALUE: int;
      static MIN_VALUE: int;
      static SIZE: int;
      static BYTES: int;

      constructor(value: int);
      constructor(s: JString);

      byteValue(): int;

      compareTo(anotherByte: JByte): int;

      doubleValue(): Double;

      equals(obj: JObject): boolean;

      floatValue(): Float;

      hashCode(): int;

      intValue(): int;

      longValue(): Long;

      shortValue(): Short;

      toString(): string;

      static parseByte(s: JString): int;
      static parseByte(s: JString, radix: int): int;

      static valueOf(b: int): Byte;
      static valueOf(s: JString): Byte;
      static valueOf(s: JString, radix: int): Byte;
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

      compareTo(anotherCharacter: JCharacter): int;

      equals(obj: JObject): boolean;

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
      loadClass(name: JString): java.lang.Class;

      /** Returns the system class loader for delegation. */
      static getSystemClassLoader(): ClassLoader;
    }
  }
}
