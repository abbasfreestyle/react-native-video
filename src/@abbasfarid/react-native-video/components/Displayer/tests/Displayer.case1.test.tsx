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

test('displayer should disappear after 2 seconds while playing', () => {
  withReanimatedTimer(() => {
    const { getAllByRole, getByTestId } = renderTestComponent();
    const [displayer, playButton] = getAllByRole('button');
    const animView = getByTestId('animated-displayer');
    fireEvent.press(displayer);

    advanceAnimationByTime(200);

    expect(animView).toHaveAnimatedStyle({ opacity: 1 });

    act(() => {
      fireEvent.press(playButton);
      advanceAnimationByTime(2501);
      expect(animView).toHaveAnimatedStyle({ opacity: 0 });
    });
  });
});
