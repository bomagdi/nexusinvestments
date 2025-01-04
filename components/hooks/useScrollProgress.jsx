import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handelScroll = () => {
      const currentScroll = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;

      if (windowHeight) {
        setScrollProgress(
          Number((currentScroll / windowHeight).toFixed(2) * 100)
        );
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return scrollProgress;
};

export default useScrollProgress;
