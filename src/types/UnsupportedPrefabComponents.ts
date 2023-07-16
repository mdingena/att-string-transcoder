import type { ComponentHash } from './ComponentHash.js';
import type { SupportedPrefabComponents } from './SupportedPrefabComponents.js';
import type { UnsupportedComponent } from '../components/UnsupportedComponent.js';

type ComponentName = keyof typeof ComponentHash;

type UnsupportedComponentName = Exclude<ComponentName, keyof SupportedPrefabComponents>;

export type UnsupportedPrefabComponents = { [K in UnsupportedComponentName]?: UnsupportedComponent };
