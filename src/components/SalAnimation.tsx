import { useEffect } from "react";
import sal from "sal.js";

const SalAnimation = () => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    });
  }, []);

  return null;
};

export default SalAnimation;
