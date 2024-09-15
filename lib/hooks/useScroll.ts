import { useState, useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";

export const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scrollY = useMotionValue(0);

  const handleScroll = () => {
    setIsScrolling(true);
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    setScrollPosition(window.scrollY);
    setScrollHeight(document.documentElement.scrollHeight);
    setClientHeight(document.documentElement.clientHeight);
    setScrollPercent(
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
    scrollY.set(window.scrollY);

    // Set a timeout to determine if scrolling has stopped
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    lastScrollTop,
    scrollPosition,
    scrollHeight,
    clientHeight,
    scrollPercent,
    scrollY,
  ]);

  return { scrollDirection, scrollY, isScrolling };
};
