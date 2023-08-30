# Alter a sword's material

```ts
import { Prefab } from 'att-string-transcoder';

const handle = Prefab.fromSaveString<'Handle_Short'>('...');

handle.getChildPrefab('Guard')?.getChildPrefab('Short_Sword_Blade')?.setMaterial('EvinonSteelAlloy').print();
```
