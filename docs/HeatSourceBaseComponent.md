# Class: `HeatSourceBaseComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<HeatSourceBaseComponentProps>`](#heatsourcebasecomponentprops)
- [Constructors](#constructors)
  - [`new HeatSourceBaseComponent(props)`](#new-heatsourcebasecomponentprops)
  - [`HeatSourceBaseComponent.fromBinary(reader, version)`](#heatsourcebasecomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`isLit`](#islit)
  - [`progress`](#progress)
  - [`time`](#time)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<HeatSourceBaseComponentProps>`

A portion of the configuration object to pass to the `HeatSourceBaseComponent` constructor.

```ts
type HeatSourceBaseComponentPropsV1 = {
  isLit?: boolean | undefined;
  progress?: number | undefined;
  time?: number | undefined;
};

export type HeatSourceBaseComponentProps = HeatSourceBaseComponentPropsV1;
```

#### Since v1

- `isLit` (optional, default `true`) `<boolean>`
- `progress` (optional, default `0`) `<number>`
- `time` (optional, default `31557600000000000`) `<number>`

## Constructors

### `new HeatSourceBaseComponent(props)`

Creates a versioned `HeatSourceBase` component.

- `props` [`<ComponentProps & HeatSourceBaseComponentProps>`](#types) Configuration of the component to create.
- Returns: `<HeatSourceBaseComponent>`

```ts
import { HeatSourceBaseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new HeatSourceBaseComponent({ version: componentVersion });
```

---

### `HeatSourceBaseComponent.fromBinary(reader, version)`

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

### `isLit`

Whether this heat source is lit and active or not.

- Since: `v1`
- `<boolean>`

```ts
import { HeatSourceBaseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new HeatSourceBaseComponent({ version: componentVersion });

const isLit = component.isLit;
// `isLit` is `true`
```

---

### `progress`

Progress of the heat source until extinguishing.

- Since: `v1`
- `<number>` A number between `0` and `1` (inclusive).

```ts
import { HeatSourceBaseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new HeatSourceBaseComponent({ version: componentVersion });

const progress = component.progress;
// `progress` is `0`
```

---

### `time`

- Since: `v1`
- `<number>`

```ts
import { HeatSourceBaseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new HeatSourceBaseComponent({ version: componentVersion });

const time = component.time;
// `time` is `31557600000000000`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
