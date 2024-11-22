import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../services/firebase.config';

const ForgotPasswordPage = () => {
  const { userPasswordReset } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(email)

    if (!email) {
      setMessage('Please enter a valid email address.');
      setLoading(false);
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      console.log('Checking if email is registered:', email); // Debugging log

      // Check if the email is registered in Firebase Authentication
      const methods = await fetchSignInMethodsForEmail(auth, email); // Use the auth instance from firebase.config.js

      console.log('Sign-in methods:', methods); // Log the methods array to see what is returned

      if (methods.length === 0) {
        // If no sign-in methods are found, the email is not registered
        setMessage('This email is not registered.');
        toast.error('This email is not registered.');
        setLoading(false);
        return;
      }

      // If email is registered, proceed to send password reset link
      userPasswordReset(email)
        .then(() => {
          setMessage('Password reset link sent to your email!');
          toast.success('Password reset link sent to your email!');
          setEmail('');
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;

          // Handle specific Firebase errors
          if (errorCode === 'auth/user-not-found') {
            setMessage('This email is not registered.');
            toast.error('This email is not registered.');
          } else if (errorCode === 'auth/invalid-email') {
            setMessage('The email address is not valid.');
            toast.error('The email address is not valid.');
          } else {
            setMessage(errorMessage);
            toast.error(errorMessage || 'Error sending password reset link. Please try again.');
          }
        });
    } catch (error) {
      setLoading(false);
      setMessage('Error checking email. Please try again.');
      toast.error('Error checking email. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Forgot Password</h2>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Error/Success Message */}
          {message && (
            <div className={`text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'} mb-4`}>
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Password Reset Link'}
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password? 
            <Link to="/auth/login" className="text-blue-600 hover:text-blue-800"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
