// ScrollTopBar.jsx
import React, { useState, useEffect } from 'react';

const ScrollTopBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Scroll position

    // Calculate scroll percentage (you can adjust the range if necessary)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;

    // Set the width based on scroll percentage, bound it between 0% to 100%
    setScrollWidth(Math.min(Math.max(scrollPercentage, 0), 100));
  };

  // Attach scroll event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-800"
      style={{ width: `${scrollWidth}%`, transition: 'width 0.2s ease-out' }}
    />
  );
};

export default ScrollTopBar;
