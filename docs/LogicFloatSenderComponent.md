# Class: `LogicFloatSenderComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicFloatSenderComponentProps>`](#logicfloatsendercomponentprops)
- [Constructors](#constructors)
  - [`new LogicFloatSenderComponent(props)`](#new-logicfloatsendercomponentprops)
  - [`LogicFloatSenderComponent.fromBinary(reader, version)`](#logicfloatsendercomponentfrombinaryreader-version)
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

### `<LogicFloatSenderComponentProps>`

A portion of the configuration object to pass to the `LogicFloatSenderComponent` constructor.

```ts
type LogicFloatSenderComponentPropsV1 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: float | undefined;
};

type LogicFloatSenderComponentProps = LogicFloatSenderComponentPropsV1;
```

#### Since v1

- `updatedValue` (optional, default `3171294583`) `<number>`
- `changedExternally` (optional, default `32`) `<number>`
- `identifier` (optional, default `0`) `<number>`
- `value` (optional, default `0`) `<float>`

## Constructors

### `new LogicFloatSenderComponent(props)`

Creates a versioned `LogicFloatSender` component.

- `props` [`<ComponentProps & LogicFloatSenderComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicFloatSenderComponent>`

```ts
import { LogicFloatSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatSenderComponent({ version: componentVersion });
```

---

### `LogicFloatSenderComponent.fromBinary(reader, version)`

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
import { LogicFloatSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatSenderComponent({ version: componentVersion });

const updatedValue = component.updatedValue;
// `updatedValue` is `3171294583`
```

---

### `changedExternally`

We're not quite sure what this property does.

- Since: `v1`
- `<number>`

```ts
import { LogicFloatSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatSenderComponent({ version: componentVersion });

const changedExternally = component.changedExternally;
// `changedExternally` is `32`
```

---

### `identifier`

The identifier of this `LogicFloatSender` that a `LogicFloatReceiver` connects to.

- Since: `v1`
- `<number>`

```ts
import { LogicFloatSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatSenderComponent({ version: componentVersion });

const identifier = component.identifier;
// `identifier` is `0`
```

---

### `value`

The output value of this `LogicFloatSender` that a `LogicFloatReceiver` reads as its input.

- Since: `v1`
- `<number>`

```ts
import { LogicFloatSenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatSenderComponent({ version: componentVersion });

const value = component.value;
// `value` is `0`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
