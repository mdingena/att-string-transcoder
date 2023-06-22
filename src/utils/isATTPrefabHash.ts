import type { ATTPrefabHash } from '../types/ATTPrefabHash.js';
import { attPrefabHashes } from '../constants.js';

export function isATTPrefabHash(hash: number): hash is ATTPrefabHash {
  return attPrefabHashes.includes(hash);
}
