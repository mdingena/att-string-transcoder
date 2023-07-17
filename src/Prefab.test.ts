import type { BinaryString } from './types/BinaryString.js';
import type { SaveString } from './types/SaveString.js';

import { vi } from 'vitest';

import { BinaryReader } from './BinaryReader.js';
import { Entity } from './Entity.js';
import { Prefab } from './Prefab.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { PickupComponent } from './components/PickupComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import { UnsupportedComponent } from './components/UnsupportedComponent.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { ComponentHash } from './types/ComponentHash.js';
import { PhysicalMaterialPartHash } from './types/PhysicalMaterialPartHash.js';

describe('new Prefab()', () => {
  describe('when given only a prefab name', () => {
    it('returns an instance of the Prefab class', () => {
      const prefab = new Prefab('Handle_Short');

      expect(prefab.hash).toStrictEqual(ATTPrefabs.Handle_Short.hash);
      expect(prefab.components).toStrictEqual({ Unknown: [] });
      expect(prefab.entities).toStrictEqual({});
      expect(prefab.children).toStrictEqual([]);
    });
  });

  describe('when given additional constructor props', () => {
    it('returns an instance of the Prefab class', () => {
      const prefab = new Prefab('Torch', {
        components: {
          Pickup: new PickupComponent({ version: 2 })
        },
        entities: {
          Fire_30100: new Entity('Fire_30100', { isAlive: true })
        },
        children: [{ parentHash: 0, prefab: new Prefab('Guard') }]
      });

      expect(prefab.hash).toStrictEqual(ATTPrefabs.Torch.hash);

      expect(prefab.components).toEqual({
        Pickup: {
          hash: ComponentHash.Pickup,
          name: 'Pickup',
          version: 2,
          dockedMemory: [],
          lastInteractorPlayerId: 0
        },
        Unknown: []
      });

      expect(prefab.entities).toEqual({
        Fire_30100: {
          hash: ATTPrefabs.Torch.embedded.Fire_30100.hash,
          name: 'Fire',
          isAlive: true,
          components: { Unknown: [] }
        }
      });

      expect(prefab.children).toEqual([
        {
          parentHash: 0,
          prefab: new Prefab('Guard', {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0, w: 1 },
            scale: 1,
            components: { Unknown: [] },
            entities: {},
            children: []
          })
        }
      ]);
    });
  });
});

