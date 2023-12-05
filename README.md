<!----- BEGIN GHOST DOCS HEADER ----->

# eslint-config-ts

[![npm-version](https://img.shields.io/npm/v/@jill64/eslint-config-ts)](https://npmjs.com/package/@jill64/eslint-config-ts) [![npm-license](https://img.shields.io/npm/l/@jill64/eslint-config-ts)](https://npmjs.com/package/@jill64/eslint-config-ts) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/eslint-config-ts)](https://npmjs.com/package/@jill64/eslint-config-ts) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/eslint-config-ts)](https://npmjs.com/package/@jill64/eslint-config-ts)

🔹Pre-Defined ESLint Flat Config for TypeScript

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/eslint-config-ts
```

## Usage

`eslint.config.js`

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
