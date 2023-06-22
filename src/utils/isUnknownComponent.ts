import type { Component } from '../components/Component.js';
import type { UnsupportedComponent } from '../components/UnsupportedComponent.js';

export function isUnknownComponent(component: Component): component is UnsupportedComponent {
  return component.name === 'Unknown';
}
