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
    '@typescript-eslint',
    // 'simple-import-sort',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
