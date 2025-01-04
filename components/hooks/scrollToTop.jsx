import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-12 right-8 z-50 rounded-full w-[50px] h-[50px] text-2xl font-semibold  "
        >
          ↑
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
