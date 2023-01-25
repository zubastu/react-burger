import { useEffect, useState, RefObject, useMemo } from "react";

export const useObserver = (ref: RefObject<HTMLElement>) => {
  const [intersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          root: document.getElementById("ingredients-container"),
          rootMargin: "0px 0px -40% 0px",
          threshold: 0.19,
        }
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return {
    intersecting,
  };
};
