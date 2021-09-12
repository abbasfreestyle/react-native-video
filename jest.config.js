module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/__mocks__/globalMock.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  // modulePathIgnorePatterns: ['<rootDir>/e2e'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?' +
      '@?react-native' +
      '|@react-native-community' +
      '|@react-navigation)',
  ],
  coveragePathIgnorePatterns: [
    'index.js',
    'index.ts',
    'types.ts',
    'rn-addons.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
