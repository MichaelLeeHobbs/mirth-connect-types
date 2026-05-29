// Mirth global variables, helper functions, and global classes (XML, VMRouter,
// TemplateValueReplacer) available in channel scripts.
//
// Migrated verbatim from the legacy monolith; the `declare global { ... }`
// wrapper has been removed because this is an ambient script declaration file,
// so each top-level statement carries its own `declare`.

/** Gets the Attachment IDs for the specified channel and message. If no channel or message is specified, the current channel and message are used. */
declare function getAttachmentIds(channelId?: string, messageId?: string): java.lang.String[];

/**
 * The current (inbound) message. For XML-based data types (HL7 v2, XML, EDI/X12, NCPDP, …)
 * this is an E4X `XML` object; for raw/text data types it is a string.
 */
declare var msg: XML | string;

/**
 * The outbound message template. Same shape as {@link msg}: an E4X `XML` object for
 * XML-based data types, otherwise a string.
 */
declare var tmp: XML | string;

/** The full immutable message. Available in the postprocessor and response transformer scopes. */
declare var message: com.mirth.connect.userutil.ImmutableMessage;

/** The response message. */
declare var response: com.mirth.connect.server.userutil.ImmutableResponse;

/** The response status (settable in a response transformer): SENT, QUEUED, ERROR, etc. */
declare var responseStatus: com.mirth.connect.userutil.Status;

/** The response error message (settable in a response transformer). */
declare var responseErrorMessage: java.lang.String | string;

/** The response status message (settable in a response transformer). */
declare var responseStatusMessage: java.lang.String | string;

/** The connector map (per-connector, scoped to a single message). */
declare var connectorMap: java.util.Map<java.lang.String, java.lang.Object>;

/** The channel map (shared across connectors for a single message). */
declare var channelMap: java.util.Map<java.lang.String, java.lang.Object>;

/** The source map (values set by the source connector; treat as read-only). */
declare var sourceMap: java.util.Map<java.lang.String, java.lang.Object>;

/** The global map (shared across all channels and messages). */
declare var globalMap: java.util.Map<java.lang.String, java.lang.Object>;

/** The global channel map (shared across messages within one channel). */
declare var globalChannelMap: java.util.Map<java.lang.String, java.lang.Object>;

/** The response map (destination responses for the current message). */
declare var responseMap: java.util.Map<java.lang.String, java.lang.Object>;

/** Get or Put connectorMap values */
declare function $co(key: string | number, value?: unknown): unknown;

/** Get or Put channelMap values */
declare function $c(key: string | number, value?: unknown): unknown;

/** Get or Put sourceMap values */
declare function $s(key: string | number, value?: unknown): unknown;

/** Get or Put globalChannelMap values */
declare function $gc(key: string | number, value?: unknown): unknown;

/** Get or Put globalMap values */
declare function $g(key: string | number, value?: unknown): unknown;

/** Get or Put configurationMap values - note: the configurationMap is read-only */
declare function $cfg(key: string | number, value?: unknown): unknown;

/** Get or Put responseMap values */
declare function $r(key: string | number, value?: unknown): unknown;

/** Get the key from the first map that contains it */
declare function $(key: string | number, value?: unknown): unknown;

/** Factory for opening JDBC database connections. */
declare var databaseConnectionFactory: com.mirth.connect.server.userutil.DatabaseConnectionFactory;
/** Factory for opening SMTP connections (static `createSMTPConnection()`). */
declare var SMTPConnectionFactory: typeof com.mirth.connect.server.userutil.SMTPConnectionFactory;
/** Serializer factory for converting between data types (HL7 v2, XML, JSON, …). */
declare var SerializerFactory: typeof com.mirth.connect.server.userutil.SerializerFactory;
/** Sends the alerts configured for the channel. */
declare var alerts: com.mirth.connect.server.userutil.AlertSender;

/**
 * @deprecated Use `databaseConnectionFactory.createDatabaseConnection(...)` instead.
 * Opens a JDBC database connection using the given driver/URL and optional credentials.
 */
