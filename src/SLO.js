// import React from 'react'

// function SLO() {
//   return (
//     <div>SLO</div>
//   )
// }

// export default SLO




import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Paper, Typography, Container, Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import onlineShoppingImage from './assets/online-shopping.png'; // Importing the image
import callCenterImage from './assets/call-center.png'; // Importing the image

function SLO() {

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
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px - 56px)', paddingTop: '20px', paddingBottom: '20px' }}>
      <Paper sx={{ padding: '20px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          <strong>UNDERSTANDING SLO, SLA, AND SLI: KEY CONCEPTS FOR SERVICE LEVEL MANAGEMENT</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
          In the world of service management, it’s essential to set clear expectations and ensure the quality of services provided. Three important concepts that help in achieving this are Service Level Objective (SLO), Service Level Agreement (SLA), and Service Level Indicator (SLI). While these terms may sound technical, let’s break them down and understand the differences between each.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={onlineShoppingImage} alt="Online Shopping" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>1. Service Level Objective (SLO):</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
          At its core, an SLO is a target or goal set by a service provider to define the desired performance or quality level for their service. It serves as a benchmark that outlines what the service provider aims to achieve. SLOs are usually defined using specific metrics such as response time, availability, or error rate. For example, an SLO for an e-commerce website could be to maintain an average response time of under 1 second. SLOs ensure that the service provider is committed to meeting certain standards to deliver a satisfactory experience to customers.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>2. Service Level Agreement (SLA):</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
          An SLA is a formal agreement or contract between a service provider and its customers. It establishes the terms, conditions, and expectations regarding the level of service that will be provided. SLAs go beyond the SLOs and provide a comprehensive outline of the services offered, performance metrics, support hours, response times, and any associated penalties for not meeting the agreed-upon service levels. SLAs are crucial for both parties as they establish a mutual understanding of what can be expected from the service provider and ensure transparency and accountability in service delivery.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>3.Service Level Indicator (SLI):</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        SLIs are the metrics or measurements used to assess the performance or quality of a service. These indicators are quantitative values that represent specific aspects of the service. SLIs serve as the basis for evaluating whether the SLOs are being met. For example, an SLI for a customer support service could be the average response time to customer inquiries. SLIs provide real-time insights into the service’s health and enable data-driven decision-making to improve service quality. By continuously monitoring SLIs, service providers can identify areas of improvement and make informed adjustments to meet the desired service levels.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={callCenterImage} alt="callCenterImage" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography  sx={{fontSize:'20px'}}>In summary, <b>SLO, SLA, and SLI </b>are fundamental concepts in service level management. While SLOs define the desired performance targets, SLAs formalise the agreement between the service provider and customers, and SLIs are the metrics used to measure the actual performance against the defined objectives. Understanding these distinctions is crucial for effective service management, as they ensure that service providers deliver consistent and reliable services, meeting customer expectations.</Typography>

        
      </Paper>
    </Container>

     {/* Form */}
     <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '20px' }}>
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
    </Container>
     {/* <>
        <form ref={form} onSubmit={sendEmail} >
        <p><b style={{fontSize:'20px'}}>Post a comment :</b></p>
      <Typography>Name</Typography>
      <TextField type="text" name="user_name" />
      <Typography>Email</Typography>
      <TextField type="email" name="user_email" />
      <Typography>Message</Typography>
      <TextField name="message" />
      <Button  type="submit"  >Send</Button>
    </form></> */}
    
    </div>
  );
}

export default SLO;
