import type { BinaryString } from './types/BinaryString.js';
import { BinaryReader } from './BinaryReader.js';
import { createBinaryWriter } from '../src_v2/utils/createBinaryWriter.js';

describe('new BinaryReader()', () => {
  describe('when given non-binary data', () => {
    it('throws an error', () => {
      const data = 'topkek';
      const expectedToThrow = () => new BinaryReader(data);
      const expectedError = new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('new BinaryReader().readBits()', () => {
  it('returns the amount of given bits', () => {
    const data = '0001001101111111' as BinaryString;
    const reader = new BinaryReader(data);
    const read = reader.readBits(8);

    expect(read).toStrictEqual('00010011');
  });

  it('continues to read on subsequent reads', () => {
    const data = '0001001101111111' as BinaryString;
    const reader = new BinaryReader(data);
    const read1 = reader.readBits(8);
    const read2 = reader.readBits(4);
    const read3 = reader.readBits(4);

    expect(read1).toStrictEqual('00010011');
    expect(read2).toStrictEqual('0111');
    expect(read3).toStrictEqual('1111');
  });

  describe('when reading more bits than are stored in the binary string data', () => {
    it('throws an error', () => {
      const data = '0001001101111111' as BinaryString;
      const reader = new BinaryReader(data);
      const expectedToThrow = () => reader.readBits(data.length + 1);
      const expectedError = new Error(
        `Cannot read ${data.length + 1} bits from binary at index 0. Binary is only ${data.length} bits.`
      );

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('new BinaryReader().readBoolean()', () => {
  it('returns a Boolean', () => {
    const data = '10' as BinaryString;
    const reader = new BinaryReader(data);

    expect(reader.readBoolean()).toStrictEqual(true);
    expect(reader.readBoolean()).toStrictEqual(false);
  });
});

describe('new BinaryReader().readChar()', () => {
  it('returns a single character string', () => {
    const data = '01000001011000100110001101000100' as BinaryString; // "AbcD"
    const reader = new BinaryReader(data);

    expect(reader.readChar()).toStrictEqual('A');
    expect(reader.readChar()).toStrictEqual('b');
    expect(reader.readChar()).toStrictEqual('c');
    expect(reader.readChar()).toStrictEqual('D');
  });
});

describe('new BinaryReader().readFloat()', () => {
  it('returns a floating point number', () => {
    const expectedNumber = 1337.42069;
    const data = '01000100101001110010110101110110' as BinaryString; // ~1337.42069
    const reader = new BinaryReader(data);

    expect(reader.readFloat()).toBeCloseTo(expectedNumber, 4);
  });
});

describe('new BinaryReader().readSignedInteger()', () => {
  it('returns a signed integer', () => {
    const expectedNumber = -694201337;
    const data = '01010110100111110101010000000111' as BinaryString; // -694201337
    const reader = new BinaryReader(data);

    expect(reader.readSignedInteger()).toStrictEqual(expectedNumber);
  });
});

describe('new BinaryReader().readString()', () => {
  it('returns a string', () => {
    const expectedString = 'Hello, world!';
    const data =
      '000000000000110101001000011001010010110001101111011011000110110001110010011011110111011100100000011011000110010000100001' as BinaryString;
    const reader = new BinaryReader(data);

    expect(reader.readString()).toStrictEqual(expectedString);
  });

  describe('when the string has length of zero', () => {
    it('returns an empty string', () => {
      const expectedString = '';
      const data = '0000000000000000' as BinaryString; // length bits that are read before interpreting string data
      const reader = new BinaryReader(data);

      expect(reader.readString()).toStrictEqual(expectedString);
    });
  });

  describe('when the binary string data is not aligned', () => {
    it('aligns the bits and returns a string', () => {
      const expectedString = 'Hello, world!';
      const data =
        '11100000000000011010000001001000011011110110110001101100011001010110111101110111001000000010110000100001011001000110110001110010' as BinaryString;
      const reader = new BinaryReader(data);

      expect(reader.readBits(3)).toStrictEqual('111');
      expect(reader.readString()).toStrictEqual(expectedString);
    });
  });
});

describe('new BinaryReader().readUnsignedInteger()', () => {
  it('returns an unsigned integer', () => {
    const expectedNumber = 133742069;
    const data = '00000111111110001011110111110101' as BinaryString;
    const reader = new BinaryReader(data);

    expect(reader.readUnsignedInteger()).toStrictEqual(expectedNumber);
  });
});

describe('new BinaryReader().readUnsignedLong()', () => {
  it('returns an unsigned integer', () => {
    const expectedNumber = 133742069;
    const data = '0000011111111000101111011111010100000000000000000000000000000000' as BinaryString;
    const reader = new BinaryReader(data);

    expect(reader.readUnsignedLong()).toStrictEqual(expectedNumber);
  });
});

describe('new BinaryReader().readUnsignedShort()', () => {
  it('returns an unsigned integer', () => {
    const expectedNumber = 1337;
    const data = '0000010100111001' as BinaryString;
    const reader = new BinaryReader(data);

    expect(reader.readUnsignedShort()).toStrictEqual(expectedNumber);
  });
});
