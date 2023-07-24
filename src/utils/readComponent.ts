import type { BinaryReader } from '../BinaryReader.js';
import type { Component } from '../components/Component.js';

import { UnsupportedComponent } from '../components/UnsupportedComponent.js';
import { supportedComponents } from '../supportedComponents.js';

/**
 * Reads next component from the given `BinaryReader` and returns a `Component` instance.
 *
 * @example
 * import { BinaryReader, readChildren } from 'att-string-transcoder';
 *
 * const reader = new BinaryReader('...');
 * const hash = 2290978823;
 * const name = 'NetworkRigidbody';
 * const version = 1;
 *
 * const component = readComponent(reader, hash, name, version);
 */
export function readComponent(reader: BinaryReader, hash: number, name: string, version: number): Component {
  /* Get the component's data length. */
  const dataLength = reader.readUnsignedInteger();

  /* Get the component's class. */
  const SupportedComponent = supportedComponents[name];

  /* Create a component instance from the binary data string. */
  if (typeof SupportedComponent === 'undefined') {
    return UnsupportedComponent.fromBinary(reader, version, hash, name, dataLength);
  } else {
    return SupportedComponent.fromBinary(reader, version);
  }
}
