import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { SvgAssets, svgIcons } from './assets';
import { Icon } from './Icon';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});

const stories = storiesOf('Components', module);

stories.add(`SVG Icons`, () => (
  <ScrollView>
    {Object.keys(svgIcons).map((type) => (
      <View key={type} style={styles.wrapper}>
        <Text>{type}</Text>
        <Icon size={25} type={type as SvgAssets} />
      </View>
    ))}
  </ScrollView>
));
