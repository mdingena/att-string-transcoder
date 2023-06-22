import { BinaryWriter } from './BinaryWriter.js';

let writer: BinaryWriter;

beforeEach(() => {
  writer = new BinaryWriter();
});

describe('BinaryWriter.flush()', () => {
  it('returns the accumulated data inside BinaryWriter', () => {
    const flush1 = writer.flush();
    writer.writeBits('0001');
    const flush2 = writer.flush();
    writer.writeBits('01');
    writer.writeBits('01');
    const flush3 = writer.flush();

    expect(flush1).toStrictEqual('');
    expect(flush2).toStrictEqual('0001');
    expect(flush3).toStrictEqual('0101');
  });
});

describe('BinaryWriter.writeBits()', () => {
  it('stores the bits verbatim as a binary string', () => {
    const bits = '0001001101111111';
    const expectedBinary = bits;
    writer.writeBits(bits);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });

  describe('when given non-binary data', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new BinaryWriter().writeBits('topkek');
      const expectedError = new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('BinaryWriter.writeBoolean()', () => {
  it('stores the boolean as a binary string', () => {
    const boolean = true;
    const expectedBinary = '1';
    writer.writeBoolean(boolean);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeChar()', () => {
  it('stores the character as a binary string', () => {
    const char = 'A';
    const expectedBinary = '01000001';
    writer.writeChar(char);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeFloat()', () => {
  it('stores the floating point number as a binary string', () => {
    const float = 1337.42069;
    const expectedBinary = '01000100101001110010110101110110';
    writer.writeFloat(float);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeSignedInteger()', () => {
  it('stores the signed integer as a binary string', () => {
    const signedInteger = -694201337;
    const expectedBinary = '01010110100111110101010000000111';
    writer.writeSignedInteger(signedInteger);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeString()', () => {
  it('stores the string as a binary string', () => {
    const string = 'Hello, world!';
    const expectedBinary =
      '000000000000110101001000011001010010110001101111011011000110110001110010011011110111011100100000011011000110010000100001';
    writer.writeString(string);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });

  describe('when the string has length of zero', () => {
    it('stores an empty string', () => {
      const string = '';
      const expectedBinary = '0000000000000000';
      writer.writeString(string);

      expect(writer.flush()).toStrictEqual(expectedBinary);
    });
  });

  describe('when the binary string data is not aligned', () => {
    it('aligns the bits and stores a string', () => {
      const precedingData = '111';
      writer.writeBits(precedingData);

      const string = 'Hello, world!';
      const expectedBinary =
        '11100000000000011010000001001000011011110110110001101100011001010110111101110111001000000010110000100001011001000110110001110010';
      writer.writeString(string);

      expect(writer.flush()).toStrictEqual(expectedBinary);
    });
  });
});

describe('BinaryWriter.writeUnsignedInteger()', () => {
  it('stores the floating point number as a binary string', () => {
    const unsignedInteger = 133742069;
    const expectedBinary = '00000111111110001011110111110101';
    writer.writeUnsignedInteger(unsignedInteger);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeUnsignedLong()', () => {
  it('stores the floating point number as a binary string', () => {
    const unsignedLong = 133742069;
    const expectedBinary = '0000011111111000101111011111010100000000000000000000000000000000';
    writer.writeUnsignedLong(unsignedLong);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});

describe('BinaryWriter.writeUnsignedShort()', () => {
  it('stores the floating point number as a binary string', () => {
    const unsignedShort = 1337;
    const expectedBinary = '0000010100111001';
    writer.writeUnsignedShort(unsignedShort);

    expect(writer.flush()).toStrictEqual(expectedBinary);
  });
});
