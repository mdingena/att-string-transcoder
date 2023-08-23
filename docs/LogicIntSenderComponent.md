# Class: `LogicIntSenderComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicIntSenderComponentProps>`](#logicintsendercomponentprops)
- [Constructors](#constructors)
  - [`new LogicIntSenderComponent(props)`](#new-logicintsendercomponentprops)
  - [`LogicIntSenderComponent.fromBinary(reader, version)`](#logicintsendercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`updatedValue`](#updatedvalue)
  - [`changedExternally`](#changedexternally)
  - [`identifier`](#identifier)
  - [`value`](#value)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<LogicIntSenderComponentProps>`

A portion of the configuration object to pass to the `LogicIntSenderComponent` constructor.

```ts
type LogicIntSenderComponentPropsV1 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: number | undefined;
};

type LogicIntSenderComponentProps = LogicIntSenderComponentPropsV1;
```

#### Since v1

- `updatedValue` (optional, default `3171294583`) `<number>`
- `changedExternally` (optional, default `32`) `<number>`
- `identifier` (optional, default `0`) `<number>`
- `value` (optional, default `false`) `<intean>`

## Constructors

### `new LogicIntSenderComponent(props)`

Creates a versioned `LogicIntSender` component.

- `props` [`<ComponentProps & LogicIntSenderComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicIntSenderComponent>`

```ts
import { LogicIntSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntSenderComponent({ version: componentVersion });
```

---

### `LogicIntSenderComponent.fromBinary(reader, version)`

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

### `updatedValue`

We're not quite sure what this property does.

- Since: `v1`
- `<number>`

```ts
import { LogicIntSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntSenderComponent({ version: componentVersion });

const updatedValue = component.updatedValue;
// `updatedValue` is `3171294583`
```

---

### `changedExternally`

We're not quite sure what this property does.

- Since: `v1`
- `<number>`

```ts
import { LogicIntSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntSenderComponent({ version: componentVersion });

const changedExternally = component.changedExternally;
// `changedExternally` is `32`
```

---

### `identifier`

The identifier of this `LogicIntSender` that a `LogicIntReceiver` connects to.

- Since: `v1`
- `<number>`

```ts
import { LogicIntSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntSenderComponent({ version: componentVersion });

const identifier = component.identifier;
// `identifier` is `0`
```

---

### `value`

The output value of this `LogicIntSender` that a `LogicIntReceiver` reads as its input.

- Since: `v1`
- `<number>`

```ts
import { LogicIntSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntSenderComponent({ version: componentVersion });

const value = component.value;
// `value` is `0`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
