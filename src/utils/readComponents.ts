import type { BinaryReader } from '../BinaryReader.js';
import type { Component } from '../components/Component.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';
import type { UnknownPrefabComponents } from '../types/UnknownPrefabComponents.js';
import { readComponent } from './readComponent.js';
import { isUnknownComponent } from './isUnknownComponent.js';
import { latestSupportedComponentVersions, terminatorHash } from '../constants.js';
import { ComponentHash } from '../types/ComponentHash.js';

type KnownPrefabComponents = Record<string, Component>;

export function readComponents(reader: BinaryReader, versions?: Map<number, number>): PrefabComponents {
  const components = Object.assign({} as KnownPrefabComponents, { Unknown: [] } as UnknownPrefabComponents);

  const isLooping = true;

  while (isLooping) {
    const hash = reader.readUnsignedInteger();

    if (hash === terminatorHash) break;

    const name = ComponentHash[hash] ?? 'Unknown';
    const version = versions?.get(hash) ?? latestSupportedComponentVersions.get(hash);

    if (typeof version === 'undefined') throw new Error();

    const component = readComponent(reader, hash, name, version);

    if (isUnknownComponent(component)) {
      components.Unknown.push(component);
    } else {
      components[name] = component;
    }
  }

  return components;
}
