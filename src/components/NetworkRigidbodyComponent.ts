import type { BinaryReader } from '../BinaryReader.js';
import type { AngularVelocity } from '../types/AngularVelocity.js';
import type { BinaryString } from '../types/BinaryString.js';
import type { Position } from '../types/Position.js';
import type { Rotation } from '../types/Rotation.js';
import type { Velocity } from '../types/Velocity.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type NetworkRigidbodyComponentPropsV1 = {
  position?: Position | undefined;
  rotation?: Rotation | undefined;
  isKinematic?: boolean | undefined;
  isServerSleeping?: boolean | undefined;
  velocity?: Velocity | undefined;
  angularVelocity?: AngularVelocity | undefined;
};

export type NetworkRigidbodyComponentProps = NetworkRigidbodyComponentPropsV1;

/**
 * Controls physical behaviour of the `Prefab` it is attached to.
 *
 * @see [Class: `NetworkRigidbodyComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/NetworkRigidbodyComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new NetworkRigidbodyComponent({ version: componentVersion });
 */
export class NetworkRigidbodyComponent extends Component {
  /**
   * Position of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const position = component.position;
   * // `position` is `{ x: 0, y: 0, z: 0 }`
   */
  position: Position;

  /**
   * Rotation of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const rotation = component.rotation;
   * // `rotation` is `{ x: 0, y: 0, z: 0, w: 1 }`
   */
  rotation: Rotation;

  /**
   * Whether the prefab this component is attached to is [kinematic](https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html) or not.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const isKinematic = component.isKinematic;
   * // `isKinematic` is `false`
   */
  isKinematic: boolean;

  /**
   * Whether the prefab this component is attached to is [sleeping](https://docs.unity3d.com/Manual/RigidbodiesOverview.html) or not.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const isServerSleeping = component.isServerSleeping;
   * // `isServerSleeping` is `false`
   */
  isServerSleeping: boolean;

  /**
   * Velocity of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const velocity = component.velocity;
   * // `velocity` is `{ x: 0, y: 0, z: 0 }`
   */
  velocity: Velocity;

  /**
   * Angular velocity of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   *
   * const angularVelocity = component.angularVelocity;
   * // `angularVelocity` is `{ x: 0, y: 0, z: 0 }`
   */
  angularVelocity: AngularVelocity;

  /**
   * @see [Class: `NetworkRigidbodyComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/NetworkRigidbodyComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { NetworkRigidbodyComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new NetworkRigidbodyComponent({ version: componentVersion });
   */
  constructor({
    version,
    position,
    rotation,
    isKinematic,
    isServerSleeping,
    velocity,
    angularVelocity
  }: ComponentProps & NetworkRigidbodyComponentProps) {
    const hash = ComponentHash.NetworkRigidbody;
    const name = 'NetworkRigidbody';

    super({ hash, name, version });

    this.position = position ?? { x: 0, y: 0, z: 0 };
    this.rotation = rotation ?? { x: 0, y: 0, z: 0, w: 1 };
    this.isKinematic = isKinematic ?? false;
    this.isServerSleeping = isServerSleeping ?? false;
    this.velocity = velocity ?? { x: 0, y: 0, z: 0 };
    this.angularVelocity = angularVelocity ?? { x: 0, y: 0, z: 0 };
  }

  static override fromBinary(reader: BinaryReader, version: number): NetworkRigidbodyComponent {
    const props: ComponentProps & NetworkRigidbodyComponentProps = { version };

    /**
     * @property {Position} position
     * @since v1
     */
    if (props.version >= 1) {
      props.position = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      };
    }

    /**
     * @property {Rotation} rotation
     * @since v1
     */
    if (props.version >= 1) {
      props.rotation = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat(),
        w: reader.readFloat()
      };
    }

    /**
     * @property {boolean} isKinematic
     * @since v1
     */
    if (props.version >= 1) {
      props.isKinematic = reader.readBoolean();
    }

    /**
     * @property {boolean} isServerSleeping
     * @since v1
     */
    if (props.version >= 1) {
      props.isServerSleeping = reader.readBoolean();
    }

    /**
     * @property {Velocity} velocity
     * @since v1
     */
    if (props.version >= 1) {
      props.velocity = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      };
    }

    /**
     * @property {AngularVelocity} angularVelocity
     * @since v1
     */
    if (props.version >= 1) {
      props.angularVelocity = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      };
    }

    return new NetworkRigidbodyComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {Position} position
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.position.x);
      writer.writeFloat(this.position.y);
      writer.writeFloat(this.position.z);
    }

    /**
     * @property {Rotation} rotation
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.rotation.x);
      writer.writeFloat(this.rotation.y);
      writer.writeFloat(this.rotation.z);
      writer.writeFloat(this.rotation.w);
    }

    /**
     * @property {boolean} isKinematic
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isKinematic);
    }

    /**
     * @property {boolean} isServerSleeping
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isServerSleeping);
    }

    /**
     * @property {Velocity} velocity
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.velocity.x);
      writer.writeFloat(this.velocity.y);
      writer.writeFloat(this.velocity.z);
    }

    /**
     * @property {AngularVelocity} angularVelocity
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.angularVelocity.x);
      writer.writeFloat(this.angularVelocity.y);
      writer.writeFloat(this.angularVelocity.z);
    }

    return writer.flush();
  }
}
