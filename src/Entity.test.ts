import { BinaryData } from './BinaryData.js';
import { BinaryReader } from './BinaryReader.js';
import { BinaryWriter } from './BinaryWriter.js';
import { Entity } from './Entity.js';
import { Prefab } from './Prefab.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { ComponentHash } from './types/ComponentHash.js';

describe('new Entity()', () => {
  describe('when given the required props', () => {
    it('creates an instance of the Entity class', () => {
      const prefabName = 'Torch';
      const entityHash = 30100;
      const entityName = 'Fire';

      const entity = new Entity<typeof prefabName>({
        key: `${entityName}_${entityHash}`
      });

      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(true);
      expect(entity.components).toStrictEqual({ Unknown: [] });
    });
  });

  describe('when given additional props', () => {
    it('creates an instance of the Entity class', () => {
      const prefabName = 'Torch';
      const entityHash = 30100;
      const entityName = 'Fire';
      const entityIsAlive = true;

      const entity = new Entity<typeof prefabName>({
        hash: entityHash,
        key: `${entityName}_${entityHash}`,
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

  describe('when given an "Unknown" key and no additional hash property', () => {
    it('throws an error', () => {
      const expectedToThrow = () => new Entity({ key: 'Unknown' });
      const expectedError = new Error('You must manually pass an entity hash when instantiating an "Unknown" Entity.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Entity.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;
  const prefabName = 'Torch';
  const entityHash = 30100;
  const entityName = 'Fire';
  const prefab = new Prefab(prefabName, {
    entities: {
      Fire: new Entity<typeof prefabName>({
        hash: entityHash,
        key: `${entityName}_${entityHash}`,
        isAlive: false,
        components: {
          HeatSourceBase: new HeatSourceBaseComponent({
            version: 1,
            isLit: true,
            progress: 0.69
          })
        }
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

  describe('when given required EntityFromBinaryProps', () => {
    it('creates an instance of the Entity class using the given BinaryReader', () => {
      const props = { hash: entityHash, key: `${entityName}_${entityHash}` };
      const entity = Entity.fromBinary(fastForwardedReader, props);

      expect(entity).toBeInstanceOf(Entity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(false);
    });
  });

  describe('when given additional EntityFromBinaryProps', () => {
    it('creates an instance of the Entity class using the given BinaryReader', () => {
      const componentVersions = new Map<number, number>([[4109360768, 1]]);
      const props = { hash: entityHash, key: `${entityName}_${entityHash}`, componentVersions };
      const entity = Entity.fromBinary(fastForwardedReader, props);

      expect(entity).toBeInstanceOf(Entity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(false);
      expect(entity.components).toStrictEqual({
        HeatSourceBase: new HeatSourceBaseComponent({
          version: 1,
          isLit: true,
          progress: 0.6899999976158142
        }),
        Unknown: []
      });
    });
  });
});

describe('Entity.toBinary()', () => {
  it('returns a BinaryString representation of the entity', () => {
    const prefabName = 'Torch';
    const entityHash = 30100;
    const entityName = 'Fire';
    const entityIsAlive = true;
    const componentHash = ComponentHash.HeatSourceBase;
    const componentVersion = 1;

    const entity = new Entity<typeof prefabName>({
      hash: entityHash,
      key: `${entityName}_${entityHash}`,
      isAlive: entityIsAlive,
      components: {
        HeatSourceBase: new HeatSourceBaseComponent({
          version: componentVersion,
          isLit: true,
          progress: 0.69
        })
      }
    });

    const data = entity.toBinary(new Map([[componentHash, componentVersion]]));

    const expectedData =
      '11111010011101111110111101000000000000000000000000000000001100001100111111001100001010001111010111010100011111011011000000000000000000000001110000000111010111100000000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('Entity.write()', () => {
  it('writes a BinaryString representation of the entity to the given BinaryWriter, including entity hash and data length', () => {
    const prefabName = 'Torch';
    const entityHash = 30100;
    const entityName = 'Fire';
    const entityIsAlive = true;

    const entity = new Entity<typeof prefabName>({
      hash: entityHash,
      key: `${entityName}_${entityHash}`,
      isAlive: entityIsAlive
    });

    const writer = new BinaryWriter();
    entity.write(writer, new Map());

    const data = writer.flush();

    const expectedData =
      '0000000000000000011101011001010000000000000000000000000000100001100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // Entity data length.
    const isAliveBit = reader.readBoolean();

    expect(hash).toStrictEqual(entityHash);
    expect(isAliveBit).toStrictEqual(entityIsAlive);
  });
});
