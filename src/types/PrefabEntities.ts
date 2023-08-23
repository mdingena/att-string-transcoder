import type { ATTPrefabName } from './ATTPrefabName.js';
import type { Entity } from '../Entity.js';

export type PrefabEntities<TPrefabName extends ATTPrefabName> = {
  [EntityName: string]: Entity<TPrefabName>;
};
