import { binaryToNumber } from './binaryToNumber';

export const binaryToUIntArray = (binary: string): number[] => {
  if (binary.length % 32 !== 0) throw Error('Cannot convert binary to UInts. Bit count is not divisible by 32.');

  return binary.match(/.{32}/g)?.map(bits => binaryToNumber(bits)) ?? [];
};
