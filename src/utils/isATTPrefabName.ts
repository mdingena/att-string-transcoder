import type { ATTPrefabName } from '../types/ATTPrefabName.js';

import { ATTPrefabs } from '../types/ATTPrefabs.js';

/**
 * Asserts if a `string` is an [`ATTPrefabName`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/ATTPrefabName.md).
 *
 * @example
 * import { isATTPrefabName } from 'att-string-transcoder';
 *
 * const prefabName = 'Anvil';
 * // `prefabName` is of type `string`.
 *
 * if (isATTPrefabName(prefabName)) {
 *   // `prefabName` is of type `ATTPrefabName`.
 * }
 */
export function isATTPrefabName(name: string): name is ATTPrefabName {
  return name in ATTPrefabs;
}
