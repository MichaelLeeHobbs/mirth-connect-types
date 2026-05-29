// com.mirth.connect.userutil.* — the client+server User API: message/connector
// wrappers, Status/ContentType enums, list/map builders, and HTTP helpers.
//
// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;
// re-run `pnpm run generate` to regenerate.

declare namespace com {
  namespace mirth {
    namespace connect {
      namespace userutil {
        /**
         * Used to store and retrieve details about message attachments such as the name, contents, and
         * MIME type. When using a variable to specify attachments, such as in an SMTP Sender or
         * Web Service Sender, the variable must reference a list of AttachmentEntry objects.
         */
        class AttachmentEntry extends java.lang.Object implements java.io.Serializable {
          /**
           * Instantiates a new AttachmentEntry with no name, content, or MIME type.
           */
          constructor();

          /**
           * Instantiates a new AttachmentEntry that copies the name, content, and MIME type
           * from a given AttachmentEntry object.
           *
           * @param attachment - The AttachmentEntry object to copy.
           */
          constructor(attachment: com.mirth.connect.userutil.AttachmentEntry);

          /**
           * Instantiates a new AttachmentEntry with a name, content, and a MIME type.
           *
           * @param name - The name of the attachment entry.
           * @param content - The content to store for the attachment entry.
           * @param mimeType - The MIME type of the attachment entry.
           */
          constructor(
            name: java.lang.String,
            content: java.lang.String,
            mimeType: java.lang.String,
          );

          /**
           * Returns the name of the attachment entry.
           *
           * @returns The name of the attachment entry.
           */
          getName(): java.lang.String;

          /**
           * Sets the name of the attachment entry.
           *
           * @param name - The name of the attachment entry.
           */
          setName(name: java.lang.String): void;

          /**
           * Returns the content of the attachment entry.
           *
           * @returns The content of the attachment entry.
           */
          getContent(): java.lang.String;

          /**
           * Sets the content of the attachment entry.
           *
           * @param content - The content of the attachment entry.
           */
          setContent(content: java.lang.String): void;

          /**
           * Returns the MIME type of the attachment entry.
           *
           * @returns The MIME type of the attachment entry.
           */
          getMimeType(): java.lang.String;

          /**
           * Sets the MIME type of the attachment entry.
           *
           * @param mimeType - The MIME type of the attachment entry.
           */
          setMimeType(mimeType: java.lang.String): void;

          /**
           * Description copied from class: java.lang.Object
           *
           * Indicates whether some other object is "equal to" this one.
           *
           * The equals method implements an equivalence relation
           * on non-null object references:
           *
           * It is reflexive: for any non-null reference value
           * x, x.equals(x) should return
           * true.
           *
           * It is symmetric: for any non-null reference values
           * x and y, x.equals(y)
           * should return true if and only if
           * y.equals(x) returns true.
           *
           * It is transitive: for any non-null reference values
           * x, y, and z, if
           * x.equals(y) returns true and
           * y.equals(z) returns true, then
           * x.equals(z) should return true.
           *
           * It is consistent: for any non-null reference values
           * x and y, multiple invocations of
           * x.equals(y) consistently return true
           * or consistently return false, provided no
           * information used in equals comparisons on the
           * objects is modified.
           *
           * For any non-null reference value x,
           * x.equals(null) should return false.
           *
           * The equals method for class Object implements
           * the most discriminating possible equivalence relation on objects;
           * that is, for any non-null reference values x and
           * y, this method returns true if and only
           * if x and y refer to the same object
           * (x == y has the value true).
           *
           * Note that it is generally necessary to override the hashCode
           * method whenever this method is overridden, so as to maintain the
           * general contract for the hashCode method, which states
           * that equal objects must have equal hash codes.
           *
           * @param obj - the reference object with which to compare.
           * @returns true if this object is the same as the obj argument; false otherwise.
           */
          equals(obj: java.lang.Object): boolean;
        }

        /**
         * Denotes various types of content created by a channel. Available types are:
         *
         * RAW, PROCESSED_RAW, TRANSFORMED, ENCODED, SENT, RESPONSE, RESPONSE_TRANSFORMED,
         * PROCESSED_RESPONSE, CONNECTOR_MAP, CHANNEL_MAP, RESPONSE_MAP, PROCESSING_ERROR,
         * POSTPROCESSOR_ERROR, RESPONSE_ERROR, SOURCE_MAP
         */
        enum ContentType {
          RAW,
          PROCESSED_RAW,
          TRANSFORMED,
          ENCODED,
          SENT,
          RESPONSE,
          RESPONSE_TRANSFORMED,
          PROCESSED_RESPONSE,
          CONNECTOR_MAP,
          CHANNEL_MAP,
          RESPONSE_MAP,
          PROCESSING_ERROR,
          POSTPROCESSOR_ERROR,
          RESPONSE_ERROR,
          SOURCE_MAP,
        }

        namespace ContentType {
          /**
           * Returns an array containing the constants of this enum type, in
           * the order they are declared. This method may be used to iterate
           * over the constants as follows:
           *
           * for (ContentType c : ContentType.values())
           * System.out.println(c);
           *
           * @returns an array containing the constants of this enum type, in the order they are declared
           */
          function values(): ContentType[];

          /**
           * Returns the enum constant of this type with the specified name.
           * The string must match exactly an identifier used to declare an
           * enum constant in this type. (Extraneous whitespace characters are
           * not permitted.)
           *
           * @param name - the name of the enum constant to be returned.
           * @returns the enum constant with the specified name
           * @throws IllegalArgumentException - if this enum type has no constant with the specified name
           * @throws NullPointerException - if the argument is null
           */
          function valueOf(name: java.lang.String): ContentType;
        }

        /**
         * This class represents an message attachment and is used to retrieve details such as the
         * replacement token or content type.
         */
        class ImmutableAttachment extends java.lang.Object {
          /**
           * Instantiates a new ImmutableAttachment object.
           *
           * @param attachment - The Attachment object that this object will reference for retrieving data.
           */
          constructor(attachment: com.mirth.connect.donkey.model.message.attachment.Attachment);

          /**
           * Returns the unique replacement token for the attachment. This token should replace the
           * attachment content in the message string, and will be used to re-attach the attachment
           * content in the outbound message before it is sent to a downstream system.
           *
           * @returns The unique replacement token for the attachment.
           */
          getAttachmentId(): java.lang.String;

          /**
           * Returns the unique ID for the attachment.
           *
           * @returns The unique ID for the attachment.
           */
          getId(): java.lang.String;

          /**
           * Returns the content of the attachment as a byte array.
           *
           * @returns The content of the attachment as a byte array.
           */
          getContent(): byte[];

          /**
           * Returns the MIME type of the attachment.
           *
           * @returns The MIME type of the attachment.
           */
          getType(): java.lang.String;

          /**
           * Returns a boolean indicating whether the attachment content is encrypted.
           *
           * @returns A boolean indicating whether the attachment content is encrypted.
           */
          isEncrypted(): boolean;
        }

        /**
         * This class represents a connector message and is used to retrieve details such as the message ID,
         * metadata ID, status, and various content types.
         */
        class ImmutableConnectorMessage extends java.lang.Object {
          /**
           * Instantiates a new ImmutableConnectorMessage object.
           *
           * @param connectorMessage - The connector message that this object will reference for retrieving data.
           */
          constructor(connectorMessage: com.mirth.connect.donkey.model.message.ConnectorMessage);

          /**
           * Instantiates a new ImmutableConnectorMessage object.
           *
           * @param connectorMessage - The connector message that this object will reference for retrieving data.
           * @param modifiableMaps - If true, variable maps (e.g. connector/channel/response) will be modifiable, and values may be set in them as well as retrieved. Otherwise, data will only be able to be retrieved from the maps, and no updates will be allowed.
           */
          constructor(
            connectorMessage: com.mirth.connect.donkey.model.message.ConnectorMessage,
            modifiableMaps: boolean,
          );

          /**
           * Instantiates a new ImmutableConnectorMessage object.
           *
           * @param connectorMessage - The connector message that this object will reference for retrieving data.
           * @param modifiableMaps - If true, variable maps (e.g. connector/channel/response) will be modifiable, and values may be set in them as well as retrieved. Otherwise, data will only be able to be retrieved from the maps, and no updates will be allowed.
           * @param destinationIdMap - A map containing all applicable destination names in the channel and their corresponding connector metadata ids.
           */
          constructor(
            connectorMessage: com.mirth.connect.donkey.model.message.ConnectorMessage,
            modifiableMaps: boolean,
            destinationIdMap: java.util.Map<java.lang.String, java.lang.Integer>,
          );

