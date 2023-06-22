import { ATTPrefabs } from './ATTPrefabs.js';
import { ATTPrefabName } from './ATTPrefabName.js';

export type ATTPrefabHash = (typeof ATTPrefabs)[ATTPrefabName]['hash'];
