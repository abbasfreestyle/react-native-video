import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import {
  advanceAnimationByTime,
  withReanimatedTimer,
} from 'react-native-reanimated/lib/reanimated2/jestUtils';

import { MockVideoProvider, VideoContextProps } from '../../context';
import { Play } from './Play';

const renderComponent = (value: Partial<VideoContextProps> = {}) =>
  render(<Play />, {
    wrapper: ({ children }) => (
      <MockVideoProvider mockedValue={value}>{children}</MockVideoProvider>
    ),
  });

test('should animate', () => {
  withReanimatedTimer(() => {
    const { getByTestId } = renderComponent();

    const view = getByTestId('rn-video-play-button');
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });

    advanceAnimationByTime(100);
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1.15 }] });

    advanceAnimationByTime(20);
    expect(view).toHaveAnimatedStyle({
      transform: [{ scale: 1.0720299999999998 }],
    });

    advanceAnimationByTime(70);
    expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });
  });
});

test('Should toggle play/pause', () => {
  const { getByRole, getByTestId } = renderComponent({ display: true });

  const icon = getByTestId('play-icon');
  const button = getByRole('button');

  expect(icon.parent?.props.type).toBe('Play');

  fireEvent.press(button);

  expect(icon.parent?.props.type).toBe('Pause');
});

test('should have animated style', () => {
  const { getByTestId } = renderComponent();

  const view = getByTestId('rn-video-play-button');
  expect(view).toHaveAnimatedStyle({ transform: [{ scale: 1 }] });
});
