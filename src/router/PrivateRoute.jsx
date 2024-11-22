import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { user, loading, timeoutReached } = useContext(AuthContext);
  const location = useLocation();

  // If still loading, show a loading spinner
  if (loading) {
    return <div>Loading...</div>;  // Or a loading spinner
  }

  // If the timeout has reached and the user is still not available, redirect to login
  if (timeoutReached && !user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // If user is authenticated, allow access to the route
  if (user && user?.email) {
    return children;
  }

  // If user is not authenticated, redirect to login page
  return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
