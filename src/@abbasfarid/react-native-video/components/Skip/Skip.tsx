import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Animated from 'react-native-reanimated';

import { Icon } from '../Icon';
import { SkipDirection, useAnimatedSkip, useSkip } from './Skip.hooks';

type Props = {
  direction: SkipDirection;
};

/* 
  Connect seek to context
  * Add FF and rewind icon
  * maybe animate if you can (fade on double taps with seconds)
*/

export const Skip = ({ direction }: Props) => {
  const [seconds, setSeconds] = useState(0);
  const { tap, tapCount } = useSkip(direction);
  const { circleStyle, iconStyle, textStyle } = useAnimatedSkip(
    direction,
    tapCount,
  );

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        onPress={() => setSeconds(tap())}
        style={styles.pressContainer}
      >
        <Animated.View style={[styles.iconContainer, iconStyle]}>
          <Icon
            color="white"
            size={25}
            type={direction === 'fast-forward' ? 'FastForward' : 'Rewind'}
          />
        </Animated.View>
        <Animated.Text style={[styles.text, textStyle]}>
          {`${seconds} sec`}
        </Animated.Text>
        <Animated.View style={[styles.circle, circleStyle]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressContainer: {
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  container: { flex: 1 },
  iconContainer: {
    position: 'absolute',
  },
  circle: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
});
