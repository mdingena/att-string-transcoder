import { SupportedPrefabComponents } from './SupportedPrefabComponents.js';
import { UnknownPrefabComponents } from './UnknownPrefabComponents.js';
import { UnsupportedPrefabComponents } from './UnsupportedPrefabComponents.js';

export type PrefabComponents = SupportedPrefabComponents & UnsupportedPrefabComponents & UnknownPrefabComponents;
