module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        // Disabled due to Storybook server https://github.com/storybookjs/react-native/issues/152#issuecomment-808388571
        inlineRequires: false,
      },
    }),
  },
};
