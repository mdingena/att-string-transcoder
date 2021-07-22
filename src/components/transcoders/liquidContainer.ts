import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.LiquidContainer;
export const VERSION = 1;

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type Effect = null | {
  hash: number;
  strengthMultiplier: number;
};

type FoodChunk = number;

type CustomData = {
  color: Color;
  isConsumableThroughSkin: boolean;
  visualDataHash: number;
  effects: Effect[];
  foodChunks: FoodChunk[];
};

export type Component = {
  canAddTo?: boolean;
  canRemoveFrom?: boolean;
  contentLevel?: number;
  hasContent?: boolean;
  isCustom?: boolean;
  presetHash?: number;
  customData?: null | CustomData;
};

export const decode = (reader: BinaryReader): Component => {
  const result: Component = {
    canAddTo: reader.boolean(),
    canRemoveFrom: reader.boolean(),
    contentLevel: reader.int(),
    hasContent: reader.boolean(),
    isCustom: reader.boolean(),
    presetHash: reader.uInt()
  };

  /* Get custom data */
  const isNull = reader.boolean();
  if (isNull) {
    result.customData = null;
  } else {
    const customData = {
      color: {
        r: reader.float(),
        g: reader.float(),
        b: reader.float(),
        a: reader.float()
      },
      isConsumableThroughSkin: reader.boolean(),
      visualDataHash: reader.uInt()
    };

    /* Get the effects array. */
    const effectsLength = reader.uInt();
    const effects: Effect[] = [];
    for (let index = 0; index < effectsLength; ++index) {
      /* Skip effect if is null. */
      const isNull = reader.boolean();
      if (isNull) {
        effects.push(null);
        continue;
      }

      effects.push({
        hash: reader.uInt(),
        strengthMultiplier: reader.float()
      });
    }

    /* Get the food chunks array. */
    const foodChunksLength = reader.uInt();
    const foodChunks: FoodChunk[] = [];
    for (let index = 0; index < foodChunksLength; ++index) {
      foodChunks.push(reader.uInt());
    }

    /* Append custom data to result. */
    result.customData = {
      ...customData,
      effects,
      foodChunks
    };
  }

  return result;
};

export const encode = ({
  canAddTo = false,
  canRemoveFrom = false,
  contentLevel = 0,
  hasContent = !!contentLevel,
  isCustom = false,
  presetHash = 0,
  customData = null
}: Component): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.LiquidContainer);
  const hashBits = writer.flush();

  /* Component data. */
  writer.boolean(canAddTo);
  writer.boolean(canRemoveFrom);
  writer.int(Math.round(contentLevel));
  writer.boolean(hasContent);
  writer.boolean(isCustom);
  writer.uInt(presetHash);

  if (customData === null) {
    writer.boolean(true); // isNull bit
  } else {
    writer.boolean(false); // isNull bit
    writer.float(customData.color.r);
    writer.float(customData.color.g);
    writer.float(customData.color.b);
    writer.float(customData.color.a);
    writer.boolean(customData.isConsumableThroughSkin);
    writer.uInt(customData.visualDataHash);
    writer.uInt(customData.effects.length);

    for (const effect of customData.effects) {
      if (effect === null) {
        writer.boolean(true); // isNull bit
      } else {
        writer.boolean(false); // isNull bit
        writer.uInt(effect.hash);
        writer.float(effect.strengthMultiplier);
      }
    }

    writer.uInt(customData.foodChunks.length);

    for (const foodChunk of customData.foodChunks) {
      writer.uInt(foodChunk);
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
