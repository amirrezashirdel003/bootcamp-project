import { useEffect, useRef, useState } from "react";



export const useAutoHorizontalScroll = (options = {}) => {
  const { speed = 0.5, pauseDuration = 2000, enabled = true } = options;

  const containerRef = useRef(null);
  const [direction, setDirection] = useState("left");
  const [isPaused, setIsPaused] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const scrollPositionRef = useRef(0);

  // check if horizontal scroll is needed
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkScroll = () => {
      const needsScroll = el.scrollWidth > el.clientWidth;
      setHasScroll(needsScroll);

      // start scrolling if needed
      if (needsScroll && scrollPositionRef.current === 0) {
        setDirection("left");
        setIsPaused(false);
      }
    };

    checkScroll();

    // observe resize changes
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  // auto horizontal scroll
  useEffect(() => {
    if (!enabled || !hasScroll) return;

    const el = containerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      if (direction === "left") {
        scrollPositionRef.current += speed;
        el.scrollLeft = Math.round(scrollPositionRef.current);

        if (scrollPositionRef.current + el.clientWidth >= el.scrollWidth - 1) {
          setIsPaused(true);
          scrollPositionRef.current = el.scrollWidth - el.clientWidth;

          setTimeout(() => {
            setDirection("right");
            setIsPaused(false);
          }, pauseDuration);
        }
      } else {
        scrollPositionRef.current -= speed;
        el.scrollLeft = Math.round(scrollPositionRef.current);

        if (scrollPositionRef.current <= 1) {
          setIsPaused(true);
          scrollPositionRef.current = 0;

          setTimeout(() => {
            setDirection("left");
            setIsPaused(false);
          }, pauseDuration);
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [direction, isPaused, speed, pauseDuration, enabled, hasScroll]);

  return containerRef;
};
