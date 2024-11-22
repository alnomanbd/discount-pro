import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

// Lazy-loaded components
const Home = React.lazy(() => import("../pages/Home"));
const Brands = React.lazy(() => import("../pages/Brands"));
const CouponPage = React.lazy(() => import("../pages/CouponPage"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const LoadingSpinner = React.lazy(() => import("../components/Spinner/LoadingSpinner"));

import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/SignUp';
import ForgotPasswordPage from '../pages/ForgotPassword';
import AboutUsPage from '../pages/AboutUs';
import TermsPage from '../pages/TermsPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ProfilePage from '../pages/ProfilePage';
import PrivateRoute from './PrivateRoute';
import Test from '../pages/Test';

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
        path: "/brands/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CouponPage />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUsPage />
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/test",
        element: <Test />
      },
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
        path: "/auth/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: "/auth/forgot-password",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ForgotPasswordPage />
          </Suspense>
        ),
      },
      {
        path: "/auth/terms",
        element: <TermsPage />
      },
      {
        path: "/auth/privacy-policy",
        element: <PrivacyPolicy />
      }
    ],
  },
  {
    path: "*", 
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
