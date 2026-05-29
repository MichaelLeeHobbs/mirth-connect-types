/**
 * Hand-curated documentation overlays for the generated User API `.d.ts`.
 *
 * The three userutil files are AUTO-GENERATED from Javadoc, so any hand-edits to
 * them would be clobbered by `pnpm run generate`. To keep hand-curated examples
 * and extra prose durable, they live here and are merged into the emitted JSDoc
 * by `emit-dts.ts` at generation time.
 *
 * Keys are fully-qualified:
 *   - `com.mirth.connect.server.userutil.ChannelUtil`            — a class/enum/interface
 *   - `com.mirth.connect.server.userutil.ChannelUtil#getChannelName` — a method
 *
 * A method overlay is attached to the FIRST emitted overload of that name (so
 * an overloaded method's example appears once, not on every signature). The
 * lookup and merge are deterministic, so generation stays byte-idempotent.
 *
 * Examples target the Rhino engine Mirth scripts run on: ES5-style `var`/`for`,
 * no Promises or arrow-only features, mirroring the idioms in
 * `../mikes-mirth-code/src/codeTempaltes`.
 */

export interface Overlay {
  /** A short, realistic Mirth channel-script snippet (rendered as an `@example`). */
  example?: string;
  /** Extra prose appended to the generated description. */
  note?: string;
}

/**
 * Fully-qualified `ClassName` and `ClassName#methodName` -> overlay. See module
 * doc for key format. Keep snippets short, correct, and Rhino-safe.
 */
