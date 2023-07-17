import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import type { Position } from '../types/Position.js';
import type { Rotation } from '../types/Rotation.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type GrabPointParameters = null | {
  grabPointIndex: number;
  lastLinearPosition: number;
  lastPosition: Position;
  lastRotation: Rotation;
};

type PickupComponentPropsV1 = {
  lastInteractorPlayerId?: number;
  dockedMemory?: never;
};

type PickupComponentPropsV2 = {
  lastInteractorPlayerId?: number;
  dockedMemory?: GrabPointParameters[];
};

export type PickupComponentProps = PickupComponentPropsV1 | PickupComponentPropsV2;

/**
 * @since 3.0.0
 * @version 2
 */
export class PickupComponent extends Component {
  lastInteractorPlayerId: number;
  dockedMemory: GrabPointParameters[];

  constructor({ version, lastInteractorPlayerId, dockedMemory }: ComponentProps & PickupComponentProps) {
    const hash = ComponentHash.Pickup;
    const name = 'Pickup';

    super({ hash, name, version });

    this.lastInteractorPlayerId = lastInteractorPlayerId ?? 0;
    this.dockedMemory = dockedMemory ?? [];
  }

  static override fromBinary(reader: BinaryReader, version: number): PickupComponent {
    const props: ComponentProps & PickupComponentProps = { version };

    /**
     * @property {number} lastInteractorPlayerId
     * @since v1
     */
    if (props.version >= 1) {
      props.lastInteractorPlayerId = reader.readSignedInteger();
    }

    /**
     * @property {GrabPointParameters[]} dockedMemory
     * @since v2
     */
    if (props.version >= 2) {
      const grabPointParametersLength = reader.readUnsignedInteger();
      props.dockedMemory = [];

      for (let index = 0; index < grabPointParametersLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v2
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.dockedMemory.push(null);
          continue;
        }

        props.dockedMemory.push({
          /**
           * @property {number} grabPointIndex
           * @since v2
           */
          grabPointIndex: reader.readSignedInteger(),

          /**
           * @property {float} lastLinearPosition
           * @since v2
           */
          lastLinearPosition: reader.readFloat(),

          /**
           * @property {Position} lastPosition
           * @since v2
           */
          lastPosition: {
            x: reader.readFloat(),
            y: reader.readFloat(),
            z: reader.readFloat()
          },

          /**
           * @property {Rotation} lastRotation
           * @since v2
           */
          lastRotation: {
            x: reader.readFloat(),
            y: reader.readFloat(),
            z: reader.readFloat(),
            w: reader.readFloat()
          }
        });
      }
    }

    return new PickupComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} lastInteractorPlayerId
     * @since v1
     */
    if (version >= 1) {
      writer.writeSignedInteger(this.lastInteractorPlayerId);
    }

    /**
     * @property {GrabPointParameters[]} dockedMemory
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.dockedMemory.length);

      for (const grabPointParameters of this.dockedMemory) {
        const isNull = grabPointParameters === null;

        /**
         * @property {boolean} isNull
         * @since v2
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number} grabPointIndex
           * @since v2
           */
          writer.writeSignedInteger(grabPointParameters.grabPointIndex);

          /**
           * @property {float} lastLinearPosition
           * @since v2
           */
          writer.writeFloat(grabPointParameters.lastLinearPosition);

          /**
           * @property {Position} lastPosition
           * @since v2
           */
          writer.writeFloat(grabPointParameters.lastPosition.x);
          writer.writeFloat(grabPointParameters.lastPosition.y);
          writer.writeFloat(grabPointParameters.lastPosition.z);

          /**
           * @property {Rotation} lastRotation
           * @since v2
           */
          writer.writeFloat(grabPointParameters.lastRotation.x);
          writer.writeFloat(grabPointParameters.lastRotation.y);
          writer.writeFloat(grabPointParameters.lastRotation.z);
          writer.writeFloat(grabPointParameters.lastRotation.w);
        }
      }
    }

    return writer.flush();
  }
}
