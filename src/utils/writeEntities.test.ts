import type { PrefabEntities } from '../types/PrefabEntities.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { FireEntity } from '../entities/FireEntity.js';
import { UnsupportedEntity } from '../entities/UnsupportedEntity.js';
import { EntityHash } from '../types/EntityHash.js';
import { writeEntities } from './writeEntities.js';

const mockedUnknownEntityHash = 1337;

describe('writeEntities()', () => {
  const secondEntityHash = EntityHash.Woodcutting_Path;
  const secondEntityName = 'Woodcutting_Path';
  const thirdEntityHash = mockedUnknownEntityHash;
  const thirdEntityName = 'Unknown';

  let prefabEntities: PrefabEntities;

  beforeEach(() => {
    prefabEntities = {
      Fire: new FireEntity({
        isAlive: true
      }),
      Woodcutting_Path: new UnsupportedEntity({
        hash: secondEntityHash,
        name: secondEntityName,
        isAlive: false
      }),
      Unknown: [
        new UnsupportedEntity({
          hash: thirdEntityHash,
          name: thirdEntityName,
          isAlive: true
        })
      ]
    };
  });

  it('stores PrefabEntities in the given BinaryWriter', () => {
    const expectedData =
      '00000000000000000111010110010100000000000000000000000000001000011000000000000000000000000000000000000000000000000110101000110000000000000000000000000000000100001000000000000000000000000000000000000000000000000000000101001110010000000000000000000000000010000110000000000000000000000000000000000000000000000000000000000000000';

    const writer = new BinaryWriter();

    writeEntities(writer, prefabEntities, new Map());

    const data = writer.flush();

    expect(data).toStrictEqual(expectedData);
  });
});
