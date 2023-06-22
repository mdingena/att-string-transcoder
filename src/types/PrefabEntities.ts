import { SupportedPrefabEntities } from './SupportedPrefabEntities.js';
import { UnknownPrefabEntities } from './UnknownPrefabEntities.js';
import { UnsupportedPrefabEntities } from './UnsupportedPrefabEntities.js';

export type PrefabEntities = SupportedPrefabEntities & UnsupportedPrefabEntities & UnknownPrefabEntities;
