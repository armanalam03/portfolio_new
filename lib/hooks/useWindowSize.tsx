"use client";

import { useEffect, useState } from "react";

/**
 * The `useWindowSize` function is a custom React hook that returns the current width and height of the
 * browser window.
 * @returns The `useWindowSize` custom hook returns an object containing the current width and height
 * of the window.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
};
