import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { VideoProvider } from '../..';
import { Play } from './Play';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TogglePlay = () => {
  return (
    <VideoProvider>
      <View style={styles.container}>
        <Play />
      </View>
    </VideoProvider>
  );
};

storiesOf('Components', module).add('Play Button', () => <TogglePlay />);
