import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import { FlatConfig } from './types/FlatConfig.js'

export const tsConfig = (options?: {
  exclude?: {
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
      parser: tsParser,
      parserOptions: {
        project: [options?.tsConfigPath ?? './tsconfig.json']
      }
    },
    rules: {
      ...ts.configs.base.rules,
      ...ts.configs.recommended.rules
    }
  },
  {
    ignores: ['**/*.{ts,tsx,cts,mts}'],
    ...js.configs.recommended
  },
  options?.exclude?.prettier ? {} : prettier
]
