import { useState, useEffect } from "react";

export function useDelayedValue<T>(value: T, delay?: number): T {
  const [delayedValue, setDelayedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedValue(value);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return delayedValue;
}
