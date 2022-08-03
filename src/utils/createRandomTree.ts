import { ChildPrefab, PrefabData } from '../decoders';
import { Prefab } from '../Prefab';
import { SpeciesHash } from '../SpeciesHash';

type SegmentName =
  | typeof ROOTS[number]
  | typeof TRUNKS[number]
  | typeof BRANCHES[number]
  | typeof STICKS[number]
  | typeof TWIGS[number]
  | typeof ASH_LEAVES[number]
  | typeof BIRCH_LEAVES[number]
  | typeof OAK_LEAVES[number]
  | typeof REDWOOD_LEAVES[number]
  | typeof WALNUT_LEAVES[number];

type EmbeddedEntities = typeof Prefab[SegmentName]['embedded'];

type Keys<T> = T extends typeof Prefab | EmbeddedEntities ? keyof T : never;

type ConnectionCandidates = [Keys<EmbeddedEntities>, SegmentName[]];

type Segment = { [key in SegmentName]?: Connections };

type Connections = { [key in Keys<EmbeddedEntities>]?: Segment };

type CompositionMap = { [segment in SegmentName]?: { [entity in Keys<EmbeddedEntities>]?: readonly SegmentName[] } };

const ROOTS = [
  'Woodcut_Root_V1_T0',
  'Woodcut_Root_V1_T0_B15',
  'Woodcut_Root_V1_T0_S30',
  'Woodcut_Root_V1_T30',
  'Woodcut_BranchRoot_V1_B0',
  'Woodcut_BranchRoot_V1_B15_S30'
] as const;

const TRUNKS = [
  'Woodcut_T0_B0_B30',
  'Woodcut_T0_B15_B30',
  'Woodcut_T0_T0',
  'Woodcut_T0_T0_B30',
  'Woodcut_T0_T0_B45',
  'Woodcut_T0_T0_S30',
  'Woodcut_T0_T0_S30_S30_S30',
  'Woodcut_T15_T15',
  'Woodcut_T30_T30',
  'Woodcut_T5_T5'
] as const;

const TRUNK_TERMINATORS = ['Woodcut_T0_B0_B30', 'Woodcut_T0_B15_B30'] as const;

const BRANCHES = [
  'Woodcut_B0_B0',
  'Woodcut_B0_B0_S15',
  'Woodcut_B0_B15_B30',
  'Woodcut_B0_S0_S30',
  'Woodcut_B15_B15',
  'Woodcut_B30_B30',
  'Woodcut_B5_B5'
] as const;

const BRANCH_TERMINATORS = ['Woodcut_B0_S0_S30'] as const;

const STICKS = ['Woodcut_S0_S0', 'Woodcut_S0_S15_S15'] as const;

const TWIGS = [
  'Woodcut_Twigs_V1_-30',
  'Woodcut_Twigs_V1_0',
  'Woodcut_Twigs_V1_30',
  'Woodcut_Twigs_V2_-30',
  'Woodcut_Twigs_V2_0',
  'Woodcut_Twigs_V2_30',
  'Woodcut_Twigs_V3_-30',
  'Woodcut_Twigs_V3_0',
  'Woodcut_Twigs_V3_30',
  'Woodcut_Twigs_V4_0',
  'Woodcut_Twigs_V4_30',
  'Woodcut_Twigs_V5_-15',
  'Woodcut_Twigs_V5_15',
  'Woodcut_Twigs_V5_L15',
  'Woodcut_Twigs_V5_R15'
] as const;

