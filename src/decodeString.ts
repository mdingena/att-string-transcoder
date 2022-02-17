import { parseVersionString, uIntToBinary, createBinaryReader } from './utils';
import { decodePrefab, PrefabData } from './decoders';

export type DecodedString = {
  hash: number;
  size: number;
  prefab: PrefabData;
};

/**
 * Break down a raw spawn string into:
 * - prefab object;
 * - components;
 * - child entities; and
 * - child prefabs.
 */
export const decodeString = (rawString: string): DecodedString => {
  /* Get the UInts and component versions from the raw spawn string. */
  const [uIntString, versionString] = rawString.split('|');
  const uInts = uIntString.split(',').filter(Boolean);
  const versions = parseVersionString(versionString);

  /* Remove the first two UInts which do not count towards the string's size. */
  const hash = Number(uInts.shift() ?? 0);
  const size = 8 * Number(uInts.shift() ?? 0);

  /* Convert remaining UInts to binary. */
  const binary = uInts.reduce((bits, uInt) => `${bits}${uIntToBinary(Number(uInt))}`, '');

  /* Create binary reader. */
  const reader = createBinaryReader(binary);

  const prefab = decodePrefab(reader, versions);

  return {
    hash,
    size,
    prefab
  };
};
