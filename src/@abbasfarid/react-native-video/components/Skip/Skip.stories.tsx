import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { VideoProvider } from '../../context';
import { Skip } from './Skip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ToggleSkip = () => {
  return (
    <VideoProvider>
      <View style={styles.container}>
        <Skip direction="rewind" />
      </View>
    </VideoProvider>
  );
};

storiesOf('Components', module).add('Skip Button', () => <ToggleSkip />);
