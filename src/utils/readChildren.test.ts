import type { PrefabChild } from '../types/PrefabChild.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { Prefab } from '../Prefab.js';
import { readChildren } from './readChildren.js';

describe('readChildren()', () => {
  let fastForwardedReader: BinaryReader;
  const child = new Prefab('Guard');
  const parent = new Prefab('Handle_Short', {
    children: [
      {
        parentHash: 6136,
        prefab: child
      }
    ]
  });

  beforeEach(() => {
    const saveString = parent.toSaveString();
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
    reader.readUnsignedInteger(); // Entity hash === termination hash.

    fastForwardedReader = reader;
  });

  it('returns PrefabChild[]', () => {
    const children = readChildren(fastForwardedReader);

    expect(children).toStrictEqual<PrefabChild[]>([
      {
        parentHash: 6136,
        prefab: child
      }
    ]);
  });
});
