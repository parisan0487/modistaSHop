"use client";
import { useCallback, useEffect, useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event) => {
    event?.stopPropagation();
    setIsOpen((prevIsOpen) => !(prevIsOpen ?? false));
  };

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const handleClickOutside = () => {
      close();
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, close]);

  return [isOpen ?? false, toggleOpen];
};

export default useToggle;
