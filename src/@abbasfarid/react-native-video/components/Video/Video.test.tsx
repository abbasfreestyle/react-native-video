import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';

import { VideoProvider } from '../../context';
import { VideoPlayer } from './Video';

const renderComponent = () =>
  render(<VideoPlayer source={{ uri: 'mock-uri' }} />, {
    wrapper: VideoProvider,
  });

test('should match the snapshot', () => {
  const { toJSON } = renderComponent();

  expect(toJSON()).toMatchSnapshot();
});

test('should measure the height of the video', () => {
  const { getByTestId } = renderComponent();
  const ratio = 0.5625;
  const width = 300;
  const container = getByTestId('video-container');
  const video = getByTestId('rn-video');

  act(() => {
    fireEvent(container, 'layout', {
      nativeEvent: { layout: { width } },
    });
  });

  expect(video.props.style[0].height).toBe(width * ratio);
});
