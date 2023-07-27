# Class: `LogicBoolSenderComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicBoolSenderComponentProps>`](#logicboolsendercomponentprops)
- [Constructors](#constructors)
  - [`new LogicBoolSenderComponent(props)`](#new-logicboolsendercomponentprops)
  - [`LogicBoolSenderComponent.fromBinary(reader, version)`](#logicboolsendercomponentfrombinaryreader-version)
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

### `<LogicBoolSenderComponentProps>`

A portion of the configuration object to pass to the `LogicBoolSenderComponent` constructor.

```ts
type LogicBoolSenderComponentPropsV2 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: boolean | undefined;
};

type LogicBoolSenderComponentProps = LogicBoolSenderComponentPropsV2;
```

#### Since v2

- `updatedValue` (optional, default `3171294583`) `<number>`
- `changedExternally` (optional, default `32`) `<number>`
- `identifier` (optional, default `0`) `<number>`
- `value` (optional, default `false`) `<boolean>`

## Constructors

### `new LogicBoolSenderComponent(props)`

Creates a versioned `LogicBoolSender` component.

- `props` [`<ComponentProps & LogicBoolSenderComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicBoolSenderComponent>`

```ts
import { LogicBoolSenderComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicBoolSenderComponent({ version: componentVersion });
```

---

### `LogicBoolSenderComponent.fromBinary(reader, version)`

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

- Since: `v2`
- `<number>`

```ts
import { LogicBoolSenderComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicBoolSenderComponent({ version: componentVersion });

const updatedValue = component.updatedValue;
// `updatedValue` is `3171294583`
```

---

### `changedExternally`

We're not quite sure what this property does.

- Since: `v2`
- `<number>`

```ts
import { LogicBoolSenderComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicBoolSenderComponent({ version: componentVersion });

const changedExternally = component.changedExternally;
// `changedExternally` is `32`
```

---

### `identifier`

The identifier of this `LogicBoolSender` that a `LogicBoolReceiver` connects to.

- Since: `v2`
- `<number>`

```ts
import { LogicBoolSenderComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicBoolSenderComponent({ version: componentVersion });

const identifier = component.identifier;
// `identifier` is `0`
```

---

### `value`

The output value of this `LogicBoolSender` that a `LogicBoolReceiver` reads as its input.

- Since: `v2`
- `<number>`

```ts
import { LogicBoolSenderComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicBoolSenderComponent({ version: componentVersion });

const value = component.value;
// `value` is `false`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
