import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import logo from "./assets/Radush-Logo-PNG-e1643105522229-300x155.png"; // Adjust the file extension if needed
import "./App.css"; // Import your CSS file for styling
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    // <div className="footer-container">
    <>
      <Grid container spacing={2} sx={{ padding: "2%" }}>
        <Grid item xs={12} md={3} className="gridImg">
          <img src={logo} alt="Radush Logo" className="footer-logo" />
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
          {/* <div className="footer-section">
           */}
          <Typography variant="h5" className="footer-heading">
            Services
          </Typography>

          <Typography variant="body1">
            <Link to="/services">Product engineering</Link>
          </Typography>

          <Typography variant="body1">
            <Link to="/services">Consulting</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/services">Training</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/services">ESG</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/services">Cloud</Link>
          </Typography>
          {/* </div> */}
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
          {/* <div className="footer-section"> */}
          <Typography variant="h5" className="footer-heading">
            About
          </Typography>
          <Typography variant="body1">
            <Link to="/about">Company Profile</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/about">Company History</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/about">Our Resources</Link>
          </Typography>
          {/* </div> */}
        </Grid>

        <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
          {/* <div className="footer-section"> */}
          <Typography variant="h5" className="footer-heading">
            Links
          </Typography>
          <Typography variant="body1">
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </Typography>
          {/* <Typography variant="body1"  onClick ={()=>navigate("/terms-conditions")}>Terms & Conditions</Typography> */}
          <Typography variant="body1">
            <Link to="/privacy-statement">Privacy Statement</Link>
          </Typography>
          <Typography variant="body1">
            <Link to="/refund-policy">Refund and Cancellation Policy</Link>
          </Typography>
          {/* </div>
           */}
        </Grid>
      </Grid>
      <div className="footer-copyright">
        <Typography variant="body1">
          Copyright © 2023 Radush. All rights reserved.
        </Typography>
      </div>

      {/* // </div> */}
    </>
  );
};

export default Footer;
