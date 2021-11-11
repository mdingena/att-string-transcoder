import { Prefab, PrefabData, PhysicalMaterialPartHash } from '../../src';

const position = {
  x: -701,
  y: 128.2,
  z: 100
};

export const blade: PrefabData = {
  prefabObject: {
    hash: Prefab.Large_Longsword_Blade.hash
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

export const guard: PrefabData = {
  prefabObject: {
    hash: Prefab.Large_Guard_Rectangle.hash
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
      parentHash: 51896, // @todo extend PrefabEmbeddedEntityHash
      prefab: blade
    }
  ]
};

export const handle: PrefabData = {
  prefabObject: {
    hash: Prefab.Handle_Short.hash,
    position
  },
  components: {
    NetworkRigidbody: {
      position
    }
  },
  childPrefabs: [
    {
      parentHash: 6136, // @todo extend PrefabEmbeddedEntityHash
      prefab: guard
    }
  ]
};

export const litGrassClump: PrefabData = {
  prefabObject: {
    hash: Prefab.Grass_Clump.hash
  },
  embeddedEntities: {
    Fire: {
      components: {
        HeatSourceBase: {}
      }
    }
  }
};