const ASH_LEAVES = [
  'Woodcut_Ash_LeafClump_Base',
  'Woodcut_Ash_LeafClump_C1C1',
  'Woodcut_Ash_LeafClump_C1C2',
  'Woodcut_Ash_LeafClump_C1C2_E',
  'Woodcut_Ash_LeafClump_C1_E',
  'Woodcut_Ash_LeafClump_C1_E_1',
  'Woodcut_Ash_LeafClump_C1_E_2',
  'Woodcut_Ash_LeafClump_C2C2',
  'Woodcut_Ash_LeafClump_C2C3',
  'Woodcut_Ash_LeafClump_C2C3_E',
  'Woodcut_Ash_LeafClump_C2_E',
  'Woodcut_Ash_LeafClump_C2_E_1',
  'Woodcut_Ash_LeafClump_C3C3',
  'Woodcut_Ash_LeafClump_C3_E'
] as const;

const BIRCH_LEAVES = [
  'Woodcut_Birch_LeafClump_Base',
  'Woodcut_Birch_LeafClump_C1C1_1',
  'Woodcut_Birch_LeafClump_C1C1_1_E',
  'Woodcut_Birch_LeafClump_C1C1_2',
  'Woodcut_Birch_LeafClump_C1C1_2_E',
  'Woodcut_Birch_LeafClump_C1C2_1',
  'Woodcut_Birch_LeafClump_C1C2_1_E',
  'Woodcut_Birch_LeafClump_C1C2_2',
  'Woodcut_Birch_LeafClump_C1C2_2_E',
  'Woodcut_Birch_LeafClump_C1_E',
  'Woodcut_Birch_LeafClump_C2C3_1',
  'Woodcut_Birch_LeafClump_C2C3_1_E',
  'Woodcut_Birch_LeafClump_C2C3_2',
  'Woodcut_Birch_LeafClump_C2C3_2_E',
  'Woodcut_Birch_LeafClump_C2_E',
  'Woodcut_Birch_LeafClump_C3C4_1',
  'Woodcut_Birch_LeafClump_C3C4_1_E',
  'Woodcut_Birch_LeafClump_C3C4_2',
  'Woodcut_Birch_LeafClump_C3C4_2_E',
  'Woodcut_Birch_LeafClump_C3_E',
  'Woodcut_Birch_LeafClump_C4_E'
] as const;

const OAK_LEAVES = [
  'Woodcut_Oak_LeafClump_Base',
  'Woodcut_Oak_LeafClump_C1C1_1',
  'Woodcut_Oak_LeafClump_C1C1_2',
  'Woodcut_Oak_LeafClump_C1C2_1',
  'Woodcut_Oak_LeafClump_C1C2_2',
  'Woodcut_Oak_LeafClump_C1C2_E',
  'Woodcut_Oak_LeafClump_C1_E',
  'Woodcut_Oak_LeafClump_C2C2_1',
  'Woodcut_Oak_LeafClump_C2C2_2',
  'Woodcut_Oak_LeafClump_C2C3_1',
  'Woodcut_Oak_LeafClump_C2C3_2',
  'Woodcut_Oak_LeafClump_C2C3_E',
  'Woodcut_Oak_LeafClump_C2_E',
  'Woodcut_Oak_LeafClump_C3C3_1',
  'Woodcut_Oak_LeafClump_C3C3_2',
  'Woodcut_Oak_LeafClump_C3_E'
] as const;

const REDWOOD_LEAVES = [
  'Woodcut_Redwood_LeafClump_Base',
  'Woodcut_Redwood_LeafClump_T1_D30_C1C2',
  'Woodcut_Redwood_LeafClump_T1_D30_C3C4',
  'Woodcut_Redwood_LeafClump_T1_D30_C5C6',
  'Woodcut_Redwood_LeafClump_T1_D30_C7C8',
  'Woodcut_Redwood_LeafClump_T2_D30_C1C2',
  'Woodcut_Redwood_LeafClump_T2_D30_C3C4',
  'Woodcut_Redwood_LeafClump_T2_D30_C5C6',
  'Woodcut_Redwood_LeafClump_T2_D30_C7C8',
  'Woodcut_Redwood_LeafClump_T3_D30_C1C2',
  'Woodcut_Redwood_LeafClump_T3_D30_C3C4',
  'Woodcut_Redwood_LeafClump_T3_D30_C5C6',
  'Woodcut_Redwood_LeafClump_T3_D30_C7C8',
  'Woodcut_Redwood_LeafClump_T4_D30_C1',
  'Woodcut_Redwood_LeafClump_T4_D30_C2',
  'Woodcut_Redwood_LeafClump_T4_D30_C3',
  'Woodcut_Redwood_LeafClump_T4_D30_C4',
  'Woodcut_Redwood_LeafClump_T4_D30_C5',
  'Woodcut_Redwood_LeafClump_T4_D30_C6',
  'Woodcut_Redwood_LeafClump_T4_D30_C7',
  'Woodcut_Redwood_LeafClump_T4_D30_C8'
] as const;