declare var createDatabaseConnection: (
  driver: java.lang.String | string,
  address: java.lang.String | string,
  username?: java.lang.String | string,
  password?: java.lang.String | string,
) => com.mirth.connect.server.userutil.DatabaseConnection;

/**
 * @deprecated Open a connection via `databaseConnectionFactory` and call
 * `DatabaseConnection.executeUpdate(...)` instead. Executes an INSERT/UPDATE/DELETE.
 */
declare var executeUpdate: (
  expression: java.lang.String | string,
  parameters?: java.util.List<java.lang.Object>,
) => int;

/**
 * @deprecated Open a connection via `databaseConnectionFactory` and call
 * `DatabaseConnection.executeCachedQuery(...)` instead. Executes a SELECT.
 */
declare var executeCachedQuery: (
  expression: java.lang.String | string,
  parameters?: java.util.List<java.lang.Object>,
) => javax.sql.rowset.CachedRowSet;

/** @deprecated Use `SMTPConnectionFactory.createSMTPConnection()` instead. */
declare var createSMTPConnection: () => com.mirth.connect.server.userutil.SMTPConnection;

/** The current channel ID. */
declare var channelId: string;

/** The current channel name. */
declare var channelName: string;

declare var replacer: TemplateValueReplacer;

declare var contextFactory: com.mirth.connect.server.userutil.ContextFactory;

/** Provides file utility methods. */
declare var FileUtil: typeof com.mirth.connect.server.userutil.FileUtil;

/** Provides date/time utility methods. */
declare var DateUtil: typeof com.mirth.connect.server.userutil.DateUtil;

/**
 * Utility object used in the preprocessor or source filter/transformer to prevent the message from being sent to specific destinations.
 * Available in: Preprocessor, Source Filter, Source Transformer
 */
declare var destinationSet: com.mirth.connect.server.userutil.DestinationSet;

/**
 * Creates a new E4X XML segment. With only a name, returns a standalone `<name></name>`
 * element. With `msgObj`/`index`, inserts the new segment into `msgObj` at the given index.
 */
declare function createSegment(name: java.lang.String | string): XML;
declare function createSegment(
  name: java.lang.String | string,
  msgObj: XML,
  index?: java.lang.Integer | number,
): XML;

/** Helper function to create segments after specified field */
declare function createSegmentAfter(name: java.lang.String, segment: XML): XML;

/**
 * Creates an attachment on the current connector message and inserts it into the database.
 * @param content The attachment content — a string or byte array.
 * @param type The MIME type (e.g. `'application/pdf'`).
 * @param base64Encode If true, the content is Base64-encoded first.
 * @returns The created Attachment.
 */
declare function addAttachment(
  content: string | byte[],
  type: java.lang.String | string,
  base64Encode?: boolean,
): com.mirth.connect.server.userutil.Attachment;

/** Gets the Attachments and base64 decodes them if specified. */
declare function getAttachments(
  base64Decode?: boolean,
): java.util.List<com.mirth.connect.server.userutil.Attachment>;

/**
 * Updates an existing attachment on the current connector message. The current
 * `connectorMessage` is supplied implicitly — pass either an `Attachment` object, or an
 * `attachmentId` plus new `content` and `type`. Delegates to
 * {@link com.mirth.connect.server.userutil.AttachmentUtil.updateAttachment}.
 * @returns The updated Attachment.
 */
declare function updateAttachment(
  attachment: com.mirth.connect.server.userutil.Attachment,
): com.mirth.connect.server.userutil.Attachment;
declare function updateAttachment(
  attachment: com.mirth.connect.server.userutil.Attachment,
  base64Encode: boolean,
): com.mirth.connect.server.userutil.Attachment;
declare function updateAttachment(
  attachmentId: java.lang.String | string,
  content: string | byte[],
  type: java.lang.String | string,
): com.mirth.connect.server.userutil.Attachment;
declare function updateAttachment(
  attachmentId: java.lang.String | string,
  content: string | byte[],
  type: java.lang.String | string,
  base64Encode: boolean,
): com.mirth.connect.server.userutil.Attachment;

