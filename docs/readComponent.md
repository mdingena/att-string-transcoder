# Function: `readComponent`

Reads next component from the given `BinaryReader` and returns a `Component` instance.

## Signatures

### `readComponent(reader, hash, name, version)`

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` containing the component binary data.
- `hash` `<number>` The hash of the component.
- `name` `<string>` The name of the component.
- `version` `<number>` The version of the component.
- Returns: [`<Component>`](./Component.md)

```ts
import { BinaryReader, readComponent } from 'att-string-transcoder';

const reader = new BinaryReader('...');
const hash = 2290978823;
const name = 'NetworkRigidbody';
const version = 1;

const component = readComponent(reader, hash, name, version);
```