const WALNUT_LEAVES = [
  'Woodcut_Walnut_LeafClump_Base',
  'Woodcut_Walnut_LeafClump_C1C1',
  'Woodcut_Walnut_LeafClump_C1C1_E',
  'Woodcut_Walnut_LeafClump_C1C2',
  'Woodcut_Walnut_LeafClump_C1C2_E',
  'Woodcut_Walnut_LeafClump_C2C2',
  'Woodcut_Walnut_LeafClump_C2C2_E',
  'Woodcut_Walnut_LeafClump_C2C3',
  'Woodcut_Walnut_LeafClump_C2C3_E',
  'Woodcut_Walnut_LeafClump_C3C3',
  'Woodcut_Walnut_LeafClump_C3C3_E',
  'Woodcut_Walnut_LeafClump_C3C4',
  'Woodcut_Walnut_LeafClump_C3C4_E',
  'Woodcut_Walnut_LeafClump_C4C4_E',
  'Woodcut_Walnut_LeafClump_C4C5_E',
  'Woodcut_Walnut_LeafClump_C5C5_E'
] as const;

const LEAVES = {
  [SpeciesHash.Ash]: ASH_LEAVES,
  [SpeciesHash.Birch]: BIRCH_LEAVES,
  [SpeciesHash.Oak]: OAK_LEAVES,
  [SpeciesHash.Redwood]: REDWOOD_LEAVES,
  [SpeciesHash.Standard]: OAK_LEAVES,
  [SpeciesHash.Walnut]: WALNUT_LEAVES
};

const LEAF_SCALE = {
  [SpeciesHash.Ash]: 4,
  [SpeciesHash.Birch]: 4,
  [SpeciesHash.Oak]: 4,
  [SpeciesHash.Redwood]: 0.5,
  [SpeciesHash.Standard]: 4,
  [SpeciesHash.Walnut]: 4
};

const compositionMap: CompositionMap = {
  Woodcut_B0_B0: { Top_8056: BRANCHES },
  Woodcut_B0_B0_S15: { Top_53706: BRANCHES, Stick_53710: STICKS },
  Woodcut_B0_B15_B30: { Branch_1_20342: BRANCHES, Branch_2_20338: BRANCHES },
  Woodcut_B0_S0_S30: { Stick_1_38940: STICKS, Stick_2_38936: STICKS },
  Woodcut_B15_B15: { Top_4690: BRANCHES },
  Woodcut_B30_B30: { Top_58002: BRANCHES },
  Woodcut_B5_B5: { Top_37822: BRANCHES },
  Woodcut_BranchRoot_V1_B0: { Top_14282: BRANCHES },
  Woodcut_BranchRoot_V1_B15_S30: { Top_63620: BRANCHES, Branch_63622: STICKS },
  Woodcut_Root_V1_T0: { Top_49314: TRUNKS },
  Woodcut_Root_V1_T0_B15: { Top_23584: TRUNKS, Branch_12832: BRANCHES },
  Woodcut_Root_V1_T0_S30: { Top_56452: TRUNKS, Stick_51558: STICKS },
  Woodcut_Root_V1_T30: { Top_7658: TRUNKS },
  Woodcut_S0_S0: { Top_1286: STICKS },
  Woodcut_S0_S15_S15: { Top_1_2062: STICKS, Top_2_60778: STICKS },
  Woodcut_T0_B0_B30: { Branch_1_4000: BRANCHES, Branch_2_3996: BRANCHES },
  Woodcut_T0_B15_B30: { Branch_1_634: BRANCHES, Branch_2_636: BRANCHES },
  Woodcut_T0_T0: { Top_39100: TRUNKS },
  Woodcut_T0_T0_B30: { Top_34360: TRUNKS, Branch_34356: BRANCHES },
  Woodcut_T0_T0_B45: { Top_15160: TRUNKS, Branch_15162: BRANCHES },
  Woodcut_T0_T0_S30: { Top_45916: TRUNKS, Stick_45912: STICKS },
  Woodcut_T0_T0_S30_S30_S30: { Top_836: TRUNKS, Stick_1_34724: STICKS, Stick_2_17522: STICKS, Stick_3_910: STICKS },
  Woodcut_T15_T15: { Top_30734: TRUNKS },
  Woodcut_T30_T30: { Top_28372: TRUNKS },
  Woodcut_T5_T5: { Top_32750: TRUNKS }
};

