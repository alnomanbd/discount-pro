import React, { useState, useEffect, useContext } from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';

const LoginPage = () => {
  const { setUser, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Secret key for encryption and decryption (ensure this is stored securely)
  const secretKey = "your-secret-key";  // Should be placed in environment variables or a secure store

  // Encrypt data before storing it in localStorage
  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  // Decrypt data from localStorage
  const decryptData = (encryptedData) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData ? JSON.parse(decryptedData) : null;  // Safely parse if data exists
    } catch (error) {
      console.error("Error decrypting data:", error);  // Log any decryption errors
      return null;  // Return null if decryption fails
    }
  };

  // Save encrypted data to localStorage
  const saveToLocalStorage = (key, data) => {
    const encryptedData = encryptData(data);
    localStorage.setItem(key, encryptedData);
  };

  // Get decrypted data from localStorage
  const getFromLocalStorage = (key) => {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      return decryptData(encryptedData);  // Decrypt and return the data
    }
    return null;
  };

  // Check localStorage for saved credentials when the component mounts
  useEffect(() => {
    const savedEmail = getFromLocalStorage('email');
    const savedPassword = getFromLocalStorage('password');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedRememberMe && savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    userLogin(email, password)
      .then(result => {
        setUser(result.user);

        // Save to localStorage only if "remember me" is checked
        if (rememberMe) {
          saveToLocalStorage('email', email);
          saveToLocalStorage('password', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }

        navigate('/');
      }).catch(() => toast.error("Email and Password do not match!"));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>

        {/* Form for Email and Password Login */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'} // Dynamically change input type
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {/* Show/Hide Password Icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-14 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2 leading-tight"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <Link to="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-4">Or login with</p>

          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              <IoLogoGoogle className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
              <FaFacebook className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
              <FaGithub className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
              <FaTwitter className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
              <FaLinkedin className="text-xl" />
            </button>
          </div>
        </div>

        {/* Sign-up link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account? 
            <Link to="/auth/signup" className="text-blue-600 hover:text-blue-800"> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
