import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RNVideo, { VideoProperties } from 'react-native-video';

import { useVideo } from '../../context';

export type Props = {
  children?: React.ReactNode;
  source: VideoProperties['source'];
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  video: {
    alignSelf: 'stretch',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export const VideoPlayer = ({ children, source }: Props) => {
  const [height, setHeight] = useState(0);
  const { play } = useVideo();
  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        setHeight(width * 0.5625);
      }}
    >
      <RNVideo
        paused={!play}
        source={source}
        style={[{ height }, styles.video]}
      />
      <View style={styles.overlay}>{children}</View>
    </View>
  );
};
