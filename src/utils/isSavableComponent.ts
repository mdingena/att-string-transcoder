import type { ATTPrefabHash } from '../types/ATTPrefabHash.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { SupportedPrefabComponents } from '../types/SupportedPrefabComponents.js';
import { attPrefabNames } from '../constants.js';
import { ATTPrefab } from '../types/ATTPrefabs.js';

type Embed = { savables?: { [saveable: string]: { hash: number; name: string } } };

export function isSavableComponent(componentName: keyof SupportedPrefabComponents, prefabName: ATTPrefabName): boolean;
export function isSavableComponent(componentName: keyof SupportedPrefabComponents, prefabHash: ATTPrefabHash): boolean;
export function isSavableComponent(
  componentName: keyof SupportedPrefabComponents,
  prefabArg: ATTPrefabName | ATTPrefabHash
): boolean {
  const name = typeof prefabArg === 'string' ? prefabArg : attPrefabNames[prefabArg];
  const prefab = ATTPrefab[name];
  const embed = Object.entries<Embed>(prefab.embedded).find(([key]) => key.startsWith(`${name}_`))?.[1];

  return typeof embed?.savables?.[componentName] !== 'undefined';
}