/**
 * Returns `mapping` if it exists and is non-empty, otherwise `defaultValue`, then applies any
 * `[pattern, replacement]` pairs to the chosen value. Generated transformer mappings use this
 * to guard against missing segments/fields.
 * @param mapping The value (often an E4X node) to validate.
 * @param defaultValue Fallback used when `mapping` is undefined or empty.
 * @param replacements Optional `[pattern, replacement]` string pairs applied to the result.
 */
declare function validate(
  mapping: unknown,
  defaultValue?: unknown,
  replacements?: string[][],
): string;

/** Returns the length of an E4X XML/XMLList object or a JS array; 0 for anything else. */
declare function getArrayOrXmlLength(obj: XML | unknown[]): number;

/** Returns `new String(value)`, but leaves `undefined`/`null` untouched. */
declare function newStringOrUndefined(value: unknown): string | undefined | null;

/** Returns `new Boolean(value)`, but leaves `undefined`/`null` untouched. */
declare function newBooleanOrUndefined(value: unknown): boolean | undefined | null;

/** Returns `new Number(value)`, but leaves `undefined`/`null` untouched. */
declare function newNumberOrUndefined(value: unknown): number | undefined | null;

declare var router: VMRouter;

/** The current immutable connector message (see ImmutableConnectorMessage for the full API). */
declare var connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage;

/** XML/JSON conversion utility methods (static). */
declare var XmlUtil: typeof com.mirth.connect.userutil.XmlUtil;

/**
 * The channel's Apache Log4j logger (org.apache.log4j.Logger). Output goes to the
 * Mirth server log. Each level method also accepts a second Throwable to log a stack trace.
 */
declare var logger: {
  trace(message: any): void;
  trace(message: any, t: java.lang.Throwable): void;
  debug(message: any): void;
  debug(message: any, t: java.lang.Throwable): void;
  info(message: any): void;
  info(message: any, t: java.lang.Throwable): void;
  warn(message: any): void;
  warn(message: any, t: java.lang.Throwable): void;
  error(message: any): void;
  error(message: any, t: java.lang.Throwable): void;
  fatal(message: any): void;
  fatal(message: any, t: java.lang.Throwable): void;
  isTraceEnabled(): boolean;
  isDebugEnabled(): boolean;
  isInfoEnabled(): boolean;
  getName(): java.lang.String;
};

/**
 * Represents an XML class with functionalities for manipulating and querying XML data.
 * Instances of this class provide methods to add namespaces, append children, manage attributes and elements,
 * and perform various other operations on XML data.
 *
 * This is an E4X (ECMAScript for XML) class - a JavaScript extension in Rhino.
 * All string returns are JavaScript strings, not java.lang.String.
 *
 * @see https://svn.wso2.org/repos/wso2/tags/carbon/0.1alpha/mashup/java/xdocs/e4xquickstart.html
 * @global
 */
declare class XML {
  /** Adds the namespace to the in-scope namespaces of the element. */
  addNamespace(namespace: string): void;

  /** Adds child as a new child of the element, after all other children. */
  appendChild(child: XML): XML;

  /** Returns the attribute of with the requested name. */
  attribute(attributeName: string): string;

  /** Returns the attributes of this element. */
  attributes(): string[];

  /** Returns the child element with the given propertyName, or if propertyName is an integer, returns the child in that position. */
  child(propertyName: string): XML;

  /** Returns the index of this children among its siblings. */
  childIndex(): number;

  /** Returns all the children of this object. */
  children(): XML[];

  /** Returns all the comments that are children of this XML object. */
  comments(): string[];

  /** Compares this element with the value, primarily provided to enable an XML element and an XML list to be used interchangeably. */
  contains(value: any): boolean;

  /** Returns a deep copy of the element. The parent property of the copy will be set to null. */
  copy(): XML;

  /** Returns the descendant elements (children, grandchildren, etc.). If a name is provided, only elements with that name are returned. */
  descendants(name?: string): XML;

