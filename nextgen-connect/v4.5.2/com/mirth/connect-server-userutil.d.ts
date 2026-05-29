// com.mirth.connect.server.* — the server-side User API (server.userutil) plus
// the internal server.util.javascript context-factory marker interface.
//
// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;
// re-run `pnpm run generate` to regenerate.

declare namespace com {
  namespace mirth {
    namespace connect {
      namespace server {
        namespace util {
          namespace javascript {
            /**
             * Internal Mirth context factory for JavaScript execution.
             * This is an internal class used by ContextFactory and DatabaseConnectionFactory.
             */
            interface MirthContextFactory {
              // Internal implementation - not directly used by channel scripts
            }
          }
        }

        namespace userutil {
          /**
           * Allows users to generate HL7 v2.x acknowledgments based on an inbound message, with a specified
           * ACK code and custom text message. This class will not work as expected if the HL7 v2.x data type
           * plugin is disabled or uninstalled.
           */
          class ACKGenerator extends java.lang.Object {
            /**
             * Instantiates a new ACKGenerator object.
             *
             * @deprecated
             */
            constructor();

            /**
             * Generates an HL7 v2.x acknowledgment. Assumes that the inbound message is proper ER7, and
             * uses the default format "yyyyMMddHHmmss" for the MSH.7 message date/time.
             *
             * @param message - The inbound HL7 v2.x message to generate the ACK for.
             * @param acknowledgementCode - The MSA.1 ACK code to use (e.g. AA, AR, AE).
             * @param textMessage - The MSA.3 text message to use.
             * @returns The generated HL7 v2.x acknowledgment.
             * @throws Exception - If the acknowledgement could not be generated.
             */
            static generateAckResponse(
              message: java.lang.String,
              acknowledgementCode: java.lang.String,
              textMessage: java.lang.String,
            ): java.lang.String;

            /**
             * Generates an HL7 v2.x acknowledgment.
             *
             * @param message - The inbound HL7 v2.x message to generate the ACK for.
             * @param dataType - If "XML", assumes the inbound message is formatted in XML, and the acknowledgment returned will also be XML.
             * @param acknowledgementCode - The MSA.1 ACK code to use (e.g. AA, AR, AE).
             * @param textMessage - The MSA.3 text message to use.
             * @param dateFormat - The date/time format used to generate a timestamp for the MSH.7 message date/time (e.g. "yyyyMMddHHmmss").
             * @param errorMessage - The ERR.1 error message to use. If left blank, an ERR segment will not be generated.
             * @returns The generated HL7 v2.x acknowledgment.
             * @throws Exception - If the acknowledgement could not be generated.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * generateAckResponse(message, isXML, acknowledgementCode, textMessage, dateFormat,
             * errorMessage) instead.
             */
            static generateAckResponse(
              message: java.lang.String,
              dataType: java.lang.String,
              acknowledgementCode: java.lang.String,
              textMessage: java.lang.String,
              dateFormat: java.lang.String,
              errorMessage: java.lang.String,
            ): java.lang.String;

            /**
             * Generates an HL7 v2.x acknowledgment.
             *
             * @param message - The inbound HL7 v2.x message to generate the ACK for.
             * @param isXML - If true, assumes the inbound message is formatted in XML, and the acknowledgment returned will also be XML.
             * @param acknowledgementCode - The MSA.1 ACK code to use (e.g. AA, AR, AE).
             * @param textMessage - The MSA.3 text message to use.
             * @param dateFormat - The date/time format used to generate a timestamp for the MSH.7 message date/time (e.g. "yyyyMMddHHmmss").
             * @param errorMessage - The ERR.1 error message to use. If left blank, an ERR segment will not be generated.
             * @returns The generated HL7 v2.x acknowledgment.
             * @throws Exception - If the acknowledgement could not be generated.
             */
            static generateAckResponse(
              message: java.lang.String,
              isXML: boolean,
              acknowledgementCode: java.lang.String,
              textMessage: java.lang.String,
              dateFormat: java.lang.String,
              errorMessage: java.lang.String,
            ): java.lang.String;
          }

          /**
           * Allows users to dispatch error events which can be alerted on.
           */
          class AlertSender extends java.lang.Object {
            /**
             * Instantiates a new AlertSender.
             *
             * @param channelId - The ID of the channel to associate dispatched alert events with.
             */
            constructor(channelId: java.lang.String);

            /**
             * Instantiates a new AlertSender.
             *
             * @param connectorMessage - The connector message to associate dispatched alert events with.
             */
            constructor(connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage);

            /**
             * Dispatches an error event that can be alerted on.
             *
             * @param errorMessage - A custom error message to include with the error event.
             */
            sendAlert(errorMessage: java.lang.String): void;
          }

          /**
           * Used to store and retrieve details about message attachments such as the ID, MIME type, and
           * content.
           */
          class Attachment extends java.lang.Object {
            /**
             * Instantiates a new Attachment with no ID, content, or MIME type.
             */
            constructor();

            /**
             * Instantiates a new Attachment.
             *
             * @param id - The unique ID of the attachment.
             * @param content - The content (byte array) to store for the attachment.
             * @param type - The MIME type of the attachment.
             */
            constructor(id: java.lang.String, content: byte[], type: java.lang.String);

            /**
             * Instantiates a new Attachment with String data using UTF-8 charset encoding.
             *
             * @param id - The unique ID of the attachment.
             * @param content - The string representation of the attachment content.
             * @param type - The MIME type of the attachment.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            constructor(id: java.lang.String, content: java.lang.String, type: java.lang.String);

            /**
             * Instantiates a new Attachment with String data and a given charset encoding.
             *
             * @param id - The unique ID of the attachment.
             * @param content - The string representation of the attachment content.
             * @param charset - The charset encoding to convert the string to bytes with.
             * @param type - The MIME type of the attachment.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            constructor(
              id: java.lang.String,
              content: java.lang.String,
              charset: java.lang.String,
              type: java.lang.String,
            );

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
             * Sets the unique ID for the attachment.
             *
             * @param id - The unique ID to use for the attachment.
             */
            setId(id: java.lang.String): void;

            /**
             * Returns the content of the attachment as a byte array.
             *
             * @returns The content of the attachment as a byte array.
             */
            getContent(): byte[];

            /**
             * Returns the content of the attachment as a string, using UTF-8 encoding.
             *
             * @returns The content of the attachment as a string, using UTF-8 encoding.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            getContentString(): java.lang.String;

            /**
             * Returns the content of the attachment as a string, using the specified charset encoding.
             *
             * @param charset - The charset encoding to convert the content bytes to a string with.
             * @returns The content of the attachment as a string, using the specified charset encoding.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            getContentString(charset: java.lang.String): java.lang.String;

            /**
             * Sets the content of the attachment.
             *
             * @param content - The content (byte array) to use for the attachment.
             */
            setContent(content: byte[]): void;

            /**
             * Sets the content of the attachment, using UTF-8 encoding.
             *
             * @param content - The string representation of the attachment content.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            setContentString(content: java.lang.String): void;

            /**
             * Sets the content of the attachment, using the specified charset encoding.
             *
             * @param content - The string representation of the attachment content.
             * @param charset - The charset encoding to convert the string to bytes with.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            setContentString(content: java.lang.String, charset: java.lang.String): void;

            /**
             * Returns the MIME type of the attachment.
             *
             * @returns The MIME type of the attachment.
             */
            getType(): java.lang.String;

            /**
             * Sets the MIME type for the attachment.
             *
             * @param type - The MIME type to set for the attachment.
             */
            setType(type: java.lang.String): void;
          }

          /**
           * Provides utility methods for creating, retrieving, and re-attaching message attachments.
           */
          class AttachmentUtil extends java.lang.Object {
            /**
             * Replaces any unique attachment tokens (e.g. "${ATTACH:id}") with the corresponding attachment
             * content, and returns the full post-replacement message as a byte array.
             *
             * Use inside a destination or response transformer to expand `${ATTACH:id}` tokens back into the real attachment content before sending.
             *
             * @param raw - The raw message string to replace tokens from.
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @param charsetEncoding - If binary mode is not used, the resulting byte array will be encoded using this charset.
             * @param binary - If enabled, the raw data is assumed to be Base64 encoded. The resulting byte array will be the raw Base64 decoded bytes.
             * @returns The resulting message as a byte array, with all applicable attachment content re-inserted.
             * @example
             * ```js
             * // Re-insert attachment content for the current message, as a String.
             * var fullMessage = AttachmentUtil.reAttachMessage(connectorMessage);
             * // Or operate on arbitrary raw text + a charset, returning bytes:
             * var bytes = AttachmentUtil.reAttachMessage(
             *   connectorMessage.getRawData(),
             *   connectorMessage,
             *   'UTF-8',
             *   false
             * );
             * ```
             */
            static reAttachMessage(
              raw: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              charsetEncoding: java.lang.String,
              binary: boolean,
            ): byte[];

            /**
             * Replaces any unique attachment tokens (e.g. "${ATTACH:id}") with the corresponding attachment
             * content, and returns the full post-replacement message as a byte array.
             *
             * @param raw - The raw message string to replace tokens from.
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @param charsetEncoding - If binary mode is not used, the resulting byte array will be encoded using this charset.
             * @param binary - If enabled, the raw data is assumed to be Base64 encoded. The resulting byte array will be the raw Base64 decoded bytes.
             * @param reattach - If true, attachment tokens will be replaced with the actual attachment content. Otherwise, local attachment tokens will be replaced only with the corresponding expanded tokens.
             * @param localOnly - If true, only local attachment tokens will be replaced, and expanded tokens will be ignored.
             * @returns The resulting message as a byte array, with all applicable attachment content re-inserted.
             */
            static reAttachMessage(
              raw: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              charsetEncoding: java.lang.String,
              binary: boolean,
              reattach: boolean,
              localOnly: boolean,
            ): byte[];