describe('Prefab.addChildPrefab()', () => {
  let parent: Prefab<'Handle_Short'>;

  beforeEach(() => {
    parent = new Prefab('Handle_Short');
  });

  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => parent.addChildPrefab();
      const expectedError = new Error(
        'You must pass a parent prefab entity hash (or null) and a child prefab to add as a child to this prefab.'
      );

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when given a null parentName', () => {
    it('adds a child prefab attached to parentHash 0', () => {
      const child = new Prefab('Guard');

      parent.addChildPrefab(null, child);

      expect(parent.children).toStrictEqual([
        {
          parentHash: 0,
          prefab: child
        }
      ]);
    });
  });

  describe('when given a valid parentName', () => {
    it('adds a child prefab attached to the corresponding entity', () => {
      const child = new Prefab('Guard');

      parent.addChildPrefab('Slot_Multi_6136', child);

      expect(parent.children).toStrictEqual([
        {
          parentHash: 6136,
          prefab: child
        }
      ]);
    });
  });

  describe('when given an invalid parentName', () => {
    it('throws an error', () => {
      const child = new Prefab('Guard');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => parent.addChildPrefab('Invalid_Entity_Name', child);
      const expectedError = new Error('"Invalid_Entity_Name" is not a valid entity on "Handle_Short".');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Prefab.addComponent()', () => {
  let prefab: Prefab<'Handle_Short'>;

  beforeEach(() => {
    prefab = new Prefab('Handle_Short');
  });

  it('adds a component to the prefab', () => {
    const component = new PickupComponent({ version: 2, lastInteractorPlayerId: 1337 });

    prefab.addComponent(component);

    expect(prefab.components).toStrictEqual({
      Pickup: component,
      Unknown: []
    });
  });
});

describe('Prefab.addGift()', () => {
  let prefab: Prefab<'Gift_Mail_Box'>;
  let gift: Prefab<'Dynamite'>;

  beforeEach(() => {
    prefab = new Prefab('Gift_Mail_Box');
    gift = new Prefab('Dynamite');
  });

  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.addGift();
      const expectedError = new Error('You must pass a gift prefab to add to this prefab as a gift.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when given required arguments', () => {
    it('adds a gift to the prefab', () => {
      prefab.addGift(gift);

      const unsignedIntegers = [31326, 0, 0, 0, 0, 0, 0, 1065353216, 1065353216, 0, 0, 0, 0];
      const hash = 31326;
      const bytes = 48;
      const chunkVersioning = [] as number[];

      expect(gift.hash).toStrictEqual(hash);
      expect(prefab.components.SentGift).toBeInstanceOf(SentGiftComponent);
      expect(prefab.components.SentGift?.gifts.length).toStrictEqual(1);
      expect(prefab.components.SentGift?.gifts[0]).toStrictEqual({
        data: unsignedIntegers,
        messageSizeInBytes: bytes,
        hash,
        chunkVersioning
      });
    });

    it('adds an additional gift to the prefab', () => {
      prefab.addGift(gift);
      prefab.addGift(gift);

      const unsignedIntegers = [31326, 0, 0, 0, 0, 0, 0, 1065353216, 1065353216, 0, 0, 0, 0];
      const hash = 31326;
      const bytes = 48;
      const chunkVersioning = [] as number[];

      expect(gift.hash).toStrictEqual(hash);
      expect(prefab.components.SentGift).toBeInstanceOf(SentGiftComponent);
      expect(prefab.components.SentGift?.gifts.length).toStrictEqual(2);
      expect(prefab.components.SentGift?.gifts[0]).toStrictEqual({
        data: unsignedIntegers,
        messageSizeInBytes: bytes,
        hash,
        chunkVersioning
      });
      expect(prefab.components.SentGift?.gifts[1]).toStrictEqual({
        data: unsignedIntegers,
        messageSizeInBytes: bytes,
        hash,
        chunkVersioning
      });
    });
  });

  describe('when the gift prefab SaveString contains no data', () => {
    it('throws an error', () => {
      const spy = vi.spyOn(gift, 'toSaveString');
      spy.mockImplementationOnce(() => '|' as SaveString);

      const expectedToThrow = () => prefab.addGift(gift);
      const expectedError = new Error('Gift prefab data is corrupted.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the gift prefab SaveString contains malformed data', () => {
    it('throws an error', () => {
      const spy = vi.spyOn(gift, 'toSaveString');
      spy.mockImplementationOnce(() => ',|,,' as SaveString);

      const expectedToThrow = () => prefab.addGift(gift);
      const expectedError = new Error('Gift prefab data is corrupted.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Prefab.fromBinary()', () => {
  let reader: BinaryReader;
  const componentVersions = new Map([[1454441398, 2]]);
  const prefab = new Prefab('Handle_Short', {
    components: {
      Pickup: new PickupComponent({ version: 2 })
    }
  });

  beforeEach(() => {
    const binaryString =
      '0000000000000000101001001111011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000001111111000000000000000000000000101011010110001000000111011011000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' as BinaryString;
    reader = new BinaryReader(binaryString);
  });

  describe('when given required arguments', () => {
    it('creates an instance of the Prefab class using the given BinaryReader', () => {
      const prefabFromBinary = Prefab.fromBinary(reader);

      expect(prefabFromBinary).toStrictEqual(prefab);
    });
  });

  describe('when given optional arguments', () => {
    it('creates an instance of the Prefab class using the given BinaryReader', () => {
      const prefabFromBinary = Prefab.fromBinary(reader, componentVersions);

      expect(prefabFromBinary).toStrictEqual(prefab);
    });
  });

  describe('when given binary data containing an invalid prefab hash', () => {
    it('throws an error', () => {
      const readerWithInvalidData = new BinaryReader(
        '1111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000001111111000000000000000000000000101011010110001000000111011011000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      );

      const expectedToThrow = () => Prefab.fromBinary(readerWithInvalidData);
      const expectedError = new Error('Cannot find ATT Prefab with hash 4294967295.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Prefab.fromSaveString()', () => {
  let saveString: SaveString;
  const prefab = new Prefab('Handle_Short');

  beforeEach(() => {
    saveString = '42230,48,42230,0,0,0,0,0,0,1065353216,1065353216,0,0,0,' as SaveString;
  });

  describe('when the SaveString contains no component versions', () => {
    it('creates an instance of the Prefab class using the given SaveString', () => {
      const prefabFromSaveString = Prefab.fromSaveString(saveString);

      expect(prefabFromSaveString).toStrictEqual(prefab);
    });
  });

  describe('when the SaveString contains component versions', () => {
    beforeEach(() => {
      saveString = `${saveString}|3,2290978823,1,1454441398,2,4109360768,1,` as SaveString;
    });

    it('creates an instance of the Prefab class using the given SaveString', () => {
      const prefabFromSaveString = Prefab.fromSaveString(saveString);

      expect(prefabFromSaveString).toStrictEqual(prefab);
    });
  });

  describe('when the SaveString contains incorrect component versions length', () => {
    beforeEach(() => {
      saveString = `${saveString}|69,2290978823,1,1454441398,2,4109360768,1,` as SaveString;
    });

    it('throws an error', () => {
      const expectedToThrow = () => Prefab.fromSaveString(saveString);
      const expectedError = new Error('SaveString contains invalid versioning. Expected 69 versions but parsed 3.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the SaveString contains malformed component versions', () => {
    beforeEach(() => {
      saveString = `${saveString}|,,,` as SaveString;
    });

    it('throws an error', () => {
      const expectedToThrow = () => Prefab.fromSaveString(saveString);
      const expectedError = new Error('SaveString is malformed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the SaveString contains no data', () => {
    beforeEach(() => {
      saveString = `|,` as SaveString;
    });

    it('throws an error', () => {
      const expectedToThrow = () => Prefab.fromSaveString(saveString);
      const expectedError = new Error('SaveString is malformed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the SaveString contains malformed data', () => {
    beforeEach(() => {
      saveString = `0,0,` as SaveString;
    });

    it('throws an error', () => {
      const expectedToThrow = () => Prefab.fromSaveString(saveString);
      const expectedError = new Error('SaveString is malformed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the passed argument is not a valid SaveString', () => {
    beforeEach(() => {
      saveString = `0` as SaveString;
    });

    it('throws an error', () => {
      const expectedToThrow = () => Prefab.fromSaveString(saveString);
      const expectedError = new Error('SaveString is malformed.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Prefab.getAngularVelocity()', () => {
  describe('when the prefab has no NetworkRigidBody component', () => {
    it('returns an angular velocity of zero', () => {
      const prefab = new Prefab('Handle_Short');
      delete prefab.components.NetworkRigidbody;

      const angularVelocity = prefab.getAngularVelocity();

      expect(angularVelocity).toStrictEqual({ x: 0, y: 0, z: 0 });
    });
  });

  describe('when the prefab has a NetworkRigidBody component with angular velocity', () => {
    it('returns the stored angular velocity', () => {
      const prefab = new Prefab('Handle_Short', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            angularVelocity: { x: 69, y: 420, z: 1337 }
          })
        }
      });

      const angularVelocity = prefab.getAngularVelocity();

      expect(angularVelocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });
});

describe('Prefab.getComponentVersions()', () => {
  describe('when given consistent component versions', () => {
    it('returns a Map<number, number> of the versions of the components on a prefab', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          Pickup: new PickupComponent({ version: 2 }),
          Unknown: [
            new UnsupportedComponent({
              hash: 1337,
              name: 'Unknown',
              rawData: '1111011100110001000' as BinaryString,
              version: 1
            })
          ]
        },
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              HeatSourceBase: new HeatSourceBaseComponent({ version: 1 }),
              Unknown: [
                new UnsupportedComponent({
                  hash: 1337,
                  name: 'Unknown',
                  rawData: '1111011100110001000' as BinaryString,
                  version: 1
                })
              ]
            }
          })
        }
      });

      const componentVersions = prefab.getComponentVersions();

      expect(componentVersions).toStrictEqual(
        new Map([
          [2290978823, 1],
          [1454441398, 2],
          [1337, 1],
          [4109360768, 1]
        ])
      );
    });
  });

  describe('when given inconsistent component versions', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          Unknown: [
            new UnsupportedComponent({
              hash: 1337,
              name: 'Unknown',
              rawData: '1111011100110001000' as BinaryString,
              version: 420
            })
          ]
        },
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              Unknown: [
                new UnsupportedComponent({
                  hash: 1337,
                  name: 'Unknown',
                  rawData: '1111011100110001000' as BinaryString,
                  version: 69
                })
              ]
            }
          })
        }
      });

      const expectedToThrow = () => prefab.getComponentVersions();
      const expectedError = new Error(
        'Component 1337 exists with version 420 and 69. All instances of a component must exist with the same version.'
      );

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });
});

describe('Prefab.getGiftBoxLabel', () => {
  describe('when the prefab has no SentGift component', () => {
    it('returns an empty string', () => {
      const prefab = new Prefab('Gift_Mail_Box');
      delete prefab.components.SentGift;

      const giftBoxLabel = prefab.getGiftBoxLabel();

      expect(giftBoxLabel).toStrictEqual('');
    });
  });

  describe('when the prefab has a SentGift component with senderName', () => {
    it('returns the stored gift box label', () => {
      const prefab = new Prefab('Gift_Mail_Box', {
        components: {
          SentGift: new SentGiftComponent({
            version: 1,
            senderName: 'topkek'
          })
        }
      });

      const giftBoxLabel = prefab.getGiftBoxLabel();

      expect(giftBoxLabel).toStrictEqual('topkek');
    });
  });
});

describe('Prefab.getIntegrity()', () => {
  describe('when the prefab has no DurabilityModule component', () => {
    it('returns full integrity', () => {
      const prefab = new Prefab('Short_Sword_Blade');
      delete prefab.components.DurabilityModule;

      const integrity = prefab.getIntegrity();

      expect(integrity).toStrictEqual(1);
    });
  });

  describe('when the prefab has a DurabilityModule component with integrity', () => {
    it('returns the stored integrity', () => {
      const prefab = new Prefab('Short_Sword_Blade', {
        components: {
          DurabilityModule: new DurabilityModuleComponent({
            version: 1,
            integrity: 0.69
          })
        }
      });

      const integrity = prefab.getIntegrity();

      expect(integrity).toBeCloseTo(0.69, 2);
    });
  });
});

describe('Prefab.getKinematic()', () => {
  describe('when the prefab has no NetworkRigidbody component', () => {
    it('returns isKinematic of false', () => {
      const prefab = new Prefab('Handle_Short');
      delete prefab.components.NetworkRigidbody;

      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(false);
    });
  });

  describe('when the prefab has a NetworkRigidbody component with isKinematic', () => {
    it('returns the stored isKinematic', () => {
      const prefab = new Prefab('Handle_Short', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            isKinematic: true
          })
        }
      });

      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(true);
    });
  });
});

describe('Prefab.getMaterial()', () => {
  describe('when the prefab has no PhysicalMaterialPart component', () => {
    it('returns materialHash of zero', () => {
      const prefab = new Prefab('Short_Sword_Blade');
      delete prefab.components.PhysicalMaterialPart;

      const materialHash = prefab.getMaterial();

      expect(materialHash).toStrictEqual(0);
    });
  });

  describe('when the prefab has a PhysicalMaterialPart component with materialHash', () => {
    it('returns the stored isKinematic', () => {
      const prefab = new Prefab('Short_Sword_Blade', {
        components: {
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({
            version: 1,
            materialHash: PhysicalMaterialPartHash.EvinonSteelAlloy
          })
        }
      });

      const materialHash = prefab.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });
});

describe('Prefab.getOnFire()', () => {
  describe('when the prefab has no entity with HeatSourceBase component', () => {
    it('returns false', () => {
      const prefab = new Prefab('Grass_Clump');
      delete prefab.entities['Fire_30100']?.components.HeatSourceBase;

      const isOnFire = prefab.getOnFire();

      expect(isOnFire).toStrictEqual(false);
    });
  });

  describe('when the prefab has an entity with HeatSourceBase component with isLit', () => {
    it('returns the stored isLit', () => {
      const prefab = new Prefab('Grass_Clump', {
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              HeatSourceBase: new HeatSourceBaseComponent({
                version: 1,
                isLit: true
              })
            }
          })
        }
      });

      const isOnFire = prefab.getOnFire();

      expect(isOnFire).toStrictEqual(true);
    });
  });
});

describe('Prefab.getPosition()', () => {
  it('returns the Position of the Prefab', () => {
    const prefab = new Prefab('Handle_Short', { position: { x: 69, y: 420, z: 1337 } });

    const position = prefab.getPosition();

    expect(position).toStrictEqual({ x: 69, y: 420, z: 1337 });
  });
});

describe('Prefab.getScale()', () => {
  it('returns the scale of the Prefab', () => {
    const prefab = new Prefab('Handle_Short', { scale: 0.69 });

    const scale = prefab.getScale();

    expect(scale).toBeCloseTo(0.69, 2);
  });
});

describe('Prefab.getServerSleeping()', () => {
  describe('when the prefab has no NetworkRigidbody component', () => {
    it('returns isServerSleeping of false', () => {
      const prefab = new Prefab('Handle_Short');
      delete prefab.components.NetworkRigidbody;

      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(false);
    });
  });

  describe('when the prefab has a NetworkRigidbody component with isServerSleeping', () => {
    it('returns the stored isServerSleeping', () => {
      const prefab = new Prefab('Handle_Short', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            isServerSleeping: true
          })
        }
      });

      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(true);
    });
  });
});

describe('Prefab.getServings()', () => {
  describe('when the prefab has no LiquidContainer component', () => {
    it('returns a servings of zero', () => {
      const prefab = new Prefab('Potion_Medium');
      delete prefab.components.LiquidContainer;

      const servings = prefab.getServings();

      expect(servings).toStrictEqual(0);
    });
  });

  describe('when the prefab has a LiquidContainer component with contentLevel', () => {
    it('returns the stored contentLevel', () => {
      const prefab = new Prefab('Potion_Medium', {
        components: {
          LiquidContainer: new LiquidContainerComponent({
            version: 1,
            contentLevel: 420
          })
        }
      });

      const servings = prefab.getServings();

      expect(servings).toStrictEqual(420);
    });
  });
});

describe('Prefab.getRotation()', () => {
  it('returns the Rotation of the Prefab', () => {
    const prefab = new Prefab('Handle_Short', { rotation: { x: 0.69, y: 0.42, z: -0.1337, w: 0.88 } });

    const rotation = prefab.getRotation();

    expect(rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
  });
});

describe('Prefab.getVelocity()', () => {
  describe('when the prefab has no NetworkRigidBody component', () => {
    it('returns a velocity of zero', () => {
      const prefab = new Prefab('Handle_Short');
      delete prefab.components.NetworkRigidbody;

      const velocity = prefab.getVelocity();

      expect(velocity).toStrictEqual({ x: 0, y: 0, z: 0 });
    });
  });

  describe('when the prefab has a NetworkRigidBody component with angular velocity', () => {
    it('returns the stored velocity', () => {
      const prefab = new Prefab('Handle_Short', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            velocity: { x: 69, y: 420, z: 1337 }
          })
        }
      });

      const velocity = prefab.getVelocity();

      expect(velocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });
});

describe('Prefab.print()', () => {
  it('prints the SaveString of the prefab to the console', () => {
    const spy = vi.spyOn(console, 'log');
    spy.mockImplementationOnce(() => void 0);

    const prefab = new Prefab('Handle_Short');
    prefab.print();

    expect(spy).toHaveBeenCalledWith('42230,48,42230,0,0,0,0,0,0,1065353216,1065353216,0,0,0,');
  });
});

describe('Prefab.removeAllChildPrefabs()', () => {
  it('removes all the children from the Prefab', () => {
    const prefab = new Prefab('Handle_Short', {
      children: [
        { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
        { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
        { parentHash: 0, prefab: new Prefab('Phantom_Guard') }
      ]
    });

    prefab.removeAllChildPrefabs();

    expect(prefab.children).toStrictEqual([]);
  });
});

describe('Prefab.removeChildPrefab()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Handle_Short', {
        children: [
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') }
        ]
      });

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.removeChildPrefab();
      const expectedError = new Error('You must pass a child prefab hash or name to remove from this prefab.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when given a child prefab hash', () => {
    it('removes all matching children from the Prefab', () => {
      const prefab = new Prefab('Handle_Short', {
        children: [
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') }
        ]
      });

      prefab.removeChildPrefab(6940);

      expect(prefab.children).toStrictEqual([
        { parentHash: 0, prefab: new Prefab('Guard') },
        { parentHash: 0, prefab: new Prefab('Guard') }
      ]);
    });
  });

  describe('when given a child prefab name', () => {
    it('removes all matching children from the Prefab', () => {
      const prefab = new Prefab('Handle_Short', {
        children: [
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Phantom_Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') },
          { parentHash: 0, prefab: new Prefab('Guard') }
        ]
      });

      prefab.removeChildPrefab('Phantom_Guard');

      expect(prefab.children).toStrictEqual([
        { parentHash: 0, prefab: new Prefab('Guard') },
        { parentHash: 0, prefab: new Prefab('Guard') }
      ]);
    });
  });
});

describe('Prefab.setAngularVelocity()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets no angular velocity', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setAngularVelocity({ x: 69, y: 420, z: 1337 });
      const angularVelocity = prefab.getAngularVelocity();

      expect(angularVelocity).toStrictEqual({ x: 0, y: 0, z: 0 });
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given angular velocity', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setAngularVelocity({ x: 69, y: 420, z: 1337 });
      const angularVelocity = prefab.getAngularVelocity();

      expect(angularVelocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given angular velocity', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            angularVelocity: { x: 88, y: -88, z: -88 }
          })
        }
      });

      prefab.setAngularVelocity({ x: 69, y: 420, z: 1337 });
      const angularVelocity = prefab.getAngularVelocity();

      expect(angularVelocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });
});

describe('Prefab.setGiftBoxLabel()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Gift_Mail_Box');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.setGiftBoxLabel();
      const expectedError = new Error('You must pass a string to set as the gift box label.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the prefab cannot have a SentGift component', () => {
    it('sets no gift box label', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.SentGift;

      prefab.setGiftBoxLabel('topkek');
      const giftBoxLabel = prefab.getGiftBoxLabel();

      expect(giftBoxLabel).toStrictEqual('');
    });
  });

  describe('when the prefab can have a SentGift component', () => {
    it('sets the given gift box label', () => {
      const prefab = new Prefab('Gift_Mail_Box');

      prefab.setGiftBoxLabel('topkek');
      const giftBoxLabel = prefab.getGiftBoxLabel();

      expect(giftBoxLabel).toStrictEqual('topkek');
    });
  });

  describe('when the prefab already has a SentGift component', () => {
    it('sets the given gift box label', () => {
      const prefab = new Prefab('Gift_Mail_Box', {
        components: {
          SentGift: new SentGiftComponent({
            version: 1,
            senderName: 'lolwut'
          })
        }
      });

      prefab.setGiftBoxLabel('topkek');
      const giftBoxLabel = prefab.getGiftBoxLabel();

      expect(giftBoxLabel).toStrictEqual('topkek');
    });
  });
});

describe('Prefab.setIntegrity()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Short_Sword_Blade');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.setIntegrity();
      const expectedError = new Error('You must pass a number to set as the integrity.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the prefab cannot have a DurabilityModule component', () => {
    it('sets no integrity', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.DurabilityModule;

      prefab.setIntegrity(0.69);
      const integrity = prefab.getIntegrity();

      expect(integrity).toStrictEqual(1);
    });
  });

  describe('when the prefab can have a DurabilityModule component', () => {
    it('sets the given integrity', () => {
      const prefab = new Prefab('Short_Sword_Blade');

      prefab.setIntegrity(0.69);
      const integrity = prefab.getIntegrity();

      expect(integrity).toBeCloseTo(0.69, 2);
    });
  });

  describe('when the prefab already has a DurabilityModule component', () => {
    it('sets the given integrity', () => {
      const prefab = new Prefab('Short_Sword_Blade', {
        components: {
          DurabilityModule: new DurabilityModuleComponent({
            version: 1,
            integrity: 0.1337
          })
        }
      });

      prefab.setIntegrity(0.69);
      const integrity = prefab.getIntegrity();

      expect(integrity).toBeCloseTo(0.69, 2);
    });
  });
});

describe('Prefab.setKinematic()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets no isKinematic', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setKinematic(true);
      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(false);
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given isKinematic', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            isKinematic: false
          })
        }
      });

      prefab.setKinematic(true);
      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(true);
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given isKinematic', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setKinematic(true);
      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(true);
    });
  });

  describe('when given no arguments', () => {
    it('sets isKinematic of true', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setKinematic();
      const isKinematic = prefab.getKinematic();

      expect(isKinematic).toStrictEqual(true);
    });
  });
});

