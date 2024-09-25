import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./appRoutes.jsx";
import "./index.css";
import "./firestoreConfig.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
