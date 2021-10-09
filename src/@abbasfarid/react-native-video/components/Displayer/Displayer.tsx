import React, { ReactNode, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useVideo } from '../../context';
import { useDebounce } from '../../hooks';
import { Skip } from '../Skip';

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

const useOpacity = (display: boolean) => {
  const opacity = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 200 }),
  }));

  useEffect(() => {
    opacity.value = display ? 1 : 0;
  }, [display, opacity]);

  return { style };
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
  const { display, play, toggleDisplay } = useVideo();
  const { clearDebounce, debounce } = useDebounce();

  const { style } = useOpacity(display);

  useEffect(() => {
    if (!display || !play) clearDebounce();

    if (display && play) debounce(toggleDisplay, 2000);
  }, [display, play, clearDebounce, toggleDisplay, debounce]);

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
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
