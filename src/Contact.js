import React from 'react';
import phonecallImage from './assets/Contact.jpg';
import { Typography } from '@mui/material';
const Contact = () => {
  return (
    <div style={{backgroundColor:'#f0f0f0',}}>
     
      <img src={phonecallImage} alt="phonecallImage" style={{ width: '100%', height: 'auto', objectFit:'cover' }} />
      <Typography variant='h6'><strong>We’d love to hear from you.</strong> </Typography>
      <Typography variant='h6'><strong>Drop us an email at</strong></Typography>
     <a  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=askus@radush.io" 
        target="_blank" 
        rel="noopener noreferrer" > <Typography variant='h6'><strong>askus@radush.io</strong></Typography></a>
      <div>
        <Typography variant='h6' sx={{marginTop:'20px'}}><strong>Our Locations</strong></Typography>
      <Typography variant='h6'><strong>India :- +91 6366094725
</strong> </Typography>
      <Typography variant='h6'><strong>Singapore :- +65 80623768
</strong></Typography>
      <Typography variant='h6'><strong>USA :- +1 857 444 4845</strong></Typography>
      </div>
     
    </div>
  );
};

export default Contact;
