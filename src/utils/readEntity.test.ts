import { readEntity } from './readEntity.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { latestSupportedComponentVersions } from '../constants.js';
import { Entity } from '../entities/Entity.js';
import { FireEntity } from '../entities/FireEntity.js';
import { UnsupportedEntity } from '../entities/UnsupportedEntity.js';
import { Prefab } from '../Prefab.js';
import { EntityHash } from '../types/EntityHash.js';
import { ComponentHash } from '../types/ComponentHash.js';

describe('readEntity()', () => {
  describe('when reading a supported component', () => {
    let fastForwardedReader: BinaryReader;
    const entityHash = EntityHash.Fire;
    const entityName = 'Fire';
    const prefab = new Prefab('Grass_Clump', {
      entities: {
        Fire: new FireEntity({
          isAlive: true,
          components: {
            HeatSourceBase: new HeatSourceBaseComponent({
              version: latestSupportedComponentVersions.get(ComponentHash.HeatSourceBase) ?? 0,
              isLit: true
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

      fastForwardedReader = reader;
    });

    it('returns an Entity', () => {
      const hash = fastForwardedReader.readUnsignedInteger();

      if (hash !== entityHash) {
        throw new Error('Invalid test data.');
      }

      const entity = readEntity(fastForwardedReader, entityHash, entityName);

      expect(entity).toBeInstanceOf(Entity);
      expect(entity).toBeInstanceOf(FireEntity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toBe(true);
      expect(entity.components).toStrictEqual({
        HeatSourceBase: new HeatSourceBaseComponent({
          version: latestSupportedComponentVersions.get(ComponentHash.HeatSourceBase) ?? 0,
          isLit: true
        }),
        Unknown: []
      });
    });
  });

  describe('when reading an unsupported entity', () => {
    let fastForwardedReader: BinaryReader;
    const entityHash = EntityHash.Woodcutting_Path;
    const entityName = 'Woodcutting_Path';
    const prefab = new Prefab('Grass_Clump', {
      entities: {
        Woodcutting_Path: new Entity({
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

      fastForwardedReader = reader;
    });

    it('returns an UnsupportedComponent', () => {
      const hash = fastForwardedReader.readUnsignedInteger();

      if (hash !== entityHash) {
        throw new Error('Invalid test data.');
      }

      const entity = readEntity(fastForwardedReader, entityHash, entityName);

      expect(entity).toBeInstanceOf(UnsupportedEntity);
      expect(entity.hash).toStrictEqual(entityHash);
      expect(entity.name).toStrictEqual(entityName);
      expect(entity.isAlive).toBe(false);
    });
  });
});
