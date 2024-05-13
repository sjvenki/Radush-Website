import React from 'react';
import { Typography, Button,Grid} from '@mui/material';
import logo from './assets/Radush-Logo-PNG-e1643105522229-300x155.png'; // Adjust the file extension if needed
import './App.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
const navigate = useNavigate();
  return (
   
       
    // <div className="footer-container">
    <>

    <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
        <img src={logo} alt="Radush Logo" className="footer-logo" />
        </Grid>
        <Grid item xs={12} md={3} sx={{marginTop:'20px', textAlign:'left',}}>
      {/* <div className="footer-section">
       */}
        <Typography variant="h5" className="footer-heading">Services</Typography>
       <Typography variant="body1" className="footer-item"><a href="/services">Software solutions & Product re-engineering</a></Typography>
        <Typography variant="body1" className="footer-item"><a href="/services">Consulting</a></Typography>
        <Typography variant="body1" className="footer-item"><a href="/services">Training</a></Typography>
        {/* </div> */}
     </Grid>
     <Grid item xs={12} md={3} sx={{marginTop:'20px', textAlign:'left',}}>
      {/* <div className="footer-section"> */}
        <Typography variant="h5" className="footer-heading">About</Typography>
        <Typography variant="body1" className="footer-item"><a href ="/about">Company Profile</a></Typography>
        <Typography variant="body1" className="footer-item"><a href ="/about">Company History</a></Typography>
        <Typography variant="body1" className="footer-item"><a href ="/about">Our Resources</a></Typography>
      {/* </div> */}
      </Grid>
      
      <Grid item xs={12} md={3} sx={{marginTop:'20px',textAlign:'left',}}>
      {/* <div className="footer-section"> */}
        <Typography variant="h5" className="footer-heading">Links</Typography>
        <Typography variant="body1" className="footer-item"><a href= "/terms-conditions">Terms & Conditions</a></Typography>
        {/* <Typography variant="body1" className="footer-item" onClick ={()=>navigate("/terms-conditions")}>Terms & Conditions</Typography> */}
        <Typography variant="body1" className="footer-item"><a href ="/privacy-statement">Privacy Statement</a></Typography>
        <Typography variant="body1" className="footer-item"><a href ="/refund-policy">Refund and Cancellation Policy</a></Typography>
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




