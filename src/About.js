import React from 'react';
import { Typography, Paper,Grid,container,Card,CardActionArea,CardMedia,CardContent } from '@mui/material';
import officeImage from './assets/About-us.jpg'; // Import the image from the assets folder
import overTheYearsImage from './assets/Over the years.jpg'; // Import the image for "Over the years" section
import Ramesh1Image from './assets/Ramesh1.png';
import rameshImage from './assets/Sudha Thodur .png';
import sjImage from './assets/sj.jpeg'; 
import kalyanImage from './assets/Rangesh.png';
import mehendranathImage from './assets/Vanessa.jpeg';
import divyaImage from './assets/divya.png';
import './App.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div>
      <img src={officeImage} alt="Office" style={{ width: '100%', height: '600px', maxHeight: '90vh',objectFit:'fill' }} />
      <Paper elevation={3} className="about-section">
        <Typography variant="h5" component="h2" style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px', padding: '10px' }}>
          Overview
        </Typography>
        <div className="about-section-content">
          <Typography variant="body1" style={{ marginTop: '20px', marginLeft:'30px',fontSize:'20px' }}>
            Radush was incorporated in 2022 with a vision of providing Training and Consulting services. It has slowly evolved into a solution provider and product re-engineering organization over a period.
          </Typography>
          <Typography variant="body1" style={{ marginTop: '20px',marginLeft:'30px',fontSize:'20px' }}>
            We use cutting edge technology with highly skilled professionals, be it in custom building a new product or re-engineering an existing product or building a point solution for any industry-specific problems. The products we engineer are maintenance-free in its true sense, as we use a combination of DevOps and SRE methodologies for this.
          </Typography>
          <Typography variant="body1" style={{ marginTop: '20px',marginLeft:'30px',fontSize:'20px' }}>
            Consulting and Training has been our other lines where we provide consolidation and optimization services in the areas of tools, application, and infrastructure. We have an army of consultants with long industry experience who can quickly identify areas needing intervention and providing solutions.
          </Typography>

          {/* "Over the years" Section */}
          <Typography variant="h5" component="h2" style={{ color: 'black', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#F5CD2A', padding: '10px' }}>
            Over the years
          </Typography>
          {/* <div className="over-the-years-image-container"> */}
          <Grid container spacing={1} >
            <Grid item xs={12} sx={{ display:'flex',justifyContent:'center'}} >
            {/* <img src={overTheYearsImage} alt="Over the Years" className="over the years" /> */}
            <Card sx={{maxWidth:'800px'}}>
              <CardMedia
                 component="img"
                 height="auto"
                 image={overTheYearsImage}
                 alt="overTheYearsImage"
                 loading="lazy"/>

            </Card>
          {/* </div> */}
          </Grid>
          </Grid>
          {/* "Our Management Team" Section */}
          <Typography variant="h5" component="h2" style={{ color: 'black', fontWeight: 'bold', marginTop: '20px', padding: '10px' }}>
            Our Management Team
          </Typography>
          <Grid container spacing={2} style={{marginTop:'30px'}}>
            <Grid item md={3} xs={12}>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
              {/* <img src={Ramesh1Image} alt="Ramesh Alwan" style={{ width: '30%', height: 'auto', objectFit:'cover' }} /> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="290"
                    image={Ramesh1Image}
                    alt="ramesh"
                    loading="lazy"
                  //  sx={{objectFit:'contain'}}
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'20px'}}>
                      Ramesh Alwan
                    </Typography>
                    <Typography gutterBottom variant="body" component="div"  sx={{fontSize:'20px'}}>
                      The Founder and Managing Director
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item md={8} xs={12}>
              {/* <div style={{marginTop:'90px'}}> */}
                {/* <Typography variant="h6" style={{ marginBottom: '10px', fontWeight:'bold', color:'black' }}>Ramesh Alwan</Typography>
                <Typography variant="body1" style={{ marginBottom: '10px', fontWeight:'bold', color:'black', fontSize:'14px' }}>The Founder and Managing Director of Radush</Typography> */}
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', color: 'black',fontSize:'20px' }}></Typography>
                <ul style={{fontSize:'20px'}}>
                  <li>A visionary techno-functional operations leader renowned for his innovative business strategies and client-centric solutions that enhance margins and drive cost reductions</li>
                  <li>With a distinguished track record in transforming global operational systems profitably and efficiently, Ramesh is the technical force behind  <a href="https://qrcode4you.com/" target="_blank" rel="noopener noreferrer">
                 <b> QRCode4you.com.</b>
      </a> </li>
                  <li>His extensive expertise spans building profitable startup divisions, fostering growth business lines, executing deal transformations, and optimising operations</li>
                  <li>Observability</li>
                  <li>Ramesh is celebrated for his ability to assemble top-tier talent and cultivate high-performing cultures that consistently thrive in dynamic markets. As the founder and Managing Director of Radush Technologies Pvt. Ltd.</li>
                  <li>in India and Singapore, he continues to shape the landscape of technological innovation and operational excellence.</li>
                 
                </ul>
              {/* </div> */}
              </Grid>
            {/* </div> */}
           
          </Grid>
          <Grid container spacing={2} style={{marginTop:'30px'}}>
          <Grid item md={3} xs={12}>

            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
              {/* <img src={rameshImage} alt="Ramesh Alwan" style={{ width: '380px', height: '260px', marginRight: '20px', }} /> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={ rameshImage}
                    alt="ramesh"
                    loading="lazy"
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Sudha M Thodur
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                    Director & Chief Programs and Training officer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item md={8} xs={12}>
              {/* <div style={{marginTop: '90px'}}> */} {/* <Typography variant="h6" style={{ marginBottom: '20px', fontWeight:'bold', color:'black',marginTop:'10px' }}>Sudha M Thodur</Typography>
                <Typography variant="body1" style={{ marginBottom: '20px', fontWeight:'bold', color:'black', fontSize:'14px' }}> Director & Chief Programs and Training officer.</Typography>
                */}
                <Typography variant="body1" style={{ marginTop: '0px', fontWeight: 'bold', color: 'black',fontSize:'20px' }}>She comes with about thirty years of rich experience in the area of :</Typography>
                <ul style={{fontSize:'20px'}}>
                  <li>Program Management,</li>
                  <li>Training Management,</li>
                  <li>transition management,</li>
                  <li>Network management</li>
                  <Typography>(across various corporate bodiesLike General Electric corporation , IBM India and Kyndryl.)</Typography>
                 
                </ul>
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', color: 'black',fontSize:'20px' }}>Pioneer In </Typography>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>She started off as a Network operations manager in GE India and in a matter of five years movedOver as the Senior Project manager to manage the Service Delivery of the offshore applicationDevelopment program for GE Aircraft Engines in Bangalore.</li>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>After a brief stint of about a year she moved over to IBM India as a Service Delivery and TransitionManager and served in IBM for the next twenty years in different capacities across India, Philippines,China and Malaysia.</li>
              
              {/* </div> */}
              </Grid>
              
            
          </Grid>
          <Grid container spacing={2} style={{marginTop:'30px'}}>
          <Grid item md={3} xs={12}>
          {/* <div className="management-team-content" style={{marginTop:'120px'}}> */}
            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
              {/* <img src={sjImage} alt="Ramesh Alwan" style={{ width: '370px', height: '260px', marginRight: '20px', }} /> */}
              {/* <div style={{marginTop: '50px'}}> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={sjImage}
                    alt="sjImage"
                    loading="lazy"
                    sx={{objectFit:'fill'}}
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                     SJ Venkatesh
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                    Director & Chief Products officer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item md={8} xs={12}>
                {/* <Typography variant="h6" style={{ marginBottom: '10px', fontWeight:'bold', color:'black' }}>S J Venkatesh</Typography>
                <Typography variant="body1" style={{ marginBottom: '10px', fontWeight:'bold', color:'black', fontSize:'14px' }}> Director & Chief Products officer</Typography> */}
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', color: 'black',fontSize:'20px' }}>He comes with about thirty plus years of rich experience in the area of:</Typography>
                <ul style={{fontSize:'20px'}}>
                  <li>Product</li>
                  <li>Program Management.</li>
                  {/* <li>DevSecops Foundation</li>
                  <li>Observability</li>
                  <li>Business Relationship Management Professional</li> */}
                 
                </ul>
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', color: 'black',fontSize:'20px' }}> Pioneer In </Typography>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>He started off as a Floor engineer in BEML about thirty five years back and moved over to IT after aboutFive years with BEML. After a couple of years in a start up , he moved into IBM in 1998 and was with IBMAll the way until 2023 when he finally retired.</li>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>He started off in IBM as an Application support lead and moved on to head and manage the applicationSupport environment for the IBM Global accounts in India. After about twenty years he moved overTo the new product and innovation division in IBM and helped build and roll out new offerings andProducts in the Cloud space, In the Service Management & Integration & AI Ops and Data Analyticsspace for IBM.</li>
                
              </Grid>
              
            
         </Grid>
          <Typography variant="h5" component="h2" style={{marginTop:'80px', color: 'black', fontWeight: 'bold',  padding:'10px' }}>
          Ambassador
          </Typography>
          <Grid container spacing={2} style={{marginTop:'30px'}}>
            <Grid item md={3} xs={12}>
          {/* <div className="management-team-content" style={{marginTop:'30px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}> */}
              {/* <img src={kalyanImage} alt="Ramesh Alwan" style={{ width: '370px', height: '260px', marginRight: '20px', }} /> */}
              {/* <div style={{marginTop:'50px'}}> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={kalyanImage}
                    alt="Rangesh"
                    loading="lazy"
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                     Rangesh Nallan
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                      Consultant
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item md={8} xs={12}>
                <Typography variant="h6" style={{ marginBottom: '10px', fontWeight:'bold', color:'black' }}></Typography>
                <Typography variant="body1" style={{ marginBottom: '10px', fontWeight:'bold', color:'black', fontSize:'14px' }}> </Typography>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}> A seasoned entrepreneur and consultant from West Sussex, UK. With over three decades of expertise spanning commercial advertising, ICT, and end-users' solutions, he's the driving force behind Adventure Holdings Pte Ltd, Singapore, where he serves as Managing Director. Rangesh boasts extensive experience in marketing products across Southeast Asia, with a focus on Singapore, Malaysia, and South Korea.</li>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>In 2020, he ventured into Ghana with the establishment of M Ticket, a pioneering mobile phone service provider facilitating payments through text messages using Mobile Money & Mobile Wallet. Rangesh's adept leadership has not only propelled M Ticket's success but also led to the inception of DiGi Ticket in Nigeria, a revolutionary mobile ticketing solution  <a href="https://www.digiticket.com.ng/" target="_blank" rel="noopener noreferrer">
       <b> www.digiticket.com.ng.</b>
      </a></li>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>In 2023, Rangesh conceptualised the versatile use of QR Codes, culminating in the launch of <a href="https://qrcode4you.com/" target="_blank" rel="noopener noreferrer">
                 <b>  www.qrcode4you.com.</b>
      </a>  , a Singapore-based company. Collaborating with Radush Technologies in Bangalore and Singapore, along with Vanessa Busek in the UK, he orchestrated this innovative venture.</li>
                  <li style={{marginLeft:'20px',fontSize:'20px'}}>Rangesh is constantly pioneering groundbreaking innovations. His next endeavor is focusing on Parking & Tracking solutions utilising QR codes, targeted to the African market. His visionary approach, coupled with unwavering determination and passion for expansion, continues to redefine the landscape of technological solutions worldwide.</li>
                 
              {/* </div> */}
              
            </Grid>
            
          </Grid>
          {/* <div className="management-team-content">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={mehendranathImage} alt="Ramesh Alwan" style={{ marginTop:'60px',width: '370px', height: '410px', marginRight: '20px',marginLeft:'60px' }} />
              <div style={{marginBottom: '80px'}}>
                <Typography variant="h6" style={{  fontWeight:'bold', color:'black' }}>Vanessa Busek</Typography>
                <Typography variant="body1" style={{ marginBottom: '10px', fontWeight:'bold', color:'black', fontSize:'14px' }}>Founder and Head of operations</Typography>
                <li style={{marginLeft:'20px'}}>Vanessa is the operational backbone of QRcode4you.com , boasting a diverse background in Sales Support and Training across Europe, Africa, and the Middle East</li>
                <li style={{marginLeft:'20px'}}> With a proven track record in project management and a talent for motivating teams, her operational expertise shines through</li>
                <li style={{marginLeft:'20px'}}>Renowned for her versatile skill set and contagious enthusiasm, Vanessa advocates for a positive outlook and work/life balance including a strong commitment to making a meaningful impact.</li>
                <li style={{marginLeft:'20px'}}>In addition to her professional accomplishments, Vanessa is a fully qualified Intrinsic Biomechanics Coach, specialising in prehab, rehab, and overall functional well- being.</li>
                <li style={{marginLeft:'20px'}}>Outside of work, she finds joy in outdoor adventures, exploring nature, and playing tennis</li>
                <li style={{marginLeft:'20px'}}>Dedicated to charitable endeavors and fostering mutually beneficial relationships, QRcode4you.com perfectly reflects Vanessa's ethos of creating positive change.</li>
                
              </div>
              
            </div>
            
          </div> */}
          
        </div>
      </Paper>
    </div>
  );
};

export default About;