describe('Prefab.setMaterial()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Short_Sword_Blade');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.setMaterial();
      const expectedError = new Error('You must pass a PhysicalMaterialPartHash to set as the material.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the prefab cannot have a PhysicalMaterialPart component', () => {
    it('sets no material', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.PhysicalMaterialPart;

      prefab.setMaterial(PhysicalMaterialPartHash.EvinonSteelAlloy);
      const materialHash = prefab.getMaterial();

      expect(materialHash).toStrictEqual(0);
    });
  });

  describe('when the prefab can have a PhysicalMaterialPart component', () => {
    it('sets the given material', () => {
      const prefab = new Prefab('Short_Sword_Blade');

      prefab.setMaterial(PhysicalMaterialPartHash.EvinonSteelAlloy);
      const materialHash = prefab.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });

  describe('when the prefab already has a PhysicalMaterialPart component', () => {
    it('sets the given material', () => {
      const prefab = new Prefab('Short_Sword_Blade', {
        components: {
          PhysicalMaterialPart: new PhysicalMaterialPartComponent({
            version: 1,
            materialHash: PhysicalMaterialPartHash.Gold
          })
        }
      });

      prefab.setMaterial(PhysicalMaterialPartHash.EvinonSteelAlloy);
      const materialHash = prefab.getMaterial();

      expect(materialHash).toStrictEqual(31502);
    });
  });
});

