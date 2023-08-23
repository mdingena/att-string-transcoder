# Class: `PickupDockComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<PickupDockComponentProps>`](#pickupdockcomponentprops)
- [Constructors](#constructors)
  - [`new PickupDockComponent(props)`](#new-pickupdockcomponentprops)
  - [`PickupDockComponent.fromBinary(reader, version)`](#pickupdockcomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`dockedTypeHash`](#dockedtypehash)
  - [`quantity`](#quantity)
  - [`childIndex`](#childindex)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<PickupDockComponentProps>`

A portion of the configuration object to pass to the `PickupDockComponent` constructor.

```ts
type PickupDockComponentPropsV2 = {
  dockedTypeHash?: number | undefined;
  quantity?: number | undefined;
  childIndex?: number | undefined;
};

type PickupDockComponentProps = PickupDockComponentPropsV2;
```

#### Since v2

- `dockedTypeHash` (optional, default `0`) `<number>`
- `quantity` (optional, default `1`) `<number>`
- `childIndex` (optional, default `0`) `<number>`

## Constructors

### `new PickupDockComponent(props)`

Creates a versioned `PickupDock` component.

- `props` [`<ComponentProps & PickupDockComponentProps>`](#types) Configuration of the component to create.
- Returns: `<PickupDockComponent>`

```ts
import { PickupDockComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupDockComponent({ version: componentVersion });
```

---

### `PickupDockComponent.fromBinary(reader, version)`

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

### `dockedTypeHash`

- Since: `v2`
- `<number>`

```ts
import { PickupDockComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupDockComponent({ version: componentVersion });

const dockedTypeHash = component.dockedTypeHash;
// `dockedTypeHash` is `0`
```

---

### `quantity`

- Since: `v2`
- `<number>`

```ts
import { PickupDockComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupDockComponent({ version: componentVersion });

const quantity = component.quantity;
// `quantity` is `1`
```

---

### `childIndex`

- Since: `v2`
- `<number>`

```ts
import { PickupDockComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupDockComponent({ version: componentVersion });

const childIndex = component.childIndex;
// `childIndex` is `0`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
