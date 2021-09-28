import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { Play, VideoProvider } from '../..';
import { Displayer } from './Displayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ToggleDisplayer = () => {
  return (
    <VideoProvider>
      <View style={styles.container}>
        <Displayer>
          <Play />
        </Displayer>
      </View>
    </VideoProvider>
  );
};

storiesOf('Components', module).add('Displayer', () => <ToggleDisplayer />);