describe('Prefab.setOnFire()', () => {
  describe('when the prefab cannot have a Fire entity', () => {
    it('sets no isLit', () => {
      const prefab = new Prefab('Anvil');
      prefab.entities = {};

      prefab.setOnFire(true);
      const isLit = prefab.getOnFire();

      expect(isLit).toStrictEqual(false);
    });
  });

  describe('when the prefab can have a Fire entity', () => {
    it('sets the given isLit', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setOnFire(true);
      const isLit = prefab.getOnFire();

      expect(isLit).toStrictEqual(true);
    });
  });

  describe('when the prefab already has a Fire entity but no HeatSourceBase component', () => {
    it('sets the given isLit', () => {
      const prefab = new Prefab('Grass_Clump', {
        entities: {
          Fire_30100: new Entity('Fire_30100')
        }
      });

      prefab.setOnFire(true);
      const isLit = prefab.getOnFire();

      expect(isLit).toStrictEqual(true);
    });
  });

  describe('when the prefab already has a Fire entity with a HeatSourceBase component', () => {
    it('sets the given isLit', () => {
      const prefab = new Prefab('Grass_Clump', {
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              HeatSourceBase: new HeatSourceBaseComponent({
                version: 1,
                isLit: false
              })
            }
          })
        }
      });

      prefab.setOnFire(true);
      const isLit = prefab.getOnFire();

      expect(isLit).toStrictEqual(true);
    });
  });

  describe('when given no arguments', () => {
    it('sets isLit of true', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setOnFire();
      const isLit = prefab.getOnFire();

      expect(isLit).toStrictEqual(true);
    });
  });
});

