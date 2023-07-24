# Class: `Entity`

- [Types](#types)
  - [`<EntityFromBinaryProps>`](#entityfrombinaryprops)
  - [`<EntityProps>`](#entityprops)
- [Constructors](#constructors)
  - [`new Entity(key, props?)`](#new-entitykey-props)
  - [`Entity.fromBinary(reader, props)`](#entityfrombinaryreader-props)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`isAlive`](#isalive)
  - [`components`](#components)
- [Methods](#methods)
  - [`toBinary(componentVersions)`](#tobinarycomponentversions)
  - [`write(writer, componentVersions)`](#writewriter-componentversions)

## Types

### `<EntityFromBinaryProps>`

A configuration object to pass to the `fromBinary` constructor. Lets you instantiate an `Entity` from reading its binary data.

```ts
type EntityFromBinaryProps = {
  key: string;
  hash: number;
  componentVersions?: Map<number, number> | undefined;
};
```

- `key` [`EntityKey`](../src/types/EntityKey.ts) The key (`${name}_${hash}`) of the entity.
- `hash` `<number>` The hash of the entity.
- `componentVersions` (optional) `<Map<number, number>>` A map of component versions to assume are encoded in the binary data.

---

### `<EntityProps>`

A configuration object to optionally pass to the `Entity` constructor. Lets you instantiate an `Entity` with predefined data. Any properties that you do not pass will be created with a default value.

```ts
type EntityProps = {
  hash?: number | undefined;
  isAlive?: boolean | undefined;
  components?: (SupportedPrefabComponents & UnsupportedPrefabComponents & Partial<UnknownPrefabComponents>) | undefined;
};
```

- `hash` (optional) `<number>` The hash of the entity.
- `isAlive` (optional, default `true`) `<boolean>` Whether ATT considers this entity "alive".
- `components` (optional) [`<PrefabComponents>`](../src/types/PrefabComponents.ts) A mapped object of components on the entity.

## Constructors

### `new Entity(key, props?)`

Creates a new `Entity` object configured with the passed in configuration.

- `key` [`EntityKey`](../src/types/EntityKey.ts) The key (`${name}_${hash}`) of the entity.
- `props` (optional) [`<EntityProps>`](#entityprops) Additional configuration of the entity to create.
- Returns: `<Entity>`

```ts
import { Entity } from 'att-string-transcoder';

const torchFireEntity = new Entity<'Torch'>('Fire_30100', {
  hash: 30100,
  isAlive: true,
  components: {}
});
```

:warning: This argument **must** be passed with at least the `hash` property when manually creating an unrecognised entity.

```ts
import { Entity } from 'att-string-transcoder';

const torchUnknownEntity = new Entity<'Torch'>('Unknown', { hash: 1337 });
```

---

### `Entity.fromBinary(reader, props)`

Reads the binary string data and returns an instantiated entity.

- `reader` [`BinaryReader`](./BinaryReader.md) The `BinaryReader` instance containing the entity binary data.
- `props` [`<EntityFromBinaryProps>`](#entityfrombinaryprops) The configuration for interpreting the binary data.

```ts
import { Entity } from 'att-string-transcoder';

const torchFireEntity = Entity.fromBinary<'Torch'>(myBinaryString);
```

## Properties

Note that the following properties are sorted in order of appearance when decoding entity binary data.

### `hash`

The hash of the entity.

- `<number>` The hash of the entity.

```ts
import { Entity } from 'att-string-transcoder';

const entity = new Entity<'Torch'>('Fire_30100');

const hash = entity.hash;
// `hash` is `30100`
```

---

### `name`

The name of the entity.

- `<string>` The name of the entity.

```ts
import { Entity } from 'att-string-transcoder';

const entity = new Entity<'Torch'>('Fire_30100');

const name = entity.name;
// `name` is `'Fire'`
```

---

### `isAlive`

The alive state of the entity.

- `<boolean>` The alive state of the entity.

```ts
import { Entity } from 'att-string-transcoder';

const entity = new Entity<'Torch'>('Fire_30100');

const isAlive = entity.isAlive;
// `isAlive` is `true`
```

---

### `components`

Provides access to the components stored in this entity. Components are keyed to their respective names, unless its data contained an unrecognised hash. In that case, the component will be stored in an array under the `Unknown` key.

- [`<PrefabComponents>`](../src/types/PrefabComponents.ts) A map of the stored components.

```ts
import { Entity } from 'att-string-transcoder';

const entity = new Entity<'Torch'>('Fire_30100');

const components = entity.components;
// `components` is `{ Unknown: [] }`
```

## Methods

### `toBinary(componentVersions)`

Returns a `BinaryString` representation of the entity.

- `componentVersions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: [`<BinaryString>`](./BinaryString.md)

```ts
import { ComponentHash, Entity } from 'att-string-transcoder';

const torchFireEntity = new Entity<'Torch'>('Fire_30100');

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

const binaryString = torchFireEntity.toBinary(componentVersions);
```

---

### `write(writer, componentVersions)`

Writes a `BinaryString` representation of the entity to the given `BinaryWriter`, including the entity hash and data length.

- `writer` [`<BinaryWriter>`](./BinaryWriter.md) The `BinaryWriter` instance in which to store the binary data.
- `componentVersions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: `<void>`

```ts
import { BinaryWriter, ComponentHash, Entity } from 'att-string-transcoder';

const torchFireEntity = new Entity<'Torch'>('Fire_30100');

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 2]
  // etc...
]);

const writer = new BinaryWriter();

torchFireEntity.write(writer, componentVersions);
```
