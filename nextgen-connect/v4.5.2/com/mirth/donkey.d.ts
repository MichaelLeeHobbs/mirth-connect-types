// com.mirth.connect.donkey.* — Donkey message model and server controller types.

declare namespace com {
  namespace mirth {
    namespace connect {
      namespace donkey {
        namespace model {
          namespace channel {
            /**
             * Denotes the deployed state of a channel or connector.
             * States: UNDEPLOYED, DEPLOYING, UNDEPLOYING, STARTING, STARTED, PAUSING, PAUSED, STOPPING, STOPPED, SYNCING, UNKNOWN
             */
            enum DeployedState {
              /** The channel/connector is not deployed. */
              UNDEPLOYED,
              /** The channel/connector is being deployed. */
              DEPLOYING,
              /** The channel/connector is being undeployed. */
              UNDEPLOYING,
              /** The channel/connector is starting. */
              STARTING,
              /** The channel/connector is deployed and started. */
              STARTED,
              /** The channel/connector is pausing. */
              PAUSING,
              /** The channel/connector is deployed but paused. */
              PAUSED,
              /** The channel/connector is stopping. */
              STOPPING,
              /** The channel/connector is deployed but stopped. */
              STOPPED,
              /** The channel/connector is syncing. */
              SYNCING,
              /** The channel/connector state is unknown. */
              UNKNOWN,
            }

            namespace DeployedState {
              /**
               * Returns an array containing the constants of this enum type, in the order they are declared.
               * @returns An array containing the constants of this enum type, in the order they are declared.
               */
              function values(): DeployedState[];

              /**
               * Returns the enum constant of this type with the specified name.
               * The string must match exactly an identifier used to declare an enum constant in this type.
               * @param name - The name of the enum constant to be returned.
               * @returns The enum constant with the specified name.
               * @throws IllegalArgumentException - If this enum type has no constant with the specified name.
               * @throws NullPointerException - If the argument is null.
               */
              function valueOf(name: JString): DeployedState;

              /**
               * Returns the name of this enum constant, as contained in the declaration.
               * @returns The name of this enum constant.
               */
              function toString(): string;
            }
          }

          namespace message {
            /** Exception thrown when message serialization fails. */
            class MessageSerializerException extends java.lang.Exception {
              constructor();
              constructor(message: JString);
              constructor(cause: java.lang.Throwable);
              constructor(message: JString, cause: java.lang.Throwable);
            }

            /** Represents a connector message in the Donkey message model. */
            class ConnectorMessage extends java.lang.Object {
              // Internal Donkey message model; scripts usually see ImmutableConnectorMessage.
              // Getters only, from the 4.5.2 donkey jar. Donkey types not declared here are `any`.
              getChannelId(): java.lang.String;
              getChannelName(): java.lang.String;
              getConnectorName(): java.lang.String;
              getMessageId(): long;
              getMetaDataId(): int;
              getServerId(): java.lang.String;
              getStatus(): any;
              getReceivedDate(): java.util.Calendar;
              getSendDate(): java.util.Calendar;
              getResponseDate(): java.util.Calendar;
              getSendAttempts(): int;
              getErrorCode(): int;
              getChainId(): int;
              getOrderId(): int;
              getDispatcherId(): long;
              getQueueBucket(): java.lang.Integer;
              isAttemptedFirst(): boolean;
              getMetaDataMap(): java.util.Map<JString, any>;
              getSourceMap(): java.util.Map<JString, any>;
              getChannelMap(): java.util.Map<JString, any>;
              getConnectorMap(): java.util.Map<JString, any>;
              getResponseMap(): java.util.Map<JString, any>;
              getRaw(): MessageContent;
              getProcessedRaw(): MessageContent;
              getTransformed(): MessageContent;
              getEncoded(): MessageContent;
              getSent(): MessageContent;
              getResponse(): MessageContent;
              getResponseTransformed(): MessageContent;
              getProcessedResponse(): MessageContent;
              /** @param contentType - A donkey `ContentType` value, e.g. `ContentType.RAW`. */
              getMessageContent(contentType: JObject): MessageContent;
              containsError(contentType: JObject): boolean;
              getProcessingError(): java.lang.String;
              getPostProcessorError(): java.lang.String;
              getResponseError(): java.lang.String;
            }

            /** Represents a message in the Donkey message model. */
            class Message extends java.lang.Object {
              // Internal Donkey message model; scripts usually see ImmutableMessage.
              // Getters only, from the 4.5.2 donkey jar.
              getMessageId(): java.lang.Long;
              getChannelId(): java.lang.String;
              getChannelName(): java.lang.String;
              getServerId(): java.lang.String;
              getReceivedDate(): java.util.Calendar;
              isProcessed(): boolean;
              getOriginalId(): java.lang.Long;
              getImportId(): java.lang.Long;
              getImportChannelId(): java.lang.String;
              /**
               * Connector messages by metadata id (0 is the source). A plain Java map: look up with
               * `java.lang.Integer.valueOf(n)`, because a JS number key misses.
               */
              getConnectorMessages(): java.util.Map<java.lang.Integer, ConnectorMessage>;
              getMergedConnectorMessage(): ConnectorMessage;
              getAttachments(): java.util.List<com.mirth.connect.donkey.model.message.attachment.Attachment>;
            }

            /** Represents message content in the Donkey message model. */
            class MessageContent extends java.lang.Object {
              // Internal Donkey message model - typically accessed through ImmutableMessageContent
            }

            /**
             * Internal Donkey response model.
             *
             * Distinct from the public `com.mirth.connect.userutil.Response`, which
             * wraps this object. Channel scripts work with the userutil Response;
             * this type only appears in an internal `Response(response)` constructor
             * overload and is not meant to be constructed directly.
             */
            class Response extends java.lang.Object {
              // Internal Donkey message model - typically accessed through com.mirth.connect.userutil.Response
            }

            namespace attachment {
              /** Represents an attachment in the Donkey message model. */
              class Attachment extends java.lang.Object {
                // Internal Donkey message model - typically accessed through ImmutableAttachment
              }
            }
          }
        }
        namespace server {
          // Donkey engine internals (not the User API): untyped values, like the ones in internal.d.ts.
          const Donkey: any;
          const channel: any;
          const data: any;
          const event: any;
          const message: any;
          const queue: any;

          namespace controllers {
            /** Exception thrown when an unsupported data type is encountered. */
            class UnsupportedDataTypeException extends java.lang.Exception {
              constructor();
              constructor(message: JString);
              constructor(cause: java.lang.Throwable);
              constructor(message: JString, cause: java.lang.Throwable);
            }
          }
        }
      }
    }
  }
}
