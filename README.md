<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/eslint-config-ts

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/eslint-config-ts"><img src="https://img.shields.io/npm/v/@jill64/eslint-config-ts" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-ts"><img src="https://img.shields.io/npm/l/@jill64/eslint-config-ts" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-ts"><img src="https://img.shields.io/npm/dm/@jill64/eslint-config-ts" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-ts"><img src="https://img.shields.io/bundlephobia/min/@jill64/eslint-config-ts" alt="npm-min-size" /></a>

<!----- END GHOST DOCS BADGES ----->

🔹Pre-Defined ESLint Flat Config for TypeScript

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i -D @jill64/eslint-config-ts
```

## Usage

eslint.config.js

```js
import { tsConfig } from '@jill64/eslint-config-ts'

/** @type {import('@jill64/eslint-config-ts').FlatConfig[]} */
export default tsConfig()
```

To add any configuration, configure as follows

```js
import { tsConfig } from '@jill64/eslint-config-ts'

/** @type {import('@jill64/eslint-config-ts').FlatConfig[]} */
export default [
  ...tsConfig()
  // ...
]
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
