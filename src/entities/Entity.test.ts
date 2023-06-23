import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { Entity, type BaseEntityFromBinaryProps, isFromBinaryProps } from './Entity.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { EntityHash } from '../types/EntityHash.js';

describe('new Entity()', () => {
  describe('when given the required props', () => {
    it('creates an instance of the Entity class', () => {
      const entityHash = 1337;
      const entityName = 'topkek';
      const entityIsAlive = true;

      const entity = new Entity({
        hash: entityHash,
        name: entityName,
        isAlive: entityIsAlive
      });

      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(entityIsAlive);
      expect(entity.components).toStrictEqual({ Unknown: [] });
    });
  });

  describe('when given additional props', () => {
    it('creates an instance of the Entity class', () => {
      const entityHash = 1337;
      const entityName = 'topkek';
      const entityIsAlive = true;

      const entity = new Entity({
        hash: entityHash,
        name: entityName,
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

describe('Entity.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;
  const entityHash = EntityHash.Fire;
  const entityName = 'Fire';
  const prefab = new Prefab('Grass_Clump', {
    entities: {
      Fire: new Entity({
        hash: entityHash,
        name: entityName,
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

  describe('when given BaseEntityFromBinaryProps', () => {
    it('creates an instance of the Entity class using the given BinaryReader', () => {
      const props = { hash: entityHash, name: entityName };
      const entity = Entity.fromBinary(fastForwardedReader, props);

      expect(entity).toBeInstanceOf(Entity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toStrictEqual(false);
    });
  });

  describe('when given a component versions map', () => {
    it('throws an error', () => {
      const versions = new Map<number, number>();

      const expectedToThrow = () => Entity.fromBinary(fastForwardedReader, versions);
      const expectedError = new Error(
        'Invalid arguments to create base Entity. Did you mean to create a derived Entity instead?'
      );

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Entity.toBinary()', () => {
  it('returns a BinaryString representation of the entity', () => {
    const entityHash = 1337;
    const entityName = 'topkek';
    const entityIsAlive = true;
    const componentHash = ComponentHash.HeatSourceBase;
    const componentVersion = 1;

    const entity = new Entity({
      hash: entityHash,
      name: entityName,
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
    const entityHash = 1337;
    const entityName = 'topkek';
    const entityIsAlive = true;

    const entity = new Entity({
      hash: entityHash,
      name: entityName,
      isAlive: entityIsAlive
    });

    const writer = new BinaryWriter();
    entity.write(writer, new Map());

    const data = writer.flush();

    const expectedData =
      '0000000000000000000001010011100100000000000000000000000000100001100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // Entity data length.
    const isAliveBit = reader.readBoolean();

    expect(hash).toStrictEqual(entityHash);
    expect(isAliveBit).toStrictEqual(entityIsAlive);
  });
});

describe('isFromBinaryProps()', () => {
  describe('when given BaseEntityFromBinaryProps', () => {
    it('returns true', () => {
      const props: BaseEntityFromBinaryProps = {
        hash: 1337,
        name: 'Test',
        componentVersions: new Map([[420, 69]])
      };

      const result = isFromBinaryProps(props);

      expect(result).toBe(true);
    });
  });

  describe('when given a component version map', () => {
    it('returns false', () => {
      const componentVersions = new Map([[420, 69]]);

      const result = isFromBinaryProps(componentVersions);

      expect(result).toBe(false);
    });
  });

  describe('when given undefined', () => {
    it('returns false', () => {
      const result = isFromBinaryProps(undefined);

      expect(result).toBe(false);
    });
  });
});
