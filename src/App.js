// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Navbar from './Navbar';
// import CarouselSlider from './CarouselSlider';
// import Service from './Service';
// import Footer from './Footer'; // Import the Footer component
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div style={{ marginTop: '0px' }}>
//         <CarouselSlider />
//       </div>
//       <Service />
//       <Footer /> {/* Render the Footer component below the Service component */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"; // Import the Home component
import About from "./About"; // Import the About component
import Services from "./Services"; // Import the Services component
import GlobalPresence from "./GlobalPresence"; // Import the GlobalPresence component
import Contact from "./Contact"; // Import the Contact component
import ContentCorner from "./ContentCorner"; // Import the ContentCorner component
import Footer from "./Footer"; // Import the Footer component
import TermsAndConditions from "./TermsAndConditions";
import PrivacyStatement from "./PrivacyStatement";
import RefundPolicy from "./RefundPolicy";
import SLO from "./SLO";
import ErrorBudgets from "./ErrorBudgets";
import FaultTolerance from "./FaultTolerance";
import CanaryReleases from "./CanaryReleases";
import FramingErrorBudget from "./FramingErrorBudget";
import FalsePositives from "./FalsePositives";
import BreakingDownSilos from "./BreakingDownSilos";
import RealWorldSimulation from "./RealWorldSimulation";
import DevOps from "./DevOps";
import Products from "./Products";
import { Container } from "@mui/material";
import "./App.css";
// import SLO from './SLO';
// import ErrorBudgets from './ErrorBudgets';
// import FaultTolerance from './FaultTolerance';
// import CanaryReleases from './CanaryReleases';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Products />} />

        <Route path="/global-presence" element={<GlobalPresence />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/content-corner" element={<ContentCorner />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/slo" element={<SLO />} />
        <Route path="/error-budgets" element={<ErrorBudgets />} />
        <Route path="/fault-tolerance" element={<FaultTolerance />} />
        <Route path="/canary-releases" element={<CanaryReleases />} />
        <Route path="/framing-error-budgets" element={<FramingErrorBudget />} />
        <Route path="/false-positives" element={<FalsePositives />} />
        <Route path="/breaking-down-silos" element={<BreakingDownSilos />} />
        <Route
          path="/real-world-simulation"
          element={<RealWorldSimulation />}
        />
        <Route path="/dev-ops" element={<DevOps />} />

        {/* Define routes for other pages/components as needed */}
      </Routes>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default App;
