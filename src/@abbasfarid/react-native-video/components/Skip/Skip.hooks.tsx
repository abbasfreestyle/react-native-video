import { useState } from 'react';

import { useDebounce } from '../../hooks';

const defaultSkipValues = [0, 5, 10, 15, 30, 45, 60];

export const useSkip = (
  direction: 'fast-forward' | 'rewind',
  skips = defaultSkipValues,
) => {
  const [tapCount, setTapCount] = useState(0);
  const { debounce } = useDebounce();
  const tap = () => {
    setTapCount((prev) => prev + 1);
    debounce(() => {
      setTapCount(0);
    }, 500);
    const toSkip = skips[tapCount < skips.length ? tapCount : skips.length - 1];
    const skipInDirection = direction === 'rewind' ? -toSkip : toSkip;
    return skipInDirection;
  };

  return { tap };
};
