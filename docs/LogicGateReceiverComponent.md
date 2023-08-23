# Class: `LogicGateReceiverComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicGateReceiverComponentProps>`](#logicgatereceivercomponentprops)
- [Constructors](#constructors)
  - [`new LogicGateReceiverComponent(props)`](#new-logicgatereceivercomponentprops)
  - [`LogicGateReceiverComponent.fromBinary(reader, version)`](#logicgatereceivercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`senders`](#senders)
  - [`operationType`](#operationtype)
  - [`isInversedOutputSaved`](#isinversedoutputsaved)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<LogicGateReceiverComponentProps>`

A portion of the configuration object to pass to the `LogicGateReceiverComponent` constructor.

```ts
type LogicGateReceiverComponentPropsV2 = {
  senders?: number[] | undefined;
  operationType?: LogicOperator | undefined;
  isInversedOutputSaved?: boolean | undefined;
};

type LogicGateReceiverComponentProps = LogicGateReceiverComponentPropsV2;
```

#### Since v2

- `senders` (optional, default `[]`) `<Array<number>>`
- `operationType` (optional, default `0`) [`<LogicOperator>`](../src/types/LogicOperator.ts)
- `isInversedOutputSaved` (optional, default `false`) `<boolean>`

## Constructors

### `new LogicGateReceiverComponent(props)`

Creates a versioned `LogicGateReceiver` component.

- `props` [`<ComponentProps & LogicGateReceiverComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicGateReceiverComponent>`

```ts
import { LogicGateReceiverComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicGateReceiverComponent({ version: componentVersion });
```

---

### `LogicGateReceiverComponent.fromBinary(reader, version)`

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

### `senders`

The identifiers of the `Logic*Sender` components that are connected to this `LogicGateReceiver`.

- Since: `v2`
- `<Array<number>>`

```ts
import { LogicGateReceiverComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicGateReceiverComponent({ version: componentVersion });

const senders = component.senders;
// `senders` is `[]`
```

---

### `operationType`

The type of operation to perform on the received inputs.

- Since: `v2`
- [`<LogicOperator>`](../src/types/LogicOperator.ts)

```ts
import { LogicGateReceiverComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicGateReceiverComponent({ version: componentVersion });

const operationType = component.operationType;
// `operationType` is `0` (AND)
```

---

### `isInversedOutputSaved`

Whether to inverse the output of this gate.

- Since: `v2`
- `<boolean>`

```ts
import { LogicGateReceiverComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new LogicGateReceiverComponent({ version: componentVersion });

const isInversedOutputSaved = component.isInversedOutputSaved;
// `isInversedOutputSaved` is `false`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
