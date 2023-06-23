import type { SupportedPrefabComponents } from './SupportedPrefabComponents.js';
import type { UnknownPrefabComponents } from './UnknownPrefabComponents.js';
import type { UnsupportedPrefabComponents } from './UnsupportedPrefabComponents.js';

export type PrefabComponents = SupportedPrefabComponents & UnsupportedPrefabComponents & UnknownPrefabComponents;
