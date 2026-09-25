// java.util.* — collections, Map, Iterator, Locale, Calendar/Date, Properties,
// the java.util.stream and java.util.concurrent sub-namespaces, etc.

declare namespace java {
  namespace util {
    namespace stream {
      /** A sequence of primitive int-valued elements supporting sequential and parallel aggregate operations. */
      interface IntStream {
        /** Returns an array containing the elements of this stream. */
        toArray(): int[];
        /** Returns the sum of elements in this stream. */
        sum(): int;
        /** Returns the count of elements in this stream. */
        count(): long;
        /** Performs an action for each element of this stream. */
        forEach(action: (value: int) => void): void;
        /** Returns a stream consisting of the elements that match the given predicate. */
        filter(predicate: (value: int) => boolean): java.util.stream.IntStream;
        /** Returns a stream consisting of the results of applying the given function to the elements. */
        map(mapper: (value: int) => int): java.util.stream.IntStream;
      }
      const IntStream: JavaInterface<IntStream>;
    }

    /** An ordered collection (sequence). */
    interface List<T = any> extends java.util.Collection<T> {
      add(element: T): boolean;

      add(index: int, element: T): void;

      addAll(collection: java.util.Collection<T> | T[]): boolean;

      addAll(index: int, collection: java.util.Collection<T> | T[]): boolean;

      clear(): void;

      contains(element: JKey<T>): boolean;

      get(index: int): T;

      indexOf(element: JKey<T>): int;

      isEmpty(): boolean;

      iterator(): Iterator<T>;

      lastIndexOf(element: JKey<T>): int;

      remove(index: int): T;

      remove(element: JKey<T>): boolean;

      set(index: int, element: T): T;

      size(): int;

      subList(fromIndex: int, toIndex: int): List<T>;

      toArray(): T[];
    }
    const List: JavaInterface<List<any>>;

    /** A collection that contains no duplicate elements. */
    interface Set<T = any> extends java.util.Collection<T> {}
    const Set: JavaInterface<Set<any>>;

    /** An object that maps keys to values. */
    interface Map<K = any, V = any> {
      clear(): void;

      containsKey(key: JKey<K>): boolean;

      containsValue(value: JKey<V>): boolean;

      entrySet(): Set<Map.Entry<K, V>>;

      get(key: JKey<K>): V | null;

      isEmpty(): boolean;

      keySet(): Set<K>;

      put(key: K, value: V): V | null;

      putAll(map: Map<K, V> | Record<string, V>): void;

      remove(key: JKey<K>): V | null;

      size(): int;

      values(): java.util.Collection<V>;
    }
    const Map: JavaInterface<Map<any, any>>;

    namespace Map {
      interface Entry<K = any, V = any> {
        getKey(): K;

        getValue(): V;

        setValue(value: V): V;
      }
    }

    /** The root interface in the collection hierarchy. */
    interface Collection<T = any> extends java.lang.Iterable<T> {
      add(element: T): boolean;

      addAll(collection: java.util.Collection<T> | T[]): boolean;

      clear(): void;

      contains(element: JKey<T>): boolean;

      isEmpty(): boolean;

      iterator(): Iterator<T>;

      remove(element: JKey<T>): boolean;

      size(): int;

      toArray(): T[];
    }
    const Collection: JavaInterface<Collection<any>>;

    /** An iterator over a collection. */
    interface Iterator<T = any> {
      hasNext(): boolean;

      next(): T;

      remove(): void;
    }
    const Iterator: JavaInterface<Iterator<any>>;

    /** An iterator for lists that allows bidirectional traversal and modification. */
    interface ListIterator<T = any> extends Iterator<T> {
      /** Returns true if this list iterator has more elements when traversing in the forward direction. */
      hasNext(): boolean;

      /** Returns the next element in the list and advances the cursor position. */
      next(): T;

      /** Returns true if this list iterator has more elements when traversing in the reverse direction. */
      hasPrevious(): boolean;

      /** Returns the previous element in the list and moves the cursor position backwards. */
      previous(): T;

      /** Returns the index of the element that would be returned by a subsequent call to next(). */
      nextIndex(): int;

      /** Returns the index of the element that would be returned by a subsequent call to previous(). */
      previousIndex(): int;

