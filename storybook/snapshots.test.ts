import initStoryshots from '@storybook/addon-storyshots';

// https://github.com/storybookjs/storybook/issues/8083
jest.mock('global', () =>
  Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } }),
);

initStoryshots();
