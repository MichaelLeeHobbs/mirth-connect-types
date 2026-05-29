// com.mirth.connect.model.* — internal Mirth model types that the User API
// references but Javadoc does not publish a page for. Modeled minimally from
// their documented behavior so the generated User API can reference them
// instead of falling back to `any`.

declare namespace com {
  namespace mirth {
    namespace connect {
      namespace model {
        namespace converters {
          /**
           * A serializer that converts a specific data type (HL7 v2.x, X12, NCPDP,
           * DICOM, etc.) to and from Mirth's internal XML representation.
           *
           * Returned by {@link com.mirth.connect.server.userutil.SerializerFactory}.
           * Mirth's Javadoc does not publish a page for this interface, so only the
           * two methods channel scripts actually call are modeled here.
           */
          interface IMessageSerializer {
            /**
             * Serializes a message of this serializer's data type into XML.
             *
             * @param source - The inbound message, in its native data type encoding.
             * @returns The serialized XML representation of the message.
             */
            toXML(source: java.lang.String): java.lang.String;

            /**
             * Deserializes an XML message back into this serializer's data type.
             *
             * @param source - The XML representation of the message.
             * @returns The message in its native data type encoding.
             */
            fromXML(source: java.lang.String): java.lang.String;
          }
        }
      }
    }
  }
}
