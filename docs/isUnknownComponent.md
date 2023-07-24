# Function: `isUnknownComponent`

Asserts if a `component` is an [`UnsupportedComponent`](./UnsupportedComponent.md).

## Signatures

### `isUnknownComponent(component)`

- `component` [`Component`](./Component.md)
- Returns: `<boolean>`

```ts
import { isUnknownComponent } from 'att-string-transcoder';

if (isUnknownComponent(component)) {
  // `component` is of type `UnsupportedComponent`.
}
```
