# Class: `WoodcutTreeComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<WoodcutTreeComponentProps>`](#basicdecaycomponentprops)
- [Constructors](#constructors)
  - [`new WoodcutTreeComponent(props)`](#new-basicdecaycomponentprops)
  - [`WoodcutTreeComponent.fromBinary(reader, version)`](#basicdecaycomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`presetHash`](#presethash)
  - [`speciesHash`](#specieshash)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<WoodcutTreeComponentProps>`

A portion of the configuration object to pass to the `WoodcutTreeComponent` constructor.

```ts
type WoodcutTreeComponentPropsV3 = {
  presetHash?: 0 | PresetHash | undefined;
  speciesHash?: SpeciesHash | undefined;
};

type WoodcutTreeComponentProps = WoodcutTreeComponentPropsV3;
```

#### Since v3

- `presetHash` (optional, default `0`) `<number>`
- `speciesHash` (optional, default `11232`) [`<SpeciesHash>`](../src/types/SpeciesHash.ts)

## Constructors

### `new WoodcutTreeComponent(props)`

Creates a versioned `WoodcutTree` component.

- `props` [`<ComponentProps & WoodcutTreeComponentProps>`](#types) Configuration of the component to create.
- Returns: `<WoodcutTreeComponent>`

```ts
import { WoodcutTreeComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new WoodcutTreeComponent({ version: componentVersion });
```

---

### `WoodcutTreeComponent.fromBinary(reader, version)`

See [`Component.fromBinary(reader, version)`](./Component.md#componentfrombinaryreader-version)

## Properties

Note that the following properties are sorted in order of appearance when decoding component binary data.

### `hash`

See [`Component.hash`](./Component.md#hash)

---

### `name`

See [`Component.name`](./Component.md#name)

---

### `version`

See [`Component.version`](./Component.md#version)

---

### `presetHash`

- Since: `v3`
- `<number>`

```ts
import { WoodcutTreeComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new WoodcutTreeComponent({ version: componentVersion });

const presetHash = component.presetHash;
// `presetHash` is `0`
```

---

### `speciesHash`

The hash of the species of the tree prefab this component is attached to.

- Since: `v3`
- [`<SpeciesHash>`](../src/types/SpeciesHash.ts)

```ts
import { WoodcutTreeComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new WoodcutTreeComponent({ version: componentVersion });

const speciesHash = component.speciesHash;
// `speciesHash` is `11232`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
