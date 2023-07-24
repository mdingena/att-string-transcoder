# Class: `BasicDecayComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<BasicDecayComponentProps>`](#unsupportedcomponentprops)
- [Constructors](#constructors)
  - [`new BasicDecayComponent(props)`](#new-basicdecaycomponentprops)
  - [`BasicDecayComponent.fromBinary(reader, version)`](#basicdecaycomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`isDisabled`](#isdisabled)
  - [`timelineEntry`](#timelineentry)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<BasicDecayComponentProps>`

A portion of the configuration object to pass to the `BasicDecayComponent` constructor.

```ts
type BasicDecayComponentPropsV3 = {
  isDisabled?: boolean | undefined;
  timelineEntry?: number | undefined;
};

type BasicDecayComponentProps = BasicDecayComponentPropsV3;
```

#### Since v3

- `isDisabled` (optional, default `true`) `<boolean>`
- `timelineEntry` (optional, default `31557600000000000`) `<number>`

## Constructors

### `new BasicDecayComponent(props)`

Creates a versioned component without deserialising its data.

- `props` [`<ComponentProps & BasicDecayComponentProps>`](#types) Configuration of the component to create.
- Returns: `<BasicDecayComponent>`

```ts
import { BasicDecayComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new BasicDecayComponent({ version: componentVersion });
```

---

### `BasicDecayComponent.fromBinary(reader, version)`

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

### `isDisabled`

- `<boolean>`

```ts
import { BasicDecayComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new BasicDecayComponent({ version: componentVersion });

const isDisabled = component.isDisabled;
// `isDisabled` is `true`
```

---

### `timelineEntry`

- `<number>`

```ts
import { BasicDecayComponent } from 'att-string-transcoder';

const componentVersion = 3;
const component = new BasicDecayComponent({ version: componentVersion });

const timelineEntry = component.timelineEntry;
// `timelineEntry` is `31557600000000000`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
