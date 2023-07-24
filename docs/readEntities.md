# Function: `readEntities`

Reads all entities from the given `BinaryReader` and returns a `PrefabEntities` object.

## Signatures

### `readEntities(reader, prefabName, componentVersions?)`

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` containing the entities binary data.
- `prefabName` [`ATTPrefabName`](./ATTPrefabName.md) The name of the parent prefab.
- `componentVersions` (optional, default latest) `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: [`<PrefabEntities>`](../src/types/PrefabEntities.ts)

```ts
import { BinaryReader, readEntities, type ATTPrefabName } from 'att-string-transcoder';

const reader = new BinaryReader('...');
const prefabName = 'Handle_Short' as ATTPrefabName;

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

const component = readEntities(reader, prefabName, componentVersions);
```
