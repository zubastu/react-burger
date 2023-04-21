import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const setWindowSize = () => {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    return () => {
      window.removeEventListener("resize", setWindowSize);
    };
  }, [width]);
  return {
    width,
  };
};
