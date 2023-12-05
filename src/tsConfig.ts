import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import deprecation from 'eslint-plugin-deprecation'
import { FlatConfig } from './types/FlatConfig.js'

export const tsConfig = (options?: {
  exclude?: {
    deprecation?: boolean
    prettier?: boolean
  }
  tsConfigPath?: string
  ignores?: string[]
}): FlatConfig[] => [
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}']
  },
  {
    ignores: options?.ignores ?? [
      'dist',
      'coverage',
      '*.config.{js,ts,cjs,mjs,cts,mts}'
    ]
  },
  {
    plugins: {
      // @ts-expect-error workaround until upstream update
      '@typescript-eslint': ts
    },
    languageOptions: {
      // @ts-expect-error workaround until upstream update
      parser: tsParser,
      parserOptions: {
        project: [options?.tsConfigPath ?? './tsconfig.json']
      }
    },
    // @ts-expect-error workaround until upstream update
    rules: {
      ...ts.configs.base.rules,
      ...ts.configs.recommended.rules
    }
  },
  {
    ignores: ['**/*.{ts,tsx,cts,mts}'],
    ...js.configs.recommended
  },
  options?.exclude?.prettier ? {} : prettier,
  // @ts-expect-error workaround until upstream update
  options?.exclude?.deprecation
    ? {}
    : {
        plugins: {
          deprecation
        },
        rules: deprecation.configs.recommended.rules
      }
]
