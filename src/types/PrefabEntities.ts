import type { SupportedPrefabEntities } from './SupportedPrefabEntities.js';
import type { UnknownPrefabEntities } from './UnknownPrefabEntities.js';
import type { UnsupportedPrefabEntities } from './UnsupportedPrefabEntities.js';

export type PrefabEntities = SupportedPrefabEntities & UnsupportedPrefabEntities & UnknownPrefabEntities;
