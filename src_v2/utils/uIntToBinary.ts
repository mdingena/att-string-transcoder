import { numberToBinary } from './numberToBinary';

export const uIntToBinary = (uInt: number): string => numberToBinary(uInt).padStart(32, '0');
