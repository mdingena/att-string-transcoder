# Class: `DoorComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<DoorComponentProps>`](#doorcomponentprops)
- [Constructors](#constructors)
  - [`new DoorComponent(props)`](#new-doorcomponentprops)
  - [`DoorComponent.fromBinary(reader, version)`](#doorcomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`isOpen`](#isopen)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<DoorComponentProps>`

A portion of the configuration object to pass to the `DoorComponent` constructor.

```ts
type DoorComponentPropsV1 = {
  isOpen?: number | undefined;
};

type DoorComponentProps = DoorComponentPropsV1;
```

#### Since v1

- `isOpen` (optional, default `false`) `<boolean>`

## Constructors

### `new DoorComponent(props)`

Creates a versioned component without deserialising its data.

- `props` [`<ComponentProps & DoorComponentProps>`](#types) Configuration of the component to create.
- Returns: `<DoorComponent>`

```ts
import { DoorComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DoorComponent({ version: componentVersion });
```

---

### `DoorComponent.fromBinary(reader, version)`

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

### `isOpen`

Reveals the open state of this component's prefab

- Since: `v1`
- `<boolean>`

```ts
import { DoorComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DoorComponent({ version: componentVersion });

const isOpen = component.isOpen;
// `isOpen` is `false`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
