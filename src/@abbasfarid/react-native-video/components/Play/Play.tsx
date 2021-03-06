import React, { ComponentProps, useEffect } from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useVideo } from '../../context';
import { Icon } from '../Icon';

export type Props = {
  play: boolean;
  onPress?: PressableProps['onPress'];
};

const iconProps: Omit<ComponentProps<typeof Icon>, 'type'> = {
  size: 50,
};

export const Play = () => {
  const { play, togglePlay } = useVideo();
  const transform = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(transform.value, { duration: 100 }, (finished) => {
          /* istanbul ignore next */
          if (finished) transform.value = 1;
        }),
      },
    ],
  }));

  useEffect(() => {
    transform.value = 1.15;
  }, [play, transform]);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle} testID="rn-video-play-button">
        <Pressable
          onPress={togglePlay}
          style={styles.button}
          accessibilityRole="button"
        >
          <Icon
            testID="play-icon"
            type={play ? 'Pause' : 'Play'}
            {...iconProps}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
