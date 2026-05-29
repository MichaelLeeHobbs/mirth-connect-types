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
              message: java.lang.String | string,
              acknowledgementCode: java.lang.String | string,
              textMessage: java.lang.String | string,
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
              message: java.lang.String | string,
              dataType: java.lang.String | string,
              acknowledgementCode: java.lang.String | string,
              textMessage: java.lang.String | string,
              dateFormat: java.lang.String | string,
              errorMessage: java.lang.String | string,
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
              message: java.lang.String | string,
              isXML: boolean,
              acknowledgementCode: java.lang.String | string,
              textMessage: java.lang.String | string,
              dateFormat: java.lang.String | string,
              errorMessage: java.lang.String | string,
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
            constructor(channelId: java.lang.String | string);

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
            sendAlert(errorMessage: java.lang.String | string): void;
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
            constructor(
              id: java.lang.String | string,
              content: byte[],
              type: java.lang.String | string,
            );

            /**
             * Instantiates a new Attachment with String data using UTF-8 charset encoding.
             *
             * @param id - The unique ID of the attachment.
             * @param content - The string representation of the attachment content.
             * @param type - The MIME type of the attachment.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            constructor(
              id: java.lang.String | string,
              content: java.lang.String | string,
              type: java.lang.String | string,
            );

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
              id: java.lang.String | string,
              content: java.lang.String | string,
              charset: java.lang.String | string,
              type: java.lang.String | string,
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
            setId(id: java.lang.String | string): void;

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
            getContentString(charset: java.lang.String | string): java.lang.String;

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
            setContentString(content: java.lang.String | string): void;

            /**
             * Sets the content of the attachment, using the specified charset encoding.
             *
             * @param content - The string representation of the attachment content.
             * @param charset - The charset encoding to convert the string to bytes with.
             * @throws UnsupportedEncodingException - If the named charset is not supported.
             */
            setContentString(
              content: java.lang.String | string,
              charset: java.lang.String | string,
            ): void;

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
            setType(type: java.lang.String | string): void;
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
              raw: java.lang.String | string,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              charsetEncoding: java.lang.String | string,
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
              raw: java.lang.String | string,
              connectorMessage: com.mirth.connect.userutil.ImmutableConnectorMessage,
              charsetEncoding: java.lang.String | string,
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
              raw: java.lang.String | string,
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
              channelId: java.lang.String | string,
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
              channelId: java.lang.String | string,
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
              channelId: java.lang.String | string,
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
              attachmentId: java.lang.String | string,
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
              attachmentId: java.lang.String | string,
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
              channelId: java.lang.String | string,
              messageId: java.lang.Long,
              attachmentId: java.lang.String | string,
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
              channelId: java.lang.String | string,
              messageId: java.lang.Long,
              attachmentId: java.lang.String | string,
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
              type: java.lang.String | string,
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
              type: java.lang.String | string,
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
              type: java.lang.String | string,
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
              type: java.lang.String | string,
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
              attachmentId: java.lang.String | string,
              content: java.lang.Object,
              type: java.lang.String | string,
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
              attachmentId: java.lang.String | string,
              content: java.lang.Object,
              type: java.lang.String | string,
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
              channelId: java.lang.String | string,
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
              channelId: java.lang.String | string,
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
              channelId: java.lang.String | string,
              messageId: java.lang.Long,
              attachmentId: java.lang.String | string,
              content: java.lang.Object,
              type: java.lang.String | string,
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
              channelId: java.lang.String | string,
              messageId: java.lang.Long,
              attachmentId: java.lang.String | string,
              content: java.lang.Object,
              type: java.lang.String | string,
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
            put(key: java.lang.String | string, value: java.lang.Object): java.lang.Object;

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
            static getChannelName(channelId: java.lang.String | string): java.lang.String;

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
            static getDeployedChannelName(channelId: java.lang.String | string): java.lang.String;

            /**
             * Get the id for a deployed channel.
             *
             * @param channelName - The channel name of the deployed channel.
             * @returns The channel Id of the specified channel.
             */
            static getDeployedChannelId(channelName: java.lang.String | string): java.lang.String;

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
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Pause a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static pauseChannel(
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Resume a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static resumeChannel(
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Halt a deployed channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static haltChannel(
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.DeployedState;

            /**
             * Deploy a channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             */
            static deployChannel(
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Undeploy a channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             */
            static undeployChannel(
              channelIdOrName: java.lang.String | string,
            ): com.mirth.connect.server.userutil.Future<void>;

            /**
             * Check if a channel is currently deployed.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @returns True if the channel is deployed, false if it is not.
             */
            static isChannelDeployed(channelIdOrName: java.lang.String | string): boolean;

            /**
             * Start a connector on a given channel.
             *
             * @param channelIdOrName - The channel id or current name of the channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns A Future object representing the result of the asynchronous operation. You can call get() or get(timeoutInMillis) to wait for the operation to finish.
             * @throws Exception - If the task cannot be scheduled for execution.
             */
            static startConnector(
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
              metaDataId: number,
            ): com.mirth.connect.server.userutil.DeployedState;

            /**
             * Get the received count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The received count statistic as a Long for the specified channel.
             */
            static getReceivedCount(channelIdOrName: java.lang.String | string): java.lang.Long;

            /**
             * Get the received count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The received count statistic as a Long for the specified connector.
             */
            static getReceivedCount(
              channelIdOrName: java.lang.String | string,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the filtered count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The filtered count statistic as a Long for the specified channel.
             */
            static getFilteredCount(channelIdOrName: java.lang.String | string): java.lang.Long;

            /**
             * Get the filtered count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The filtered count statistic as a Long for the specified connector.
             */
            static getFilteredCount(
              channelIdOrName: java.lang.String | string,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the queued count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The queued count statistic as a Long for the specified channel.
             */
            static getQueuedCount(channelIdOrName: java.lang.String | string): java.lang.Long;

            /**
             * Get the queued count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The queued count statistic as a Long for the specified connector.
             */
            static getQueuedCount(
              channelIdOrName: java.lang.String | string,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the sent count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The sent count statistic as a Long for the specified channel.
             */
            static getSentCount(channelIdOrName: java.lang.String | string): java.lang.Long;

            /**
             * Get the sent count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The sent count statistic as a Long for the specified connector.
             */
            static getSentCount(
              channelIdOrName: java.lang.String | string,
              metaDataId: number,
            ): java.lang.Long;

            /**
             * Get the error count statistic for a specific channel.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @returns The error count statistic as a Long for the specified channel.
             */
            static getErrorCount(channelIdOrName: java.lang.String | string): java.lang.Long;

            /**
             * Get the error count statistic for a specific connector.
             *
             * @param channelIdOrName - The channel id or current name of the deployed channel.
             * @param metaDataId - The metadata id of the connector. Note that the source connector has a metadata id of 0.
             * @returns The error count statistic as a Long for the specified connector.
             */
            static getErrorCount(
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
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
              channelIdOrName: java.lang.String | string,
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
            constructor(address: java.lang.String | string);

            /**
             * Instantiates a new database connection with the given server address and connection
             * arguments.
             *
             * @param address - The server address to connect to.
             * @param info - A Properties object containing all applicable connection arguments.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(address: java.lang.String | string, info: java.util.Properties);

            /**
             * Instantiates a new database connection with the given driver instance and server address.
             *
             * @param driver - The explicit driver instance to connect with.
             * @param address - The server address to connect to.
             * @throws SQLException - If a database access error occurs.
             */
            constructor(driver: java.sql.Driver, address: java.lang.String | string);

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
              address: java.lang.String | string,
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
            executeCachedQuery(
              expression: java.lang.String | string,
            ): javax.sql.rowset.CachedRowSet;

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
            executeUpdate(expression: java.lang.String | string): int;

            /**
             * Executes a prepared INSERT/UPDATE statement on the database and returns the row count.
             *
             * @param expression - The prepared statement to be executed.
             * @param parameters - The parameters for the prepared statement.
             * @returns A count of the number of updated rows.
             * @throws SQLException - If a database access error occurs.
             */
            executeUpdate(
              expression: java.lang.String | string,
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
              expression: java.lang.String | string,
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
              expression: java.lang.String | string,
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
              expression: java.lang.String | string,
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
              driver: java.lang.String | string,
              address: java.lang.String | string,
              username: java.lang.String | string,
              password: java.lang.String | string,
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
              driver: java.lang.String | string,
              address: java.lang.String | string,
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
              driver: java.lang.String | string,
              address: java.lang.String | string,
              username: java.lang.String | string,
              password: java.lang.String | string,
            ): java.sql.Connection;

            /**
             * Initializes the specified JDBC driver. This can be used in JavaScript contexts where
             * "Class.forName" can't be called directly.
             *
             * @param driver - The JDBC driver class (as a string) to initialize.
             * @throws Exception - If the driver could not be initialized.
             */
            initializeDriver(driver: java.lang.String | string): void;
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
            static getDate(
              pattern: java.lang.String | string,
              date: java.lang.String | string,
            ): java.util.Date;

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
            static formatDate(
              pattern: java.lang.String | string,
              date: java.util.Date,
            ): java.lang.String;

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
            static getCurrentDate(pattern: java.lang.String | string): java.lang.String;

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
              inPattern: java.lang.String | string,
              outPattern: java.lang.String | string,
              date: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
              imageType: java.lang.String | string,
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
            constructor(header: java.lang.String | string, encryptedData: byte[]);

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
            static encrypt(data: java.lang.String | string): java.lang.String;

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
            static decrypt(data: java.lang.String | string): java.lang.String;

            /**
             * Convenience method for decrypting data. Uses the currently configured encryption and fallback
             * settings.
             *
             * @param header - The meta-information about the encrypted data. This is a specially-formatted string returned from the encrypt(byte[]) method.
             * @param data - The data to decrypt, as a raw byte array.
             * @returns The decrypted data.
             * @throws com.mirth.commons.encryption.EncryptionException - If the data cannot be decrypted for any reason.
             */
            static decrypt(header: java.lang.String | string, data: byte[]): byte[];
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
            static write(
              fileName: java.lang.String | string,
              append: boolean,
              data: java.lang.String | string,
            ): void;

            /**
             * Decodes a Base64 string into octets.
             *
             * @param data - The Base64 string to decode.
             * @returns The decoded data, as a byte array.s
             */
            static decode(data: java.lang.String | string): byte[];

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
            static write(fileName: java.lang.String | string, append: boolean, bytes: byte[]): void;

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
            static readBytes(fileName: java.lang.String | string): byte[];

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
            static read(fileName: java.lang.String | string): java.lang.String;

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
              message: java.lang.String | string,
              replaceLinebreaksWith: java.lang.String | string,
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
              str: java.lang.String | string,
              encoding: java.lang.String | string,
              algorithm: java.lang.String | string,
            ): java.lang.String;

            /**
             * Takes in a byte[], an encoding, and a hashing algorithm and generates a hex hash.
             *
             * @param bytes - The byte[] to hash.
             * @param algorithm - The hashing algorithm to use.
             * @returns hash The generated hex hash of the byte[].
             * @throws Exception - If generating a hex hash of the byte[] fails.
             */
            static generate(bytes: byte[], algorithm: java.lang.String | string): java.lang.String;
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
              str: java.lang.String | string,
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
              contentType: java.lang.String | string,
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
              httpBody: java.lang.String | string,
              contentType: java.lang.String | string,
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
           */
          class MirthCachedRowSet
            extends java.lang.Object
            implements javax.sql.rowset.CachedRowSet
          {
            /**
             * @throws SQLException - SQLException
             */
            constructor();

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Converts the designated column in this CachedRowSet object
             * to a Collection object. Implementations have some latitude in
             * how they can represent this Collection object because of the
             * abstract nature of the Collection framework.
             * Each column value should be fully represented in either a
             * general purpose Collection implementation or a specialized
             * Collection implementation, such as a Vector object.
             * An SQL NULL column value must be represented as a null
             * in the Java programming language.
             *
             * The standard reference implementation uses a Vector object
             * to contain the column values, and it is expected
             * that most implementations will do the same. If a Vector object
             * is used, it size must be exactly equal to the number of rows
             * in this CachedRowSet object.
             *
             * @param column - a String object giving the name of the column whose values are to be represented in a collection
             * @returns a Collection object that contains the values stored in the specified column of this CachedRowSet object
             * @throws SQLException - if an error occurs generating the collection or an invalid column id is provided
             */
            toCollection(column: java.lang.String | string): java.util.Collection<any>;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a String in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getString(columnName: java.lang.String | string): java.lang.String;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a boolean in the Java programming language.
             *
             * If the designated column has a datatype of CHAR or VARCHAR
             * and contains a "0" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains a 0, a value of false is returned. If the designated column has a datatype
             * of CHAR or VARCHAR
             * and contains a "1" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains a 1, a value of true is returned.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is false
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBoolean(columnName: java.lang.String | string): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a byte in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getByte(columnName: java.lang.String | string): byte;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a short in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getShort(columnName: java.lang.String | string): short;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * an int in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getInt(columnName: java.lang.String | string): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a long in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getLong(columnName: java.lang.String | string): long;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a float in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getFloat(columnName: java.lang.String | string): float;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a double in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDouble(columnName: java.lang.String | string): double;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.math.BigDecimal in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param scale - the number of digits to the right of the decimal point
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getBigDecimal(columnName: java.lang.String | string, scale: int): java.math.BigDecimal;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a byte array in the Java programming language.
             * The bytes represent the raw values returned by the driver.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBytes(columnName: java.lang.String | string): byte[];

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Date object in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDate(columnName: java.lang.String | string): java.sql.Date;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Time object in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTime(columnName: java.lang.String | string): java.sql.Time;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Timestamp object in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTimestamp(columnName: java.lang.String | string): java.sql.Timestamp;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a stream of
             * ASCII characters. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARCHAR values.
             * The JDBC driver will
             * do any necessary conversion from the database format into ASCII.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return 0 when the method available
             * is called whether there is data available or not.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Java input stream that delivers the database column value as a stream of one-byte ASCII characters. If the value is SQL NULL, the value returned is null.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getAsciiStream(columnName: java.lang.String | string): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a stream of two-byte
             * Unicode characters. The first byte is the high byte; the second
             * byte is the low byte.
             *
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARCHAR values.
             * The JDBC technology-enabled driver will
             * do any necessary conversion from the database format into Unicode.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.
             * Also, a stream may return 0 when the method
             * InputStream.available is called, whether there
             * is data available or not.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Java input stream that delivers the database column value as a stream of two-byte Unicode characters. If the value is SQL NULL, the value returned is null.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getUnicodeStream(columnName: java.lang.String | string): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a stream of uninterpreted
             * bytes.
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARBINARY
             * values.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return 0 when the method available
             * is called whether there is data available or not.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Java input stream that delivers the database column value as a stream of uninterpreted bytes; if the value is SQL NULL, the result is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBinaryStream(columnName: java.lang.String | string): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Gets the value of the designated column in the current row
             * of this ResultSet object as
             * an Object in the Java programming language.
             *
             * This method will return the value of the given column as a
             * Java object. The type of the Java object will be the default
             * Java object type corresponding to the column's SQL type,
             * following the mapping for built-in types specified in the JDBC
             * specification. If the value is an SQL NULL,
             * the driver returns a Java null.
             *
             * This method may also be used to read database-specific
             * abstract data types.
             *
             * In the JDBC 2.0 API, the behavior of the method
             * getObject is extended to materialize
             * data of SQL user-defined types. When a column contains
             * a structured or distinct value, the behavior of this method is as
             * if it were a call to: getObject(columnIndex,
             * this.getStatement().getConnection().getTypeMap()).
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a java.lang.Object holding the column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getObject(columnName: java.lang.String | string): java.lang.Object;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Maps the given ResultSet column label to its
             * ResultSet column index.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column index of the given column name
             * @throws SQLException - if the ResultSet object does not contain a column labeled columnLabel, a database access error occurs or this method is called on a closed result set
             */
            findColumn(columnName: java.lang.String | string): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.io.Reader object.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getCharacterStream(columnName: java.lang.String | string): java.io.Reader;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.math.BigDecimal with full precision.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value (full precision); if the value is SQL NULL, the value returned is null in the Java programming language.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBigDecimal(columnName: java.lang.String | string): java.math.BigDecimal;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Indicates whether the designated column in the current row of this
             * CachedRowSet object has been updated.
             *
             * @param columnName - a String object giving the name of the column to be checked for updates
             * @returns true if the column has been visibly updated; false otherwise
             * @throws SQLException - if the cursor is on the insert row, before the first row, or after the last row
             */
            columnUpdated(columnName: java.lang.String | string): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a null value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNull(columnName: java.lang.String | string): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a boolean value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBoolean(columnName: java.lang.String | string, x: boolean): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a byte value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateByte(columnName: java.lang.String | string, x: byte): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a short value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateShort(columnName: java.lang.String | string, x: short): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an int value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateInt(columnName: java.lang.String | string, x: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a long value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateLong(columnName: java.lang.String | string, x: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a float value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateFloat(columnName: java.lang.String | string, x: float): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a double value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateDouble(columnName: java.lang.String | string, x: double): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.BigDecimal
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBigDecimal(columnName: java.lang.String | string, x: java.math.BigDecimal): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a String value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateString(columnName: java.lang.String | string, x: java.lang.String | string): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a byte array value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow
             * or insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBytes(columnName: java.lang.String | string, x: byte[]): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Date value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateDate(columnName: java.lang.String | string, x: java.sql.Date): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Time value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateTime(columnName: java.lang.String | string, x: java.sql.Time): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Timestamp
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateTimestamp(columnName: java.lang.String | string, x: java.sql.Timestamp): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(
              columnName: java.lang.String | string,
              x: java.io.InputStream,
              length: int,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(
              columnName: java.lang.String | string,
              x: java.io.InputStream,
              length: int,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - the java.io.Reader object containing the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(
              columnName: java.lang.String | string,
              reader: java.io.Reader,
              length: int,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an Object value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * If the second argument is an InputStream then the stream must contain
             * the number of bytes specified by scaleOrLength. If the second argument is a
             * Reader then the reader must contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver will generate a
             * SQLException when the statement is executed.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @param scale - for an object of java.math.BigDecimal , this is the number of digits after the decimal point. For Java Object types InputStream and Reader, this is the length of the data in the stream or reader. For all other types, this value will be ignored.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateObject(
              columnName: java.lang.String | string,
              x: java.lang.Object,
              scale: int,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an Object value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateObject(columnName: java.lang.String | string, x: java.lang.Object): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as an Object
             * in the Java programming language.
             * If the value is an SQL NULL,
             * the driver returns a Java null.
             * This method uses the specified Map object for
             * custom mapping if appropriate.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param map - a java.util.Map object that contains the mapping from SQL type names to classes in the Java programming language
             * @returns an Object representing the SQL value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getObject(
              columnName: java.lang.String | string,
              map: java.util.Map<java.lang.String, java.lang.Class<any>>,
            ): java.lang.Object;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Ref object
             * in the Java programming language.
             *
             * @param colName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Ref object representing the SQL REF value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getRef(colName: java.lang.String | string): java.sql.Ref;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Blob object
             * in the Java programming language.
             *
             * @param colName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Blob object representing the SQL BLOB value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getBlob(colName: java.lang.String | string): java.sql.Blob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Clob object
             * in the Java programming language.
             *
             * @param colName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a Clob object representing the SQL CLOB value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getClob(colName: java.lang.String | string): java.sql.Clob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as an Array object
             * in the Java programming language.
             *
             * @param colName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns an Array object representing the SQL ARRAY value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getArray(colName: java.lang.String | string): java.sql.Array;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Date object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the date if the underlying database does not store
             * timezone information.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param cal - the java.util.Calendar object to use in constructing the date
             * @returns the column value as a java.sql.Date object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDate(columnName: java.lang.String | string, cal: java.util.Calendar): java.sql.Date;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Time object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the time if the underlying database does not store
             * timezone information.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param cal - the java.util.Calendar object to use in constructing the time
             * @returns the column value as a java.sql.Time object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTime(columnName: java.lang.String | string, cal: java.util.Calendar): java.sql.Time;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Timestamp object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the timestamp if the underlying database does not store
             * timezone information.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param cal - the java.util.Calendar object to use in constructing the date
             * @returns the column value as a java.sql.Timestamp object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid or if a database access error occurs or this method is called on a closed result set
             */
            getTimestamp(
              columnName: java.lang.String | string,
              cal: java.util.Calendar,
            ): java.sql.Timestamp;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Ref value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param ref - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateRef(columnName: java.lang.String | string, ref: java.sql.Ref): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Clob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param c - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(columnName: java.lang.String | string, c: java.sql.Clob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Blob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param b - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(columnName: java.lang.String | string, b: java.sql.Blob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Array value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param a - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateArray(columnName: java.lang.String | string, a: java.sql.Array): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.net.URL
             * object in the Java programming language.
             *
             * @param columnName - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value as a java.net.URL object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; this method is called on a closed result set or if a URL is malformed
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getURL(columnName: java.lang.String | string): java.net.URL;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the url property this RowSet object will use to
             * create a connection if it uses the DriverManager
             * instead of a DataSource object to establish the connection.
             * The default value is null.
             *
             * @returns a string url
             * @throws SQLException - if a database access error occurs
             */
            getUrl(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the URL this RowSet object will use when it uses the
             * DriverManager to create a connection.
             *
             * Setting this property is optional. If a URL is used, a JDBC driver
             * that accepts the URL must be loaded before the
             * rowset is used to connect to a database. The rowset will use the URL
             * internally to create a database connection when reading or writing
             * data. Either a URL or a data source name is used to create a
             * connection, whichever was set to non null value most recently.
             *
             * @param url - a string value; may be null
             * @throws SQLException - if a database access error occurs
             */
            setUrl(url: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the logical name that identifies the data source for this
             * RowSet object.
             *
             * @returns a data source name
             */
            getDataSourceName(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the data source name property for this RowSet object to the
             * given String.
             *
             * The value of the data source name property can be used to do a lookup of
             * a DataSource object that has been registered with a naming
             * service. After being retrieved, the DataSource object can be
             * used to create a connection to the data source that it represents.
             *
             * @param name - the logical name of the data source for this RowSet object; may be null
             * @throws SQLException - if a database access error occurs
             */
            setDataSourceName(name: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the username used to create a database connection for this
             * RowSet object.
             * The username property is set at run time before calling the method
             * execute. It is
             * not usually part of the serialized state of a RowSet object.
             *
             * @returns the username property
             */
            getUsername(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the username property for this RowSet object to the
             * given String.
             *
             * @param name - a user name
             * @throws SQLException - if a database access error occurs
             */
            setUsername(name: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the password used to create a database connection.
             * The password property is set at run time before calling the method
             * execute. It is not usually part of the serialized state
             * of a RowSet object.
             *
             * @returns the password for making a database connection
             */
            getPassword(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the database password for this RowSet object to
             * the given String.
             *
             * @param password - the password string
             * @throws SQLException - if a database access error occurs
             */
            setPassword(password: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the transaction isolation level set for this
             * RowSet object.
             *
             * @returns the transaction isolation level; one of Connection.TRANSACTION_READ_UNCOMMITTED, Connection.TRANSACTION_READ_COMMITTED, Connection.TRANSACTION_REPEATABLE_READ, or Connection.TRANSACTION_SERIALIZABLE
             */
            getTransactionIsolation(): int;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the transaction isolation level for this RowSet object.
             *
             * @param level - the transaction isolation level; one of Connection.TRANSACTION_READ_UNCOMMITTED, Connection.TRANSACTION_READ_COMMITTED, Connection.TRANSACTION_REPEATABLE_READ, or Connection.TRANSACTION_SERIALIZABLE
             * @throws SQLException - if a database access error occurs
             */
            setTransactionIsolation(level: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the Map object associated with this
             * RowSet object, which specifies the custom mapping
             * of SQL user-defined types, if any. The default is for the
             * type map to be empty.
             *
             * @returns a java.util.Map object containing the names of SQL user-defined types and the Java classes to which they are to be mapped
             * @throws SQLException - if a database access error occurs
             */
            getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<any>>;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Installs the given java.util.Map object as the default
             * type map for this RowSet object. This type map will be
             * used unless another type map is supplied as a method parameter.
             *
             * @param map - a java.util.Map object containing the names of SQL user-defined types and the Java classes to which they are to be mapped
             * @throws SQLException - if a database access error occurs
             */
            setTypeMap(map: java.util.Map<java.lang.String, java.lang.Class<any>>): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves this RowSet object's command property.
             *
             * The command property contains a command string, which must be an SQL
             * query, that can be executed to fill the rowset with data.
             * The default value is null.
             *
             * @returns the command string; may be null
             */
            getCommand(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets this RowSet object's command property to the given
             * SQL query.
             *
             * This property is optional
             * when a rowset gets its data from a data source that does not support
             * commands, such as a spreadsheet.
             *
             * @param cmd - the SQL query that will be used to get the data for this RowSet object; may be null
             * @throws SQLException - if a database access error occurs
             */
            setCommand(cmd: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves whether this RowSet object is read-only.
             * If updates are possible, the default is for a rowset to be
             * updatable.
             *
             * Attempts to update a read-only rowset will result in an
             * SQLException being thrown.
             *
             * @returns true if this RowSet object is read-only; false if it is updatable
             */
            isReadOnly(): boolean;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets whether this RowSet object is read-only to the
             * given boolean.
             *
             * @param value - true if read-only; false if updatable
             * @throws SQLException - if a database access error occurs
             */
            setReadOnly(value: boolean): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the maximum number of bytes that may be returned
             * for certain column values.
             * This limit applies only to BINARY,
             * VARBINARY, LONGVARBINARYBINARY, CHAR,
             * VARCHAR, LONGVARCHAR, NCHAR
             * and NVARCHAR columns.
             * If the limit is exceeded, the excess data is silently discarded.
             *
             * @returns the current maximum column size limit; zero means that there is no limit
             * @throws SQLException - if a database access error occurs
             */
            getMaxFieldSize(): int;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the maximum number of bytes that can be returned for a column
             * value to the given number of bytes.
             * This limit applies only to BINARY,
             * VARBINARY, LONGVARBINARYBINARY, CHAR,
             * VARCHAR, LONGVARCHAR, NCHAR
             * and NVARCHAR columns.
             * If the limit is exceeded, the excess data is silently discarded.
             * For maximum portability, use values greater than 256.
             *
             * @param max - the new max column size limit in bytes; zero means unlimited
             * @throws SQLException - if a database access error occurs
             */
            setMaxFieldSize(max: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the maximum number of rows that this RowSet
             * object can contain.
             * If the limit is exceeded, the excess rows are silently dropped.
             *
             * @returns the current maximum number of rows that this RowSet object can contain; zero means unlimited
             * @throws SQLException - if a database access error occurs
             */
            getMaxRows(): int;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the maximum number of rows that this RowSet
             * object can contain to the specified number.
             * If the limit is exceeded, the excess rows are silently dropped.
             *
             * @param max - the new maximum number of rows; zero means unlimited
             * @throws SQLException - if a database access error occurs
             */
            setMaxRows(max: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves whether escape processing is enabled for this
             * RowSet object.
             * If escape scanning is enabled, which is the default, the driver will do
             * escape substitution before sending an SQL statement to the database.
             *
             * @returns true if escape processing is enabled; false if it is disabled
             * @throws SQLException - if a database access error occurs
             */
            getEscapeProcessing(): boolean;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets escape processing for this RowSet object on or
             * off. If escape scanning is on (the default), the driver will do
             * escape substitution before sending an SQL statement to the database.
             *
             * @param enable - true to enable escape processing; false to disable it
             * @throws SQLException - if a database access error occurs
             */
            setEscapeProcessing(enable: boolean): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Retrieves the maximum number of seconds the driver will wait for
             * a statement to execute.
             * If this limit is exceeded, an SQLException is thrown.
             *
             * @returns the current query timeout limit in seconds; zero means unlimited
             * @throws SQLException - if a database access error occurs
             */
            getQueryTimeout(): int;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the maximum time the driver will wait for
             * a statement to execute to the given number of seconds.
             * If this limit is exceeded, an SQLException is thrown.
             *
             * @param seconds - the new query timeout limit in seconds; zero means that there is no limit
             * @throws SQLException - if a database access error occurs
             */
            setQueryTimeout(seconds: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the type of this RowSet object to the given type.
             * This method is used to change the type of a rowset, which is by
             * default read-only and non-scrollable.
             *
             * @param type - one of the ResultSet constants specifying a type: ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE
             * @throws SQLException - if a database access error occurs
             */
            setType(type: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the concurrency of this RowSet object to the given
             * concurrency level. This method is used to change the concurrency level
             * of a rowset, which is by default ResultSet.CONCUR_READ_ONLY
             *
             * @param concurrency - one of the ResultSet constants specifying a concurrency level: ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE
             * @throws SQLException - if a database access error occurs
             */
            setConcurrency(concurrency: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's SQL
             * command to SQL NULL.
             *
             * Note: You must specify the parameter's SQL type.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param sqlType - a SQL type code defined by java.sql.Types
             * @throws SQLException - if a database access error occurs
             */
            setNull(parameterIndex: int, sqlType: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to SQL NULL.
             *
             * Note: You must specify the parameter's SQL type.
             *
             * @param parameterName - the name of the parameter
             * @param sqlType - the SQL type code defined in java.sql.Types
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNull(parameterName: java.lang.String | string, sqlType: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's SQL
             * command to SQL NULL. This version of the method setNull
             * should be used for SQL user-defined types (UDTs) and REF type
             * parameters. Examples of UDTs include: STRUCT, DISTINCT,
             * JAVA_OBJECT, and named array types.
             *
             * Note: To be portable, applications must give the
             * SQL type code and the fully qualified SQL type name when specifying
             * a NULL UDT or REF parameter. In the case of a UDT,
             * the name is the type name of the parameter itself. For a REF
             * parameter, the name is the type name of the referenced type. If
             * a JDBC driver does not need the type code or type name information,
             * it may ignore it.
             *
             * Although it is intended for UDT and REF parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or REF type,
             * the typeName parameter is ignored.
             *
             * @param paramIndex - the first parameter is 1, the second is 2, ...
             * @param sqlType - a value from java.sql.Types
             * @param typeName - the fully qualified name of an SQL UDT or the type name of the SQL structured type being referenced by a REF type; ignored if the parameter is not a UDT or REF type
             * @throws SQLException - if a database access error occurs
             */
            setNull(paramIndex: int, sqlType: int, typeName: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to SQL NULL.
             * This version of the method setNull should
             * be used for user-defined types and REF type parameters. Examples
             * of user-defined types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             *
             * Note: To be portable, applications must give the
             * SQL type code and the fully-qualified SQL type name when specifying
             * a NULL user-defined or REF parameter. In the case of a user-defined type
             * the name is the type name of the parameter itself. For a REF
             * parameter, the name is the type name of the referenced type. If
             * a JDBC driver does not need the type code or type name information,
             * it may ignore it.
             *
             * Although it is intended for user-defined and Ref parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or REF type, the given
             * typeName is ignored.
             *
             * @param parameterName - the name of the parameter
             * @param sqlType - a value from java.sql.Types
             * @param typeName - the fully-qualified name of an SQL user-defined type; ignored if the parameter is not a user-defined type or SQL REF value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNull(
              parameterName: java.lang.String | string,
              sqlType: int,
              typeName: java.lang.String | string,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java boolean value. The driver converts this to
             * an SQL BIT value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setBoolean(parameterIndex: int, x: boolean): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java boolean value.
             * The driver converts this
             * to an SQL BIT or BOOLEAN value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBoolean(parameterName: java.lang.String | string, x: boolean): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java byte value. The driver converts this to
             * an SQL TINYINT value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setByte(parameterIndex: int, x: byte): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java byte value.
             * The driver converts this
             * to an SQL TINYINT value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setByte(parameterName: java.lang.String | string, x: byte): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java short value. The driver converts this to
             * an SQL SMALLINT value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setShort(parameterIndex: int, x: short): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java short value.
             * The driver converts this
             * to an SQL SMALLINT value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setShort(parameterName: java.lang.String | string, x: short): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java int value. The driver converts this to
             * an SQL INTEGER value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setInt(parameterIndex: int, x: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java int value.
             * The driver converts this
             * to an SQL INTEGER value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setInt(parameterName: java.lang.String | string, x: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java long value. The driver converts this to
             * an SQL BIGINT value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setLong(parameterIndex: int, x: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java long value.
             * The driver converts this
             * to an SQL BIGINT value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setLong(parameterName: java.lang.String | string, x: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java float value. The driver converts this to
             * an SQL REAL value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setFloat(parameterIndex: int, x: float): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java float value.
             * The driver converts this
             * to an SQL FLOAT value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setFloat(parameterName: java.lang.String | string, x: float): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java double value. The driver converts this to
             * an SQL DOUBLE value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setDouble(parameterIndex: int, x: double): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java double value.
             * The driver converts this
             * to an SQL DOUBLE value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setDouble(parameterName: java.lang.String | string, x: double): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.math.BigDeciaml value.
             * The driver converts this to
             * an SQL NUMERIC value before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setBigDecimal(parameterIndex: int, x: java.math.BigDecimal): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given
             * java.math.BigDecimal value.
             * The driver converts this to an SQL NUMERIC value when
             * it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBigDecimal(parameterName: java.lang.String | string, x: java.math.BigDecimal): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java String value. Before sending it to the
             * database, the driver converts this to an SQL VARCHAR or
             * LONGVARCHAR value, depending on the argument's size relative
             * to the driver's limits on VARCHAR values.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setString(parameterIndex: int, x: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java String value.
             * The driver converts this
             * to an SQL VARCHAR or LONGVARCHAR value
             * (depending on the argument's
             * size relative to the driver's limits on VARCHAR values)
             * when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setString(parameterName: java.lang.String | string, x: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Java array of byte values. Before sending it to the
             * database, the driver converts this to an SQL VARBINARY or
             * LONGVARBINARY value, depending on the argument's size relative
             * to the driver's limits on VARBINARY values.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setBytes(parameterIndex: int, x: byte[]): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Java array of bytes.
             * The driver converts this to an SQL VARBINARY or
             * LONGVARBINARY (depending on the argument's size relative
             * to the driver's limits on VARBINARY values) when it sends
             * it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBytes(parameterName: java.lang.String | string, x: byte[]): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.sql.Date value. The driver converts this to
             * an SQL DATE value before sending it to the database, using the
             * default java.util.Calendar to calculate the date.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setDate(parameterIndex: int, x: java.sql.Date): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.sql.Time value. The driver converts this to
             * an SQL TIME value before sending it to the database, using the
             * default java.util.Calendar to calculate it.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setTime(parameterIndex: int, x: java.sql.Time): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.sql.Timestamp value. The driver converts this to
             * an SQL TIMESTAMP value before sending it to the database, using the
             * default java.util.Calendar to calculate it.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setTimestamp(parameterIndex: int, x: java.sql.Timestamp): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Timestamp value.
             * The driver
             * converts this to an SQL TIMESTAMP value when it sends it to the
             * database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setTimestamp(parameterName: java.lang.String | string, x: java.sql.Timestamp): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.io.InputStream value.
             * It may be more practical to send a very large ASCII value via a
             * java.io.InputStream rather than as a LONGVARCHAR
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the Java input stream that contains the ASCII parameter value
             * @param length - the number of bytes in the stream
             * @throws SQLException - if a database access error occurs
             */
            setAsciiStream(parameterIndex: int, x: java.io.InputStream, length: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large ASCII value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.InputStream. Data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterName - the name of the parameter
             * @param x - the Java input stream that contains the ASCII parameter value
             * @param length - the number of bytes in the stream
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setAsciiStream(
              parameterName: java.lang.String | string,
              x: java.io.InputStream,
              length: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.io.InputStream value.
             * It may be more practical to send a very large binary value via a
             * java.io.InputStream rather than as a LONGVARBINARY
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the java input stream which contains the binary parameter value
             * @param length - the number of bytes in the stream
             * @throws SQLException - if a database access error occurs
             */
            setBinaryStream(parameterIndex: int, x: java.io.InputStream, length: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large binary value is input to a LONGVARBINARY
             * parameter, it may be more practical to send it via a
             * java.io.InputStream object. The data will be read from the stream
             * as needed until end-of-file is reached.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterName - the name of the parameter
             * @param x - the java input stream which contains the binary parameter value
             * @param length - the number of bytes in the stream
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBinaryStream(
              parameterName: java.lang.String | string,
              x: java.io.InputStream,
              length: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given java.io.Reader value.
             * It may be more practical to send a very large UNICODE value via a
             * java.io.Reader rather than as a LONGVARCHAR
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param reader - the Reader object that contains the UNICODE data to be set
             * @param length - the number of characters in the stream
             * @throws SQLException - if a database access error occurs
             */
            setCharacterStream(parameterIndex: int, reader: java.io.Reader, length: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Reader
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * @param parameterName - the name of the parameter
             * @param reader - the java.io.Reader object that contains the UNICODE data used as the designated parameter
             * @param length - the number of characters in the stream
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setCharacterStream(
              parameterName: java.lang.String | string,
              reader: java.io.Reader,
              length: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given input stream.
             * When a very large ASCII value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.InputStream. Data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setAsciiStream which takes a length parameter.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the Java input stream that contains the ASCII parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setAsciiStream(parameterIndex: int, x: java.io.InputStream): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given input stream.
             * When a very large ASCII value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.InputStream. Data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setAsciiStream which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param x - the Java input stream that contains the ASCII parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setAsciiStream(parameterName: java.lang.String | string, x: java.io.InputStream): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given input stream.
             * When a very large binary value is input to a LONGVARBINARY
             * parameter, it may be more practical to send it via a
             * java.io.InputStream object. The data will be read from the
             * stream as needed until end-of-file is reached.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setBinaryStream which takes a length parameter.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the java input stream which contains the binary parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBinaryStream(parameterIndex: int, x: java.io.InputStream): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given input stream.
             * When a very large binary value is input to a LONGVARBINARY
             * parameter, it may be more practical to send it via a
             * java.io.InputStream object. The data will be read from the
             * stream as needed until end-of-file is reached.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setBinaryStream which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param x - the java input stream which contains the binary parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBinaryStream(parameterName: java.lang.String | string, x: java.io.InputStream): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to the given Reader
             * object.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setCharacterStream which takes a length parameter.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param reader - the java.io.Reader object that contains the Unicode data
             * @throws SQLException - if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setCharacterStream(parameterIndex: int, reader: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given Reader
             * object.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The data will be read from the stream
             * as needed until end-of-file is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setCharacterStream which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param reader - the java.io.Reader object that contains the Unicode data
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setCharacterStream(
              parameterName: java.lang.String | string,
              reader: java.io.Reader,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * to a Reader object. The
             * Reader reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setNCharacterStream which takes a length parameter.
             *
             * @param parameterIndex - of the first parameter is 1, the second is 2, ...
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur ; if a database access error occurs; or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNCharacterStream(parameterIndex: int, value: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given Java Object. For integral values, the
             * java.lang equivalent objects should be used (for example,
             * an instance of the class Integer for an int).
             *
             * If the second argument is an InputStream then the stream must contain
             * the number of bytes specified by scaleOrLength. If the second argument is a
             * Reader then the reader must contain the number of characters specified * by scaleOrLength. If these conditions are not true the driver will generate a
             * SQLException when the prepared statement is executed.
             *
             * The given Java object will be converted to the targetSqlType
             * before being sent to the database.
             *
             * If the object is of a class implementing SQLData,
             * the rowset should call the method SQLData.writeSQL
             * to write the object to an SQLOutput data stream.
             * If, on the other hand, the object is of a class implementing
             * Ref, Blob, Clob, NClob,
             * Struct, java.net.URL,
             * or Array, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             *
             * Note that this method may be used to pass datatabase-specific
             * abstract data types.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the object containing the input parameter value
             * @param targetSqlType - the SQL type (as defined in java.sql.Types) to be sent to the database. The scale argument may further qualify this type.
             * @param scaleOrLength - for java.sql.Types.DECIMAL or java.sql.Types.NUMERIC types, this is the number of digits after the decimal point. For Java Object types InputStream and Reader, this is the length of the data in the stream or reader. For all other types, this value will be ignored.
             * @throws SQLException - if a database access error occurs
             */
            setObject(
              parameterIndex: int,
              x: java.lang.Object,
              targetSqlType: int,
              scaleOrLength: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the value of the designated parameter with the given object. The second
             * argument must be an object type; for integral values, the
             * java.lang equivalent objects should be used.
             *
             * The given Java object will be converted to the given targetSqlType
             * before being sent to the database.
             *
             * If the object has a custom mapping (is of a class implementing the
             * interface SQLData),
             * the JDBC driver should call the method SQLData.writeSQL to write it
             * to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * Ref, Blob, Clob, NClob,
             * Struct, java.net.URL,
             * or Array, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             *
             * Note that this method may be used to pass datatabase-
             * specific abstract data types.
             *
             * @param parameterName - the name of the parameter
             * @param x - the object containing the input parameter value
             * @param targetSqlType - the SQL type (as defined in java.sql.Types) to be sent to the database. The scale argument may further qualify this type.
             * @param scale - for java.sql.Types.DECIMAL or java.sql.Types.NUMERIC types, this is the number of digits after the decimal point. For all other types, this value will be ignored.
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if targetSqlType is a ARRAY, BLOB, CLOB, DATALINK, JAVA_OBJECT, NCHAR, NCLOB, NVARCHAR, LONGNVARCHAR, REF, ROWID, SQLXML or STRUCT data type and the JDBC driver does not support this data type
             */
            setObject(
              parameterName: java.lang.String | string,
              x: java.lang.Object,
              targetSqlType: int,
              scale: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with a Java Object. For integral values, the
             * java.lang equivalent objects should be used.
             * This method is like setObject above, but the scale used is the scale
             * of the second parameter. Scalar values have a scale of zero. Literal
             * values have the scale present in the literal.
             *
             * Even though it is supported, it is not recommended that this method
             * be called with floating point input values.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the object containing the input parameter value
             * @param targetSqlType - the SQL type (as defined in java.sql.Types) to be sent to the database
             * @throws SQLException - if a database access error occurs
             */
            setObject(parameterIndex: int, x: java.lang.Object, targetSqlType: int): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the value of the designated parameter with the given object.
             * This method is like the method setObject
             * above, except that it assumes a scale of zero.
             *
             * @param parameterName - the name of the parameter
             * @param x - the object containing the input parameter value
             * @param targetSqlType - the SQL type (as defined in java.sql.Types) to be sent to the database
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if targetSqlType is a ARRAY, BLOB, CLOB, DATALINK, JAVA_OBJECT, NCHAR, NCLOB, NVARCHAR, LONGNVARCHAR, REF, ROWID, SQLXML or STRUCT data type and the JDBC driver does not support this data type
             */
            setObject(
              parameterName: java.lang.String | string,
              x: java.lang.Object,
              targetSqlType: int,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the value of the designated parameter with the given object.
             * The second parameter must be of type Object; therefore, the
             * java.lang equivalent objects should be used for built-in types.
             *
             * The JDBC specification specifies a standard mapping from
             * Java Object types to SQL types. The given argument
             * will be converted to the corresponding SQL type before being
             * sent to the database.
             *
             * Note that this method may be used to pass datatabase-
             * specific abstract data types, by using a driver-specific Java
             * type.
             *
             * If the object is of a class implementing the interface SQLData,
             * the JDBC driver should call the method SQLData.writeSQL
             * to write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * Ref, Blob, Clob, NClob,
             * Struct, java.net.URL,
             * or Array, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             *
             * This method throws an exception if there is an ambiguity, for example, if the
             * object is of a class implementing more than one of the interfaces named above.
             *
             * @param parameterName - the name of the parameter
             * @param x - the object containing the input parameter value
             * @throws SQLException - if a database access error occurs, this method is called on a closed CallableStatement or if the given Object parameter is ambiguous
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setObject(parameterName: java.lang.String | string, x: java.lang.Object): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with a Java Object. For integral values, the
             * java.lang equivalent objects should be used.
             *
             * The JDBC specification provides a standard mapping from
             * Java Object types to SQL types. The driver will convert the
             * given Java object to its standard SQL mapping before sending it
             * to the database.
             *
             * Note that this method may be used to pass datatabase-specific
             * abstract data types by using a driver-specific Java type.
             *
             * If the object is of a class implementing SQLData,
             * the rowset should call the method SQLData.writeSQL
             * to write the object to an SQLOutput data stream.
             * If, on the other hand, the object is of a class implementing
             * Ref, Blob, Clob, NClob,
             * Struct, java.net.URL,
             * or Array, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             *
             * An exception is thrown if there is an ambiguity, for example, if the
             * object is of a class implementing more than one of these interfaces.
             *
             * @param parameterIndex - The first parameter is 1, the second is 2, ...
             * @param x - The object containing the input parameter value
             * @throws SQLException - if a database access error occurs
             */
            setObject(parameterIndex: int, x: java.lang.Object): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given Ref value. The driver will convert this
             * to the appropriate REF(<structured-type>) value.
             *
             * @param i - the first parameter is 1, the second is 2, ...
             * @param x - an object representing data of an SQL REF type
             * @throws SQLException - if a database access error occurs
             */
            setRef(i: int, x: java.sql.Ref): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given Blob value. The driver will convert this
             * to the BLOB value that the Blob object
             * represents before sending it to the database.
             *
             * @param i - the first parameter is 1, the second is 2, ...
             * @param x - an object representing a BLOB
             * @throws SQLException - if a database access error occurs
             */
            setBlob(i: int, x: java.sql.Blob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a InputStream object. The inputstream must contain the number
             * of characters specified by length otherwise a SQLException will be
             * generated when the PreparedStatement is executed.
             * This method differs from the setBinaryStream (int, InputStream, int)
             * method because it informs the driver that the parameter value should be
             * sent to the server as a BLOB. When the setBinaryStream method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGVARBINARY or a BLOB
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @param length - the number of bytes in the parameter data.
             * @throws SQLException - if a database access error occurs, this method is called on a closed PreparedStatement, if parameterIndex does not correspond to a parameter marker in the SQL statement, if the length specified is less than zero or if the number of bytes in the inputstream does not match the specified length.
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBlob(parameterIndex: int, inputStream: java.io.InputStream, length: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a InputStream object.
             * This method differs from the setBinaryStream (int, InputStream)
             * method because it informs the driver that the parameter value should be
             * sent to the server as a BLOB. When the setBinaryStream method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGVARBINARY or a BLOB
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setBlob which takes a length parameter.
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @throws SQLException - if a database access error occurs, this method is called on a closed PreparedStatement or if parameterIndex does not correspond to a parameter marker in the SQL statement,
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBlob(parameterIndex: int, inputStream: java.io.InputStream): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a InputStream object. The inputstream must contain the number
             * of characters specified by length, otherwise a SQLException will be
             * generated when the CallableStatement is executed.
             * This method differs from the setBinaryStream (int, InputStream, int)
             * method because it informs the driver that the parameter value should be
             * sent to the server as a BLOB. When the setBinaryStream method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGVARBINARY or a BLOB
             *
             * @param parameterName - the name of the parameter to be set the second is 2, ...
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @param length - the number of bytes in the parameter data.
             * @throws SQLException - if parameterIndex does not correspond to a parameter marker in the SQL statement, or if the length specified is less than zero; if the number of bytes in the inputstream does not match the specified length; if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBlob(
              parameterName: java.lang.String | string,
              inputStream: java.io.InputStream,
              length: long,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Blob object.
             * The driver converts this to an SQL BLOB value when it
             * sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - a Blob object that maps an SQL BLOB value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBlob(parameterName: java.lang.String | string, x: java.sql.Blob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a InputStream object.
             * This method differs from the setBinaryStream (int, InputStream)
             * method because it informs the driver that the parameter value should be
             * sent to the server as a BLOB. When the setBinaryStream method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a LONGVARBINARY or a BLOB
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setBlob which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setBlob(
              parameterName: java.lang.String | string,
              inputStream: java.io.InputStream,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given Clob value. The driver will convert this
             * to the CLOB value that the Clob object
             * represents before sending it to the database.
             *
             * @param i - the first parameter is 1, the second is 2, ...
             * @param x - an object representing a CLOB
             * @throws SQLException - if a database access error occurs
             */
            setClob(i: int, x: java.sql.Clob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The reader must contain the number
             * of characters specified by length otherwise a SQLException will be
             * generated when the PreparedStatement is executed.
             * This method differs from the setCharacterStream (int, Reader, int) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a CLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGVARCHAR or a CLOB
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if a database access error occurs, this method is called on a closed PreparedStatement, if parameterIndex does not correspond to a parameter marker in the SQL statement, or if the length specified is less than zero.
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setClob(parameterIndex: int, reader: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object.
             * This method differs from the setCharacterStream (int, Reader) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a CLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGVARCHAR or a CLOB
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setClob which takes a length parameter.
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if a database access error occurs, this method is called on a closed PreparedStatementor if parameterIndex does not correspond to a parameter marker in the SQL statement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setClob(parameterIndex: int, reader: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The reader must contain the number
             * of characters specified by length otherwise a SQLException will be
             * generated when the CallableStatement is executed.
             * This method differs from the setCharacterStream (int, Reader, int) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a CLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a LONGVARCHAR or a CLOB
             *
             * @param parameterName - the name of the parameter to be set
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if parameterIndex does not correspond to a parameter marker in the SQL statement; if the length specified is less than zero; a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setClob(
              parameterName: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Clob object.
             * The driver converts this to an SQL CLOB value when it
             * sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - a Clob object that maps an SQL CLOB value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setClob(parameterName: java.lang.String | string, x: java.sql.Clob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object.
             * This method differs from the setCharacterStream (int, Reader) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a CLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a LONGVARCHAR or a CLOB
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setClob which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setClob(parameterName: java.lang.String | string, reader: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given Array value. The driver will convert this
             * to the ARRAY value that the Array object
             * represents before sending it to the database.
             *
             * @param i - the first parameter is 1, the second is 2, ...
             * @param x - an object representing an SQL array
             * @throws SQLException - if a database access error occurs
             */
            setArray(i: int, x: java.sql.Array): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given java.sql.Date value. The driver will convert this
             * to an SQL DATE value, using the given java.util.Calendar
             * object to calculate the date.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @param cal - the java.util.Calendar object to use for calculating the date
             * @throws SQLException - if a database access error occurs
             */
            setDate(parameterIndex: int, x: java.sql.Date, cal: java.util.Calendar): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Date value
             * using the default time zone of the virtual machine that is running
             * the application.
             * The driver converts this
             * to an SQL DATE value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setDate(parameterName: java.lang.String | string, x: java.sql.Date): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Date value,
             * using the given Calendar object. The driver uses
             * the Calendar object to construct an SQL DATE value,
             * which the driver then sends to the database. With a
             * a Calendar object, the driver can calculate the date
             * taking into account a custom timezone. If no
             * Calendar object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @param cal - the Calendar object the driver will use to construct the date
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setDate(
              parameterName: java.lang.String | string,
              x: java.sql.Date,
              cal: java.util.Calendar,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given java.sql.Time value. The driver will convert this
             * to an SQL TIME value, using the given java.util.Calendar
             * object to calculate it, before sending it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @param cal - the java.util.Calendar object to use for calculating the time
             * @throws SQLException - if a database access error occurs
             */
            setTime(parameterIndex: int, x: java.sql.Time, cal: java.util.Calendar): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Time value.
             * The driver converts this
             * to an SQL TIME value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setTime(parameterName: java.lang.String | string, x: java.sql.Time): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Time value,
             * using the given Calendar object. The driver uses
             * the Calendar object to construct an SQL TIME value,
             * which the driver then sends to the database. With a
             * a Calendar object, the driver can calculate the time
             * taking into account a custom timezone. If no
             * Calendar object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @param cal - the Calendar object the driver will use to construct the time
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setTime(
              parameterName: java.lang.String | string,
              x: java.sql.Time,
              cal: java.util.Calendar,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter in this RowSet object's command
             * with the given java.sql.Timestamp value. The driver will
             * convert this to an SQL TIMESTAMP value, using the given
             * java.util.Calendar object to calculate it, before sending it to the
             * database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @param cal - the java.util.Calendar object to use for calculating the timestamp
             * @throws SQLException - if a database access error occurs
             */
            setTimestamp(parameterIndex: int, x: java.sql.Timestamp, cal: java.util.Calendar): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.Timestamp value,
             * using the given Calendar object. The driver uses
             * the Calendar object to construct an SQL TIMESTAMP value,
             * which the driver then sends to the database. With a
             * a Calendar object, the driver can calculate the timestamp
             * taking into account a custom timezone. If no
             * Calendar object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @param cal - the Calendar object the driver will use to construct the timestamp
             * @throws SQLException - if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setTimestamp(
              parameterName: java.lang.String | string,
              x: java.sql.Timestamp,
              cal: java.util.Calendar,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Clears the parameters set for this RowSet object's command.
             * In general, parameter values remain in force for repeated use of a
             * RowSet object. Setting a parameter value automatically clears its
             * previous value. However, in some cases it is useful to immediately
             * release the resources used by the current parameter values, which can
             * be done by calling the method clearParameters.
             *
             * @throws SQLException - if a database access error occurs
             */
            clearParameters(): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Fills this RowSet object with data.
             *
             * The execute method may use the following properties
             * to create a connection for reading data: url, data source name,
             * user name, password, transaction isolation, and type map.
             *
             * The execute method may use the following properties
             * to create a statement to execute a command:
             * command, read only, maximum field size,
             * maximum rows, escape processing, and query timeout.
             *
             * If the required properties have not been set, an exception is
             * thrown. If this method is successful, the current contents of the rowset are
             * discarded and the rowset's metadata is also (re)set. If there are
             * outstanding updates, they are ignored.
             *
             * If this RowSet object does not maintain a continuous connection
             * with its source of data, it may use a reader (a RowSetReader
             * object) to fill itself with data. In this case, a reader will have been
             * registered with this RowSet object, and the method
             * execute will call on the reader's readData
             * method as part of its implementation.
             *
             * @throws SQLException - if a database access error occurs or any of the properties necessary for making a connection and creating a statement have not been set
             */
            execute(): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Registers the given listener so that it will be notified of events
             * that occur on this RowSet object.
             *
             * @param listener - a component that has implemented the RowSetListener interface and wants to be notified when events occur on this RowSet object
             */
            addRowSetListener(listener: javax.sql.RowSetListener): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Removes the specified listener from the list of components that will be
             * notified when an event occurs on this RowSet object.
             *
             * @param listener - a component that has been registered as a listener for this RowSet object
             */
            removeRowSetListener(listener: javax.sql.RowSetListener): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.SQLXML object. The driver converts this to an
             * SQL XML value when it sends it to the database.
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param xmlObject - a SQLXML object that maps an SQL XML value
             * @throws SQLException - if a database access error occurs, this method is called on a closed result set, the java.xml.transform.Result, Writer or OutputStream has not been closed for the SQLXML object or if there is an error processing the XML value. The getCause method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
             */
            setSQLXML(parameterIndex: int, xmlObject: java.sql.SQLXML): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.SQLXML object. The driver converts this to an
             * SQL XML value when it sends it to the database.
             *
             * @param parameterName - the name of the parameter
             * @param xmlObject - a SQLXML object that maps an SQL XML value
             * @throws SQLException - if a database access error occurs, this method is called on a closed result set, the java.xml.transform.Result, Writer or OutputStream has not been closed for the SQLXML object or if there is an error processing the XML value. The getCause method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
             */
            setSQLXML(parameterName: java.lang.String | string, xmlObject: java.sql.SQLXML): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.RowId object. The
             * driver converts this to a SQL ROWID value when it sends it
             * to the database
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setRowId(parameterIndex: int, x: java.sql.RowId): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.sql.RowId object. The
             * driver converts this to a SQL ROWID when it sends it to the
             * database.
             *
             * @param parameterName - the name of the parameter
             * @param x - the parameter value
             * @throws SQLException - if a database access error occurs
             */
            setRowId(parameterName: java.lang.String | string, x: java.sql.RowId): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given String object.
             * The driver converts this to a SQL NCHAR or
             * NVARCHAR or LONGNVARCHAR value
             * (depending on the argument's
             * size relative to the driver's limits on NVARCHAR values)
             * when it sends it to the database.
             *
             * @param parameterIndex - of the first parameter is 1, the second is 2, ...
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur ; or if a database access error occurs
             */
            setNString(parameterIndex: int, value: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given String object.
             * The driver converts this to a SQL NCHAR or
             * NVARCHAR or LONGNVARCHAR
             *
             * @param parameterName - the name of the column to be set
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; or if a database access error occurs
             */
            setNString(
              parameterName: java.lang.String | string,
              value: java.lang.String | string,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The
             * Reader reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             *
             * @param parameterIndex - of the first parameter is 1, the second is 2, ...
             * @param value - the parameter value
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur ; or if a database access error occurs
             */
            setNCharacterStream(parameterIndex: int, value: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The
             * Reader reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             *
             * @param parameterName - the name of the column to be set
             * @param value - the parameter value
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; or if a database access error occurs
             */
            setNCharacterStream(
              parameterName: java.lang.String | string,
              value: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The
             * Reader reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             *
             * Note: This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setNCharacterStream which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur ; if a database access error occurs; or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNCharacterStream(
              parameterName: java.lang.String | string,
              value: java.io.Reader,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a java.sql.NClob object. The object
             * implements the java.sql.NClob interface. This NClob
             * object maps to a SQL NCLOB.
             *
             * @param parameterName - the name of the column to be set
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; or if a database access error occurs
             */
            setNClob(parameterName: java.lang.String | string, value: java.sql.NClob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The reader must contain the number
             * of characters specified by length otherwise a SQLException will be
             * generated when the CallableStatement is executed.
             * This method differs from the setCharacterStream (int, Reader, int) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a NCLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a LONGNVARCHAR or a NCLOB
             *
             * @param parameterName - the name of the parameter to be set
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if parameterIndex does not correspond to a parameter marker in the SQL statement; if the length specified is less than zero; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNClob(
              parameterName: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object.
             * This method differs from the setCharacterStream (int, Reader) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a NCLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a LONGNVARCHAR or a NCLOB
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setNClob which takes a length parameter.
             *
             * @param parameterName - the name of the parameter
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed CallableStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNClob(parameterName: java.lang.String | string, reader: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object. The reader must contain the number
             * of characters specified by length otherwise a SQLException will be
             * generated when the PreparedStatement is executed.
             * This method differs from the setCharacterStream (int, Reader, int) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a NCLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGNVARCHAR or a NCLOB
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if parameterIndex does not correspond to a parameter marker in the SQL statement; if the length specified is less than zero; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNClob(parameterIndex: int, reader: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a java.sql.NClob object. The driver converts this to a
             * SQL NCLOB value when it sends it to the database.
             *
             * @param parameterIndex - of the first parameter is 1, the second is 2, ...
             * @param value - the parameter value
             * @throws SQLException - if the driver does not support national character sets; if the driver can detect that a data conversion error could occur ; or if a database access error occurs
             */
            setNClob(parameterIndex: int, value: java.sql.NClob): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to a Reader object.
             * This method differs from the setCharacterStream (int, Reader) method
             * because it informs the driver that the parameter value should be sent to
             * the server as a NCLOB. When the setCharacterStream method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a LONGNVARCHAR or a NCLOB
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * setNClob which takes a length parameter.
             *
             * @param parameterIndex - index of the first parameter is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if parameterIndex does not correspond to a parameter marker in the SQL statement; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setNClob(parameterIndex: int, reader: java.io.Reader): void;

            /**
             * Description copied from interface: javax.sql.RowSet
             *
             * Sets the designated parameter to the given java.net.URL value.
             * The driver converts this to an SQL DATALINK value
             * when it sends it to the database.
             *
             * @param parameterIndex - the first parameter is 1, the second is 2, ...
             * @param x - the java.net.URL object to be set
             * @throws SQLException - if a database access error occurs or this method is called on a closed PreparedStatement
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            setURL(parameterIndex: int, x: java.net.URL): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor forward one row from its current position.
             * A ResultSet cursor is initially positioned
             * before the first row; the first call to the method
             * next makes the first row the current row; the
             * second call makes the second row the current row, and so on.
             *
             * When a call to the next method returns false,
             * the cursor is positioned after the last row. Any
             * invocation of a ResultSet method which requires a
             * current row will result in a SQLException being thrown.
             * If the result set type is TYPE_FORWARD_ONLY, it is vendor specified
             * whether their JDBC driver implementation will return false or
             * throw an SQLException on a
             * subsequent call to next.
             *
             * If an input stream is open for the current row, a call
             * to the method next will
             * implicitly close it. A ResultSet object's
             * warning chain is cleared when a new row is read.
             *
             * @returns true if the new current row is valid; false if there are no more rows
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            next(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Releases this ResultSet object's database and
             * JDBC resources immediately instead of waiting for
             * this to happen when it is automatically closed.
             *
             * The closing of a ResultSet object does not close the Blob,
             * Clob or NClob objects created by the ResultSet. Blob,
             * Clob or NClob objects remain valid for at least the duration of the
             * transaction in which they are created, unless their free method is invoked.
             *
             * When a ResultSet is closed, any ResultSetMetaData
             * instances that were created by calling the getMetaData
             * method remain accessible.
             *
             * Note: A ResultSet object
             * is automatically closed by the
             * Statement object that generated it when
             * that Statement object is closed,
             * re-executed, or is used to retrieve the next result from a
             * sequence of multiple results.
             *
             * Calling the method close on a ResultSet
             * object that is already closed is a no-op.
             *
             * @throws SQLException - if a database access error occurs
             */
            close(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Reports whether
             * the last column read had a value of SQL NULL.
             * Note that you must first call one of the getter methods
             * on a column to try to read its value and then call
             * the method wasNull to see if the value read was
             * SQL NULL.
             *
             * @returns true if the last column value read was SQL NULL and false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            wasNull(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a String in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getString(columnIndex: int): java.lang.String;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a boolean in the Java programming language.
             *
             * If the designated column has a datatype of CHAR or VARCHAR
             * and contains a "0" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains a 0, a value of false is returned. If the designated column has a datatype
             * of CHAR or VARCHAR
             * and contains a "1" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains a 1, a value of true is returned.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is false
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBoolean(columnIndex: int): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a byte in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getByte(columnIndex: int): byte;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a short in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getShort(columnIndex: int): short;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * an int in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getInt(columnIndex: int): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a long in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getLong(columnIndex: int): long;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a float in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getFloat(columnIndex: int): float;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a double in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is 0
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDouble(columnIndex: int): double;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.BigDecimal in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param scale - the number of digits to the right of the decimal point
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getBigDecimal(columnIndex: int, scale: int): java.math.BigDecimal;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a byte array in the Java programming language.
             * The bytes represent the raw values returned by the driver.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBytes(columnIndex: int): byte[];

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Date object in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDate(columnIndex: int): java.sql.Date;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Time object in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTime(columnIndex: int): java.sql.Time;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a java.sql.Timestamp object in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTimestamp(columnIndex: int): java.sql.Timestamp;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a stream of ASCII characters. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARCHAR values.
             * The JDBC driver will
             * do any necessary conversion from the database format into ASCII.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return 0 when the method
             * InputStream.available
             * is called whether there is data available or not.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Java input stream that delivers the database column value as a stream of one-byte ASCII characters; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getAsciiStream(columnIndex: int): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * as a stream of two-byte 3 characters. The first byte is
             * the high byte; the second byte is the low byte.
             *
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARCHARvalues. The
             * JDBC driver will do any necessary conversion from the database
             * format into Unicode.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.
             * Also, a stream may return 0 when the method
             * InputStream.available
             * is called, whether there is data available or not.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Java input stream that delivers the database column value as a stream of two-byte Unicode characters; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getUnicodeStream(columnIndex: int): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a stream of
             * uninterpreted bytes. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large LONGVARBINARY values.
             *
             * Note: All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return 0 when the method
             * InputStream.available
             * is called whether there is data available or not.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Java input stream that delivers the database column value as a stream of uninterpreted bytes; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBinaryStream(columnIndex: int): java.io.InputStream;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the first warning reported by calls on this
             * ResultSet object.
             * Subsequent warnings on this ResultSet object
             * will be chained to the SQLWarning object that
             * this method returns.
             *
             * The warning chain is automatically cleared each time a new
             * row is read. This method may not be called on a ResultSet
             * object that has been closed; doing so will cause an
             * SQLException to be thrown.
             *
             * Note: This warning chain only covers warnings caused
             * by ResultSet methods. Any warning caused by
             * Statement methods
             * (such as reading OUT parameters) will be chained on the
             * Statement object.
             *
             * @returns the first SQLWarning object reported or null if there are none
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getWarnings(): java.sql.SQLWarning;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Clears all warnings reported on this ResultSet object.
             * After this method is called, the method getWarnings
             * returns null until a new warning is
             * reported for this ResultSet object.
             *
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            clearWarnings(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the name of the SQL cursor used by this ResultSet
             * object.
             *
             * In SQL, a result table is retrieved through a cursor that is
             * named. The current row of a result set can be updated or deleted
             * using a positioned update/delete statement that references the
             * cursor name. To insure that the cursor has the proper isolation
             * level to support update, the cursor's SELECT statement
             * should be of the form SELECT FOR UPDATE. If
             * FOR UPDATE is omitted, the positioned updates may fail.
             *
             * The JDBC API supports this SQL feature by providing the name of the
             * SQL cursor used by a ResultSet object.
             * The current row of a ResultSet object
             * is also the current row of this SQL cursor.
             *
             * @returns the SQL name for this ResultSet object's cursor
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getCursorName(): java.lang.String;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the number, types and properties of
             * this ResultSet object's columns.
             *
             * @returns the description of this ResultSet object's columns
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getMetaData(): java.sql.ResultSetMetaData;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Gets the value of the designated column in the current row
             * of this ResultSet object as
             * an Object in the Java programming language.
             *
             * This method will return the value of the given column as a
             * Java object. The type of the Java object will be the default
             * Java object type corresponding to the column's SQL type,
             * following the mapping for built-in types specified in the JDBC
             * specification. If the value is an SQL NULL,
             * the driver returns a Java null.
             *
             * This method may also be used to read database-specific
             * abstract data types.
             *
             * In the JDBC 2.0 API, the behavior of method
             * getObject is extended to materialize
             * data of SQL user-defined types.
             *
             * If Connection.getTypeMap does not throw a
             * SQLFeatureNotSupportedException,
             * then when a column contains a structured or distinct value,
             * the behavior of this method is as
             * if it were a call to: getObject(columnIndex,
             * this.getStatement().getConnection().getTypeMap()).
             *
             * If Connection.getTypeMap does throw a
             * SQLFeatureNotSupportedException,
             * then structured values are not supported, and distinct values
             * are mapped to the default Java class as determined by the
             * underlying SQL type of the DISTINCT type.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a java.lang.Object holding the column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getObject(columnIndex: int): java.lang.Object;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.io.Reader object.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getCharacterStream(columnIndex: int): java.io.Reader;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.math.BigDecimal with full precision.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value (full precision); if the value is SQL NULL, the value returned is null in the Java programming language.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getBigDecimal(columnIndex: int): java.math.BigDecimal;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the cursor is before the first row in
             * this ResultSet object.
             *
             * Note:Support for the isBeforeFirst method
             * is optional for ResultSets with a result
             * set type of TYPE_FORWARD_ONLY
             *
             * @returns true if the cursor is before the first row; false if the cursor is at any other position or the result set contains no rows
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            isBeforeFirst(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the cursor is after the last row in
             * this ResultSet object.
             *
             * Note:Support for the isAfterLast method
             * is optional for ResultSets with a result
             * set type of TYPE_FORWARD_ONLY
             *
             * @returns true if the cursor is after the last row; false if the cursor is at any other position or the result set contains no rows
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            isAfterLast(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the cursor is on the first row of
             * this ResultSet object.
             *
             * Note:Support for the isFirst method
             * is optional for ResultSets with a result
             * set type of TYPE_FORWARD_ONLY
             *
             * @returns true if the cursor is on the first row; false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            isFirst(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the cursor is on the last row of
             * this ResultSet object.
             * Note: Calling the method isLast may be expensive
             * because the JDBC driver
             * might need to fetch ahead one row in order to determine
             * whether the current row is the last row in the result set.
             *
             * Note: Support for the isLast method
             * is optional for ResultSets with a result
             * set type of TYPE_FORWARD_ONLY
             *
             * @returns true if the cursor is on the last row; false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            isLast(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the front of
             * this ResultSet object, just before the
             * first row. This method has no effect if the result set contains no rows.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            beforeFirst(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the end of
             * this ResultSet object, just after the
             * last row. This method has no effect if the result set contains no rows.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            afterLast(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the first row in
             * this ResultSet object.
             *
             * @returns true if the cursor is on a valid row; false if there are no rows in the result set
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            first(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the last row in
             * this ResultSet object.
             *
             * @returns true if the cursor is on a valid row; false if there are no rows in the result set
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            last(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the current row number. The first row is number 1, the
             * second number 2, and so on.
             *
             * Note:Support for the getRow method
             * is optional for ResultSets with a result
             * set type of TYPE_FORWARD_ONLY
             *
             * @returns the current row number; 0 if there is no current row
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getRow(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the given row number in
             * this ResultSet object.
             *
             * If the row number is positive, the cursor moves to
             * the given row number with respect to the
             * beginning of the result set. The first row is row 1, the second
             * is row 2, and so on.
             *
             * If the given row number is negative, the cursor moves to
             * an absolute row position with respect to
             * the end of the result set. For example, calling the method
             * absolute(-1) positions the
             * cursor on the last row; calling the method absolute(-2)
             * moves the cursor to the next-to-last row, and so on.
             *
             * If the row number specified is zero, the cursor is moved to
             * before the first row.
             *
             * An attempt to position the cursor beyond the first/last row in
             * the result set leaves the cursor before the first row or after
             * the last row.
             *
             * Note: Calling absolute(1) is the same
             * as calling first(). Calling absolute(-1)
             * is the same as calling last().
             *
             * @param row - the number of the row to which the cursor should move. A value of zero indicates that the cursor will be positioned before the first row; a positive number indicates the row number counting from the beginning of the result set; a negative number indicates the row number counting from the end of the result set
             * @returns true if the cursor is moved to a position in this ResultSet object; false if the cursor is before the first row or after the last row
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            absolute(row: int): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor a relative number of rows, either positive or negative.
             * Attempting to move beyond the first/last row in the
             * result set positions the cursor before/after the
             * the first/last row. Calling relative(0) is valid, but does
             * not change the cursor position.
             *
             * Note: Calling the method relative(1)
             * is identical to calling the method next() and
             * calling the method relative(-1) is identical
             * to calling the method previous().
             *
             * @param rows - an int specifying the number of rows to move from the current row; a positive number moves the cursor forward; a negative number moves the cursor backward
             * @returns true if the cursor is on a row; false otherwise
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            relative(rows: int): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the previous row in this
             * ResultSet object.
             *
             * When a call to the previous method returns false,
             * the cursor is positioned before the first row. Any invocation of a
             * ResultSet method which requires a current row will result in a
             * SQLException being thrown.
             *
             * If an input stream is open for the current row, a call to the method
             * previous will implicitly close it. A ResultSet
             * object's warning change is cleared when a new row is read.
             *
             * @returns true if the cursor is now positioned on a valid row; false if the cursor is positioned before the first row
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            previous(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Gives a hint as to the direction in which the rows in this
             * ResultSet object will be processed.
             * The initial value is determined by the
             * Statement object
             * that produced this ResultSet object.
             * The fetch direction may be changed at any time.
             *
             * @param direction - an int specifying the suggested fetch direction; one of ResultSet.FETCH_FORWARD, ResultSet.FETCH_REVERSE, or ResultSet.FETCH_UNKNOWN
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set type is TYPE_FORWARD_ONLY and the fetch direction is not FETCH_FORWARD
             */
            setFetchDirection(direction: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the fetch direction for this
             * ResultSet object.
             *
             * @returns the current fetch direction for this ResultSet object
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getFetchDirection(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Gives the JDBC driver a hint as to the number of rows that should
             * be fetched from the database when more rows are needed for this
             * ResultSet object.
             * If the fetch size specified is zero, the JDBC driver
             * ignores the value and is free to make its own best guess as to what
             * the fetch size should be. The default value is set by the
             * Statement object
             * that created the result set. The fetch size may be changed at any time.
             *
             * @param rows - the number of rows to fetch
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the condition rows >= 0 is not satisfied
             */
            setFetchSize(rows: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the fetch size for this
             * ResultSet object.
             *
             * @returns the current fetch size for this ResultSet object
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getFetchSize(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the type of this ResultSet object.
             * The type is determined by the Statement object
             * that created the result set.
             *
             * @returns ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getType(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the concurrency mode of this ResultSet object.
             * The concurrency used is determined by the
             * Statement object that created the result set.
             *
             * @returns the concurrency type, either ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getConcurrency(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the current row has been updated. The value returned
             * depends on whether or not the result set can detect updates.
             *
             * Note: Support for the rowUpdated method is optional with a result set
             * concurrency of CONCUR_READ_ONLY
             *
             * @returns true if the current row is detected to have been visibly updated by the owner or another; false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            rowUpdated(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether the current row has had an insertion.
             * The value returned depends on whether or not this
             * ResultSet object can detect visible inserts.
             *
             * Note: Support for the rowInserted method is optional with a result set
             * concurrency of CONCUR_READ_ONLY
             *
             * @returns true if the current row is detected to have been inserted; false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            rowInserted(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether a row has been deleted. A deleted row may leave
             * a visible "hole" in a result set. This method can be used to
             * detect holes in a result set. The value returned depends on whether
             * or not this ResultSet object can detect deletions.
             *
             * Note: Support for the rowDeleted method is optional with a result set
             * concurrency of CONCUR_READ_ONLY
             *
             * @returns true if the current row is detected to have been deleted by the owner or another; false otherwise
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            rowDeleted(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a null value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow
             * or insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNull(columnIndex: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a boolean value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBoolean(columnIndex: int, x: boolean): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a byte value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateByte(columnIndex: int, x: byte): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a short value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateShort(columnIndex: int, x: short): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an int value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateInt(columnIndex: int, x: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a long value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateLong(columnIndex: int, x: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a float value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateFloat(columnIndex: int, x: float): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a double value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateDouble(columnIndex: int, x: double): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.math.BigDecimal
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a String value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateString(columnIndex: int, x: java.lang.String | string): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a byte array value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBytes(columnIndex: int, x: byte[]): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Date value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateDate(columnIndex: int, x: java.sql.Date): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Time value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateTime(columnIndex: int, x: java.sql.Time): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Timestamp
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an Object value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * If the second argument is an InputStream then the stream must contain
             * the number of bytes specified by scaleOrLength. If the second argument is a
             * Reader then the reader must contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver will generate a
             * SQLException when the statement is executed.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param scaleOrLength - for an object of java.math.BigDecimal , this is the number of digits after the decimal point. For Java Object types InputStream and Reader, this is the length of the data in the stream or reader. For all other types, this value will be ignored.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateObject(columnIndex: int, x: java.lang.Object, scaleOrLength: int): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an Object value.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateObject(columnIndex: int, x: java.lang.Object): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Inserts the contents of the insert row into this
             * ResultSet object and into the database.
             * The cursor must be on the insert row when this method is called.
             *
             * @throws SQLException - if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY, this method is called on a closed result set, if this method is called when the cursor is not on the insert row, or if not all of non-nullable columns in the insert row have been given a non-null value
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            insertRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the underlying database with the new contents of the
             * current row of this ResultSet object.
             * This method cannot be called when the cursor is on the insert row.
             *
             * @throws SQLException - if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY; this method is called on a closed result set or if this method is called when the cursor is on the insert row
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Deletes the current row from this ResultSet object
             * and from the underlying database. This method cannot be called when
             * the cursor is on the insert row.
             *
             * @throws SQLException - if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY; this method is called on a closed result set or if this method is called when the cursor is on the insert row
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            deleteRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Refreshes the current row with its most recent value in
             * the database. This method cannot be called when
             * the cursor is on the insert row.
             *
             * The refreshRow method provides a way for an
             * application to
             * explicitly tell the JDBC driver to refetch a row(s) from the
             * database. An application may want to call refreshRow when
             * caching or prefetching is being done by the JDBC driver to
             * fetch the latest value of a row from the database. The JDBC driver
             * may actually refresh multiple rows at once if the fetch size is
             * greater than one.
             *
             * All values are refetched subject to the transaction isolation
             * level and cursor sensitivity. If refreshRow is called after
             * calling an updater method, but before calling
             * the method updateRow, then the
             * updates made to the row are lost. Calling the method
             * refreshRow frequently will likely slow performance.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set; the result set type is TYPE_FORWARD_ONLY or if this method is called when the cursor is on the insert row
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method or this method is not supported for the specified result set type and result set concurrency.
             */
            refreshRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Cancels the updates made to the current row in this
             * ResultSet object.
             * This method may be called after calling an
             * updater method(s) and before calling
             * the method updateRow to roll back
             * the updates made to a row. If no updates have been made or
             * updateRow has already been called, this method has no
             * effect.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set; the result set concurrency is CONCUR_READ_ONLY or if this method is called when the cursor is on the insert row
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            cancelRowUpdates(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the insert row. The current cursor position is
             * remembered while the cursor is positioned on the insert row.
             *
             * The insert row is a special row associated with an updatable
             * result set. It is essentially a buffer where a new row may
             * be constructed by calling the updater methods prior to
             * inserting the row into the result set.
             *
             * Only the updater, getter,
             * and insertRow methods may be
             * called when the cursor is on the insert row. All of the columns in
             * a result set must be given a value each time this method is
             * called before calling insertRow.
             * An updater method must be called before a
             * getter method can be called on a column value.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            moveToInsertRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Moves the cursor to the remembered cursor position, usually the
             * current row. This method has no effect if the cursor is not on
             * the insert row.
             *
             * @throws SQLException - if a database access error occurs; this method is called on a closed result set or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            moveToCurrentRow(): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the Statement object that produced this
             * ResultSet object.
             * If the result set was generated some other way, such as by a
             * DatabaseMetaData method, this method may return
             * null.
             *
             * @returns the Statement object that produced this ResultSet object or null if the result set was produced some other way
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getStatement(): java.sql.Statement;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as an Object
             * in the Java programming language.
             * If the value is an SQL NULL,
             * the driver returns a Java null.
             * This method uses the given Map object
             * for the custom mapping of the
             * SQL structured or distinct type that is being retrieved.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param map - a java.util.Map object that contains the mapping from SQL type names to classes in the Java programming language
             * @returns an Object in the Java programming language representing the SQL value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getObject(
              columnIndex: int,
              map: java.util.Map<java.lang.String, java.lang.Class<any>>,
            ): java.lang.Object;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Ref object
             * in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Ref object representing an SQL REF value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getRef(columnIndex: int): java.sql.Ref;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Blob object
             * in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Blob object representing the SQL BLOB value in the specified column
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getBlob(columnIndex: int): java.sql.Blob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a Clob object
             * in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a Clob object representing the SQL CLOB value in the specified column
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getClob(columnIndex: int): java.sql.Clob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as an Array object
             * in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns an Array object representing the SQL ARRAY value in the specified column
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getArray(columnIndex: int): java.sql.Array;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Date object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the date if the underlying database does not store
             * timezone information.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param cal - the java.util.Calendar object to use in constructing the date
             * @returns the column value as a java.sql.Date object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getDate(columnIndex: int, cal: java.util.Calendar): java.sql.Date;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Time object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the time if the underlying database does not store
             * timezone information.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param cal - the java.util.Calendar object to use in constructing the time
             * @returns the column value as a java.sql.Time object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTime(columnIndex: int, cal: java.util.Calendar): java.sql.Time;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.sql.Timestamp object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the timestamp if the underlying database does not store
             * timezone information.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param cal - the java.util.Calendar object to use in constructing the timestamp
             * @returns the column value as a java.sql.Timestamp object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             */
            getTimestamp(columnIndex: int, cal: java.util.Calendar): java.sql.Timestamp;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a java.net.URL
             * object in the Java programming language.
             *
             * @param columnIndex - the index of the column 1 is the first, 2 is the second,...
             * @returns the column value as a java.net.URL object; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; this method is called on a closed result set or if a URL is malformed
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getURL(columnIndex: int): java.net.URL;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Ref value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateRef(columnIndex: int, x: java.sql.Ref): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Blob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(columnIndex: int, x: java.sql.Blob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Clob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(columnIndex: int, x: java.sql.Clob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.Array value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateArray(columnIndex: int, x: java.sql.Array): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row of this
             * ResultSet object as a java.sql.RowId object in the Java
             * programming language.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @returns the column value; if the value is a SQL NULL the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getRowId(columnIndex: int): java.sql.RowId;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row of this
             * ResultSet object as a java.sql.RowId object in the Java
             * programming language.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value ; if the value is a SQL NULL the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getRowId(columnLabel: java.lang.String | string): java.sql.RowId;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a RowId value. The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the updateRow or insertRow methods are called
             * to update the database.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param x - the column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateRowId(columnIndex: int, x: java.sql.RowId): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a RowId value. The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the updateRow or insertRow methods are called
             * to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateRowId(columnLabel: java.lang.String | string, x: java.sql.RowId): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the holdability of this ResultSet object
             *
             * @returns either ResultSet.HOLD_CURSORS_OVER_COMMIT or ResultSet.CLOSE_CURSORS_AT_COMMIT
             * @throws SQLException - if a database access error occurs or this method is called on a closed result set
             */
            getHoldability(): int;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves whether this ResultSet object has been closed. A ResultSet is closed if the
             * method close has been called on it, or if it is automatically closed.
             *
             * @returns true if this ResultSet object is closed; false if it is still open
             * @throws SQLException - if a database access error occurs
             */
            isClosed(): boolean;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a String value.
             * It is intended for use when updating NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param nString - the value for the column to be updated
             * @throws SQLException - if the columnIndex is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set; the result set concurrency is CONCUR_READ_ONLY or if a database access error occurs
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNString(columnIndex: int, nString: java.lang.String | string): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.NClob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param nClob - the value for the column to be updated
             * @throws SQLException - if the columnIndex is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set; if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(columnIndex: int, nClob: java.sql.NClob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.NClob value.
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param nClob - the value for the column to be updated
             * @throws SQLException - if the columnLabel is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set; if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(columnLabel: java.lang.String | string, nClob: java.sql.NClob): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a NClob object
             * in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a NClob object representing the SQL NCLOB value in the specified column
             * @throws SQLException - if the columnIndex is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set or if a database access error occurs
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNClob(columnIndex: int): java.sql.NClob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a NClob object
             * in the Java programming language.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a NClob object representing the SQL NCLOB value in the specified column
             * @throws SQLException - if the columnLabel is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set or if a database access error occurs
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNClob(columnLabel: java.lang.String | string): java.sql.NClob;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row of
             * this ResultSet as a
             * java.sql.SQLXML object in the Java programming language.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a SQLXML object that maps an SQL XML value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getSQLXML(columnIndex: int): java.sql.SQLXML;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row of
             * this ResultSet as a
             * java.sql.SQLXML object in the Java programming language.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a SQLXML object that maps an SQL XML value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getSQLXML(columnLabel: java.lang.String | string): java.sql.SQLXML;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.SQLXML value.
             * The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the updateRow or insertRow methods are called
             * to update the database.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param xmlObject - the value for the column to be updated
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; this method is called on a closed result set; the java.xml.transform.Result, Writer or OutputStream has not been closed for the SQLXML object; if there is an error processing the XML value or the result set concurrency is CONCUR_READ_ONLY. The getCause method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateSQLXML(columnIndex: int, xmlObject: java.sql.SQLXML): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a java.sql.SQLXML value.
             * The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the updateRow or insertRow methods are called
             * to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param xmlObject - the column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; this method is called on a closed result set; the java.xml.transform.Result, Writer or OutputStream has not been closed for the SQLXML object; if there is an error processing the XML value or the result set concurrency is CONCUR_READ_ONLY. The getCause method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateSQLXML(columnLabel: java.lang.String | string, xmlObject: java.sql.SQLXML): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a String in the Java programming language.
             * It is intended for use when
             * accessing NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNString(columnIndex: int): java.lang.String;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as
             * a String in the Java programming language.
             * It is intended for use when
             * accessing NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns the column value; if the value is SQL NULL, the value returned is null
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNString(columnLabel: java.lang.String | string): java.lang.String;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.io.Reader object.
             * It is intended for use when
             * accessing NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @returns a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNCharacterStream(columnIndex: int): java.io.Reader;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object as a
             * java.io.Reader object.
             * It is intended for use when
             * accessing NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @returns a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getNCharacterStream(columnLabel: java.lang.String | string): java.io.Reader;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - the java.io.Reader object containing the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNCharacterStream(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(
              columnLabel: java.lang.String | string,
              x: java.io.InputStream,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(
              columnLabel: java.lang.String | string,
              x: java.io.InputStream,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - the java.io.Reader object containing the new column value
             * @param length - the length of the stream
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given input stream, which
             * will have the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @param length - the number of bytes in the parameter data.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(columnIndex: int, inputStream: java.io.InputStream, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given input stream, which
             * will have the specified number of bytes.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @param length - the number of bytes in the parameter data.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(
              columnLabel: java.lang.String | string,
              inputStream: java.io.InputStream,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(columnIndex: int, reader: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the columnIndex is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set, if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(columnIndex: int, reader: java.io.Reader, length: long): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a LONGVARCHAR
             * parameter, it may be more practical to send it via a
             * java.io.Reader object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - An object that contains the data to set the parameter value to.
             * @param length - the number of characters in the parameter data.
             * @throws SQLException - if the columnLabel is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set; if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
              length: long,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateNCharacterStream which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNCharacterStream(columnIndex: int, x: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating NCHAR,NVARCHAR
             * and LONGNVARCHAR columns.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateNCharacterStream which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - the java.io.Reader object containing the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNCharacterStream(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateAsciiStream which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(columnIndex: int, x: java.io.InputStream): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateBinaryStream which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(columnIndex: int, x: java.io.InputStream): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateCharacterStream which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param x - the new column value
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(columnIndex: int, x: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with an ascii stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateAsciiStream which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateAsciiStream(columnLabel: java.lang.String | string, x: java.io.InputStream): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a binary stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateBinaryStream which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param x - the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBinaryStream(
              columnLabel: java.lang.String | string,
              x: java.io.InputStream,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateCharacterStream which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - the java.io.Reader object containing the new column value
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateCharacterStream(
              columnLabel: java.lang.String | string,
              reader: java.io.Reader,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given input stream. The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateBlob which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(columnIndex: int, inputStream: java.io.InputStream): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given input stream. The data will be read from the stream
             * as needed until end-of-stream is reached.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateBlob which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param inputStream - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateBlob(
              columnLabel: java.lang.String | string,
              inputStream: java.io.InputStream,
            ): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateClob which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnIndex is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(columnIndex: int, reader: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateClob which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnLabel is not valid; if a database access error occurs; the result set concurrency is CONCUR_READ_ONLY or this method is called on a closed result set
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateClob(columnLabel: java.lang.String | string, reader: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             *
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateNClob which takes a length parameter.
             *
             * @param columnIndex - the first column is 1, the second 2, ...
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnIndex is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set, if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(columnIndex: int, reader: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Updates the designated column using the given Reader
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             *
             * The updater methods are used to update column values in the
             * current row or the insert row. The updater methods do not
             * update the underlying database; instead the updateRow or
             * insertRow methods are called to update the database.
             *
             * Note: Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * updateNClob which takes a length parameter.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param reader - An object that contains the data to set the parameter value to.
             * @throws SQLException - if the columnLabel is not valid; if the driver does not support national character sets; if the driver can detect that a data conversion error could occur; this method is called on a closed result set; if a database access error occurs or the result set concurrency is CONCUR_READ_ONLY
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            updateNClob(columnLabel: java.lang.String | string, reader: java.io.Reader): void;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object and will convert from the
             * SQL type of the column to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported or null is specified for the type, a
             * SQLException is thrown.
             *
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements SQLData, or Struct.
             * Additional conversions may be supported and are vendor defined.
             *
             * @param columnIndex - the first column is 1, the second is 2, ...
             * @param type - Class representing the Java data type to convert the designated column to.
             * @returns an instance of type holding the column value
             * @throws SQLException - if conversion is not supported, type is null or another error occurs. The getCause() method of the exception may provide a more detailed exception, for example, if a conversion error occurs
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getObject<T>(columnIndex: int, type: java.lang.Class<T>): T;

            /**
             * Description copied from interface: java.sql.ResultSet
             *
             * Retrieves the value of the designated column in the current row
             * of this ResultSet object and will convert from the
             * SQL type of the column to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported or null is specified for the type, a
             * SQLException is thrown.
             *
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements SQLData, or Struct.
             * Additional conversions may be supported and are vendor defined.
             *
             * @param columnLabel - the label for the column specified with the SQL AS clause. If the SQL AS clause was not specified, then the label is the name of the column
             * @param type - Class representing the Java data type to convert the designated column to.
             * @returns an instance of type holding the column value
             * @throws SQLException - if conversion is not supported, type is null or another error occurs. The getCause() method of the exception may provide a more detailed exception, for example, if a conversion error occurs
             * @throws SQLFeatureNotSupportedException - if the JDBC driver does not support this method
             */
            getObject<T>(columnLabel: java.lang.String | string, type: java.lang.Class<T>): T;

            /**
             * Description copied from interface: java.sql.Wrapper
             *
             * Returns an object that implements the given interface to allow access to
             * non-standard methods, or standard methods not exposed by the proxy.
             *
             * If the receiver implements the interface then the result is the receiver
             * or a proxy for the receiver. If the receiver is a wrapper
             * and the wrapped object implements the interface then the result is the
             * wrapped object or a proxy for the wrapped object. Otherwise return the
             * the result of calling unwrap recursively on the wrapped object
             * or a proxy for that result. If the receiver is not a
             * wrapper and does not implement the interface, then an SQLException is thrown.
             *
             * @param iface - A Class defining an interface that the result must implement.
             * @returns an object that implements the interface. May be a proxy for the actual implementing object.
             * @throws SQLException - If no object found that implements the interface
             */
            unwrap<T>(iface: java.lang.Class<T>): T;

            /**
             * Description copied from interface: java.sql.Wrapper
             *
             * Returns true if this either implements the interface argument or is directly or indirectly a wrapper
             * for an object that does. Returns false otherwise. If this implements the interface then return true,
             * else if this is a wrapper then return the result of recursively calling isWrapperFor on the wrapped
             * object. If this does not implement the interface and is not a wrapper, return false.
             * This method should be implemented as a low-cost operation compared to unwrap so that
             * callers can use this method to avoid expensive unwrap calls that may fail. If this method
             * returns true then calling unwrap with the same argument should succeed.
             *
             * @param iface - a Class defining an interface.
             * @returns true if this implements the interface or directly or indirectly wraps an object that does.
             * @throws SQLException - if an error occurs while determining whether this is a wrapper for an object with the given interface.
             */
            isWrapperFor(iface: java.lang.Class<any>): boolean;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Sets the designated column as the match column for this RowSet
             * object. A JoinRowSet object can now add this RowSet
             * object based on the match column.
             *
             * Sub-interfaces such as the CachedRowSet&trade;
             * interface define the method CachedRowSet.setKeyColumns, which allows
             * primary key semantics to be enforced on specific columns.
             * Implementations of the setMatchColumn(int columnIdx) method
             * should ensure that the constraints on the key columns are maintained when
             * a CachedRowSet object sets a primary key column as a match column.
             *
             * @param columnIdx - an int identifying the index of the column to be set as the match column
             * @throws SQLException - if an invalid column index is set
             */
            setMatchColumn(columnIdx: int): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Sets the designated columns as the match column for this RowSet
             * object. A JoinRowSet object can now add this RowSet
             * object based on the match column.
             *
             * @param columnIdxes - an array of int identifying the indexes of the columns to be set as the match columns
             * @throws SQLException - if an invalid column index is set
             */
            setMatchColumn(columnIdxes: int[]): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Sets the designated column as the match column for this RowSet
             * object. A JoinRowSet object can now add this RowSet
             * object based on the match column.
             *
             * Subinterfaces such as the CachedRowSet interface define
             * the method CachedRowSet.setKeyColumns, which allows
             * primary key semantics to be enforced on specific columns.
             * Implementations of the setMatchColumn(String columnIdx) method
             * should ensure that the constraints on the key columns are maintained when
             * a CachedRowSet object sets a primary key column as a match column.
             *
             * @param columnName - a String object giving the name of the column to be set as the match column
             * @throws SQLException - if an invalid column name is set, the column name is a null, or the column name is an empty string
             */
            setMatchColumn(columnName: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Sets the designated columns as the match column for this RowSet
             * object. A JoinRowSet object can now add this RowSet
             * object based on the match column.
             *
             * @param columnNames - an array of String objects giving the names of the column to be set as the match columns
             * @throws SQLException - if an invalid column name is set, the column name is a null, or the column name is an empty string
             */
            setMatchColumn(columnNames: (java.lang.String | string)[]): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Retrieves the indexes of the match columns that were set for this
             * RowSet object with the method
             * setMatchColumn(int[] columnIdxes).
             *
             * @returns an int array identifying the indexes of the columns that were set as the match columns for this RowSet object
             * @throws SQLException - if no match column has been set
             */
            getMatchColumnIndexes(): int[];

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Retrieves the names of the match columns that were set for this
             * RowSet object with the method
             * setMatchColumn(String [] columnNames).
             *
             * @returns an array of String objects giving the names of the columns set as the match columns for this RowSet object
             * @throws SQLException - if no match column has been set
             */
            getMatchColumnNames(): java.lang.String[];

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Unsets the designated column as the match column for this RowSet
             * object.
             *
             * RowSet objects that implement the Joinable interface
             * must ensure that a key-like constraint continues to be enforced until the
             * method CachedRowSet.unsetKeyColumns has been called on the
             * designated column.
             *
             * @param columnIdx - an int that identifies the index of the column that is to be unset as a match column
             * @throws SQLException - if an invalid column index is designated or if the designated column was not previously set as a match column
             */
            unsetMatchColumn(columnIdx: int): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Unsets the designated columns as the match column for this RowSet
             * object.
             *
             * @param columnIdxes - an array of int that identifies the indexes of the columns that are to be unset as match columns
             * @throws SQLException - if an invalid column index is designated or if the designated column was not previously set as a match column
             */
            unsetMatchColumn(columnIdxes: int[]): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Unsets the designated column as the match column for this RowSet
             * object.
             *
             * RowSet objects that implement the Joinable interface
             * must ensure that a key-like constraint continues to be enforced until the
             * method CachedRowSet.unsetKeyColumns has been called on the
             * designated column.
             *
             * @param columnName - a String object giving the name of the column that is to be unset as a match column
             * @throws SQLException - if an invalid column name is designated or the designated column was not previously set as a match column
             */
            unsetMatchColumn(columnName: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.rowset.Joinable
             *
             * Unsets the designated columns as the match columns for this RowSet
             * object.
             *
             * @param columnName - an array of String objects giving the names of the columns that are to be unset as the match columns
             * @throws SQLException - if an invalid column name is designated or the designated column was not previously set as a match column
             */
            unsetMatchColumn(columnName: (java.lang.String | string)[]): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Populates this CachedRowSet object with data from
             * the given ResultSet object.
             *
             * This method can be used as an alternative to the execute method when an
             * application has a connection to an open ResultSet object.
             * Using the method populate can be more efficient than using
             * the version of the execute method that takes no parameters
             * because it does not open a new connection and re-execute this
             * CachedRowSet object's command. Using the populate
             * method is more a matter of convenience when compared to using the version
             * of execute that takes a ResultSet object.
             *
             * @param data - the ResultSet object containing the data to be read into this CachedRowSet object
             * @throws SQLException - if a null ResultSet object is supplied or this CachedRowSet object cannot retrieve the associated ResultSetMetaData object
             */
            populate(data: java.sql.ResultSet): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Populates this CachedRowSet object with data, using the
             * given connection to produce the result set from which the data will be read.
             * This method should close any database connections that it creates to
             * ensure that this CachedRowSet object is disconnected except when
             * it is reading data from its data source or writing data to its data source.
             *
             * The reader for this CachedRowSet object
             * will use conn to establish a connection to the data source
             * so that it can execute the rowset's command and read data from the
             * the resulting ResultSet object into this
             * CachedRowSet object. This method also closes conn
             * after it has populated this CachedRowSet object.
             *
             * If this method is called when an implementation has already been
             * populated, the contents and the metadata are (re)set. Also, if this method is
             * called before the method acceptChanges has been called
             * to commit outstanding updates, those updates are lost.
             *
             * @param conn - a standard JDBC Connection object with valid properties
             * @throws SQLException - if an invalid Connection object is supplied or an error occurs in establishing the connection to the data source
             */
            execute(conn: java.sql.Connection): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Propagates row update, insert and delete changes made to this
             * CachedRowSet object to the underlying data source.
             *
             * This method calls on this CachedRowSet object's writer
             * to do the work behind the scenes.
             * Standard CachedRowSet implementations should use the
             * SyncFactory singleton
             * to obtain a SyncProvider instance providing a
             * RowSetWriter object (writer). The writer will attempt
             * to propagate changes made in this CachedRowSet object
             * back to the data source.
             *
             * When the method acceptChanges executes successfully, in
             * addition to writing changes to the data source, it
             * makes the values in the current row be the values in the original row.
             *
             * Depending on the synchronization level of the SyncProvider
             * implementation being used, the writer will compare the original values
             * with those in the data source to check for conflicts. When there is a conflict,
             * the RIOptimisticProvider implementation, for example, throws a
             * SyncProviderException and does not write anything to the
             * data source.
             *
             * An application may choose to catch the SyncProviderException
             * object and retrieve the SyncResolver object it contains.
             * The SyncResolver object lists the conflicts row by row and
             * sets a lock on the data source to avoid further conflicts while the
             * current conflicts are being resolved.
             * Further, for each conflict, it provides methods for examining the conflict
             * and setting the value that should be persisted in the data source.
             * After all conflicts have been resolved, an application must call the
             * acceptChanges method again to write resolved values to the
             * data source. If all of the values in the data source are already the
             * values to be persisted, the method acceptChanges does nothing.
             *
             * Some provider implementations may use locks to ensure that there are no
             * conflicts. In such cases, it is guaranteed that the writer will succeed in
             * writing changes to the data source when the method acceptChanges
             * is called. This method may be called immediately after the methods
             * updateRow, insertRow, or deleteRow
             * have been called, but it is more efficient to call it only once after
             * all changes have been made so that only one connection needs to be
             * established.
             *
             * Note: The acceptChanges() method will determine if the
             * COMMIT_ON_ACCEPT_CHANGES is set to true or not. If it is set
             * to true, all updates in the synchronization are committed to the data
             * source. Otherwise, the application must explicity call the
             * commit() or rollback() methods as appropriate.
             *
             * @throws SyncProviderException - if the underlying synchronization provider's writer fails to write the updates back to the data source
             */
            acceptChanges(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Propagates all row update, insert and delete changes to the
             * data source backing this CachedRowSet object
             * using the specified Connection object to establish a
             * connection to the data source.
             *
             * The other version of the acceptChanges method is not passed
             * a connection because it uses
             * the Connection object already defined within the RowSet
             * object, which is the connection used for populating it initially.
             *
             * This form of the method acceptChanges is similar to the
             * form that takes no arguments; however, unlike the other form, this form
             * can be used only when the underlying data source is a JDBC data source.
             * The updated Connection properties must be used by the
             * SyncProvider to reset the RowSetWriter
             * configuration to ensure that the contents of the CachedRowSet
             * object are synchronized correctly.
             *
             * When the method acceptChanges executes successfully, in
             * addition to writing changes to the data source, it
             * makes the values in the current row be the values in the original row.
             *
             * Depending on the synchronization level of the SyncProvider
             * implementation being used, the writer will compare the original values
             * with those in the data source to check for conflicts. When there is a conflict,
             * the RIOptimisticProvider implementation, for example, throws a
             * SyncProviderException and does not write anything to the
             * data source.
             *
             * An application may choose to catch the SyncProviderException
             * object and retrieve the SyncResolver object it contains.
             * The SyncResolver object lists the conflicts row by row and
             * sets a lock on the data source to avoid further conflicts while the
             * current conflicts are being resolved.
             * Further, for each conflict, it provides methods for examining the conflict
             * and setting the value that should be persisted in the data source.
             * After all conflicts have been resolved, an application must call the
             * acceptChanges method again to write resolved values to the
             * data source. If all of the values in the data source are already the
             * values to be persisted, the method acceptChanges does nothing.
             *
             * Some provider implementations may use locks to ensure that there are no
             * conflicts. In such cases, it is guaranteed that the writer will succeed in
             * writing changes to the data source when the method acceptChanges
             * is called. This method may be called immediately after the methods
             * updateRow, insertRow, or deleteRow
             * have been called, but it is more efficient to call it only once after
             * all changes have been made so that only one connection needs to be
             * established.
             *
             * Note: The acceptChanges() method will determine if the
             * COMMIT_ON_ACCEPT_CHANGES is set to true or not. If it is set
             * to true, all updates in the synchronization are committed to the data
             * source. Otherwise, the application must explicity call the
             * commit or rollback methods as appropriate.
             *
             * @param con - a standard JDBC Connection object
             * @throws SyncProviderException - if the underlying synchronization provider's writer fails to write the updates back to the data source
             */
            acceptChanges(con: java.sql.Connection): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Restores this CachedRowSet object to its original
             * value, that is, its value before the last set of changes. If there
             * have been no changes to the rowset or only one set of changes,
             * the original value is the value with which this CachedRowSet object
             * was populated; otherwise, the original value is
             * the value it had immediately before its current value.
             *
             * When this method is called, a CachedRowSet implementation
             * must ensure that all updates, inserts, and deletes to the current
             * rowset instance are replaced by the previous values. In addition,
             * the cursor should be
             * reset to the first row and a rowSetChanged event
             * should be fired to notify all registered listeners.
             *
             * @throws SQLException - if an error occurs rolling back the current value of this CachedRowSet object to its previous value
             */
            restoreOriginal(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Releases the current contents of this CachedRowSet
             * object and sends a rowSetChanged event to all
             * registered listeners. Any outstanding updates are discarded and
             * the rowset contains no rows after this method is called. There
             * are no interactions with the underlying data source, and any rowset
             * content, metadata, and content updates should be non-recoverable.
             *
             * This CachedRowSet object should lock until its contents and
             * associated updates are fully cleared, thus preventing 'dirty' reads by
             * other components that hold a reference to this RowSet object.
             * In addition, the contents cannot be released
             * until all all components reading this CachedRowSet object
             * have completed their reads. This CachedRowSet object
             * should be returned to normal behavior after firing the
             * rowSetChanged event.
             *
             * The metadata, including JDBC properties and Synchronization SPI
             * properties, are maintained for future use. It is important that
             * properties such as the command property be
             * relevant to the originating data source from which this CachedRowSet
             * object was originally established.
             *
             * This method empties a rowset, as opposed to the close method,
             * which marks the entire rowset as recoverable to allow the garbage collector
             * the rowset's Java VM resources.
             *
             * @throws SQLException - if an error occurs flushing the contents of this CachedRowSet object
             */
            release(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Cancels the deletion of the current row and notifies listeners that
             * a row has changed. After this method is called, the current row is
             * no longer marked for deletion. This method can be called at any
             * time during the lifetime of the rowset.
             *
             * In addition, multiple cancellations of row deletions can be made
             * by adjusting the position of the cursor using any of the cursor
             * position control methods such as:
             *
             * CachedRowSet.absolute
             *
             * CachedRowSet.first
             *
             * CachedRowSet.last
             *
             * @throws SQLException - if (1) the current row has not been deleted or (2) the cursor is on the insert row, before the first row, or after the last row
             */
            undoDelete(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Immediately removes the current row from this CachedRowSet
             * object if the row has been inserted, and also notifies listeners that a
             * row has changed. This method can be called at any time during the
             * lifetime of a rowset and assuming the current row is within
             * the exception limitations (see below), it cancels the row insertion
             * of the current row.
             *
             * In addition, multiple cancellations of row insertions can be made
             * by adjusting the position of the cursor using any of the cursor
             * position control methods such as:
             *
             * CachedRowSet.absolute
             *
             * CachedRowSet.first
             *
             * CachedRowSet.last
             *
             * @throws SQLException - if (1) the current row has not been inserted or (2) the cursor is before the first row, after the last row, or on the insert row
             */
            undoInsert(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Immediately reverses the last update operation if the
             * row has been modified. This method can be
             * called to reverse updates on all columns until all updates in a row have
             * been rolled back to their state just prior to the last synchronization
             * (acceptChanges) or population. This method may also be called
             * while performing updates to the insert row.
             *
             * undoUpdate may be called at any time during the lifetime of a
             * rowset; however, after a synchronization has occurred, this method has no
             * effect until further modification to the rowset data has occurred.
             *
             * @throws SQLException - if the cursor is before the first row or after the last row in in this CachedRowSet object
             */
            undoUpdate(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Indicates whether the designated column in the current row of this
             * CachedRowSet object has been updated.
             *
             * @param idx - an int identifying the column to be checked for updates
             * @returns true if the designated column has been visibly updated; false otherwise
             * @throws SQLException - if the cursor is on the insert row, before the first row, or after the last row
             */
            columnUpdated(idx: int): boolean;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Converts this CachedRowSet object to a Collection
             * object that contains all of this CachedRowSet object's data.
             * Implementations have some latitude in
             * how they can represent this Collection object because of the
             * abstract nature of the Collection framework.
             * Each row must be fully represented in either a
             * general purpose Collection implementation or a specialized
             * Collection implementation, such as a TreeMap
             * object or a Vector object.
             * An SQL NULL column value must be represented as a null
             * in the Java programming language.
             *
             * The standard reference implementation for the CachedRowSet
             * interface uses a TreeMap object for the rowset, with the
             * values in each row being contained in Vector objects. It is
             * expected that most implementations will do the same.
             *
             * The TreeMap type of collection guarantees that the map will be in
             * ascending key order, sorted according to the natural order for the
             * key's class.
             * Each key references a Vector object that corresponds to one
             * row of a RowSet object. Therefore, the size of each
             * Vector object must be exactly equal to the number of
             * columns in the RowSet object.
             * The key used by the TreeMap collection is determined by the
             * implementation, which may choose to leverage a set key that is
             * available within the internal RowSet tabular structure by
             * virtue of a key already set either on the RowSet object
             * itself or on the underlying SQL data.
             *
             * @returns a Collection object that contains the values in each row in this CachedRowSet object
             * @throws SQLException - if an error occurs generating the collection
             */
            toCollection(): java.util.Collection<any>;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Converts the designated column in this CachedRowSet object
             * to a Collection object. Implementations have some latitude in
             * how they can represent this Collection object because of the
             * abstract nature of the Collection framework.
             * Each column value should be fully represented in either a
             * general purpose Collection implementation or a specialized
             * Collection implementation, such as a Vector object.
             * An SQL NULL column value must be represented as a null
             * in the Java programming language.
             *
             * The standard reference implementation uses a Vector object
             * to contain the column values, and it is expected
             * that most implementations will do the same. If a Vector object
             * is used, it size must be exactly equal to the number of rows
             * in this CachedRowSet object.
             *
             * @param column - an int indicating the column whose values are to be represented in a Collection object
             * @returns a Collection object that contains the values stored in the specified column of this CachedRowSet object
             * @throws SQLException - if an error occurs generating the collection or an invalid column id is provided
             */
            toCollection(column: int): java.util.Collection<any>;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Retrieves the SyncProvider implementation for this
             * CachedRowSet object. Internally, this method is used by a rowset
             * to trigger read or write actions between the rowset
             * and the data source. For example, a rowset may need to get a handle
             * on the the rowset reader (RowSetReader object) from the
             * SyncProvider to allow the rowset to be populated.
             *
             * RowSetReader rowsetReader = null;
             * SyncProvider provider =
             * SyncFactory.getInstance("javax.sql.rowset.provider.RIOptimisticProvider");
             * if (provider instanceof RIOptimisticProvider) {
             * rowsetReader = provider.getRowSetReader();
             * }
             *
             * Assuming rowsetReader is a private, accessible field within
             * the rowset implementation, when an application calls the execute
             * method, it in turn calls on the reader's readData method
             * to populate the RowSet object.
             *
             * rowsetReader.readData((RowSetInternal)this);
             *
             * In addition, an application can use the SyncProvider object
             * returned by this method to call methods that return information about the
             * SyncProvider object, including information about the
             * vendor, version, provider identification, synchronization grade, and locks
             * it currently has set.
             *
             * @returns the SyncProvider object that was set when the rowset was instantiated, or if none was was set, the default provider
             * @throws SQLException - if an error occurs while returning the SyncProvider object
             */
            getSyncProvider(): javax.sql.rowset.spi.SyncProvider;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the SyncProvider object for this CachedRowSet
             * object to the one specified. This method
             * allows the SyncProvider object to be reset.
             *
             * A CachedRowSet implementation should always be instantiated
             * with an available SyncProvider mechanism, but there are
             * cases where resetting the SyncProvider object is desirable
             * or necessary. For example, an application might want to use the default
             * SyncProvider object for a time and then choose to use a provider
             * that has more recently become available and better fits its needs.
             *
             * Resetting the SyncProvider object causes the
             * RowSet object to request a new SyncProvider implementation
             * from the SyncFactory. This has the effect of resetting
             * all previous connections and relationships with the originating
             * data source and can potentially drastically change the synchronization
             * behavior of a disconnected rowset.
             *
             * @param provider - a String object giving the fully qualified class name of a SyncProvider implementation
             * @throws SQLException - if an error occurs while attempting to reset the SyncProvider implementation
             */
            setSyncProvider(provider: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns the number of rows in this CachedRowSet
             * object.
             *
             * @returns number of rows in the rowset
             */
            size(): int;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the metadata for this CachedRowSet object with
             * the given RowSetMetaData object. When a
             * RowSetReader object is reading the contents of a rowset,
             * it creates a RowSetMetaData object and initializes
             * it using the methods in the RowSetMetaData implementation.
             * The reference implementation uses the RowSetMetaDataImpl
             * class. When the reader has completed reading the rowset contents,
             * this method is called internally to pass the RowSetMetaData
             * object to the rowset.
             *
             * @param md - a RowSetMetaData object containing metadata about the columns in this CachedRowSet object
             * @throws SQLException - if invalid metadata is supplied to the rowset
             */
            setMetaData(md: javax.sql.RowSetMetaData): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns a ResultSet object containing the original value of this
             * CachedRowSet object.
             *
             * The cursor for the ResultSet
             * object should be positioned before the first row.
             * In addition, the returned ResultSet object should have the following
             * properties:
             *
             * ResultSet.TYPE_SCROLL_INSENSITIVE
             *
             * ResultSet.CONCUR_UPDATABLE
             *
             * The original value for a RowSet object is the value it had before
             * the last synchronization with the underlying data source. If there have been
             * no synchronizations, the original value will be the value with which the
             * RowSet object was populated. This method is called internally
             * when an application calls the method acceptChanges and the
             * SyncProvider object has been implemented to check for conflicts.
             * If this is the case, the writer compares the original value with the value
             * currently in the data source to check for conflicts.
             *
             * @returns a ResultSet object that contains the original value for this CachedRowSet object
             * @throws SQLException - if an error occurs producing the ResultSet object
             */
            getOriginal(): java.sql.ResultSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns a ResultSet object containing the original value for the
             * current row only of this CachedRowSet object.
             *
             * The cursor for the ResultSet
             * object should be positioned before the first row.
             * In addition, the returned ResultSet object should have the following
             * properties:
             *
             * ResultSet.TYPE_SCROLL_INSENSITIVE
             *
             * ResultSet.CONCUR_UPDATABLE
             *
             * @returns the original result set of the row
             * @throws SQLException - if there is no current row
             */
            getOriginalRow(): java.sql.ResultSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the current row in this CachedRowSet object as the original
             * row.
             *
             * This method is called internally after the any modified values in the current
             * row have been synchronized with the data source. The current row must be tagged
             * as no longer inserted, deleted or updated.
             *
             * A call to setOriginalRow is irreversible.
             *
             * @throws SQLException - if there is no current row or an error is encountered resetting the contents of the original row
             */
            setOriginalRow(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns an identifier for the object (table) that was used to
             * create this CachedRowSet object. This name may be set on multiple occasions,
             * and the specification imposes no limits on how many times this
             * may occur or whether standard implementations should keep track
             * of previous table names.
             *
             * @returns a String object giving the name of the table that is the source of data for this CachedRowSet object or null if no name has been set for the table
             * @throws SQLException - if an error is encountered returning the table name
             */
            getTableName(): java.lang.String;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the identifier for the table from which this CachedRowSet
             * object was derived to the given table name. The writer uses this name to
             * determine which table to use when comparing the values in the data source with the
             * CachedRowSet object's values during a synchronization attempt.
             * The table identifier also indicates where modified values from this
             * CachedRowSet object should be written.
             *
             * The implementation of this CachedRowSet object may obtain the
             * the name internally from the RowSetMetaDataImpl object.
             *
             * @param tabName - a String object identifying the table from which this CachedRowSet object was derived; cannot be null but may be an empty string
             * @throws SQLException - if an error is encountered naming the table or tabName is null
             */
            setTableName(tabName: java.lang.String | string): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns an array containing one or more column numbers indicating the columns
             * that form a key that uniquely
             * identifies a row in this CachedRowSet object.
             *
             * @returns an array containing the column number or numbers that indicate which columns constitute a primary key for a row in this CachedRowSet object. This array should be empty if no columns are representative of a primary key.
             * @throws SQLException - if this CachedRowSet object is empty
             */
            getKeyColumns(): int[];

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets this CachedRowSet object's keyCols
             * field with the given array of column numbers, which forms a key
             * for uniquely identifying a row in this CachedRowSet object.
             *
             * If a CachedRowSet object becomes part of a JoinRowSet
             * object, the keys defined by this method and the resulting constraints are
             * maintained if the columns designated as key columns also become match
             * columns.
             *
             * @param keys - an array of int indicating the columns that form a primary key for this CachedRowSet object; every element in the array must be greater than 0 and less than or equal to the number of columns in this rowset
             * @throws SQLException - if any of the numbers in the given array are not valid for this rowset
             */
            setKeyColumns(keys: int[]): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns a new RowSet object backed by the same data as
             * that of this CachedRowSet object. In effect, both
             * CachedRowSet objects have a cursor over the same data.
             * As a result, any changes made by a duplicate are visible to the original
             * and to any other duplicates, just as a change made by the original is visible
             * to all of its duplicates. If a duplicate calls a method that changes the
             * underlying data, the method it calls notifies all registered listeners
             * just as it would when it is called by the original CachedRowSet
             * object.
             *
             * In addition, any RowSet object
             * created by this method will have the same properties as this
             * CachedRowSet object. For example, if this CachedRowSet
             * object is read-only, all of its duplicates will also be read-only. If it is
             * changed to be updatable, the duplicates also become updatable.
             *
             * NOTE: If multiple threads access RowSet objects created from
             * the createShared() method, the following behavior is specified
             * to preserve shared data integrity: reads and writes of all
             * shared RowSet objects should be made serially between each
             * object and the single underlying tabular structure.
             *
             * @returns a new shared RowSet object that has the same properties as this CachedRowSet object and that has a cursor over the same data
             * @throws SQLException - if an error occurs or cloning is not supported in the underlying platform
             */
            createShared(): javax.sql.RowSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Creates a RowSet object that is a deep copy of the data in
             * this CachedRowSet object. In contrast to
             * the RowSet object generated from a createShared
             * call, updates made to the copy of the original RowSet object
             * must not be visible to the original RowSet object. Also, any
             * event listeners that are registered with the original
             * RowSet must not have scope over the new
             * RowSet copies. In addition, any constraint restrictions
             * established must be maintained.
             *
             * @returns a new RowSet object that is a deep copy of this CachedRowSet object and is completely independent of this CachedRowSet object
             * @throws SQLException - if an error occurs in generating the copy of the of this CachedRowSet object
             */
            createCopy(): javax.sql.rowset.CachedRowSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Creates a CachedRowSet object that is an empty copy of this
             * CachedRowSet object. The copy
             * must not contain any contents but only represent the table
             * structure of the original CachedRowSet object. In addition, primary
             * or foreign key constraints set in the originating CachedRowSet object must
             * be equally enforced in the new empty CachedRowSet object.
             * In contrast to
             * the RowSet object generated from a createShared method
             * call, updates made to a copy of this CachedRowSet object with the
             * createCopySchema method must not be visible to it.
             *
             * Applications can form a WebRowSet object from the CachedRowSet
             * object returned by this method in order
             * to export the RowSet schema definition to XML for future use.
             *
             * @returns An empty copy of this CachedRowSet object
             * @throws SQLException - if an error occurs in cloning the structure of this CachedRowSet object
             */
            createCopySchema(): javax.sql.rowset.CachedRowSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Creates a CachedRowSet object that is a deep copy of
             * this CachedRowSet object's data but is independent of it.
             * In contrast to
             * the RowSet object generated from a createShared
             * method call, updates made to a copy of this CachedRowSet object
             * must not be visible to it. Also, any
             * event listeners that are registered with this
             * CachedRowSet object must not have scope over the new
             * RowSet object. In addition, any constraint restrictions
             * established for this CachedRowSet object must not be maintained
             * in the copy.
             *
             * @returns a new CachedRowSet object that is a deep copy of this CachedRowSet object and is completely independent of this CachedRowSet object
             * @throws SQLException - if an error occurs in generating the copy of the of this CachedRowSet object
             */
            createCopyNoConstraints(): javax.sql.rowset.CachedRowSet;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Retrieves the first warning reported by calls on this RowSet object.
             * Subsequent warnings on this RowSet object will be chained to the
             * RowSetWarning object that this method returns.
             *
             * The warning chain is automatically cleared each time a new row is read.
             * This method may not be called on a RowSet object that has been closed;
             * doing so will cause a SQLException to be thrown.
             *
             * @returns RowSetWarning the first RowSetWarning object reported or null if there are none
             * @throws SQLException - if this method is called on a closed RowSet
             */
            getRowSetWarnings(): javax.sql.rowset.RowSetWarning;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Retrieves a boolean indicating whether rows marked
             * for deletion appear in the set of current rows. If true is
             * returned, deleted rows are visible with the current rows. If
             * false is returned, rows are not visible with the set of
             * current rows. The default value is false.
             *
             * Standard rowset implementations may choose to restrict this behavior
             * due to security considerations or to better fit certain deployment
             * scenarios. This is left as implementation defined and does not
             * represent standard behavior.
             *
             * Note: Allowing deleted rows to remain visible complicates the behavior
             * of some standard JDBC RowSet Implementations methods.
             * However, most rowset users can simply ignore this extra detail because
             * only very specialized applications will likely want to take advantage of
             * this feature.
             *
             * @returns true if deleted rows are visible; false otherwise
             * @throws SQLException - if a rowset implementation is unable to to determine whether rows marked for deletion are visible
             */
            getShowDeleted(): boolean;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the property showDeleted to the given
             * boolean value, which determines whether
             * rows marked for deletion appear in the set of current rows.
             * If the value is set to true, deleted rows are immediately
             * visible with the set of current rows. If the value is set to
             * false, the deleted rows are set as invisible with the
             * current set of rows.
             *
             * Standard rowset implementations may choose to restrict this behavior
             * due to security considerations or to better fit certain deployment
             * scenarios. This is left as implementations defined and does not
             * represent standard behavior.
             *
             * @param b - true if deleted rows should be shown; false otherwise
             * @throws SQLException - if a rowset implementation is unable to to reset whether deleted rows should be visible
             */
            setShowDeleted(b: boolean): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Each CachedRowSet object's SyncProvider contains
             * a Connection object from the ResultSet or JDBC
             * properties passed to it's constructors. This method wraps the
             * Connection commit method to allow flexible
             * auto commit or non auto commit transactional control support.
             *
             * Makes all changes that are performed by the acceptChanges()
             * method since the previous commit/rollback permanent. This method should
             * be used only when auto-commit mode has been disabled.
             *
             * @throws SQLException - if a database access error occurs or this Connection object within this CachedRowSet is in auto-commit mode
             */
            commit(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Each CachedRowSet object's SyncProvider contains
             * a Connection object from the original ResultSet
             * or JDBC properties passed to it.
             *
             * Undoes all changes made in the current transaction. This method
             * should be used only when auto-commit mode has been disabled.
             *
             * @throws SQLException - if a database access error occurs or this Connection object within this CachedRowSet is in auto-commit mode.
             */
            rollback(): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Each CachedRowSet object's SyncProvider contains
             * a Connection object from the original ResultSet
             * or JDBC properties passed to it.
             *
             * Undoes all changes made in the current transaction back to the last
             * Savepoint transaction marker. This method should be used only
             * when auto-commit mode has been disabled.
             *
             * @param s - A Savepoint transaction marker
             * @throws SQLException - if a database access error occurs or this Connection object within this CachedRowSet is in auto-commit mode.
             */
            rollback(s: java.sql.Savepoint): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Notifies registered listeners that a RowSet object in the given RowSetEvent
             * object has populated a number of additional rows. The numRows parameter
             * ensures that this event will only be fired every numRow.
             *
             * The source of the event can be retrieved with the method event.getSource.
             *
             * @param event - a RowSetEvent object that contains the RowSet object that is the source of the events
             * @param numRows - when populating, the number of rows interval on which the CachedRowSet populated should fire; the default value is zero; cannot be less than fetchSize or zero
             * @throws SQLException - numRows < 0 or numRows < getFetchSize()
             */
            rowSetPopulated(event: javax.sql.RowSetEvent, numRows: int): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Populates this CachedRowSet object with data from
             * the given ResultSet object. While related to the populate(ResultSet)
             * method, an additional parameter is provided to allow starting position within
             * the ResultSet from where to populate the CachedRowSet
             * instance.
             *
             * This method can be used as an alternative to the execute method when an
             * application has a connection to an open ResultSet object.
             * Using the method populate can be more efficient than using
             * the version of the execute method that takes no parameters
             * because it does not open a new connection and re-execute this
             * CachedRowSet object's command. Using the populate
             * method is more a matter of convenience when compared to using the version
             * of execute that takes a ResultSet object.
             *
             * @param rs - the ResultSet object containing the data to be read into this CachedRowSet object
             * @param startRow - the position in the ResultSet from where to start populating the records in this CachedRowSet
             * @throws SQLException - if a null ResultSet object is supplied or this CachedRowSet object cannot retrieve the associated ResultSetMetaData object
             */
            populate(rs: java.sql.ResultSet, startRow: int): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Sets the CachedRowSet object's page-size. A CachedRowSet
             * may be configured to populate itself in page-size sized batches of rows. When
             * either populate() or execute() are called, the
             * CachedRowSet fetches an additional page according to the
             * original SQL query used to populate the RowSet.
             *
             * @param size - the page-size of the CachedRowSet
             * @throws SQLException - if an error occurs setting the CachedRowSet page size or if the page size is less than 0.
             */
            setPageSize(size: int): void;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Returns the page-size for the CachedRowSet object
             *
             * @returns an int page size
             */
            getPageSize(): int;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Increments the current page of the CachedRowSet. This causes
             * the CachedRowSet implementation to fetch the next page-size
             * rows and populate the RowSet, if remaining rows remain within scope of the
             * original SQL query used to populated the RowSet.
             *
             * @returns true if more pages exist; false if this is the last page
             * @throws SQLException - if an error occurs fetching the next page, or if this method is called prematurely before populate or execute.
             */
            nextPage(): boolean;

            /**
             * Description copied from interface: javax.sql.rowset.CachedRowSet
             *
             * Decrements the current page of the CachedRowSet. This causes
             * the CachedRowSet implementation to fetch the previous page-size
             * rows and populate the RowSet. The amount of rows returned in the previous
             * page must always remain within scope of the original SQL query used to
             * populate the RowSet.
             *
             * @returns true if the previous page is successfully retrieved; false if this is the first page.
             * @throws SQLException - if an error occurs fetching the previous page, or if this method is called prematurely before populate or execute.
             */
            previousPage(): boolean;
          }

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
              origNumber: java.lang.String | string,
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
            constructor(rawData: java.lang.String | string);

            /**
             * Instantiates a RawMessage object to dispatch to a channel.
             *
             * @param rawData - The textual data to dispatch to the channel.
             * @param destinationMetaDataIds - A collection of integers (metadata IDs) representing which destinations to dispatch the message to. JavaScript arrays can be used.
             */
            constructor(
              rawData: java.lang.String | string,
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
              rawData: java.lang.String | string,
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
            static getSentResponse(
              message: java.lang.String | string,
            ): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a erred message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getErrorResponse(
              message: java.lang.String | string,
            ): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a filtered message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getFilteredResponse(
              message: java.lang.String | string,
            ): com.mirth.connect.userutil.Response;

            /**
             * Returns a Response representing a queued message.
             *
             * @param message - The response data to store.
             * @returns The instantiated Response object.
             */
            static getQueuedResponse(
              message: java.lang.String | string,
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
              dataType: java.lang.String | string,
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
              dataType: java.lang.String | string,
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
              dataType: java.lang.String | string,
            ): java.util.Map<java.lang.String, java.lang.Object>;

            /**
             * Returns a map of default properties used to customize how deserialization from XML to the
             * data type is performed.
             *
             * @param dataType - The plugin point (e.g. "HL7V2") of the data type to get default properties for.
             * @returns The map of default deserialization properties.
             */
            static getDefaultDeserializationProperties(
              dataType: java.lang.String | string,
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
              segmentDelim: java.lang.String | string,
              elementDelim: java.lang.String | string,
              subelementDelim: java.lang.String | string,
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
              segmentDelim: java.lang.String | string,
              groupDelim: java.lang.String | string,
              fieldDelim: java.lang.String | string,
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
              segmentDelim: java.lang.String | string,
              groupDelim: java.lang.String | string,
              fieldDelim: java.lang.String | string,
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
              host: java.lang.String | string,
              port: java.lang.String | string,
              socketTimeout: int,
              useAuthentication: boolean,
              secure: java.lang.String | string,
              username: java.lang.String | string,
              password: java.lang.String | string,
              from: java.lang.String | string,
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
              host: java.lang.String | string,
              port: java.lang.String | string,
              useAuthentication: boolean,
              secure: java.lang.String | string,
              username: java.lang.String | string,
              password: java.lang.String | string,
              from: java.lang.String | string,
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
            setHost(host: java.lang.String | string): void;

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
            setPort(port: java.lang.String | string): void;

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
            setSecure(secure: java.lang.String | string): void;

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
            setUsername(username: java.lang.String | string): void;

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
            setPassword(password: java.lang.String | string): void;

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
            setFrom(from: java.lang.String | string): void;

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
              toList: java.lang.String | string,
              ccList: java.lang.String | string,
              from: java.lang.String | string,
              subject: java.lang.String | string,
              body: java.lang.String | string,
              charset: java.lang.String | string,
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
              toList: java.lang.String | string,
              ccList: java.lang.String | string,
              from: java.lang.String | string,
              subject: java.lang.String | string,
              body: java.lang.String | string,
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
              toList: java.lang.String | string,
              ccList: java.lang.String | string,
              subject: java.lang.String | string,
              body: java.lang.String | string,
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
            put(key: java.lang.String | string, value: java.lang.Object): java.lang.Object;

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
              channelName: java.lang.String | string,
              message: java.lang.String | string,
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
              channelName: java.lang.String | string,
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
              channelId: java.lang.String | string,
              message: java.lang.String | string,
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
              channelId: java.lang.String | string,
              rawMessage: com.mirth.connect.server.userutil.RawMessage,
            ): com.mirth.connect.userutil.Response;
          }
        }
      }
    }
  }
}
