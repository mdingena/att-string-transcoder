# Crafting a rainbow lantern

```ts
import { Entity, Prefab } from 'att-string-transcoder';

const rainbowLantern = new Prefab('Lantern');

const blue = new Entity<'Lantern'>('lantern_bar_01_28734').setMaterial('Mythril');
const grey = new Entity<'Lantern'>('lantern_bar_02_28742').setMaterial('Iron');
const purple = new Entity<'Lantern'>('lantern_bar_03_28770').setMaterial('EvinonSteelAlloy');
const red = new Entity<'Lantern'>('lantern_bar_04_28766').setMaterial('RedIronAlloy');
const orange = new Entity<'Lantern'>('lantern_bar_05_28738').setMaterial('Copper');
const yellow = new Entity<'Lantern'>('lantern_bar_06_28778').setMaterial('Gold');
const green = new Entity<'Lantern'>('lantern_bar_07_28750').setMaterial('OrchiAlloy');

rainbowLantern
  .addEntity(blue)
  .addEntity(grey)
  .addEntity(purple)
  .addEntity(red)
  .addEntity(orange)
  .addEntity(yellow)
  .addEntity(green)
  .print();
```
