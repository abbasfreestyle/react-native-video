import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

import { Skip } from '../Skip';
import { useDisplayer, useOpacity } from './Displayer.hooks';

/* 
layers:

[title, play, slider]
*[rewind, fast-fwd]
  on double-tap (maybe triple >> max taps) -> time +- X seconds
displayer (children)
  beginning/end -> visible: true
video
*/

type Props = {
  children?: ReactNode;
  backgroundColor?: string;
};

const BG = ({
  backgroundColor,
  display,
}: {
  display: boolean;
  backgroundColor: string;
}) => {
  const { style } = useOpacity(display);
  return (
    <Animated.View
      style={[style, styles.background, { backgroundColor }]}
      testID="animated-displayer-bg"
    />
  );
};

export const Displayer = ({
  backgroundColor = 'rgba(0,0,0,0.25)',
  children,
}: Props) => {
  const { display, toggleDisplay } = useDisplayer();
  const { style } = useOpacity(display);

  return (
    <>
      <BG backgroundColor={backgroundColor} display={display} />
      <Pressable
        accessibilityRole="button"
        onPress={toggleDisplay}
        style={styles.container}
      >
        <Skip direction="rewind" />
        <Animated.View style={style} testID="animated-displayer">
          {children}
        </Animated.View>
        <Skip direction="fast-forward" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  background: StyleSheet.absoluteFillObject,
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
