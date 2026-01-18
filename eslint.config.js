//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  {
    ignores: [
      'src/generated/**',
      '.output/**',
      'node_modules/**',
      '*.config.js',
    ],
  },
  ...tanstackConfig,
]
