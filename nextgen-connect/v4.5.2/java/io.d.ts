// java.io.* — file, stream, reader/writer, and serialization types.

declare namespace java {
  namespace io {
    /** Marker interface for serializable classes. */
    interface Serializable {
      // Marker interface - no methods required
    }

    /** Output stream for writing objects. */
    class ObjectOutputStream extends java.lang.Object {
      // Implementation details not needed for type definitions
    }

    /** Input stream for reading objects. */
    class ObjectInputStream extends java.lang.Object {
      // Implementation details not needed for type definitions
    }

    /** Exception thrown when an encoding is not supported. */
    class UnsupportedEncodingException extends java.lang.Exception {
      constructor();
      constructor(message: JString);
    }

    /** Signals that an I/O exception of some sort has occurred. */
    class IOException extends java.lang.Exception {
      constructor();
      constructor(message: JString);
      constructor(cause: java.lang.Throwable);
      constructor(message: JString, cause: java.lang.Throwable);
    }

    /**
     * An abstract representation of file and directory pathnames.
     */
    class File extends java.lang.Object implements java.io.Serializable {
      constructor(pathname: JString);
      constructor(parent: JString, child: JString);
      constructor(parent: File, child: JString);

      /** Tests whether the file or directory denoted by this abstract pathname exists. */
      exists(): boolean;

      /** Returns the name of the file or directory. */
      getName(): java.lang.String;

      /** Returns the pathname string of this abstract pathname's parent. */
      getParent(): java.lang.String | null;

      /** Returns the abstract pathname of this abstract pathname's parent. */
      getParentFile(): File | null;

      /** Returns the absolute pathname string of this abstract pathname. */
      getAbsolutePath(): java.lang.String;

      /** Tests whether the file denoted by this abstract pathname is a directory. */
      isDirectory(): boolean;

      /** Tests whether the file denoted by this abstract pathname is a normal file. */
      isFile(): boolean;

      /** Returns the length of the file denoted by this abstract pathname. */
      length(): long;

      /** Deletes the file or directory denoted by this abstract pathname. */
      delete(): boolean;

      /** Creates the directory named by this abstract pathname. */
      mkdir(): boolean;

      /** Creates the directory named by this abstract pathname, including any necessary parent directories. */
      mkdirs(): boolean;

      /** Returns an array of strings naming the files and directories in the directory. */
      list(): java.lang.String[] | null;

      /** Returns an array of abstract pathnames denoting the files in the directory. */
      listFiles(): File[] | null;
    }

    /**
     * This abstract class is the superclass of all classes representing an input stream of bytes.
     */
    abstract class InputStream extends java.lang.Object {
      /** Reads the next byte of data from the input stream. */
      read(): int;

      /** Reads some number of bytes from the input stream and stores them into the buffer array. */
      read(b: byte[]): int;

      /** Reads up to len bytes of data from the input stream into an array of bytes. */
      read(b: byte[], off: int, len: int): int;

      /** Closes this input stream and releases any system resources associated with the stream. */
      close(): void;

      /** Returns an estimate of the number of bytes that can be read. */
      available(): int;
    }

    /**
     * This abstract class is the superclass of all classes representing an output stream of bytes.
     */
    abstract class OutputStream extends java.lang.Object {
      /** Writes the specified byte to this output stream. */
      write(b: int): void;

      /** Writes b.length bytes from the specified byte array to this output stream. */
      write(b: byte[]): void;

      /** Writes len bytes from the specified byte array starting at offset off to this output stream. */
      write(b: byte[], off: int, len: int): void;

      /** Flushes this output stream and forces any buffered output bytes to be written out. */
      flush(): void;

      /** Closes this output stream and releases any system resources associated with this stream. */
      close(): void;
    }

    /** Reads bytes from a file. */
    class FileInputStream extends InputStream {
      constructor(name: JString);
      constructor(file: File);
    }

    /** Writes bytes to a file. */
    class FileOutputStream extends OutputStream {
      constructor(name: JString);
      constructor(name: JString, append: boolean);
      constructor(file: File);
      constructor(file: File, append: boolean);
    }

    /** An input stream that reads from a byte array, e.g. to upload in-memory content. */
    class ByteArrayInputStream extends InputStream {
      constructor(buf: byte[]);
      constructor(buf: byte[], offset: int, length: int);
    }

    /** An output stream that collects the written bytes in memory. */
    class ByteArrayOutputStream extends OutputStream {
      constructor();
      constructor(size: int);

      /** Returns a copy of the bytes written so far. */
      toByteArray(): byte[];

      /** Decodes the bytes written so far using the named charset. */
      toString(charsetName: JString): java.lang.String;
      toString(): string;

      /** Returns the number of bytes written so far. */
      size(): int;

      /** Discards the bytes written so far. */
      reset(): void;
    }

    /**
     * Abstract class for reading character streams.
     */
    abstract class Reader extends java.lang.Object {
      /** Reads a single character. */
      read(): int;

      /** Reads characters into an array. */
      read(cbuf: JCharacter[]): int;

      /** Reads characters into a portion of an array. */
      read(cbuf: JCharacter[], off: int, len: int): int;

      /** Tells whether this stream is ready to be read. */
      ready(): boolean;

      /** Closes the stream and releases any system resources associated with it. */
      close(): void;
    }

    /** Reads text from a character stream, buffering it and exposing it line by line. */
    class BufferedReader extends Reader {
      constructor(reader: Reader);
      constructor(reader: Reader, size: int);

      /** Returns the next line without its terminator, or null at the end of the stream. */
      readLine(): java.lang.String | null;
    }

    /**
     * Abstract class for writing to character streams.
     */
    abstract class Writer extends java.lang.Object {
      /** Writes a single character. */
      write(c: int): void;

      /** Writes an array of characters. */
      write(cbuf: JCharacter[]): void;

      /** Writes a portion of an array of characters. */
      write(cbuf: JCharacter[], off: int, len: int): void;

      /** Writes a string. */
      write(str: JString): void;

      /** Writes a portion of a string. */
      write(str: JString, off: int, len: int): void;

      /** Flushes the stream. */
      flush(): void;

      /** Closes the stream, flushing it first. */
      close(): void;
    }

    /** A character stream that collects its output in a string buffer. */
    class StringWriter extends Writer {
      constructor();
      constructor(initialSize: int);

      getBuffer(): java.lang.StringBuffer;
      toString(): string;
    }

    /** Prints formatted text to a character or byte stream. */
    class PrintWriter extends Writer {
      constructor(out: Writer);
      constructor(out: Writer, autoFlush: boolean);
      constructor(out: OutputStream);
      constructor(fileName: JString);

      print(x: JObject): void;
      println(): void;
      println(x: JObject): void;
    }
  }
}
