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
    'prettier',
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
    'arrow-parens': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-unused-vars': 2,
    'import/no-named-as-default': 0,
    'no-console': 1,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',
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
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
    'sort-imports': 'off',
  },
};
