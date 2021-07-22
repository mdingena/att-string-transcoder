import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.StatManager;
export const VERSION = 2;

type Stat = null | {
  hash: number;
  baseFlat: number;
};

type TimedModifier = null | {
  hash: number;
  value: number;
  isMultiplier: boolean;
  time: number;
};

type IndirectModifierSaveData = {
  valueOverDurationHash: number;
  baseValue: number;
  duration: number;
  tick: number;
};

type IndirectStatModifier = null | {
  hash: number;
  time: number;
  modifiers: IndirectModifierSaveData[];
};

export type Component = {
  stats?: Stat[];
  modifiers?: TimedModifier[];
  indirectStatModifiers?: IndirectStatModifier[];
};

export const decode = (reader: BinaryReader): Component => {
  /* Get stats array. */
  const statsLength = reader.uInt();
  const stats: Stat[] = [];
  for (let index = 0; index < statsLength; ++index) {
    /* Skip stat if is null. */
    const isNull = reader.boolean();
    if (isNull) {
      stats.push(null);
      continue;
    }

    stats.push({
      hash: reader.uInt(),
      baseFlat: reader.float()
    });
  }

  /* Get modifiers array. */
  const modifiersLength = reader.uInt();
  const modifiers: TimedModifier[] = [];
  for (let index = 0; index < modifiersLength; ++index) {
    /* Skip modifier if is null. */
    const isNull = reader.boolean();
    if (isNull) {
      modifiers.push(null);
      continue;
    }

    modifiers.push({
      hash: reader.uInt(),
      value: reader.float(),
      isMultiplier: reader.boolean(),
      time: reader.uLong()
    });
  }

  /* Get indirect stat modifiers array. */
  const indirectStatModifiersLength = reader.uInt();
  const indirectStatModifiers: IndirectStatModifier[] = [];
  for (let index = 0; index < indirectStatModifiersLength; ++index) {
    /* Skip indirectStatModifier if is null. */
    const isNull = reader.boolean();
    if (isNull) {
      indirectStatModifiers.push(null);
      continue;
    }

    const hash = reader.uInt();
    const time = reader.uLong();

    /* Get indirect modifier save data array. */
    const indirectModifiersSaveDataLength = reader.uInt();
    const indirectModifiersSaveData: IndirectModifierSaveData[] = [];
    for (let index = 0; index < indirectModifiersSaveDataLength; ++index) {
      indirectModifiersSaveData.push({
        valueOverDurationHash: reader.uInt(),
        baseValue: reader.float(),
        duration: reader.uInt(),
        tick: reader.uInt()
      });
    }

    indirectStatModifiers.push({
      hash,
      time,
      modifiers: indirectModifiersSaveData
    });
  }

  return { stats, modifiers, indirectStatModifiers };
};

export const encode = ({ stats = [], modifiers = [], indirectStatModifiers = [] }: Component): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.StatManager);
  const hashBits = writer.flush();

  /* Component data. */
  writer.uInt(stats.length);

  for (const stat of stats) {
    if (stat === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.uInt(stat.hash);
      writer.float(stat.baseFlat);
    }
  }

  writer.uInt(modifiers.length);

  for (const modifier of modifiers) {
    if (modifier === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.uInt(modifier.hash);
      writer.float(modifier.value);
      writer.boolean(modifier.isMultiplier);
      writer.uLong(modifier.time);
    }
  }

  writer.uInt(indirectStatModifiers.length);

  for (const indirectStatModifier of indirectStatModifiers) {
    if (indirectStatModifier === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.uInt(indirectStatModifier.hash);
      writer.uLong(indirectStatModifier.time);
      writer.uInt(indirectStatModifier.modifiers.length);

      for (const modifier of indirectStatModifier.modifiers) {
        writer.uInt(modifier.valueOverDurationHash);
        writer.float(modifier.baseValue);
        writer.uInt(modifier.duration);
        writer.uInt(modifier.tick);
      }
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
