import { uIntToBinary, createBinaryReader } from './utils';
import { decodePrefab, Prefab } from './decoders';

export type DecodedString = {
  hash: number;
  size: number;
  prefab: Prefab;
};

/**
 * Break down a raw spawn string into:
 * - prefab object;
 * - components;
 * - child entities; and
 * - child prefabs.
 */
export const decodeString = (rawString: string): DecodedString => {
  /* Get the UInts portion of the raw spawn string. */
  const uIntString = rawString.split('|')[0];
  const uInts = uIntString.split(',').filter(Boolean);

  /* Remove the first two UInts which do not count towards the string's size. */
  const hash = Number(uInts.shift() ?? 0);
  const size = 8 * Number(uInts.shift() ?? 0);

  /* Convert remaining UInts to binary. */
  const binary = uInts.reduce((bits, uInt) => `${bits}${uIntToBinary(Number(uInt))}`, '');

  /* Create binary reader. */
  const readBinary = createBinaryReader(binary);

  const prefab = decodePrefab(readBinary);

  return {
    hash,
    size,
    prefab
  };
};
