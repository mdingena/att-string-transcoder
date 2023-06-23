import type { EntityHash } from './EntityHash.js';
import type { UnsupportedEntity } from '../entities/UnsupportedEntity.js';
import type { SupportedPrefabEntities } from './SupportedPrefabEntities.js';

type EntityName = keyof typeof EntityHash;

type UnsupportedEntityName = Exclude<EntityName, keyof SupportedPrefabEntities>;

export type UnsupportedPrefabEntities = { [K in UnsupportedEntityName]?: UnsupportedEntity };
