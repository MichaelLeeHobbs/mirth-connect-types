/**
 * Compile-only assertions against generated User API signatures. A type
 * regression fails `tsc` (run via `pnpm run test:types`). These exercise the
 * ambient `com.mirth.connect.*` namespaces the way a Mirth script's globals
 * would reference them.
 *
 * Java API parameters are typed as Java wrapper types (e.g. `java.lang.String`,
 * `java.lang.Object`), so inputs are supplied via `declare const` rather than
 * JS literals — Rhino performs the JS<->Java conversion at runtime.
 */

declare const jstr: java.lang.String;
declare const jobj: java.lang.Object;
declare const jlist: java.util.List<java.lang.Object>;

// --- ChannelUtil ----------------------------------------------------------
const cName: java.lang.String = com.mirth.connect.server.userutil.ChannelUtil.getChannelName(jstr);
void cName;

const cNames: java.util.List<java.lang.String> =
  com.mirth.connect.server.userutil.ChannelUtil.getChannelNames();
void cNames;

// Channel state returns the (aliased) DeployedState enum.
const state: com.mirth.connect.server.userutil.DeployedState =
  com.mirth.connect.server.userutil.ChannelUtil.getChannelState(jstr);
void state;

// --- DateUtil -------------------------------------------------------------
const parsed: java.util.Date = com.mirth.connect.server.userutil.DateUtil.getDate(jstr, jstr);
void parsed;

const convertedDate: java.lang.String = com.mirth.connect.server.userutil.DateUtil.convertDate(
  jstr,
  jstr,
  jstr,
);
void convertedDate;

// --- AttachmentUtil.reAttachMessage --------------------------------------
declare const cMessage: com.mirth.connect.userutil.ImmutableConnectorMessage;
const reattached: java.lang.String =
  com.mirth.connect.server.userutil.AttachmentUtil.reAttachMessage(cMessage);
void reattached;

const reattachedBytes: byte[] = com.mirth.connect.server.userutil.AttachmentUtil.reAttachMessage(
  jstr,
  cMessage,
  jstr,
  false,
);
void reattachedBytes;

// --- Lists / Maps builders ------------------------------------------------
const listBuilder: com.mirth.connect.userutil.ListBuilder =
  com.mirth.connect.userutil.Lists.list(jobj).append(jobj);
void listBuilder;

const fromList: com.mirth.connect.userutil.ListBuilder =
  com.mirth.connect.userutil.Lists.list(jlist);
void fromList;

const mapBuilder: com.mirth.connect.userutil.MapBuilder = com.mirth.connect.userutil.Maps.map(
  jobj,
  jobj,
).add(jobj, jobj);
void mapBuilder;

// --- SerializerFactory ----------------------------------------------------
// getSerializer now resolves to the declared IMessageSerializer (was `any`),
// so toXML/fromXML are typed and return java.lang.String.
const serializer: com.mirth.connect.model.converters.IMessageSerializer =
  com.mirth.connect.server.userutil.SerializerFactory.getSerializer(jstr);
const serializedXml: java.lang.String = serializer.toXML(jstr);
void serializedXml;
const deserialized: java.lang.String = serializer.fromXML(jstr);
void deserialized;

// --- VMRouter -------------------------------------------------------------
// `router` is provided as a Mirth script global.
const routed: com.mirth.connect.userutil.Response = router.routeMessage(jstr, jstr);
void routed;

// --- Enums ----------------------------------------------------------------
const status: com.mirth.connect.userutil.Status = com.mirth.connect.userutil.Status.SENT;
void status;
const allStatuses: com.mirth.connect.userutil.Status[] = com.mirth.connect.userutil.Status.values();
void allStatuses;

const auth: com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult =
  com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult.Success();
void auth;

// --- Global aliases for the User API classes (injected by simple name) -------
// Static utility call with a JS string LITERAL (param widened to accept it).
const gName: java.lang.String = ChannelUtil.getChannelName('some-channel-id');
void gName;

// channelId is a JS string global; a static method must also accept it.
const gName2: java.lang.String = ChannelUtil.getChannelName(channelId);
void gName2;

// DateUtil static call with a JS string literal pattern.
const gNow: java.lang.String = DateUtil.getCurrentDate('yyyyMMddHHmmss');
void gNow;

// Status enum constant available as a bare global (Mirth injects them).
const gStatus: com.mirth.connect.userutil.Status = SENT;
void gStatus;
responseStatus = ERROR;

// Status accessed via the global typeof-alias.
const gStatusMember: com.mirth.connect.userutil.Status = Status.QUEUED;
void gStatusMember;

// Construct via the global alias with a JS string literal.
const gRaw: com.mirth.connect.server.userutil.RawMessage = new RawMessage('HL7|data');
void gRaw;

// DatabaseConnectionFactory is injected as an INSTANCE: createDatabaseConnection
// is an instance method (not static) and accepts JS string literals.
const gConn: com.mirth.connect.server.userutil.DatabaseConnection =
  DatabaseConnectionFactory.createDatabaseConnection('driver', 'url', 'user', 'pass');
void gConn;

// router is an INSTANCE of VMRouter; routeMessage takes a JS string literal.
const gRouted: com.mirth.connect.userutil.Response = router.routeMessage('Some Channel', 'payload');
void gRouted;
