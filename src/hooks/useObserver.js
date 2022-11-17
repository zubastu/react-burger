import React, { useEffect, useState } from "react";

export const useObserver = (ref) => {
  const [intersecting, setIntersecting] = useState(false);

  const options = {
    root: document.getElementById("ingredients-container"),
    rootMargin: "0px",
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    options
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    intersecting,
  };
};
