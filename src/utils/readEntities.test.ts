import { readEntities } from './readEntities.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { FireEntity } from '../entities/FireEntity.js';
import { UnsupportedEntity } from '../entities/UnsupportedEntity.js';
import { Prefab } from '../Prefab.js';
import { EntityHash } from '../types/EntityHash.js';

const mockedUnknownEntityHash = 1337;

describe('readEntities()', () => {
  describe('when reading entities', () => {
    let fastForwardedReader: BinaryReader;
    const firstEntityHash = EntityHash.Fire;
    const firstEntityName = 'Fire';
    const secondEntityHash = EntityHash.Woodcutting_Path;
    const secondEntityName = 'Woodcutting_Path';
    const thirdEntityHash = mockedUnknownEntityHash;
    const thirdEntityName = 'Unknown';
    const prefab = new Prefab('Handle_Short', {
      entities: {
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
      const entities = readEntities(fastForwardedReader);

      expect(entities.Fire).toBeInstanceOf(FireEntity);
      expect(entities.Fire?.hash).toStrictEqual(firstEntityHash);
      expect(entities.Fire?.name).toStrictEqual(firstEntityName);
      expect(entities.Fire?.isAlive).toBe(true);

      expect(entities.Woodcutting_Path).toBeInstanceOf(UnsupportedEntity);
      expect(entities.Woodcutting_Path?.hash).toStrictEqual(secondEntityHash);
      expect(entities.Woodcutting_Path?.name).toStrictEqual(secondEntityName);
      expect(entities.Woodcutting_Path?.isAlive).toBe(false);

      expect(entities.Unknown[0]).toBeInstanceOf(UnsupportedEntity);
      expect(entities.Unknown[0]?.hash).toStrictEqual(thirdEntityHash);
      expect(entities.Unknown[0]?.name).toStrictEqual(thirdEntityName);
      expect(entities.Unknown[0]?.isAlive).toBe(true);
    });
  });
});
