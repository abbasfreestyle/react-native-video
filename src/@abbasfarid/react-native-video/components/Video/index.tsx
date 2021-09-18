import React from 'react';

import { VideoProvider } from '../../context';
import { Props, VideoPlayer } from './Video';

export const Video = ({ children, ...videoProps }: Props) => (
  <VideoProvider>
    <VideoPlayer {...videoProps}>{children}</VideoPlayer>
  </VideoProvider>
);

export { Props as VideoPlayerProps } from './Video';
