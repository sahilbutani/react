import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timer = useRef(null);

  const debouncedCallback = useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};

export default useDebounce;


// we use debounce for stopping many time calling API
// if we write ab1...
// then deboune wait for we write all the characters "ab12e" for given seconds.
// After given seconds its automatically search API.
