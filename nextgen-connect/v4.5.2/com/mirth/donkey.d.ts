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
              function valueOf(name: java.lang.String): DeployedState;

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
              constructor(message: java.lang.String);
              constructor(cause: java.lang.Throwable);
              constructor(message: java.lang.String, cause: java.lang.Throwable);
            }

            /** Represents a connector message in the Donkey message model. */
            class ConnectorMessage extends java.lang.Object {
              // Internal Donkey message model - typically accessed through ImmutableConnectorMessage
            }

            /** Represents a message in the Donkey message model. */
            class Message extends java.lang.Object {
              // Internal Donkey message model - typically accessed through ImmutableMessage
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
          namespace controllers {
            /** Exception thrown when an unsupported data type is encountered. */
            class UnsupportedDataTypeException extends java.lang.Exception {
              constructor();
              constructor(message: java.lang.String);
              constructor(cause: java.lang.Throwable);
              constructor(message: java.lang.String, cause: java.lang.Throwable);
            }
          }
        }
      }
    }
  }
}
