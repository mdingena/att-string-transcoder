import ieee754 from 'ieee754';

/**
 * Convert IEEE754 integer to JavaScript number.
 * Thanks to https://github.com/edencomputing/attprefabulator/
 */
export const unpackFloat = (uInt: number) => {
  const buffer = Buffer.from(new Uint8Array(4));

  buffer.writeUInt32LE(uInt);

  return ieee754.read(buffer, 0, true, 23, 4);
};
