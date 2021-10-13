import { useEffect } from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useVideo } from '../../context';
import { useDebounce } from '../../hooks';

export const useOpacity = (display: boolean) => {
  const opacity = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 200 }),
  }));

  useEffect(() => {
    opacity.value = display ? 1 : 0;
  }, [display, opacity]);

  return { style };
};

export const useDisplayer = () => {
  const { display, play, toggleDisplay } = useVideo();
  const { clearDebounce, debounce } = useDebounce();

  useEffect(() => {
    if (!display || !play) clearDebounce();

    if (display && play) debounce(toggleDisplay, 2000);
  }, [display, play, clearDebounce, toggleDisplay, debounce]);

  return { display, toggleDisplay };
};