export const OVERLAYS: Record<string, Overlay> = {
  // ---------------------------------------------------------------------------
  // ChannelUtil — channel introspection and lifecycle control.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.ChannelUtil#getChannelName': {
    example: [
      '// Resolve the human-readable name for a source channel id.',
      'var name = ChannelUtil.getChannelName(channelId);',
      "logger.info('processing for channel: ' + name);",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.ChannelUtil#startChannel': {
    note: 'Returns a Future; call `.get()` to block until the channel finishes starting.',
    example: [
      '// Start a downstream channel and wait for it to come up.',
      "ChannelUtil.startChannel('Inbound ADT').get();",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.ChannelUtil#stopChannel': {
    example: [
      '// Stop a channel by name or id; block on the returned Future.',
      "ChannelUtil.stopChannel('Inbound ADT').get();",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.ChannelUtil#getChannelState': {
    example: [
      '// Only route when the target channel is actually started.',
      "var state = ChannelUtil.getChannelState('Inbound ADT');",
      'if (state == DeployedState.STARTED) {',
      "  router.routeMessage('Inbound ADT', connectorMessage.getEncodedData());",
      '}',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // AttachmentUtil — attachment extraction / re-insertion.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.AttachmentUtil#reAttachMessage': {
    note: 'Use inside a destination or response transformer to expand `${ATTACH:id}` tokens back into the real attachment content before sending.',
    example: [
      '// Re-insert attachment content for the current message, as a String.',
      'var fullMessage = AttachmentUtil.reAttachMessage(connectorMessage);',
      '// Or operate on arbitrary raw text + a charset, returning bytes:',
      'var bytes = AttachmentUtil.reAttachMessage(',
      '  connectorMessage.getRawData(),',
      '  connectorMessage,',
      "  'UTF-8',",
      '  false',
      ');',
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.AttachmentUtil#addAttachment': {
    note: 'The two-list overloads build an attachment list to return from a script; the `connectorMessage` overloads persist the attachment to the database immediately.',
    example: [
      '// Collect attachments to return from an Attachment (batch) script.',
      'var attachments = new java.util.ArrayList();',
      "AttachmentUtil.addAttachment(attachments, pdfBytes, 'application/pdf');",
      'return attachments;',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // DateUtil — SimpleDateFormat-based parse/format helpers.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.DateUtil#getCurrentDate': {
    example: [
      '// Stamp the current time using a SimpleDateFormat pattern.',
      "var now = DateUtil.getCurrentDate('yyyyMMddHHmmss');",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.DateUtil#getDate': {
    example: [
      '// Parse an HL7 timestamp into a java.util.Date.',
      "var d = DateUtil.getDate('yyyyMMddHHmmss', msg['MSH']['MSH.7']['MSH.7.1'].toString());",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.DateUtil#formatDate': {
    example: [
      '// Format a java.util.Date back into a string.',
      "var d = DateUtil.getDate('yyyyMMddHHmmss', raw);",
      'var iso = DateUtil.formatDate("yyyy-MM-dd\'T\'HH:mm:ss", d);',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // FileUtil — filesystem read/write.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.FileUtil#read': {
    example: [
      '// Read an entire file as a String.',
      "var contents = FileUtil.read('/data/in/patient.txt');",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.FileUtil#write': {
    note: 'Pass `append = true` to append, or `false` to overwrite. Accepts either a String or a byte array as the payload.',
    example: [
      '// Append a line to a log file.',
      "FileUtil.write('/data/out/audit.log', true, message + '\\n');",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.FileUtil#readBytes': {
    example: [
      '// Read a binary file (e.g. a PDF) as a byte array, then Base64-encode it.',
      "var bytes = FileUtil.readBytes('/data/in/report.pdf');",
      'var b64 = FileUtil.encode(bytes);',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // HTTPUtil — HTTP header / body helpers.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.HTTPUtil#parseHeaders': {
    example: [
      '// Turn a raw header block into a Map for lookup.',
      "var headers = HTTPUtil.parseHeaders(sourceMap.get('headers'));",
      "var contentType = headers.get('Content-Type');",
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.HTTPUtil#httpBodyToXml': {
    example: [
      '// Serialize an HTTP (possibly multipart) request body to XML.',
      "var xml = HTTPUtil.httpBodyToXml(connectorMessage.getRawData(), sourceMap.get('contentType'));",
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // VMRouter — dispatch a message to another channel.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.VMRouter#routeMessage': {
    note: 'A `router` instance is already available in channel scripts; you rarely need to `new VMRouter()` yourself.',
    example: [
      '// Dispatch the current encoded message to another deployed channel by name.',
      "var response = router.routeMessage('Outbound ORU', connectorMessage.getEncodedData());",
      'if (response.getStatus() == Status.ERROR) {',
      "  logger.error('downstream channel rejected: ' + response.getStatusMessage());",
      '}',
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.VMRouter#routeMessageByChannelId': {
    example: [
      '// Dispatch to a channel by its UUID instead of its name.',
      'var response = router.routeMessageByChannelId(targetChannelId, msg.toString());',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // DatabaseConnectionFactory / DatabaseConnection — JDBC access.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.DatabaseConnectionFactory#createDatabaseConnection': {
    note: 'A `DatabaseConnectionFactory` is exposed globally in channel scripts. Always close the connection in a `finally` block.',
    example: [
      '// Open a DatabaseConnection, query, then close it.',
      'var dbConn = DatabaseConnectionFactory.createDatabaseConnection(',
      "  'org.postgresql.Driver',",
      "  'jdbc:postgresql://db:5432/mirthdb',",
      "  'mirthdb',",
      "  'mirthdb'",
      ');',
      'try {',
      "  var result = dbConn.executeCachedQuery('SELECT id, name FROM patient WHERE mrn = ?', [mrn]);",
      '  while (result.next()) {',
      "    logger.info(result.getString('name'));",
      '  }',
      '} finally {',
      '  dbConn.close();',
      '}',
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.DatabaseConnection#executeUpdate': {
    example: [
      '// Parameterized INSERT/UPDATE/DELETE; returns the affected row count.',
      'var rows = dbConn.executeUpdate(',
      "  'INSERT INTO audit(channel, mrn) VALUES (?, ?)',",
      '  [channelName, mrn]',
      ');',
    ].join('\n'),
  },
  'com.mirth.connect.server.userutil.DatabaseConnection#executeCachedQuery': {
    note: 'Returns a disconnected `CachedRowSet`, so the result survives after the connection is closed.',
    example: [
      '// Parameterized SELECT; iterate the returned CachedRowSet.',
      "var rs = dbConn.executeCachedQuery('SELECT name FROM patient WHERE mrn = ?', [mrn]);",
      'while (rs.next()) {',
      "  logger.info(rs.getString('name'));",
      '}',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // SerializerFactory — data-type <-> XML serializers.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.server.userutil.SerializerFactory#getSerializer': {
    example: [
      '// Convert an HL7 v2.x message to XML and back.',
      "var serializer = SerializerFactory.getSerializer('HL7V2');",
      'var xml = serializer.toXML(connectorMessage.getRawData());',
      'var er7 = serializer.fromXML(xml);',
    ].join('\n'),
  },

  // ---------------------------------------------------------------------------
  // Lists / Maps — fluent builders for java.util collections.
  // ---------------------------------------------------------------------------
  'com.mirth.connect.userutil.Lists#list': {
    note: 'Fluent builder over a `java.util.ArrayList`. Chain `.append(...)`; the builder itself is a `List`.',
    example: [
      '// Build a java.util.List fluently.',
      "var ids = Lists.list('A').append('B').append('C');",
    ].join('\n'),
  },
  'com.mirth.connect.userutil.Maps#map': {
    note: 'Fluent builder over a `java.util.LinkedHashMap`. Chain `.add(key, value)`; the builder itself is a `Map`.',
    example: [
      '// Build a java.util.Map fluently and stash it on the channel map.',
      "var meta = Maps.map('mrn', mrn).add('channel', channelName);",
      "channelMap.put('meta', meta);",
    ].join('\n'),
  },
};
