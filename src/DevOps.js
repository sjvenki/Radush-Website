// import React from 'react'

// function DevOps() {
//   return (
//     <div>DevOps</div>
//   )
// }

// export default DevOps





import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Paper, Typography, Container, Box } from '@mui/material';
import pexelslukas5Image from './assets/pexels-lukas-5.jpg'; // Importing the image
import successImage from './assets/success.jpg'; // Importing the image

function DevOps() {

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
            e.target.reset();
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
          <strong>DEV = VELOCITY OF RELEASE, OPS = RELIABILITY AND STABILITY</strong>
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          <strong>A Balanced Approach for Effective Software Delivery</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
        In the world of software development, two essential components play distinct yet interconnected roles in ensuring efficient software delivery. Development (Dev) teams drive the velocity of release, while Operations (Ops) teams provide the stability to run and manage the systems. In this blog post, we explore how these two aspects work together harmoniously to achieve successful software delivery.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={pexelslukas5Image} alt="pexelslukas5Image" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>1. Dev: Velocity of Release  :</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}> 
        Development teams are responsible for driving the velocity of release,(Time to market)  which involves delivering software updates, features, and bug fixes promptly. Several factors contribute to maintaining a high velocity of release:
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>2. Agile Methodology  :</strong>
        </Typography>
        <Typography variant="body1" paragraph sx={{fontSize:'20px'}}>
        Adopting agile practices, such as Scrum or Kanban, facilitates iterative development, continuous feedback, and accelerated release cycles. Teams can quickly respond to changing requirements and deliver value incrementally.
        </Typography> 
        <Typography variant="h6" ><strong>3. Continuous Integration and Deployment (CI/CD) :</strong> </Typography>
          <Typography sx={{fontSize:'20px'}}>Implementing CI/CD pipelines automates the build, testing, and deployment processes. This enables frequent and reliable releases, reducing manual errors and streamlining the feedback loop.</Typography>
          <Typography variant="h6"><strong>4. Collaboration and Communication :</strong></Typography>
          <Typography sx={{fontSize:'20px'}}> Effective collaboration between Dev teams, as well as with other stakeholders, promotes efficient knowledge sharing, rapid decision-making, and seamless coordination, ensuring faster delivery.</Typography>
          <Typography variant="h6"><strong>5. Ops: Stability and Reliability:</strong></Typography>
          <Typography sx={{fontSize:'20px'}}>While Dev focuses on the velocity of release, Ops brings the wisdom of production, ensuring stable and reliable applications and systems. The Ops team’s role is vital in achieving this.</Typography>
          <Typography variant="h6"><strong>6. Infrastructure Management : </strong></Typography>
          <Typography sx={{fontSize:'20px'}}>Ops teams design, deploy, and maintain the production infrastructure necessary for hosting software applications. They optimize system performance, scalability, and availability to ensure a seamless user experience.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={successImage} alt="successImage" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Framing Error Budget Policies :-</strong>
          <Typography variant="h6" ><strong>1. Monitoring and Incident Response :</strong> </Typography>
          <Typography sx={{fontSize:'20px'}}>Ops teams implement robust monitoring systems that track application performance, detect anomalies, and trigger alerts. Swift incident response and efficient troubleshooting help minimize downtime and enhance system reliability.</Typography>
          <Typography variant="h6"><strong>2. Security and Compliance :</strong></Typography>
          <Typography sx={{fontSize:'20px'}}>Ops teams play a crucial role in maintaining system security, implementing appropriate measures such as access control, vulnerability management, and data protection. They ensure compliance with industry standards and regulations.</Typography>
          <Typography variant="h6"><strong>3. Collaboration for Success :</strong></Typography>
          <Typography sx={{fontSize:'20px'}}>While Dev and Ops have distinct responsibilities, successful software delivery requires collaboration and synergy between them. Here’s how they can collaborate effectively.</Typography>
          <Typography variant="h6"><strong>4. Shared Goals and Objectives  </strong></Typography>
          <Typography sx={{fontSize:'20px'}}>Aligning Dev and Ops teams with shared goals fosters a sense of ownership, collective responsibility, and mutual understanding, promoting collaboration and efficient delivery.</Typography>
          <Typography variant="h6"><strong>5. Cross-Functional Collaboration :</strong></Typography>
          <Typography sx={{fontSize:'20px'}}> Encouraging cross-functional collaboration and knowledge sharing between Dev and Ops teams enhances communication and problem-solving. This can be achieved through joint meetings, workshops, and embedding Ops expertise within Dev teams and vice versa.
</Typography>
<Typography variant="h6"><strong>6.Automation and Infrastructure as Code (IaC) </strong></Typography>
          <Typography sx={{fontSize:'20px'}}>Collaboration is improved through the adoption of automation and IaC principles. Automating repetitive tasks, infrastructure provisioning, and configuration management minimizes
</Typography>
        </Typography>
       
       <Typography sx={{marginTop:'30px',fontSize:'20px'}}> 

      <b > The synergy between Dev and Ops</b> is crucial for effective software delivery. While Dev focuses on the velocity of release, Ops provides the wisdom of production, ensuring stability, scalability, reliability, and security. Collaboration between these teams facilitates a seamless and efficient software delivery process, benefiting both organizations and end-users alike.
</Typography>
       
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
    </div>
  );
}

export default DevOps;
