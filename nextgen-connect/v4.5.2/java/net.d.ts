// java.net.* — URL/URI and connection types.

declare namespace java {
  namespace net {
    /**
     * Class URL represents a Uniform Resource Locator, a pointer to a "resource" on the World Wide Web.
     */
    class URL extends java.lang.Object implements java.io.Serializable {
      /** Creates a URL object from the String representation. */
      constructor(spec: java.lang.String);
      /** Creates a URL object from the specified protocol, host, port number, and file. */
      constructor(
        protocol: java.lang.String,
        host: java.lang.String,
        port: int,
        file: java.lang.String,
      );
      /** Creates a URL by parsing the given spec within a specified context. */
      constructor(context: URL, spec: java.lang.String);

      /** Gets the protocol name of this URL. */
      getProtocol(): java.lang.String;
      /** Gets the host name of this URL. */
      getHost(): java.lang.String;
      /** Gets the port number of this URL. */
      getPort(): int;
      /** Gets the default port number of the protocol associated with this URL. */
      getDefaultPort(): int;
      /** Gets the file name of this URL. */
      getFile(): java.lang.String;
      /** Gets the path part of this URL. */
      getPath(): java.lang.String;
      /** Gets the query part of this URL. */
      getQuery(): java.lang.String;
      /** Gets the anchor (also known as the "reference") of this URL. */
      getRef(): java.lang.String;
      /** Gets the authority part of this URL. */
      getAuthority(): java.lang.String;
      /** Gets the userInfo part of this URL. */
      getUserInfo(): java.lang.String;
      /** Constructs a string representation of this URL. */
      toString(): string;
      /** Constructs a string representation of this URL. */
      toExternalForm(): java.lang.String;
      /** Returns a URI equivalent to this URL. */
      toURI(): URI;
      /** Opens a connection to this URL. */
      openConnection(): URLConnection;
      /** Opens a stream to this URL. */
      openStream(): java.io.InputStream;
    }

    /**
     * Represents a Uniform Resource Identifier (URI) reference.
     */
    class URI extends java.lang.Object implements java.io.Serializable {
      /** Constructs a URI by parsing the given string. */
      constructor(str: java.lang.String);
      /** Constructs a hierarchical URI from the given components. */
      constructor(
        scheme: java.lang.String,
        userInfo: java.lang.String,
        host: java.lang.String,
        port: int,
        path: java.lang.String,
        query: java.lang.String,
        fragment: java.lang.String,
      );

      /** Returns the scheme component of this URI. */
      getScheme(): java.lang.String;
      /** Returns the host component of this URI. */
      getHost(): java.lang.String;
      /** Returns the port component of this URI. */
      getPort(): int;
      /** Returns the path component of this URI. */
      getPath(): java.lang.String;
      /** Returns the query component of this URI. */
      getQuery(): java.lang.String;
      /** Returns the fragment component of this URI. */
      getFragment(): java.lang.String;
      /** Returns the content of this URI as a string. */
      toString(): string;
      /** Constructs a URL from this URI. */
      toURL(): URL;
    }

    /**
     * The abstract class URLConnection is the superclass of all classes that
     * represent a communications link between the application and a URL.
     */
    abstract class URLConnection extends java.lang.Object {
      /** Returns the value of the content-type header field. */
      getContentType(): java.lang.String;
      /** Returns the value of the content-length header field. */
      getContentLength(): int;
      /** Returns the value of the content-encoding header field. */
      getContentEncoding(): java.lang.String;
      /** Returns an input stream that reads from this open connection. */
      getInputStream(): java.io.InputStream;
      /** Returns an output stream that writes to this connection. */
      getOutputStream(): java.io.OutputStream;
      /** Returns the value of the named header field. */
      getHeaderField(name: java.lang.String): java.lang.String;
      /** Sets the value of the specified request header field. */
      setRequestProperty(key: java.lang.String, value: java.lang.String): void;
      /** Opens a communications link to the resource referenced by this URL. */
      connect(): void;
    }
  }
}
