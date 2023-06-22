import type { ATTPrefabHash } from '../types/ATTPrefabHash.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { EntityHash } from '../types/EntityHash.js';
import { attPrefabNames } from '../constants.js';
import { ATTPrefabs } from '../types/ATTPrefabs.js';

type Embed = { savables?: { [saveable: string]: { hash: number; name: string } } };

export function isEmbeddableEntity(entityName: keyof typeof EntityHash, prefabName: ATTPrefabName): boolean;
export function isEmbeddableEntity(entityName: keyof typeof EntityHash, prefabHash: ATTPrefabHash): boolean;
export function isEmbeddableEntity(
  entityName: keyof typeof EntityHash,
  prefabArg: ATTPrefabName | ATTPrefabHash
): boolean {
  const name = typeof prefabArg === 'string' ? prefabArg : attPrefabNames[prefabArg];
  const prefab = ATTPrefabs[name];
  const embed = Object.entries<Embed>(prefab.embedded).find(([key]) => key.startsWith(`${entityName}_`))?.[1];

  return typeof embed !== 'undefined';
}