          /**
           * Returns the metadata ID of this connector message. Note that the source connector has a
           * metadata ID of 0.
           *
           * @returns The metadata ID of this connector message.
           */
          getMetaDataId(): int;

          /**
           * Returns the ID of the channel associated with this connector message.
           *
           * @returns The ID of the channel associated with this connector message.
           */
          getChannelId(): java.lang.String;

          /**
           * Returns the Name of the channel associated with this connector message.
           *
           * @returns The Name of the channel associated with this connector message.
           */
          getChannelName(): java.lang.String;

          /**
           * Returns the name of the connector associated with this connector message.
           *
           * @returns The name of the connector associated with this connector message.
           */
          getConnectorName(): java.lang.String;

          /**
           * Returns the ID of the server associated with this connector message.
           *
           * @returns The ID of the server associated with this connector message.
           */
          getServerId(): java.lang.String;

          /**
           * Returns the date/time that this connector message was created by the channel.
           *
           * @returns The date/time that this connector message was created by the channel.
           */
          getReceivedDate(): java.util.Calendar;

          /**
           * Returns the number of times this message has been attempted to be dispatched by the
           * connector.
           *
           * @returns The number of times this message has been attempted to be dispatched by the connector.
           */
          getSendAttempts(): int;

          /**
           * Returns the date/time immediately before this connector message's most recent send attempt.
           * Only valid for destination connectors in the response transformer or postprocessor. Returns
           * null otherwise.
           *
           * @returns The date/time immediately before this connector message's most recent send attempt.
           */
          getSendDate(): java.util.Calendar;

          /**
           * Returns the date/time immediately after this connector message's response is received. Only
           * valid for destination connectors in the response transformer or postprocessor. Returns null
           * otherwise.
           *
           * @returns The date/time immediately after this connector message's response is received.
           */
          getResponseDate(): java.util.Calendar;

          /**
           * Returns the status (e.g. SENT) of this connector message.
           *
           * @returns The status (e.g. SENT) of this connector message.
           */
          getStatus(): com.mirth.connect.userutil.Status;