const terminationMap: CompositionMap = {
  Woodcut_B0_B0: { Top_8056: BRANCH_TERMINATORS },
  Woodcut_B0_B0_S15: { Top_53706: BRANCH_TERMINATORS, Stick_53710: TWIGS },
  Woodcut_B0_B15_B30: { Branch_1_20342: BRANCH_TERMINATORS, Branch_2_20338: BRANCH_TERMINATORS },
  Woodcut_B0_S0_S30: { Stick_1_38940: TWIGS, Stick_2_38936: TWIGS },
  Woodcut_B15_B15: { Top_4690: BRANCH_TERMINATORS },
  Woodcut_B30_B30: { Top_58002: BRANCH_TERMINATORS },
  Woodcut_B5_B5: { Top_37822: BRANCH_TERMINATORS },
  Woodcut_BranchRoot_V1_B0: { Top_14282: BRANCH_TERMINATORS },
  Woodcut_BranchRoot_V1_B15_S30: { Top_63620: BRANCH_TERMINATORS, Branch_63622: TWIGS },
  Woodcut_Root_V1_T0: { Top_49314: TRUNK_TERMINATORS },
  Woodcut_Root_V1_T0_B15: { Top_23584: TRUNK_TERMINATORS, Branch_12832: BRANCH_TERMINATORS },
  Woodcut_Root_V1_T0_S30: { Top_56452: TRUNK_TERMINATORS, Stick_51558: TWIGS },
  Woodcut_Root_V1_T30: { Top_7658: TRUNK_TERMINATORS },
  Woodcut_S0_S0: { Top_1286: TWIGS },
  Woodcut_S0_S15_S15: { Top_1_2062: TWIGS, Top_2_60778: TWIGS },
  Woodcut_T0_B0_B30: { Branch_1_4000: BRANCH_TERMINATORS, Branch_2_3996: BRANCH_TERMINATORS },
  Woodcut_T0_B15_B30: { Branch_1_634: BRANCH_TERMINATORS, Branch_2_636: BRANCH_TERMINATORS },
  Woodcut_T0_T0: { Top_39100: TRUNK_TERMINATORS },
  Woodcut_T0_T0_B30: { Top_34360: TRUNK_TERMINATORS, Branch_34356: BRANCH_TERMINATORS },
  Woodcut_T0_T0_B45: { Top_15160: TRUNK_TERMINATORS, Branch_15162: BRANCH_TERMINATORS },
  Woodcut_T0_T0_S30: { Top_45916: TRUNK_TERMINATORS, Stick_45912: TWIGS },
  Woodcut_T0_T0_S30_S30_S30: {
    Top_836: TRUNK_TERMINATORS,
    Stick_1_34724: TWIGS,
    Stick_2_17522: TWIGS,
    Stick_3_910: TWIGS
  },
  Woodcut_T15_T15: { Top_30734: TRUNK_TERMINATORS },
  Woodcut_T30_T30: { Top_28372: TRUNK_TERMINATORS },
  Woodcut_T5_T5: { Top_32750: TRUNK_TERMINATORS }
};

