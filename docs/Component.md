# Class: `Component`

- [Types](#types)
  - [`<BaseComponentProps>`](#basecomponentprops)
  - [`<ComponentProps>`](#componentprops)
- [Constructors](#constructors)
  - [`new Component(props)`](#new-componentprops)
  - [`Component.fromBinary(reader, version)`](#componentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<BaseComponentProps>`

A portion of the configuration object to pass to the `Component` constructor. These properties are only present on the base `Component` class constructor and are not used in derived classes.

```ts
type BaseComponentProps = {
  hash: number;
  name: string;
};
```

- `hash` `<number>` The hash of the component.
- `name` `<string>` The name of the component.

---

### `<ComponentProps>`

A portion of the configuration object to pass to the `Component` constructor. These properties are also used in all derived class constructors.

```ts
type ComponentProps = {
  version: number;
};
```

- `version` `<number>` The version of the component, which controls its data shape and (de)serialisation sequence.

## Constructors

### `new Component(props)`

Creates a versioned component. This constructor is used internally. You shouldn't create any instances of this base class.

- `props` [`<ComponentProps & BaseComponentProps>`](#basecomponentprops) Configuration of the component to create.
- Returns: `<Component>`

:warning: You shouldn't create any instances of this base class. Use any of its [derived classes](./README.md) instead.

---

### `Component.fromBinary(reader, version)`

Returns a `BinaryString` representation of the component.

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` instance containing the entity binary data.
- `version` `<number>` The version of the component for interpreting the binary data.

:warning: You shouldn't create any instances of this base class. Use any of its [derived classes](./README.md) instead.

## Properties

Note that the following properties are sorted in order of appearance when decoding component binary data.

### `hash`

The hash of the component.

- `<number>` The hash of the component.

```ts
import { DerivedComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DerivedComponent({ version: componentVersion });

const hash = component.hash;
```

---

### `name`

The name of the component.

- `<string>` The name of the component.

```ts
import { DerivedComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DerivedComponent({ version: componentVersion });

const name = component.name;
```

---

### `version`

The version of the component. This controls the shape of the component data and its (de)serialisation sequence when reading or writing binary data.

- `<number>` The version of the component.

```ts
import { DerivedComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new DerivedComponent({ version: componentVersion });

const version = component.version;
// `version` is `1`
```

## Methods

### `toBinary(version?)`

Returns a `BinaryString` representation of the component.

- `version` (optional, default `this.version`) `<number>` The version of the component, which controls its serialisation sequence.
- Returns: [`<BinaryString>`](./BinaryString.md)

```ts
import { DerivedComponent } from 'att-string-transcoder';

const componentVersion = 1;

const component = new DerivedComponent({ version: componentVersion });

const binaryString = component.toBinary(componentVersion);
```

---

### `write(writer, version?)`

Writes a `BinaryString` representation of the component to the given `BinaryWriter`, including the component hash and data length.

- `writer` [`<BinaryWriter>`](./BinaryWriter.md) The `BinaryWriter` instance in which to store the binary data.
- `version` (optional, default `this.version`) `<number>` The version of the component, which controls its serialisation sequence.
- Returns: `<void>`

```ts
import { BinaryWriter, DerivedComponent } from 'att-string-transcoder';

const writer = new BinaryWriter();
const componentVersion = 1;

const component = new DerivedComponent({ version: componentVersion });

component.write(writer, componentVersion);
```
