import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

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

export type StatManager = {
  stats?: Stat[];
  modifiers?: TimedModifier[];
  indirectStatModifiers?: IndirectStatModifier[];
};

export const decode = (reader: BinaryReader, version: number): StatManager => {
  const component: StatManager = {};

  if (version >= 2) {
    /* Get stats array. */
    const statsLength = reader.uInt();
    component.stats = [];
    for (let index = 0; index < statsLength; ++index) {
      /* Skip stat if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        component.stats.push(null);
        continue;
      }

      component.stats.push({
        hash: reader.uInt(),
        baseFlat: reader.float()
      });
    }
  }

  if (version >= 2) {
    /* Get modifiers array. */
    const modifiersLength = reader.uInt();
    component.modifiers = [];
    for (let index = 0; index < modifiersLength; ++index) {
      /* Skip modifier if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        component.modifiers.push(null);
        continue;
      }

      component.modifiers.push({
        hash: reader.uInt(),
        value: reader.float(),
        isMultiplier: reader.boolean(),
        time: reader.uLong()
      });
    }
  }

  if (version >= 2) {
    /* Get indirect stat modifiers array. */
    const indirectStatModifiersLength = reader.uInt();
    component.indirectStatModifiers = [];
    for (let index = 0; index < indirectStatModifiersLength; ++index) {
      /* Skip indirectStatModifier if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        component.indirectStatModifiers.push(null);
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

      component.indirectStatModifiers.push({
        hash,
        time,
        modifiers: indirectModifiersSaveData
      });
    }
  }

  return component;
};

export const encode = ({ stats = [], modifiers = [], indirectStatModifiers = [] }: StatManager): string => {
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
