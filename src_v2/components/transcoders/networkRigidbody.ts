import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type NetworkRigidbody = {
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
  isKinematic?: boolean;
  isServerSleeping?: boolean;
  velocity?: {
    x: number;
    y: number;
    z: number;
  };
  angularVelocity?: {
    x: number;
    y: number;
    z: number;
  };
};

export const decode = (reader: BinaryReader, version: number): NetworkRigidbody => {
  const component: NetworkRigidbody = {};

  if (version >= 1) {
    component.position = {
      x: reader.float(),
      y: reader.float(),
      z: reader.float()
    };
  }

  if (version >= 1) {
    component.rotation = {
      x: reader.float(),
      y: reader.float(),
      z: reader.float(),
      w: reader.float()
    };
  }

  if (version >= 1) component.isKinematic = reader.boolean();

  if (version >= 1) component.isServerSleeping = reader.boolean();

  if (version >= 1) {
    component.velocity = {
      x: reader.float(),
      y: reader.float(),
      z: reader.float()
    };
  }

  if (version >= 1) {
    component.angularVelocity = {
      x: reader.float(),
      y: reader.float(),
      z: reader.float()
    };
  }

  return component;
};

export const encode = ({
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: 0, z: 0, w: 1 },
  isKinematic = false,
  isServerSleeping = false,
  velocity = { x: 0, y: 0, z: 0 },
  angularVelocity = { x: 0, y: 0, z: 0 }
}: NetworkRigidbody): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.NetworkRigidbody);
  const hashBits = writer.flush();

  /* Component data. */
  writer.float(position.x);
  writer.float(position.y);
  writer.float(position.z);
  writer.float(rotation.x);
  writer.float(rotation.y);
  writer.float(rotation.z);
  writer.float(rotation.w);
  writer.boolean(isKinematic);
  writer.boolean(isServerSleeping);
  writer.float(velocity.x);
  writer.float(velocity.y);
  writer.float(velocity.z);
  writer.float(angularVelocity.x);
  writer.float(angularVelocity.y);
  writer.float(angularVelocity.z);

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
