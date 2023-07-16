import type { ATTPrefabs } from './ATTPrefabs.js';
import type { Entity } from '../Entity.js';

export type PrefabEntities<TPrefabName extends keyof typeof ATTPrefabs> = {
  [EntityName: string]: Entity<TPrefabName>;
};
