import { ChildPrefab } from '../decoders';
import { PrefabHash } from '../PrefabHash';
import { PrefabEmbeddedEntityHash } from '../PrefabEmbeddedEntityHash';

type Tree = {
  [segment in keyof typeof PrefabEmbeddedEntityHash]?: EmbeddedEntities | null;
};

type EmbeddedEntities = {
  [embeddedEntity: string]: Tree;
};

type CompositionMap = {
  [prefab: string]: {
    [embeddedEntity: string]: string[];
  };
};

const ROOTS = [
  'Woodcut_Root_V1_T0',
  'Woodcut_Root_V1_T0_B15',
  'Woodcut_Root_V1_T0_S30',
  'Woodcut_Root_V1_T30',
  'Woodcut_BranchRoot_V1_B0',
  'Woodcut_BranchRoot_V1_B15_S30'
];

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
];

const BRANCHES = [
  'Woodcut_B0_B0',
  'Woodcut_B0_B0_S15',
  'Woodcut_B0_B15_B30',
  'Woodcut_B0_S0_S30',
  'Woodcut_B15_B15',
  'Woodcut_B30_B30',
  'Woodcut_B5_B5'
];

const STICKS = ['Woodcut_S0_S0', 'Woodcut_S0_S15_S15'];

const LEAVES = [
  'Woodcut_Leaves_V1_L_F',
  'Woodcut_Leaves_V1_L_S',
  'Woodcut_Leaves_V1_S_F',
  'Woodcut_Leaves_V1_S_S'
  // 'Woodcut_Leaves_V2_D',
  // 'Woodcut_Leaves_V2_L',
  // 'Woodcut_Leaves_V2_Topper'
];

const compositionMap: CompositionMap = {
  Woodcut_B0_B0: { Top: BRANCHES },
  Woodcut_B0_B0_S15: { Top: BRANCHES, Stick: STICKS },
  Woodcut_B0_B15_B30: { Branch_1: BRANCHES, Branch_2: BRANCHES },
  Woodcut_B0_S0_S30: { Stick_1: STICKS, Stick_2: STICKS },
  Woodcut_B15_B15: { Top: BRANCHES },
  Woodcut_B30_B30: { Top: BRANCHES },
  Woodcut_B5_B5: { Top: BRANCHES },
  Woodcut_BranchRoot_V1_B0: { Top: BRANCHES },
  Woodcut_BranchRoot_V1_B15_S30: { Top: BRANCHES, Branch: STICKS },
  Woodcut_Root_V1_T0: { Top: TRUNKS },
  Woodcut_Root_V1_T0_B15: { Top: TRUNKS, Branch: BRANCHES },
  Woodcut_Root_V1_T0_S30: { Top: TRUNKS, Stick: STICKS },
  Woodcut_Root_V1_T30: { Top: TRUNKS },
  Woodcut_S0_S0: { Top: STICKS },
  Woodcut_S0_S15_S15: { Top_1: STICKS, Top_2: STICKS },
  Woodcut_T0_B0_B30: { Branch_1: BRANCHES, Branch_2: BRANCHES },
  Woodcut_T0_B15_B30: { Branch_1: BRANCHES, Branch_2: BRANCHES },
  Woodcut_T0_T0: { Top: TRUNKS },
  Woodcut_T0_T0_B30: { Top: TRUNKS, Branch: BRANCHES },
  Woodcut_T0_T0_B45: { Top: TRUNKS, Branch: BRANCHES },
  Woodcut_T0_T0_S30: { Top: TRUNKS, Stick: STICKS },
  Woodcut_T0_T0_S30_S30_S30: { Top: TRUNKS, Stick_1: STICKS, Stick_2: STICKS, Stick_3: STICKS },
  Woodcut_T15_T15: { Top: TRUNKS },
  Woodcut_T30_T30: { Top: TRUNKS },
  Woodcut_T5_T5: { Top: TRUNKS }
};

const pickRandom = <T>(choices: T[]) => {
  const index = Math.floor(Math.random() * choices.length);

  return choices[index];
};

export const generateComposition = (terminationRate: number) => {
  const terminationThreshold = 0;
  const root = pickRandom(ROOTS);

  const composition: Tree = generateLayer(root, terminationRate, terminationThreshold);

  return composition;
};

const generateLayer = (
  baseSegment: string,
  terminationRate: number,
  terminationThreshold: number,
  isTerminationLayer: boolean = false
): Tree => {
  const baseSegmentConnections = Object.keys(compositionMap[baseSegment] ?? {});
  const layerConnection = baseSegmentConnections.length ? {} : null;

  /* Prepare layer. */
  const layer: Tree = {
    [baseSegment]: layerConnection
  };

  if (isTerminationLayer) {
    /* Terminate all connections with random leaf nodes. */
    for (const connection of baseSegmentConnections) {
      const segment = pickRandom(LEAVES);
      const subtree: Tree = { [segment]: null };

      layer[baseSegment]![connection] = subtree;
    }
  } else {
    /* Increase termination chance and generate the next layer. */
    const newTerminationThreshold = Math.min(1, terminationThreshold + terminationRate);
    const terminateNextLayer = Math.random() <= newTerminationThreshold;

    /* Append all connection with random matching segments. */
    for (const connection of baseSegmentConnections) {
      const segmentCandidates = compositionMap[baseSegment][connection];
      const segment = pickRandom(segmentCandidates);
      const subtree: Tree = generateLayer(segment, terminationRate, newTerminationThreshold, terminateNextLayer);

      layer[baseSegment]![connection] = subtree;
    }
  }

  return layer;
};

export const composeTree = (tree: Tree, parentHash: number = 0): ChildPrefab => {
  const [segment, embeddedEntities] = Object.entries(tree)[0];

  return {
    parentHash,
    prefab: {
      prefabObject: {
        hash: PrefabHash[segment as keyof typeof PrefabHash]
      },
      childPrefabs:
        embeddedEntities === null
          ? []
          : Object.entries(embeddedEntities!).map(([embeddedEntity, subtree]) =>
              composeTree(subtree, PrefabEmbeddedEntityHash[segment][embeddedEntity])
            )
    }
  };
};
