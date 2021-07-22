import { BinaryReader } from '../utils';

export type PrefabObject = {
  hash: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
  rotation?: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
  scale?: number;
};

export const decodePrefabObject = (reader: BinaryReader): PrefabObject => ({
  hash: reader.uInt(),
  position: {
    x: reader.float(),
    y: reader.float(),
    z: reader.float()
  },
  rotation: {
    x: reader.float(),
    y: reader.float(),
    z: reader.float(),
    w: reader.float()
  },
  scale: reader.float()
});
