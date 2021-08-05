import { ComponentHash } from '../../ComponentHash';
import { PopulationDefinitionHash } from '../../PopulationDefinitionHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

type PopulationSaveDataChild = {
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

export const decode = (reader: BinaryReader): PopulationSpawnArea => {
  const definition = reader.uInt();
  const isPopulationStarted = reader.boolean();

  /* Get the children array. */
  const childrenLength = reader.uInt();
  const children: PopulationSaveDataChild[] = [];
  for (let index = 0; index < childrenLength; ++index) {
    children.push({
      index: reader.int(),
      pointIndex: reader.int()
    });
  }

  const maxPopulation = reader.int();
  const currentPopulation = reader.int();
  const checkPopulationTime = reader.uLong();
  const numberOfSpawnPoints = reader.int();
  const startingPopulation = reader.int();
  const isOneOff = reader.boolean();

  return {
    definition,
    isPopulationStarted,
    children,
    maxPopulation,
    currentPopulation,
    checkPopulationTime,
    numberOfSpawnPoints,
    startingPopulation,
    isOneOff
  };
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
