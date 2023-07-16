import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

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

type StatManagerComponentPropsV2 = {
  stats?: Stat[];
  modifiers?: TimedModifier[];
  indirectStatModifiers?: IndirectStatModifier[];
};

export type StatManagerComponentProps = StatManagerComponentPropsV2;

export class StatManagerComponent extends Component {
  stats: Stat[];
  modifiers: TimedModifier[];
  indirectStatModifiers: IndirectStatModifier[];

  constructor({ version, stats, modifiers, indirectStatModifiers }: ComponentProps & StatManagerComponentProps) {
    const hash = ComponentHash.StatManager;
    const name = 'StatManager';

    super({ hash, name, version });

    this.stats = stats ?? [];
    this.modifiers = modifiers ?? [];
    this.indirectStatModifiers = indirectStatModifiers ?? [];
  }

  static override fromBinary(reader: BinaryReader, version: number): StatManagerComponent {
    const props: ComponentProps & StatManagerComponentProps = { version };

    /**
     * @property {Stat[]} stats
     * @since v2
     */
    if (props.version >= 2) {
      const statsLength = reader.readUnsignedInteger();
      props.stats = [];

      for (let index = 0; index < statsLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v2
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.stats.push(null);
          continue;
        }

        props.stats.push({
          /**
           * @property {number} hash
           * @since v2
           */
          hash: reader.readUnsignedInteger(),

          /**
           * @property {float} baseFlat
           * @since v2
           */
          baseFlat: reader.readFloat()
        });
      }
    }

    /**
     * @property {TimedModifier[]} modifiers
     * @since v2
     */
    if (props.version >= 2) {
      const modifiersLength = reader.readUnsignedInteger();
      props.modifiers = [];

      for (let index = 0; index < modifiersLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v2
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.modifiers.push(null);
          continue;
        }

        props.modifiers.push({
          /**
           * @property {number} hash
           * @since v2
           */
          hash: reader.readUnsignedInteger(),

          /**
           * @property {float} value
           * @since v2
           */
          value: reader.readFloat(),

          /**
           * @property {boolean} isMultiplier
           * @since v2
           */
          isMultiplier: reader.readBoolean(),

          /**
           * @property {number} time
           * @since v2
           */
          time: reader.readUnsignedLong()
        });
      }
    }

    /**
     * @property {IndirectStatModifier[]} indirectStatModifiers
     * @since v2
     */
    if (props.version >= 2) {
      const indirectStatModifiersLength = reader.readUnsignedInteger();
      props.indirectStatModifiers = [];

      for (let index = 0; index < indirectStatModifiersLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v2
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.indirectStatModifiers.push(null);
          continue;
        }

        /**
         * @property {number} hash
         * @since v2
         */
        const hash = reader.readUnsignedInteger();

        /**
         * @property {number} time
         * @since v2
         */
        const time = reader.readUnsignedLong();

        /**
         * @property {IndirectModifierSaveData[]} indirectModifiersSaveData
         * @since v2
         */
        const indirectModifiersSaveDataLength = reader.readUnsignedInteger();
        const indirectModifiersSaveData: IndirectModifierSaveData[] = [];

        for (
          let indirectModifiersSaveDataIndex = 0;
          indirectModifiersSaveDataIndex < indirectModifiersSaveDataLength;
          ++indirectModifiersSaveDataIndex
        ) {
          indirectModifiersSaveData.push({
            /**
             * @property {number} valueOverDurationHash
             * @since v2
             */
            valueOverDurationHash: reader.readUnsignedInteger(),

            /**
             * @property {float} baseValue
             * @since v2
             */
            baseValue: reader.readFloat(),

            /**
             * @property {number} duration
             * @since v2
             */
            duration: reader.readUnsignedInteger(),

            /**
             * @property {number} tick
             * @since v2
             */
            tick: reader.readUnsignedInteger()
          });
        }

        props.indirectStatModifiers.push({
          hash,
          time,
          modifiers: indirectModifiersSaveData
        });
      }
    }

    return new StatManagerComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {Stat[]} stats
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.stats.length);

      for (const stat of this.stats) {
        const isNull = stat === null;

        /**
         * @property {boolean} isNull
         * @since v2
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number} hash
           * @since v2
           */
          writer.writeUnsignedInteger(stat.hash);

          /**
           * @property {float} baseFlat
           * @since v2
           */
          writer.writeFloat(stat.baseFlat);
        }
      }
    }

    /**
     * @property {TimedModifier[]} modifiers
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.modifiers.length);

      for (const modifier of this.modifiers) {
        const isNull = modifier === null;

        /**
         * @property {boolean} isNull
         * @since v2
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number} hash
           * @since v2
           */
          writer.writeUnsignedInteger(modifier.hash);

          /**
           * @property {float} value
           * @since v2
           */
          writer.writeFloat(modifier.value);

          /**
           * @property {boolean} isMultiplier
           * @since v2
           */
          writer.writeBoolean(modifier.isMultiplier);

          /**
           * @property {number} time
           * @since v2
           */
          writer.writeUnsignedLong(modifier.time);
        }
      }
    }

    /**
     * @property {IndirectStatModifier[]} indirectStatModifiers
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.indirectStatModifiers.length);

      for (const indirectStatModifier of this.indirectStatModifiers) {
        const isNull = indirectStatModifier === null;

        /**
         * @property {boolean} isNull
         * @since v2
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number} hash
           * @since v2
           */
          writer.writeUnsignedInteger(indirectStatModifier.hash);

          /**
           * @property {number} time
           * @since v2
           */
          writer.writeUnsignedLong(indirectStatModifier.time);

          /**
           * @property {IndirectModifierSaveData[]} indirectModifiersSaveData
           * @since v2
           */
          writer.writeUnsignedInteger(indirectStatModifier.modifiers.length);

          for (const modifier of indirectStatModifier.modifiers) {
            /**
             * @property {number} valueOverDurationHash
             * @since v2
             */
            writer.writeUnsignedInteger(modifier.valueOverDurationHash);

            /**
             * @property {float} baseValue
             * @since v2
             */
            writer.writeFloat(modifier.baseValue);

            /**
             * @property {number} duration
             * @since v2
             */
            writer.writeUnsignedInteger(modifier.duration);

            /**
             * @property {number} tick
             * @since v2
             */
            writer.writeUnsignedInteger(modifier.tick);
          }
        }
      }
    }

    return writer.flush();
  }
}
