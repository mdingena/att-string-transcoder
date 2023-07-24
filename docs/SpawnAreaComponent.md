# Class: `SpawnAreaComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<SpawnAreaComponentProps>`](#spawnareacomponentprops)
- [Constructors](#constructors)
  - [`new SpawnAreaComponent(props)`](#new-spawnareacomponentprops)
  - [`SpawnAreaComponent.fromBinary(reader, version)`](#spawnareacomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`size`](#size)
  - [`groundLayers`](#groundlayers)
  - [`avoidLayers`](#avoidlayers)
  - [`isAligningNormal`](#isaligningnormal)
  - [`maxAcceptableAngleDot`](#maxacceptableangledot)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<SpawnAreaComponentProps>`

A portion of the configuration object to pass to the `SpawnAreaComponent` constructor.

```ts
type SpawnAreaComponentPropsV1 = {
  size?: number | undefined;
  groundLayers?: number | undefined;
  avoidLayers?: number | undefined;
  isAligningNormal?: boolean | undefined;
  maxAcceptableAngleDot?: number | undefined;
};

type SpawnAreaComponentProps = SpawnAreaComponentPropsV1;
```

#### Since v1

- `size` (optional, default `5`) `<number>`
- `groundLayers` (optional, default `1280`) `<number>`
- `avoidLayers` (optional, default `8721`) `<number>`
- `isAligningNormal` (optional, default `false`) `<boolean>`
- `maxAcceptableAngleDot` (optional, default `-1`) `<number>`

## Constructors

### `new SpawnAreaComponent(props)`

Creates a versioned `SpawnArea` component.

- `props` [`<ComponentProps & SpawnAreaComponentProps>`](#types) Configuration of the component to create.
- Returns: `<SpawnAreaComponent>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });
```

---

### `SpawnAreaComponent.fromBinary(reader, version)`

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

### `size`

The size (in metres) of the spawn area of the prefab this component is attached to.

- Since: `v1`
- `<number>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });

const size = component.size;
// `size` is `5`
```

---

### `groundLayers`

- Since: `v1`
- `<number>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });

const groundLayers = component.groundLayers;
// `groundLayers` is `1280`
```

---

### `avoidLayers`

- Since: `v1`
- `<number>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });

const avoidLayers = component.avoidLayers;
// `avoidLayers` is `8721`
```

---

### `isAligningNormal`

- Since: `v1`
- `<boolean>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });

const isAligningNormal = component.isAligningNormal;
// `isAligningNormal` is `false`
```

---

### `maxAcceptableAngleDot`

- Since: `v1`
- `<number>`

```ts
import { SpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SpawnAreaComponent({ version: componentVersion });

const maxAcceptableAngleDot = component.maxAcceptableAngleDot;
// `maxAcceptableAngleDot` is `-1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
