import ieee754 from 'ieee754';
import bitwise from 'bitwise';
import { Bit } from 'bitwise/types';

export const packFloat = (number: number) => {
  const buffer = Buffer.from(new Uint8Array(4));
  let bits: number = 0;

  ieee754.write(buffer, number, 0, true, 23, 4);

  const integer = buffer.readUInt32LE(0);

  for (var i = 0; i < 32; i++) {
    const bit: Bit = bitwise.integer.getBit(integer, 31 - i);

    bits = bitwise.integer.setBit(bits, 31 - i, bit);
  }

  return bits >>> 0;
};
