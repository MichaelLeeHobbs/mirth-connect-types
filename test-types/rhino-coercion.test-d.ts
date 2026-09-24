/**
 * Rhino converts JS arguments to Java parameter types, so idiomatic channel code
 * passes JS values straight into Java APIs. Each call below is taken from real
 * channel code that runs on Mirth 4.5.2 and was rejected by the 0.1.x types.
 */

// Script maps: JS string keys and values, loosely typed reads.
globalMap.put('ChannelUtilsIndex', {});
channelMap.put('customerTime', '2026-09-24');
responseMap.put('sender', JSON.stringify({ ok: true }));
globalMap.get('dbCache').close();

// java.lang.String / CharSequence parameters take JS strings.
const bytes = new java.lang.String('secret').getBytes('UTF-8');
const roundTrip = new java.lang.String(bytes, 'UTF-8');
SerializerFactory.getSerializer('HL7V2').toXML('MSH|^~\\&|');
createSegmentAfter('OBX', new XML('<ZZZ/>'));
// ...and E4X XML, which Rhino converts with toString().
SerializerFactory.getSerializer('HL7V2').fromXML(new XML('<HL7Message/>'));

// java.lang.Object parameters take any JS value.
destinationSet.removeAllExcept('Dest B');
destinationSet.removeAllExcept(2);

// java.util.Collection / List parameters take JS arrays.
destinationSet.remove(['Dest A']);
destinationSet.removeAllExcept(['Dest B', 3]);

// Boxed numeric parameters take JS numbers.
ChannelUtil.startConnector('channel-id', 1);
AttachmentUtil.getMessageAttachmentIds('channel-id', 123);

// Java array parameters take JS arrays of the coerced element type.
const fromCodes = new java.lang.String([104, 105]);

// Return types stay the exact Java type: wrap with String() to get a JS string.
// @ts-expect-error java.lang.String is not a JS string
const notJs: string = XmlUtil.toJson('<a/>');
const json: unknown = JSON.parse(String(XmlUtil.toJson('<a/>')));

// `console` does not exist in Mirth's Rhino scope.
// @ts-expect-error no console global
console.log('x');

void roundTrip;
void fromCodes;
void notJs;
void json;
