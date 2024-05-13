import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Grid } from '@mui/material';
import './App.css'; // Import your CSS file for styling
import image1 from './assets/Product-Engineering.png';
import image2 from './assets/Partnering for Success.jpg';
import image3 from './assets/Consulting Services.jpg';
import image4 from './assets/Training Services.jpg';
import image5 from './assets/Embeded Systems.jpg';
import image6 from './assets/ESG.jpg';
import officeBuildingImage from './assets/office-building-q4i5wygbi2h3068rajo6d22rm0vhsgbhx4eth48oa0.png';
import timelineImage from './assets/timeline-q4i616q6989j903kldhqkznfug0yff40i23h7xywa0.png';
import meetingImage from './assets/meeting-1-q4i64tdqn78e2stsefyvpkoif04z5cipc0ryxel694.png';
import { Link, useNavigate } from 'react-router-dom';

const items = [
  {
    image: image2,
    
  },
  {
    image: image1,
    
  },
  {
    image: image3,
   
  },
  {
    image: image4,
    
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
     {/* <Grid container spacing={2} justifyContent="center" style={{}}>
          <Grid item xs={12}>
      <Carousel>
        {items.map((item, index) => (
          <Paper key={index}>
            <img src={item.image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '600px',objectFit:'cover' }} />
           
          </Paper>
        ))}
      </Carousel>
      </Grid>
      </Grid> */}
      <Grid justifyContent="center">
      <Grid item xs={11} sm={10} md={8} lg={6}>
        <Carousel>
          {items.map((item, index) => (
            <div key={index}>
              <Paper>
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
                />
              </Paper>
            </div>
          ))}
        </Carousel>
      </Grid>
    </Grid>
      <div className="service-background">
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
          Services
        </Typography>
        <Grid container spacing={2} justifyContent="center" style={{marginTop:'40px'}}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <div className="service1-item-container">
                  <img src={image1} alt="Service 1" className="service-image" />
                  <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Software solutions and Product re-engineering</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className="service1-item-container">
                  <img src={image3} alt="Service 2" className="service-image" />
                  <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Consulting</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className="service1-item-container">
                  <img src={image4} alt="Service 3" className="service-image" />
                  <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Training</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <div className="service1-item-container">
                  <img src={image6} alt="Service 4" className="service-image" />
                  <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>ESG</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className="service1-item-container">
                  <img src={image5} alt="Service 5" className="service-image" />
                  <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Embedded Systems</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h4" align="center" gutterBottom style={{marginTop:'40px', fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Grid container spacing={2} justifyContent="center" style={{ color: 'black', fontWeight: 'bold' }}>
          <Grid item xs={12}>
            <div className="about-us-container">
              <div className="about-us-image">
               <a href='/about'> <img src={officeBuildingImage} alt="Office Building" /></a>
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px', cursor: 'pointer'  }} >Company Profile</Typography>
              </div>
              <div className="about-us-image">
              <a href='/about'> <img src={timelineImage} alt="Timeline" /></a>
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px',cursor: 'pointer' }} >Company History</Typography>
              </div>
              <div className="about-us-image">
              <a href='/about'> <img src={meetingImage} alt="Meeting" /></a>
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px',cursor: 'pointer' }}>Our Resources</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
