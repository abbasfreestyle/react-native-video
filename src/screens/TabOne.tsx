import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const TabOne: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};
