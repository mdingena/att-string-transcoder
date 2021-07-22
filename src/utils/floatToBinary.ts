import { packFloat } from './packFloat';
import { numberToBinary } from './numberToBinary';

export const floatToBinary = (number: number): string => numberToBinary(packFloat(number)).padStart(32, '0');
