# Function: `writeEntities`

Writes given entities to the given `BinaryWriter`.

## Signatures

### `writeEntities(writer, entities, componentVersions)`

- `writer` [`BinaryWriter`](./BinaryWriter.md) The `BinaryWriter` to store the binary data into.
- `entities` [`<PrefabEntities>`](../src/types/PrefabEntities.ts) The entities to store.
- `componentVersions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: `<void>`

```ts
import { BinaryWriter, Entity, writeEntities } from 'att-string-transcoder';

const writer = new BinaryWriter();

const entities = {
  Fire_30100: new Entity<'Torch'>('Fire_30100')
};

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

writeEntities(writer, entities, componentVersions);
```
