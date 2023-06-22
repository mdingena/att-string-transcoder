import type { EntityHash } from './EntityHash.js';
import type { Entity } from '../entities/Entity.js';
import type { SupportedPrefabEntities } from './SupportedPrefabEntities.js';

type EntityName = keyof typeof EntityHash;

type UnsupportedEntityName = Exclude<EntityName, keyof SupportedPrefabEntities>;

export type UnsupportedPrefabEntities = { [K in UnsupportedEntityName]?: Entity };
