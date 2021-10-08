import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import {
  advanceAnimationByTime,
  withReanimatedTimer,
} from 'react-native-reanimated/lib/reanimated2/jestUtils';

import { MockVideoProvider } from '../../../context';
import { Play } from '../../Play';
import { Displayer } from '../Displayer';

const renderTestComponent = () =>
  render(renderComponent(), { wrapper: MockVideoProvider });

const renderComponent = () => (
  <Displayer>
    <Play />
  </Displayer>
);

test('displayer should disappear when tapped again', () => {
  withReanimatedTimer(() => {
    const { getByRole, getByTestId } = renderTestComponent();
    const displayer = getByRole('button');
    const animView = getByTestId('animated-displayer');
    fireEvent.press(displayer);

    advanceAnimationByTime(1500);
    expect(animView).toHaveAnimatedStyle({ opacity: 1 });

    fireEvent.press(displayer);

    advanceAnimationByTime(200);
    expect(animView).toHaveAnimatedStyle({ opacity: 0 });
  });
});
