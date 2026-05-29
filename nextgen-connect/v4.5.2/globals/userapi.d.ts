// Global aliases for the Mirth User API classes injected by simple name.
//
// Mirth runs channel scripts in a Rhino scope where the server.userutil and
// userutil classes (ChannelUtil, AttachmentUtil, RawMessage, Status, …) are
// available unqualified. These ambient aliases mirror that so scripts can use
// them without the com.mirth.connect.* prefix.
//
// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;
// re-run `pnpm run generate` to regenerate.

declare var ACKGenerator: typeof com.mirth.connect.server.userutil.ACKGenerator;
declare var AlertSender: typeof com.mirth.connect.server.userutil.AlertSender;
declare var Attachment: typeof com.mirth.connect.server.userutil.Attachment;
declare var AttachmentEntry: typeof com.mirth.connect.userutil.AttachmentEntry;
declare var AttachmentUtil: typeof com.mirth.connect.server.userutil.AttachmentUtil;
declare var AuthenticationResult: typeof com.mirth.connect.plugins.httpauth.userutil.AuthenticationResult;
declare var AuthStatus: typeof com.mirth.connect.plugins.httpauth.userutil.AuthStatus;
declare var ChannelMap: typeof com.mirth.connect.server.userutil.ChannelMap;
declare var ChannelUtil: typeof com.mirth.connect.server.userutil.ChannelUtil;
declare var ContentType: typeof com.mirth.connect.userutil.ContentType;
declare var ContextFactory: typeof com.mirth.connect.server.userutil.ContextFactory;
declare var DatabaseConnection: typeof com.mirth.connect.server.userutil.DatabaseConnection;
declare var DateUtil: typeof com.mirth.connect.server.userutil.DateUtil;
declare var DeployedState: typeof com.mirth.connect.server.userutil.DeployedState;
declare var DestinationSet: typeof com.mirth.connect.server.userutil.DestinationSet;
declare var DICOMUtil: typeof com.mirth.connect.server.userutil.DICOMUtil;
declare var EncryptedData: typeof com.mirth.connect.server.userutil.EncryptedData;
declare var EncryptionUtil: typeof com.mirth.connect.server.userutil.EncryptionUtil;
declare var FileUtil: typeof com.mirth.connect.server.userutil.FileUtil;
declare var Future: typeof com.mirth.connect.server.userutil.Future;
declare var HashUtil: typeof com.mirth.connect.server.userutil.HashUtil;
declare var HTTPUtil: typeof com.mirth.connect.server.userutil.HTTPUtil;
declare var ImmutableAttachment: typeof com.mirth.connect.userutil.ImmutableAttachment;
declare var ImmutableConnectorMessage: typeof com.mirth.connect.userutil.ImmutableConnectorMessage;
declare var ImmutableMessage: typeof com.mirth.connect.userutil.ImmutableMessage;
declare var ImmutableMessageContent: typeof com.mirth.connect.userutil.ImmutableMessageContent;
declare var ImmutableResponse: typeof com.mirth.connect.server.userutil.ImmutableResponse;
declare var JsonUtil: typeof com.mirth.connect.userutil.JsonUtil;
declare var ListBuilder: typeof com.mirth.connect.userutil.ListBuilder;
declare var Lists: typeof com.mirth.connect.userutil.Lists;
declare var MapBuilder: typeof com.mirth.connect.userutil.MapBuilder;
declare var Maps: typeof com.mirth.connect.userutil.Maps;
declare var MessageHeaders: typeof com.mirth.connect.userutil.MessageHeaders;
declare var MessageParameters: typeof com.mirth.connect.userutil.MessageParameters;
declare var MirthCachedRowSet: typeof com.mirth.connect.server.userutil.MirthCachedRowSet;
declare var NCPDPUtil: typeof com.mirth.connect.server.userutil.NCPDPUtil;
declare var RawMessage: typeof com.mirth.connect.server.userutil.RawMessage;
declare var ResponseFactory: typeof com.mirth.connect.server.userutil.ResponseFactory;
declare var ResponseMap: typeof com.mirth.connect.userutil.ResponseMap;
declare var SerializerFactory: typeof com.mirth.connect.server.userutil.SerializerFactory;
declare var SMTPConnection: typeof com.mirth.connect.server.userutil.SMTPConnection;
declare var SMTPConnectionFactory: typeof com.mirth.connect.server.userutil.SMTPConnectionFactory;
declare var SourceMap: typeof com.mirth.connect.server.userutil.SourceMap;
declare var Status: typeof com.mirth.connect.userutil.Status;
declare var UUIDGenerator: typeof com.mirth.connect.server.userutil.UUIDGenerator;
declare var VMRouter: typeof com.mirth.connect.server.userutil.VMRouter;
declare var XmlUtil: typeof com.mirth.connect.userutil.XmlUtil;

// Status enum constants — Mirth injects these so e.g. `responseStatus = ERROR` works.
declare const RECEIVED: com.mirth.connect.userutil.Status;
declare const FILTERED: com.mirth.connect.userutil.Status;
declare const TRANSFORMED: com.mirth.connect.userutil.Status;
declare const SENT: com.mirth.connect.userutil.Status;
declare const QUEUED: com.mirth.connect.userutil.Status;
declare const ERROR: com.mirth.connect.userutil.Status;
declare const PENDING: com.mirth.connect.userutil.Status;
