import type { BinaryString } from './types/BinaryString.js';
import type { SaveString } from './types/SaveString.js';
import type { Bit } from 'bitwise/types.js';

import { integer as bitwiseInteger } from 'bitwise';
import { read as ieee754Read, write as ieee754Write } from 'ieee754';

export type BinaryDataOptions = {
  signedIntegerOffset?: number;
};

export type UnpackFloatOptions = {
  bufferOffset?: number;
  byteLength?: number;
  isLittleEndian?: boolean;
  mantissaLength?: number;
};

const BUFFER_OFFSET = 0;
const BYTE_LENGTH = 4;
const IS_LITTLE_ENDIAN = true;
const MANTISSA_LENGTH = 23;
const SIGNED_INTEGER_OFFSET = 2147483648;

/**
 * Deals with data types as understood by _A Township Tale_ game servers.
 *
 * @see [Class: `BinaryData`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryData.md)
 *
 * @example
 * import { BinaryData } from 'att-string-transcoder';
 *
 * const data = new BinaryData('11110111001100010000');
 * // or
 * const data = BinaryData.fromBoolean(true);
 * // or
 * const data = BinaryData.fromChar('x');
 * // or
 * const data = BinaryData.fromFloat(0.69);
 * // or
 * const data = BinaryData.fromNumber(1337);
 * // or
 * const data = BinaryData.fromSignedInteger(-420);
 * // or
 * const data = BinaryData.fromUnsignedInteger(69420);
 * // or
 * const data = BinaryData.fromUnsignedIntegerArray([69420, 133769]);
 * // or
 * const data = BinaryData.fromUnsignedLong(133742069);
 * // or
 * const data = BinaryData.fromUnsignedShort(420);
 */
export class BinaryData {
  private readonly binary: BinaryString;
  private readonly signedIntegerOffset: number;

  /**
   * Creates a data structure from the given binary `data` and lets you express it as other data
   * types. You may optionally provide additional options in the second argument.
   *
   * @see [Class: `BinaryData`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryData.md)
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('11110111001100010000', {
   *   signedIntegerOffset: 2147483648
   * });
   */
  constructor(binary: string, options?: BinaryDataOptions) {
    if (!BinaryData.isBinaryString(binary)) {
      throw new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');
    }

    this.binary = binary;
    this.signedIntegerOffset = options?.signedIntegerOffset ?? SIGNED_INTEGER_OFFSET;
  }

  /**
   * Creates a BinaryData instance from the given boolean.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromBoolean(true);
   */
  static fromBoolean(boolean: boolean, options?: BinaryDataOptions): BinaryData {
    const data = Number(boolean).toString();

    return new BinaryData(data, options);
  }

  /**
   * Creates a BinaryData instance from the given character.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromChar('x');
   */
  static fromChar(char: string, options?: BinaryDataOptions): BinaryData {
    const charCode = char.charCodeAt(0);
    const data = BinaryData.fromNumber(charCode).toBinaryString().padStart(8, '0');

    return new BinaryData(data, options);
  }

  /**
   * Creates a BinaryData instance from the given floating point number.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromFloat(0.69);
   */
  static fromFloat(float: number, options?: BinaryDataOptions): BinaryData {
    const packedFloat = BinaryData.packFloat(float);

    return BinaryData.fromUnsignedInteger(packedFloat, options);
  }

  /**
   * Creates a BinaryData instance from the given number.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromNumber(1337);
   */
  static fromNumber(number: number, options?: BinaryDataOptions): BinaryData {
    const data = number.toString(2) as BinaryString;

    return new BinaryData(data, options);
  }

  /**
   * Creates a BinaryData instance from the given signed integer.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromSignedInteger(-420);
   */
  static fromSignedInteger(signedInteger: number, options?: BinaryDataOptions): BinaryData {
    const isPositive = signedInteger >= 0;
    const integer = isPositive
      ? signedInteger
      : signedInteger + (options?.signedIntegerOffset ?? SIGNED_INTEGER_OFFSET);

    const isPositiveBit = Number(isPositive).toString();
    const integerBits = BinaryData.fromNumber(integer).toBinaryString().padStart(32, '0');

    const data = `${isPositiveBit}${integerBits.slice(1)}`;

    return new BinaryData(data, options);
  }