          /**
           * Retrieves content associated with this connector message.
           *
           * @param contentType - The ContentType (e.g. RAW, ENCODED) of the content to retrieve.
           * @returns The content, as an ImmutableMessageContent object.
           */
          getMessageContent(
            contentType: com.mirth.connect.userutil.ContentType,
          ): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves content associated with this connector message.
           *
           * @param contentType - The ContentType (e.g. RAW, ENCODED) of the content to retrieve.
           * @returns The content, as an ImmutableMessageContent object.
           * @deprecated The getContent(contentType) method has been deprecated and will soon be removed.
           * Please use getMessageContent(contentType) instead.
           */
          getContent(
            contentType: com.mirth.connect.userutil.ContentType,
          ): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves raw content associated with this connector message.
           *
           * @returns The raw content, as an ImmutableMessageContent object.
           */
          getRaw(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves raw content associated with this connector message.
           *
           * @returns The raw content, as a string.
           */
          getRawData(): java.lang.String;

          /**
           * Retrieves processed raw content associated with this connector message.
           *
           * @returns The processed raw content, as an ImmutableMessageContent object.
           */
          getProcessedRaw(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves processed raw content associated with this connector message.
           *
           * @returns The processed raw content, as a string.
           */
          getProcessedRawData(): java.lang.String;

          /**
           * Retrieves transformed content associated with this connector message.
           *
           * @returns The transformed content, as an ImmutableMessageContent object.
           */
          getTransformed(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves transformed content associated with this connector message.
           *
           * @returns The transformed content, as a string.
           */
          getTransformedData(): java.lang.String;

          /**
           * Retrieves encoded content associated with this connector message.
           *
           * @returns The encoded content, as an ImmutableMessageContent object.
           */
          getEncoded(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves encoded content associated with this connector message.
           *
           * @returns The encoded content, as a string.
           */
          getEncodedData(): java.lang.String;

          /**
           * Retrieves response content associated with this connector message.
           *
           * @returns The response content, as an ImmutableMessageContent object.
           */
          getResponse(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves response content associated with this connector message.
           *
           * @returns The response content, as a string.
           */
          getResponseData(): com.mirth.connect.userutil.Response;

          /**
           * Retrieves transformed response content associated with this connector message.
           *
           * @returns The transformed response content, as an ImmutableMessageContent object.
           */
          getResponseTransformed(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves transformed response content associated with this connector message.
           *
           * @returns The transformed response content, as a string.
           */
          getResponseTransformedData(): java.lang.String;

          /**
           * Retrieves processed response content associated with this connector message.
           *
           * @returns The processed response content, as an ImmutableMessageContent object.
           */
          getProcessedResponse(): com.mirth.connect.userutil.ImmutableMessageContent;

          /**
           * Retrieves processed response content associated with this connector message.
           *
           * @returns The processed response content, as a string.
           */
          getProcessedResponseData(): com.mirth.connect.userutil.Response;

          /**
           * Returns the sequential ID of the overall Message associated with this connector message.
           *
           * @returns The sequential ID of the overall Message associated with this connector message.
           */
          getMessageId(): long;

          /**
           * Returns the source map. This map is unmodifiable and only data retrieval will be allowed.
           *
           * @returns The source map.
           */
          getSourceMap(): java.util.Map<java.lang.String, java.lang.Object>;

          /**
           * Returns the connector map. If this connector message was instantiated with a 'true' value for
           * modifiableMaps, then this map will allow both data retrieval and updates. Otherwise, the map
           * will be unmodifiable and only data retrieval will be allowed.
           *
           * @returns The connector map.
           */
          getConnectorMap(): java.util.Map<java.lang.String, java.lang.Object>;

          /**
           * Returns the channel map. If this connector message was instantiated with a 'true' value for
           * modifiableMaps, then this map will allow both data retrieval and updates. Otherwise, the map
           * will be unmodifiable and only data retrieval will be allowed.
           *
           * @returns The channel map.
           */
          getChannelMap(): java.util.Map<java.lang.String, java.lang.Object>;

          /**
           * Returns the response map. If this connector message was instantiated with a 'true' value for
           * modifiableMaps, then this map will allow both data retrieval and updates. Otherwise, the map
           * will be unmodifiable and only data retrieval will be allowed. In addition, if this connector
           * message was instantiated with the destinationNameMap parameter, the map will check
           * destination names as well as the proper "d#" keys when retrieving data.
           *
           * @returns The response map.
           */
          getResponseMap(): java.util.Map<java.lang.String, java.lang.Object>;

          /**
           * Returns the postprocessing error string associated with this connector message, if it exists.
           *
           * @returns The postprocessing error string associated with this connector message, if it exists.
           */
          getPostProcessorError(): java.lang.String;

          /**
           * Returns the processing error string associated with this connector message, if it exists.
           *
           * @returns The processing error string associated with this connector message, if it exists.
           */
          getProcessingError(): java.lang.String;

          /**
           * Returns the response error string associated with this connector message, if it exists.
           *
           * @returns The response error string associated with this connector message, if it exists.
           */
          getResponseError(): java.lang.String;

          /**
           * Returns a Map of destination connector names linked to their corresponding "d#" response map
           * keys (where "#" is the destination connector metadata ID).
           *
           * @returns A Map of destination connector names linked to their corresponding "d#" response map keys.
           * @deprecated This method is deprecated and will soon be removed. Please use
           * getDestinationIdMap() instead.
           */
          getDestinationNameMap(): java.util.Map<java.lang.String, java.lang.String>;

          /**
           * Returns a Map of destination connector names linked to their corresponding connector metadata
           * ID.
           *
           * @returns A Map of destination connector names linked to their corresponding connector metadata ID.
           */
          getDestinationIdMap(): java.util.Map<java.lang.String, java.lang.Integer>;

          /**
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * This class represents an overall message and is used to retrieve details such as the message ID,
         * specific connector messages, or the merged connector message.
         */
        class ImmutableMessage extends java.lang.Object {
          /**
           * Instantiates a new ImmutableMessage object.
           *
           * @param message - The Message object that this object will reference for retrieving data.
           */
          constructor(message: com.mirth.connect.donkey.model.message.Message);

          /**
           * Returns the sequential ID of this message, as a Long.
           *
           * @returns The sequential ID of this message, as a Long.
           */
          getMessageId(): java.lang.Long;

          /**
           * Returns the ID of the server associated with this message.
           *
           * @returns The ID of the server associated with this message.
           */
          getServerId(): java.lang.String;

          /**
           * Returns the ID of the channel associated with this message.
           *
           * @returns The ID of the channel associated with this message.
           */
          getChannelId(): java.lang.String;

          /**
           * Returns the original date/time that this message was created by the channel. If the message
           * is reprocessed at a later point, this date will remain the same and instead the connector
           * message received dates will be updated.
           *
           * @returns The original date/time that this message was created by the channel.
           * @deprecated This method is deprecated and will soon be removed. This method currently returns
           * the received date of the source connector message.
           */
          getReceivedDate(): java.util.Calendar;

          /**
           * Returns whether this message has finished processing through a channel. A message is
           * considered "processed" if it correctly flows through each applicable connector and the
           * postprocessor script finishes. Even if a non-fatal error occurs on a particular connector
           * message and the status ends up as ERROR, or if a message is queued by a destination and has
           * not yet been sent to the outbound system, it can still be considered processed.
           *
           * @returns A boolean indicating whether this message has finished processing through a channel.
           */
          isProcessed(): boolean;

          /**
           * Returns the ID of the original message this one was reprocessed from.
           *
           * @returns The ID of the original message this one was reprocessed from.
           */
          getOriginalId(): java.lang.Long;

          /**
           * Returns the ID of the original message this one was imported from.
           *
           * @returns The ID of the original message this one was imported from.
           */
          getImportId(): java.lang.Long;

          /**
           * Returns the ID of the original channel this message was reprocessed from.
           *
           * @returns The ID of the original channel this message was reprocessed from.
           */
          getImportChannelId(): java.lang.String;

          /**
           * Returns a list of attachments associated with this message. This will only be populated in
           * certain cases, such as when a message is being exported or archived.
           *
           * @returns A list of attachments associated with this message.
           */
          getAttachments(): java.util.List<com.mirth.connect.userutil.ImmutableAttachment>;

          /**
           * Returns a map of connector messages associated with this message. The keys are the metadata
           * IDs (as Integer objects), and the values are the connector messages themselves.
           *
           * @returns A map of connector messages associated with this message.
           */
          getConnectorMessages(): java.util.Map<
            java.lang.Integer,
            com.mirth.connect.userutil.ImmutableConnectorMessage
          >;

          /**
           * Returns a "merged" connector message containing data from all connector messages combined.
           * The raw and processed raw content is copied from the source connector, while values in the
           * channel and response maps are copied from all connectors.
           *
           * @returns A "merged" connector message containing data from all connector messages combined.
           */
          getMergedConnectorMessage(): com.mirth.connect.userutil.ImmutableConnectorMessage;

          /**
           * Returns a Map of destination connector names linked to their corresponding "d#" response map
           * keys (where "#" is the destination connector metadata ID).
           *
           * @returns A Map of destination connector names linked to their corresponding "d#" response map keys.
           * @deprecated This method is deprecated and will soon be removed. Please use
           * getDestinationIdMap() instead.
           */
          getDestinationNameMap(): java.util.Map<java.lang.String, java.lang.String>;

          /**
           * Returns a Map of destination connector names linked to their corresponding connector metadata
           * ID.
           *
           * @returns A Map of destination connector names linked to their corresponding connector metadata ID.
           */
          getDestinationIdMap(): java.util.Map<java.lang.String, java.lang.Integer>;

          /**
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * This class represents content associated with a connector message.
         */
        class ImmutableMessageContent extends java.lang.Object {
          /**
           * Instantiates a new ImmutableMessageContent object.
           *
           * @param messageContent - The MessageContent object that this object will reference for retrieving data.
           */
          constructor(messageContent: com.mirth.connect.donkey.model.message.MessageContent);

          /**
           * Returns the ContentType of this message content (e.g. RAW, ENCODED).
           *
           * @returns The ContentType of this message content (e.g. RAW, ENCODED).
           */
          getContentType(): com.mirth.connect.userutil.ContentType;

          /**
           * Returns the actual content, as a string.
           *
           * @returns The actual content, as a string.
           */
          getContent(): java.lang.String;

          /**
           * Returns the sequential ID of the overall Message associated with this message content.
           *
           * @returns The sequential ID of the overall Message associated with this message content.
           */
          getMessageId(): long;

          /**
           * Returns the metadata ID of the connector associated with this message content. Note that the
           * source connector has a metadata ID of 0.
           *
           * @returns The metadata ID of the connector associated with this message content.
           */
          getMetaDataId(): int;

          /**
           * Returns the data type (e.g. "HL7V2") of this message content.
           *
           * @returns The data type (e.g. "HL7V2") of this message content.
           */
          getDataType(): java.lang.String;
        }

        /**
         * Provides JSON utility methods.
         */
        class JsonUtil extends java.lang.Object {
          /**
           * Formats an JSON string with indented markup.
           *
           * @param input - The JSON string to format.
           * @returns The formatted JSON string.
           */
          static prettyPrint(input: java.lang.String): java.lang.String;

          /**
           * Escapes any special JSON characters in the input.
           *
           * @param input - The string to escape.
           * @returns The escaped string.
           */
          static escape(input: java.lang.String): java.lang.String;

          /**
           * Converts a JSON string to XML. This is the same as calling toXml(String jsonString, boolean
           * multiplePI, boolean prettyPrint) with multiplePI = false and prettyPrint = false
           *
           * @param jsonString - The JSON string to convert.
           * @returns The converted XML string.
           * @throws Exception - If the conversion failed.
           */
          static toXml(jsonString: java.lang.String): java.lang.String;

          /**
           * Converts a JSON string to XML.
           *
           * @param jsonString - The JSON string to convert.
           * @param multiplePI - If true, the <? xml-multiple ... ?> processing instruction will be included for arrays.
           * @param prettyPrint - Whether or not to fully indent the XML output.
           * @returns The converted XML string.
           * @throws Exception - If the conversion failed.
           */
          static toXml(
            jsonString: java.lang.String,
            multiplePI: boolean,
            prettyPrint: boolean,
          ): java.lang.String;
        }

        /**
         * Convenience class to allow fluent building of lists.
         */
        class ListBuilder extends java.lang.Object implements java.util.List<any> {
          /**
           * Adds an element to the list using the add(java.lang.Object) method, and returns this builder.
           *
           * @param e - element to be appended to this list
           * @returns This ListBuilder instance.
           */
          append(e: java.lang.Object): com.mirth.connect.userutil.ListBuilder;

          /**
           * Returns the number of elements in this list. If this list contains
           * more than Integer.MAX_VALUE elements, returns
           * Integer.MAX_VALUE.
           *
           * @returns the number of elements in this list
           */
          size(): int;

          /**
           * Returns true if this list contains no elements.
           *
           * @returns true if this list contains no elements
           */
          isEmpty(): boolean;

          /**
           * Returns true if this list contains the specified element.
           * More formally, returns true if and only if this list contains
           * at least one element e such that
           * (o==null ? e==null : o.equals(e)).
           *
           * @param o - element whose presence in this list is to be tested
           * @returns true if this list contains the specified element
           */
          contains(o: java.lang.Object): boolean;

          /**
           * Returns an iterator over the elements in this list in proper sequence.
           *
           * @returns an iterator over the elements in this list in proper sequence
           */
          iterator(): java.util.Iterator<any>;

          /**
           * Returns an array containing all of the elements in this list in proper
           * sequence (from first to last element).
           *
           * The returned array will be "safe" in that no references to it are
           * maintained by this list. (In other words, this method must
           * allocate a new array even if this list is backed by an array).
           * The caller is thus free to modify the returned array.
           *
           * This method acts as bridge between array-based and collection-based
           * APIs.
           *
           * @returns an array containing all of the elements in this list in proper sequence
           */
          toArray(): java.lang.Object[];

          /**
           * Returns an array containing all of the elements in this list in
           * proper sequence (from first to last element); the runtime type of
           * the returned array is that of the specified array. If the list fits
           * in the specified array, it is returned therein. Otherwise, a new
           * array is allocated with the runtime type of the specified array and
           * the size of this list.
           *
           * If the list fits in the specified array with room to spare (i.e.,
           * the array has more elements than the list), the element in the array
           * immediately following the end of the list is set to null.
           * (This is useful in determining the length of the list only if
           * the caller knows that the list does not contain any null elements.)
           *
           * Like the List.toArray() method, this method acts as bridge between
           * array-based and collection-based APIs. Further, this method allows
           * precise control over the runtime type of the output array, and may,
           * under certain circumstances, be used to save allocation costs.
           *
           * Suppose x is a list known to contain only strings.
           * The following code can be used to dump the list into a newly
           * allocated array of String:
           *
           * String[] y = x.toArray(new String[0]);
           *
           * Note that toArray(new Object[0]) is identical in function to
           * toArray().
           *
           * @param a - the array into which the elements of this list are to be stored, if it is big enough; otherwise, a new array of the same runtime type is allocated for this purpose.
           * @returns an array containing the elements of this list
           */
          toArray(a: java.lang.Object[]): java.lang.Object[];

          /**
           * Appends the specified element to the end of this list (optional
           * operation).
           *
           * Lists that support this operation may place limitations on what
           * elements may be added to this list. In particular, some
           * lists will refuse to add null elements, and others will impose
           * restrictions on the type of elements that may be added. List
           * classes should clearly specify in their documentation any restrictions
           * on what elements may be added.
           *
           * @param e - element to be appended to this list
           * @returns true (as specified by Collection.add(E))
           */
          add(e: java.lang.Object): boolean;

          /**
           * Removes the first occurrence of the specified element from this list,
           * if it is present (optional operation). If this list does not contain
           * the element, it is unchanged. More formally, removes the element with
           * the lowest index i such that
           * (o==null ? get(i)==null : o.equals(get(i)))
           * (if such an element exists). Returns true if this list
           * contained the specified element (or equivalently, if this list changed
           * as a result of the call).
           *
           * @param o - element to be removed from this list, if present
           * @returns true if this list contained the specified element
           */
          remove(o: java.lang.Object): boolean;

          /**
           * Returns true if this list contains all of the elements of the
           * specified collection.
           *
           * @param c - collection to be checked for containment in this list
           * @returns true if this list contains all of the elements of the specified collection
           */
          containsAll(c: java.util.Collection<any>): boolean;

          /**
           * Appends all of the elements in the specified collection to the end of
           * this list, in the order that they are returned by the specified
           * collection's iterator (optional operation). The behavior of this
           * operation is undefined if the specified collection is modified while
           * the operation is in progress. (Note that this will occur if the
           * specified collection is this list, and it's nonempty.)
           *
           * @param c - collection containing elements to be added to this list
           * @returns true if this list changed as a result of the call
           */
          addAll(c: java.util.Collection<any>): boolean;

          /**
           * Inserts all of the elements in the specified collection into this
           * list at the specified position (optional operation). Shifts the
           * element currently at that position (if any) and any subsequent
           * elements to the right (increases their indices). The new elements
           * will appear in this list in the order that they are returned by the
           * specified collection's iterator. The behavior of this operation is
           * undefined if the specified collection is modified while the
           * operation is in progress. (Note that this will occur if the specified
           * collection is this list, and it's nonempty.)
           *
           * @param index - index at which to insert the first element from the specified collection
           * @param c - collection containing elements to be added to this list
           * @returns true if this list changed as a result of the call
           */
          addAll(index: int, c: java.util.Collection<any>): boolean;

          /**
           * Removes from this list all of its elements that are contained in the
           * specified collection (optional operation).
           *
           * @param c - collection containing elements to be removed from this list
           * @returns true if this list changed as a result of the call
           */
          removeAll(c: java.util.Collection<any>): boolean;

          /**
           * Retains only the elements in this list that are contained in the
           * specified collection (optional operation). In other words, removes
           * from this list all of its elements that are not contained in the
           * specified collection.
           *
           * @param c - collection containing elements to be retained in this list
           * @returns true if this list changed as a result of the call
           */
          retainAll(c: java.util.Collection<any>): boolean;

          /**
           * Removes all of the elements from this list (optional operation).
           * The list will be empty after this call returns.
           */
          clear(): void;

          /**
           * Returns the element at the specified position in this list.
           *
           * @param index - index of the element to return
           * @returns the element at the specified position in this list
           */
          get(index: int): java.lang.Object;

          /**
           * Replaces the element at the specified position in this list with the
           * specified element (optional operation).
           *
           * @param index - index of the element to replace
           * @param element - element to be stored at the specified position
           * @returns the element previously at the specified position
           */
          set(index: int, element: java.lang.Object): java.lang.Object;

          /**
           * Inserts the specified element at the specified position in this list
           * (optional operation). Shifts the element currently at that position
           * (if any) and any subsequent elements to the right (adds one to their
           * indices).
           *
           * @param index - index at which the specified element is to be inserted
           * @param element - element to be inserted
           */
          add(index: int, element: java.lang.Object): void;

          /**
           * Removes the element at the specified position in this list (optional
           * operation). Shifts any subsequent elements to the left (subtracts one
           * from their indices). Returns the element that was removed from the
           * list.
           *
           * @param index - the index of the element to be removed
           * @returns the element previously at the specified position
           */
          remove(index: int): java.lang.Object;

          /**
           * Returns the index of the first occurrence of the specified element
           * in this list, or -1 if this list does not contain the element.
           * More formally, returns the lowest index i such that
           * (o==null ? get(i)==null : o.equals(get(i))),
           * or -1 if there is no such index.
           *
           * @param o - element to search for
           * @returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
           */
          indexOf(o: java.lang.Object): int;

          /**
           * Returns the index of the last occurrence of the specified element
           * in this list, or -1 if this list does not contain the element.
           * More formally, returns the highest index i such that
           * (o==null ? get(i)==null : o.equals(get(i))),
           * or -1 if there is no such index.
           *
           * @param o - element to search for
           * @returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
           */
          lastIndexOf(o: java.lang.Object): int;

          /**
           * Returns a list iterator over the elements in this list (in proper
           * sequence).
           *
           * @returns a list iterator over the elements in this list (in proper sequence)
           */
          listIterator(): java.util.ListIterator<any>;

          /**
           * Returns a list iterator over the elements in this list (in proper
           * sequence), starting at the specified position in the list.
           * The specified index indicates the first element that would be
           * returned by an initial call to next.
           * An initial call to previous would
           * return the element with the specified index minus one.
           *
           * @param index - index of the first element to be returned from the list iterator (by a call to next)
           * @returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list
           */
          listIterator(index: int): java.util.ListIterator<any>;

          /**
           * Returns a view of the portion of this list between the specified
           * fromIndex, inclusive, and toIndex, exclusive. (If
           * fromIndex and toIndex are equal, the returned list is
           * empty.) The returned list is backed by this list, so non-structural
           * changes in the returned list are reflected in this list, and vice-versa.
           * The returned list supports all of the optional list operations supported
           * by this list.
           *
           * This method eliminates the need for explicit range operations (of
           * the sort that commonly exist for arrays). Any operation that expects
           * a list can be used as a range operation by passing a subList view
           * instead of a whole list. For example, the following idiom
           * removes a range of elements from a list:
           *
           * list.subList(from, to).clear();
           *
           * Similar idioms may be constructed for indexOf and
           * lastIndexOf, and all of the algorithms in the
           * Collections class can be applied to a subList.
           *
           * The semantics of the list returned by this method become undefined if
           * the backing list (i.e., this list) is structurally modified in
           * any way other than via the returned list. (Structural modifications are
           * those that change the size of this list, or otherwise perturb it in such
           * a fashion that iterations in progress may yield incorrect results.)
           *
           * @param fromIndex - low endpoint (inclusive) of the subList
           * @param toIndex - high endpoint (exclusive) of the subList
           * @returns a view of the specified range within this list
           */
          subList(fromIndex: int, toIndex: int): java.util.List<any>;

          /**
           * Indicates whether some other object is "equal to" this one.
           *
           * The equals method implements an equivalence relation
           * on non-null object references:
           *
           * It is reflexive: for any non-null reference value
           * x, x.equals(x) should return
           * true.
           *
           * It is symmetric: for any non-null reference values
           * x and y, x.equals(y)
           * should return true if and only if
           * y.equals(x) returns true.
           *
           * It is transitive: for any non-null reference values
           * x, y, and z, if
           * x.equals(y) returns true and
           * y.equals(z) returns true, then
           * x.equals(z) should return true.
           *
           * It is consistent: for any non-null reference values
           * x and y, multiple invocations of
           * x.equals(y) consistently return true
           * or consistently return false, provided no
           * information used in equals comparisons on the
           * objects is modified.
           *
           * For any non-null reference value x,
           * x.equals(null) should return false.
           *
           * The equals method for class Object implements
           * the most discriminating possible equivalence relation on objects;
           * that is, for any non-null reference values x and
           * y, this method returns true if and only
           * if x and y refer to the same object
           * (x == y has the value true).
           *
           * Note that it is generally necessary to override the hashCode
           * method whenever this method is overridden, so as to maintain the
           * general contract for the hashCode method, which states
           * that equal objects must have equal hash codes.
           *
           * @param obj - the reference object with which to compare.
           * @returns true if this object is the same as the obj argument; false otherwise.
           */
          equals(obj: java.lang.Object): boolean;

          /**
           * Returns a hash code value for the object. This method is
           * supported for the benefit of hash tables such as those provided by
           * HashMap.
           *
           * The general contract of hashCode is:
           *
           * Whenever it is invoked on the same object more than once during
           * an execution of a Java application, the hashCode method
           * must consistently return the same integer, provided no information
           * used in equals comparisons on the object is modified.
           * This integer need not remain consistent from one execution of an
           * application to another execution of the same application.
           *
           * If two objects are equal according to the equals(Object)
           * method, then calling the hashCode method on each of
           * the two objects must produce the same integer result.
           *
           * It is not required that if two objects are unequal
           * according to the Object.equals(java.lang.Object)
           * method, then calling the hashCode method on each of the
           * two objects must produce distinct integer results. However, the
           * programmer should be aware that producing distinct integer results
           * for unequal objects may improve the performance of hash tables.
           *
           * As much as is reasonably practical, the hashCode method defined by
           * class Object does return distinct integers for distinct
           * objects. (This is typically implemented by converting the internal
           * address of the object into an integer, but this implementation
           * technique is not required by the
           * Java&trade; programming language.)
           *
           * @returns a hash code value for this object.
           */
          hashCode(): int;

          /**
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * Convenience class to allow fluent building of lists.
         */
        class Lists extends java.lang.Object {
          constructor();

          /**
           * Instantiates a new ListBuilder using an ArrayList.
           *
           * Fluent builder over a `java.util.ArrayList`. Chain `.append(...)`; the builder itself is a `List`.
           *
           * @returns The new ListBuilder instance.
           * @example
           * ```js
           * // Build a java.util.List fluently.
           * var ids = Lists.list('A').append('B').append('C');
           * ```
           */
          static list(): com.mirth.connect.userutil.ListBuilder;

          /**
           * Instantiates a new ListBuilder using an ArrayList and the given element.
           *
           * @param e - element to be appended to this list
           * @returns The new ListBuilder instance.
           */
          static list(e: java.lang.Object): com.mirth.connect.userutil.ListBuilder;

          /**
           * Instantiates a new ListBuilder using the given list.
           *
           * @param list - The delegate List to use.
           * @returns The new ListBuilder instance.
           */
          static list(list: java.util.List<any>): com.mirth.connect.userutil.ListBuilder;
        }

        /**
         * Convenience class to allow fluent building of maps.
         */
        class MapBuilder extends java.lang.Object implements java.util.Map<any, any> {
          /**
           * Adds an entry to the map using the put(java.lang.Object, java.lang.Object) method, and returns this builder.
           *
           * @param key - key with which the specified value is to be associated
           * @param value - value to be associated with the specified key
           * @returns This MapBuilder instance.
           */
          add(
            key: java.lang.Object,
            value: java.lang.Object,
          ): com.mirth.connect.userutil.MapBuilder;

          /**
           * Returns the number of key-value mappings in this map. If the
           * map contains more than Integer.MAX_VALUE elements, returns
           * Integer.MAX_VALUE.
           *
           * @returns the number of key-value mappings in this map
           */
          size(): int;

          /**
           * Returns true if this map contains no key-value mappings.
           *
           * @returns true if this map contains no key-value mappings
           */
          isEmpty(): boolean;

          /**
           * Returns true if this map contains a mapping for the specified
           * key. More formally, returns true if and only if
           * this map contains a mapping for a key k such that
           * (key==null ? k==null : key.equals(k)). (There can be
           * at most one such mapping.)
           *
           * @param key - key whose presence in this map is to be tested
           * @returns true if this map contains a mapping for the specified key
           */
          containsKey(key: java.lang.Object): boolean;

          /**
           * Returns true if this map maps one or more keys to the
           * specified value. More formally, returns true if and only if
           * this map contains at least one mapping to a value v such that
           * (value==null ? v==null : value.equals(v)). This operation
           * will probably require time linear in the map size for most
           * implementations of the Map interface.
           *
           * @param value - value whose presence in this map is to be tested
           * @returns true if this map maps one or more keys to the specified value
           */
          containsValue(value: java.lang.Object): boolean;

          /**
           * Returns the value to which the specified key is mapped,
           * or null if this map contains no mapping for the key.
           *
           * More formally, if this map contains a mapping from a key
           * k to a value v such that (key==null ? k==null :
           * key.equals(k)), then this method returns v; otherwise
           * it returns null. (There can be at most one such mapping.)
           *
           * If this map permits null values, then a return value of
           * null does not necessarily indicate that the map
           * contains no mapping for the key; it's also possible that the map
           * explicitly maps the key to null. The containsKey operation may be used to distinguish these two cases.
           *
           * @param key - the key whose associated value is to be returned
           * @returns the value to which the specified key is mapped, or null if this map contains no mapping for the key
           */
          get(key: java.lang.Object): java.lang.Object;

          /**
           * Associates the specified value with the specified key in this map
           * (optional operation). If the map previously contained a mapping for
           * the key, the old value is replaced by the specified value. (A map
           * m is said to contain a mapping for a key k if and only
           * if m.containsKey(k) would return
           * true.)
           *
           * @param key - key with which the specified value is to be associated
           * @param value - value to be associated with the specified key
           * @returns the previous value associated with key, or null if there was no mapping for key. (A null return can also indicate that the map previously associated null with key, if the implementation supports null values.)
           */
          put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;

          /**
           * Removes the mapping for a key from this map if it is present
           * (optional operation). More formally, if this map contains a mapping
           * from key k to value v such that
           * (key==null ? k==null : key.equals(k)), that mapping
           * is removed. (The map can contain at most one such mapping.)
           *
           * Returns the value to which this map previously associated the key,
           * or null if the map contained no mapping for the key.
           *
           * If this map permits null values, then a return value of
           * null does not necessarily indicate that the map
           * contained no mapping for the key; it's also possible that the map
           * explicitly mapped the key to null.
           *
           * The map will not contain a mapping for the specified key once the
           * call returns.
           *
           * @param key - key whose mapping is to be removed from the map
           * @returns the previous value associated with key, or null if there was no mapping for key.
           */
          remove(key: java.lang.Object): java.lang.Object;

          /**
           * Copies all of the mappings from the specified map to this map
           * (optional operation). The effect of this call is equivalent to that
           * of calling put(k, v) on this map once
           * for each mapping from key k to value v in the
           * specified map. The behavior of this operation is undefined if the
           * specified map is modified while the operation is in progress.
           *
           * @param m - mappings to be stored in this map
           */
          putAll(m: java.util.Map<any, any>): void;

          /**
           * Removes all of the mappings from this map (optional operation).
           * The map will be empty after this call returns.
           */
          clear(): void;

          /**
           * Returns a Set view of the keys contained in this map.
           * The set is backed by the map, so changes to the map are
           * reflected in the set, and vice-versa. If the map is modified
           * while an iteration over the set is in progress (except through
           * the iterator's own remove operation), the results of
           * the iteration are undefined. The set supports element removal,
           * which removes the corresponding mapping from the map, via the
           * Iterator.remove, Set.remove,
           * removeAll, retainAll, and clear
           * operations. It does not support the add or addAll
           * operations.
           *
           * @returns a set view of the keys contained in this map
           */
          keySet(): java.util.Set<any>;

          /**
           * Returns a Collection view of the values contained in this map.
           * The collection is backed by the map, so changes to the map are
           * reflected in the collection, and vice-versa. If the map is
           * modified while an iteration over the collection is in progress
           * (except through the iterator's own remove operation),
           * the results of the iteration are undefined. The collection
           * supports element removal, which removes the corresponding
           * mapping from the map, via the Iterator.remove,
           * Collection.remove, removeAll,
           * retainAll and clear operations. It does not
           * support the add or addAll operations.
           *
           * @returns a collection view of the values contained in this map
           */
          values(): java.util.Collection<any>;

          /**
           * Returns a Set view of the mappings contained in this map.
           * The set is backed by the map, so changes to the map are
           * reflected in the set, and vice-versa. If the map is modified
           * while an iteration over the set is in progress (except through
           * the iterator's own remove operation, or through the
           * setValue operation on a map entry returned by the
           * iterator) the results of the iteration are undefined. The set
           * supports element removal, which removes the corresponding
           * mapping from the map, via the Iterator.remove,
           * Set.remove, removeAll, retainAll and
           * clear operations. It does not support the
           * add or addAll operations.
           *
           * @returns a set view of the mappings contained in this map
           */
          entrySet(): java.util.Set<any>;

          /**
           * Indicates whether some other object is "equal to" this one.
           *
           * The equals method implements an equivalence relation
           * on non-null object references:
           *
           * It is reflexive: for any non-null reference value
           * x, x.equals(x) should return
           * true.
           *
           * It is symmetric: for any non-null reference values
           * x and y, x.equals(y)
           * should return true if and only if
           * y.equals(x) returns true.
           *
           * It is transitive: for any non-null reference values
           * x, y, and z, if
           * x.equals(y) returns true and
           * y.equals(z) returns true, then
           * x.equals(z) should return true.
           *
           * It is consistent: for any non-null reference values
           * x and y, multiple invocations of
           * x.equals(y) consistently return true
           * or consistently return false, provided no
           * information used in equals comparisons on the
           * objects is modified.
           *
           * For any non-null reference value x,
           * x.equals(null) should return false.
           *
           * The equals method for class Object implements
           * the most discriminating possible equivalence relation on objects;
           * that is, for any non-null reference values x and
           * y, this method returns true if and only
           * if x and y refer to the same object
           * (x == y has the value true).
           *
           * Note that it is generally necessary to override the hashCode
           * method whenever this method is overridden, so as to maintain the
           * general contract for the hashCode method, which states
           * that equal objects must have equal hash codes.
           *
           * @param obj - the reference object with which to compare.
           * @returns true if this object is the same as the obj argument; false otherwise.
           */
          equals(obj: java.lang.Object): boolean;

          /**
           * Returns a hash code value for the object. This method is
           * supported for the benefit of hash tables such as those provided by
           * HashMap.
           *
           * The general contract of hashCode is:
           *
           * Whenever it is invoked on the same object more than once during
           * an execution of a Java application, the hashCode method
           * must consistently return the same integer, provided no information
           * used in equals comparisons on the object is modified.
           * This integer need not remain consistent from one execution of an
           * application to another execution of the same application.
           *
           * If two objects are equal according to the equals(Object)
           * method, then calling the hashCode method on each of
           * the two objects must produce the same integer result.
           *
           * It is not required that if two objects are unequal
           * according to the Object.equals(java.lang.Object)
           * method, then calling the hashCode method on each of the
           * two objects must produce distinct integer results. However, the
           * programmer should be aware that producing distinct integer results
           * for unequal objects may improve the performance of hash tables.
           *
           * As much as is reasonably practical, the hashCode method defined by
           * class Object does return distinct integers for distinct
           * objects. (This is typically implemented by converting the internal
           * address of the object into an integer, but this implementation
           * technique is not required by the
           * Java&trade; programming language.)
           *
           * @returns a hash code value for this object.
           */
          hashCode(): int;

          /**
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * Convenience class to allow fluent building of maps.
         */
        class Maps extends java.lang.Object {
          constructor();

          /**
           * Instantiates a new MapBuilder using a HashMap.
           *
           * Fluent builder over a `java.util.LinkedHashMap`. Chain `.add(key, value)`; the builder itself is a `Map`.
           *
           * @returns The new MapBuilder instance.
           * @example
           * ```js
           * // Build a java.util.Map fluently and stash it on the channel map.
           * var meta = Maps.map('mrn', mrn).add('channel', channelName);
           * channelMap.put('meta', meta);
           * ```
           */
          static map(): com.mirth.connect.userutil.MapBuilder;

          /**
           * Instantiates a new MapBuilder using a HashMap and the given key/value entry.
           *
           * @param key - key with which the specified value is to be associated
           * @param value - value to be associated with the specified key
           * @returns The new MapBuilder instance.
           */
          static map(
            key: java.lang.Object,
            value: java.lang.Object,
          ): com.mirth.connect.userutil.MapBuilder;

          /**
           * Instantiates a new MapBuilder using the given map.
           *
           * @param map - The delegate map to use.
           * @returns The new MapBuilder instance.
           */
          static map(map: java.util.Map<any, any>): com.mirth.connect.userutil.MapBuilder;
        }

        class MessageHeaders extends java.lang.Object {
          /**
           * @param delegate
           */
          constructor(delegate: java.util.Map<java.lang.String, java.util.List<java.lang.String>>);

          /**
           * Get the first header value for the given key.
           *
           * @param key - The name of the header key.
           * @returns The associated value or null if no value exists.
           * @deprecated This method is deprecated and will soon be removed. Please use getHeader(key) or
           * getHeaderList(key) instead.
           */
          get(key: java.lang.String): java.lang.String;

          /**
           * Get the first header value for the given key.
           *
           * @param key - The name of the header key.
           * @returns The associated value or null if no value exists.
           */
          getHeader(key: java.lang.String): java.lang.String;

          /**
           * Get all header values for the given key.
           *
           * @param key - The name of header key.
           * @returns A list of all header values for the given key or null if no values exist.
           */
          getHeaderList(key: java.lang.String): java.util.List<java.lang.String>;

          /**
           * Get all header keys.
           *
           * @returns A set of all header keys.
           */
          getKeys(): java.util.Set<java.lang.String>;

          /**
           * Check if headers exists for a given key.
           *
           * @param key - The name of the header key.
           * @returns true if headers exist for the given key, false otherwise.
           */
          contains(key: java.lang.String): boolean;

          /**
           * Description copied from class: java.lang.Object
           *
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        class MessageParameters extends java.lang.Object {
          /**
           * @param delegate
           */
          constructor(delegate: java.util.Map<java.lang.String, java.util.List<java.lang.String>>);

          /**
           * Get the first parameter value for the given key.
           *
           * @param key - The name of the parameter key.
           * @returns The associated value or null if no value exists.
           * @deprecated This method is deprecated and will soon be removed. Please use getParameter(key)
           * or getParameterList(key) instead.
           */
          get(key: java.lang.String): java.lang.String;

          /**
           * Get the first parameter value for the given key.
           *
           * @param key - The name of the parameter key.
           * @returns The associated value or null if no value exists.
           */
          getParameter(key: java.lang.String): java.lang.String;

          /**
           * Get all parameter values for the given key.
           *
           * @param key - The name of parameter key.
           * @returns A list of all parameter values for the given key or null if no values exist.
           */
          getParameterList(key: java.lang.String): java.util.List<java.lang.String>;

          /**
           * Get all parameter keys.
           *
           * @returns A set of all parameter keys.
           */
          getKeys(): java.util.Set<java.lang.String>;

          /**
           * Check if parameters exist for a given key.
           *
           * @param key - The name of the parameter key.
           * @returns true if parameters exist for the given key, false otherwise.
           */
          contains(key: java.lang.String): boolean;

          /**
           * Description copied from class: java.lang.Object
           *
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * This class represents a channel or destination response and is used to retrieve details such as
         * the response data, message status, and errors.
         */
        class Response extends java.lang.Object {
          /**
           * Instantiates a new Response object.
           */
          constructor();

          /**
           * Instantiates a new Response object.
           *
           * @param message - The actual response data.
           */
          constructor(message: java.lang.String);

          /**
           * Instantiates a new Response object.
           *
           * @param status - The status (e.g. SENT, ERROR) of the response.
           * @param message - The actual response data.
           */
          constructor(status: com.mirth.connect.userutil.Status, message: java.lang.String);

          /**
           * Instantiates a new Response object.
           *
           * @param status - The status (e.g. SENT, ERROR) of the response.
           * @param message - The actual response data.
           * @param statusMessage - A brief message explaining the reason for the current status.
           */
          constructor(
            status: com.mirth.connect.userutil.Status,
            message: java.lang.String,
            statusMessage: java.lang.String,
          );

          /**
           * Instantiates a new Response object.
           *
           * @param status - The status (e.g. SENT, ERROR) of the response.
           * @param message - The actual response data.
           * @param statusMessage - A brief message explaining the reason for the current status.
           * @param error - The error string associated with this response, if applicable.
           */
          constructor(
            status: com.mirth.connect.userutil.Status,
            message: java.lang.String,
            statusMessage: java.lang.String,
            error: java.lang.String,
          );

          /**
           * Instantiates a new Response object.
           *
           * NOTE: This should be excluded from the public Javadoc.
           *
           * @param response - The underlying Donkey Response object to reference.
           */
          constructor(response: com.mirth.connect.donkey.model.message.Response);

          /**
           * Returns the actual response data, as a string.
           *
           * @returns The actual response data, as a string.
           */
          getMessage(): java.lang.String;

          /**
           * Sets the response data.
           *
           * @param message - The response data (String) to use.
           */
          setMessage(message: java.lang.String): void;

          /**
           * Returns the Status (e.g. SENT, QUEUED) of this response.
           *
           * @returns The Status (e.g. SENT, QUEUED) of this response.
           */
          getStatus(): com.mirth.connect.userutil.Status;

          /**
           * Sets the status of this response.
           *
           * @param status - The status (e.g. SENT, QUEUED) to use for this response.
           */
          setStatus(status: com.mirth.connect.userutil.Status): void;

          /**
           * Returns the error string associated with this response, if it exists.
           *
           * @returns The error string associated with this response, if it exists.
           */
          getError(): java.lang.String;

          /**
           * Sets the error string to be associated with this response.
           *
           * @param error - The error string to use.
           */
          setError(error: java.lang.String): void;

          /**
           * Returns a brief message explaining the reason for the current status.
           *
           * @returns A brief message explaining the reason for the current status.
           */
          getStatusMessage(): java.lang.String;

          /**
           * Sets the status message to use for this response.
           *
           * @param statusMessage - A brief message explaining the reason for the current status.
           */
          setStatusMessage(statusMessage: java.lang.String): void;

          /**
           * Indicates whether some other object is "equal to" this one.
           *
           * The equals method implements an equivalence relation
           * on non-null object references:
           *
           * It is reflexive: for any non-null reference value
           * x, x.equals(x) should return
           * true.
           *
           * It is symmetric: for any non-null reference values
           * x and y, x.equals(y)
           * should return true if and only if
           * y.equals(x) returns true.
           *
           * It is transitive: for any non-null reference values
           * x, y, and z, if
           * x.equals(y) returns true and
           * y.equals(z) returns true, then
           * x.equals(z) should return true.
           *
           * It is consistent: for any non-null reference values
           * x and y, multiple invocations of
           * x.equals(y) consistently return true
           * or consistently return false, provided no
           * information used in equals comparisons on the
           * objects is modified.
           *
           * For any non-null reference value x,
           * x.equals(null) should return false.
           *
           * The equals method for class Object implements
           * the most discriminating possible equivalence relation on objects;
           * that is, for any non-null reference values x and
           * y, this method returns true if and only
           * if x and y refer to the same object
           * (x == y has the value true).
           *
           * Note that it is generally necessary to override the hashCode
           * method whenever this method is overridden, so as to maintain the
           * general contract for the hashCode method, which states
           * that equal objects must have equal hash codes.
           *
           * @param other - the reference object with which to compare.
           * @returns true if this object is the same as the obj argument; false otherwise.
           */
          equals(other: java.lang.Object): boolean;

          /**
           * Returns a string representation of the object. In general, the
           * toString method returns a string that
           * "textually represents" this object. The result should
           * be a concise but informative representation that is easy for a
           * person to read.
           * It is recommended that all subclasses override this method.
           *
           * The toString method for class Object
           * returns a string consisting of the name of the class of which the
           * object is an instance, the at-sign character `@', and
           * the unsigned hexadecimal representation of the hash code of the
           * object. In other words, this method returns a string equal to the
           * value of:
           *
           * getClass().getName() + '@' + Integer.toHexString(hashCode())
           *
           * @returns a string representation of the object.
           */
          toString(): string;
        }

        /**
         * A wrapper class for the response map which allows users to retrieve values using the proper "d#"
         * key (where "#" is the destination connector's metadata ID), or by using the actual destination
         * name.
         */
        class ResponseMap
          extends java.lang.Object
          implements java.util.Map<java.lang.String, java.lang.Object>
        {
          /**
           * Instantiates a new ResponseMap object.
           *
           * @param delegate - The underlying Map to reference for retrieving/setting data.
           * @param destinationIdMap - A Map of destination names and their corresponding "d#" response map keys (where "#" is the destination connector metadata ID).
           */
          constructor(
            delegate: java.util.Map<java.lang.String, java.lang.Object>,
            destinationIdMap: java.util.Map<java.lang.String, java.lang.Integer>,
          );

          /**
           * Description copied from interface: java.util.Map
           *
           * Removes all of the mappings from this map (optional operation).
           * The map will be empty after this call returns.
           */
          clear(): void;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns true if this map contains a mapping for the specified
           * key. More formally, returns true if and only if
           * this map contains a mapping for a key k such that
           * (key==null ? k==null : key.equals(k)). (There can be
           * at most one such mapping.)
           *
           * @param key - key whose presence in this map is to be tested
           * @returns true if this map contains a mapping for the specified key
           */
          containsKey(key: java.lang.Object): boolean;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns true if this map maps one or more keys to the
           * specified value. More formally, returns true if and only if
           * this map contains at least one mapping to a value v such that
           * (value==null ? v==null : value.equals(v)). This operation
           * will probably require time linear in the map size for most
           * implementations of the Map interface.
           *
           * @param value - value whose presence in this map is to be tested
           * @returns true if this map maps one or more keys to the specified value
           */
          containsValue(value: java.lang.Object): boolean;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns a Set view of the mappings contained in this map.
           * The set is backed by the map, so changes to the map are
           * reflected in the set, and vice-versa. If the map is modified
           * while an iteration over the set is in progress (except through
           * the iterator's own remove operation, or through the
           * setValue operation on a map entry returned by the
           * iterator) the results of the iteration are undefined. The set
           * supports element removal, which removes the corresponding
           * mapping from the map, via the Iterator.remove,
           * Set.remove, removeAll, retainAll and
           * clear operations. It does not support the
           * add or addAll operations.
           *
           * @returns a set view of the mappings contained in this map
           */
          entrySet(): java.util.Set<java.util.Map.Entry<java.lang.String, java.lang.Object>>;

          /**
           * Description copied from class: java.lang.Object
           *
           * Indicates whether some other object is "equal to" this one.
           *
           * The equals method implements an equivalence relation
           * on non-null object references:
           *
           * It is reflexive: for any non-null reference value
           * x, x.equals(x) should return
           * true.
           *
           * It is symmetric: for any non-null reference values
           * x and y, x.equals(y)
           * should return true if and only if
           * y.equals(x) returns true.
           *
           * It is transitive: for any non-null reference values
           * x, y, and z, if
           * x.equals(y) returns true and
           * y.equals(z) returns true, then
           * x.equals(z) should return true.
           *
           * It is consistent: for any non-null reference values
           * x and y, multiple invocations of
           * x.equals(y) consistently return true
           * or consistently return false, provided no
           * information used in equals comparisons on the
           * objects is modified.
           *
           * For any non-null reference value x,
           * x.equals(null) should return false.
           *
           * The equals method for class Object implements
           * the most discriminating possible equivalence relation on objects;
           * that is, for any non-null reference values x and
           * y, this method returns true if and only
           * if x and y refer to the same object
           * (x == y has the value true).
           *
           * Note that it is generally necessary to override the hashCode
           * method whenever this method is overridden, so as to maintain the
           * general contract for the hashCode method, which states
           * that equal objects must have equal hash codes.
           *
           * @param o - the reference object with which to compare.
           * @returns true if this object is the same as the obj argument; false otherwise.
           */
          equals(o: java.lang.Object): boolean;

          /**
           * Returns the value to which the specified key is mapped, or null if this map contains no
           * mapping for the key. If the given key is not contained in the underlying map, this object
           * will traverse the destination name map in an attempt to find the correct key.
           *
           * @param key - the key whose associated value is to be returned
           * @returns the value to which the specified key is mapped, or null if this map contains no mapping for the key
           */
          get(key: java.lang.Object): java.lang.Object;

          /**
           * Description copied from class: java.lang.Object
           *
           * Returns a hash code value for the object. This method is
           * supported for the benefit of hash tables such as those provided by
           * HashMap.
           *
           * The general contract of hashCode is:
           *
           * Whenever it is invoked on the same object more than once during
           * an execution of a Java application, the hashCode method
           * must consistently return the same integer, provided no information
           * used in equals comparisons on the object is modified.
           * This integer need not remain consistent from one execution of an
           * application to another execution of the same application.
           *
           * If two objects are equal according to the equals(Object)
           * method, then calling the hashCode method on each of
           * the two objects must produce the same integer result.
           *
           * It is not required that if two objects are unequal
           * according to the Object.equals(java.lang.Object)
           * method, then calling the hashCode method on each of the
           * two objects must produce distinct integer results. However, the
           * programmer should be aware that producing distinct integer results
           * for unequal objects may improve the performance of hash tables.
           *
           * As much as is reasonably practical, the hashCode method defined by
           * class Object does return distinct integers for distinct
           * objects. (This is typically implemented by converting the internal
           * address of the object into an integer, but this implementation
           * technique is not required by the
           * Java&trade; programming language.)
           *
           * @returns a hash code value for this object.
           */
          hashCode(): int;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns true if this map contains no key-value mappings.
           *
           * @returns true if this map contains no key-value mappings
           */
          isEmpty(): boolean;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns a Set view of the keys contained in this map.
           * The set is backed by the map, so changes to the map are
           * reflected in the set, and vice-versa. If the map is modified
           * while an iteration over the set is in progress (except through
           * the iterator's own remove operation), the results of
           * the iteration are undefined. The set supports element removal,
           * which removes the corresponding mapping from the map, via the
           * Iterator.remove, Set.remove,
           * removeAll, retainAll, and clear
           * operations. It does not support the add or addAll
           * operations.
           *
           * @returns a set view of the keys contained in this map
           */
          keySet(): java.util.Set<java.lang.String>;

          /**
           * Description copied from interface: java.util.Map
           *
           * Associates the specified value with the specified key in this map
           * (optional operation). If the map previously contained a mapping for
           * the key, the old value is replaced by the specified value. (A map
           * m is said to contain a mapping for a key k if and only
           * if m.containsKey(k) would return
           * true.)
           *
           * @param key - key with which the specified value is to be associated
           * @param value - value to be associated with the specified key
           * @returns the previous value associated with key, or null if there was no mapping for key. (A null return can also indicate that the map previously associated null with key, if the implementation supports null values.)
           */
          put(key: java.lang.String, value: java.lang.Object): java.lang.Object;

          /**
           * Description copied from interface: java.util.Map
           *
           * Copies all of the mappings from the specified map to this map
           * (optional operation). The effect of this call is equivalent to that
           * of calling put(k, v) on this map once
           * for each mapping from key k to value v in the
           * specified map. The behavior of this operation is undefined if the
           * specified map is modified while the operation is in progress.
           *
           * @param m - mappings to be stored in this map
           */
          putAll(m: java.util.Map<java.lang.String, java.lang.Object>): void;

          /**
           * Description copied from interface: java.util.Map
           *
           * Removes the mapping for a key from this map if it is present
           * (optional operation). More formally, if this map contains a mapping
           * from key k to value v such that
           * (key==null ? k==null : key.equals(k)), that mapping
           * is removed. (The map can contain at most one such mapping.)
           *
           * Returns the value to which this map previously associated the key,
           * or null if the map contained no mapping for the key.
           *
           * If this map permits null values, then a return value of
           * null does not necessarily indicate that the map
           * contained no mapping for the key; it's also possible that the map
           * explicitly mapped the key to null.
           *
           * The map will not contain a mapping for the specified key once the
           * call returns.
           *
           * @param key - key whose mapping is to be removed from the map
           * @returns the previous value associated with key, or null if there was no mapping for key.
           */
          remove(key: java.lang.Object): java.lang.Object;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns the number of key-value mappings in this map. If the
           * map contains more than Integer.MAX_VALUE elements, returns
           * Integer.MAX_VALUE.
           *
           * @returns the number of key-value mappings in this map
           */
          size(): int;

          /**
           * Description copied from interface: java.util.Map
           *
           * Returns a Collection view of the values contained in this map.
           * The collection is backed by the map, so changes to the map are
           * reflected in the collection, and vice-versa. If the map is
           * modified while an iteration over the collection is in progress
           * (except through the iterator's own remove operation),
           * the results of the iteration are undefined. The collection
           * supports element removal, which removes the corresponding
           * mapping from the map, via the Iterator.remove,
           * Collection.remove, removeAll,
           * retainAll and clear operations. It does not
           * support the add or addAll operations.
           *
           * @returns a collection view of the values contained in this map
           */
          values(): java.util.Collection<java.lang.Object>;
        }

        /**
         * Denotes the status of a connector message or response. Available statuses:
         *
         * RECEIVED, FILTERED, TRANSFORMED, SENT, QUEUED, ERROR, PENDING
         */
        enum Status {
          RECEIVED,
          FILTERED,
          TRANSFORMED,
          SENT,
          QUEUED,
          ERROR,
          PENDING,
        }

        namespace Status {
          /**
           * Returns an array containing the constants of this enum type, in
           * the order they are declared. This method may be used to iterate
           * over the constants as follows:
           *
           * for (Status c : Status.values())
           * System.out.println(c);
           *
           * @returns an array containing the constants of this enum type, in the order they are declared
           */
          function values(): Status[];

          /**
           * Returns the enum constant of this type with the specified name.
           * The string must match exactly an identifier used to declare an
           * enum constant in this type. (Extraneous whitespace characters are
           * not permitted.)
           *
           * @param name - the name of the enum constant to be returned.
           * @returns the enum constant with the specified name
           * @throws IllegalArgumentException - if this enum type has no constant with the specified name
           * @throws NullPointerException - if the argument is null
           */
          function valueOf(name: java.lang.String): Status;
        }

        /**
         * Provides XML utility methods.
         */
        class XmlUtil extends java.lang.Object {
          /**
           * Formats an XML string with indented markup.
           *
           * @param input - The XML string to format.
           * @returns The formatted XML string.
           */
          static prettyPrint(input: java.lang.String): java.lang.String;

          /**
           * Converts an XML/HTML entity reference into a string with the literal character.
           *
           * @param entity - The XML/HTML entity to decode.
           * @returns A string containing the decoded character.
           */
          static decode(entity: java.lang.String): java.lang.String;

          /**
           * Encodes a character into the corresponding XML/HTML entity.
           *
           * @param s - The character to encode.
           * @returns The encoded XML/HTML entity.
           */
          static encode(s: char): java.lang.String;

          /**
           * Converts a string, encoding characters into the corresponding XML/HTML entities as needed.
           *
           * @param s - The string to encode.
           * @returns The encoded string with replaced XML/HTML entities.
           */
          static encode(s: java.lang.String): java.lang.String;

          /**
           * Converts a character array, encoding characters into the corresponding XML/HTML entities as
           * needed.
           *
           * @param text - The character array to encode.
           * @param start - The index to start at in the character array.
           * @param length - The maximum amount of characters to read from the array.
           * @returns The encoded string with replaced XML/HTML entities.
           */
          static encode(text: char[], start: int, length: int): java.lang.String;

          /**
           * Converts an XML string to JSON, while stripping bound namespace prefixes.
           *
           * @param xmlString - The XML string to convert.
           * @returns The converted JSON string.
           * @throws Exception - If conversion failed.
           */
          static toJson(xmlString: java.lang.String): java.lang.String;

          /**
           * Converts an XML string to JSON.
           *
           * @param xmlString - The XML string to convert.
           * @param normalizeNamespaces - Whether or not to normalize namespaces by stripping prefixes.
           * @returns The converted JSON string.
           * @throws Exception - If conversion failed.
           */
          static toJson(
            xmlString: java.lang.String,
            normalizeNamespaces: boolean,
          ): java.lang.String;

          /**
           * Converts an XML string to JSON.
           *
           * @param xmlString - The XML string to convert.
           * @param autoArray - If true, sibling nodes with the same tag name will be consolidated into a JSON array. If false, multiple properties with the same name will be present.
           * @param autoPrimitive - If true, element text will be converted to JSON primitive values where applicable. If false, element text will always be converted to string values.
           * @param prettyPrint - Whether or not to fully indent the JSON output.
           * @param normalizeNamespaces - Whether or not to normalize namespaces by stripping prefixes.
           * @returns The converted JSON string.
           * @throws Exception - If conversion failed.
           */
          static toJson(
            xmlString: java.lang.String,
            autoArray: boolean,
            autoPrimitive: boolean,
            prettyPrint: boolean,
            normalizeNamespaces: boolean,
          ): java.lang.String;

          /**
           * Converts an XML string to JSON.
           *
           * @param xmlString - The XML string to convert.
           * @param autoArray - If true, sibling nodes with the same tag name will be consolidated into a JSON array. If false, multiple properties with the same name will be present.
           * @param autoPrimitive - If true, element text will be converted to JSON primitive values where applicable. If false, element text will always be converted to string values.
           * @param prettyPrint - Whether or not to fully indent the JSON output.
           * @param normalizeNamespaces - Whether or not to normalize namespaces by stripping prefixes.
           * @param alwaysArray - If true, all nodes except for the top-level object will be written into JSON arrays. Overrides the autoArray option.
           * @param alwaysExpandObjects - If true, all values will be written in the expanded "$" syntax.
           * @returns The converted JSON string.
           * @throws Exception - If conversion failed.
           */
          static toJson(
            xmlString: java.lang.String,
            autoArray: boolean,
            autoPrimitive: boolean,
            prettyPrint: boolean,
            normalizeNamespaces: boolean,
            alwaysArray: boolean,
            alwaysExpandObjects: boolean,
          ): java.lang.String;
        }
      }
    }
  }
}
