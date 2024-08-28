import React from "react";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, useRoutes } from "react-router-dom";
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
import Admin from "./pages/Admin";
import { Terms, Privacy, Refund } from "./pages/Legal";
const AppRoutes = () => {
  // Radush Technologies Pvt Ltd
  return useRoutes([
    { path: "/refund-and-cancellation", element: <Refund /> },
    { path: "/privacy-policy", element: <Privacy /> },
    { path: "/terms-and-conditions", element: <Terms /> },
    { path: "/login", element: <Login /> },
    { path: "/admin", element: <Admin /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/profile", element: <Profile /> },
    { path: "/courses", element: <Courses /> },
    { path: "/course-details/:id", element: <CourseDetails /> },
    { path: "/about", element: <About /> },
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services", element: <Services /> },
    { path: "/speak", element: <Speak /> },
    { path: "/content", element: <Content /> },
    { path: "/level", element: <Level /> },
    { path: "/budget", element: <Budget /> },
    { path: "/fault", element: <Fault /> },
    { path: "/develop", element: <Develop /> },
    { path: "/framing", element: <Framing /> },
    { path: "/alert", element: <Alert /> },
    { path: "/devops", element: <Devops /> },
    { path: "/need", element: <Need /> },
    { path: "/velocity", element: <Velocity /> },
  ]);
};
const App = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        {/* <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div> */}

        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
