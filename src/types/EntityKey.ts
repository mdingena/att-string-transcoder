import type { ATTPrefabName } from './ATTPrefabName.js';

import { ATTPrefabs } from './ATTPrefabs.js';

export type EntityKey<TPrefabName extends ATTPrefabName> =
  | keyof (typeof ATTPrefabs)[TPrefabName]['embedded']
  | 'Unknown';
