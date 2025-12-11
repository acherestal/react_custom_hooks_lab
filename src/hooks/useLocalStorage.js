import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Get saved value OR fallback to initialValue
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue !== null ? storedValue : initialValue;

  const [state, setState] = useState(parsedValue);

  // Update localStorage whenever key or state changes
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
