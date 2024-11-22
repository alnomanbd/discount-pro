import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.jsx";
import { AuthProvider } from "./context/authContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTopBar from "./components/Scroll/ScrollTopBar.jsx";
import ScrollTopBarPercentage from "./components/Scroll/ScrollTopWithPercentage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      <ScrollTopBar/>
      {/* <ScrollTopBarPercentage/> */}
    </AuthProvider>
  </StrictMode>
);
