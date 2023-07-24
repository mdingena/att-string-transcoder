import type { BinaryString } from './types/BinaryString.js';

import { BinaryData } from './BinaryData.js';

/**
 * Handles the controlled storing of binary data for ATT save strings.
 *
 * @see [Class: `BinaryWriter`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryWriter.md)
 *
 * @example
 * import { BinaryWriter } from 'att-string-transcoder';
 *
 * const writer = new BinaryWriter();
 *
 * writer.writeBoolean(true);
 *
 * const output = writer.flush();
 * // `output` is `'1'`
 */
export class BinaryWriter {
  private data: string;

  /**
   * Creates a writer to store information using various write methods.
   *
   * @see [Class: `BinaryWriter`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BinaryWriter.md)
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   */
  constructor() {
    this.data = '' as BinaryString;
  }

  /**
   * Returns the stored binary string and resets the BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeBoolean(true); // internal memory is `'1'`
   * writer.writeBoolean(true); // internal memory is `'11'`
   * writer.writeBoolean(true); // internal memory is `'111'`
   *
   * const output = writer.flush(); // internal memory is `''`
   * // `output` is `'111'`
   */
  flush(): BinaryString {
    const data = this.data;
    this.data = '';

    return data as BinaryString;
  }

  /**
   * Writes raw binary data into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeBits('11110111001100010000');
   */
  writeBits(data: string): void {
    if (!BinaryData.isBinaryString(data)) {
      throw new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');
    }

    this.data += data;
  }

  /**
   * Writes a boolean into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeBoolean(true);
   */
  writeBoolean(boolean: boolean): void {
    this.data += BinaryData.fromBoolean(boolean).toBinaryString();
  }

  /**
   * Writes a character into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeChar('x');
   */
  writeChar(char: string): void {
    this.data += BinaryData.fromChar(char).toBinaryString();
  }

  /**
   * Writes a floating point number into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeFloat(0.69);
   */
  writeFloat(float: number): void {
    this.data += BinaryData.fromFloat(float).toBinaryString();
  }

  /**
   * Writes a signed integer into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeSignedInteger(-420);
   */
  writeSignedInteger(signedInteger: number): void {
    this.data += BinaryData.fromSignedInteger(signedInteger).toBinaryString();
  }

  /**
   * Writes a string into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeString('Hello, world!');
   */
  writeString(string: string): void {
    this.writeUnsignedShort(string.length);

    if (string.length === 0) return;

    /* Align bits. */
    const index = this.data.length;
    const offset = index % 8 === 0 ? 0 : 8 - (index % 8);

    if (offset > 0) {
      const alignBits = '0'.repeat(offset);

      this.writeBits(alignBits);
    }

    let currentByte = (this.data.length % 32) / 8;

    /* Garble text, ATT style. */
    let textBuffer = '';
    let bufferIndex = 0;

    while (currentByte++ < 4 && bufferIndex < string.length) {
      textBuffer += string[bufferIndex++];
    }

    while (bufferIndex + 4 <= string.length) {
      const chars = string.substr(bufferIndex, 4);

      textBuffer += chars.split('').reverse().join('');
      bufferIndex += 4;
    }

    while (bufferIndex < string.length) {
      textBuffer += string[bufferIndex++];
    }

    for (const character of textBuffer) {
      this.writeChar(character);
    }
  }

  /**
   * Writes an unsigned integer into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeUnsignedInteger(69420);
   */
  writeUnsignedInteger(unsignedInteger: number): void {
    this.data += BinaryData.fromUnsignedInteger(unsignedInteger).toBinaryString();
  }

  /**
   * Writes an unsigned long integer into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeUnsignedLong(133742069);
   */
  writeUnsignedLong(unsignedLong: number): void {
    this.data += BinaryData.fromUnsignedLong(unsignedLong).toBinaryString();
  }

  /**
   * Writes an unsigned short integer into BinaryWriter's internal memory.
   *
   * @example
   * import { BinaryWriter } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   *
   * writer.writeUnsignedShort(1337);
   */
  writeUnsignedShort(unsignedShort: number): void {
    this.data += BinaryData.fromUnsignedShort(unsignedShort).toBinaryString();
  }
}
