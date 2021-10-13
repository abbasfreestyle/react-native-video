import { act, renderHook } from '@testing-library/react-hooks';

import { SkipDirection, useAnimatedSkip, useSkip } from '../Skip.hooks';

type Initial<T> = { initial: T } & T;

type AnimatedStyle<T> = {
  animatedStyle: { current: { value: T } };
} & T;

const expectAnimatedStyle = (style: Record<string, unknown>) => ({
  toBe: (output: Record<string, unknown>) => {
    expect(
      (style as AnimatedStyle<typeof style>).animatedStyle.current.value,
    ).toMatchObject(output);
  },
});

const expectInitialStyle = (style: Record<string, unknown>) => ({
  toBe: (output: Record<string, unknown>) => {
    expect((style as Initial<typeof style>).initial).toMatchObject(output);
  },
});

describe('useSkip hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test('should increment every time it is invoked', () => {
    const { result } = renderHook(() => useSkip('fast-forward'));
    act(() => {
      for (let i = 0; i < 3; i++) result.current.tap();
    });
    act(() => {
      expect(result.current.tap()).toBe(15);
      jest.advanceTimersByTime(501);
    });

    act(() => {
      expect(result.current.tap()).toBe(0);
    });
  });

  test('should return 0 if tapped 1 time', () => {
    const { result } = renderHook(() => useSkip('fast-forward'));
    act(() => {
      expect(result.current.tap()).toBe(0);
    });
  });

  test('should reset to 0 after 100ms has gone', () => {
    const { result } = renderHook(() => useSkip('fast-forward'));
    act(() => {
      for (let i = 0; i < 2; i++) result.current.tap();
    });
    act(() => {
      expect(result.current.tap()).toBe(10);
      jest.advanceTimersByTime(501);
    });

    act(() => {
      expect(result.current.tap()).toBe(0);
    });
  });

  test('should return a negative value if set to rewind', () => {
    const { result } = renderHook(() => useSkip('rewind'));
    act(() => {
      for (let i = 0; i < 4; i++) result.current.tap();
    });
    act(() => {
      expect(result.current.tap()).toBe(-30);
    });
  });

  test('should clamp to the last skip value', () => {
    const { result } = renderHook(() => useSkip('fast-forward'));
    act(() => {
      for (let i = 0; i < 9; i++) result.current.tap();
    });
    act(() => {
      expect(result.current.tap()).toBe(60);
    });
  });
});

describe('useAnimatedSkip hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test('circle should scale and fade in/out', () => {
    let tapCount = 3;
    const { rerender, result } = renderHook(() =>
      useAnimatedSkip('fast-forward', tapCount),
    );

    const { circleStyle } = result.current;
    expectInitialStyle(circleStyle).toBe({
      opacity: 0,
      transform: [{ scale: 0.1 }],
    });

    jest.advanceTimersByTime(300);

    expectAnimatedStyle(circleStyle).toBe({
      opacity: 0.15,
      transform: [{ scale: 2 }],
    });

    tapCount = 0;
    rerender();

    jest.advanceTimersByTime(800);

    expectAnimatedStyle(circleStyle).toBe({
      opacity: 0,
      transform: [{ scale: 0.1 }],
    });
  });

  test('icon should fade in', () => {
    let tapCount = 3;
    const { rerender, result } = renderHook(() =>
      useAnimatedSkip('fast-forward', tapCount),
    );

    const { iconStyle } = result.current;

    expectInitialStyle(iconStyle).toBe({ opacity: 0 });

    jest.advanceTimersByTime(301);

    expectAnimatedStyle(iconStyle).toBe({ opacity: 1 });

    tapCount = 0;
    rerender();

    jest.advanceTimersByTime(500);

    expectAnimatedStyle(iconStyle).toBe({ opacity: 0 });
  });

  const cases: [SkipDirection, number][] = [
    ['fast-forward', 40],
    ['rewind', -40],
  ];

  test.each(cases)(
    'seconds text with direction %s should fade and slide in',
    (direction, translateX) => {
      let tapCount = 3;
      const { rerender, result } = renderHook(() =>
        useAnimatedSkip(direction, tapCount),
      );

      const { textStyle } = result.current;

      expectInitialStyle(textStyle).toBe({
        opacity: 0,
        transform: [{ translateX: 0 }],
      });

      jest.advanceTimersByTime(301);

      expectAnimatedStyle(textStyle).toBe({
        opacity: 1,
        transform: [{ translateX }],
      });

      tapCount = 0;
      rerender();

      jest.advanceTimersByTime(500);

      expectAnimatedStyle(textStyle).toBe({
        opacity: 0,
        transform: [{ translateX: 0 }],
      });
    },
  );
});
