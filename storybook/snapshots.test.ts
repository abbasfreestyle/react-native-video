import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react-native';

initStoryshots({
  renderer: render,
});
