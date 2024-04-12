import type { ATTPrefabHash } from './types/ATTPrefabHash.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';

import { ATTPrefabs } from './types/ATTPrefabs.js';

export const attPrefabHashes = Object.values(ATTPrefabs).map(({ hash }) => hash as number);

export const attPrefabNames = Object.fromEntries<ATTPrefabName>(
  Object.entries(ATTPrefabs).map(([name, { hash }]) => [hash, name as ATTPrefabName])
) as Record<ATTPrefabHash, ATTPrefabName>;

export const latestDurabilityModuleComponentVersion = 1;
export const latestHeatSourceBaseComponentVersion = 1;
export const latestLiquidContainerComponentVersion = 1;
export const latestPhysicalMaterialPartComponentVersion = 1;
export const latestPopulationSpawnAreaComponentVersion = 2;
export const latestNetworkRigidbodyComponentVersion = 1;
export const latestSentGiftComponentVersion = 1;
export const latestSpawnAreaComponentVersion = 1;

export const latestSupportedComponentVersions = new Map([
  [7704646, 1], // PopulationPath
  [22446553, 2], // Embeddable
  [34507654, 1], // CylindricalBoundsSurface
  [43510150, 2], // TaxManager
  [70871065, 1], // SafePositionSetter
  [109805019, 0], // WoodcutTree (duplicate with 1098050191)
  [159391088, 1], // ModifiableAdditionalStaticContent
  [200292695, 3], // LogicFloatChangeOnBool
  [205333986, 1], // Cookable
  [237360636, 2], // RopeGrab
  [259381630, 1], // Ecosystem
  [272188517, 1], // PhysicalMaterialPart
  [276353327, 1], // WoodcutPointCollection
  [277505782, 2], // Trigger
  [309083880, 1], // AreaOfInfluenceReceiver
  [320224849, 1], // WheelGrab
  [391977879, 2], // Mould
  [392234266, 3],
  [392344172, 1], // LogicFloatThresholdReceiver
  [403040752, 2], // PlayerDetect
  [414036426, 0], // KeyItem
  [496827038, 1],
  [566175523, 1], // LinearPartCloner
  [586602603, 1],
  [623957243, 1],
  [634164392, 5], // LootModule
  [654225716, 1], // SpawnBuried
  [661497638, 1], // SentGift
  [701033518, 1],
  [715394364, 2],
  [751359624, 1], // GrowthStageComponent
  [766675725, 1], // GenericCraftingStation
  [775321715, 2],
  [788405183, 1], // LevelStatModifier
  [830106687, 1], // RespawnOnDestroy
  [875684520, 1], // ForestGenerator
  [902024186, 1], // Smelter
  [910018632, 2], // GameTimeManager
  [963907309, 1], // Book
  [967932020, 1], // GlobalLogicManager
  [986260983, 0], // PopulationFolder`2
  [1001395212, 2], // PlaceItemPuzzleLogic
  [1063725326, 1], // WayPointPath
  [1081247904, 1], // LogicIntReceiver
  [1085701614, 1], // TimeBasedStagedPrefab
  [1098050191, 3], // WoodcutTree
  [1176706580, 2], // PlaceItemNoDockPuzzleLogic
  [1198377566, 1],
  [1211178616, 1], // PlayerInteractionManager
  [1217391130, 1], // HeatPointCollection
  [1228539097, 1], // LogicVector3Receiver
  [1233775263, 1], // PlayerProxy
  [1257282635, 2], // LogicBoolSender
  [1268269765, 1],
  [1379877208, 0], // StewContainer
  [1390862571, 1], // StageBasedPrefab
  [1391720462, 2], // LogicGateReceiver
  [1431397437, 2], // PopulationFolder
  [1435171891, 0], // ImpactDetectionLogic
  [1454441398, 2], // Pickup
  [1454955908, 1], // SerializedFullEmptyStatTrigger
  [1499506132, 1], // StewManager
  [1509838052, 1], // FireLogic
  [1556697998, 0], // MultiHandPickup
  [1558189723, 1],
  [1571096900, 0], // MouldRestrictor
  [1587058252, 1], // LockableHinge
  [1588536425, 1], // Crank
  [1594932294, 0], // Lever
  [1624211074, 1], // BasicDynamicPath
  [1645673210, 2], // TradeVendor
  [1651678475, 1], // RockCluster
  [1714180166, 2], // SpawnInCircle
  [1753993206, 2], // GlobalPagesManager
  [1756836969, 1],
  [1776498660, 3], // PositionRestrictor
  [1787084913, 4], // CaveLayerManager
  [1823429789, 1], // GhostSnapSlotCollection
  [1871432223, 1], // DurabilityModule
  [1874870249, 2], // MovePickup
  [1908922854, 1], // AdditionalStaticContent
  [1923918202, 3], // PageInstance
  [1931537627, 1], // BasicPopulationFolder
  [1934129787, 1], // LogicReset
  [1946741389, 0], // PlayerLandmark
  [1962842866, 1], // DirectionalBoundsSurface
  [1964978567, 1], // LogicSumIntReceiver
  [2026743731, 1], // LogicVector3Sender
  [2042199192, 0], // TreeDecay
  [2069630919, 1], // MRK_ActivationLever
  [2081565440, 2],
  [2120963769, 1], // LogicFloatSender
  [2126500253, 1], // HealthBasedDigable
  [2127962967, 1], // NetworkedFloatStream
  [2169673426, 1], // MeshPlacement
  [2190886200, 1], // SkillShrine
  [2213531414, 0], // TwoStepLever
  [2241532968, 0], // PaperPageInstance
  [2253011220, 1], // LogicIntToBool
  [2262399392, 2], // LeaderboardManager
  [2272630171, 1], // ForgedPointCollection
  [2290978823, 1], // NetworkRigidbody
  [2293737711, 1], // OfflinePlayerProgressionHandler
  [2314081177, 1], // LandmarkManager
  [2363255897, 1],
  [2400796504, 1], // SetPiece
  [2443660852, 1], // MapBoard
  [2450553269, 1], // Recycler
  [2495475500, 2], // PlaceItemNoDockFirePuzzleLogic
  [2498617949, 1], // RotatePickup
  [2563434699, 1], // LogicIntThresholdReceiver
  [2563567105, 2], // StatManager
  [2576456808, 1], // CurveOutput
  [2590537994, 2], // Landmark
  [2592242915, 2], // PickupDock
  [2610542999, 1], // LogicIntRangeReceiver
  [2617495528, 1], // SpawnArea
  [2624099526, 1], // Door
  [2629079826, 1], // BookRestrictor
  [2700376822, 1], // LogicFloatRangeReceiver
  [2718386020, 0], // FireStatusRaycastCrafter
  [2721336102, 0], // EnergyBasedHeatSource
  [2743469720, 0], // PlayerStatManager
  [2759613175, 1],
  [2801168996, 2], // DrawBridgeRangeLogic
  [2807522140, 0], // PickupDecay
  [2814234626, 1], // LogicSumFloatReceiver
  [2815374842, 1], // RaycastCrafter
  [2833060406, 1],
  [2880587164, 1], // LogicIntSender
  [2882590463, 1], // CookingPot
  [2912807649, 3], // PlayerUnlockStation
  [2951515968, 1], // PlayerInteractionRestrictor
  [2971871217, 1],
  [2975913730, 1], // StaticGenerationParent
  [2978042925, 1], // DrawBridgeLogic
  [2978388169, 1], // PopulationDefinitionManager
  [2978415408, 0], // GlobalLiquidContainer
  [3008358716, 0], // DockableJoints
  [3025846985, 0], // LevelSelectCaveTeleporter
  [3070493599, 2], // PopulationSpawnArea
  [3082855726, 0], // CapPickup
  [3084373371, 1], // CommunalStorage
  [3101665521, 1], // RandomSpawnRectangle
  [3109677933, 2], // TimerLogic
  [3146178080, 1], // TeleportationPoint
  [3171294583, 1],
  [3188272159, 1], // LogicFloatReceiver
  [3202828999, 1],
  [3230087383, 1], // OneTimeUpgradeuinteraction
  [3236280681, 3], // ChisellingDeck
  [3245685963, 1], // LogicFloatReset
  [3257374625, 1], // Leaderboard
  [3373651539, 1], // BuildupPickup
  [3402094521, 1], // GrowerComponent
  [3431876266, 1], // InfoBoard
  [3445325106, 1], // DiggingImpactor
  [3450348902, 1], // Visibility
  [3457519710, 2], // Fire
  [3538443740, 1], // PositionProvider
  [3561515449, 1], // CaveLayerStreamer
  [3583462804, 1], // SlidingDoor
  [3588929783, 1], // CaveTeleporter
  [3598052397, 0], // Chest
  [3608460219, 1], // SerializedTimedEvent
  [3638500874, 2], // TreeSpawner
  [3640332570, 1], // CaveTeleporterManager
  [3642863935, 2], // GeneratedLoot
  [3665939353, 1], // Fuse
  [3674519521, 1], // ModifiableStaticManager
  [3684992773, 0], // ChildSyncableCollection`4
  [3704379512, 1], // CheckPoint
  [3715151601, 0], // GenerationStarter
  [3751351177, 1], // LogicBoolReceiver
  [3764204299, 0], // BookPageInstance
  [3801256786, 3], // BasicDecay
  [3810525047, 0], // LogicValueSender`1
  [3820454400, 5], // RepairBox
  [3884278372, 0], // MovingLandmark
  [3901697682, 1], // ButtonCounter
  [3920618075, 1], // ColoredExplosive
  [3932346318, 1], // GlobalPopulationsManager
  [4081488368, 1], // WipeManager
  [4095875831, 1], // LandmarkDiscoverZone
  [4109360768, 2], // HeatSourceBase
  [4134534481, 1], // Enchantable
  [4144776006, 3], // TimeManager
  [4163873252, 0], // GlobalCommunalStorageValuesFile
  [4179293747, 1], // LiquidContainer
  [4282337604, 1] // SphericalSurface
]);

export const terminatorHash = 0;
