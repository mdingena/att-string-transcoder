# Function: `writeChildren`

Writes given child prefabs to the given `BinaryWriter`.

## Signatures

### `writeChildren(writer, children, componentVersions)`

- `writer` [`BinaryWriter`](./BinaryWriter.md) The `BinaryWriter` to store the binary data into.
- `children` [`<Array<PrefabChild>>`](../src/types/PrefabChild.ts) The child prefabs to store.
- `componentVersions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: `<void>`

```ts
import { BinaryWriter, writeChildren } from 'att-string-transcoder';

const writer = new BinaryWriter();

const children = [
  {
    parentHash: 0,
    prefab: new Prefab('Guard')
  }
];

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

writeChildren(writer, children, componentVersions);
```
