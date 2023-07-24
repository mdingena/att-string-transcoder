# Class: `UnsupportedComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<UnsupportedComponentProps>`](#unsupportedcomponentprops)
- [Constructors](#constructors)
  - [`new Component(props)`](#new-componentprops)
  - [`Component.fromBinary(reader, version)`](#componentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`rawData`](#rawdata)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<UnsupportedComponentProps>`

A portion of the configuration object to pass to the `UnsupportedComponent` constructor.

## Constructors

### `new UnsupportedComponent(props)`

Creates a versioned component without deserialising its data.

- `props` [`<ComponentProps & UnsupportedComponentProps>`](#types) Configuration of the component to create.
- Returns: `<UnsupportedComponent>`

```ts
import { UnsupportedComponent } from 'att-string-transcoder';

const hash = 1337;
const name = 'SomeUnrecognisedComponentName';
const rawData = '11110111001100010000';
const version = 1;

const component = new UnsupportedComponent({ hash, name, rawData, version });
```

---

### `UnsupportedComponent.fromBinary(reader, version, hash, name, dataLength)`

Reads the binary string data and returns an instantiated component.

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` instance containing the entity binary data.
- `version` `<number>` The version of the component for interpreting the binary data.
- `hash` `<number>` The hash of the component.
- `name` `<string>` The name of the component.
- `dataLength` `<number>` The length of the component's binary data.

```ts
import { BinaryReader, UnsupportedComponent } from 'att-string-transcoder';

const reader = new BinaryReader('...');
const componentVersion = 1;
const componentHash = 1337;
const componentName = 'SomeUnrecognisedComponentName';
const componentDataLength = 20;

const component = UnsupportedComponent.fromBinary(
  reader,
  componentVersion,
  componentHash,
  componentName,
  componentDataLength
);
```

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

### `rawData`

The component's serialised data.

- [`<BinaryString>`](./BinaryString.md) The component's serialised data.

```ts
import { UnsupportedComponent } from 'att-string-transcoder';

const hash = 1337;
const name = 'SomeUnrecognisedComponentName';
const rawData = '11110111001100010000';
const version = 1;

const component = new UnsupportedComponent({ hash, name, rawData, version });

const rawData = component.rawData;
// `rawData` is `'11110111001100010000'`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
