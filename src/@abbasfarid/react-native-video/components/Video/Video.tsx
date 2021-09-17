import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import VideoPlayer from 'react-native-video';

import { Play } from '../Play';

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

const url =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4';

export const Video = () => {
  const [height, setHeight] = useState(0);
  const [play, setPlay] = useState(false);

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
      <VideoPlayer
        paused={!play}
        source={{ uri: url }}
        style={[{ height }, styles.video]}
      />
      <View style={styles.overlay}>
        <Play play={play} onPress={() => setPlay((prev) => !prev)} />
      </View>
    </View>
  );
};
