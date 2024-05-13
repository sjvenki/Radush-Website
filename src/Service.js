// // Service.js
// import React from 'react';
// import { Grid, Typography } from '@mui/material';
// import image1 from './assets/pexels-lukas-574071.jpg';
// import image2 from './assets/pexels-andrea-piacquadio-3760067-1024x683.jpg';
// import image3 from './assets/pexels-christina-morillo-1181298-1024x684.jpg';
// import image4 from './assets/ACTUAL-DESIGN-This-is-what-we-publish.jpg';
// import image5 from './assets/embedded-445.jpg';
// import officeBuildingImage from './assets/office-building-q4i5wygbi2h3068rajo6d22rm0vhsgbhx4eth48oa0.png';
// import timelineImage from './assets/timeline-q4i616q6989j903kldhqkznfug0yff40i23h7xywa0.png';
// import meetingImage from './assets/meeting-1-q4i64tdqn78e2stsefyvpkoif04z5cipc0ryxel694.png';
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
//               <img src={image1} alt="Service 1" className="service-image" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Software solutions and Product re-engineering</Typography>
//             </Grid>
//             <Grid item>
//               <img src={image2} alt="Service 2" className="service-image" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Consulting</Typography>
//             </Grid>
//             <Grid item>
//               <img src={image3} alt="Service 3" className="service-image" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Training</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Grid container justifyContent="center" spacing={2}>
//             <Grid item>
//               <img src={image4} alt="Service 4" className="service-image" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>ESG</Typography>
//             </Grid>
//             <Grid item>
//               <img src={image5} alt="Service 5" className="service-image" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Embedded Systems</Typography>
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
//               <img src={officeBuildingImage} alt="Office Building" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Company Profile</Typography>
//             </div>
//             <div className="about-us-image">
//               <img src={timelineImage} alt="Timeline" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Company History</Typography>
//             </div>
//             <div className="about-us-image">
//               <img src={meetingImage} alt="Meeting" />
//               <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px'  }}>Our Resources</Typography>
//             </div>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Service;



import React from 'react';
import { Grid, Typography } from '@mui/material';
import image1 from './assets/pexels-lukas-574071.jpg';
import image2 from './assets/pexels-andrea-piacquadio-3760067-1024x683.jpg';
import image3 from './assets/pexels-christina-morillo-1181298-1024x684.jpg';
import image4 from './assets/ACTUAL-DESIGN-This-is-what-we-publish.jpg';
import image5 from './assets/embedded-445.jpg';
import officeBuildingImage from './assets/office-building-q4i5wygbi2h3068rajo6d22rm0vhsgbhx4eth48oa0.png';
import timelineImage from './assets/timeline-q4i616q6989j903kldhqkznfug0yff40i23h7xywa0.png';
import meetingImage from './assets/meeting-1-q4i64tdqn78e2stsefyvpkoif04z5cipc0ryxel694.png';
import './App.css'; // Import your CSS file for styling

const Service = () => {
  return (
    <div className="service-background"> {/* Apply the background color here */}
      <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
        Services
      </Typography>
      <Grid container spacing={2} justifyContent="center" style={{marginTop:'40px'}}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <div className="service-item-container">
                <img src={image1} alt="Service 1" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Software solutions and Product re-engineering</Typography>
              </div>
            </Grid>
            <Grid item>
              <div className="service-item-container">
                <img src={image2} alt="Service 2" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Consulting</Typography>
              </div>
            </Grid>
            <Grid item>
              <div className="service-item-container">
                <img src={image3} alt="Service 3" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>Training</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <div className="service-item-container">
                <img src={image4} alt="Service 4" className="service-image" />
                <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'18px' }}>ESG</Typography>
              </div>
            </Grid>
            <Grid item>
              <div className="service-item-container">
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
              <img src={officeBuildingImage} alt="Office Building" />
              <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Company Profile</Typography>
            </div>
            <div className="about-us-image">
              <img src={timelineImage} alt="Timeline" />
              <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Company History</Typography>
            </div>
            <div className="about-us-image">
              <img src={meetingImage} alt="Meeting" />
              <Typography variant="body1" align="center" style={{ color: 'black', fontWeight: 'bold',fontSize:'15px' }}>Our Resources</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