describe('Prefab.setPosition()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets the given position on prefab only', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setPosition({ x: 69, y: 420, z: 1337 });
      const position = prefab.getPosition();

      expect(position).toStrictEqual({ x: 69, y: 420, z: 1337 });
      // @ts-expect-error Deleted object becomes `never`
      expect(prefab.components.NetworkRigidbody?.position).toStrictEqual(undefined);
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given position on prefab and NetworkRigidbody component', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setPosition({ x: 69, y: 420, z: 1337 });
      const position = prefab.getPosition();

      expect(position).toStrictEqual({ x: 69, y: 420, z: 1337 });
      expect(prefab.components.NetworkRigidbody?.position).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given position on prefab and NetworkRigidbody component', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            position: { x: 88, y: -88, z: -88 }
          })
        }
      });

      prefab.setPosition({ x: 69, y: 420, z: 1337 });
      const position = prefab.getPosition();

      expect(position).toStrictEqual({ x: 69, y: 420, z: 1337 });
      expect(prefab.components.NetworkRigidbody?.position).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });
});

describe('Prefab.setRotation()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets the given rotation on prefab only', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setRotation({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      const rotation = prefab.getRotation();

      expect(rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      // @ts-expect-error Deleted object becomes `never`
      expect(prefab.components.NetworkRigidbody?.rotation).toStrictEqual(undefined);
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given rotation on prefab and NetworkRigidbody component', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setRotation({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      const rotation = prefab.getRotation();

      expect(rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      expect(prefab.components.NetworkRigidbody?.rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given rotation on prefab and NetworkRigidbody component', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            rotation: { x: 0.88, y: -0.88, z: -0.88, w: 0.88 }
          })
        }
      });

      prefab.setRotation({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      const rotation = prefab.getRotation();

      expect(rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
      expect(prefab.components.NetworkRigidbody?.rotation).toStrictEqual({ x: 0.69, y: 0.42, z: -0.1337, w: 0.88 });
    });
  });
});