  /** Returns the child elements. If a name is provided, only elements with that name are returned. */
  elements(name?: string): XML;

  /** Returns true for elements with child elements, otherwise false. */
  hasComplexContent(): boolean;

  /** Returns true for attributes, text nodes, or elements without child elements, otherwise false. */
  hasSimpleContent(): boolean;

  /** Returns an array of Namespace objects representing the namespaces in scope for this object. */
  inScopeNamespaces(): object[];

  /** Inserts child2 immediately after child1 in the XML object's children list. */
  insertChildAfter(child1: XML, child2: XML): void;

  /** Inserts child2 immediately prior to child1 in the XML object's children list. */
  insertChildBefore(child1: XML, child2: XML): void;

  /** Returns 1 for XML objects (allowing an XML object to be treated like an XML List with a single item.) */
  length(): number;

  /** Returns the local name of this object. */
  localName(): string;

  /** Returns the qualified name of this object. */
  name(): string;

  /** Returns the namespace associated with this object, or if a prefix is specified, an in-scope namespace with that prefix. */
  namespace(prefix?: string): string;

  /** An array of Namespace objects representing the namespace declarations associated with this object. */
  namespaceDeclarations(): string[];

  /** A string representing the kind of object this is (e.g. "element"). */
  nodeKind(): string;

  /** Merge adjacent text nodes and eliminate empty ones. */
  normalize(): void;

  /** The parent of this object. For an XML List object, this returns undefined unless all the items of the list have the same parent. */
  parent(): XML;

  /** A list of all processing instructions that are children of this element. If a name is provided, only processing instructions matching this name will be returned. */
  processingInstructions(name?: string): object[];

  /** Add a new child to an element, prior to all other children. */
  prependChild(value: string): void;

  /** Removes a namespace from the in-scope namespaces of the element. */
  removeNamespace(namespace: string): void;

  /** Replace a child with a new one. */
  replace(propertyName: string, value: XML): void;

  /** Replace the children of the object with the value (typically an XML List). */
  setChildren(value: XML): void;

  /** Sets the local name of the XML object to the requested value. */
  setLocalName(name: string): void;

  /** Sets the name of the XML object to the requested value (possibly qualified). */
  setName(name: string): void;

  /** Sets the namespace of the XML object to the requested value. */
  setNamespace(ns: string): void;

  /** Concatenation of all text node children. */
  text(): string;

  /** For elements without element children, returns the values of the text node children. For elements with element children, returns same as toXMLString. For other kinds of objects, the value of the object. */
  toString(): string;

  /** Returns this XML object. */
  valueOf(): string;
}

declare class VMRouter {
  /** Dispatches a message to a channel, specified by the deployed channel name. If the dispatch fails for any reason (for example, if the target channel is not started), a Response object with the ERROR status and the error message will be returned. */
  routeMessage(
    channelName: java.lang.String,
    rawMessage: com.mirth.connect.server.userutil.RawMessage | java.lang.String,
  ): com.mirth.connect.userutil.Response;

  /** Dispatches a message to a channel, specified by the deployed channel ID. If the dispatch fails for any reason (for example, if the target channel is not started), a Response object with the ERROR status and the error message will be returned. */
  routeMessageByChannelId(
    channelId: java.lang.String | string,
    rawMessage: com.mirth.connect.server.userutil.RawMessage | java.lang.String,
  ): com.mirth.connect.userutil.Response;
}

/** Replaces `${...}` template tokens (map values, message variables, system fields) in a string. */
declare class TemplateValueReplacer {
  /** Replaces template tokens in the given string using the current message context. */
  replaceValues(template: java.lang.String | string): java.lang.String;
  /** Replaces template tokens using the given channel ID for additional context. */
  replaceValues(
    template: java.lang.String | string,
    channelId: java.lang.String | string,
  ): java.lang.String;
  /** Replaces template tokens using an explicit map of replacement values. */
  replaceValues(
    template: java.lang.String | string,
    map: java.util.Map<java.lang.String, java.lang.Object>,
  ): java.lang.String;
}
