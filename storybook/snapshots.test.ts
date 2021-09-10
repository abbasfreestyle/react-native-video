import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react-native';

// https://github.com/storybookjs/storybook/issues/8083
// jest.mock('global', () =>
//   // Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } }),
//   ({
//     ...global,
//     window: {
//       ...global.window,
//       STORYBOOK_HOOKS_CONTEXT: {},
//     },
//   }),
// );

initStoryshots({
  renderer: render,
});
