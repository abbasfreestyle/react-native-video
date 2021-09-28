import { useRef } from 'react';

export const useDebounce = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const debounce = (timeOutFn: VoidFunction, delay = 500) => {
    if (timerRef?.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => timeOutFn(), delay);
  };

  const clearDebounce = () => {
    if (timerRef?.current) clearTimeout(timerRef.current);
  };

  return { debounce, clearDebounce };
};
