import { act, renderHook } from '@testing-library/react-hooks';

import { useSkip } from './Skip.hooks';

jest.useFakeTimers();

describe('useSkip hook', () => {
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
