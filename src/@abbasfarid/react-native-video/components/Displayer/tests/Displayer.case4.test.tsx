import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';
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

test('displayer should stay visible if interacting within 2 seconds on each tap', () => {
  withReanimatedTimer(() => {
    const { getAllByRole, getByTestId } = renderTestComponent();
    const [displayer, , playButton] = getAllByRole('button');
    const animView = getByTestId('animated-displayer');

    fireEvent.press(displayer);

    advanceAnimationByTime(1900);
    expect(animView).toHaveAnimatedStyle({ opacity: 1 });

    act(() => {
      fireEvent.press(playButton);

      advanceAnimationByTime(1900);
      expect(animView).toHaveAnimatedStyle({ opacity: 1 });

      advanceAnimationByTime(2000);
      expect(animView).toHaveAnimatedStyle({ opacity: 0 });
    });
  });
});
