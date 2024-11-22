import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);  // Show button after scrolling 200px
    } else {
      setIsVisible(false); // Hide button if not scrolled enough
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener on mount and clean it up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-indigo-600 text-white font-bold text-3xl p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
