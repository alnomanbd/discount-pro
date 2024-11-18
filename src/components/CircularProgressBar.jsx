import React from 'react';

const CircularProgressBar = ({ progress, size = 100, strokeWidth = 10 }) => {
  // Calculate circumference based on the radius
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke dasharray and dashoffset for the progress
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="rotate-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#4caf50"  // You can customize the color here
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.3s ease', // Smooth transition on progress change
          }}
        />
      </svg>
      <span className="absolute text-xl font-semibold">{progress}%</span>
    </div>
  );
};

export default CircularProgressBar;
