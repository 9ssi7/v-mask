<p align="center"><br><img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px;" /></p>
<h3 align="center">@ssibrahimbas/v-mask</h3>
<p align="center">
  Mask for Vue.js 3
</p>

### What Is It?

`v-mask` is a directive for Vue.js 3 that allows you to mask input fields.

This package inspired by [vue-the-mask](https://github.com/vuejs-tips/vue-the-mask)

### Installation

```bash
npm install @ssibrahimbas/v-mask
```

### Usage

```js
import { createApp } from "vue";
import VMask from "@ssibrahimbas/v-mask";

const app = createApp(App).use(VMask).mount("#app");
```

```html
<input v-mask="'###-##-##'" />
```

### Tokens

| Token | Description                |
| ----- | -------------------------- |
| `#`   | Digit                      |
| `X`   | Any character              |
| `S`   | Any text character         |
| `A`   | Any uppercase character    |
| `a`   | Any lowercase character    |
| `!`   | Any alphanumeric character |

### Options

| Option | Type     | Default | Description                     |
| ------ | -------- | ------- | ------------------------------- |
| `mask` | `String` | `''`    | Mask to be applied to the input |
