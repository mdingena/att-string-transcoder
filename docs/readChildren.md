# Function: `readChildren`

Reads all child prefabs from the given `BinaryReader` and returns an array of `PrefabChild`.

## Signatures

### `readChildren(reader, componentVersions?)`

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` containing the child prefab binary data.
- `componentVersions` (optional, default latest) `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: [`<Array<PrefabChild>>`](../src/types/PrefabChild.ts)

```ts
import { BinaryReader, readChildren } from 'att-string-transcoder';

const reader = new BinaryReader('...');

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

const children = readChildren(reader, componentVersions);
```
