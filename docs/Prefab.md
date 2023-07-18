# Class: `Prefab`

- [`<PrefabProps>`](#prefabprops)
- [`new Prefab(prefabName, props?)`](#new-prefabprefabname-props)
- [`Prefab.fromBinary(reader, componentVersions?)`](#prefabfrombinaryreader-componentversions)
- [`Prefab.fromSaveString(saveString)`](#prefabfromsavestringsavestring)
- [`prefab.addChildPrefab(parentKey, childPrefab)`](#prefabaddchildprefabparentkey-childprefab)
- [`prefab.addComponent(component)`](#prefabaddcomponentcomponent)
- [`prefab.addGift(giftPrefab)`](#prefabaddgiftgiftprefab)
- [`prefab.getAngularVelocity()`](#prefabgetangularvelocity)
- [`prefab.getComponentVersions()`](#prefabgetcomponentversions)
- [`prefab.getGiftBoxLabel()`](#prefabgetgiftboxlabel)
- [`prefab.getIntegrity()`](#prefabgetintegrity)
- [`prefab.getKinematic()`](#prefabgetkinematic)
- [`prefab.getMaterial()`](#prefabgetmaterial)
- [`prefab.getOnFire()`](#prefabgetonfire)
- [`prefab.getPosition()`](#prefabgetposition)
- [`prefab.getScale()`](#prefabgetscale)
- [`prefab.getServerSleeping()`](#prefabgetserversleeping)
- [`prefab.getServings()`](#prefabgetservings)
- [`prefab.getRotation()`](#prefabgetrotation)
- [`prefab.getVelocity()`](#prefabgetvelocity)
- [`prefab.inspect()`](#prefabinspect)
- [`prefab.print()`](#prefabprint)
- [`prefab.removeAllChildPrefabs()`](#prefabremoveallchildprefabs)
- [`prefab.removeAllComponents()`](#prefabremoveallcomponents)
- [`prefab.removeAllEntities()`](#prefabremoveallentities)
- [`prefab.removeAllGifts()`](#prefabremoveallgifts)
- [`prefab.removeChildPrefab(prefabArg)`](#prefabremovechildprefabprefabarg)
- [`prefab.removeComponent(componentName)`](#prefabremovecomponentcomponentname)
- [`prefab.removeEntity(entityKey)`](#prefabremoveentityentitykey)
- [`prefab.removeGift(prefabHash)`](#prefabremovegiftprefabhash)
- [`prefab.setAngularVelocity(angularVelocity)`](#prefabsetangularvelocityangularvelocity)
- [`prefab.setGiftBoxLabel(label)`](#prefabsetgiftboxlabellabel)
- [`prefab.setIntegrity(integrity)`](#prefabsetintegrityintegrity)
- [`prefab.setKinematic(isKinematic?)`](#prefabsetkinematiciskinematic)
- [`prefab.setMaterial(materialArg)`](#prefabsetmaterialmaterialarg)
- [`prefab.setOnFire(isLit?)`](#prefabsetonfireislit)
- [`prefab.setPosition(position)`](#prefabsetpositionposition)
- [`prefab.setRotation(rotation)`](#prefabsetrotationrotation)
- [`prefab.setScale(scale)`](#prefabsetscalescale)
- [`prefab.setServerSleeping(isServerSleeping?)`](#prefabsetserversleepingisserversleeping)
- [`prefab.setServings(servings)`](#prefabsetservingsservings)
- [`prefab.setVelocity(velocity)`](#prefabsetvelocityvelocity)
- [`prefab.toBinary(componentVersions)`](#prefabtobinarycomponentversions)
- [`prefab.toSaveString()`](#prefabtosavestring)

## `<PrefabProps>`

A configuration object to optionally pass to the `Prefab` constructor. Lets you instantiate a `Prefab` with predefined data. Any properties that you do not pass will be created with a default value.

```ts
type PrefabProps<TPrefabName extends ATTPrefabName> = {
  position?: Position;
  rotation?: Rotation;
  scale?: number;
  components?: Partial<PrefabComponents>;
  entities?: Partial<PrefabEntities<TPrefabName>>;
  children?: PrefabChild[];
};
```

- `position` (optional) [`<Position>`](./Position.md) The world position 3D vector coordinates of the prefab.
- `rotation` (optional) [`<Rotation>`](./Rotation.md) The world rotation quaternion of the prefab.
- `scale` (optional) `<number>` The scale of the prefab.
- `components` (optional) `<Partial`[`<PrefabComponents>`](./PrefabComponents.md)`>` A mapped object of components on the prefab.
- `entities` (optional) `<Partial<`[`PrefabEntities`](./PrefabComponents.md)`<`[`ATTPrefabName`](./ATTPrefabName.md)`>>>` A mapped object of entities on the prefab.
- `children` (optional) `<Array<`[`PrefabChild`](./PrefabComponents.md)`>>` An array of objects connecting child prefabs with parent entities.

## `new Prefab(prefabName, props?)`

- `prefabName` [`<ATTPrefabName>`](./ATTPrefabName.md) The name of the prefab to create.
- `props` (optional) [`<PrefabProps>`](#prefabprops) Additional configuration of the prefab to create.

Creates a new `Prefab` object configured with the passed in configuration.

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Wooden_Stake', {
  position: { x: 133.7, y: 420, z: 69 },
  rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
  scale: 1.5,
  components: {
    NetworkRigidbody: new NetworkRigidbodyComponent({
      version: 1,
      position: { x: 133.7, y: 420, z: 69 },
      rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
      isKinematic: false,
      isServerSleeping: false,
      velocity: { x: 0, y: 1, z: 0 },
      angularVelocity: { x: 0, y: 1, z: 0 }
    })
  },
  entities: {
    Slot_Multi_11474: new Entity('Slot_Multi_11474')
  },
  children: [
    {
      parentHash: 11474,
      prefab: new Prefab('Grass_Clump', {
        entities: {
          Fire_30100: new Entity('Fire_30100', {
            components: {
              HeatSourceBase: new HeatSourceBaseComponent({
                version: 2,
                isLit: true,
                progress: 0.8
              })
            }
          })
        }
      })
    }
  ]
});
```

## `Prefab.fromBinary(reader, componentVersions?)`

Creates a `Prefab` from reading the prefab's binary data stored in a [`<SaveString>`](./SaveString.md).

- `reader` [`<BinaryReader>`](./BinaryReader.md) The binary reader that contains the data stored inside an ATT save string.
- `componentVersions` (optional) `<Map<number, number>>` A map of component versions to assume are encoded in the binary data.
- Returns: `Prefab<ATTPrefabName>`

```ts
import { BinaryReader, ComponentHash, Prefab, type BinaryString } from 'att-string-transcoder';

const binaryString = `0000000000000000101001001111011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000001111111000000000000000000000000101011010110001000000111011011000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`;

const reader = new BinaryReader(binaryString as BinaryString);

const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 1]
  // etc...
]);

const prefab = Prefab.fromBinary<'Handle_Short'>(reader, componentVersions);
```

## `Prefab.fromSaveString(saveString)`

Creates a `Prefab` from reading an ATT save string.

- `saveString` `<string>` The ATT save string to decode into a `Prefab`.
- Returns: `Prefab<ATTPrefabName>`

```ts
import { Prefab } from 'att-string-transcoder';

const saveString = `43430,230,43430,3290698471,1125743666,1132721897,1050703933,3208373430,1039090831,1058493384,1043542835,2290978823,418,3290698471,1125743666,1132721897,1050703933,3208373430,1039090831,1058493384,3221225472,0,0,0,0,0,363610349,2147483736,3005828291,3221225472,2415919104,0,395228240,397619388,393508864,400941080,2546407302,4157020038,3890602430,1579755829,536870916,374086096,2147483844,1610612736,765,2684354569,338752663,2281701377,0,0,19021736,1744830465,67108864,75722752,0,303,67108864,1124073472,0,0,`;

const prefab = Prefab.fromSaveString<'SpriggullDrumstick_Full_Ripe'>(saveString);
```

## `prefab.addChildPrefab(parentKey, childPrefab)`

Attaches a `Prefab` to this prefab as a child. It can optionally be attached onto one of this prefab's embedded entities, which is required for most child prefabs under normal circumstances. If you do not specify a `parentKey`, you may pass `null` to create a "floating" child. It will be part of this prefab's hierarchy but will most likely behave unexpectedly in the game.

- `parentKey` `<Exclude<`[`EntityKey<ATTPrefabName>`](./EntityKey.md)`, 'Unknown'> | null>` The key of the prefab's entity to which you want to attach the `childPrefab`.
- `childPrefab` `<Prefab>` The prefab you want to attach as a child.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const parent = new Prefab('Handle_Short');
const child = new Prefab('Guard');

parent.addChildPrefab('Slot_Large_SwordType_Craft_54356', child);
```

## `prefab.addComponent(component)`

Adds a `Component` to the prefab. Will override any existing component with that name.

- `component` [`<Component>`](./Component.md) The component to set on the prefab.
- Returns: `<this>`

```ts
import { NetworkRigidbodyComponent, Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Handle_Short');
const component = new NetworkRigidbodyComponent({ version: 1 });

prefab.addComponent(component);
```

## `prefab.addGift(giftPrefab)`

Adds a `Prefab` gift to this prefab's [`SentGift`](./SentGiftComponent.md) component. You may call this method more than once to add additional gifts.

- `giftPrefab` `<Prefab>` The prefab you want to store inside the gift box.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const box = new Prefab('Gift_Mail_Box');
const gift = new Prefab('Dynamite');

box.addGift(gift);
```

## `prefab.getAngularVelocity()`

Gets the spin (vector) on the prefab.

- Returns: [`<AngularVelocity>`](./AngularVelocity.md)

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Stone'>.fromSaveString('...');

const angularVelocity = prefab.getAngularVelocity();
const { x, y, z } = angularVelocity;
```

## `prefab.getComponentVersions()`

Gets a map of component hashes and the versions used on this prefab. Will throw an error if the prefab uses mixed versions of a particular component.

- Returns: `Map<number, number>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const componentVersions = prefab.getComponentVersions();
```

## `prefab.getGiftBoxLabel()`

Gets the gift sender's name, which is labeled on the gift.

- Returns: `<string>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');

const giftBoxLabel = prefab.getGiftBoxLabel();
```

## `prefab.getIntegrity()`

Gets the prefab's physical integrity.

- Returns: `<number>` between `0` and `1`.

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const integrity = prefab.getIntegrity();
```

## `prefab.getKinematic()`

Gets the [kinematic](https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html) state of the prefab.

- Returns: `<boolean>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const isKinematic = prefab.getKinematic();
```

## `prefab.getMaterial()`

Gets the prefab's physical material.

- Returns: [`<PhysicalMaterialPartHash>`](./PhysicalMaterialPartHash.md)

```ts
import { PhysicalMaterialPartHash, Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Guard'>.fromSaveString('...');

const materialHash = prefab.getMaterial();
const materialName = PhysicalMaterialPartHash[materialHash];
```

## `prefab.getOnFire()`

Gets the burning state of the prefab.

- Returns: `<boolean>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Grass_Clump'>.fromSaveString('...');

const isOnFire = prefab.getOnFire();
```

## `prefab.getPosition()`

Gets the position of the prefab. If the prefab is a child of another prefab, then this position is local to that parent. Otherwise, this position is in world space.

- Returns: [`<Position>`](./Position.md)

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const position = prefab.getPosition();
const { x, y, z } = position;
```

## `prefab.getScale()`

Gets the scale of the prefab.

- Returns: `<number>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const scale = prefab.getScale();
```

## `prefab.getServerSleeping()`

Gets the [sleeping](https://docs.unity3d.com/Manual/RigidbodiesOverview.html) state of the prefab.

- Returns: `<boolean>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const isServerSleeping = prefab.getServerSleeping();
```

## `prefab.getServings()`

Gets the number of servings on a liquid container prefab.

- Returns: `<number>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Potion_Medium'>.fromSaveString('...');

const servings = prefab.getServings();
```

## `prefab.getRotation()`

Gets the rotation of the prefab. If the prefab is a child of another prefab, then this rotation is local to that parent. Otherwise, this rotation is in world space.

- Returns: [`<Rotation>`](./Rotation.md)

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

const rotation = prefab.getRotation();
const { x, y, z, w } = rotation;
```

## `prefab.getVelocity()`

Gets the direction (vector) on the prefab. Units are in metres per second.

- Returns: [`<Velocity>`](./Velocity.md)

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Stone'>.fromSaveString('...');

const velocity = prefab.getVelocity();
const { x, y, z } = velocity;
```

## `prefab.inspect()`

Prints this prefab's data structure to the console.

- Returns: `<void>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.inspect();
```

## `prefab.print()`

Prints this prefab's save string to the console.

- Returns: `<void>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.print();
```

## `prefab.removeAllChildPrefabs()`

Removes all child `Prefab` from this prefab.

- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeAllChildPrefabs();
```

## `prefab.removeAllComponents()`

Removes all components on this prefab.

- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeAllComponents();
```

## `prefab.removeAllEntities()`

Removes all entities on this prefab.

- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeAllEntities();
```

## `prefab.removeAllGifts()`

Removes all gift `Prefab` from this prefab.

- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');

prefab.removeAllGifts();
```

## `prefab.removeChildPrefab(prefabArg)`

Removes the specified child `Prefab` from this prefab.

- `prefabArg` `<`[`ATTPrefabHash`](./ATTPrefabHash.md)`|`[`ATTPrefabName`](./ATTPrefabName.md)`>` The child prefab's hash or name to remove from this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeChildPrefab('Guard');
```

## `prefab.removeComponent(componentName)`

Removes the specified component from this prefab.

- `componentName` `<keyof Omit<`[`PrefabComponents`](./PrefabComponents.md)`, 'Unknown'>>` The component's name to remove from this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeComponent('NetworkRigidbody');
```

## `prefab.removeEntity(entityKey)`

Removes the specified entity from this prefab.

- `entityKey` `<Exclude<`[`EntityKey`](./EntityKey.md)`<`[`ATTPrefabName`](./ATTPrefabName.md)`>>>` The entity's key to remove from this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Handle_Short'>.fromSaveString('...');

prefab.removeEntity('Slot_Multi_6136');
```

## `prefab.removeGift(prefabHash)`

Removes the specified gift `Prefab` from this prefab.

- `prefabHash` `<number>` The gift prefab's hash to remove from this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');

prefab.removeGift(31326);
```

## `prefab.setAngularVelocity(angularVelocity)`

Sets a spin (vector) on the prefab, causing the physics engine to apply a force to it when spawning. Units are in metres per second. Only works reliably on the parent prefab. Does not work on kinematic prefabs. Does not work on static prefabs.

- `angularVelocity` [`<AngularVelocity>`](./AngularVelocity.md) The angular velocity to set on this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

prefab.setAngularVelocity({ x: 420, y: 69, z: 1337 });
```

## `prefab.setGiftBoxLabel(label)`

Sets the gift sender's name, which is labeled on the gift.

- `label` `<string>` The label to set on the gift box.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Gift_Mail_Box');

prefab.setGiftBoxLabel('topkek');
```

## `prefab.setIntegrity(integrity)`

Sets the prefab's integrity. This can change both its appearance and other qualities such as durability and the amount of materials recovered from recycling.

- `integrity` `<number>` The integrity of the physical material of the prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Handle_Short');

prefab.setIntegrity(0.69);
```

## `prefab.setKinematic(isKinematic?)`

Makes the prefab [kinematic](https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html). By default, a `new Prefab()` is not kinematic, but some prefabs require to be kinematic to work properly. You can optionally pass a boolean, for example `prefab.setKinematic(false)`.

- `isKinematic` (optional, default `true`) `<boolean>` Whether the prefab must be kinematic or not.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Handle_Short');

prefab.setKinematic(true);
```

## `prefab.setMaterial(materialArg)`

Sets the prefab's physical material. This can change both its appearance and other qualities such as durability, damage, heat retention and weight.

- `materialArg` `<`[`PhysicalMaterialPartHash`](./PhysicalMaterialPartHash.md)` | keyof typeof PhysicalMaterialPartHash>` The physical material's hash or name to set on the prefab.
- Returns: `<this>`

```ts
import { PhysicalMaterialPartHash, Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Handle_Short');

prefab.setMaterial(PhysicalMaterialPartHash.Mythril);
// or
prefab.setMaterial('Mythril');
```

## `prefab.setOnFire(isLit?)`

Sets the prefab on fire, if it is capable of catching fire.

- `isLit` (optional, default `true`) `<boolean>` Whether or not to set the prefab alight.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Grass_Clump');

prefab.setOnFire(true);
```

## `prefab.setPosition(position)`

Sets the position of the prefab. If the prefab is a child of another prefab, then this position is local to that parent. Otherwise, this position is in world space.

- `position` [`<Position>`](./Position.md) The position to set on the prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

prefab.setPosition({ x: 420, y: 69, z: 1337 });
```

## `prefab.setRotation(rotation)`

Sets the rotation of the prefab. If the prefab is a child of another prefab, then this rotation is local to that parent. Otherwise, this rotation is in world space.

- `rotation` [`<Rotation>`](./Rotation.md) The rotation to set on the prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

prefab.setRotation({ x: 0.42, y: -0.69, z: 0.1337, w: -0.88 });
```

## `prefab.setScale(scale)`

Sets the scale of the prefab.

- `scale` `<number>` The scale to set on the prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

prefab.setScale(0.69);
```

## `prefab.setServerSleeping(isServerSleeping?)`

Makes the prefab [sleep](https://docs.unity3d.com/Manual/RigidbodiesOverview.html). By default, a `new Prefab()` is not sleeping. A sleeping prefab does not have its physics simulated until it receives a collision or force, such as touching it. You can optionally pass a boolean, for example `prefab.setServerSleeping(false)`.

- `isServerSleeping` (optional, default `true`) `<boolean>` Whether the prefab must be sleeping or not.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Handle_Short');

prefab.setServerSleeping(true);
```

## `prefab.setServings(servings)`

Sets the number of servings on a liquid container prefab.

- `servings` `<number>` The amount of servings to set on the prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Potion_Medium');

prefab.setServings(69);
```

## `prefab.setVelocity(velocity)`

Sets a direction (vector) on the prefab, causing the physics engine to apply a force to it when spawning. Units are in metres per second. Only works reliably on the parent prefab. Does not work on kinematic prefabs. Does not work on static prefabs.

- `velocity` [`<Velocity>`](./Velocity.md) The velocity to set on this prefab.
- Returns: `<this>`

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

prefab.setVelocity({ x: 420, y: 69, z: 1337 });
```

## `prefab.toBinary(componentVersions)`

Returns a `BinaryString` representation of the prefab.

- `componentVersions` `<Map<number, number>>` A map of component versions to ensure are encoded in the binary data.
- Returns: [`<BinaryString>`](./BinaryString.md)

```ts
import { ComponentHash, Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

const componentVersions = prefab.getComponentVersions();
// or
const componentVersions = new Map<number, number>([
  [ComponentHash.NetworkRigidbody, 1],
  [ComponentHash.PhysicalMaterialPart, 1],
  [ComponentHash.Pickup, 1]
  // etc...
]);

const binaryString = prefab.toBinary(componentVersions);
```

## `prefab.toSaveString()`

Returns the `SaveString` to spawn this prefab in the game.

- Returns: [`<SaveString>`](./SaveString.md)

```ts
import { Prefab } from 'att-string-transcoder';

const prefab = new Prefab('Stone');

const saveString = prefab.toSaveString();
```
