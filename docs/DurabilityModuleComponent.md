# Class: `DurabilityModuleComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<DurabilityModuleComponentProps>`](#durabilitymodulecomponentprops)
- [Constructors](#constructors)
  - [`new DurabilityModuleComponent(props)`](#new-durabilitymodulecomponentprops)
  - [`DurabilityModuleComponent.fromBinary(reader, version)`](#durabilitymodulecomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`integrity`](#integrity)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<DurabilityModuleComponentProps>`

A portion of the configuration object to pass to the `DurabilityModuleComponent` constructor.

```ts
type DurabilityModuleComponentPropsV1 = {
  integrity?: number | undefined;
};

type DurabilityModuleComponentProps = DurabilityModuleComponentPropsV1;
```

#### Since v1

- `integrity` (optional, default `1`) `<number>`

## Constructors

### `new DurabilityModuleComponent(props)`

Creates a versioned component without deserialising its data.

- `props` [`<ComponentProps & DurabilityModuleComponentProps>`](#types) Configuration of the component to create.
- Returns: `<DurabilityModuleComponent>`

```ts
import { DurabilityModuleComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DurabilityModuleComponent({ version: componentVersion });
```

---

### `DurabilityModuleComponent.fromBinary(reader, version)`

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

### `integrity`

The integrity of the prefab this component is attached to.

- `<number>` A number between `0` and `1` (inclusive).

```ts
import { DurabilityModuleComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DurabilityModuleComponent({ version: componentVersion });

const integrity = component.integrity;
// `integrity` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
