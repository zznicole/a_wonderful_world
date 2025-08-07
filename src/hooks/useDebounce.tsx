"use client";
import { useEffect, useState } from "react";

export default function useDebounce<T>(debounceValue: T, delay: number) {
  const [debounce, setDebounce] = useState<T>(debounceValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(debounceValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [debounceValue, delay]);
  return debounceValue;
}
