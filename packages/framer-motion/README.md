<p align="center">
  <img width="100" height="100" alt="Motion logo" src="https://user-images.githubusercontent.com/7850794/164965523-3eced4c4-6020-467e-acde-f11b7900ad62.png" alt="Motion Icon" />
</p>
<h1 align="center">Motion for React</h1>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
    <img src="https://img.shields.io/npm/v/framer-motion.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
  <img src="https://img.shields.io/npm/dm/framer-motion.svg?style=flat-square" />
  </a>
  <a href="https://twitter.com/motiondotdev" target="_blank">
  <img src="https://img.shields.io/twitter/follow/framer.svg?style=social&label=Follow"  />
  </a>
  <a href="https://discord.gg/DfkSpYe" target="_blank">
  <img src="https://img.shields.io/discord/308323056592486420.svg?logo=discord&logoColor=white" alt="Chat on Discord">
  </a>
</p>

<br>
<hr>
<br>

Motion for React is an open source, production-ready library that’s designed for all creative developers.

It's the only animation library with a hybrid engine, combining the power of JavaScript animations combined with the performance of native browser APIs.

It looks like this:

```jsx
<motion.div animate={{ x: 0 }} />
```

It does all this:

-   [Springs](https://motion.dev/docs/react-transitions#spring)
-   [Keyframes](https://motion.dev/docs/react-animation#keyframes)
-   [Layout animations](https://motion/dev/docs/react-layout-animations)
-   [Shared layout animations](https://motion.dev/docs/react-layout-animations#shared-layout-animations)
-   [Gestures (drag/tap/hover)](https://motion.dev/docs/react-gestures)
-   [Scroll animations](https://motion.dev/docs/react-scroll-animations)
-   [SVG paths](https://motion.dev/docs/react-animation#svg-line-drawing)
-   [Exit animations](https://motion.dev/docs/react-animation#exit-animations)
-   [Server-side rendering](https://motion.dev//docs/react-motion-component#server-side-rendering)
-   [Independent transforms](https://motion.dev/docs/react-motion-component#independent-transforms)
-   [Orchestrate animations across components](https://motion.dev/docs/react-animation#orchestration)
-   [CSS variables](https://motion.dev/docs/react-animation#css-variables)

...and a whole lot more.

## Get started

### 🐇 Quick start

Install `motion` with via your package manager:

```
npm install motion
```

Then import the `motion` component:

```jsx
import { motion } from "motion/react"

export function Component({ isVisible }) {
    return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
}
```

### 💎 Contribute

-   Want to contribute to Motion? Our [contributing guide](https://github.com/framer/motion/blob/master/CONTRIBUTING.md) has you covered.

### 👩🏻‍⚖️ License

-   Motion for React is MIT licensed.

## ✨ Sponsors

Motion is sustainable thanks to the kind support of its sponsors.

### Platinum

Motion powers Framer animations, the web builder for creative pros. Design and ship your dream site. Zero code, maximum speed.
<br/>

<a href="https://www.framer.com?utm_source=motion-readme">
  <img alt="Framer logo" src="https://github.com/user-attachments/assets/ead6d5d9-c2fd-474a-bcd5-76d1d4fb9867" width="350px" height="350px">
</a>

### Gold

<a href="https://tailwindcss.com">
  <img alt="Tailwind logo" src="https://github.com/user-attachments/assets/4dbfa620-e2e0-434f-a5c0-70268f61176a" width="250px" height="250px">
</a>

### Silver

<a href="https://www.frontend.fyi/?utm_source=motion">
  <img alt="Frontend.fyi logo" src="https://github.com/user-attachments/assets/f6c2a4f8-59a5-424c-8509-ad7876ebebcd" width="150px" height="150px">
</a>

### Personal

-   [Nusu](https://x.com/nusualabuga)
-   [OlegWock](https://sinja.io)
