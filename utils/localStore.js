"use client";
import { useEffect, useState } from "react";

const localStore = (key, initialValue) => {
  const [state, setState] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleSetState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    let value;

    try {
      value = storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (e) {
      value = initialValue;
    }

    if (value === null || value === undefined) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      value = initialValue;
    }

    setState(value);
    setIsPending(false);
  }, [key, initialValue]);

  return [state, handleSetState, isPending];
};

export default localStore;
