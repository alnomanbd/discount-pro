import React, { useState, useEffect } from 'react';
import BrandCard from '../components/Card/BrandCard'; // Import BrandCard component
import { ClipLoader } from 'react-spinners'; // Import the spinner component

const BrandsPage = () => {
  const [brands, setBrands] = useState([]); // Store the brand data
  const [loading, setLoading] = useState(true); // Track the loading state
  const [error, setError] = useState(null); // Track errors during fetch
  const [searchTerm, setSearchTerm] = useState(''); // For search functionality

  // Fetch brand data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/coupon.data.json'); // Assuming the data is in the public folder
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched Brands:', data);  // Debug: Log the fetched data
        setBrands(data); // Set the brand data to state
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  // Show error message if there's an error in fetching data
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Handle the search functionality (filter brands by name)
  const handleSearchChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value); // Update search term state on user input
  };

  // Filter brands based on search term (on each render)
  const filteredBrands = searchTerm
    ? brands.filter((brand) =>
        brand.brand_name && brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) // Ensure `name` is defined before calling `toLowerCase`
      )
    : brands; // If no search term, show all brands

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-semibold mb-6 text-center">Browse Brands</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a brand..."
        value={searchTerm}
        onChange={handleSearchChange} // Update search term on input change
        className="p-3 border border-gray-300 rounded-lg w-full mb-6"
      />

      {/* Brands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* If search term exists, show filtered results, otherwise show all brands */}
        {filteredBrands.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No brands found.
          </div>
        ) : (
          filteredBrands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))
        )}
      </div>
    </div>
  );
};

export default BrandsPage;
