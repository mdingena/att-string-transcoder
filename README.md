<p align="center">
  <img src="./att-string-transcoder.png" alt="ATT String Transcoder" />
</p>

<h1 align="center">ATT String Transcoder</h1>

<p align="center">
  <img alt="npm version" src="https://img.shields.io/npm/v/att-string-transcoder?style=for-the-badge" />
  <img alt="node version" src="https://img.shields.io/node/v/att-string-transcoder?style=for-the-badge">
  <img alt="typescript version" src="https://img.shields.io/npm/dependency-version/att-string-transcoder/dev/typescript?style=for-the-badge">
  <img alt="license" src="https://img.shields.io/npm/l/att-string-transcoder?style=for-the-badge" />
  <a href="CODE-OF-CONDUCT.md"><img alt="contributor covenant v2.0 adopted" src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=for-the-badge" /></a>
</p>

---

Allows you to decode _A Township Tale_'s save strings for analysing, and encode JS objects into ATT save strings for spawning.

⚠️ Use this library primarily when creating bots for ATT, or when building your own ATT save string project. **If you just want to make string weapons, check out our [ATT String Workshop](https://github.com/mdingena/att-string-workshop) project.**

## Join the community

Join the ATT string creators community for sharing and troubleshooting strings built with _ATT String Transcoder_.

<a href="https://discord.gg/XXCMeHvff7" target="_blank"><img alt="Chat with the ATT String Transcoder community on Discord" src="https://img.shields.io/discord/1130738357496979497?style=for-the-badge" /></a>

## :sparkles: Quickstart

### Installation

Add this library to your project's dependencies:

```shell
npm install --save att-string-transcoder
```

### Usage

```ts
import { Prefab } from 'att-string-transcoder';

const blade = new Prefab('Large_Longsword_Blade').setMaterial('Mythril');

const handle = new Prefab('Handle_Short_Cool')
  .addChildPrefab('Slot_Large_SwordType_Craft_33946', blade)
  .setKinematic()
  .print();
```

Read the [API Reference Documentation](docs/README.md) for more options.
