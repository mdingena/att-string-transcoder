import type { ATTPrefabHash } from './types/ATTPrefabHash.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { SupportedComponent } from './types/SupportedComponent.js';
import type { SupportedEntity } from './types/SupportedEntity.js';
import { BasicDecayComponent } from './components/BasicDecayComponent.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { FireComponent } from './components/FireComponent.js';
import { FuseComponent } from './components/FuseComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { PickupComponent } from './components/PickupComponent.js';
import { PickupDockComponent } from './components/PickupDockComponent.js';
import { PopulationSpawnAreaComponent } from './components/PopulationSpawnAreaComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import { SpawnAreaComponent } from './components/SpawnAreaComponent.js';
import { StatManagerComponent } from './components/StatManagerComponent.js';
import { WoodcutTreeComponent } from './components/WoodcutTreeComponent.js';
import { FireEntity } from './entities/FireEntity.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';

export const attPrefabHashes = Object.values(ATTPrefabs).map(({ hash }) => hash as number);

export const attPrefabNames = Object.fromEntries<ATTPrefabName>(
  Object.entries(ATTPrefabs).map(([name, { hash }]) => [hash, name as ATTPrefabName])
) as Record<ATTPrefabHash, ATTPrefabName>;

export const latestDurabilityModuleComponentVersion = 1;
export const latestHeatSourceBaseComponentVersion = 1;
export const latestLiquidContainerComponentVersion = 1;
export const latestPhysicalMaterialPartComponentVersion = 1;
export const latestNetworkRigidbodyComponentVersion = 1;
export const latestSentGiftComponentVersion = 1;

export const latestSupportedComponentVersions = new Map([
  [7704646, 1],
  [22446553, 2],
  [34507654, 1],
  [43510150, 2],
  [70871065, 1],
  [159391088, 1],
  [200292695, 3],
  [205333986, 1],
  [237360636, 2],
  [259381630, 1],
  [272188517, 1],
  [276353327, 1],
  [277505782, 2],
  [309083880, 1],
  [320224849, 1],
  [391977879, 2],
  [392234266, 3],
  [392344172, 1],
  [403040752, 2],
  [496827038, 1],
  [566175523, 1],
  [586602603, 1],
  [623957243, 1],
  [634164392, 5],
  [654225716, 1],
  [661497638, 1],
  [701033518, 1],
  [715394364, 2],
  [751359624, 1],
  [766675725, 1],
  [775321715, 2],
  [788405183, 1],
  [830106687, 1],
  [875684520, 1],
  [902024186, 1],
  [910018632, 2],
  [963907309, 1],
  [967932020, 1],
  [1001395212, 2],
  [1063725326, 1],
  [1081247904, 1],
  [1085701614, 1],
  [1098050191, 3],
  [1176706580, 2],
  [1198377566, 1],
  [1211178616, 1],
  [1217391130, 1],
  [1228539097, 1],
  [1233775263, 1],
  [1257282635, 2],
  [1268269765, 1],
  [1390862571, 1],
  [1391720462, 2],
  [1431397437, 2],
  [1454441398, 2],
  [1454955908, 1],
  [1499506132, 1],
  [1509838052, 1],
  [1558189723, 1],
  [1587058252, 1],
  [1588536425, 1],
  [1624211074, 1],
  [1645673210, 2],
  [1651678475, 1],
  [1714180166, 2],
  [1753993206, 2],
  [1756836969, 1],
  [1776498660, 3],
  [1787084913, 4],
  [1823429789, 1],
  [1871432223, 1],
  [1874870249, 2],
  [1908922854, 1],
  [1923918202, 3],
  [1931537627, 1],
  [1934129787, 1],
  [1962842866, 1],
  [1964978567, 1],
  [2026743731, 1],
  [2069630919, 1],
  [2081565440, 2],
  [2120963769, 1],
  [2126500253, 1],
  [2127962967, 1],
  [2169673426, 1],
  [2190886200, 1],
  [2253011220, 1],
  [2262399392, 2],
  [2272630171, 1],
  [2290978823, 1],
  [2293737711, 1],
  [2314081177, 1],
  [2363255897, 1],
  [2400796504, 1],
  [2443660852, 1],
  [2450553269, 1],
  [2495475500, 2],
  [2498617949, 1],
  [2563434699, 1],
  [2563567105, 2],
  [2576456808, 1],
  [2590537994, 2],
  [2592242915, 2],
  [2610542999, 1],
  [2617495528, 1],
  [2624099526, 1],
  [2629079826, 1],
  [2700376822, 1],
  [2759613175, 1],
  [2801168996, 2],
  [2814234626, 1],
  [2815374842, 1],
  [2833060406, 1],
  [2880587164, 1],
  [2882590463, 1],
  [2912807649, 3],
  [2951515968, 1],
  [2971871217, 1],
  [2975913730, 1],
  [2978042925, 1],
  [2978388169, 1],
  [3070493599, 2],
  [3084373371, 1],
  [3101665521, 1],
  [3109677933, 2],
  [3146178080, 1],
  [3171294583, 1],
  [3188272159, 1],
  [3202828999, 1],
  [3230087383, 1],
  [3236280681, 3],
  [3245685963, 1],
  [3257374625, 1],
  [3373651539, 1],
  [3402094521, 1],
  [3431876266, 1],
  [3445325106, 1],
  [3450348902, 1],
  [3457519710, 2],
  [3538443740, 1],
  [3561515449, 1],
  [3588929783, 1],
  [3608460219, 1],
  [3638500874, 2],
  [3640332570, 1],
  [3642863935, 2],
  [3665939353, 1],
  [3674519521, 1],
  [3704379512, 1],
  [3751351177, 1],
  [3801256786, 3],
  [3820454400, 4],
  [3901697682, 1],
  [3920618075, 1],
  [3932346318, 1],
  [4081488368, 1],
  [4095875831, 1],
  [4109360768, 2],
  [4134534481, 1],
  [4144776006, 3],
  [4179293747, 1],
  [4282337604, 1]
]);

export const supportedComponents: Record<string, SupportedComponent> = {
  BasicDecay: BasicDecayComponent,
  DurabilityModule: DurabilityModuleComponent,
  Fire: FireComponent,
  Fuse: FuseComponent,
  HeatSourceBase: HeatSourceBaseComponent,
  LiquidContainer: LiquidContainerComponent,
  NetworkRigidbody: NetworkRigidbodyComponent,
  PhysicalMaterialPart: PhysicalMaterialPartComponent,
  Pickup: PickupComponent,
  PickupDock: PickupDockComponent,
  PopulationSpawnArea: PopulationSpawnAreaComponent,
  SentGift: SentGiftComponent,
  SpawnArea: SpawnAreaComponent,
  StatManager: StatManagerComponent,
  WoodcutTree: WoodcutTreeComponent
};

export const supportedEntities: Record<string, SupportedEntity> = {
  Fire: FireEntity
};

export const terminatorHash = 0;
