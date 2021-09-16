import { createPrefab, PrefabHash, PrefabFactory, NetworkRigidbody } from '../build';

let prefabFactory: PrefabFactory;

describe('createPrefab', () => {
  beforeEach(() => {
    prefabFactory = createPrefab(PrefabHash.Handle_Short);
  });

  it('creates a prefab factory', () => {
    expect(prefabFactory).toHaveProperty(['prefab', 'prefabObject', 'hash'], PrefabHash.Handle_Short);
  });

  it('sets new position', () => {
    expect(prefabFactory.prefab.prefabObject.position).toBe(undefined);

    const x = 0,
      y = 69,
      z = 420,
      position = { x, y, z };

    prefabFactory.setPosition(x, y, z);

    expect(prefabFactory.prefab.prefabObject.position).toStrictEqual(position);
    expect((prefabFactory.prefab.components!.NetworkRigidbody as NetworkRigidbody).position).toStrictEqual(position);
  });

  it('sets new rotation', () => {
    expect(prefabFactory.prefab.prefabObject.rotation).toBe(undefined);

    const x = 0,
      y = 0.69,
      z = 0.42,
      w = 0.123,
      rotation = { x, y, z, w };

    prefabFactory.setRotation(x, y, z, w);

    expect(prefabFactory.prefab.prefabObject.rotation).toStrictEqual(rotation);
    expect((prefabFactory.prefab.components!.NetworkRigidbody as NetworkRigidbody).rotation).toStrictEqual(rotation);
  });

  it('uses a slot', () => {
    expect(prefabFactory.prefab.childPrefabs).toStrictEqual([]);

    const slotHash = 6134;
    const guardFactory = createPrefab(PrefabHash.Guard);
    prefabFactory.useSlot(slotHash, guardFactory);

    expect(prefabFactory.prefab.childPrefabs).toStrictEqual([
      {
        parentHash: slotHash,
        prefab: guardFactory.prefab
      }
    ]);
  });

  it('outputs a string', () => {
    expect(prefabFactory.toString()).toEqual('42230,48,42230,0,0,0,0,0,0,1065353216,1065353216,0,0,0,|0,');
  });
});
