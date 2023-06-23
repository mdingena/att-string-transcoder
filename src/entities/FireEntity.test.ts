import { FireEntity } from './FireEntity.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { Prefab } from '../Prefab.js';
import { EntityHash } from '../types/EntityHash.js';

describe('new FireEntity()', () => {
  describe('when given the required props', () => {
    it('creates an instance of the FireEntity class', () => {
      const entityHash = EntityHash.Fire;
      const entityName = 'Fire';
      const entityIsAlive = true;

      const entity = new FireEntity({
        isAlive: entityIsAlive
      });

      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(entityIsAlive);
      expect(entity.components).toStrictEqual({ Unknown: [] });
    });
  });

  describe('when given additional props', () => {
    it('creates an instance of the FireEntity class', () => {
      const entityHash = EntityHash.Fire;
      const entityName = 'Fire';
      const entityIsAlive = true;

      const entity = new FireEntity({
        isAlive: entityIsAlive,
        components: {
          HeatSourceBase: new HeatSourceBaseComponent({
            version: 1,
            isLit: true,
            progress: 0.69
          })
        }
      });

      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(entityIsAlive);
      expect(entity.components).toStrictEqual({
        HeatSourceBase: new HeatSourceBaseComponent({
          version: 1,
          isLit: true,
          progress: 0.69
        }),
        Unknown: []
      });
    });
  });
});

describe('FireEntity.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;
  const entityHash = EntityHash.Fire;
  const entityName = 'Fire';
  const prefab = new Prefab('Grass_Clump', {
    entities: {
      Fire: new FireEntity({
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
    reader.readUnsignedInteger(); // Entity hash === entityHash.
    reader.readUnsignedInteger(); // Entity data length.

    fastForwardedReader = reader;
  });

  describe('when given a component versions map', () => {
    it('creates an instance of the FireEntity class using the given BinaryReader', () => {
      const versions = new Map<number, number>();
      const entity = FireEntity.fromBinary(fastForwardedReader, versions);

      expect(entity).toBeInstanceOf(FireEntity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(false);
    });
  });
});
