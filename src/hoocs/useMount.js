import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "../utils/constants";

export const useMount = ({ isOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen && !mounted) {
      setMounted(isOpen);
    } else if (!isOpen && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [isOpen, mounted]);

  return { mounted };
};
