import type { BinaryString } from './types/BinaryString.js';
import { BinaryData } from './BinaryData.js';

export class BinaryWriter {
  private data: string;

  constructor() {
    this.data = '' as BinaryString;
  }

  /**
   * Returns the stored binary string and resets the BinaryWriter's internal memory.
   */
  flush(): BinaryString {
    const data = this.data;
    this.data = '';

    return data as BinaryString;
  }

  /**
   * Writes raw binary data into BinaryWriter's internal memory.
   */
  writeBits(data: string): void {
    if (!BinaryData.isBinaryString(data)) {
      throw new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');
    }

    this.data += data;
  }

  /**
   * Writes a boolean into BinaryWriter's internal memory.
   */
  writeBoolean(boolean: boolean): void {
    this.data += BinaryData.fromBoolean(boolean).toBinaryString();
  }

  /**
   * Writes a character into BinaryWriter's internal memory.
   */
  writeChar(char: string): void {
    this.data += BinaryData.fromChar(char).toBinaryString();
  }

  /**
   * Writes a floating point number into BinaryWriter's internal memory.
   */
  writeFloat(float: number): void {
    this.data += BinaryData.fromFloat(float).toBinaryString();
  }

  /**
   * Writes a signed integer into BinaryWriter's internal memory.
   */
  writeSignedInteger(signedInteger: number): void {
    this.data += BinaryData.fromSignedInteger(signedInteger).toBinaryString();
  }

  /**
   * Writes a string into BinaryWriter's internal memory.
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
   */
  writeUnsignedInteger(unsignedInteger: number): void {
    this.data += BinaryData.fromUnsignedInteger(unsignedInteger).toBinaryString();
  }

  /**
   * Writes an unsigned long integer into BinaryWriter's internal memory.
   */
  writeUnsignedLong(unsignedLong: number): void {
    this.data += BinaryData.fromUnsignedLong(unsignedLong).toBinaryString();
  }

  /**
   * Writes an unsigned short integer into BinaryWriter's internal memory.
   */
  writeUnsignedShort(unsignedShort: number): void {
    this.data += BinaryData.fromUnsignedShort(unsignedShort).toBinaryString();
  }
}