  /**
   * Creates a BinaryData instance from the given unsigned integer.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromUnsignedInteger(69420);
   */
  static fromUnsignedInteger(unsignedInteger: number, options?: BinaryDataOptions): BinaryData {
    const binary = BinaryData.fromNumber(unsignedInteger).toBinaryString().padStart(32, '0');

    return new BinaryData(binary, options);
  }

  /**
   * Creates a BinaryData instance from the given comma-separated array of unsigned integers.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromUnsignedIntegerArray([69420, 133769]);
   */
  static fromUnsignedIntegerArray(unsignedIntegerArray: number[], options?: BinaryDataOptions): BinaryData {
    const binary = unsignedIntegerArray
      .map(unsignedInteger => BinaryData.fromUnsignedInteger(unsignedInteger, options).toBinaryString())
      .join('');

    return new BinaryData(binary, options);
  }

  /**
   * Creates a BinaryData instance from the given unsigned long integer.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromUnsignedLong(133742069);
   */
  static fromUnsignedLong(unsignedLong: number, options?: BinaryDataOptions): BinaryData {
    const binary = BinaryData.fromNumber(unsignedLong).toBinaryString().padStart(64, '0');
    const reorderedBinary = `${binary.slice(32)}${binary.slice(0, 32)}`;

    return new BinaryData(reorderedBinary, options);
  }

  /**
   * Creates a BinaryData instance from the given unsigned short integer.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = BinaryData.fromUnsignedShort(420);
   */
  static fromUnsignedShort(unsignedShort: number, options?: BinaryDataOptions): BinaryData {
    const binary = BinaryData.fromNumber(unsignedShort).toBinaryString().padStart(16, '0');

    return new BinaryData(binary, options);
  }

  /**
   * Confirms whether `data` is a string of binary data, i.e. a string of zeroes and ones.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const maybeBinaryString = '11110111001100010000';
   * // `maybeBinaryString` is of type `string`
   *
   * if (BinaryData.isBinaryString(maybeBinaryString)) {
   *   // `maybeBinaryString` is of type `BinaryString` inside this closure
   * }
   */
  static isBinaryString(data: string): data is BinaryString {
    const binaryStringPattern = /^[01]+$/;

    return binaryStringPattern.test(data);
  }

  /**
   * Confirms whether `data` is a string of unsigned integers and chunk versioning pairs.
   *
   * This is also a type assertion function, so if the passed `string` is asserted as a
   * `BinaryString`, it will be considered as such after calling this function.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const maybeSaveString = '...';
   * // `maybeSaveString` is of type `string`
   *
   * if (BinaryData.isSaveString(maybeSaveString)) {
   *   // `maybeSaveString` is of type `SaveString` inside this closure
   * }
   */
  static isSaveString(data: string): data is SaveString {
    const saveStringPattern = /^[0-9,|]+$/;

    const isValidCharacters = saveStringPattern.test(data);
    const isValidLastCharacter = data.slice(-1) === ',';

    return isValidCharacters && isValidLastCharacter;
  }

  /**
   * Converts a JavaScript floating point number into an IEEE754 integer.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const packedFloat = BinaryData.packFloat(1337.42069);
   * // `packedFloat` is `1151806838`
   */
  static packFloat(number: number): number {
    const buffer = Buffer.from(new Uint8Array(4));
    let bits = 0;

    ieee754Write(buffer, number, 0, true, 23, 4);

    const integer = buffer.readUInt32LE(0);

    for (let i = 0; i < 32; i++) {
      const bit: Bit = bitwiseInteger.getBit(integer, 31 - i);

      bits = bitwiseInteger.setBit(bits, 31 - i, bit);
    }

    return bits >>> 0;
  }

  /**
   * Returns the binary data as a `BinaryString`.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('1111011100110001000');
   *
   * const binary = data.toBinaryString();
   * // `binary` is `'1111011100110001000'`
   */
  toBinaryString(): BinaryString {
    return this.binary;
  }

  /**
   * Returns the boolean represenation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('1');
   *
   * const boolean = data.toBoolean();
   * // `boolean` is `true`
   */
  toBoolean(): boolean {
    if (this.binary.length !== 1) throw new Error('Boolean binary string must be 1 bit.');

    return Boolean(Number(this.binary));
  }

