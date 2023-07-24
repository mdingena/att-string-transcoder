import type { ATTPrefabHash } from '../types/ATTPrefabHash.js';

import { attPrefabHashes } from '../constants.js';

/**
 * Asserts if a `number` is an [`ATTPrefabHash`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/ATTPrefabHash.md).
 *
 * @example
 * import { isATTPrefabHash } from 'att-string-transcoder';
 *
 * const prefabHash = 23182;
 * // `prefabHash` is of type `number`.
 *
 * if (isATTPrefabHash(prefabHash)) {
 *   // `prefabHash` is of type `ATTPrefabHash`.
 * }
 */
export function isATTPrefabHash(hash: number): hash is ATTPrefabHash {
  return attPrefabHashes.includes(hash);
}
