// import React from 'react'

// function ErrorBudgets() {
//   return (
//     <div>ErrorBudgets</div>
//   )
// }

// export default ErrorBudgets




import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Paper, Typography, Container, Box ,Button} from '@mui/material';
import pexels from './assets/pexels-polina.jpg'; // Importing the image
import callCenterImage from './assets/call-center.png'; // Importing the image

function  ErrorBudgets() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_s21p27k', 'template_dfgpafo', form.current, {
          publicKey: 'BIOJQmRazFk9j29uJ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log("Message sent");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    
    
  return (
    <div style={{ background: 'linear-gradient(135deg, #FFFFFF 7%, #F5CD2A 100%)', minHeight: '100vh' }}>
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'left', minHeight: 'calc(100vh - 64px - 56px)', paddingTop: '20px', paddingBottom: '20px' }}>
      <Paper sx={{ padding: '20px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          <strong>UNDERSTANDING ERROR BUDGETS AND THEIR ROLE IN DEFINING SERVICE LEVEL OBJECTIVES</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
        In the world of service management, ensuring reliability and meeting customer expectations is crucial. Two important concepts that help achieve this are error budgets and Service Level Objectives (SLOs). In this blog post, we’ll explain what an error budget is, how it works, and its relationship with the calculation of SLOs, using relatable real-life examples.
        </Typography>
        <Typography variant="h5" component="h1"><strong>What is an Error Budget?</strong></Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={ pexels} alt=" pexels" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
        Imagine you’re organizing a backyard barbecue with a limited budget. You allocate a certain amount of money for food, drinks, and decorations. The allocated budget represents what you can spend without going overboard. Similarly, an error budget in software development represents the margin or allowance for errors or incidents that can occur without compromising the overall reliability of service.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Real-Life Example</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
        Let’s say you have a music streaming app, and you want to ensure uninterrupted playback for your users. You define an SLO that the app should have an uptime of 99.9% (i.e., be available 99.9% of the time). To achieve this, you calculate your error budget, which may be 0.1% of the total possible service disruptions. This means you can tolerate a limited number of errors or incidents, such as brief periods of unavailability, within a given timeframe.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>The Relationship with SLOs</strong>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={callCenterImage} alt="callCenterImage" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography sx={{fontSize:'20px'}}>In service management, SLOs define the desired performance or quality targets for a service. They are established based on factors like business requirements, user needs, and industry standards. SLOs provide a clear understanding of what should be achieved.</Typography>
       <Typography sx={{marginTop:'20px',fontSize:'20px'}}>To calculate SLOs accurately, an error budget is determined first. The error budget represents the maximum acceptable level of errors or incidents within a specific timeframe. It acts as a threshold that helps assess the reliability of a service.</Typography>
       <Typography sx={{marginTop:'20px',fontSize:'20px'}}>By setting an error budget, you establish boundaries for the number and impact of errors. It guides your efforts to prioritise resources effectively, ensuring you allocate them for continuous improvement while staying within acceptable limits. Monitoring and managing the error budget helps you maintain a high level of service reliability.</Typography>
      
      </Paper>
    </Container>
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingBottom: '20px' }}>
    <a href="/fault-tolerance"> <Button>IS FAULT TOLERANCE TESTING NECESSARY WHEN RESILIENCE IS IN PLACE?</Button> </a>
    </Container>
      {/* Form */}
      {/* <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '20px' }}>
     <form ref={form} onSubmit={sendEmail} >
     <p><b style={{fontSize:'20px'}}>Post a comment :</b></p>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input class='button' type="submit" value="Send" />
    </form>
    </Container> */}

<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '20px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Post a comment :</p>

      <a 
        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=askus@radush.io" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ fontSize: '24px', marginTop: '30px', color: 'inherit', textDecoration: 'none' }}
      >
        Email us at<b> askus@radush.io</b>
      </a>
    </Container>
    </div>
  );
}

export default  ErrorBudgets;
