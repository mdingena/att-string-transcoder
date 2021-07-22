import { createString } from '../build';
import { handle } from './data/unencodedPrefabObjects';
import { shortHandleWithLargeGuardAndLargeBlade } from './data/encodedPrefabObjects';

describe('createString', () => {
  it('should encode a prefab object', () => {
    const encodedPrefab = createString(handle);

    expect(encodedPrefab).toStrictEqual(shortHandleWithLargeGuardAndLargeBlade);
  });
});
