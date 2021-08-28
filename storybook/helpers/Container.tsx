import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export const Container: FC = (props) => (
  <View style={styles.container} {...props} />
);
