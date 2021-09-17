import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { Play } from './Play';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TogglePlay = () => {
  const [play, setPlay] = useState(false);
  return (
    <View style={styles.container}>
      <Play play={play} onPress={() => setPlay((prev) => !prev)} />
    </View>
  );
};

storiesOf('Components', module).add('Play Button', () => <TogglePlay />);
