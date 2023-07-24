# Class: `FuseComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<FuseComponentProps>`](#fusecomponentprops)
- [Constructors](#constructors)
  - [`new FuseComponent(props)`](#new-fusecomponentprops)
  - [`FuseComponent.fromBinary(reader, version)`](#fusecomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`isFinished`](#isfinished)
  - [`isLit`](#islit)
  - [`currentFuseAmount`](#currentfuseamount)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<FuseComponentProps>`

A portion of the configuration object to pass to the `FuseComponent` constructor.

```ts
type FuseComponentPropsV1 = {
  isFinished?: boolean | undefined;
  isLit?: boolean | undefined;
  currentFuseAmount?: number | undefined;
};

type FuseComponentProps = FuseComponentPropsV1;
```

#### Since v1

- `isFinished` (optional, default `false`) `<boolean>`
- `isLit` (optional, default `false`) `<boolean>`
- `currentFuseAmount` (optional, default `1`) `<number>`

## Constructors

### `new FuseComponent(props)`

Creates a versioned `Fuse` component.

- `props` [`<ComponentProps & FuseComponentProps>`](#types) Configuration of the component to create.
- Returns: `<FuseComponent>`

```ts
import { FuseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FuseComponent({ version: componentVersion });
```

---

### `FuseComponent.fromBinary(reader, version)`

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

### `isFinished`

Whether the fuse is finished or not.

- Since: `v1`
- `<boolean>`

```ts
import { FuseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FuseComponent({ version: componentVersion });

const isFinished = component.isFinished;
// `isFinished` is `false`
```

---

### `isLit`

Whether the fuse is lit or not.

- Since: `v1`
- `<boolean>`

```ts
import { FuseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FuseComponent({ version: componentVersion });

const isLit = component.isLit;
// `isLit` is `false`
```

---

### `currentFuseAmount`

How much of the fuse is left.

- Since: `v1`
- `<number>` A number between `0` and `1` (inclusive).

```ts
import { FuseComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new FuseComponent({ version: componentVersion });

const currentFuseAmount = component.currentFuseAmount;
// `currentFuseAmount` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
