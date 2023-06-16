import type { BinaryString } from './types/BinaryString.js';
import { BinaryData } from './BinaryData.js';

export class BinaryReader {
  private data: BinaryString;
  private index = { current: 0 };
  private length: number;

  /**
   * Creates a reader to extract information from `data` using various read methods.
   */
  constructor(data: string) {
    if (!BinaryData.isBinary(data)) {
      throw new Error('Binary data string contains invalid characters. Only "0" and "1" are allowed.');
    }

    this.data = data;
    this.length = data.length;
  }

  /**
   * Reads the next `bitCount` bits from the binary string.
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
   */
  readBoolean(): boolean {
    const bit = this.readBits(1);

    return new BinaryData(bit).asBoolean();
  }

  /**
   * Reads the next 8 bits from the binary string and returns the reconstructed string character.
   */
  readChar(): string {
    const bits = this.readBits(8);
    const charCode = new BinaryData(bits).asNumber();

    return String.fromCharCode(charCode);
  }

  /**
   * Reads the next 32 bits from the binary string and returns the reconstructed floating point number.
   */
  readFloat(): number {
    const bits = this.readBits(32);

    return new BinaryData(bits).asFloat();
  }

  /**
   * Reads the next 32 bits from the binary string and returns the reconstructed signed integer.
   */
  readSignedInteger(): number {
    const bits = this.readBits(32);

    return new BinaryData(bits).asSignedInteger();
  }

  /**
   * Reads the next 16 bits from the binary string, then reads the number of bits as instructed and
   * returns the reconstructed string text.
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
   */
  readUnsignedInteger(): number {
    const bits = this.readBits(32);

    return new BinaryData(bits).asUnsignedInteger();
  }

  /**
   * Reads the next 64 bits from the binary string and returns the reconstructed unsigned long integer.
   */
  readUnsignedLong(): number {
    const bits = this.readBits(64);

    return new BinaryData(bits).asUnsignedLong();
  }

  /**
   * Reads the next 16 bits from the binary string and returns the reconstructed unsigned short integer.
   */
  readUnsignedShort(): number {
    const bits = this.readBits(16);

    return new BinaryData(bits).asUnsignedShort();
  }
}
