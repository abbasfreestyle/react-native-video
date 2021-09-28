import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RNVideo, { VideoProperties } from 'react-native-video';

import { useVideo } from '../../context';
import { Displayer } from '..';

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
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        setHeight(width * 0.5625);
      }}
      style={styles.container}
      testID="video-container"
    >
      <RNVideo
        paused={!play}
        source={source}
        style={[{ height }, styles.video]}
        testID="rn-video"
      />
      <View style={styles.overlay}>
        <Displayer>{children}</Displayer>
      </View>
    </View>
  );
};
