// import React from 'react'

// function CanaryReleases() {
//   return (
//     <div>CanaryReleases</div>
//   )
// }

// export default CanaryReleases




import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Paper, Typography, Container, Box } from '@mui/material';
import teamImage from './assets/team.jpg'; // Importing the image
import digitizationImage from './assets/digitization.jpg'; // Importing the image
import CloudImage from './assets/cloud-computing.png';

function CanaryReleases() {

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
          <strong>INTRODUCTION TO CANARY RELEASES,CANARY CHANGES AND CANARY DEVELOPMENTS</strong>
        </Typography>
        <Typography variant='h6' sx={{marginTop:'20px'}}><strong>Canary releases and canary changes are:</strong></Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        terms used in software development to describe a deployment strategy that involves gradually rolling out updates or changes to a small subset of users or systems before making them available to everyone. Here’s an explanation in non-technical terms
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>Imagine you have a new version of a software application or a change to an existing feature that you want to release to your users. Instead of releasing it to all users at once, you start by introducing it to a small group of users or a limited part of the system. This small group or a subset of users is like a canary bird in a coal mine that acts as an early warning system. If any issues or problems arise, they serve as indicators, just like the canary would indicate the presence of harmful gases in the mine.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={teamImage } alt="teamImage " style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Canary releases are :</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        a way to minimize the potential impact of bugs, errors, or other issues that may arise when deploying changes to a larger user base. By initially releasing the changes to a small group, you can closely monitor their experience and gather feedback to ensure that everything works smoothly. If any problems occur, they can be identified and resolved before rolling out the changes to a wider audience.
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        This approach allows developers to test the changes in a real-world environment with a representative subset of users. It provides an opportunity to assess the performance, functionality, and user experience of the new version or feature before making it available to everyone. It’s like taking a cautious step forward, making sure the path is clear before proceeding.
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}> 
        Once the canary release is deemed successful and any necessary adjustments or fixes are made, the changes can be gradually rolled out to more users or systems. This gradual deployment helps ensure a smoother transition and reduces the risk of widespread issues impacting a large user base.
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        In summary, canary releases and canary changes involve deploying software updates or changes to a small group of users or systems initially, monitoring their experience, and making adjustments before wider distribution. This cautious approach helps identify and resolve issues early, ensuring a more reliable and successful release for all users.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={digitizationImage} alt="digitizationImage" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Canary development :</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        Also known as canary deployments or canary testing, is an extension of the canary release concept in software development. While canary releases focus on gradually rolling out changes to a subset of users or systems, canary development goes a step further by incorporating testing and validation into the deployment process
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Here’s some insight into canary development:</strong>
        </Typography>
        <Typography variant="body1" paragraph  sx={{fontSize:'20px'}}>
        Canary development involves introducing changes or new features to a small group of users or systems for testing purposes before deploying them to a wider audience. It aims to validate the changes in a production-like environment, collect feedback, and assess their impact on the system.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>The process typically involves the following steps :-</strong>
          <Typography variant="h6" ><strong>1. Identifying the Canary Group:</strong> </Typography>
          <Typography  sx={{fontSize:'20px'}}>Developers select a subset of users or systems that represent a small portion of the overall user base or infrastructure. These users or systems serve as the “canary group.”</Typography>
          <Typography variant="h6"><strong>2. Deploying Changes:</strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>The changes, such as new features or code updates, are deployed to the canary group while keeping the rest of the system unchanged.</Typography>
          <Typography variant="h6"><strong>3. Monitoring and Feedback:</strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>The canary group’s experience is closely monitored, collecting metrics, logs, and user feedback. This helps identify any issues, performance problems, or negative user experiences caused by the changes.</Typography>
          <Typography variant="h6"><strong>4. Analysis and Iteration: </strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>The collected data is analyzed to assess the impact of the changes. If any issues or concerns arise, developers can make adjustments, bug fixes, or optimizations before proceeding with a wider deployment.</Typography>
          <Typography variant="h6"><strong>5. Gradual Rollout:</strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>After successful validation with the canary group, the changes can be gradually rolled out to additional users or systems, ensuring a smoother transition.
</Typography>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={CloudImage} alt="CloudImage" style={{ Width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: '20px' }}>
          <strong>Canary development offers several benefits, including:-</strong>
          <Typography variant="h6" ><strong>1. Early Issue Detection:</strong> </Typography>
          <Typography  sx={{fontSize:'20px'}}>By testing changes in a real-world environment, developers can uncover potential issues, bugs, or performance bottlenecks early in the process. This allows them to address problems promptly before a wider release.</Typography>
          <Typography variant="h6"><strong>2. Reduced Risk :</strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>Canary development helps mitigate risks associated with introducing significant changes. It provides an opportunity to validate the changes and ensure they meet quality standards before impacting a larger user base or critical systems.</Typography>
          <Typography variant="h6"><strong>3. User Feedback :</strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>Gathering feedback from the canary group allows developers to gain valuable insights into the user experience, usability, and functionality of the changes. This feedback can guide further improvements and refinements.</Typography>
          <Typography variant="h6"><strong>4. Confidence in Deployments: </strong></Typography>
          <Typography  sx={{fontSize:'20px'}}>Canary development instills confidence in the deployment process by gradually introducing changes and validating them. It helps establish a reliable and controlled release pipeline.</Typography>
         
          <Typography sx={{marginTop:'20px',fontSize:'20px'}}>While canary development is not as commonly discussed as canary releases, it is an emerging practice gaining traction in the software development community. It aligns with the principles of continuous delivery and allows for more robust and validated deployments.
          <Typography sx={{marginTop:'20px',fontSize:'20px'}}>However, it’s worth noting that canary development may require additional planning, infrastructure, and monitoring capabilities to ensure successful execution. Teams adopting canary development need to establish proper testing procedures, data collection mechanisms, and feedback channels to make the most of this approach.</Typography>
          <Typography sx={{marginTop:'20px',fontSize:'20px'}}>Overall, canary development expands on the concept of canary releases, incorporating testing and validation to reduce risks and improve the quality of software deployments. It is an evolving practice that empowers developers to make more informed decisions and deliver reliable software to end-users.</Typography>
</Typography>
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

export default CanaryReleases;
