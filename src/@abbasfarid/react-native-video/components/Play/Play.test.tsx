import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import {
  advanceAnimationByTime,
  withReanimatedTimer,
} from 'react-native-reanimated/lib/reanimated2/jestUtils';

import { Play, Props } from './Play';

const renderComponent = ({
  play = false,
  onPress = jest.fn(),
}: Partial<Props>) => render(<Play play={play} onPress={onPress} />);

jest.useFakeTimers();

test('should animate', () => {
  withReanimatedTimer(() => {
    const { getByTestId, rerender } = renderComponent({ play: true });

    const view = getByTestId('rn-video-play-button');
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });

    rerender(<Play play={false} />);

    advanceAnimationByTime(100);
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1.15 }] });

    advanceAnimationByTime(20);
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1.07203 }] });

    advanceAnimationByTime(70);
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });
  });
});

test('Should be tappable', () => {
  const onPressMock = jest.fn();
  const { getByRole } = renderComponent({ onPress: onPressMock });

  const button = getByRole('button');
  fireEvent.press(button);

  expect(onPressMock).toHaveBeenCalled();
});

test('should have animated style', () => {
  const { getByTestId } = renderComponent({ play: true });

  const view = getByTestId('rn-video-play-button');
  expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });
});
