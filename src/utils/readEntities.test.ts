import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { Entity } from '../Entity.js';
import { Prefab } from '../Prefab.js';
import { readEntities } from './readEntities.js';

describe('readEntities()', () => {
  describe('when reading entities', () => {
    let fastForwardedReader: BinaryReader;
    const firstEntityHash = 6136;
    const firstEntityName = 'Slot_Multi';
    const secondEntityHash = 23002;
    const secondEntityName = 'Unknown';
    const prefabName = 'Handle_Short';
    const prefab = new Prefab(prefabName, {
      entities: {
        Slot_Multi_6136: new Entity<typeof prefabName>({
          hash: firstEntityHash,
          key: `${firstEntityName}_${firstEntityHash}`,
          isAlive: true
        }),
        Unknown_23002: new Entity({
          hash: secondEntityHash,
          key: secondEntityName,
          isAlive: false
        })
      }
    });

    beforeEach(() => {
      const saveString = prefab.toSaveString();
      const [dataString] = saveString.split('|');

      if (typeof dataString === 'undefined') {
        throw new Error('Invalid test data.');
      }

      const unsignedIntegers = dataString.split(',').map(Number);

      const data = BinaryData.fromUnsignedIntegerArray(unsignedIntegers);
      const reader = new BinaryReader(data.toBinaryString());

      reader.readUnsignedInteger(); // Root prefab hash.
      reader.readUnsignedInteger(); // SaveString bytes.
      reader.readUnsignedInteger(); // Parent prefab hash.
      reader.readFloat(); // Parent position X.
      reader.readFloat(); // Parent position Y.
      reader.readFloat(); // Parent position Z.
      reader.readFloat(); // Parent rotation X.
      reader.readFloat(); // Parent rotation Y.
      reader.readFloat(); // Parent rotation Z.
      reader.readFloat(); // Parent rotation W.
      reader.readFloat(); // Parent scale.
      reader.readUnsignedInteger(); // Component hash === termination hash.

      fastForwardedReader = reader;
    });

    it('returns PrefabEntities', () => {
      const entities = readEntities(fastForwardedReader, prefabName);

      expect(entities['Slot_Multi_6136']).toBeInstanceOf(Entity);
      expect(entities['Slot_Multi_6136']?.hash).toStrictEqual(firstEntityHash);
      expect(entities['Slot_Multi_6136']?.name).toStrictEqual(firstEntityName);
      expect(entities['Slot_Multi_6136']?.isAlive).toBe(true);

      expect(entities['Unknown_23002']).toBeInstanceOf(Entity);
      expect(entities['Unknown_23002']?.hash).toStrictEqual(secondEntityHash);
      expect(entities['Unknown_23002']?.name).toStrictEqual(secondEntityName);
      expect(entities['Unknown_23002']?.isAlive).toBe(false);
    });
  });
});
