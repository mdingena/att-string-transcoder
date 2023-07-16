import type { PrefabEntities } from '../types/PrefabEntities.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { Entity } from '../Entity.js';

import { writeEntities } from './writeEntities.js';

describe('writeEntities()', () => {
  const secondEntityHash = 23002;
  const secondEntityKey = 'Unknown';

  let prefabEntities: PrefabEntities<'Torch'>;

  beforeEach(() => {
    prefabEntities = {
      Fire_30100: new Entity('Fire_30100', {
        hash: 30100,
        isAlive: true
      }),
      Unknown_23002: new Entity(secondEntityKey, {
        hash: secondEntityHash,
        isAlive: false
      })
    };
  });

  it('stores PrefabEntities in the given BinaryWriter', () => {
    const expectedData =
      '0000000000000000011101011001010000000000000000000000000000100001100000000000000000000000000000000000000000000000001011001110110100000000000000000000000000010000100000000000000000000000000000000000000000000000000000000000000000';

    const writer = new BinaryWriter();

    writeEntities(writer, prefabEntities, new Map());

    const data = writer.flush();

    expect(data).toStrictEqual(expectedData);
  });
});
