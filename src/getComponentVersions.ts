import { Components, KnownEmbeddedEntity, Prefab, UnknownEmbeddedEntity } from './decoders';
import { ComponentName, UnknownComponent, ComponentVersion } from './components';
import { ComponentHash } from './ComponentHash';

type VersionPair = [number, number];

const getComponentVersionPairs = (components: Components = {}) => {
  const versionPairs: VersionPair[] = [];

  for (const [key, value] of Object.entries(components)) {
    const componentName = key as ComponentName | 'Unknown';

    if (componentName === 'Unknown') {
      const unknownComponents = value as UnknownComponent[];
      versionPairs.push(
        ...unknownComponents.map(
          component => [component.hash, ComponentVersion.get(component.hash)] as [number, number]
        )
      );
    } else {
      const componentHash = ComponentHash[componentName];
      const componentVersion = ComponentVersion.get(componentHash);
      versionPairs.push([componentHash, componentVersion ?? 1]);
    }
  }

  return versionPairs;
};

const getPrefabVersionPairs = (prefab: Prefab): VersionPair[] => {
  const versionPairs: VersionPair[] = [];

  if (prefab.components) {
    versionPairs.push(...getComponentVersionPairs(prefab.components));
  }

  if (prefab.embeddedEntities) {
    for (const [key, value] of Object.entries(prefab.embeddedEntities)) {
      const embeddedEntityName = key as keyof KnownEmbeddedEntity | 'Unknown';

      if (embeddedEntityName === 'Unknown') {
        const unknownEmbeddedEntities = value as UnknownEmbeddedEntity[];

        for (const embeddedEntity of unknownEmbeddedEntities) {
          versionPairs.push(...getComponentVersionPairs(embeddedEntity.components));
        }
      } else {
        const knownEmbeddedEntity = value as KnownEmbeddedEntity;

        versionPairs.push(...getComponentVersionPairs(knownEmbeddedEntity.components));
      }
    }
  }

  if (prefab.childPrefabs?.length) {
    for (const childPrefab of prefab.childPrefabs) {
      versionPairs.push(...getPrefabVersionPairs(childPrefab.prefab));
    }
  }

  return versionPairs;
};

export const getComponentVersions = (prefab: Prefab): string => {
  const versionPairs = getPrefabVersionPairs(prefab);
  const uniquePairs = versionPairs.filter(
    ([hash], index) => versionPairs.findIndex(pair => pair[0] === hash) === index
  );

  const versions = uniquePairs.reduce((sum, [hash, version]) => `${sum},${hash},${version}`, '');

  return `${uniquePairs.length}${versions}`;
};
