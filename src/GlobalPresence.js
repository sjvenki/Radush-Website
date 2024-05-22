// import React from 'react';
// import globalPresenceImage from './assets/Global Presence.jpg'; // Import the image file
// import indiaImage from './assets/india.jpeg'; // Import India image
// import singaporeImage from './assets/Singapore.jpg'; // Import Singapore image
// import usaImage from './assets/USA.jpg'; // Import USA image
// import {  Typography } from '@mui/material';
// const GlobalPresence = () => {
//   return (
//     <div>
//       <img src={globalPresenceImage} alt="Global Presence" style={{
//         width: '100%',
//         height: 'auto',
//         maxHeight: '70vh'
//       }}/>

// <Typography variant="h4" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold', marginTop: '20px' }}>
//        Our Locations
//       </Typography>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <img src={indiaImage} alt="India" style={{ marginRight: '10px', width: '30%' }} />
//         <ul>
//           <li>Radush Technologies Pvt. Ltd.</li>
//           <li>Wework Prestiege Cube</li>
//           <li>Survey#26, Laskar Hosur Road,</li>
//           <li>Adugodi, Koramangala,</li>
//           <li>Bangalore, India-560031</li>
//           <li>560031.</li>
//         </ul>

//         <img src={singaporeImage} alt="Singapore" style={{ marginRight: '10px', width: '30%' }} />
//         <ul>
//           <li>Radush Technologies Pte Ltd.</li>
//           <li>The Signature,</li>
//           <li>51 Changi Business Park Central</li>
//           <li>2 #04-05</li>
//           <li>Singapore-486066</li>

//         </ul>
//         <img src={usaImage} alt="USA" style={{ width: '30%' }} />
//         <ul>
//           <li>Radush Technologies LLC</li>
//           <li>3200 Living Coral Dr,</li>
//           <li>Odessa,</li>
//           <li>FL-33556</li>

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default GlobalPresence;

import React from "react";
import globalPresenceImage from "./assets/Globe.jpg"; // Import the image file
import indiaImage from "./assets/india.jpeg"; // Import India image
import singaporeImage from "./assets/Singapore.jpg"; // Import Singapore image
import usaImage from "./assets/USA.jpg"; // Import USA image
import { Typography } from "@mui/material";

const GlobalPresence = () => {
  return (
    <div>
      <img
        src={globalPresenceImage}
        alt="Global Presence"
        style={{
          width: "100%",
          height: "auto",

          objectFit: "cover",
        }}
      />
      <div style={{ backgroundColor: "#F5CD2A", padding: "20px" }}>
        {" "}
        {/* Background color applied */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "black", fontWeight: "bold", marginTop: "20px" }}
        >
          Our Locations
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "60px", width: "26.5%" }}>
            <img src={indiaImage} alt="India" style={{ width: "100%" }} />
            {/* <ul className='ul'  style={{ listStyleType: 'none',}}>
            <li>Radush Technologies Pvt. Ltd.</li>
            <li>Wework Prestiege Cube</li>
            <li>Survey#26, Laskar Hosur Road,</li>
            <li>Adugodi, Koramangala,</li>
            <li>Bangalore, India-560031</li>
            <li>560031.</li>
          </ul> */}
            <Typography align="left" style={{ fontSize: "19px" }}>
              Radush Technologies Pvt. Ltd. <br />
              Wework Prestiege Cube <br />
              Survey#26, Laskar Hosur Road, <br />
              Adugodi, Koramangala, <br />
              Bangalore, India-560031 <br />
              560031. <br />
            </Typography>
          </div>

          <div style={{ marginRight: "60px", width: "30%" }}>
            <img
              src={singaporeImage}
              alt="Singapore"
              style={{ width: "100%" }}
            />
            {/* <ul className='ul' style={{ listStyleType: 'none'}}>
            <li>Radush Technologies Pte Ltd.</li>
            <li>The Signature,</li>
            <li>51 Changi Business Park Central</li>
            <li>2 #04-05</li>
            <li>Singapore-486066</li>
          </ul> */}
            <Typography align="left" style={{ fontSize: "20px" }}>
              Radush Technologies Pte Ltd. <br />
              The Signature, <br />
              51 Changi Business Park Central <br />
              2 #04-05 <br />
              Singapore-486066 <br />
            </Typography>
          </div>

          <div style={{ width: "29.8%" }}>
            <img src={usaImage} alt="USA" style={{ width: "100%" }} />
            {/* <ul  style={{ listStyleType: 'none'}}>
            <li>Radush Technologies LLC</li>
            <li>3200 Living Coral Dr,</li>
            <li>Odessa,</li>
            <li>FL-33556</li>
          </ul> */}
            <Typography align="left" style={{ fontSize: "20px" }}>
              Radush Technologies LLC <br />
              3200 Living Coral Dr, <br />
              Odessa, <br />
              FL-33556 <br />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
