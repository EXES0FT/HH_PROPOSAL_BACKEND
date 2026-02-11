const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

const nodeAndES2021Globals = {
  require: 'readonly',
  module: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  exports: 'readonly',
  process: 'readonly',
  Buffer: 'readonly',
  setImmediate: 'readonly',
  clearImmediate: 'readonly',
  global: 'readonly',
  Promise: 'readonly',
  Symbol: 'readonly',
  Map: 'readonly',
  Set: 'readonly',
  WeakMap: 'readonly',
  WeakSet: 'readonly',
};

module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['src/prisma/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: nodeAndES2021Globals,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['src/prisma/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: nodeAndES2021Globals,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
