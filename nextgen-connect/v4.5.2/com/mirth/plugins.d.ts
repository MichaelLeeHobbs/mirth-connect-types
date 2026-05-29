// com.mirth.connect.plugins.* — HTTP authentication User API types.
//
// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;
// re-run `pnpm run generate` to regenerate.

declare namespace com {
  namespace mirth {
    namespace connect {
      namespace plugins {
        namespace httpauth {
          namespace userutil {
            /**
             * This class represents the result of an HTTP authentication attempt, used to accept or reject
             * requests coming into HTTP-based source connectors.
             */
            class AuthenticationResult extends java.lang.Object {
              /**
               * Instantiates a new AuthenticationResult object.
               *
               * @param status - The accept/reject status to use.
               */
              constructor(status: com.mirth.connect.plugins.httpauth.userutil.AuthStatus);

              /**
               * Returns the accept/reject status of the authentication attempt.
               *
               * @returns The accept/reject status of the authentication attempt.
               */
              getStatus(): com.mirth.connect.plugins.httpauth.userutil.AuthStatus;

              /**
               * Sets the accept/reject status of the authentication attempt.
               *
               * @param status - The accept/reject status to use.
               */
              setStatus(status: com.mirth.connect.plugins.httpauth.userutil.AuthStatus): void;

              /**
               * Returns the username that the request has been authenticated with.
               *
               * @returns The username that the request has been authenticated with.
               */
              getUsername(): java.lang.String;

              /**
               * Sets the username that the request has been authenticated with.
               *
               * @param username - The username that the request has been authenticated with.
               */
              setUsername(username: java.lang.String): void;

              /**
               * Returns the realm that the request has been authenticated with.
               *
               * @returns The realm that the request has been authenticated with.
               */
              getRealm(): java.lang.String;

              /**
               * Sets the realm that the request has been authenticated with.
               *
               * @param realm - The realm that the request has been authenticated with.
               */
              setRealm(realm: java.lang.String): void;

              /**
               * Returns the map of HTTP headers to be sent along with the authentication response.
               *
               * @returns The map of HTTP headers to be sent along with the authentication response.
               */
              getResponseHeaders(): java.util.Map<
                java.lang.String,
                java.util.List<java.lang.String>
              >;

              /**
               * Sets the map of HTTP headers to be sent along with the authentication response.
               *
               * @param responseHeaders - The map of HTTP headers to be sent along with the authentication response.
               */
              setResponseHeaders(
                responseHeaders: java.util.Map<java.lang.String, java.util.List<java.lang.String>>,
              ): void;

              /**
               * Adds a new response header to be sent along with the authentication response.
               *
               * @param key - The name of the header.
               * @param value - The value of the header.
               */
              addResponseHeader(key: java.lang.String, value: java.lang.String): void;

              /**
               * Convenience method to create a new AuthenticationResult with the CHALLENGED status.
               *
               * @param authenticateHeader - The value to include in the WWW-Authenticate response header.
               * @returns The created AuthenticationResult object.
               */
              static Challenged(
                authenticateHeader: java.lang.String,
              ): com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult;

              /**
               * Convenience method to create a new AuthenticationResult with the SUCCESS status.
               *
               * @returns The created AuthenticationResult object.
               */
              static Success(): com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult;

              /**
               * Convenience method to create a new AuthenticationResult with the SUCCESS status.
               *
               * @param username - The username that the request has been authenticated with.
               * @param realm - The realm that the request has been authenticated with.
               * @returns The created AuthenticationResult object.
               */
              static Success(
                username: java.lang.String,
                realm: java.lang.String,
              ): com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult;

              /**
               * Convenience method to create a new AuthenticationResult with the FAILURE status.
               *
               * @returns The created AuthenticationResult object.
               */
              static Failure(): com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult;
            }

            /**
             * Denotes the result of an HTTP authentication attempt. Available statuses:
             *
             * CHALLENGED, SUCCESS, FAILURE
             */
            enum AuthStatus {
              /**
               * Indicates that the request should be rejected and an authentication challenge has been sent.
               */
              CHALLENGED,
              /**
               * Indicates that the request should be accepted.
               */
              SUCCESS,
              /**
               * Indicates that the request should be rejected without an authentication challenge.
               */
              FAILURE,
            }

            namespace AuthStatus {
              /**
               * Returns an array containing the constants of this enum type, in
               * the order they are declared. This method may be used to iterate
               * over the constants as follows:
               *
               * for (AuthStatus c : AuthStatus.values())
               * System.out.println(c);
               *
               * @returns an array containing the constants of this enum type, in the order they are declared
               */
              function values(): AuthStatus[];

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
              function valueOf(name: java.lang.String): AuthStatus;
            }
          }
        }
      }
    }
  }
}
