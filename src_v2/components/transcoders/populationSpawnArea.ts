import { ComponentHash } from '../../ComponentHash';
import { PopulationDefinitionHash } from '../../PopulationDefinitionHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

type PopulationSaveDataChild = null | {
  index: number;
  pointIndex: number;
};

export type PopulationSpawnArea = {
  definition?: number;
  isPopulationStarted?: boolean;
  children?: PopulationSaveDataChild[];
  maxPopulation?: number;
  currentPopulation?: number;
  checkPopulationTime?: number;
  numberOfSpawnPoints?: number;
  startingPopulation?: number;
  isOneOff?: boolean;
};

export const decode = (reader: BinaryReader, version: number): PopulationSpawnArea => {
  const component: PopulationSpawnArea = {};

  if (version >= 2) component.definition = reader.uInt();

  if (version >= 2) component.isPopulationStarted = reader.boolean();

  if (version >= 2) {
    /* Get the children array. */
    const childrenLength = reader.uInt();
    component.children = [];
    for (let index = 0; index < childrenLength; ++index) {
      /* Skip child if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        component.children.push(null);
        continue;
      }

      component.children.push({
        index: reader.int(),
        pointIndex: reader.int()
      });
    }
  }

  if (version >= 2) component.maxPopulation = reader.int();

  if (version >= 2) component.currentPopulation = reader.int();

  if (version >= 2) component.checkPopulationTime = reader.uLong();

  if (version >= 2) component.numberOfSpawnPoints = reader.int();

  if (version >= 2) component.startingPopulation = reader.int();

  if (version >= 2) component.isOneOff = reader.boolean();

  return component;
};

export const encode = ({
  definition = PopulationDefinitionHash.StickPopulation,
  isPopulationStarted = true,
  children = [],
  maxPopulation = 20,
  currentPopulation = 5,
  checkPopulationTime = 852974979330,
  numberOfSpawnPoints = 40,
  startingPopulation = 5,
  isOneOff = false
}: PopulationSpawnArea): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.PopulationSpawnArea);
  const hashBits = writer.flush();

  /* Component data. */
  writer.uInt(definition);
  writer.boolean(isPopulationStarted);
  writer.uInt(children.length);

  for (const child of children) {
    if (child === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.int(child.index);
      writer.int(child.pointIndex);
    }
  }

  writer.int(maxPopulation);
  writer.int(currentPopulation);
  writer.uLong(checkPopulationTime);
  writer.int(numberOfSpawnPoints);
  writer.int(startingPopulation);
  writer.boolean(isOneOff);
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
