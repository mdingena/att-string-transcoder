import { createPrefab, Prefab, NetworkRigidbody, PhysicalMaterialPartHash } from '../src';

const PREFAB = Prefab.Handle_Short;

describe('createPrefab', () => {
  it('creates a prefab factory', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory).toHaveProperty(['data', 'prefabObject', 'hash'], Prefab.Handle_Short.hash);
  });

  it('sets new position', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory.data.prefabObject.position).toBe(undefined);

    const x = 0,
      y = 69,
      z = 420,
      position = { x, y, z };

    prefabFactory.setPosition(x, y, z);

    expect(prefabFactory.data.prefabObject.position).toStrictEqual(position);
    expect((prefabFactory.data.components!.NetworkRigidbody as NetworkRigidbody).position).toStrictEqual(position);
  });

  it('sets new rotation', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory.data.prefabObject.rotation).toBe(undefined);

    const x = 0,
      y = 0.69,
      z = 0.42,
      w = 0.123,
      rotation = { x, y, z, w };

    prefabFactory.setRotation(x, y, z, w);

    expect(prefabFactory.data.prefabObject.rotation).toStrictEqual(rotation);
    expect((prefabFactory.data.components!.NetworkRigidbody as NetworkRigidbody).rotation).toStrictEqual(rotation);
  });

  it('sets it on fire', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory.data.embeddedEntities).toStrictEqual({});

    prefabFactory.setOnFire();

    expect(prefabFactory.data.embeddedEntities).toStrictEqual({
      Fire: {
        isAlive: true,
        components: {
          HeatSourceBase: {
            isLit: true
          }
        }
      }
    });
  });

  it('uses a slot', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory.data.childPrefabs).toStrictEqual([]);

    const guardFactory = createPrefab(Prefab.Guard);
    prefabFactory.useSlot('Slot_PommelType_1', guardFactory);

    expect(prefabFactory.data.childPrefabs).toStrictEqual([
      {
        parentHash: Prefab.Handle_Short.slots.Slot_PommelType_1,
        prefab: guardFactory.data
      }
    ]);
  });

  it('outputs a string', () => {
    const prefabFactory = createPrefab(PREFAB);

    expect(prefabFactory.toString()).toEqual('42230,48,42230,0,0,0,0,0,0,1065353216,1065353216,0,0,0,|0,');
  });
});
