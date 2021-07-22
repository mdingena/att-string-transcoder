import { Prefab } from './decoders';
import { binaryToUIntArray } from './utils';
import { encodePrefab } from './encoders';
import { getComponentVersions } from './getComponentVersions';

export const createString = (prefab: Prefab): string => {
  const hash = prefab.prefabObject.hash;

  /* Encode the prefab. */
  const binary = encodePrefab(prefab);

  /* Pad bits with trailing zeroes to make it % 32. */
  const missingBits = binary.length + (32 - (binary.length % 32 === 0 ? 32 : binary.length % 32));
  const paddedBinary = binary.padEnd(missingBits, '0');

  /* Calculate byte size of padded binary. */
  const bytes = paddedBinary.length / 8;

  /* Convert binary to array of UInts. */
  const uInts = binaryToUIntArray(paddedBinary);

  /* Construct the UInts string. */
  const uIntString = [hash, bytes, ...uInts].join(',');

  /* Construct the versions string. */
  const versionString = getComponentVersions(prefab);

  /* Return spawn string. */
  const strings = [uIntString, versionString].filter(Boolean);
  return `${strings.join(',|')},`;
};
