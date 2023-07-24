# `isATTPrefabHash(hash)`

Asserts if a `<number>` is an [`<ATTPrefabHash>`](./ATTPrefabHash.md).

## Usage

```ts
import { isATTPrefabHash } from 'att-string-transcoder';

let prefabHash: number;
prefabHash = 23182;
// `prefabHash` is of type `number`.

if (isATTPrefabHash(prefabHash)) {
  // `prefabHash` is of type `ATTPrefabHash`.
}
```
