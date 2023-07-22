import type { BinaryString } from './types/BinaryString.js';

import { BinaryData, type BinaryDataOptions } from './BinaryData.js';

/**
 * Handles the controlled consumption of binary data from save strings.
 *
 * @see [Class: `BinaryReader`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryReader.md)
 *
 * @example
 * import { BinaryReader } from 'att-string-transcoder';
 *
 * const reader = new BinaryReader('11110111001100010000');
 *
 * const firstByte = reader.readBits(8);
 * // `firstByte` is `'11110111'`
 */
export class BinaryReader {
  private data: BinaryString;
  private index = { current: 0 };
  private length: number;

  /**
   * Creates a reader to extract information from `data` using various read methods.
   *
   * @see [Class: `BinaryReader`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryReader.md)
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('11110111001100010000');
   */
  constructor(data: string) {
    if (!BinaryData.isBinaryString(data)) {
      throw new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');
    }

    this.data = data;
    this.length = data.length;
  }

  /**
   * Reads the next `bitCount` bits from the binary string.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('11110111001100010000');
   *
   * const firstByte = reader.readBits(8);
   * // `firstByte` is `'11110111'`
   */
  readBits(bitCount: number): BinaryString {
    if (this.index.current + bitCount > this.length) {
      throw Error(
        `Cannot read ${bitCount} bits from binary at index ${this.index.current}. Binary is only ${this.length} bits.`
      );
    }

    return this.data.slice(this.index.current, (this.index.current += bitCount)) as BinaryString;
  }

  /**
   * Reads the next bit from the binary string and returns `true` for `"1"` and `false` for `"0"`.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('10');
   *
   * const boolean1 = reader.readBoolean();
   * // `boolean1` is `true`
   * const boolean2 = reader.readBoolean();
   * // `boolean2` is `false`
   */
  readBoolean(options?: BinaryDataOptions): boolean {
    const bit = this.readBits(1);

    return new BinaryData(bit, options).toBoolean();
  }

  /**
   * Reads the next 8 bits from the binary string and returns the reconstructed string character.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('01000001011000100110001101000100');
   *
   * const char1 = reader.readChar();
   * // `char1` is `'A'`
   * const char2 = reader.readChar();
   * // `char2` is `'b'`
   * const char3 = reader.readChar();
   * // `char3` is `'c'`
   * const char4 = reader.readChar();
   * // `char4` is `'D'`
   */
  readChar(options?: BinaryDataOptions): string {
    const bits = this.readBits(8);

    return new BinaryData(bits, options).toChar();
  }

  /**
   * Reads the next 32 bits from the binary string and returns the reconstructed floating point number.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('01000100101001110010110101110110');
   *
   * const float = reader.readFloat();
   * // `float` is approximately `1337.42069`
   */
  readFloat(options?: BinaryDataOptions): number {
    const bits = this.readBits(32);

    return new BinaryData(bits, options).toFloat();
  }

  /**
   * Reads the next 32 bits from the binary string and returns the reconstructed signed integer.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('01010110100111110101010000000111');
   *
   * const signedInteger = reader.readSignedInteger();
   * // `signedInteger` is `-694201337`
   */
  readSignedInteger(options?: BinaryDataOptions): number {
    const bits = this.readBits(32);

    return new BinaryData(bits, options).toSignedInteger();
  }

  /**
   * Reads the next 16 bits from the binary string, then reads the number of bits as instructed and
   * returns the reconstructed string text.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('000000000000110101001000011001010010110001101111011011000110110001110010011011110111011100100000011011000110010000100001');
   *
   * const string = reader.readString();
   * // `string` is `'Hello, world!'`
   */
  readString(): string {
    const length = this.readUnsignedShort();

    if (length === 0) return '';

    /* Align bits. */
    const offset = this.index.current % 8 === 0 ? 0 : 8 - (this.index.current % 8);

    if (offset > 0) this.readBits(offset);

    let currentByte = (this.index.current % 32) / 8;

    /* Read garbled text from binary. */
    let textBuffer = '';

    while (textBuffer.length < length) {
      textBuffer += this.readChar();
    }

    /* Untangle garbled text. */
    let text = '';
    let bufferIndex = 0;

    while (currentByte < 4 && bufferIndex < length) {
      text += textBuffer[bufferIndex++];
      currentByte++;
    }

    while (bufferIndex + 4 <= length) {
      const chars = textBuffer.substr(bufferIndex, 4);

      text += chars.split('').reverse().join('');
      bufferIndex += 4;
    }

    while (bufferIndex < length) {
      text += textBuffer[bufferIndex++];
    }

    return text;
  }

  /**
   * Reads the next 32 bits from the binary string and returns the reconstructed unsigned integer.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('00000111111110001011110111110101');
   *
   * const unsignedInteger = reader.readUnsignedInteger();
   * // `unsignedInteger` is `133742069`
   */
  readUnsignedInteger(options?: BinaryDataOptions): number {
    const bits = this.readBits(32);

    return new BinaryData(bits, options).toUnsignedInteger();
  }

  /**
   * Reads the next 64 bits from the binary string and returns the reconstructed unsigned long integer.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('0000011111111000101111011111010100000000000000000000000000000000');
   *
   * const unsignedLongInteger = reader.readUnsignedLong();
   * // `unsignedLongInteger` is `133742069`
   */
  readUnsignedLong(options?: BinaryDataOptions): number {
    const bits = this.readBits(64);

    return new BinaryData(bits, options).toUnsignedLong();
  }

  /**
   * Reads the next 16 bits from the binary string and returns the reconstructed unsigned short integer.
   *
   * @example
   * import { BinaryReader } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('0000010100111001');
   *
   * const unsignedShortInteger = reader.readUnsignedShort();
   * // `unsignedShortInteger` is `1337`
   */
  readUnsignedShort(options?: BinaryDataOptions): number {
    const bits = this.readBits(16);

    return new BinaryData(bits, options).toUnsignedShort();
  }
}
