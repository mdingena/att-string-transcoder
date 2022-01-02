import { floatToBinary } from './floatToBinary';
import { uShortToBinary } from './uShortToBinary';
import { uLongToBinary } from './uLongToBinary';
import { intToBinary } from './intToBinary';
import { uIntToBinary } from './uIntToBinary';
import { numberToBinary } from './numberToBinary';

export type BinaryWriter = {
  binary: (bits: string) => void;
  boolean: (bit: boolean) => void;
  uInt: (number: number) => void;
  uShort: (number: number) => void;
  uLong: (number: number) => void;
  float: (number: number) => void;
  int: (number: number) => void;
  char: (char: string) => void;
  string: (text: string) => void;
  flush: () => string;
};

export const createBinaryWriter = (): BinaryWriter => {
  let binary: string = '';

  return {
    binary: function (bits: string): void {
      binary += bits;
    },

    boolean: function (bit: boolean) {
      binary += Number(bit).toString();
    },

    uInt: function (number: number) {
      binary += uIntToBinary(number);
    },

    uShort: function (number: number) {
      binary += uShortToBinary(number);
    },

    uLong: function (number: number) {
      binary += uLongToBinary(number);
    },

    float: function (number: number) {
      binary += floatToBinary(number);
    },

    int: function (number: number) {
      binary += intToBinary(number);
    },

    char: function (char: string) {
      const charCode = char.charCodeAt(0);
      const bits = numberToBinary(charCode).padStart(8, '0');

      binary += bits;
    },

    string: function (textBuffer: string) {
      this.uShort(textBuffer.length);

      if (textBuffer.length === 0) return;

      /* Align bits. */
      const index = binary.length;
      const offset = index % 8 === 0 ? 0 : 8 - (index % 8);

      if (offset > 0) {
        const align = '0'.repeat(offset);

        this.binary(align);
      }

      let currentByte = (binary.length % 32) / 8;

      /* Garble text, ATT style. */
      let text = '';
      let bufferIndex = 0;

      while (currentByte < 4 && bufferIndex < textBuffer.length) {
        text += textBuffer[bufferIndex++];
        currentByte++;
      }

      while (bufferIndex + 4 <= textBuffer.length) {
        const chars = textBuffer.substr(bufferIndex, 4);

        text += chars.split('').reverse().join('');
        bufferIndex += 4;
      }

      while (bufferIndex < textBuffer.length) {
        text += textBuffer[bufferIndex++];
      }

      for (const letter of text) {
        this.char(letter);
      }
    },

    flush: function () {
      const result = binary;
      binary = '';

      return result;
    }
  };
};
