import type { BinaryString } from './types/BinaryString.js';

import { BinaryData } from './BinaryData.js';
import { BinaryReader } from './BinaryReader.js';
import { BinaryWriter } from './BinaryWriter.js';
import { Entity } from './Entity.js';
import { Prefab } from './Prefab.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { UnsupportedComponent } from './components/UnsupportedComponent.js';
import { ComponentHash } from './types/ComponentHash.js';
import { PhysicalMaterialPartHash } from './types/PhysicalMaterialPartHash.js';

describe('new Entity()', () => {
  describe('when given the required props', () => {
    it('creates an instance of the Entity class', () => {
      const prefabName = 'Torch';
      const entityHash = 30100;
      const entityName = 'Fire';

      const entity = new Entity<typeof prefabName>(`${entityName}_${entityHash}`);

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

      const entity = new Entity<typeof prefabName>(`${entityName}_${entityHash}`, {
        hash: entityHash,
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
      const expectedToThrow = () => new Entity('Unknown');
      const expectedError = new Error('You must manually pass an entity hash when instantiating an "Unknown" Entity.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Entity.addComponent()', () => {
  let entity: Entity<'Standard_Side_Pouch_Attachment'>;

  beforeEach(() => {
    entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');
  });

  it('adds a component to the entity', () => {
    const component = new PhysicalMaterialPartComponent({ version: 1, materialHash: 1337 });

    entity.addComponent(component);

    expect(entity.components).toStrictEqual({
      PhysicalMaterialPart: component,
      Unknown: []
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
      Fire: new Entity<typeof prefabName>(`${entityName}_${entityHash}`, {
        hash: entityHash,
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
      const props = { key: `${entityName}_${entityHash}`, hash: entityHash };
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
      const props = { key: `${entityName}_${entityHash}`, hash: entityHash, componentVersions };
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

describe('Entity.getMaterial()', () => {
  describe('when the entity has no PhysicalMaterialPart component', () => {
    it('returns materialHash of zero', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');
      delete entity.components.PhysicalMaterialPart;

      const materialHash = entity.getMaterial();

      expect(materialHash).toStrictEqual(0);
    });
  });

  describe('when the prefab has a PhysicalMaterialPart component with materialHash', () => {
    it('returns the stored isKinematic', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({
            version: 1,
            materialHash: PhysicalMaterialPartHash.EvinonSteelAlloy
          })
        }
      });

      const materialHash = entity.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });
});

describe('Entity.removeAllComponents()', () => {
  it('removes all components from the entity', () => {
    const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
      components: {
        NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: [
          new UnsupportedComponent({
            hash: 1337,
            name: 'Unknown',
            rawData: '1111011100110001000' as BinaryString,
            version: 1
          })
        ]
      }
    });

    entity.removeAllComponents();

    expect(entity.components).toStrictEqual({ Unknown: [] });
  });
});

describe('Entity.removeComponent()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 })
        }
      });

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => entity.removeComponent();
      const expectedError = new Error('You must pass a component hash or name to remove from this entity.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when given a valid component hash', () => {
    it('removes all matching components from the entity', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 })
        }
      });

      entity.removeComponent(2290978823);

      expect(entity.components).toStrictEqual({
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: []
      });
    });
  });

  describe('when given a valid component name', () => {
    it('removes all matching components from the entity', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 })
        }
      });

      entity.removeComponent('NetworkRigidbody');

      expect(entity.components).toStrictEqual({
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: []
      });
    });
  });

  describe('when given an invalid component hash', () => {
    it('removes zero components from the entity', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 })
        }
      });

      // @ts-expect-error Passing invalid arguments
      entity.removeComponent(0);

      expect(entity.components).toStrictEqual({
        NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: []
      });
    });
  });

  describe('when given an unknown component hash', () => {
    it('removes all matching components from the entity', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
          // @ts-expect-error Creating unknown component
          TestComponent: new UnsupportedComponent({
            hash: 1337,
            name: 'TestComponent',
            rawData: '1111011100110001000' as BinaryString,
            version: 1
          })
        }
      });

      // @ts-expect-error Passing invalid arguments
      entity.removeComponent(1337);

      expect(entity.components).toStrictEqual({
        NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: []
      });
    });
  });

  describe('when given an unknown component name', () => {
    it('removes all matching components from the entity', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
          Unknown: [
            new UnsupportedComponent({
              hash: 1337,
              name: 'TestComponent',
              rawData: '1111011100110001000' as BinaryString,
              version: 1
            })
          ]
        }
      });

      // @ts-expect-error Passing invalid arguments
      entity.removeComponent('TestComponent');

      expect(entity.components).toStrictEqual({
        NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
        PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: 1 }),
        Unknown: []
      });
    });
  });
});

describe('Entity.setMaterial()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => entity.setMaterial();
      const expectedError = new Error('You must pass a PhysicalMaterialPartHash to set as the material.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when given a material hash', () => {
    it('sets the given material', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');

      entity.setMaterial(PhysicalMaterialPartHash.EvinonSteelAlloy);
      const materialHash = entity.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });

  describe('when given a material name', () => {
    it('sets the given material', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');

      entity.setMaterial('EvinonSteelAlloy');
      const materialHash = entity.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });

  describe('when the entity already has a PhysicalMaterialPart component', () => {
    it('sets the given material', () => {
      const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968', {
        components: {
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({
            version: 1,
            materialHash: PhysicalMaterialPartHash.Gold
          })
        }
      });

      entity.setMaterial(PhysicalMaterialPartHash.EvinonSteelAlloy);
      const materialHash = entity.getMaterial();

      expect(materialHash).toStrictEqual(31502);
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

    const entity = new Entity<typeof prefabName>(`${entityName}_${entityHash}`, {
      hash: entityHash,
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

    const entity = new Entity<typeof prefabName>(`${entityName}_${entityHash}`, {
      hash: entityHash,
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
