import { Component } from '../components';

export type Fire = {
  isAlive?: boolean;
  components?: {
    Fire?: Component;
    HeatSourceBase?: Component;
    HeatSourcePointCollection?: Component;
  };
};
