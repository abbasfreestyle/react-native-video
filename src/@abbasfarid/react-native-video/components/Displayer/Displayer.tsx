import React, { ReactNode, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useVideo } from '../..';
import { useDebounce } from '../../hooks';

/* 
layers:

[title, play, slider]
[rewind, fast-fwd]
  on double-tap (maybe triple >> max taps) -> time +- X seconds
displayer (children)
  beginning/end -> visible: true
video
*/

type Props = {
  children?: ReactNode;
  backgroundColor?: string;
};

export const Displayer = ({
  backgroundColor = 'rgba(0,0,0,0.25)',
  children,
}: Props) => {
  const { display, play, toggleDisplay } = useVideo();
  const opacity = useSharedValue(0);
  const { clearDebounce, debounce } = useDebounce();

  const style = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 200 }),
  }));

  useEffect(() => {
    if (!display || !play) clearDebounce();

    if (display && play) debounce(toggleDisplay, 2000);
  }, [display, play, clearDebounce, toggleDisplay, debounce]);

  useEffect(() => {
    opacity.value = display ? 1 : 0;
  }, [display, opacity]);

  return (
    <Pressable onPress={toggleDisplay}>
      <Animated.View style={[style, styles.container, { backgroundColor }]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { height: '100%' },
});
