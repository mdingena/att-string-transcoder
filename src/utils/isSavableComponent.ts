import type { ATTPrefabHash } from '../types/ATTPrefabHash.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { SupportedPrefabComponents } from '../types/SupportedPrefabComponents.js';

import { attPrefabNames } from '../constants.js';
import { ATTPrefabs } from '../types/ATTPrefabs.js';

type Embed = { savables?: { [saveable: string]: { hash: number; name: string } } };

/**
 * Returns whether or not the given component name belongs to a component that is normally savable
 * on the given prefab hash or name.
 *
 * @example
 * import { isSavableComponent } from 'att-string-transcoder';
 *
 * if (isSavableComponent('NetworkRigidbody', 'Handle_Short')) {
 *   // `Handle_Short` can save `NetworkRigidbody` component data.
 * }
 */
export function isSavableComponent(componentName: keyof SupportedPrefabComponents, prefabName: ATTPrefabName): boolean;
export function isSavableComponent(componentName: keyof SupportedPrefabComponents, prefabHash: ATTPrefabHash): boolean;
export function isSavableComponent(
  componentName: keyof SupportedPrefabComponents,
  prefabArg: ATTPrefabName | ATTPrefabHash
): boolean {
  const name = typeof prefabArg === 'string' ? prefabArg : attPrefabNames[prefabArg];
  const prefab = ATTPrefabs[name];
  const embed = Object.entries<Embed>(prefab.embedded).find(([key]) => key.startsWith(`${name}_`))?.[1];

  return typeof embed?.savables?.[componentName] !== 'undefined';
}
