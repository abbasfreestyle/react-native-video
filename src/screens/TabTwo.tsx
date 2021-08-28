import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const TabTwo: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello This is tab two</Text>
    </View>
  );
};
