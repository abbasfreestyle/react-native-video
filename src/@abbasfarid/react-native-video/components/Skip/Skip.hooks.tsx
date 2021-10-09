import { useEffect, useState } from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useVideo } from '../../context';
import { useDebounce } from '../../hooks';

const defaultSkipValues = [0, 5, 10, 15, 30, 45, 60];
const textTranslation = 40;
const defaultVal = {
  circleScale: 0.1,
  circleOpacity: 0,
  textPos: 0,
  textOpacity: 0,
  iconOpacity: 0,
};

export type SkipDirection = 'fast-forward' | 'rewind';

export const useSkip = (
  direction: SkipDirection,
  skips = defaultSkipValues,
) => {
  const [tapCount, setTapCount] = useState(0);
  const { debounce } = useDebounce();
  const { toggleDisplay } = useVideo();

  const tap = () => {
    setTapCount((prev) => prev + 1);

    debounce(() => {
      if (tapCount === 0) toggleDisplay();
      setTapCount(0);
    }, 500);

    const toSkip = skips[tapCount < skips.length ? tapCount : skips.length - 1];
    const skipInDirection = direction === 'rewind' ? -toSkip : toSkip;
    return skipInDirection;
  };

  return { tap, tapCount };
};

export const useAnimatedSkip = (direction: SkipDirection, tapCount: number) => {
  const circleScale = useSharedValue(defaultVal.circleScale);
  const circleOpacity = useSharedValue(defaultVal.circleOpacity);
  const iconOpacity = useSharedValue(defaultVal.iconOpacity);
  const textPos = useSharedValue(defaultVal.textPos);
  const textOpacity = useSharedValue(defaultVal.textOpacity);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(circleScale.value, {}, (finished) => {
          /* istanbul ignore next */
          if (finished) circleOpacity.value = defaultVal.circleOpacity;
        }),
      },
    ],
    opacity: withTiming(circleOpacity.value),
  }));

  const textStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(textPos.value) }],
    opacity: withTiming(textOpacity.value),
  }));

  const iconStyle = useAnimatedStyle(() => ({
    opacity: withTiming(iconOpacity.value),
  }));

  useEffect(() => {
    const runSkipAnimation = () => {
      textPos.value =
        direction === 'fast-forward' ? textTranslation : -textTranslation;
      textOpacity.value = 1;
      circleScale.value = 2;
      circleOpacity.value = 0.15;
      iconOpacity.value = 1;
    };

    if (tapCount > 1) runSkipAnimation();
  }, [
    tapCount,
    textPos,
    textOpacity,
    circleScale,
    circleOpacity,
    iconOpacity,
    direction,
  ]);

  useEffect(() => {
    if (!tapCount) {
      textPos.value = defaultVal.textPos;
      textOpacity.value = defaultVal.textOpacity;
      circleScale.value = defaultVal.circleScale;
      iconOpacity.value = defaultVal.iconOpacity;
    }
  }, [tapCount, textPos, textOpacity, circleScale, iconOpacity]);

  return { circleStyle, textStyle, iconStyle };
};
