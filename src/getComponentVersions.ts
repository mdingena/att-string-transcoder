import { Prefab } from './decoders';
import { transcoders, ComponentName, UnknownComponent, ComponentVersion } from './components';

type VersionPair = [number, number];

const getComponentVersionPairs = (prefab: Prefab): VersionPair[] => {
  const versionPairs: VersionPair[] = [];

  if (prefab.components) {
    for (const [key, value] of Object.entries(prefab.components)) {
      const componentName = key as ComponentName | 'Unknown';

      if (componentName === 'Unknown') {
        const unknownComponents = value as UnknownComponent[];
        versionPairs.push(
          ...unknownComponents.map(
            component => [component.hash, ComponentVersion.get(component.hash)] as [number, number]
          )
        );
      } else {
        const componentInfo = transcoders[componentName];
        versionPairs.push([componentInfo.HASH, componentInfo.VERSION]);
      }
    }
  }

  if (prefab.childPrefabs?.length) {
    for (const childPrefab of prefab.childPrefabs) {
      versionPairs.push(...getComponentVersionPairs(childPrefab.prefab));
    }
  }

  return versionPairs;
};

export const getComponentVersions = (prefab: Prefab): string => {
  const versionPairs = getComponentVersionPairs(prefab);
  const uniquePairs = versionPairs.filter(
    ([hash], index) => versionPairs.findIndex(pair => pair[0] === hash) === index
  );

  const versions = uniquePairs.reduce((sum, [hash, version]) => `${sum},${hash},${version}`, '');

  return `${uniquePairs.length}${versions}`;
};
