import { createString } from '../src';
import { handle, litGrassClump } from './data/unencodedPrefabObjects';
import { grassClumpOnFire, shortHandleWithLargeGuardAndLargeBlade } from './data/encodedPrefabObjects';

describe('createString', () => {
  it('encodes a prefab object', () => {
    const encodedPrefab = createString(handle);

    expect(encodedPrefab).toStrictEqual(shortHandleWithLargeGuardAndLargeBlade);
  });

  it('creates a version string', () => {
    const encodedPrefab = createString(litGrassClump);

    expect(encodedPrefab).toStrictEqual(grassClumpOnFire);
  });
});
