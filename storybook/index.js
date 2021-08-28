import './rn-addons';

import AsyncStorage from '@react-native-community/async-storage';
import { withKnobs } from '@storybook/addon-knobs';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';

import { loadStories } from './storyLoader';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

export const StorybookUI = getStorybookUI({
  asyncStorage: AsyncStorage,
});
