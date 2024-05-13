// import React from 'react';
// import serviceImage from './assets/serviceImage.jpg'; // Import your image file

// const Services = () => {
//   return (
//     <div>
      
//       <img
//         src={serviceImage} // Use the imported image as the src
//         alt="Service"
//         style={{
//           width: '100%',
//           height: 'auto',
//           maxHeight: '70vh'
//         }}
//       />
     
//     </div>
//   );
// };

// export default Services;




import React from 'react';
import { Grid, Typography } from '@mui/material';
import serviceImage from './assets/serviceImage.jpg'; // Import your image file
import './App.css'; // Import your CSS file for styling
// import image1 from './assets/Software solutions And product reengineering.jpg';
// import image2 from './assets/AI with human.jpeg';
// import image3 from './assets/Consulting.jpeg';
// import image4 from './assets/Training And Services.jpeg';
// import image5 from './assets/embedded-445.jpg';
import image1 from './assets/Product-Engineering.png';
import image2 from './assets/Partnering for Success.jpg';
import image3 from './assets/Consulting Services.jpg';
import image4 from './assets/Training Services.jpg';
import image5 from './assets/Embeded Systems.jpg';
import image6 from './assets/ESG.jpg';


const Services = () => {
  return (
    <div className="service-background">
      <img
        src={serviceImage} // Use the imported image as the src
        alt="Service"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '70vh'
        }}
      />
      <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold', marginTop: '20px' }}>
        Services
      </Typography>
      <Grid container spacing={2} justifyContent="center" style={{marginTop:'40px'}}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <div className="service1-item-container">
                <img src={image1} alt="Service 1" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Software solutions and Product re-engineering</Typography>
                <ul>
                  <li >Consult</li>
                  <li>Design</li>
                  <li>Build & Test</li>
                  <li>Maintain & Manage</li>
                  <li>Point Solutions</li>
                 
                </ul>
              </div>
            </Grid>
            <Grid item>
              <div className="service1-item-container">
                <img src={image3} alt="Service 2" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Consulting</Typography>
                <ul>
                  <li>DevOps</li>
                  <li>SRE</li>
                  <li>DevSecOps</li>
                  <li>SOC set up</li>
                  <li>Business Consulting</li>
                 
                </ul>
              </div>
            </Grid>
            <Grid item>
              <div className="service1-item-container">
                <img src={image4} alt="Service 3" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Training</Typography>
                <ul>
                  <li>Software Development</li>
                  <li>Cloud</li>
                  <li>Devops, SRE & DevSecops</li>
                  <li>SoftSkills</li>
                  <li>DataScience and AIOps</li>
                 
                </ul>
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
                <ul>
                  <li>Carbon Reporting</li>
                  <li>Carbon Trading</li>
                  <li>CDP Reporting</li>
                  <li>Sustainbility Reports</li>
                  <li>Stakeholder Management Reports</li>
                 
                </ul>
              </div>
            </Grid>
            <Grid item>
              <div className="service1-item-container">
                <img src={image5} alt="Service 5" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Embedded Systems</Typography>
                <ul >
                  <li>Full stack training</li>
                  <li>Integrated LMS</li>
                  <li>Recruitment Services</li>
                  <li>Freshers Placements</li>
                  <li>Live Project Deployment</li>
                 
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
    </div>
  );
};

export default Services;

