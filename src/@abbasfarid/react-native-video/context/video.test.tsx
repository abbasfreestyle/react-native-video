import { act, renderHook } from '@testing-library/react-hooks';

import { useVideo, VideoProvider } from './video';

test('should toggle the play state', () => {
  const { result } = renderHook(useVideo, { wrapper: VideoProvider });

  expect(result.current.play).toBe(false);

  act(() => {
    result.current.togglePlay();
  });

  expect(result.current.play).toBe(true);
});

test('should toggle the display state', () => {
  const { result } = renderHook(useVideo, { wrapper: VideoProvider });

  expect(result.current.display).toBe(false);

  act(() => {
    result.current.toggleDisplay();
  });

  expect(result.current.display).toBe(true);
});
