import { createString } from '../build';
import { handle, litGrassClump } from './data/unencodedPrefabObjects';
import { grassClumpOnFire, shortHandleWithLargeGuardAndLargeBlade } from './data/encodedPrefabObjects';

describe('createString', () => {
  it('should encode a prefab object', () => {
    const encodedPrefab = createString(handle);

    expect(encodedPrefab).toStrictEqual(shortHandleWithLargeGuardAndLargeBlade);
  });

  it('should create a version string', () => {
    const encodedPrefab = createString(litGrassClump);

    expect(encodedPrefab).toStrictEqual(grassClumpOnFire);
  });
});