  /**
   * Returns the character represenation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('01000001');
   *
   * const char = data.toChar();
   * // `char` is `'A'`
   */
  toChar(): string {
    if (this.binary.length !== 8) throw new Error('Char binary string must be 8 bits.');

    return String.fromCharCode(this.toNumber());
  }

  /**
   * Returns the floating point number represenation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('01000100101001110010110101110110');
   *
   * const float = data.toFloat();
   * // `float` is approximately `1337.42069`
   */
  toFloat(): number {
    if (this.binary.length !== 32) throw new Error('Floating point number binary string must be 32 bits.');

    const unsignedInteger = this.toUnsignedInteger();

    return BinaryData.unpackFloat(unsignedInteger);
  }

  /**
   * Returns the numeric represenation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('10100111001');
   *
   * const number = data.toNumber();
   * // `number` is `1337`
   */
  toNumber(): number {
    return Number(`0b${this.binary}`);
  }

  /**
   * Returns the signed integer representation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('01010110100111110101010000000111');
   *
   * const signedInteger = data.toSignedInteger();
   * // `signedInteger` is `-694201337`
   */
  toSignedInteger(): number {
    if (this.binary.length !== 32) throw new Error('Signed integer binary string must be 32 bits.');

    const isPositive = Boolean(Number(this.binary.slice(0, 1)));
    const integer = Number(`0b0${this.binary.slice(1)}`);

    return isPositive ? integer : integer - this.signedIntegerOffset;
  }

  /**
   * Returns the unsigned integer representation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('00000111111110001011110111110101');
   *
   * const unsignedInteger = data.toUnsignedInteger();
   * // `unsignedInteger` is `133742069`
   */
  toUnsignedInteger(): number {
    if (this.binary.length !== 32) throw new Error('Unsigned integer binary string must be 32 bits.');

    return this.toNumber();
  }

  /**
   * Returns the binary data as a comma-separated array of unsigned integers.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101');
   *
   * const unsignedIntegers = data.toUnsignedIntegerArray();
   * // `unsignedIntegers` is `[1337, 420, 69]`
   */
  toUnsignedIntegerArray(): number[] {
    if (this.binary.length % 32 !== 0) throw Error('Bit count must be divisible by 32.');

    const chunks = this.binary.match(/.{32}/g) as RegExpMatchArray;

    return chunks.map(bits => new BinaryData(bits).toUnsignedInteger());
  }

  /**
   * Returns the unsigned long integer representation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('0000011111111000101111011111010100000000000000000000000000000000');
   *
   * const unsignedLongInteger = data.toUnsignedLong();
   * // `unsignedLongInteger` is `133742069`
   */
  toUnsignedLong(): number {
    if (this.binary.length !== 64) throw new Error('Unsigned long integer binary string must be 64 bits.');

    return Number(`0b${this.binary.slice(32)}${this.binary.slice(0, 32)}`);
  }

  /**
   * Returns the unsigned short integer representation of the binary data.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const data = new BinaryData('0000010100111001');
   *
   * const unsignedShortInteger = data.toUnsignedShort();
   * // `unsignedShortInteger` is `1337`
   */
  toUnsignedShort(): number {
    if (this.binary.length !== 16) throw new Error('Unsigned short integer binary string must be 16 bits.');

    return this.toNumber();
  }

  /**
   * Converts an IEEE754 integer into a JavaScript floating point number.
   *
   * @example
   * import { BinaryData } from 'att-string-transcoder';
   *
   * const unpackedFloat = BinaryData.unpackFloat(1151806838);
   * // `unpackedFloat` is approximately `1337.42069`
   */
  static unpackFloat(unsignedInteger: number, options?: UnpackFloatOptions): number {
    const bufferOffset = options?.bufferOffset ?? BUFFER_OFFSET;
    const byteLength = options?.byteLength ?? BYTE_LENGTH;
    const isLittleEndian = options?.isLittleEndian ?? IS_LITTLE_ENDIAN;
    const mantissaLength = options?.mantissaLength ?? MANTISSA_LENGTH;

    const buffer = Buffer.from(new Uint8Array(4));

    buffer.writeUInt32LE(unsignedInteger);

    return ieee754Read(buffer, bufferOffset, isLittleEndian, mantissaLength, byteLength);
  }
}
