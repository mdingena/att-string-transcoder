import { binaryToNumber } from './binaryToNumber';
import { binaryToInt } from './binaryToInt';
import { binaryToULong } from './binaryToULong';
import { unpackFloat } from './unpackFloat';

type Index = { current: number };

export type BinaryReader = {
  binary: (bits: number) => string;
  boolean: () => boolean;
  uInt: () => number;
  uShort: () => number;
  uLong: () => number;
  float: () => number;
  int: () => number;
  char: () => string;
  string: () => string;
};

export const createBinaryReader = (binary: string): BinaryReader => {
  const index: Index = { current: 0 };
  const size = binary.length;

  return {
    binary: function (bits: number): string {
      if (index.current + bits > size) {
        throw Error(`Cannot read ${bits} bits from binary at index ${index.current}. Binary is only ${size} bits.`);
      }

      return binary.slice(index.current, (index.current += bits));
    },

    boolean: function () {
      const bit = this.binary(1);

      return Boolean(Number(bit));
    },

    uInt: function () {
      const bits = this.binary(32);

      return binaryToNumber(bits);
    },

    uShort: function () {
      const bits = this.binary(16);

      return binaryToNumber(bits);
    },

    uLong: function () {
      const bits = this.binary(64);

      return binaryToULong(bits);
    },

    float: function () {
      const uInt = this.uInt();

      return unpackFloat(uInt);
    },

    int: function () {
      const bits = this.binary(32);

      return binaryToInt(bits);
    },

    char: function () {
      const bits = this.binary(8);
      const charCode = binaryToNumber(bits);

      return String.fromCharCode(charCode);
    },

    string: function () {
      const length = this.uShort();

      if (length === 0) return '';

      /* Align bits. */
      const offset = index.current % 8 === 0 ? 0 : 8 - (index.current % 8);

      if (offset > 0) this.binary(offset);

      let currentByte = (index.current % 32) / 8;

      /* Read garbled text from binary. */
      let textBuffer = '';

      while (textBuffer.length < length) {
        textBuffer += this.char();
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
  };
};
