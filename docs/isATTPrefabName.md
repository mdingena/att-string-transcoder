# Function: `isATTPrefabName`

Asserts if a `<string>` is an [`<ATTPrefabName>`](./ATTPrefabName.md).

## Signatures

### `isATTPrefabName(name)`

- `name` `<string>` The name of the prefab.
- Returns: `<boolean>`

```ts
import { isATTPrefabName } from 'att-string-transcoder';

let prefabName: string;
prefabName = 'Anvil';
// `prefabName` is of type `string`.

if (isATTPrefabName(prefabName)) {
  // `prefabName` is of type `ATTPrefabName`.
}
```
