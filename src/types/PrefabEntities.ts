import type { ATTPrefabName } from './ATTPrefabName.js';
import type { EntityKey } from './EntityKey.js';
import type { Entity } from '../Entity.js';

export type PrefabEntities<TPrefabName extends ATTPrefabName> = {
  [Key in EntityKey<TPrefabName>]?: Entity<TPrefabName>;
};
