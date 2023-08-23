# Function: `readComponents`

Reads all components from the given `BinaryReader` and returns a `PrefabComponents` object.

## Signatures

### `readComponents(reader, versions?)`

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` containing the components binary data.
- `versions` (optional, default latest) `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: [`<PrefabComponents>`](../src/types/PrefabComponents.ts)

```ts
import { BinaryReader, readComponents } from 'att-string-transcoder';

const reader = new BinaryReader('...');

const versions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

const component = readComponents(reader, versions);
```
