# Class: `FireComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<FireComponentProps>`](#firecomponentprops)
- [Constructors](#constructors)
  - [`new FireComponent(props)`](#new-firecomponentprops)
  - [`FireComponent.fromBinary(reader, version)`](#firecomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`fuelConsumptionProgress`](#fuelconsumptionprogress)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<FireComponentProps>`

A portion of the configuration object to pass to the `FireComponent` constructor.

```ts
type FireComponentPropsV1 = {
  fuelConsumptionProgress?: number | undefined;
};

type FireComponentProps = FireComponentPropsV1;
```

#### Since v1

- `fuelConsumptionProgress` (optional, default `1`) `<number>`

## Constructors

### `new FireComponent(props)`

Creates a versioned component without deserialising its data.

- `props` [`<ComponentProps & FireComponentProps>`](#types) Configuration of the component to create.
- Returns: `<FireComponent>`

```ts
import { FireComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FireComponent({ version: componentVersion });
```

---

### `FireComponent.fromBinary(reader, version)`

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

### `fuelConsumptionProgress`

The progress of the consumption of fuel attached to this component's prefab.

- Since: `v1`
- `<number>` A number between `0` and `1` (inclusive).

```ts
import { FireComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FireComponent({ version: componentVersion });

const fuelConsumptionProgress = component.fuelConsumptionProgress;
// `fuelConsumptionProgress` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
