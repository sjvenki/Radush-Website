// import React from 'react';
// import { Grid, Typography } from '@mui/material';
// import image1 from './assets/Understanding SLO,SLA & SLI.png';
// import image2 from './assets/Understanding Error Budgets.jpg';
// import image3 from './assets/Fault Tolerance testing.jpg';
// import image4 from './assets/Canary Releases and developments.png';
// import image5 from './assets/Farming Error Budget Policies.jpg';
// import image6 from './assets/False Positives vs No Alerts.jpg';
// import image7 from './assets/Breaking Down Silos.jpg';
// import image8 from './assets/The Need For Real World.png';
// import image9 from './assets/DevOps Stability.jpg';
// import './App.css'; // Import your CSS file for styling

// const Service = () => {
//   return (
//     <div className="service-background"> {/* Apply the background color here */}
//       <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
//         Services
//       </Typography>
//       <Grid container spacing={2} justifyContent="center" style={{marginTop:'40px'}}>
//         <Grid item xs={12}>
//           <Grid container justifyContent="center" spacing={2}>
//             <Grid item>
//               <div className="service-item-container">
//                 <img src={image1} alt="Service 1" className="service-image" />
//                 <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Software solutions and Product re-engineering</Typography>
//               </div>
//             </Grid>
//             <Grid item>
//               <div className="service-item-container">
//                 <img src={image2} alt="Service 2" className="service-image" />
//                 <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Consulting</Typography>
//               </div>
//             </Grid>
//             <Grid item>
//               <div className="service-item-container">
//                 <img src={image3} alt="Service 3" className="service-image" />
//                 <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Training</Typography>
//               </div>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Grid container justifyContent="center" spacing={2}>
//             <Grid item>
//               <div className="service-item-container">
//                 <img src={image4} alt="Service 4" className="service-image" />
//                 <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>ESG</Typography>
//               </div>
//             </Grid>
//             <Grid item>
//               <div className="service-item-container">
//                 <img src={image5} alt="Service 5" className="service-image" />
//                 <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Embedded Systems</Typography>
//               </div>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Typography variant="h4" align="center" gutterBottom style={{marginTop:'40px', fontWeight: 'bold' }}>
//         About Us
//       </Typography>
//       <Grid container spacing={2} justifyContent="center" style={{ color: 'black', fontWeight: 'bold' }}>
//         <Grid item xs={12}>
//           <div className="about-us-container">
//             <div className="about-us-image">
//               <img src={image6} alt="False Positives vs No Alerts" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Company Profile</Typography>
//             </div>
//             <div className="about-us-image">
//               <img src={image7} alt="Breaking Down Silos" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Company History</Typography>
//             </div>
//             <div className="about-us-image">
//               <img src={image8} alt="The Need For Real World" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Our Resources</Typography>
//             </div>
//             <div className="about-us-image">
//               <img src={image9} alt="DevOps Stability" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Our Resources</Typography>
//             </div>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Service;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import image1 from "./assets/Understanding SLO,SLA & SLI.png";
import image2 from "./assets/Understanding Error Budgets.jpg";
import image3 from "./assets/Fault Tolerance testing.jpg";
import image4 from "./assets/Canary Releases and developments.png";
import image5 from "./assets/Farming Error Budget Policies.jpg";
import image6 from "./assets/False Positives vs No Alerts.jpg";
import image7 from "./assets/Breaking Down Silos.jpg";
import image8 from "./assets/The Need For Real World.png";
import image9 from "./assets/DevOps Stability.jpg";
import serviceImage from "./assets/serviceImage.jpg"; // Import your image file
import "./App.css"; // Import your CSS file for styling

const ContentCorner = () => {
  const navigate = useNavigate();
  return (
    <div className="service-background" style={{ backgroundColor: "white" }}>
      <img
        src={serviceImage} // Use the imported image as the src
        alt="Service"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "70vh",
        }}
      />
      <div className="Content-background">
        {" "}
        {/* Apply the background color here */}
        {/* <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
        Services
      </Typography> */}
        {/* <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginTop: "40px" }}
        >
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/slo">
                    {" "}
                    <img
                      src={image1}
                      alt="Service 1"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Understanding SLO,SLA & SLI: Key Concepts for Service Level
                    Management
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/error-budgets">
                    {" "}
                    <img
                      src={image2}
                      alt="Service 2"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Understanding Error Budgets and Their Role in Defining
                    Service Level Objectives
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/fault-tolerance">
                    {" "}
                    <img
                      src={image3}
                      alt="Service 3"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Is Fault Tolerance Testing Necessary When Resilience is in
                    Place
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/canary-releases">
                    <img
                      src={image4}
                      alt="Service 4"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Introduction to canary releases and developments
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/framing-error-budgets">
                    <img
                      src={image5}
                      alt="Service 5"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Framing Error Budget Policies: Balancing Reliability and
                    Innovation
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/false-positives">
                    {" "}
                    <img
                      src={image6}
                      alt="Service 6"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    False Positives vs No Alerts: Navigating Software
                    Development For Newcomers
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/breaking-down-silos">
                    {" "}
                    <img
                      src={image7}
                      alt="Service 7"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Breaking Down Silos: Devops,Collaboration,SRE Practices,and
                    Shared Ownership
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/real-world-simulation">
                    {" "}
                    <img
                      src={image8}
                      alt="Service 8"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    The Need for Real-World Simulation
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="service-item-container">
                  <a href="/dev-ops">
                    <img
                      src={image9}
                      alt="Service 9"
                      className="service-image"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Dev = Velocity of Release,OPS = Reliability and satability
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="service-item-container">
            <Card sx={{ maxWidth: '80%' }}>
              <a href="/slo">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image1}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Understanding SLO,SLA & SLI: Key Concepts for Service Level
                    Management
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/error-budgets">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image2}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Understanding Error Budgets and Their Role in Defining
                    Service Level Objectives
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/fault-tolerance">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image3}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Is Fault Tolerance Testing Necessary When Resilience is in
                    Place
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/canary-releases">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image4}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Introduction to canary releases and developments
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/framing-error-budgets">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image5}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Framing Error Budget Policies: Balancing Reliability and
                    Innovation
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/false-positives">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image6}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                  False Positives vs No Alerts: Navigating Software
                    Development For Newcomers
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/breaking-down-silos">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image7}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Breaking Down Silos: Devops,Collaboration,SRE Practices,and
                    Shared Ownership
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/real-world-simulation">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image8}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    The Need for Real-World Simulation
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
          <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: '80%' }}>
              <a href="/dev-ops">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image9}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                 
                  <Typography level="body-sm">
                    {" "}
                    Dev = Velocity of Release,OPS = Reliability and satability
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContentCorner;
