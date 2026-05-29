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
      constructor(message: java.lang.String);
    }

    /** Signals that an I/O exception of some sort has occurred. */
    class IOException extends java.lang.Exception {
      constructor();
      constructor(message: java.lang.String);
      constructor(cause: java.lang.Throwable);
      constructor(message: java.lang.String, cause: java.lang.Throwable);
    }

    /**
     * An abstract representation of file and directory pathnames.
     */
    class File extends java.lang.Object implements java.io.Serializable {
      constructor(pathname: java.lang.String);
      constructor(parent: java.lang.String, child: java.lang.String);
      constructor(parent: File, child: java.lang.String);

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

    /**
     * Abstract class for reading character streams.
     */
    abstract class Reader extends java.lang.Object {
      /** Reads a single character. */
      read(): int;

      /** Reads characters into an array. */
      read(cbuf: java.lang.Character[]): int;

      /** Reads characters into a portion of an array. */
      read(cbuf: java.lang.Character[], off: int, len: int): int;

      /** Tells whether this stream is ready to be read. */
      ready(): boolean;

      /** Closes the stream and releases any system resources associated with it. */
      close(): void;
    }

    /**
     * Abstract class for writing to character streams.
     */
    abstract class Writer extends java.lang.Object {
      /** Writes a single character. */
      write(c: int): void;

      /** Writes an array of characters. */
      write(cbuf: java.lang.Character[]): void;

      /** Writes a portion of an array of characters. */
      write(cbuf: java.lang.Character[], off: int, len: int): void;

      /** Writes a string. */
      write(str: java.lang.String): void;

      /** Writes a portion of a string. */
      write(str: java.lang.String, off: int, len: int): void;

      /** Flushes the stream. */
      flush(): void;

      /** Closes the stream, flushing it first. */
      close(): void;
    }
  }
}