      /** Removes from the list the last element that was returned by next() or previous(). */
      remove(): void;

      /** Replaces the last element returned by next() or previous() with the specified element. */
      set(e: T): void;

      /** Inserts the specified element into the list. */
      add(e: T): void;
    }
    const ListIterator: JavaInterface<ListIterator<any>>;

    /** Represents a specific geographical, political, or cultural region. */
    class Locale extends java.lang.Object implements java.io.Serializable {
      static ENGLISH: Locale;
      static US: Locale;
      static UK: Locale;

      constructor(language: JString);
      constructor(language: JString, country: JString);
      constructor(language: JString, country: JString, variant: JString);

      getCountry(): java.lang.String;

      getLanguage(): java.lang.String;

      getVariant(): java.lang.String;

      toString(): string;
    }

    /** Represents a date/time with calendar fields. */
    abstract class Calendar extends java.lang.Object implements java.io.Serializable {
      static YEAR: int;
      static MONTH: int;
      static DAY_OF_MONTH: int;
      static HOUR: int;
      static MINUTE: int;
      static SECOND: int;
      static MILLISECOND: int;

      get(field: int): int;

      /** Adds `amount` (negative to subtract) to a field, e.g. `cal.add(Calendar.MINUTE, -5)`. */
      add(field: int, amount: int): void;

      getTime(): Date;

      getTimeInMillis(): long;

      set(field: int, value: int): void;

      setTime(date: Date): void;

      setTimeInMillis(millis: long): void;

      static getInstance(): Calendar;
      static getInstance(locale: Locale): Calendar;
    }

    /** Represents a specific instant in time. */
    class Date extends java.lang.Object implements java.io.Serializable {
      constructor();
      constructor(date: long);

      getTime(): long;

      setTime(time: long): void;

      after(when: Date): boolean;

      before(when: Date): boolean;

      compareTo(anotherDate: Date): int;

      equals(obj: JObject): boolean;

      toString(): string;
    }

    /** A resizable list. Its `List` methods come from the merged interface below. */
    class ArrayList<T = any> extends java.lang.Object {
      constructor();
      constructor(initialCapacity: int);
      constructor(collection: java.util.Collection<T> | T[]);
    }
    interface ArrayList<T = any> extends java.util.List<T> {}

    /** A hash map. Its `Map` methods come from the merged interface below. */
    class HashMap<K = any, V = any> extends java.lang.Object {
      constructor();
      constructor(initialCapacity: int);
      constructor(map: java.util.Map<K, V> | Record<string, V>);
    }
    interface HashMap<K = any, V = any> extends java.util.Map<K, V> {}

    /** Base64 encoders and decoders. */
    class Base64 extends java.lang.Object {
      static getEncoder(): Base64.Encoder;
      static getDecoder(): Base64.Decoder;
      static getUrlEncoder(): Base64.Encoder;
      static getUrlDecoder(): Base64.Decoder;
      static getMimeEncoder(): Base64.Encoder;
      static getMimeDecoder(): Base64.Decoder;
    }
    namespace Base64 {
      class Encoder extends java.lang.Object {
        encode(src: byte[]): byte[];
        encodeToString(src: byte[]): java.lang.String;
        /** Returns an encoder that omits trailing `=` padding. */
        withoutPadding(): Encoder;
      }
      class Decoder extends java.lang.Object {
        decode(src: byte[]): byte[];
        decode(src: JString): byte[];
      }
    }

    /** Static helpers for Java arrays. */
    class Arrays extends java.lang.Object {
      /** Copies the array, truncating or padding to `newLength`. */
      static copyOf<T>(original: T[], newLength: int): T[];
      /** Copies `original[from]` up to (not including) `original[to]`. */
      static copyOfRange<T>(original: T[], from: int, to: int): T[];
      static asList<T>(...items: T[]): java.util.List<T>;
      static equals(a: JObject, b: JObject): boolean;
      static fill(array: JObject, value: JObject): void;
      static toString(array: JObject): java.lang.String;
    }

