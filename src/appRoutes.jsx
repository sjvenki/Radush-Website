import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Speak from "./pages/Speak";
import Content from "./pages/Content";
import Level from "./components/blog/Level";
import Budget from "./components/blog/Budget";
import Fault from "./components/blog/Fault";
import Develop from "./components/blog/Develop";
import Framing from "./components/blog/Framing";
import Alert from "./components/blog/Alert";
import Devops from "./components/blog/Devops";
import Need from "./components/blog/Need";
import Velocity from "./components/blog/Velocity";
import { Courses, CourseDetails } from "./pages/Training";
import { Login, Register, ForgotPassword } from "./pages/Auth";
import Profile from "./pages/Profile";
import AdminLayout from "./pages/Admin";
import { Terms, Privacy, Refund } from "./pages/Legal";
import TrainingBatch from "./pages/TrainingBatch.jsx";
import PaymentConfirm from "./pages/admin/PaymentConfirm.jsx";
import ManagePaidUser from "./pages/admin/ManagePaidUser.jsx";
import TrainingBatchCrud from "./pages/admin/TrainingBatchCrud.jsx";
import TrainingBatchCalendar from "./pages/TrainingBatchCalendar.jsx";
import NewPage from "./pages/NewPage.jsx";
export const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      { path: "/*", element: <Home /> },
      { path: "new-page", element: <NewPage /> },
      { path: "refund-and-cancellation", element: <Refund /> },
      { path: "privacy-policy", element: <Privacy /> },
      { path: "terms-and-conditions", element: <Terms /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "profile", element: <Profile /> },
      { path: "courses", element: <Courses /> },
      { path: "course-details/:id", element: <CourseDetails /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "speak", element: <Speak /> },
      { path: "content", element: <Content /> },
      { path: "level", element: <Level /> },
      { path: "budget", element: <Budget /> },
      { path: "fault", element: <Fault /> },
      { path: "develop", element: <Develop /> },
      { path: "framing", element: <Framing /> },
      { path: "alert", element: <Alert /> },
      { path: "devops", element: <Devops /> },
      { path: "need", element: <Need /> },
      { path: "velocity", element: <Velocity /> },
      { path: "training-batch-calendar", element: <TrainingBatchCalendar /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "", element: <TrainingBatch /> },
          { path: "training-batch", element: <TrainingBatch /> },
          { path: "enrollment-payment-link", element: <PaymentConfirm /> },
          { path: "manage-paid-users", element: <ManagePaidUser /> },
          { path: "crud-training-batch", element: <TrainingBatchCrud /> },
        ],
      },
    ],
  },
]);
