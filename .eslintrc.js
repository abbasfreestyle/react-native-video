module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    'import',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'arrow-parens': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 2,
    'import/no-default-export': 2,
    'import/order': 'off',
    'no-console': 1,
    'no-unused-vars': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react$', '^react-native$'],
          ['^[^.]'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
    'sort-imports': 'off',
  },
};
