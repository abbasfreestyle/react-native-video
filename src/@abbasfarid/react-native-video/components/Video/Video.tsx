import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import VideoPlayer from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  video: {
    alignSelf: 'stretch',
  },
});

const url =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4';

export const Video = () => {
  const [height, setHeight] = useState(0);

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
        paused={true}
        source={{ uri: url }}
        style={[{ height }, styles.video]}
      />
    </View>
  );
};
