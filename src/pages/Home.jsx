import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee"; // For the fast marquee scroll
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import HomeSlider from "../components/Slider/HomeSlider";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import ScrollToTop from "react-scroll-to-top";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import ScrollToTopButton from "../components/Scroll/ScrollToTop";
import ScrollTopBarPercentage from "../components/Scroll/ScrollTopWithPercentage";

// Assuming this data is passed via props or imported from a data file
const Home = () => {
  const [brands, setBrands] = useState([]);
  const [brandsOnSale, setBrandsOnSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // You can adjust the duration of the animations
      once: true, // To make the animation happen only once
    });

    const fetchBrandData = async () => {
      try {
        const response = await fetch("/coupon.data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch brand data");
        }
        const data = await response.json();
        setBrands(data);
        setBrandsOnSale(data.filter((brand) => brand.isSaleOn)); // Filter brands that are on sale
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state can be enhanced with a spinner or placeholder
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  return (
    <div>
      {/* Banner Section */}
      <HomeSlider />

      <div className="my-8 px-6 py-6 bg-slate-200">
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>

        <div className="w-full overflow-hidden">
          <Marquee
            speed={60}
            gradient={false}
            pauseOnHover={true}
            className="w-full"
            style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
          >
            <div className="flex items-center space-x-6">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="flex-shrink-0 mx-4 my-5 transform transition-transform duration-300 hover:scale-110"
                >
                  <Link to={`/brand-details/${brand._id}`}>
                    <img
                      src={brand.brand_logo || "default_logo_path.png"}
                      alt={brand.brand_name || "Brand Name"}
                      className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 object-contain shadow-md rounded-full transition-transform duration-200 ease-in-out hover:shadow-xl"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Brands on Sale Section */}
      <div className="my-8 px-4 mx-auto bg-slate-200 py-10">
        <h2 className="text-3xl font-semibold mb-4">Brands on Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brandsOnSale.map((brand) => (
            <div
              key={brand._id}
              className="max-w-sm bg-white rounded-2xl shadow-lg p-4"
              data-aos="fade-up" // Apply fade-up animation on scroll
              data-aos-delay="200" // Optional delay to stagger the animations
            >
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
              <p className="text-sm text-gray-500">{brand.category}</p>
              <p className="text-lg font-bold text-indigo-600">
                {brand.coupons.length} Coupons
              </p>
              <Link
                to={`/brand-details/${brand._id}`}
                className="mt-4 block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800"
              >
                View Coupons
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <ScrollToTopButton/> */}
      <ScrollTopBarPercentage/>
    </div>
  );
};

export default Home;
