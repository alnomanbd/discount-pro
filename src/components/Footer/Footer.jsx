import React from "react";
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Discount PRO | All Rights Reserved</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-4">Developed by Al Noman.</p>
    </footer>
  );
};

export default Footer;
