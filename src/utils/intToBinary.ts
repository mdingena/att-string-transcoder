import { numberToBinary } from './numberToBinary';

const NEGATIVE_OFFSET = 2147483648;

export const intToBinary = (number: number): string => {
  const isPositive = number >= 0;
  const integer = isPositive ? number : number + NEGATIVE_OFFSET;

  const isPositiveBit = Number(isPositive).toString();
  const integerBits = numberToBinary(integer).padStart(32, '0');

  return `${isPositiveBit}${integerBits.slice(1)}`;
};
