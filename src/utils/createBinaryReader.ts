import { binaryToNumber } from './binaryToNumber';
import { binaryToInt } from './binaryToInt';
import { binaryToULong } from './binaryToULong';
import { unpackFloat } from './unpackFloat';

type Index = { current: number };

export type BinaryReader = {
  binary: (bits: number) => string;
  boolean: () => boolean;
  uInt: () => number;
  uLong: () => number;
  float: () => number;
  int: () => number;
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
    }
  };
};
