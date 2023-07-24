# Integrate with a bot

```ts
import { Prefab } from 'att-string-transcoder';

// ...

const commandResult = await botClient.send('...');
const saveString = commandResult.data.ResultString;

const prefab = Prefab.fromSaveString(saveString);
prefab.setOnFire();

const newSaveString = prefab.toSaveString();

await botClient.send(`spawn string-raw ${newSaveString}`);
```
