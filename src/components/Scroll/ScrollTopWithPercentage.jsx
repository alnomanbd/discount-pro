// ScrollTopBar.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the up arrow from React Icons

const ScrollTopBarPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercent = (scrollPosition / documentHeight) * 100; // Calculate scroll percentage

    // Update scroll percentage
    setScrollPercentage(scrollPercent);

    // Show the arrow when scroll reaches 100%
    setShowArrow(scrollPercent === 100);
  };

  // Scroll to top when the up arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollPercentage(0);
    setShowArrow(false);
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scroll percentage fill */}
      <div
        id="scroll-percentage"
        className="fixed top-0 left-0 w-full h-2"
        style={{
          background: `conic-gradient(var(--rr-theme-primary) ${scrollPercentage}%, var(--rr-theme-secondary) ${scrollPercentage}%)`,
        }}
      >
        {/* Display up arrow when at 100% scroll */}
        {showArrow && (
          <span
            id="scroll-percentage-value"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <FaArrowUp
              className="text-white text-2xl cursor-pointer"
              onClick={scrollToTop}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default ScrollTopBarPercentage;