describe('Prefab.setScale()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Short_Sword_Blade');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.setScale();
      const expectedError = new Error('You must pass a number to set as the scale.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  it('sets the given scale', () => {
    const prefab = new Prefab('Short_Sword_Blade');

    prefab.setScale(0.69);
    const scale = prefab.getScale();

    expect(scale).toBeCloseTo(0.69, 2);
  });
});

describe('Prefab.setServerSleeping()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets no isServerSleeping', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setServerSleeping(true);
      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(false);
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given isServerSleeping', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setServerSleeping(true);
      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(true);
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given isServerSleeping', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            isServerSleeping: false
          })
        }
      });

      prefab.setServerSleeping(true);
      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(true);
    });
  });

  describe('when given no arguments', () => {
    it('sets isServerSleeping of true', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setServerSleeping();
      const isServerSleeping = prefab.getServerSleeping();

      expect(isServerSleeping).toStrictEqual(true);
    });
  });
});

describe('Prefab.setServings()', () => {
  describe('when given invalid arguments', () => {
    it('throws an error', () => {
      const prefab = new Prefab('Potion_Medium');

      // @ts-expect-error Passing invalid arguments
      const expectedToThrow = () => prefab.setServings();
      const expectedError = new Error('You must pass a number to set as the amount of servings.');

      expect(expectedToThrow).toThrowError(expectedError);
    });
  });

  describe('when the prefab cannot have a LiquidContainer component', () => {
    it('sets no servings', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.LiquidContainer;

      prefab.setServings(69);
      const servings = prefab.getServings();

      expect(servings).toStrictEqual(0);
    });
  });

  describe('when the prefab can have a LiquidContainer component', () => {
    it('sets the given amount of servings', () => {
      const prefab = new Prefab('Potion_Medium');

      prefab.setServings(69);
      const servings = prefab.getServings();

      expect(servings).toStrictEqual(69);
    });
  });

  describe('when the prefab already has a LiquidContainer component', () => {
    it('sets the given amount of servings', () => {
      const prefab = new Prefab('Potion_Medium', {
        components: {
          LiquidContainer: new LiquidContainerComponent({
            version: 1,
            contentLevel: 1337
          })
        }
      });

      prefab.setServings(69);
      const servings = prefab.getServings();

      expect(servings).toStrictEqual(69);
    });
  });
});