            /**
             * Replaces any unique attachment tokens (e.g. "${ATTACH:id}") with the corresponding attachment
             * content, and returns the full post-replacement message.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID. The message string will be either the encoded or raw content.
             * @returns The resulting message with all applicable attachment content re-inserted.
             */
            static reAttachMessage(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.lang.String;

            /**
             * Replaces any unique attachment tokens (e.g. "${ATTACH:id}") with the corresponding attachment
             * content, and returns the full post-replacement message.
             *
             * @param raw - The raw message string to replace tokens from.
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @returns The resulting message with all applicable attachment content re-inserted.
             */
            static reAttachMessage(
              raw: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.lang.String;

            /**
             * Returns a List of attachment IDs associated with the current channel / message.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @returns A List of attachment IDs associated with the current channel / message.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment IDs could be retrieved.
             */
            static getMessageAttachmentIds(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.util.List<java.lang.String>;

            /**
             * Returns a List of attachment IDs associated with the current channel / message.
             *
             * @param channelId - The ID of the channel the attachments are associated with.
             * @param messageId - The ID of the message the attachments are associated with.
             * @returns A List of attachment IDs associated with the current channel / message.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment IDs could be retrieved.
             */
            static getMessageAttachmentIds(
              channelId: java.lang.String,
              messageId: java.lang.Long,
            ): java.util.List<java.lang.String>;

            /**
             * Retrieves all attachments associated with a connector message.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @returns A list of attachments associated with the connector message.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachments(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Retrieves all attachments associated with a connector message.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @param base64Decode - If true, the content of each attachment will first be Base64 decoded for convenient use.
             * @returns A list of attachments associated with the connector message.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachments(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              base64Decode: boolean,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Retrieves all attachments associated with a specific channel/message ID.
             *
             * @param channelId - The ID of the channel to retrieve the attachments from.
             * @param messageId - The ID of the message to retrieve the attachments from.
             * @returns A list of attachments associated with the channel/message ID.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachments(
              channelId: java.lang.String,
              messageId: java.lang.Long,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Retrieves all attachments associated with a specific channel/message ID.
             *
             * @param channelId - The ID of the channel to retrieve the attachments from.
             * @param messageId - The ID of the message to retrieve the attachments from.
             * @param base64Decode - If true, the content of each attachment will first be Base64 decoded for convenient use.
             * @returns A list of attachments associated with the channel/message ID.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachments(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              base64Decode: boolean,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Retrieves an attachment from the current channel/message ID.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @param attachmentId - The ID of the attachment to retrieve.
             * @returns The attachment associated with the given IDs, or null if none was found.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment could not be retrieved.
             */
            static getMessageAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachmentId: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Retrieves an attachment from the current channel/message ID.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message, used to identify the channel/message ID.
             * @param attachmentId - The ID of the attachment to retrieve.
             * @param base64Decode - If true, the content of each attachment will first be Base64 decoded for convenient use.
             * @returns The attachment associated with the given IDs, or null if none was found.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment could not be retrieved.
             */
            static getMessageAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachmentId: java.lang.String,
              base64Decode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Retrieves an attachment from a specific channel/message ID.
             *
             * @param channelId - The ID of the channel to retrieve the attachment from.
             * @param messageId - The ID of the message to retrieve the attachment from.
             * @param attachmentId - The ID of the attachment to retrieve.
             * @returns The attachment associated with the given IDs, or null if none was found.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment could not be retrieved.
             */
            static getMessageAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachmentId: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Retrieves an attachment from a specific channel/message ID.
             *
             * @param channelId - The ID of the channel to retrieve the attachment from.
             * @param messageId - The ID of the message to retrieve the attachment from.
             * @param attachmentId - The ID of the attachment to retrieve.
             * @param base64Decode - If true, the content of each attachment will first be Base64 decoded for convenient use.
             * @returns The attachment associated with the given IDs, or null if none was found.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachment could not be retrieved.
             */
            static getMessageAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachmentId: java.lang.String,
              base64Decode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Retrieves an attachment from an upstream channel that sent a message to the current channel.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message. The channel ID and message ID will be retrieved from the source map.
             * @returns A list of attachments associated with the source channel/message IDs.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachmentsFromSourceChannel(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Retrieves an attachment from an upstream channel that sent a message to the current channel.
             *
             * @param connectorMessage - The ConnectorMessage associated with this message. The channel ID and message ID will be retrieved from the source map.
             * @param base64Decode - If true, the content of each attachment will first be Base64 decoded for convenient use.
             * @returns A list of attachments associated with the source channel/message IDs.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If the attachments could not be retrieved.
             */
            static getMessageAttachmentsFromSourceChannel(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              base64Decode: boolean,
            ): java.util.List<com.mirth.connect.server.userutil.Attachment>;

            /**
             * Creates an Attachment and adds it to the provided list.
             *
             * The two-list overloads build an attachment list to return from a script; the `connectorMessage` overloads persist the attachment to the database immediately.
             *
             * @param attachments - The list of attachments to add to.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @returns The attachment added to the list.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             * @example
             * ```js
             * // Collect attachments to return from an Attachment (batch) script.
             * var attachments = new java.util.ArrayList();
             * AttachmentUtil.addAttachment(attachments, pdfBytes, 'application/pdf');
             * return attachments;
             * ```
             */
            static addAttachment(
              attachments: java.util.List<com.mirth.connect.server.userutil.Attachment>,
              content: java.lang.Object,
              type: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Creates an Attachment and adds it to the provided list.
             *
             * @param attachments - The list of attachments to add to.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment added to the list.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static addAttachment(
              attachments: java.util.List<com.mirth.connect.server.userutil.Attachment>,
              content: java.lang.Object,
              type: java.lang.String,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Creates an attachment associated with a given connector message, and inserts it into the
             * database.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @returns The attachment that was created and inserted.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static createAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              content: java.lang.Object,
              type: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Creates an attachment associated with a given connector message, and inserts it into the
             * database.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment that was created and inserted.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static createAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              content: java.lang.Object,
              type: java.lang.String,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param attachmentId - The unique ID of the attachment to update.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachmentId: java.lang.String,
              content: java.lang.Object,
              type: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param attachmentId - The unique ID of the attachment to update.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachmentId: java.lang.String,
              content: java.lang.Object,
              type: java.lang.String,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param attachment - The Attachment object to update.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachment: com.mirth.connect.server.userutil.Attachment,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param connectorMessage - The connector message to be associated with the attachment.
             * @param attachment - The Attachment object to update.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachment: com.mirth.connect.server.userutil.Attachment,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param channelId - The ID of the channel the attachment is associated with.
             * @param messageId - The ID of the message the attachment is associated with.
             * @param attachment - The Attachment object to update.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachment: com.mirth.connect.server.userutil.Attachment,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param channelId - The ID of the channel the attachment is associated with.
             * @param messageId - The ID of the message the attachment is associated with.
             * @param attachment - The Attachment object to update.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachment: com.mirth.connect.server.userutil.Attachment,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param channelId - The ID of the channel the attachment is associated with.
             * @param messageId - The ID of the message the attachment is associated with.
             * @param attachmentId - The unique ID of the attachment to update.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachmentId: java.lang.String,
              content: java.lang.Object,
              type: java.lang.String,
            ): com.mirth.connect.server.userutil.Attachment;

            /**
             * Updates an attachment associated with a given connector message.
             *
             * @param channelId - The ID of the channel the attachment is associated with.
             * @param messageId - The ID of the message the attachment is associated with.
             * @param attachmentId - The unique ID of the attachment to update.
             * @param content - The attachment content (must be a string or byte array).
             * @param type - The MIME type of the attachment.
             * @param base64Encode - If true, the content of each attachment will first be Base64 encoded for convenience.
             * @returns The attachment that was updated.
             * @throws com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException - If the attachment content is not a String or byte array.
             */
            static updateAttachment(
              channelId: java.lang.String,
              messageId: java.lang.Long,
              attachmentId: java.lang.String,
              content: java.lang.Object,
              type: java.lang.String,
              base64Encode: boolean,
            ): com.mirth.connect.server.userutil.Attachment;
          }

          /**
           * A wrapper class for the channel map that checks against the source map in the get(key) method for legacy support.
           */
          class ChannelMap
            extends java.lang.Object
            implements java.util.Map<java.lang.String, java.lang.Object>
          {
            /**
             * Instantiates a new ChannelMap object.
             *
             * @param delegate - The underlying Map to reference for retrieving/setting data.
             * @param sourceMap - The source map associated with the current connector message. This is used to check against in the get(key) method for legacy support.
             */
            constructor(
              delegate: java.util.Map<java.lang.String, java.lang.Object>,
              sourceMap: java.util.Map<java.lang.String, java.lang.Object>,
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
             * mapping for the key. If the channel map does not contain the key but the source map does, an
             * error message is logged out notifying the user that the source map should be used instead.
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
           * This utility class allows the user to query information from channels or to perform actions on
           * channels.
           */
          class ChannelUtil extends java.lang.Object {
            /**
             * Get all channels names.
             *
             * @returns A list of all channel names.
             */
            static getChannelNames(): java.util.List<java.lang.String>;

            /**
             * Get all channel Ids.
             *
             * @returns A list of all channel Ids.
             */
            static getChannelIds(): java.util.List<java.lang.String>;

            /**
             * Get all deployed channels names.
             *
             * @returns A list of all deployed channel names.
             */
            static getDeployedChannelNames(): java.util.List<java.lang.String>;

            /**
             * Get the name for a channel.
             *
             * @param channelId - The channel id of the channel.
             * @returns The channel name of the specified channel.
             * @example
             * ```js
             * // Resolve the human-readable name for a source channel id.
             * var name = ChannelUtil.getChannelName(channelId);
             * logger.info('processing for channel: ' + name);
             * ```
             */
            static getChannelName(channelId: java.lang.String): java.lang.String;

            /**
             * Get all deployed channel Ids.
             *
             * @returns A list of all deployed channel Ids.
             */
            static getDeployedChannelIds(): java.util.List<java.lang.String>;

            /**
             * Get the name for a deployed channel.
             *
             * @param channelId - The channel id of the deployed channel.
             * @returns The channel name of the specified channel.
             */
            static getDeployedChannelName(channelId: java.lang.String): java.lang.String;

            /**
             * Get the id for a deployed channel.
             *
             * @param channelName - The channel name of the deployed channel.
             * @returns The channel Id of the specified channel.
             */
            static getDeployedChannelId(channelName: java.lang.String): java.lang.String;

            /**
             * Start a deployed channel.
             *
             * Returns a Future; call `.get()` to block until the channel finishes starting.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             * @example
             * ```js
             * // Start a downstream channel and wait for it to come up.
             * ChannelUtil.startChannel('Inbound ADT').get();
             * ```
             */
            static startChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Stop a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             * @example
             * ```js
             * // Stop a channel by name or id; block on the returned Future.
             * ChannelUtil.stopChannel('Inbound ADT').get();
             * ```
             */
            static stopChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Pause a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static pauseChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Resume a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static resumeChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Halt a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static haltChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Get the current state of a channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @returns The current DeployedState.
             * @example
             * ```js
             * // Only route when the target channel is actually started.
             * var state = ChannelUtil.getChannelState('Inbound ADT');
             * if (state == DeployedState.STARTED) {
             *   router.routeMessage('Inbound ADT', connectorMessage.getEncodedData());
             * }
             * ```
             */
            static getChannelState(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.DeployedState;

            /**
             * Deploy a channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             */
            static deployChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Undeploy a channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             */
            static undeployChannel(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Check if a channel is currently deployed.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @returns True if the channel is deployed, false if it is not.
             */
            static isChannelDeployed(channelIdOrName: java.lang.String): boolean;

            /**
             * Start a connector on a given channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static startConnector(
              channelIdOrName: java.lang.String,
              metaDataId: java.lang.Integer,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Stop a connector on a given channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static stopConnector(
              channelIdOrName: java.lang.String,
              metaDataId: java.lang.Integer,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Get the current state of a connector.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The current connector state returned as the DeployedState enumerator.
             */
            static getConnectorState(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): com.mirth.connect.server.userutil.DeployedState;

            /**
             * Get the received count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The received count statistic as a Long for the specified channel.
             */
            static getReceivedCount(channelIdOrName: java.lang.String): java.lang.Long;

            /**
             * Get the received count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The received count statistic as a Long for the specified connector.
             */
            static getReceivedCount(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the filtered count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The filtered count statistic as a Long for the specified channel.
             */
            static getFilteredCount(channelIdOrName: java.lang.String): java.lang.Long;

            /**
             * Get the filtered count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The filtered count statistic as a Long for the specified connector.
             */
            static getFilteredCount(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the queued count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The queued count statistic as a Long for the specified channel.
             */
            static getQueuedCount(channelIdOrName: java.lang.String): java.lang.Long;

            /**
             * Get the queued count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The queued count statistic as a Long for the specified connector.
             */
            static getQueuedCount(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the sent count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The sent count statistic as a Long for the specified channel.
             */
            static getSentCount(channelIdOrName: java.lang.String): java.lang.Long;

            /**
             * Get the sent count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The sent count statistic as a Long for the specified connector.
             */
            static getSentCount(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the error count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The error count statistic as a Long for the specified channel.
             */
            static getErrorCount(channelIdOrName: java.lang.String): java.lang.Long;

            /**
             * Get the error count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The error count statistic as a Long for the specified connector.
             */
            static getErrorCount(
              channelIdOrName: java.lang.String,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Reset all statistics for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static resetStatistics(
              channelIdOrName: java.lang.String,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Reset all statistics for the specified connector on the given channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the deployed connector. Note that the source connector has a metadata id of 0 and the aggregate of null.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static resetStatistics(
              channelIdOrName: java.lang.String,
              metaDataId: java.lang.Integer,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Reset the specified statistics for the specified connector on the given channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the deployed connector. Note that the source connector has a metadata id of 0 and the aggregate of null.
             * @param statuses - A collection of statuses to reset.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static resetStatistics(
              channelIdOrName: java.lang.String,
              metaDataId: java.lang.Integer,
              statuses: java.util.Collection<com.mirth.connect.userutil.Status>,
            ): com.mirth.connect.server.userutil.Future<void>;
          }

          /**
           * Allows the user to retrieve information about the current JavaScript context.
           */
          class ContextFactory extends java.lang.Object {
            /**
             * Instantiates a new ContextFactory object.
             *
             * @param delegate - The underlying ContextFactory this class will delegate to.
             */
            constructor(delegate: com.mirth.connect.server.util.javascript.MirthContextFactory);

            /**
             * Returns the set of custom resource IDs that the current JavaScript context is using. If no
             * custom libraries are being used in the current JavaScript context, this will return an empty
             * set.
             *
             * @returns The set of custom resource IDs that the current JavaScript context is using.
             */
            getResourceIds(): java.util.Set<java.lang.String>;

            /**
             * Returns the application classloader that the current JavaScript context is using.
             *
             * @returns The application classloader that the current JavaScript context is using.
             */
            getClassLoader(): java.lang.ClassLoader;

            /**
             * Returns a classloader containing only the libraries contained in the custom resources, with
             * no parent classloader. If no custom libraries are being used in the current JavaScript
             * context, this will return null.
             *
             * @returns A classloader containing only the libraries contained in the custom resources, with no parent classloader.
             */
            getIsolatedClassLoader(): java.lang.ClassLoader;
          }

          /**
           * Provides the ability to run SQL queries again the database connection object instantiated using
           * DatabaseConnectionFactory.
           */
          class DatabaseConnection extends java.lang.Object {
            /**
             * Instantiates a new database connection with the given server address.
             *
             * @param address - The server address to connect to.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(address: java.lang.String);

            /**
             * Instantiates a new database connection with the given server address and connection
             * arguments.
             *
             * @param address - The server address to connect to.
             * @param info - A Properties object containing all applicable connection arguments.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(address: java.lang.String, info: java.util.Properties);

            /**
             * Instantiates a new database connection with the given driver instance and server address.
             *
             * @param driver - The explicit driver instance to connect with.
             * @param address - The server address to connect to.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(driver: java.sql.Driver, address: java.lang.String);

            /**
             * Instantiates a new database connection with the given driver instance, server address, and
             * connection arguments.
             *
             * @param driver - The explicit driver instance to connect with.
             * @param address - The server address to connect to.
             * @param info - A Properties object containing all applicable connection arguments.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(
              driver: java.sql.Driver,
              address: java.lang.String,
              info: java.util.Properties,
            );

            /**
             * Returns the server address.
             *
             * @returns The server address.
             */
            getAddress(): java.lang.String;

            /**
             * Executes a query on the database and returns a CachedRowSet.
             *
             * Returns a disconnected `CachedRowSet`, so the result survives after the connection is closed.
             *
             * @param expression - The query expression to be executed.
             * @returns The result of the query, as a CachedRowSet.
             * @throws SQLException - If a database access error occurs.
             * @example
             * ```js
             * // Parameterized SELECT; iterate the returned CachedRowSet.
             * var rs = dbConn.executeCachedQuery('SELECT name FROM patient WHERE mrn = ?', [mrn]);
             * while (rs.next()) {
             *   logger.info(rs.getString('name'));
             * }
             * ```
             */
            executeCachedQuery(expression: java.lang.String): javax.sql.rowset.CachedRowSet;

            /**
             * Executes an INSERT/UPDATE on the database and returns the row count.
             *
             * @param expression - The statement to be executed.
             * @returns A count of the number of updated rows.
             * @throws SQLException - If a database access error occurs.
             * @example
             * ```js
             * // Parameterized INSERT/UPDATE/DELETE; returns the affected row count.
             * var rows = dbConn.executeUpdate(
             *   'INSERT INTO audit(channel, mrn) VALUES (?, ?)',
             *   [channelName, mrn]
             * );
             * ```
             */
            executeUpdate(expression: java.lang.String): int;

            /**
             * Executes a prepared INSERT/UPDATE statement on the database and returns the row count.
             *
             * @param expression - The prepared statement to be executed.
             * @param parameters - The parameters for the prepared statement.
             * @returns A count of the number of updated rows.
             * @throws SQLException - If a database access error occurs.
             */
            executeUpdate(
              expression: java.lang.String,
              parameters: java.util.List<java.lang.Object>,
            ): int;

            /**
             * Executes a prepared query on the database and returns a CachedRowSet.
             *
             * @param expression - The prepared statement to be executed.
             * @param parameters - The parameters for the prepared statement.
             * @returns The result of the query, as a CachedRowSet.
             * @throws SQLException - If a database access error occurs.
             */
            executeCachedQuery(
              expression: java.lang.String,
              parameters: java.util.List<java.lang.Object>,
            ): javax.sql.rowset.CachedRowSet;

            /**
             * Closes the database connection.
             */
            close(): void;

            /**
             * Sets this connection's auto-commit mode to the given state.
             *
             * @param autoCommit - The value (true or false) to set the connection's auto-commit mode to.
             * @throws SQLException - If a database access error occurs.
             */
            setAutoCommit(autoCommit: boolean): void;

            /**
             * Undoes all changes made in the current transaction and releases any database locks currently
             * held by this Connection object.
             *
             * @throws SQLException - If a database access error occurs.
             */
            rollback(): void;

            /**
             * Makes all changes made since the previous commit/rollback permanent and releases any database
             * locks currently held by this DatabaseConnection object.
             *
             * @throws SQLException - If a database access error occurs.
             */
            commit(): void;

            /**
             * Executes an INSERT/UPDATE statement on the database and returns a CachedRowSet containing any
             * generated keys.
             *
             * @param expression - The statement to be executed.
             * @returns A CachedRowSet containing any generated keys.
             * @throws SQLException - If a database access error occurs.
             */
            executeUpdateAndGetGeneratedKeys(
              expression: java.lang.String,
            ): javax.sql.rowset.CachedRowSet;

            /**
             * Executes a prepared INSERT/UPDATE statement on the database and returns a CachedRowSet
             * containing any generated keys.
             *
             * @param expression - The prepared statement to be executed.
             * @param parameters - The parameters for the prepared statement.
             * @returns A CachedRowSet containing any generated keys.
             * @throws SQLException - If a database access error occurs.
             */
            executeUpdateAndGetGeneratedKeys(
              expression: java.lang.String,
              parameters: java.util.List<java.lang.Object>,
            ): javax.sql.rowset.CachedRowSet;

            /**
             * Returns the database connection (java.sql.Connection) this class is using.
             *
             * @returns The underlying java.sql.Connection object.
             */
            getConnection(): java.sql.Connection;
          }

          /**
           * Used to create database connection objects.
           */
          class DatabaseConnectionFactory extends java.lang.Object {
            /**
             * @param contextFactory
             */
            constructor(
              contextFactory: com.mirth.connect.server.util.javascript.MirthContextFactory,
            );

            /**
             * Instantiates and returns a new DatabaseConnection object with the given connection
             * parameters.
             *
             * A `DatabaseConnectionFactory` is exposed globally in channel scripts. Always close the connection in a `finally` block.
             *
             * @param driver - The JDBC driver class (as a string) to use to create the connection with.
             * @param address - The server address to connect to.
             * @param username - The username to connect with.
             * @param password - The password to connect with.
             * @returns The created DatabaseConnection object.
             * @throws SQLException - If a database access error occurs.
             * @example
             * ```js
             * // Open a DatabaseConnection, query, then close it.
             * var dbConn = DatabaseConnectionFactory.createDatabaseConnection(
             *   'org.postgresql.Driver',
             *   'jdbc:postgresql://db:5432/mirthdb',
             *   'mirthdb',
             *   'mirthdb'
             * );
             * try {
             *   var result = dbConn.executeCachedQuery('SELECT id, name FROM patient WHERE mrn = ?', [mrn]);
             *   while (result.next()) {
             *     logger.info(result.getString('name'));
             *   }
             * } finally {
             *   dbConn.close();
             * }
             * ```
             */
            createDatabaseConnection(
              driver: java.lang.String,
              address: java.lang.String,
              username: java.lang.String,
              password: java.lang.String,
            ): com.mirth.connect.server.userutil.DatabaseConnection;

            /**
             * Instantiates and returns a new DatabaseConnection object with the given connection
             * parameters.
             *
             * @param driver - The JDBC driver class (as a string) to use to create the connection with.
             * @param address - The server address to connect to.
             * @returns The created DatabaseConnection object.
             * @throws SQLException - If a database access error occurs.
             */
            createDatabaseConnection(
              driver: java.lang.String,
              address: java.lang.String,
            ): com.mirth.connect.server.userutil.DatabaseConnection;

            /**
             * Instantiates and returns a new java.sql.Connection object with the given connection
             * parameters.
             *
             * @param driver - The JDBC driver class (as a string) to use to create the connection with.
             * @param address - The server address to connect to.
             * @param username - The username to connect with.
             * @param password - The password to connect with.
             * @returns The created DatabaseConnection object.
             * @throws SQLException - If a database access error occurs.
             */
            createConnection(
              driver: java.lang.String,
              address: java.lang.String,
              username: java.lang.String,
              password: java.lang.String,
            ): java.sql.Connection;

            /**
             * Initializes the specified JDBC driver. This can be used in JavaScript contexts where
             * "Class.forName" can't be called directly.
             *
             * @param driver - The JDBC driver class (as a string) to initialize.
             * @throws Exception - If the driver could not be initialized.
             */
            initializeDriver(driver: java.lang.String): void;
          }

          /**
           * Provides date/time utility methods.
           */
          class DateUtil extends java.lang.Object {
            /**
             * Parses a date string according to the specified pattern and returns a java.util.Date object.
             *
             * @param pattern - The SimpleDateFormat pattern to use (e.g. "yyyyMMddHHmmss").
             * @param date - The date string to parse.
             * @returns A java.util.Date object representing the parsed date.
             * @throws Exception - If the pattern could not be parsed.
             * @example
             * ```js
             * // Parse an HL7 timestamp into a java.util.Date.
             * var d = DateUtil.getDate('yyyyMMddHHmmss', msg['MSH']['MSH.7']['MSH.7.1'].toString());
             * ```
             */
            static getDate(pattern: java.lang.String, date: java.lang.String): java.util.Date;

            /**
             * Formats a java.util.Date object into a string according to a specified pattern.
             *
             * @param pattern - The SimpleDateFormat pattern to use (e.g. "yyyyMMddHHmmss").
             * @param date - The java.util.Date object to format.
             * @returns The formatted date string.
             * @example
             * ```js
             * // Format a java.util.Date back into a string.
             * var d = DateUtil.getDate('yyyyMMddHHmmss', raw);
             * var iso = DateUtil.formatDate("yyyy-MM-dd'T'HH:mm:ss", d);
             * ```
             */
            static formatDate(pattern: java.lang.String, date: java.util.Date): java.lang.String;

            /**
             * Formats the current date into a string according to a specified pattern.
             *
             * @param pattern - The SimpleDateFormat pattern to use (e.g. "yyyyMMddHHmmss").
             * @returns The current formatted date string.
             * @example
             * ```js
             * // Stamp the current time using a SimpleDateFormat pattern.
             * var now = DateUtil.getCurrentDate('yyyyMMddHHmmss');
             * ```
             */
            static getCurrentDate(pattern: java.lang.String): java.lang.String;

            /**
             * Parses a date string according to a specified input pattern, and formats the date back to a
             * string according to a specified output pattern.
             *
             * @param inPattern - The SimpleDateFormat pattern to use for parsing the inbound date string (e.g. "yyyyMMddHHmmss").
             * @param outPattern - The SimpleDateFormat pattern to use for formatting the outbound date string (e.g. "yyyyMMddHHmmss").
             * @param date - The date string to convert.
             * @returns The converted date string.
             * @throws Exception - If the pattern could not be parsed.
             */
            static convertDate(
              inPattern: java.lang.String,
              outPattern: java.lang.String,
              date: java.lang.String,
            ): java.lang.String;
          }

          /**
           * States of UNDEPLOYED, DEPLOYING, UNDEPLOYING, STARTING, STARTED, PAUSING, PAUSED, STOPPING,
           * STOPPED
           *
           * @see com.mirth.connect.donkey.model.channel.DeployedState
           */
          type DeployedState = com.mirth.connect.donkey.model.channel.DeployedState;
          const DeployedState: typeof com.mirth.connect.donkey.model.channel.DeployedState;

          /**
           * Utility class used in the preprocessor or source filter/transformer to prevent the message from
           * being sent to specific destinations.
           */
          class DestinationSet extends java.lang.Object {
            /**
             * DestinationSet instances should NOT be constructed manually. The instance "destinationSet"
             * provided in the scope should be used.
             *
             * @param connectorMessage - The delegate ImmutableConnectorMessage object.
             */
            constructor(connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage);

            /**
             * Stop a destination from being processed for this message.
             *
             * @param metaDataIdOrConnectorName - An integer representing the metaDataId of a destination connector, or the actual destination connector name.
             * @returns A boolean indicating whether at least one destination connector was actually removed from processing for this message.
             */
            remove(metaDataIdOrConnectorName: java.lang.Object): boolean;

            /**
             * Stop a destination from being processed for this message.
             *
             * @param metaDataIdOrConnectorNames - A collection of integers representing the metaDataId of a destination connectors, or the actual destination connector names. JavaScript arrays can be used.
             * @returns A boolean indicating whether at least one destination connector was actually removed from processing for this message.
             */
            remove(metaDataIdOrConnectorNames: java.util.Collection<java.lang.Object>): boolean;

            /**
             * Stop all except one destination from being processed for this message.
             *
             * @param metaDataIdOrConnectorName - An integer representing the metaDataId of a destination connector, or the actual destination connector name.
             * @returns A boolean indicating whether at least one destination connector was actually removed from processing for this message.
             */
            removeAllExcept(metaDataIdOrConnectorName: java.lang.Object): boolean;

            /**
             * Stop all except one destination from being processed for this message.
             *
             * @param metaDataIdOrConnectorNames - A collection of integers representing the metaDataId of a destination connectors, or the actual destination connector names. JavaScript arrays can be used.
             * @returns A boolean indicating whether at least one destination connector was actually removed from processing for this message.
             */
            removeAllExcept(
              metaDataIdOrConnectorNames: java.util.Collection<java.lang.Object>,
            ): boolean;

            /**
             * Stop all destinations from being processed for this message. This does NOT mark the source
             * message as FILTERED.
             *
             * @returns A boolean indicating whether at least one destination connector was actually removed from processing for this message.
             */
            removeAll(): boolean;
          }

          /**
           * Provides DICOM utility methods.
           */
          class DICOMUtil extends java.lang.Object {
            /**
             * Re-attaches DICOM attachments with the header data in the connector message and returns the
             * resulting merged data as a Base64-encoded string.
             *
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @returns The merged DICOM data, Base64-encoded.
             */
            static getDICOMRawData(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.lang.String;

            /**
             * Re-attaches DICOM attachments with the header data in the connector message and returns the
             * resulting merged data as a byte array.
             *
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @returns The merged DICOM data as a byte array.
             */
            static getDICOMRawBytes(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): byte[];

            /**
             * Re-attaches DICOM attachments with the header data in the connector message and returns the
             * resulting merged data as a byte array.
             *
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @returns The merged DICOM data as a byte array.
             */
            static getDICOMMessage(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): byte[];

            /**
             * Re-attaches DICOM attachments with the header data in the connector message and returns the
             * resulting merged data as a Base-64 encoded String.
             *
             * @param connectorMessage - The connector message containing header data to merge DICOM attachments with.
             * @param attachments - The DICOM attachments to merge with the header data.
             * @returns The merged DICOM data as a Base-64 encoded String.
             * @throws com.mirth.connect.donkey.model.message.MessageSerializerException - If a database access error occurs, or the DICOM data could not be parsed.
             * @throws IOException - If Base64 encoding failed.
             */
            static mergeHeaderAttachments(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              attachments: java.util.List<com.mirth.connect.server.userutil.Attachment>,
            ): java.lang.String;

            /**
             * Re-attaches DICOM attachments with the given header data and returns the resulting merged
             * data as a Base-64 encoded String.
             *
             * @param header - The header data to merge DICOM attachments with.
             * @param images - The DICOM attachments as byte arrays to merge with the header data.
             * @returns The merged DICOM data as a Base-64 encoded String.
             * @throws IOException - If Base64 encoding failed.
             */
            static mergeHeaderPixelData(
              header: byte[],
              images: java.util.List<byte[]>,
            ): java.lang.String;

            /**
             * Returns the number of slices in the fully-merged DICOM data associated with a given connector
             * message.
             *
             * @param connectorMessage - The connector message to retrieve DICOM data for.
             * @returns The number of slices in the DICOM data.
             */
            static getSliceCount(
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): int;

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @param autoThreshold - If true, automatically sets the lower and upper threshold levels.
             * @returns The converted image, as a Base64-encoded string.
             */
            static convertDICOM(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              autoThreshold: boolean,
            ): java.lang.String;

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @returns The converted image, as a Base64-encoded string.
             */
            static convertDICOM(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): java.lang.String;

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @param sliceIndex - If there are multiple slices in the DICOM data, this indicates which one to use (the first slice has an index of 1).
             * @returns The converted image, as a Base64-encoded string.
             */
            static convertDICOM(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              sliceIndex: int,
            ): java.lang.String;

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @param sliceIndex - If there are multiple slices in the DICOM data, this indicates which one to use (the first slice has an index of 1).
             * @param autoThreshold - If true, automatically sets the lower and upper threshold levels.
             * @returns The converted image, as a Base64-encoded string.
             */
            static convertDICOM(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              sliceIndex: int,
              autoThreshold: boolean,
            ): java.lang.String;

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @returns The converted image, as a byte array.
             */
            static convertDICOMToByteArray(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
            ): byte[];

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @param sliceIndex - If there are multiple slices in the DICOM data, this indicates which one to use (the first slice has an index of 1).
             * @returns The converted image, as a byte array.
             */
            static convertDICOMToByteArray(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              sliceIndex: int,
            ): byte[];

            /**
             * Converts merged DICOM data associated with a connector message into a specified image format.
             *
             * @param imageType - The image format to convert the DICOM data to (e.g. "jpg").
             * @param connectorMessage - The connector message to retrieve merged DICOM data for.
             * @param sliceIndex - If there are multiple slices in the DICOM data, this indicates which one to use (the first slice has an index of 1).
             * @param autoThreshold - If true, automatically sets the lower and upper threshold levels.
             * @returns The converted image, as a byte array.
             */
            static convertDICOMToByteArray(
              imageType: java.lang.String,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              sliceIndex: int,
              autoThreshold: boolean,
            ): byte[];

            /**
             * Converts a byte array into a dcm4che DicomObject.
             *
             * @param bytes - The binary data to convert.
             * @param decodeBase64 - If true, the data is assumed to be Base64-encoded.
             * @returns The converted DicomObject.
             * @throws IOException - If Base64 encoding failed.
             */
            static byteArrayToDicomObject(
              bytes: byte[],
              decodeBase64: boolean,
            ): org.dcm4che2.data.DicomObject;

            /**
             * Converts a dcm4che DicomObject into a byte array.
             *
             * @param dicomObject - The DicomObject to convert.
             * @returns The converted byte array.
             * @throws IOException - If Base64 encoding failed.
             */
            static dicomObjectToByteArray(dicomObject: org.dcm4che2.data.DicomObject): byte[];
          }

          /**
           * This object is returned from EncryptionUtil.encrypt(byte[]).
           */
          class EncryptedData extends java.lang.Object {
            /**
             * @param header
             * @param encryptedData
             */
            constructor(header: java.lang.String, encryptedData: byte[]);

            /**
             * Returns the meta-information about the encrypted data. Includes the algorithm and
             * initialization vector used.
             */
            getHeader(): java.lang.String;

            /**
             * Returns the encrypted data as a byte array.
             */
            getEncryptedData(): byte[];
          }

          /**
           * This utility class provides some convenience methods for encrypting or decrypting data.
           */
          class EncryptionUtil extends java.lang.Object {
            constructor();

            /**
             * Convenience method for encrypting data. Uses the currently configured encryption settings.
             *
             * @param data - The data to encrypt, as a String.
             * @returns The encrypted data.
             * @throws com.mirth.commons.encryption.EncryptionException - If the data cannot be encrypted for any reason.
             */
            static encrypt(data: java.lang.String): java.lang.String;

            /**
             * Convenience method for encrypting data. Uses the currently configured encryption settings.
             *
             * @param data - The data to encrypt, as a raw byte array.
             * @returns An EncryptedData object containing the header information and encrypted data.
             * @throws com.mirth.commons.encryption.EncryptionException - If the data cannot be encrypted for any reason.
             */
            static encrypt(data: byte[]): com.mirth.connect.server.userutil.EncryptedData;

            /**
             * Convenience method for decrypting data. Uses the currently configured encryption and fallback
             * settings.
             *
             * @param data - The data to decrypt, as a String.
             * @returns The decrypted data.
             * @throws com.mirth.commons.encryption.EncryptionException - If the data cannot be decrypted for any reason.
             */
            static decrypt(data: java.lang.String): java.lang.String;

            /**
             * Convenience method for decrypting data. Uses the currently configured encryption and fallback
             * settings.
             *
             * @param header - The meta-information about the encrypted data. This is a specially-formatted string returned from the encrypt(byte[]) method.
             * @param data - The data to decrypt, as a raw byte array.
             * @returns The decrypted data.
             * @throws com.mirth.commons.encryption.EncryptionException - If the data cannot be decrypted for any reason.
             */
            static decrypt(header: java.lang.String, data: byte[]): byte[];
          }

          /**
           * Provides file utility methods.
           */
          class FileUtil extends java.lang.Object {
            /**
             * Writes a string to a specified file, creating the file if it does not exist.
             *
             * Pass `append = true` to append, or `false` to overwrite. Accepts either a String or a byte array as the payload.
             *
             * @param fileName - The pathname string of the file to write to.
             * @param append - If true, the data will be added to the end of the file rather than overwriting the file.
             * @param data - The content to write to the file.
             * @throws IOException - If an I/O error occurred.
             * @example
             * ```js
             * // Append a line to a log file.
             * FileUtil.write('/data/out/audit.log', true, message + '\n');
             * ```
             */
            static write(fileName: java.lang.String, append: boolean, data: java.lang.String): void;

            /**
             * Decodes a Base64 string into octets.
             *
             * @param data - The Base64 string to decode.
             * @returns The decoded data, as a byte array.s
             */
            static decode(data: java.lang.String): byte[];

            /**
             * Encoded binary data into a Base64 string.
             *
             * @param data - The binary data to encode (byte array).
             * @returns The encoded Base64 string.
             */
            static encode(data: byte[]): java.lang.String;

            /**
             * Writes a byte array to a file, creating the file if it does not exist.
             *
             * @param fileName - The pathname string of the file to write to.
             * @param append - If true, the data will be added to the end of the file rather than overwriting the file.
             * @param bytes - The binary content to write to the file.
             * @throws IOException - If an I/O error occurred.
             */
            static write(fileName: java.lang.String, append: boolean, bytes: byte[]): void;

            /**
             * Returns the contents of the file as a byte array.
             *
             * @param fileName - The pathname string of the file to read from.
             * @returns The byte array representation of the file.
             * @throws IOException - If an I/O error occurred.
             * @example
             * ```js
             * // Read a binary file (e.g. a PDF) as a byte array, then Base64-encode it.
             * var bytes = FileUtil.readBytes('/data/in/report.pdf');
             * var b64 = FileUtil.encode(bytes);
             * ```
             */
            static readBytes(fileName: java.lang.String): byte[];

            /**
             * Returns the contents of the file as a string, using the system default charset encoding.
             *
             * @param fileName - The pathname string of the file to read from.
             * @returns The string representation of the file.
             * @throws IOException - If an I/O error occurred.
             * @example
             * ```js
             * // Read an entire file as a String.
             * var contents = FileUtil.read('/data/in/patient.txt');
             * ```
             */
            static read(fileName: java.lang.String): java.lang.String;

            /**
             * Deletes a specified File. In Rhino and E4X 'delete' is a keyword, so File.delete() can't be
             * called within Mirth directly.
             *
             * @param file - The File to delete.
             * @returns true if and only if the file or directory is successfully deleted; false otherwise
             * @throws SecurityException - If the security manager denies access to delete the file.
             */
            static deleteFile(file: java.io.File): boolean;

            /**
             * Converts an RTF into plain text using the Swing RTFEditorKit.
             *
             * @param message - The RTF message to convert.
             * @param replaceLinebreaksWith - If not null, any line breaks in the converted message will be replaced with this string.
             * @returns The converted plain text message.
             * @throws IOException - If an I/O error occurred.
             * @throws BadLocationException - If an invalid location within the document is used.
             */
            static rtfToPlainText(
              message: java.lang.String,
              replaceLinebreaksWith: java.lang.String,
            ): java.lang.String;
          }

          /**
           * A Future represents the result of an asynchronous computation. Methods are provided to
           * check if the computation is complete, to wait for its completion, and to retrieve the result of
           * the computation. The result can only be retrieved using method get when the computation
           * has completed, blocking if necessary until it is ready. Cancellation is performed by the
           * cancel method. Additional methods are provided to determine if the task completed
           * normally or was cancelled. Once a computation has completed, the computation cannot be cancelled.
           * If you would like to use a Future for the sake of cancellability but not provide a usable
           * result, you can declare types of the form Future<?> and return null as a result
           * of the underlying task.
           */
          class Future<V> extends java.lang.Object implements java.util.concurrent.Future<V> {
            /**
             * Attempts to cancel execution of this task. This attempt will fail if the task has already
             * completed, has already been cancelled, or could not be cancelled for some other reason. If
             * successful, and this task has not started when cancel is called, this task should
             * never run. If the task has already started, then the mayInterruptIfRunning parameter
             * determines whether the thread executing this task should be interrupted in an attempt to stop
             * the task.
             *
             * After this method returns, subsequent calls to isDone() will always return
             * true. Subsequent calls to isCancelled() will always return true if
             * this method returned true.
             *
             * @param mayInterruptIfRunning - true if the thread executing this task should be interrupted; otherwise, in-progress tasks are allowed to complete
             * @returns false if the task could not be cancelled, typically because it has already completed normally; true otherwise
             */
            cancel(mayInterruptIfRunning: boolean): boolean;

            /**
             * Returns true if this task was cancelled before it completed normally.
             *
             * @returns true if this task was cancelled before it completed
             */
            isCancelled(): boolean;

            /**
             * Returns true if this task completed.
             *
             * Completion may be due to normal termination, an exception, or cancellation -- in all of these
             * cases, this method will return true.
             *
             * @returns true if this task completed
             */
            isDone(): boolean;

            /**
             * Waits if necessary for the computation to complete, and then retrieves its result.
             *
             * @returns the computed result
             * @throws CancellationException - if the computation was cancelled
             * @throws ExecutionException - if the computation threw an exception
             * @throws InterruptedException - if the current thread was interrupted while waiting
             */
            get(): V;

            /**
             * Waits if necessary for at most the given time for the computation to complete, and then
             * retrieves its result, if available.
             *
             * @param timeoutInMillis - the maximum time to wait, in milliseconds
             * @returns the computed result
             * @throws CancellationException - if the computation was cancelled
             * @throws ExecutionException - if the computation threw an exception
             * @throws InterruptedException - if the current thread was interrupted while waiting
             * @throws TimeoutException - if the wait timed out
             */
            get(timeoutInMillis: long): V;

            /**
             * Waits if necessary for at most the given time for the computation to complete, and then
             * retrieves its result, if available.
             *
             * @param timeout - the maximum time to wait
             * @param unit - the time unit of the timeout argument
             * @returns the computed result
             * @throws CancellationException - if the computation was cancelled
             * @throws ExecutionException - if the computation threw an exception
             * @throws InterruptedException - if the current thread was interrupted while waiting
             * @throws TimeoutException - if the wait timed out
             */
            get(timeout: long, unit: java.util.concurrent.TimeUnit): V;
          }

          /**
           * Provides hash utility methods.
           */
          class HashUtil extends java.lang.Object {
            /**
             * Takes in any object and generates a SHA-256 hex hash.
             *
             * @param data - The data to hash.
             * @returns hash The generated SHA-256 hex hash of the data.
             * @throws Exception - If generating a SHA-256 hex hash fails.
             */
            static generate(data: java.lang.Object): java.lang.String;

            /**
             * Takes in a string, an encoding, and a hashing algorithm and generates a hex hash.
             *
             * @param str - The string to hash.
             * @param encoding - The character encoding to use.
             * @param algorithm - The hashing algorithm to use.
             * @returns hash The generated hex hash of the string.
             * @throws Exception - If generating a hex hash of the string fails.
             */
            static generate(
              str: java.lang.String,
              encoding: java.lang.String,
              algorithm: java.lang.String,
            ): java.lang.String;

            /**
             * Takes in a byte[], an encoding, and a hashing algorithm and generates a hex hash.
             *
             * @param bytes - The byte[] to hash.
             * @param algorithm - The hashing algorithm to use.
             * @returns hash The generated hex hash of the byte[].
             * @throws Exception - If generating a hex hash of the byte[] fails.
             */
            static generate(bytes: byte[], algorithm: java.lang.String): java.lang.String;
          }

          /**
           * Provides HTTP utility methods.
           */
          class HTTPUtil extends java.lang.Object {
            /**
             * Converts a block of HTTP header fields into a Map containing each header key and value.
             *
             * @param str - The block of HTTP header fields to convert.
             * @returns The converted Map containing header key-value pairs.
             * @throws Exception - If the header string could not be parsed.
             * @example
             * ```js
             * // Turn a raw header block into a Map for lookup.
             * var headers = HTTPUtil.parseHeaders(sourceMap.get('headers'));
             * var contentType = headers.get('Content-Type');
             * ```
             */
            static parseHeaders(
              str: java.lang.String,
            ): java.util.Map<java.lang.String, java.lang.String>;

            /**
             * Serializes an HTTP request body into XML. Multipart requests will also automatically be
             * parsed into separate XML nodes.
             *
             * @param httpBody - The request body/payload input stream to parse.
             * @param contentType - The MIME content type of the request.
             * @returns The serialized XML string.
             * @throws javax.mail.MessagingException - If the body could not be converted into a multipart object.
             * @throws IOException - If the body could not be read into a string.
             * @throws com.mirth.connect.donkey.util.DonkeyElement.DonkeyElementException - If an XML parsing error occurs.
             * @throws ParserConfigurationException - If an XML or multipart parsing error occurs.
             * @example
             * ```js
             * // Serialize an HTTP (possibly multipart) request body to XML.
             * var xml = HTTPUtil.httpBodyToXml(connectorMessage.getRawData(), sourceMap.get('contentType'));
             * ```
             */
            static httpBodyToXml(
              httpBody: java.io.InputStream,
              contentType: java.lang.String,
            ): java.lang.String;

            /**
             * Serializes an HTTP request body into XML. Multipart requests will also automatically be
             * parsed into separate XML nodes.
             *
             * @param httpBody - The request body/payload string to parse.
             * @param contentType - The MIME content type of the request.
             * @returns The serialized XML string.
             * @throws javax.mail.MessagingException - If the body could not be converted into a multipart object.
             * @throws IOException - If the body could not be read into a string.
             * @throws com.mirth.connect.donkey.util.DonkeyElement.DonkeyElementException - If an XML parsing error occurs.
             * @throws ParserConfigurationException - If an XML or multipart parsing error occurs.
             */
            static httpBodyToXml(
              httpBody: java.lang.String,
              contentType: java.lang.String,
            ): java.lang.String;
          }

          /**
           * This class represents a destination response and is used to retrieve details such as the response
           * data, message status, and errors.
           */
          class ImmutableResponse extends java.lang.Object {
            /**
             * Instantiates a new ImmutableResponse object.
             *
             * @param response - The Response object that this object will reference for retrieving data.
             */
            constructor(response: com.mirth.connect.userutil.Response);

            /**
             * Returns the actual response data, as a string.
             *
             * @returns The actual response data, as a string.
             */
            getMessage(): java.lang.String;

            /**
             * Returns the Status (e.g. SENT, QUEUED) of this response, which will be used to set the status
             * of the corresponding connector message.
             *
             * @returns The Status (e.g. SENT, QUEUED) of this response.
             */
            getNewMessageStatus(): com.mirth.connect.userutil.Status;

            /**
             * Returns the error string associated with this response, if it exists.
             *
             * @returns The error string associated with this response, if it exists.
             */
            getError(): java.lang.String;

            /**
             * Returns a brief message explaining the reason for the current status.
             *
             * @returns A brief message explaining the reason for the current status.
             */
            getStatusMessage(): java.lang.String;
          }

          /**
           * An implementation of CachedRowSet that retrieves values based on the column label value.
           * CachedRowSetImpl uses the column name which ignores alias for drivers that correctly follow the
           * JDBC 4.0 recommendations. Using the column label ensures that aliases will work for these
           * drivers.
           *
           * @implements javax.sql.rowset.CachedRowSet
           */
          class MirthCachedRowSet extends java.lang.Object {}

          /**
           * Provides NCPDP utility methods.
           */
          class NCPDPUtil extends java.lang.Object {
            /**
             * Converts a signed overpunch code into a string representing the appropriate decimal value.
             *
             * @param origNumber - The signed overpunch code to convert.
             * @param decimalPoints - The index at which to place a decimal point in the converted string. If this value is less than or equal to zero, or greater than or equal to the length of the overpunch code, a decimal point will not be inserted.
             * @returns The string representation of the converted decimal value.
             */
            static formatNCPDPNumber(
              origNumber: java.lang.String,
              decimalPoints: int,
            ): java.lang.String;
          }

          /**
           * This class represents a raw message as it is received by a channel, and is used to retrieve
           * details such as the raw data or source map.
           */
          class RawMessage extends java.lang.Object {
            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawData - The textual data to dispatch to the channel.
             */
            constructor(rawData: java.lang.String);

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawData - The textual data to dispatch to the channel.
             * @param destinationMetaDataIds - A collection of integers (metadata IDs) representing which destinations to dispatch the message to. JavaScript arrays can be used.
             */
            constructor(
              rawData: java.lang.String,
              destinationMetaDataIds: java.util.Collection<number>,
            );

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawData - The textual data to dispatch to the channel.
             * @param destinationMetaDataIds - A collection of integers (metadata IDs) representing which destinations to dispatch the message to. JavaScript arrays can be used.
             * @param sourceMap - Any values placed in this map will be populated in the source map at the beginning of the message's lifecycle.
             */
            constructor(
              rawData: java.lang.String,
              destinationMetaDataIds: java.util.Collection<number>,
              sourceMap: java.util.Map<java.lang.String, java.lang.Object>,
            );

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawBytes - The binary data (byte array) to dispatch to the channel.
             */
            constructor(rawBytes: byte[]);

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawBytes - The binary data (byte array) to dispatch to the channel.
             * @param destinationMetaDataIds - A collection of integers (metadata IDs) representing which destinations to dispatch the message to. JavaScript arrays can be used.
             */
            constructor(rawBytes: byte[], destinationMetaDataIds: java.util.Collection<number>);

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawBytes - The binary data (byte array) to dispatch to the channel.
             * @param destinationMetaDataIds - A collection of integers (metadata IDs) representing which destinations to dispatch the message to. JavaScript arrays can be used.
             * @param sourceMap - Any values placed in this map will be populated in the source map at the beginning of the message's lifecycle.
             */
            constructor(
              rawBytes: byte[],
              destinationMetaDataIds: java.util.Collection<number>,
              sourceMap: java.util.Map<java.lang.String, java.lang.Object>,
            );

            /**
             * Returns the textual data to be dispatched to a channel.
             *
             * @returns The textual data to be dispatched to a channel.
             */
            getRawData(): java.lang.String;

            /**
             * Returns the binary data (byte array) to be dispatched to a channel.
             *
             * @returns The binary data (byte array) to be dispatched to a channel.
             */
            getRawBytes(): byte[];

            /**
             * Returns the collection of integers (metadata IDs) representing which destinations to dispatch
             * the message to.
             *
             * @returns The collection of integers (metadata IDs) representing which destinations to dispatch the message to.
             */
            getDestinationMetaDataIds(): java.util.Collection<java.lang.Integer>;

            /**
             * Sets which destinations to dispatch the message to.
             *
             * @param destinationMetaDataIds - A list of integers (metadata IDs) representing which destinations to dispatch the message to.
             */
            setDestinationMetaDataIds(destinationMetaDataIds: java.util.Collection<number>): void;

            /**
             * Returns the channel map to be used at the beginning of the channel dispatch.
             *
             * @returns The channel map to be used at the beginning of the channel dispatch.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSourceMap() instead.
             */
            getChannelMap(): java.util.Map<java.lang.String, java.lang.Object>;

            /**
             * Sets the channel map to be used at the beginning of the channel dispatch.
             *
             * @param channelMap - Any values placed in this map will be populated in the channel map at the beginning of the message's lifecycle.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * setSourceMap(sourceMap) instead.
             */
            setChannelMap(channelMap: java.util.Map<java.lang.String, java.lang.Object>): void;

            /**
             * Returns the source map to be used at the beginning of the channel dispatch.
             *
             * @returns The source map to be used at the beginning of the channel dispatch.
             */
            getSourceMap(): java.util.Map<java.lang.String, java.lang.Object>;

            /**
             * Sets the source map to be used at the beginning of the channel dispatch.
             *
             * @param sourceMap - Any values placed in this map will be populated in the source map at the beginning of the message's lifecycle.
             */
            setSourceMap(sourceMap: java.util.Map<java.lang.String, java.lang.Object>): void;

            /**
             * Returns a Boolean representing whether this object contains textual or binary data.
             *
             * @returns A Boolean representing whether this object contains textual or binary data.
             */
            isBinary(): java.lang.Boolean;

            /**
             * Removes references to any data (textual or binary) currently stored by the raw message.
             */
            clearMessage(): void;
          }

          /**
           * Provides methods to create Response objects.
           */
          class ResponseFactory extends java.lang.Object {
            /**
             * Returns a Response representing a successfully sent message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getSentResponse(message: java.lang.String): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a erred message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getErrorResponse(message: java.lang.String): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a filtered message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getFilteredResponse(
              message: java.lang.String,
            ): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a queued message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getQueuedResponse(
              message: java.lang.String,
            ): com.mirth.connect.userutil.Response;
          }

          /**
           * Used to create a serializer for a specific data type for conversion to and from XML.
           */
          class SerializerFactory extends java.lang.Object {
            /**
             * Returns a serializer (with toXML and fromXML methods) for a given data type. Any
             * serialization or deserialization properties will be left as the default values.
             *
             * @param dataType - The plugin point (e.g. "HL7V2") of the data type to create the serializer for.
             * @returns The instantiated IXMLSerializer object.
             * @example
             * ```js
             * // Convert an HL7 v2.x message to XML and back.
             * var serializer = SerializerFactory.getSerializer('HL7V2');
             * var xml = serializer.toXML(connectorMessage.getRawData());
             * var er7 = serializer.fromXML(xml);
             * ```
             */
            static getSerializer(
              dataType: java.lang.String,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns a serializer (with toXML and fromXML methods) for a given data type and properties.
             *
             * @param dataType - The plugin point (e.g. "HL7V2") of the data type to create the serializer for.
             * @param serializationPropertiesMap - A Map of properties used to customize how serialization from the data type to XML is performed.
             * @param deserializationPropertiesMap - A Map of properties used to customize how deserialization from XML to the data type is performed.
             * @returns The instantiated IXMLSerializer object.
             */
            static getSerializer(
              dataType: java.lang.String,
              serializationPropertiesMap: java.util.Map<java.lang.String, java.lang.Object>,
              deserializationPropertiesMap: java.util.Map<java.lang.String, java.lang.Object>,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns a map of default properties used to customize how serialization from the data type to
             * XML is performed.
             *
             * @param dataType - The plugin point (e.g. "HL7V2") of the data type to get default properties for.
             * @returns The map of default serialization properties.
             */
            static getDefaultSerializationProperties(
              dataType: java.lang.String,
            ): java.util.Map<java.lang.String, java.lang.Object>;

            /**
             * Returns a map of default properties used to customize how deserialization from XML to the
             * data type is performed.
             *
             * @param dataType - The plugin point (e.g. "HL7V2") of the data type to get default properties for.
             * @returns The map of default deserialization properties.
             */
            static getDefaultDeserializationProperties(
              dataType: java.lang.String,
            ): java.util.Map<java.lang.String, java.lang.Object>;

            /**
             * Returns an HL7 v2.x serializer.
             *
             * @param useStrictParser - If true, messages will be parsed based upon strict HL7 specifications.
             * @param useStrictValidation - If true, messages will be validated using HL7 specifications (applies to Strict Parser only).
             * @param handleRepetitions - If true, field repetitions will be parsed (applies to Non-Strict Parser only).
             * @param convertLFtoCR - If true, line feeds (\n) will be converted to carriage returns (\r) automatically (applies to Non-Strict Parser only).
             * @param handleSubcomponents - If true, subcomponents will be parsed (applies to Non-Strict Parser only).
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead. The new method will now strip namespaces by default unless the
             * 'stripNamespaces' property is set to false.
             */
            static getHL7Serializer(
              useStrictParser: boolean,
              useStrictValidation: boolean,
              handleRepetitions: boolean,
              convertLFtoCR: boolean,
              handleSubcomponents: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an HL7 v2.x serializer.
             *
             * @param useStrictParser - If true, messages will be parsed based upon strict HL7 specifications.
             * @param useStrictValidation - If true, messages will be validated using HL7 specifications (applies to Strict Parser only).
             * @param handleRepetitions - If true, field repetitions will be parsed (applies to Non-Strict Parser only).
             * @param convertLFtoCR - If true, line feeds (\n) will be converted to carriage returns (\r) automatically (applies to Non-Strict Parser only).
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead. The new method will now strip namespaces by default unless the
             * 'stripNamespaces' property is set to false.
             */
            static getHL7Serializer(
              useStrictParser: boolean,
              useStrictValidation: boolean,
              handleRepetitions: boolean,
              convertLFtoCR: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an HL7 v2.x serializer.
             *
             * @param useStrictParser - If true, messages will be parsed based upon strict HL7 specifications.
             * @param useStrictValidation - If true, messages will be validated using HL7 specifications (applies to Strict Parser only).
             * @param handleRepetitions - If true, field repetitions will be parsed (applies to Non-Strict Parser only).
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead. The new method will now strip namespaces by default unless the
             * 'stripNamespaces' property is set to false.
             */
            static getHL7Serializer(
              useStrictParser: boolean,
              useStrictValidation: boolean,
              handleRepetitions: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an HL7 v2.x serializer.
             *
             * @param useStrictParser - If true, messages will be parsed based upon strict HL7 specifications.
             * @param useStrictValidation - If true, messages will be validated using HL7 specifications (applies to Strict Parser only).
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead. The new method will now strip namespaces by default unless the
             * 'stripNamespaces' property is set to false.
             */
            static getHL7Serializer(
              useStrictParser: boolean,
              useStrictValidation: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an HL7 v2.x serializer.
             *
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead. The new method will now strip namespaces by default unless the
             * 'stripNamespaces' property is set to false.
             */
            static getHL7Serializer(): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an EDI / X12 serializer.
             *
             * @param inferDelimiters - This property only applies to X12 messages. If checked, the delimiters are inferred from the incoming message and the delimiter properties will not be used.
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead.
             */
            static getX12Serializer(
              inferDelimiters: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an EDI / X12 serializer.
             *
             * @param segmentDelim - Characters that delimit the segments in the message.
             * @param elementDelim - Characters that delimit the elements in the message.
             * @param subelementDelim - Characters that delimit the subelements in the message.
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead.
             */
            static getEDISerializer(
              segmentDelim: java.lang.String,
              elementDelim: java.lang.String,
              subelementDelim: java.lang.String,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an NCPDP serializer.
             *
             * @param segmentDelim - Characters that delimit the segments in the message.
             * @param groupDelim - Characters that delimit the groups in the message.
             * @param fieldDelim - Characters that delimit the fields in the message.
             * @param useStrictValidation - Validates the NCPDP message against a schema.
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead.
             */
            static getNCPDPSerializer(
              segmentDelim: java.lang.String,
              groupDelim: java.lang.String,
              fieldDelim: java.lang.String,
              useStrictValidation: boolean,
            ): com.mirth.connect.model.converters.IMessageSerializer;

            /**
             * Returns an NCPDP serializer.
             *
             * @param segmentDelim - Characters that delimit the segments in the message.
             * @param groupDelim - Characters that delimit the groups in the message.
             * @param fieldDelim - Characters that delimit the fields in the message.
             * @returns The instantiated IXMLSerializer object.
             * @deprecated This method is deprecated and will soon be removed. Please use
             * getSerializer(dataType, serializationPropertiesMap, deserializationPropertiesMap)
             * instead.
             */
            static getNCPDPSerializer(
              segmentDelim: java.lang.String,
              groupDelim: java.lang.String,
              fieldDelim: java.lang.String,
            ): com.mirth.connect.model.converters.IMessageSerializer;
          }

          /**
           * Used to send e-mail messages.
           */
          class SMTPConnection extends java.lang.Object {
            /**
             * Instantiates an SMTP connection used to send e-mail messages with.
             *
             * @param host - The SMTP server address.
             * @param port - The SMTP server port (e.g. 25, 587, 465).
             * @param socketTimeout - The socket connection timeout value in milliseconds.
             * @param useAuthentication - Determines whether authentication is needed for the SMTP server.
             * @param secure - The encryption security layer to use for the SMTP connection ("TLS" or "SSL"). If left blank, no encryption layer will be used.
             * @param username - If authentication is required, the username to authenticate with.
             * @param password - If authentication is required, the password to authenticate with.
             * @param from - The FROM field to use for dispatched e-mail messages.
             */
            constructor(
              host: java.lang.String,
              port: java.lang.String,
              socketTimeout: int,
              useAuthentication: boolean,
              secure: java.lang.String,
              username: java.lang.String,
              password: java.lang.String,
              from: java.lang.String,
            );

            /**
             * Instantiates an SMTP connection used to send e-mail messages with.
             *
             * @param host - The SMTP server address.
             * @param port - The SMTP server port (e.g. 25, 587, 465).
             * @param useAuthentication - Determines whether authentication is needed for the SMTP server.
             * @param secure - The encryption security layer to use for the SMTP connection ("TLS" or "SSL"). If left blank, no encryption layer will be used.
             * @param username - If authentication is required, the username to authenticate with.
             * @param password - If authentication is required, the password to authenticate with.
             * @param from - The FROM field to use for the e-mail.
             */
            constructor(
              host: java.lang.String,
              port: java.lang.String,
              useAuthentication: boolean,
              secure: java.lang.String,
              username: java.lang.String,
              password: java.lang.String,
              from: java.lang.String,
            );

            /**
             * Returns the SMTP server address.
             *
             * @returns The SMTP server address.
             */
            getHost(): java.lang.String;

            /**
             * Sets the SMTP server address.
             *
             * @param host - The SMTP server address to use.
             */
            setHost(host: java.lang.String): void;

            /**
             * Returns the SMTP server port.
             *
             * @returns The SMTP server port.
             */
            getPort(): java.lang.String;

            /**
             * Sets the SMTP server port.
             *
             * @param port - The SMTP server port to use (e.g. 25, 587, 465).
             */
            setPort(port: java.lang.String): void;

            /**
             * Returns true if authentication is needed for the SMTP server, otherwise returns false.
             *
             * @returns true if authentication is needed for the SMTP server, otherwise returns false.
             */
            isUseAuthentication(): boolean;

            /**
             * Sets whether authentication is needed for the SMTP server.
             *
             * @param useAuthentication - Determines whether authentication is needed for the SMTP server.
             */
            setUseAuthentication(useAuthentication: boolean): void;

            /**
             * Returns the encryption security layer being used for the SMTP connection (e.g "TLS" or
             * "SSL").
             *
             * @returns The encryption security layer being used for the SMTP connection (e.g "TLS" or "SSL").
             */
            getSecure(): java.lang.String;

            /**
             * Sets the encryption security layer to use for the SMTP connection.
             *
             * @param secure - The encryption security layer to use for the SMTP connection ("TLS" or "SSL"). If left blank, no encryption layer will be used.
             */
            setSecure(secure: java.lang.String): void;

            /**
             * Returns the username being used to authenticate to the SMTP server.
             *
             * @returns The username being used to authenticate to the SMTP server.
             */
            getUsername(): java.lang.String;

            /**
             * Sets the username to use to authenticate to the SMTP server.
             *
             * @param username - The username to authenticate with.
             */
            setUsername(username: java.lang.String): void;

            /**
             * Returns the password being used to authenticate to the SMTP server.
             *
             * @returns The password being used to authenticate to the SMTP server.
             */
            getPassword(): java.lang.String;

            /**
             * Sets the password to use to authenticate to the SMTP server.
             *
             * @param password - The password to authenticate with.
             */
            setPassword(password: java.lang.String): void;

            /**
             * Returns the FROM field being used for dispatched e-mail messages.
             *
             * @returns The FROM field being used for dispatched e-mail messages.
             */
            getFrom(): java.lang.String;

            /**
             * Sets the FROM field to use for dispatched e-mail messages.
             *
             * @param from - The FROM field to use for dispatched e-mail messages.
             */
            setFrom(from: java.lang.String): void;

            /**
             * Returns the socket connection timeout value in milliseconds.
             *
             * @returns The socket connection timeout value in milliseconds.
             */
            getSocketTimeout(): int;

            /**
             * Sets the socket connection timeout value.
             *
             * @param socketTimeout - The socket connection timeout value in milliseconds.
             */
            setSocketTimeout(socketTimeout: int): void;

            /**
             * Sends an e-mail message.
             *
             * @param toList - A string representing a list of e-mail addresses to send the message to (separated by ",").
             * @param ccList - A string representing a list of e-mail addresses to copy the message to (separated by ",").
             * @param from - The FROM field to use for the e-mail message.
             * @param subject - The subject of the e-mail message.
             * @param body - The content of the e-mail message.
             * @param charset - The charset encoding to use when sending the e-mail message.
             * @throws org.apache.commons.mail.EmailException - If an error occurred while sending the e-mail message.
             */
            send(
              toList: java.lang.String,
              ccList: java.lang.String,
              from: java.lang.String,
              subject: java.lang.String,
              body: java.lang.String,
              charset: java.lang.String,
            ): void;

            /**
             * Sends an e-mail message.
             *
             * @param toList - A string representing a list of e-mail addresses to send the message to (separated by ",").
             * @param ccList - A string representing a list of e-mail addresses to copy the message to (separated by ",").
             * @param from - The FROM field to use for the e-mail message.
             * @param subject - The subject of the e-mail message.
             * @param body - The content of the e-mail message.
             * @throws org.apache.commons.mail.EmailException - If an error occurred while sending the e-mail message.
             */
            send(
              toList: java.lang.String,
              ccList: java.lang.String,
              from: java.lang.String,
              subject: java.lang.String,
              body: java.lang.String,
            ): void;

            /**
             * Sends an e-mail message.
             *
             * @param toList - A string representing a list of e-mail addresses to send the message to (separated by ",").
             * @param ccList - A string representing a list of e-mail addresses to copy the message to (separated by ",").
             * @param subject - The subject of the e-mail message.
             * @param body - The content of the e-mail message.
             * @throws org.apache.commons.mail.EmailException - If an error occurred while sending the e-mail message.
             */
            send(
              toList: java.lang.String,
              ccList: java.lang.String,
              subject: java.lang.String,
              body: java.lang.String,
            ): void;
          }

          /**
           * Utility class used to create SMTPConnection object using the server's default SMTP settings.
           */
          class SMTPConnectionFactory extends java.lang.Object {
            /**
             * Creates an create SMTPConnection object using the server's default SMTP settings.
             *
             * @returns The instantiated SMTPConnection object.
             * @throws com.mirth.connect.client.core.ControllerException - If the SMTP connection could not be created.
             */
            static createSMTPConnection(): com.mirth.connect.server.userutil.SMTPConnection;
          }

          class SourceMap
            extends java.lang.Object
            implements java.util.Map<java.lang.String, java.lang.Object>
          {
            /**
             * Instantiates a new SourceMap object.
             *
             * @param delegate - The underlying Map to reference for retrieving/setting data.
             */
            constructor(delegate: java.util.Map<java.lang.String, java.lang.Object>);

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
             * Description copied from interface: java.util.Map
             *
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
           * Utility class to create unique identifiers.
           */
          class UUIDGenerator extends java.lang.Object {
            /**
             * Returns a type 4 (pseudo randomly generated) UUID. The UUID is generated using a
             * cryptographically strong pseudo random number generator.
             *
             * @returns The UUID string.
             */
            static getUUID(): java.lang.String;
          }

          /**
           * Utility class used to dispatch messages to channels.
           */
          class VMRouter extends java.lang.Object {
            /**
             * Instantiates a VMRouter object.
             */
            constructor();

            /**
             * Dispatches a message to a channel, specified by the deployed channel name. If the dispatch
             * fails for any reason (for example, if the target channel is not started), a Response object
             * with the ERROR status and the error message will be returned.
             *
             * A `router` instance is already available in channel scripts; you rarely need to `new VMRouter()` yourself.
             *
             * @param channelName - The name of the deployed channel to dispatch the message to.
             * @param message - The message to dispatch to the channel.
             * @returns The Response object returned by the channel, if its source connector is configured to return one.
             * @example
             * ```js
             * // Dispatch the current encoded message to another deployed channel by name.
             * var response = router.routeMessage('Outbound ORU', connectorMessage.getEncodedData());
             * if (response.getStatus() == Status.ERROR) {
             *   logger.error('downstream channel rejected: ' + response.getStatusMessage());
             * }
             * ```
             */
            routeMessage(
              channelName: java.lang.String,
              message: java.lang.String,
            ): com.mirth.connect.userutil.Response;

            /**
             * Dispatches a message to a channel, specified by the deployed channel name. If the dispatch
             * fails for any reason (for example, if the target channel is not started), a Response object
             * with the ERROR status and the error message will be returned.
             *
             * @param channelName - The name of the deployed channel to dispatch the message to.
             * @param rawMessage - A RawMessage object to dispatch to the channel.
             * @returns The Response object returned by the channel, if its source connector is configured to return one.
             */
            routeMessage(
              channelName: java.lang.String,
              rawMessage: com.mirth.connect.server.userutil.RawMessage,
            ): com.mirth.connect.userutil.Response;

            /**
             * Dispatches a message to a channel, specified by the deployed channel ID. If the dispatch
             * fails for any reason (for example, if the target channel is not started), a Response object
             * with the ERROR status and the error message will be returned.
             *
             * @param channelId - The ID of the deployed channel to dispatch the message to.
             * @param message - The message to dispatch to the channel.
             * @returns The Response object returned by the channel, if its source connector is configured to return one.
             * @example
             * ```js
             * // Dispatch to a channel by its UUID instead of its name.
             * var response = router.routeMessageByChannelId(targetChannelId, msg.toString());
             * ```
             */
            routeMessageByChannelId(
              channelId: java.lang.String,
              message: java.lang.String,
            ): com.mirth.connect.userutil.Response;

            /**
             * Dispatches a message to a channel, specified by the deployed channel ID. If the dispatch
             * fails for any reason (for example, if the target channel is not started), a Response object
             * with the ERROR status and the error message will be returned.
             *
             * @param channelId - The ID of the deployed channel to dispatch the message to.
             * @param rawMessage - A RawMessage object to dispatch to the channel.
             * @returns The Response object returned by the channel, if its source connector is configured to return one.
             */
            routeMessageByChannelId(
              channelId: java.lang.String,
              rawMessage: com.mirth.connect.server.userutil.RawMessage,
            ): com.mirth.connect.userutil.Response;
          }
        }
      }
    }
  }
}
