# Function: `isSavablecomponent`

Returns whether or not the given component name belongs to a component that is normally savable on the given prefab hash or name.

## Signatures

### `isSavablecomponent(componentName, prefabHash)`

- `componentName` [`<keyof SupportedPrefabComponents>`](../src/types/SupportedPrefabComponents.ts) The name of the component.
- `prefabHash` [`<ATTPrefabHash>`](./ATTPrefabHash.md) The hash of the parent prefab.
- Returns: `<boolean>`

```ts
import { isSavableComponent } from 'att-string-transcoder';

if (isSavableComponent('NetworkRigidbody', 42230)) {
  // `Handle_Short` can save `NetworkRigidbody` component data.
}
```

### `isSavablecomponent(componentName, prefabName)`

- `componentName` [`<keyof SupportedPrefabComponents>`](../src/types/SupportedPrefabComponents.ts) The name of the component.
- `prefabName` [`<ATTPrefabName>`](./ATTPrefabName.md) The name of the parent prefab.
- Returns: `<boolean>`

```ts
import { isSavablecomponent } from 'att-string-transcoder';

if (isSavableComponent('NetworkRigidbody', 'Handle_Short')) {
  // `Handle_Short` can save `NetworkRigidbody` component data.
}
```
