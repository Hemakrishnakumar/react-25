import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [mode, setMode] = useState(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key));
    } catch {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(mode));
  }, [mode, key]);
  return [mode, setMode];
}

export default useLocalStorage;
