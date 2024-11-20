import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTags, FaUserCircle, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'; // React Icons
import { IoMdPerson } from 'react-icons/io'; // More icons (optional)

const Header = () => {
  // Simulate user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Update based on actual auth state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://via.placeholder.com/150', // Placeholder image
  });

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null); // Clear user data on logout
  };

  return (
    <header className="bg-indigo-700 rounded-full text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">DiscountPro</Link>
        </div>

        {/* Navigation Section */}
        <div className="flex-grow flex justify-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/brands" className="flex items-center space-x-2 text-white">
            <FaTags />
            <span>Brands</span>
          </Link>
          {isLoggedIn && (
            <Link to="/my-profile" className="flex items-center space-x-2 text-white">
              <IoMdPerson />
              <span>My Profile</span>
            </Link>
          )}
          <Link to="/about-us" className="flex items-center space-x-2 text-white">
            <FaUserCircle />
            <span>About Us</span>
          </Link>
        </div>

        {/* Authentication Section */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            // Show login/registration buttons if not logged in
            <>
              <Link
                to="/auth/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-200"
              >
                SignUp
              </Link>
            </>
          ) : (
            // Show user profile info and logout button if logged in
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="text-sm text-white">
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-200"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
