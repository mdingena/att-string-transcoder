import { floatToBinary } from './floatToBinary';
import { uLongToBinary } from './uLongToBinary';
import { intToBinary } from './intToBinary';
import { uIntToBinary } from './uIntToBinary';

export type BinaryWriter = {
  binary: (bits: string) => void;
  boolean: (bit: boolean) => void;
  uInt: (number: number) => void;
  uLong: (number: number) => void;
  float: (number: number) => void;
  int: (number: number) => void;
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

    uLong: function (number: number) {
      binary += uLongToBinary(number);
    },

    float: function (number: number) {
      binary += floatToBinary(number);
    },

    int: function (number: number) {
      binary += intToBinary(number);
    },

    flush: function () {
      const result = binary;
      binary = '';

      return result;
    }
  };
};
