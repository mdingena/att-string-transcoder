# Alter a sword's material

```ts
import { Prefab } from 'att-string-transcoder';

const handle = Prefab.fromSaveString<'Handle_Short'>('...');

handle.children
  .find(child => child.prefab.name === 'Guard')
  ?.prefab.children.find(child => child.prefab.name === 'Short_Sword_Blade')
  ?.prefab.setMaterial('EvinonSteelAlloy')
  .print();
```
