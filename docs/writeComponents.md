# Function: `writeComponents`

Writes given components to the given `BinaryWriter`.

## Signatures

### `writeComponents(writer, components, versions)`

- `writer` [`BinaryWriter`](./BinaryWriter.md) The `BinaryWriter` to store the binary data into.
- `components` [`<PrefabComponents>`](../src/types/PrefabComponents.ts) The components to store.
- `versions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: `<void>`

```ts
import { BinaryWriter, NetworkRigidbodyComponent, writeComponents } from 'att-string-transcoder';

const writer = new BinaryWriter();

const components = {
  NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 }),
  Unknown: []
};

const versions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

writeComponents(writer, components, versions);
```
