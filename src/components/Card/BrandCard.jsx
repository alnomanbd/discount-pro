import React, { useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import icons for stars
import { Link } from 'react-router-dom'; // Import Link for routing
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const BrandCard = ({ brand }) => {
  // Initialize AOS (for animations)
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set animation duration
      easing: 'ease-in-out', // Set easing effect
      once: true, // Animation occurs only once
    });
  }, []);

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star
    const emptyStars = 5 - fullStars - halfStars; // Empty stars

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Half star
    if (halfStars > 0) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div
      className="max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
      data-aos="fade-up" // Add AOS animation on scroll
    >
      {/* Brand Logo */}
      <div className="relative flex-shrink-0 w-32 h-32 mx-auto mt-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>

      {/* Brand Info Section */}
      <div className="flex flex-col p-4 flex-grow space-y-3">
        {/* Brand Name and Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 truncate w-3/4">{brand.brand_name}</h3>
          <div className="flex items-center space-x-1">
            {renderStars(brand.rating)} {/* Render Rating */}
            <span className="ml-2 text-lg font-semibold text-gray-600">{brand.rating}</span>
          </div>
        </div>

        {/* Brand Description */}
        <p className="text-gray-600 text-sm h-16 overflow-hidden">{brand.description}</p>
      </div>

      {/* Sale Info */}
      {brand.isSaleOn && (
        <div className="p-4 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-semibold text-xl animate-pulse rounded-b-lg">
          Sale is On!
        </div>
      )}

      {/* View Coupons Button */}
      <div className="p-4 flex justify-center">
        <Link
          to={`/brands/${brand._id}`}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          View Coupons
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
