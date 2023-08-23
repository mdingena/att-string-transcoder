import type { Component } from '../components/Component.js';
import type { UnsupportedComponent } from '../components/UnsupportedComponent.js';

/**
 * Asserts if a `component` is an [`UnsupportedComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/UnsupportedComponent.md).
 *
 * @example
 * import { isUnknownComponent } from 'att-string-transcoder';
 *
 * if (isUnknownComponent(component)) {
 *   // `component` is of type `UnsupportedComponent`.
 * }
 */
export function isUnknownComponent(component: Component): component is UnsupportedComponent {
  return component.name === 'Unknown';
}
