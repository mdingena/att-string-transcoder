import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

type GrabPointParameters = null | {
  grabPointIndex: number;
  lastLinearPosition: number;
  lastPosition: {
    x: number;
    y: number;
    z: number;
  };
  lastRotation: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
};

export type Pickup = {
  lastInteractorPlayerId?: number;
  dockedMemory?: GrabPointParameters[];
};

export const decode = (reader: BinaryReader, version: number): Pickup => {
  const component: Pickup = {};

  if (version >= 1) component.lastInteractorPlayerId = reader.int();

  if (version >= 2) {
    /* Get the grabPointParameters array. */
    const grabPointParametersLength = reader.uInt();
    const grabPointParameters: GrabPointParameters[] = [];
    for (let index = 0; index < grabPointParametersLength; ++index) {
      /* Skip grabPointParameters if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        grabPointParameters.push(null);
        continue;
      }

      grabPointParameters.push({
        grabPointIndex: reader.int(),
        lastLinearPosition: reader.float(),
        lastPosition: {
          x: reader.uInt(),
          y: reader.uInt(),
          z: reader.uInt()
        },
        lastRotation: {
          x: reader.uInt(),
          y: reader.uInt(),
          z: reader.uInt(),
          w: reader.uInt()
        }
      });
    }

    component.dockedMemory = grabPointParameters;
  }

  return component;
};

export const encode = ({ lastInteractorPlayerId = 0, dockedMemory = [] }: Pickup): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.Pickup);
  const hashBits = writer.flush();

  /* Component data. */
  writer.int(lastInteractorPlayerId);
  writer.uInt(dockedMemory.length);

  for (const grabPointParameters of dockedMemory) {
    if (grabPointParameters === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.int(grabPointParameters.grabPointIndex);
      writer.float(grabPointParameters.lastLinearPosition);
      writer.uInt(grabPointParameters.lastPosition.x);
      writer.uInt(grabPointParameters.lastPosition.y);
      writer.uInt(grabPointParameters.lastPosition.z);
      writer.uInt(grabPointParameters.lastRotation.x);
      writer.uInt(grabPointParameters.lastRotation.y);
      writer.uInt(grabPointParameters.lastRotation.z);
      writer.uInt(grabPointParameters.lastRotation.w);
    }
  }

  const dataBits = writer.flush();

  /* Component data length. */
  writer.uInt(dataBits.length);
  const sizeBits = writer.flush();

  /* Return encoded component. */
  writer.binary(hashBits);
  writer.binary(sizeBits);
  writer.binary(dataBits);

  return writer.flush();
};
