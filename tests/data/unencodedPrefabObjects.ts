import { Prefab, PrefabHash, PhysicalMaterialPartHash } from '../../build';

const position = {
  x: -701,
  y: 128.2,
  z: 100
};

export const blade: Prefab = {
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
      parentHash: 51896, // @todo extend PrefabEmbeddedEntityHash
      prefab: blade
    }
  ]
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
      parentHash: 6136, // @todo extend PrefabEmbeddedEntityHash
      prefab: guard
    }
  ]
};

export const litGrassClump: Prefab = {
  prefabObject: {
    hash: PrefabHash.Grass_Clump
  },
  embeddedEntities: {
    Fire: {
      components: {
        HeatSourceBase: {}
      }
    }
  }
};
