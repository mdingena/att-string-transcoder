import type { BinaryString } from './types/BinaryString.js';
import { BinaryData, type BinaryDataOptions, type UnpackFloatOptions } from './BinaryData.js';

const BUFFER_OFFSET = 0;
const BYTE_LENGTH = 4;
const IS_LITTLE_ENDIAN = true;
const MANTISSA_LENGTH = 23;
const SIGNED_INTEGER_OFFSET = 2147483648;

describe('new BinaryData()', () => {
  describe('when given non-binary data', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('topkek');
      const expectedError = new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('BinaryData.fromBoolean()', () => {
  it('creates a BinaryData instance from a boolean', () => {
    const expectedBoolean = true;
    const expectedBinary = '1' as BinaryString; // => expectedBoolean as a binary boolean
    const data = BinaryData.fromBoolean(expectedBoolean);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toBoolean()).toStrictEqual(expectedBoolean);
  });
});

describe('BinaryData.fromFloat()', () => {
  it('creates a BinaryData instance from a floating point number', () => {
    const expectedNumber = 1337.42069;
    const expectedBinary = '01000100101001110010110101110110' as BinaryString; // => expectedNumber as a binary floating point number
    const data = BinaryData.fromFloat(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toFloat()).toBeCloseTo(expectedNumber, 4);
  });
});

describe('BinaryData.fromNumber()', () => {
  it('creates a BinaryData instance from a number', () => {
    const expectedNumber = 1337;
    const expectedBinary = '10100111001' as BinaryString; // => expectedNumber as a binary number
    const data = BinaryData.fromNumber(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toNumber()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.fromSignedInteger()', () => {
  it('creates a BinaryData instance from a positive signed integer', () => {
    const expectedNumber = 133742069;
    const expectedBinary = '10000111111110001011110111110101' as BinaryString; // => expectedNumber as a binary signed integer
    const data = BinaryData.fromSignedInteger(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
  });

  it('creates a BinaryData instance from a negative signed integer', () => {
    const expectedNumber = -694201337;
    const expectedBinary = '01010110100111110101010000000111' as BinaryString; // => expectedNumber as a binary signed integer
    const data = BinaryData.fromSignedInteger(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
  });

  describe('when an options argument is passed', () => {
    const options: BinaryDataOptions = {};

    beforeEach(() => {
      options.signedIntegerOffset = SIGNED_INTEGER_OFFSET;
    });

    it('creates a BinaryData instance from a positive signed integer', () => {
      const expectedNumber = 133742069;
      const expectedBinary = '10000111111110001011110111110101' as BinaryString; // => expectedNumber as a binary signed integer
      const data = BinaryData.fromSignedInteger(expectedNumber, options);

      expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
      expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
    });

    it('creates a BinaryData instance from a negative signed integer', () => {
      const expectedNumber = -694201337;
      const expectedBinary = '01010110100111110101010000000111' as BinaryString; // => expectedNumber as a binary signed integer
      const data = BinaryData.fromSignedInteger(expectedNumber, options);

      expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
      expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
    });
  });
});

describe('BinaryData.fromUnsignedInteger()', () => {
  it('creates a BinaryData instance from an unsigned integer', () => {
    const expectedNumber = 133742069;
    const expectedBinary = '00000111111110001011110111110101' as BinaryString; // => expectedNumber as a binary unsigned integer
    const data = BinaryData.fromUnsignedInteger(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toUnsignedInteger()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.fromUnsignedIntegerArray()', () => {
  it('creates a BinaryData instance from an array of unsigned integers', () => {
    const expectedNumbers = [1337, 420, 69];
    const expectedBinary =
      '000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101' as BinaryString; // => expectedNumbers as binary data
    const data = BinaryData.fromUnsignedIntegerArray(expectedNumbers);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toUnsignedIntegerArray()).toStrictEqual<number[]>(expectedNumbers);
  });
});

describe('BinaryData.fromUnsignedLong()', () => {
  it('creates a BinaryData instance from an unsigned long integer', () => {
    const expectedNumber = 133742069;
    const expectedBinary = '0000011111111000101111011111010100000000000000000000000000000000' as BinaryString; // => expectedNumber as a binary unsigned long integer
    const data = BinaryData.fromUnsignedLong(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toUnsignedLong()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.fromUnsignedShort()', () => {
  it('creates a BinaryData instance from an unsigned short integer', () => {
    const expectedNumber = 1337;
    const expectedBinary = '0000010100111001' as BinaryString; // => expectedNumber as a binary unsigned short integer
    const data = BinaryData.fromUnsignedShort(expectedNumber);

    expect(data.toBinaryString()).toStrictEqual<BinaryString>(expectedBinary);
    expect(data.toUnsignedShort()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.isBinary()', () => {
  it('asserts that a string with valid binary is a BinaryString', () => {
    const data = '01110110100110101';
    const result = BinaryData.isBinary(data);

    expect(result).toBe(true);
    expect(data).toStrictEqual<BinaryString>('01110110100110101' as BinaryString);
  });

  it('asserts that a string with invalid binary is not a BinaryString', () => {
    const data = '011abc10110100110101';
    const result = BinaryData.isBinary(data);

    expect(result).toBe(false);
    expect(data).toStrictEqual<string>('011abc10110100110101');
  });
});

describe('BinaryData.packFloat()', () => {
  it('converts a JavaScript number into an IEEE754 integer', () => {
    const packedFloat = BinaryData.packFloat(1337.42069);

    expect(packedFloat).toEqual(1151806838);
  });
});

describe('BinaryData.toBoolean()', () => {
  it('expresses binary as a boolean', () => {
    const expectedBoolean = true;
    const binary = '1'; // => expectedBoolean as a binary boolean
    const data = new BinaryData(binary);

    expect(data.toBoolean()).toStrictEqual(expectedBoolean);
  });

  describe('when binary data is not exactly one bit', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('01').toBoolean();
      const expectedError = new Error('Boolean binary string must be 1 bit.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('BinaryData.toChar()', () => {
  it('expresses binary as a char', () => {
    const expectedChar = 'A';
    const binary = '01000001'; // => expectedChar as a binary boolean
    const data = new BinaryData(binary);

    expect(data.toChar()).toStrictEqual(expectedChar);
  });

  describe('when binary data is not exactly eight bits', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('01').toChar();
      const expectedError = new Error('Char binary string must be 8 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('BinaryData.toFloat()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toFloat();
      const expectedError = new Error('Floating point number binary string must be 32 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as a number', () => {
    const expectedNumber = 1337.42069;
    const binary = '01000100101001110010110101110110'; // => expectedNumber as a binary number
    const data = new BinaryData(binary);

    expect(data.toFloat()).toBeCloseTo(expectedNumber, 4);
  });
});

describe('BinaryData.toNumber()', () => {
  it('expresses binary as a number', () => {
    const expectedNumber = 1337;
    const binary = '10100111001'; // => expectedNumber as a binary number
    const data = new BinaryData(binary);

    expect(data.toNumber()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.toSignedInteger()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toSignedInteger();
      const expectedError = new Error('Signed integer binary string must be 32 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as a positive signed integer', () => {
    const expectedNumber = 133742069;
    const binary = '10000111111110001011110111110101'; // => expectedNumber as a binary signed integer
    const data = new BinaryData(binary);

    expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
  });

  it('expresses binary as a negative signed integer', () => {
    const expectedNumber = -694201337;
    const binary = '01010110100111110101010000000111'; // => expectedNumber as a binary signed integer
    const data = new BinaryData(binary);

    expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
  });

  describe('when the constructor options are configured', () => {
    const options: BinaryDataOptions = {};

    beforeEach(() => {
      options.signedIntegerOffset = SIGNED_INTEGER_OFFSET;
    });

    it('expresses binary as a positive signed integer', () => {
      const expectedNumber = 133742069;
      const binary = '10000111111110001011110111110101'; // => expectedNumber as a binary signed integer
      const data = new BinaryData(binary, options);

      expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
    });

    it('expresses binary as a negative signed integer', () => {
      const expectedNumber = -694201337;
      const binary = '01010110100111110101010000000111'; // => expectedNumber as a binary signed integer
      const data = new BinaryData(binary, options);

      expect(data.toSignedInteger()).toStrictEqual<number>(expectedNumber);
    });
  });
});

describe('BinaryData.toUnsignedInteger()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toUnsignedInteger();
      const expectedError = new Error('Unsigned integer binary string must be 32 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as an unsigned integer', () => {
    const expectedNumber = 133742069;
    const binary = '00000111111110001011110111110101'; // => expectedNumber as an unsigned integer
    const data = new BinaryData(binary);

    expect(data.toUnsignedInteger()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.toUnsignedIntegerArray()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toUnsignedIntegerArray();
      const expectedError = new Error('Bit count must be divisible by 32.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the binary string is empty', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('').toUnsignedIntegerArray();
      const expectedError = new Error('Bit count must be divisible by 32.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as an unsigned integer', () => {
    const expectedNumbers = [1337, 420, 69];
    const binary = '000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101'; // => expectedNumbers as binary data
    const data = new BinaryData(binary);

    expect(data.toUnsignedIntegerArray()).toStrictEqual<number[]>(expectedNumbers);
  });
});

describe('BinaryData.toUnsignedLong()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toUnsignedLong();
      const expectedError = new Error('Unsigned long integer binary string must be 64 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as an unsigned long integer', () => {
    const expectedNumber = 133742069;
    const binary = '0000011111111000101111011111010100000000000000000000000000000000'; // => expectedNumber as an unsigned long integer
    const data = new BinaryData(binary);

    expect(data.toUnsignedLong()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.toUnsignedShort()', () => {
  describe('when the binary string is of incorrect length', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryData('0').toUnsignedShort();
      const expectedError = new Error('Unsigned short integer binary string must be 16 bits.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('expresses binary as an unsigned short integer', () => {
    const expectedNumber = 1337;
    const binary = '0000010100111001'; // => expectedNumber as an unsigned short integer
    const data = new BinaryData(binary);

    expect(data.toUnsignedShort()).toStrictEqual<number>(expectedNumber);
  });
});

describe('BinaryData.unpackFloat()', () => {
  it('converts an IEEE754 integer into a JavaScript number', () => {
    const unpackedFloat = BinaryData.unpackFloat(1151806838);

    expect(unpackedFloat).toBeCloseTo(1337.42069, 4);
  });

  describe('when an options argument is passed', () => {
    const options: UnpackFloatOptions = {};

    beforeEach(() => {
      options.bufferOffset = BUFFER_OFFSET;
      options.byteLength = BYTE_LENGTH;
      options.isLittleEndian = IS_LITTLE_ENDIAN;
      options.mantissaLength = MANTISSA_LENGTH;
    });

    it('converts an IEEE754 integer into a JavaScript number', () => {
      const unpackedFloat = BinaryData.unpackFloat(1151806838, options);

      expect(unpackedFloat).toBeCloseTo(1337.42069, 4);
    });
  });
});
