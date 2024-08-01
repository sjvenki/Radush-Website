import React from "react";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const App = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            {/* //Courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Speak" element={<Speak />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Level" element={<Level />} />
            <Route path="/Budget" element={<Budget />} />
            <Route path="/Fault" element={<Fault />} />
            <Route path="/Develop" element={<Develop />} />
            <Route path="/Framing" element={<Framing />} />
            <Route path="/Alert" element={<Alert />} />
            <Route path="/Devops" element={<Devops />} />
            <Route path="/Need" element={<Need />} />
            <Route path="/Velocity" element={<Velocity />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
};

export default App;
