import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { Play, useVideo, Video } from '../@abbasfarid/react-native-video';

const uri =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4';

const CustomPlay = () => {
  const { togglePlay } = useVideo();
  return (
    <Pressable onPress={togglePlay}>
      <Text style={styles.customTextColor}>Custom play button</Text>
    </Pressable>
  );
};

/* 
Idea

<Video src>
  <Top>
    <Logo url />
    <Title text />
    <More onPress />
  </Top>
  <Main>
    <Rewind />
    <Play />
    <FastForward />
  </Main>
  <Bottom>
    <Play />
    <Scrubber />
    <Volume />
    <FullScreen />
  </Bottom>
</Video>
*/

export const ScrolledView = () => {
  return (
    <ScrollView style={styles.container}>
      <Video source={{ uri }}>
        <Play />
      </Video>
      <CustomPlay />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum
        velit libero, soluta accusantium, ad recusandae nesciunt dicta et iure
        maxime voluptate est repudiandae hic earum officiis odio harum nam.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customTextColor: {
    color: 'white',
  },
});
