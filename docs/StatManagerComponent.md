# Class: `StatManagerComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<StatManagerComponentProps>`](#statmanagercomponentprops)
- [Constructors](#constructors)
  - [`new StatManagerComponent(props)`](#new-statmanagercomponentprops)
  - [`StatManagerComponent.fromBinary(reader, version)`](#statmanagercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`stats`](#stats)
  - [`modifiers`](#modifiers)
  - [`indirectStatModifiers`](#indirectstatmodifiers)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<StatManagerComponentProps>`

A portion of the configuration object to pass to the `StatManagerComponent` constructor.

```ts
type Stat = null | {
  hash: number;
  baseFlat: number;
};

type TimedModifier = null | {
  hash: number;
  value: number;
  isMultiplier: boolean;
  time: number;
};

type IndirectModifierSaveData = {
  valueOverDurationHash: number;
  baseValue: number;
  duration: number;
  tick: number;
};

type IndirectStatModifier = null | {
  hash: number;
  time: number;
  modifiers: IndirectModifierSaveData[];
};

type StatManagerComponentPropsV2 = {
  stats?: Stat[] | undefined;
  modifiers?: TimedModifier[] | undefined;
  indirectStatModifiers?: IndirectStatModifier[] | undefined;
};

type StatManagerComponentProps = StatManagerComponentPropsV2;
```

#### Since v2

- `stats` (optional, default `[]`) `<Array<Stat>>`
- `modifiers` (optional, default `[]`) `<Array<TimedModifier>>`
- `indirectStatModifiers` (optional, default `[]`) `<Array<IndirectStatModifier>>`

## Constructors

### `new StatManagerComponent(props)`

Creates a versioned `StatManager` component.

- `props` [`<ComponentProps & StatManagerComponentProps>`](#types) Configuration of the component to create.
- Returns: `<StatManagerComponent>`

```ts
import { StatManagerComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new StatManagerComponent({ version: componentVersion });
```

---

### `StatManagerComponent.fromBinary(reader, version)`

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

### `stats`

- Since: `v2`
- `<Array<Stat>>`

```ts
import { StatManagerComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new StatManagerComponent({ version: componentVersion });

const stats = component.stats;
// `stats` is `[]`
```

---

### `modifiers`

- Since: `v2`
- `<Array<TimedModifier>>`

```ts
import { StatManagerComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new StatManagerComponent({ version: componentVersion });

const modifiers = component.modifiers;
// `modifiers` is `[]`
```

---

### `indirectStatModifiers`

- Since: `v2`
- `<Array<IndirectStatModifier>>`

```ts
import { StatManagerComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new StatManagerComponent({ version: componentVersion });

const indirectStatModifiers = component.indirectStatModifiers;
// `indirectStatModifiers` is `[]`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
