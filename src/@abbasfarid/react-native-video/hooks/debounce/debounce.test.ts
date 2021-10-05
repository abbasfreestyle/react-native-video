import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from './debounce';

jest.useFakeTimers();

test('should invoke the callback function after the default 500ms', () => {
  const callBackMock = jest.fn();
  const { result } = renderHook(useDebounce);

  result.current.debounce(callBackMock);
  jest.advanceTimersByTime(250);

  expect(callBackMock).not.toHaveBeenCalled();

  jest.advanceTimersByTime(251);

  expect(callBackMock).toHaveBeenCalledTimes(1);
});

test('should invoke the callback function after a custom duration provided', () => {
  const callBackMock = jest.fn();
  const { result } = renderHook(useDebounce);

  result.current.debounce(callBackMock, 2314);
  jest.advanceTimersByTime(1000);

  expect(callBackMock).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1315);

  expect(callBackMock).toHaveBeenCalledTimes(1);
});

test('clearDebounce clear the timer and not invoke the callback function', () => {
  const callBackMock = jest.fn();
  const { result } = renderHook(useDebounce);

  result.current.debounce(callBackMock);
  jest.advanceTimersByTime(250);

  result.current.clearDebounce();
  jest.advanceTimersByTime(1000);

  expect(callBackMock).not.toHaveBeenCalled();
});

test('calling debounce again within 500ms restarts the timer', () => {
  const callBackMock = jest.fn();
  const { result } = renderHook(useDebounce);

  result.current.debounce(callBackMock);
  jest.advanceTimersByTime(450);

  result.current.debounce(callBackMock);
  jest.advanceTimersByTime(400);

  expect(callBackMock).not.toHaveBeenCalled();

  jest.advanceTimersByTime(101);

  expect(callBackMock).toHaveBeenCalledTimes(1);
});
