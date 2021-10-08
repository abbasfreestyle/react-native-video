import { useEffect, useRef } from 'react';

export const useDebounce = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const debounce = (timeOutFn: () => void, delay = 500) => {
    if (timerRef?.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => timeOutFn(), delay);
  };

  const clearDebounce = () => {
    if (timerRef?.current) clearTimeout(timerRef.current);
  };

  useEffect(() => clearDebounce, []);

  return { debounce, clearDebounce };
};
