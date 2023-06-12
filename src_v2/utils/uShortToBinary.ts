import { numberToBinary } from './numberToBinary';

export const uShortToBinary = (number: number): string => {
  return numberToBinary(number).padStart(16, '0');
};
