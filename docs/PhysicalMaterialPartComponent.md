# Class: `PhysicalMaterialPartComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<PhysicalMaterialPartComponentProps>`](#physicalmaterialpartcomponentprops)
- [Constructors](#constructors)
  - [`new PhysicalMaterialPartComponent(props)`](#new-physicalmaterialpartcomponentprops)
  - [`PhysicalMaterialPartComponent.fromBinary(reader, version)`](#physicalmaterialpartcomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`materialHash`](#materialhash)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<PhysicalMaterialPartComponentProps>`

A portion of the configuration object to pass to the `PhysicalMaterialPartComponent` constructor.

```ts
type PhysicalMaterialPartComponentPropsV1 = {
  materialHash?: number | undefined;
};

type PhysicalMaterialPartComponentProps = PhysicalMaterialPartComponentPropsV1;
```

#### Since v1

- `materialHash` (optional, default `1`) [`<PhysicalMaterialPartHash>`](../src/types/PhysicalMaterialPartHash.ts)

## Constructors

### `new PhysicalMaterialPartComponent(props)`

Creates a versioned `PhysicalMaterialPart` component.

- `props` [`<ComponentProps & PhysicalMaterialPartComponentProps>`](#types) Configuration of the component to create.
- Returns: `<PhysicalMaterialPartComponent>`

```ts
import { PhysicalMaterialPartComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new PhysicalMaterialPartComponent({ version: componentVersion });
```

---

### `PhysicalMaterialPartComponent.fromBinary(reader, version)`

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

### `materialHash`

The hash of the physical material of the prefab this component is attached to.

- Since: `v1`
- [`<PhysicalMaterialPartHash>`](../src/types/PhysicalMaterialPartHash.ts)

```ts
import { PhysicalMaterialPartComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new PhysicalMaterialPartComponent({ version: componentVersion });

const materialHash = component.materialHash;
// `materialHash` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
