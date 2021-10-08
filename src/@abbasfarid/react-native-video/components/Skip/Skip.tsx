import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useSkip } from './Skip.hooks';

type Props = {
  direction: 'fast-forward' | 'rewind';
};

/* 
  Connect seek to context
  Add FF and rewind icon
  maybe animate if you can (fade on double taps with seconds)
*/

export const Skip = ({ direction }: Props) => {
  const { tap } = useSkip(direction);
  return (
    <Pressable
      onPress={() => {
        const skip = tap();
        console.log(skip);
      }}
    >
      <View style={styles.container} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    justifyContent: 'center',
  },
});
