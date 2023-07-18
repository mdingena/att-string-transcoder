# `isATTPrefabName`

Asserts if a `<string>` is an [`<ATTPrefabName>`](./ATTPrefabName.md).

## Usage

```ts
import { isATTPrefabName } from 'att-string-transcoder';

const prefabName = 'Anvil';
// `prefabName` is of type `string`.

if (isATTPrefabName(prefabName)) {
  // `prefabName` is of type `ATTPrefabName`.
}
```
