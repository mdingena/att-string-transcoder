# Launch a wym spit

```ts
import { Prefab } from 'att-string-transcoder';

const spit = new Prefab('Wyrm_Spit');

spit.setPosition(playerRightHandPosition);
spit.setRotation(playerRightHandUpInverted);
spit.setVelocity(playerRightHandUpInvertedMultiplied);
spit.print();
```
