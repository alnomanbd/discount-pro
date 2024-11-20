import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify'; // Import toast for success message
import { FaClipboard, FaExternalLinkAlt } from 'react-icons/fa'; // Clipboard icon for Copy button
import 'react-toastify/dist/ReactToastify.css';

const CouponPage = () => {
  const { id } = useParams();  // Extract the brand id from the URL
  const [brand, setBrand] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the brand and coupons data from coupon.data.json file
    const fetchBrandDetails = async () => {
      try {
        const response = await fetch('/coupon.data.json'); // Path to the JSON file
        const data = await response.json();
        
        // Find the brand by ID
        const selectedBrand = data.find((brand) => brand._id === id);
        if (selectedBrand) {
          setBrand(selectedBrand);
          setCoupons(selectedBrand.coupons); // Assuming coupons are nested under each brand
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching brand details:', error);
        setLoading(false);
      }
    };

    fetchBrandDetails();
  }, [id]); // Re-fetch when `id` changes

  // Show loading screen while fetching data
  if (loading) return <div>Loading...</div>;

  // If brand is not found, redirect to the brands page
  if (!brand) return <Navigate to="/brands" />;

  // Toast notification when coupon is copied
  const handleCopy = () => {
    toast.success("Coupon Code Copied!");
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer /> {/* This renders the toast notifications */}

      {/* Brand Logo and Name */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-gray-800">{brand.brand_name}</h1>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coupons.map((coupon) => (
          <div
            key={coupon.coupon_code}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-between"
            style={{ minHeight: '350px' }} // Ensuring consistent card height
          >
            {/* Coupon Code Section */}
            <h3 className="text-2xl font-bold text-gray-900">{coupon.coupon_code}</h3>
            <p className="text-sm text-gray-700 mt-2 line-clamp-2">{coupon.description}</p>

            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-sm text-gray-600">Expiry: {coupon.expiry_date}</p>
              <p className="text-sm text-gray-600">Condition: {coupon.condition}</p>
              <p className="text-sm text-gray-600">Type: {coupon.coupon_type}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6">
              {/* Copy Code Button */}
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  <FaClipboard className="mr-2" />
                  Copy Code
                </button>
              </CopyToClipboard>

              {/* Use Now Button */}
              <Link
                to={coupon.brand_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 flex items-center text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              >
                <FaExternalLinkAlt className='mr-2' /> Use Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
