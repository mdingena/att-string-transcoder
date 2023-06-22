import type { BinaryReader } from '../BinaryReader.js';
import type { Component } from '../components/Component.js';
import { UnsupportedComponent } from '../components/UnsupportedComponent.js';
import { supportedComponents } from '../constants.js';

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
