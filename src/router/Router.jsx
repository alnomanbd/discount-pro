import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

// Lazy-loaded components
const Home = React.lazy(() => import("../pages/Home"));
const Brands = React.lazy(() => import("../pages/Brands"));
const CouponPage = React.lazy(() => import("../pages/CouponPage")); // Import coupon page component
const NotFound = React.lazy(() => import("../pages/NotFound"));
const LoadingSpinner = React.lazy(() => import("../components/Spinner/LoadingSpinner"));

import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/SignUp';
import ForgotPasswordPage from '../pages/ForgotPassword';
import AboutUsPage from '../pages/AboutUs';

// Router setup
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/brands",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Brands />
          </Suspense>
        ),
      },
      {
        // Dynamic route for brand details
        path: "/brands/:id", // Dynamic route for each brand
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CouponPage /> {/* This component will display coupons and brand details */}
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUsPage/>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        // Dynamic route for brand details
        path: "/auth/signup", // Dynamic route for each brand
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignupPage /> {/* This component will display coupons and brand details */}
          </Suspense>
        ),
      },
      {
        // Dynamic route for brand details
        path: "/auth/forgot-password", // Dynamic route for each brand
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ForgotPasswordPage /> {/* This component will display coupons and brand details */}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*", // Catch-all route for 404
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