    /** An immutable universally unique identifier. */
    class UUID extends java.lang.Object implements java.io.Serializable {
      constructor(mostSigBits: long, leastSigBits: long);
      /** Returns a random (version 4) UUID. */
      static randomUUID(): UUID;
      static fromString(name: JString): UUID;
      /** Returns a name-based (version 3) UUID for the bytes. */
      static nameUUIDFromBytes(name: byte[]): UUID;
      toString(): string;
    }

    /** A synchronized hash table. Its `Map` methods come from the merged interface below. */
    class Hashtable<K, V> extends java.lang.Object {
      constructor();
    }
    interface Hashtable<K, V> extends java.util.Map<K, V> {}

    /**
     * The Properties class represents a persistent set of properties.
     * Each key and its corresponding value in the property list is a string.
     * It is a `Hashtable`, so `put`/`get` accept any key and value (e.g. JSch config).
     */
    class Properties extends Hashtable<JObject, any> {
      constructor();
      constructor(defaults: Properties);

      /** Searches for the property with the specified key. */
      getProperty(key: JString): java.lang.String | null;

      /** Searches for the property with the specified key and returns the default value if not found. */
      getProperty(key: JString, defaultValue: JString): java.lang.String;

      /** Sets the property value for the specified key. */
      setProperty(key: JString, value: JString): java.lang.Object;

      /** Returns an enumeration of all the keys in this property list. */
      propertyNames(): java.util.Iterator<java.lang.Object>;

      /** Returns a set of keys in this property list. */
      stringPropertyNames(): java.util.Set<java.lang.String>;
    }

    /**
     * A tagging interface that all event listener interfaces must extend.
     */
    interface EventListener {}
    const EventListener: JavaInterface<EventListener>;

    /**
     * The root class from which all event state objects shall be derived.
     */
    class EventObject extends java.lang.Object {
      constructor(source: JObject);

      /** The object on which the Event initially occurred. */
      getSource(): java.lang.Object;

      toString(): string;
    }
  }
}

declare namespace java {
  namespace util {
    namespace concurrent {
      /**
       * A Future represents the result of an asynchronous computation.
       * Methods are provided to check if the computation is complete, to wait for its completion,
       * and to retrieve the result of the computation.
       */
      interface Future<V = any> {
        /**
         * Attempts to cancel execution of this task.
         * @param mayInterruptIfRunning - true if the thread executing this task should be interrupted; otherwise, in-progress tasks are allowed to complete.
         * @returns false if the task could not be cancelled, typically because it has already completed normally; true otherwise.
         */
        cancel(mayInterruptIfRunning: boolean): boolean;

        /**
         * Waits if necessary for the computation to complete, and then retrieves its result.
         * @returns The computed result.
         * @throws CancellationException - If the computation was cancelled.
         * @throws ExecutionException - If the computation threw an exception.
         * @throws InterruptedException - If the current thread was interrupted while waiting.
         */
        get(): V;

        /**
         * Waits if necessary for at most the given time for the computation to complete, and then retrieves its result, if available.
         * @param timeout - The maximum time to wait.
         * @param unit - The time unit of the timeout argument.
         * @returns The computed result.
         * @throws CancellationException - If the computation was cancelled.
         * @throws ExecutionException - If the computation threw an exception.
         * @throws InterruptedException - If the current thread was interrupted while waiting.
         * @throws TimeoutException - If the wait timed out.
         */
        get(timeout: long, unit: java.util.concurrent.TimeUnit): V;

        /**
         * Returns true if this task was cancelled before it completed normally.
         * @returns true if this task was cancelled before it completed.
         */
        isCancelled(): boolean;

        /**
         * Returns true if this task completed.
         * @returns true if this task completed.
         */
        isDone(): boolean;
      }
      const Future: JavaInterface<Future<any>>;

      /**
       * A TimeUnit represents time durations at a given unit of granularity.
       */
      enum TimeUnit {
        NANOSECONDS,
        MICROSECONDS,
        MILLISECONDS,
        SECONDS,
        MINUTES,
        HOURS,
        DAYS,
      }

      namespace TimeUnit {
        /** Returns an array containing the constants of this enum type. */
        function values(): TimeUnit[];

        /** Returns the enum constant with the specified name. */
        function valueOf(name: JString): TimeUnit;
      }
    }
  }
}