const pickRandom = (choices: readonly SegmentName[]) => {
  const index = Math.floor(Math.random() * choices.length);

  return choices[index];
};

const populateSegment = (
  segment: SegmentName,
  terminationRate: number,
  terminationThreshold: number = 0,
  isTerminationLayer: boolean = false
): Segment => {
  /* Increase termination chance. */
  const newTerminationThreshold = Math.min(1, terminationThreshold + terminationRate);
  const terminateNextLayer = isTerminationLayer || Math.random() <= newTerminationThreshold;

  /* Get the connections on segment. */
  const segmentMap = isTerminationLayer ? terminationMap : compositionMap;
  const connectionMaps = Object.entries(segmentMap[segment] ?? {}) as ConnectionCandidates[];

  /* Populate each connection with a candidate child segment and recursively generate layers for those child segments. */
  return {
    [segment]: connectionMaps.reduce((connections, [connectionName, candidateSegments]) => {
      const childSegment = pickRandom(candidateSegments);
      const populatedSegment = populateSegment(
        childSegment,
        terminationRate,
        newTerminationThreshold,
        terminateNextLayer
      );

      return {
        ...connections,
        [connectionName]: populatedSegment
      };
    }, {})
  };
};

const createChildPrefab = (speciesHash: SpeciesHash, segment: Segment, parentHash: number = 0): ChildPrefab => {
  const [segmentName, connectionMap] = Object.entries(segment)[0] as [SegmentName, Connections];
  const connections = Object.entries(connectionMap);
  const rotation = randomRotation();

  return {
    parentHash,
    prefab: {
      prefabObject: {
        hash: Prefab[segmentName].hash,
        rotation
      },
      childPrefabs:
        connections.length === 0
          ? attachLeafNode(speciesHash, rotation)
          : connections.map(([embeddedEntity, childSegment]) =>
              // After several hours I can't figure out the proper way to access this object and I cbf anymore.
              createChildPrefab(
                speciesHash,
                childSegment,
                (Prefab[segmentName]['embedded'] as any)[embeddedEntity].hash
              )
            )
    }
  };
};

const attachLeafNode = (
  speciesHash: SpeciesHash,
  rotation: { x: number; y: number; z: number; w: number }
): ChildPrefab[] => {
  const prefab = pickRandom(LEAVES[speciesHash]);

  return [
    {
      parentHash: 0,
      prefab: {
        prefabObject: {
          hash: Prefab[prefab].hash,
          rotation: {
            x: -rotation.x,
            y: -rotation.y,
            z: -rotation.z,
            w: -rotation.w
          },
          scale: LEAF_SCALE[speciesHash] + Math.random() * 0.4
        }
      }
    }
  ];
};

const randomRotation = () => ({
  x: Math.random() * 2 - 1,
  y: Math.random() * 2 - 1,
  z: Math.random() * 2 - 1,
  w: Math.random() * 2 - 1
});

export const createRandomTree = (
  speciesHash: SpeciesHash,
  terminationRate: number,
  position: { x: number; y: number; z: number }
): PrefabData => {
  const root = pickRandom(ROOTS);

  const populatedComposition = populateSegment(root, terminationRate);
  const childPrefab = createChildPrefab(speciesHash, populatedComposition);

  const tree: PrefabData = {
    prefabObject: {
      hash: Prefab.Tree.hash,
      position
    },
    components: {
      NetworkRigidbody: {
        position,
        isKinematic: true
      },
      WoodcutTree: {
        speciesHash: speciesHash
      }
    },
    childPrefabs: [childPrefab]
  };

  return tree;
};
