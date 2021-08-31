![ATT String Transcoder](./att-st.png)

# ATT String Transcoder

Allows you to decode _A Township Tale_'s save strings for analysing, and encode JS objects into ATT save strings for spawning.

## ⚡️ Quick Start

Add this library to your project's dependencies:

```shell
$ npm install --save att-string-transcoder
```

### Decoding a string

```ts
import { decodeString } from 'att-string-transcoder';

/**
 * You obtain an encoded save string by sending the `select tostring` console command.
 * See: https://docs.google.com/document/d/150PALdbZalylhkI4_iCL7Bl0X_rgvq80gJCUHik3z4I/edit?usp=sharing
 */
const encodedString = '23644,174,23644,{...very long...},2,';
const decodedString = decodeString(encodedString);
```

<details>
<summary><code>decodedString</code> will contain:</summary>

```ts
const decodedString = {
  hash: 23644,
  size: 1392,
  prefab: {
    prefabObject: {
      hash: 23644,
      position: {
        x: -699.1250610351562,
        y: 128.15176391601562,
        z: 98.96036529541016
      },
      rotation: {
        x: -0.00007028286927379668,
        y: -0.06372569501399994,
        z: -0.0011925859143957496,
        w: 0.9979667663574219
      },
      scale: 1.0000009536743164
    },
    components: {
      Unknown: [],
      NetworkRigidbody: {
        position: {
          x: -699.1250610351562,
          y: 128.15176391601562,
          z: 98.96036529541016
        },
        rotation: {
          x: -0.00007028286927379668,
          y: -0.06372569501399994,
          z: -0.0011925859143957496,
          w: 0.9979667663574219
        },
        isKinematic: false,
        isServerSleeping: true,
        velocity: {
          x: 0,
          y: 0,
          z: 0
        },
        angularVelocity: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      Pickup: {
        lastInteractorPlayerId: 1965324787
      },
      LiquidContainer: {
        canAddTo: false,
        canRemoveFrom: true,
        contentLevel: 0,
        hasContent: false,
        isCustom: false,
        presetHash: 0,
        customData: null
      },
      BasicDecay: {
        isDisabled: false,
        timelineEntry: 37654637031400
      }
    },
    embeddedEntities: {
      Unknown: [
        {
          hash: 21290,
          isAlive: true,
          components: {
            Unknown: [],
            Pickup: {
              lastInteractorPlayerId: 1965324787
            }
          }
        }
      ]
    },
    childPrefabs: []
  }
};
```

</details>

### Encoding a string

<details>
<summary>First, create a <code>blade</code> prefab object:</summary>

```ts
import { Prefab, PrefabHash, PhysicalMaterialPartHash } from 'att-string-transcoder';

const blade: Prefab = {
  prefabObject: {
    hash: PrefabHash.Large_Longsword_Blade
  },
  components: {
    PhysicalMaterialPart: {
      materialHash: PhysicalMaterialPartHash.EvinonSteelAlloy
    },
    DurabilityModule: {
      integrity: 0.01
    }
  }
};
```

</details>

<details>
<summary>Then, create a <code>guard</code> prefab object:</summary>

```ts
import { Prefab, PrefabHash, PhysicalMaterialPartHash } from 'att-string-transcoder';

export const guard: Prefab = {
  prefabObject: {
    hash: PrefabHash.Large_Guard_Rectangle
  },
  components: {
    PhysicalMaterialPart: {
      materialHash: PhysicalMaterialPartHash.Copper
    },
    DurabilityModule: {
      integrity: 0.01
    }
  },
  childPrefabs: [
    {
      parentHash: 51896,
      prefab: blade
    }
  ]
};
```

</details>

<details>
<summary>Finally, create a <code>handle</code> prefab object:</summary>

```ts
import { Prefab, PrefabHash } from 'att-string-transcoder';

const position = {
  x: -701,
  y: 128.2,
  z: 100
};

export const handle: Prefab = {
  prefabObject: {
    hash: PrefabHash.Handle_Short,
    position
  },
  components: {
    NetworkRigidbody: {
      position
    }
  },
  childPrefabs: [
    {
      parentHash: 6136,
      prefab: guard
    }
  ]
};
```

</details>

Encode the hierarchical prefab object to obtain a string for spawning:

```ts
import { createString } from 'att-string-transcoder';

/* ... defined prefab objects ... */

/**
 * You spawn an encoded save string by sending the `spawn string-raw` console command.
 * See: https://docs.google.com/document/d/150PALdbZalylhkI4_iCL7Bl0X_rgvq80gJCUHik3z4I/edit?usp=sharing
 */
const encodedSword = createString(handle);
```

<details>
<summary><code>encodedSword</code> will contain:</summary>

```
42230,252,42230,3291430912,1124086579,1120403456,0,0,0,1065353216,1065353216,2290978823,418,3291430912,1124086579,1120403456,0,0,0,1065353216,0,0,0,0,0,0,0,0,536871679,1163,0,0,0,0,0,0,133169152,133169152,34023564,2684354564,2523,1307670851,3758096388,126122721,1073741824,0,268438699,2147487155,3221225472,0,0,0,0,0,66584576,66584576,17011782,1342177282,1968,3875060897,4026531842,63061360,2684354560,0,0,|3,2290978823,1,272188517,1,1871432223,1,
```

</details>
