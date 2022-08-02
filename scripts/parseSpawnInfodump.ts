import fs from 'fs';
import { Prefab } from '../src/Prefab';
import infodump from './spawnInfodump.json';

const snakeCase = (name: string) => name.replace(/[\s]/g, '_');

const alphabetically = (a: [string, unknown], b: [string, unknown]) => (a[0] < b[0] ? -1 : 1);

const parsedPrefabs = Object.fromEntries(
  Object.entries(
    infodump.reduce(
      (prefabs, data) => ({
        ...prefabs,
        [snakeCase(data.Name)]: {
          hash: data.Hash,
          name: data.Name,
          embedded: Object.fromEntries(
            Object.entries(
              data.Embedded.reduce(
                (entities, entity) => ({
                  ...entities,
                  [`${snakeCase(entity.Name)}_${entity.Hash}`]: {
                    hash: entity.Hash,
                    name: entity.Name,
                    savables: Object.fromEntries(
                      Object.entries(
                        entity.Savables.reduce(
                          (savables, savable) => ({
                            ...savables,
                            [snakeCase(savable.Name)]: {
                              hash: savable.Hash,
                              name: savable.Name
                            }
                          }),
                          {}
                        )
                      ).sort(alphabetically)
                    )
                  }
                }),
                {}
              )
            ).sort(alphabetically)
          )
        }
      }),
      {}
    )
  ).sort(alphabetically)
);

const parsedPrefabKeys = Object.keys(parsedPrefabs);

const missingPrefabs = Object.entries(Prefab).reduce(
  (missing, [key, prefab]) => (parsedPrefabKeys.includes(key) ? missing : { ...missing, [key]: prefab }),
  {}
);

const totalPrefabs = Object.entries({
  ...missingPrefabs,
  ...parsedPrefabs
})
  .sort(alphabetically)
  .reduce(
    (prefabs, [key, prefab]) => ({
      ...prefabs,
      [key]: prefab
    }),
    {}
  );

fs.writeFileSync(
  './src/Prefab.ts',
  `export const Prefab = ${JSON.stringify(totalPrefabs, null, 2).replace(/"/g, "'")}\n`
);