describe('Prefab.setVelocity()', () => {
  describe('when the prefab cannot have a NetworkRigidbody component', () => {
    it('sets no velocity', () => {
      const prefab = new Prefab('Anvil');
      delete prefab.components.NetworkRigidbody;

      prefab.setVelocity({ x: 69, y: 420, z: 1337 });
      const velocity = prefab.getVelocity();

      expect(velocity).toStrictEqual({ x: 0, y: 0, z: 0 });
    });
  });

  describe('when the prefab can have a NetworkRigidbody component', () => {
    it('sets the given velocity', () => {
      const prefab = new Prefab('Grass_Clump');

      prefab.setVelocity({ x: 69, y: 420, z: 1337 });
      const velocity = prefab.getVelocity();

      expect(velocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });

  describe('when the prefab already has a NetworkRigidbody component', () => {
    it('sets the given velocity', () => {
      const prefab = new Prefab('Grass_Clump', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({
            version: 1,
            velocity: { x: 88, y: -88, z: -88 }
          })
        }
      });

      prefab.setVelocity({ x: 69, y: 420, z: 1337 });
      const velocity = prefab.getVelocity();

      expect(velocity).toStrictEqual({ x: 69, y: 420, z: 1337 });
    });
  });
});

describe('Prefab.toBinary()', () => {
  it('returns the BinaryString of the prefab', () => {
    const prefab = new Prefab('Torch', {
      components: {
        Pickup: new PickupComponent({ version: 2 })
      },
      entities: {
        Fire_30100: new Entity('Fire_30100', {
          components: {
            HeatSourceBase: new HeatSourceBaseComponent({
              version: 1,
              isLit: true
            })
          }
        })
      },
      children: [{ parentHash: 0, prefab: new Prefab('Guard') }]
    });

    const componentVersions = prefab.getComponentVersions();
    const binaryString = prefab.toBinary(componentVersions);

    expect(binaryString).toStrictEqual(
      '000000000000000011011101011110100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111110000000000000000000000000111111100000000000000000000000010101101011000100000011101101100000000000000000000000000100000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111010110010100000000000000000000000000110000101111101001110111111011110100000000000000000000000000000000110000110000000000000000000000000000000001010001111101101100000000000000000000000111000000011101011110000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000011001001110110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111110000000000000000000000000111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    );
  });
});

describe('Prefab.toSaveString()', () => {
  it('returns the SaveString of the prefab', () => {
    const prefab = new Prefab('Torch', {
      components: {
        NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
        Pickup: new PickupComponent({ version: 2 })
      },
      entities: {
        Fire_30100: new Entity('Fire_30100', {
          components: {
            HeatSourceBase: new HeatSourceBaseComponent({
              version: 1,
              isLit: true
            })
          }
        })
      },
      children: [{ parentHash: 0, prefab: new Prefab('Guard') }]
    });

    const saveString = prefab.toSaveString();

    expect(saveString).toStrictEqual(
      '56698,204,56698,0,0,0,0,0,0,1065353216,1065353216,2290978823,418,0,0,0,0,0,0,1065353216,0,0,0,0,0,0,363610349,2147483664,536870912,0,0,7525,48,3198024656,12,805306368,85945344,459223,2147483648,0,134217728,1614,3221225472,0,0,0,0,0,33292288,33292288,0,0,0,|3,2290978823,1,1454441398,2,4109360768,1,'
    );
  });

  describe('when the binary data does not align to full bytes', () => {
    it('returns a SaveString containing padded bits of the prefab', () => {
      const prefab = new Prefab('Torch', {
        components: {
          NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
          Pickup: new PickupComponent({ version: 2 })
        },
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              HeatSourceBase: new HeatSourceBaseComponent({
                version: 1,
                isLit: true
              })
            }
          })
        },
        children: [{ parentHash: 0, prefab: new Prefab('Guard') }]
      });

      const spy = vi.spyOn(prefab, 'toBinary');
      spy.mockImplementationOnce(
        /* Added 25 false bits at the end to force Prefab.toSaveString() to skip bit alignment. */
        () =>
          '000000000000000011011101011110100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111110000000000000000000000000111111100000000000000000000000100010001000110110010000000001110000000000000000000000011010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101011010110001000000111011011000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001110101100101000000000000000000000000001100001011111010011101111110111101000000000000000000000000000000001100001100000000000000000000000000000000010100011111011011000000000000000000000001110000000111010111100000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000110010011101100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000001111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' as BinaryString
      );

      const saveString = prefab.toSaveString();

      expect(saveString).toStrictEqual(
        '56698,204,56698,0,0,0,0,0,0,1065353216,1065353216,2290978823,418,0,0,0,0,0,0,1065353216,0,0,0,0,0,0,363610349,2147483664,536870912,0,0,7525,48,3198024656,12,805306368,85945344,459223,2147483648,0,134217728,1614,3221225472,0,0,0,0,0,33292288,33292288,0,0,0,|3,2290978823,1,1454441398,2,4109360768,1,'
      );
    });
  });
});
