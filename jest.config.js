module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  // setupFilesAfterEnv: ['./setup/jest.js'],
  // moduleNameMapper: {
  //   '@api': '<rootDir>/src/api',
  //   '@assets': '<rootDir>/src/assets',
  //   '@components': '<rootDir>/src/components',
  //   '@config': '<rootDir>/src/config',
  //   '@hooks': '<rootDir>/src/hooks',
  //   '@modules': '<rootDir>/src/modules',
  //   '@screens': '<rootDir>/src/screens',
  //   '@types': '<rootDir>/src/types',
  //   '@utils': '<rootDir>/src/utils',
  // },
  // modulePathIgnorePatterns: ['<rootDir>/e2e'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?' +
      '@?react-native' +
      '|@react-native-community' +
      '|@react-navigation)',
  ],
};
