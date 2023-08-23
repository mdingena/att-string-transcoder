import fs from 'fs';

import { ATTPrefabs } from '../src/types/ATTPrefabs.js';

import dumpedPrefabs from './spawnInfodump.json' assert { type: 'json' };

type Savable = {
  hash: number;
  name: string;
};

type Embed = {
  hash: number;
  name: string;
  savables: Savable[];
};

type Prefab = {
  hash: number;
  name: string;
  embedded: Embed[];
};

function snakeCase(name: string) {
  return name.replace(/[\s]/g, '_');
}

function alphabetically(a: [string, unknown], b: [string, unknown]) {
  return a[0] < b[0] ? -1 : 1;
}

function parseSavables(savables: Savable[]) {
  return Object.fromEntries(
    Object.entries<Savable>(
      savables.reduce(
        (savables, savable) => ({
          ...savables,
          [snakeCase(savable.name)]: {
            hash: savable.hash,
            name: snakeCase(savable.name)
          }
        }),
        {}
      )
    ).sort(alphabetically)
  );
}

function parseEmbeds(embeds: Embed[]) {
  return Object.fromEntries(
    Object.entries<Embed>(
      embeds.reduce(
        (entities, entity) => ({
          ...entities,
          [`${snakeCase(entity.name)}_${entity.hash}`]: {
            hash: entity.hash,
            name: snakeCase(entity.name),
            savables: parseSavables(entity.savables)
          }
        }),
        {}
      )
    ).sort(alphabetically)
  );
}

function parsePrefabs(dumpedPrefabs: Prefab[]) {
  return Object.fromEntries(
    Object.entries<Prefab>(
      dumpedPrefabs.reduce(
        (prefabs, prefab) => ({
          ...prefabs,
          [snakeCase(prefab.name)]: {
            hash: prefab.hash,
            name: snakeCase(prefab.name),
            embedded: parseEmbeds(prefab.embedded)
          }
        }),
        {}
      )
    ).sort(alphabetically)
  );
}

const parsedPrefabs = parsePrefabs(dumpedPrefabs);

const parsedPrefabKeys = Object.keys(parsedPrefabs);

const missingPrefabs = Object.entries(ATTPrefabs).reduce(
  (missing, [key, prefab]) => (parsedPrefabKeys.includes(key) ? missing : { ...missing, [key]: prefab }),
  {}
);

const totalPrefabs = Object.fromEntries(
  Object.entries({
    ...missingPrefabs,
    ...parsedPrefabs
  }).sort(alphabetically)
);

const date = new Date();
const since = `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date
  .getDate()
  .toString()
  .padStart(2, '0')}`;

fs.writeFileSync(
  '../src/types/ATTPrefabs.ts',
  `/**
 * Parsed spawn infodump.
 * @since ${since}
 * @version 3.0.0
 */
export const ATTPrefabs = ${JSON.stringify(totalPrefabs, null, 2).replace(/"/g, "'")} as const;\n`
);
