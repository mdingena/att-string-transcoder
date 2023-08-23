import type { ATTPrefabName } from './ATTPrefabName.js';

import { ATTPrefabs } from './ATTPrefabs.js';

export type ATTPrefabHash = (typeof ATTPrefabs)[ATTPrefabName]['hash'];
