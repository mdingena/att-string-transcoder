import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import { ATTPrefabs } from '../types/ATTPrefabs.js';

export function isATTPrefabName(name: string): name is ATTPrefabName {
  return name in ATTPrefabs;
}
