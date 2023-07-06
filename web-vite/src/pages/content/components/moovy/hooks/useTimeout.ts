import { useEffect, useRef } from "react";

// Custom hook
export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let timer = setTimeout(() => callbackRef.current(), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);
}
