// import React from 'react'

// function RealWorldSimulation() {
//   return (
//     <div>RealWorldSimulation</div>
//   )
// }

// export default RealWorldSimulation

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Paper, Typography, Container, Box, Button } from "@mui/material";
import softwaretestingImage from "./assets/software-testing.jpg"; // Importing the image
import magnifyingglassImage from "./assets/magnifying-glass.png"; // Importing the image

function RealWorldSimulation() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s21p27k", "template_dfgpafo", form.current, {
        publicKey: "BIOJQmRazFk9j29uJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FFFFFF 7%, #F5CD2A 100%)",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px - 56px)",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Paper
          sx={{
            padding: "20px",
            textAlign: "left",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            <strong>THE NEED FOR REAL-WORLD SIMULATION</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            <li>
              {" "}
              Explaining why traditional testing environments may not capture
              real-world scenarios.
            </li>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            <li>
              Highlighting the importance of replicating user interactions, data
              volumes, and system load
            </li>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={softwaretestingImage}
              alt="softwaretestingImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Imagine you're buying a new car. Before you make your purchase, you
            want to be sure that the car functions properly and meets your
            needs. To ensure its reliability, the car manufacturer performs
            various tests in a controlled environment, like a test track or
            laboratory.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Similarly, in the world of technology, when developers create
            software or applications, they need to test them to ensure they work
            correctly before releasing them to the public. Traditionally, this
            testing happens in a separate, controlled environment known as a
            testing or staging environment. However, there's another method
            called “testing in production.”
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Testing in production means conducting tests on software or
            applications while they are running in the actual live environment
            where real users access and use them. It's like testing a car by
            driving it on real roads with real traffic conditions.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            The purpose of testing in production is to observe how the software
            performs in the real world, with real users and various scenarios.
            It helps identify issues that might not have been discovered during
            pre-release testing. By testing in the live environment, developers
            can gather valuable insights and real user feedback to improve the
            software's performance, reliability, and user experience.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Testing in production is typically done cautiously to minimize any
            potential negative impact on users. Developers often use techniques
            like feature flags or canary releases. These techniques allow them
            to test new features or updates with a small group of users or in a
            controlled manner, gradually rolling them out to a larger audience
            as they gain confidence in the software's stability.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Overall, testing in production is a way to ensure that software
            works well in the real world, considering the complexities and
            nuances of the live environment. It helps developers identify and
            fix issues, improve performance, and deliver a better experience to
            end users.
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            <strong>
              Testing in Production: Enhancing Software Quality for New
              Technology Enthusiasts
            </strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={magnifyingglassImage}
              alt="magnifyingglassImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{ marginTop: "30px", fontSize: "20px" }}
          >
            In the world of software development, testing in production is a
            unique approach that involves evaluating software applications while
            they are running in their live environment. In this blog post, we
            will explore what testing in production is and why it is valuable,
            particularly for readers who are new to technology.
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            <strong>Understanding Testing in Production </strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Testing in production refers to the practice of testing software
            applications in an actual live environment where they will be used
            by real users. Unlike traditional testing methods conducted in
            controlled environments, testing in production provides a more
            accurate representation of real-world scenarios, user interactions,
            and system behavior.
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            <strong>Why Include Testing in Production? </strong>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>1. Realistic Evaluation:</strong>
            <Typography sx={{ fontSize: "20px" }}>
              Testing in production allows developers to assess software
              performance in real-world conditions, including various user
              interactions, data volumes, and system load. This approach
              provides insights into how the software behaves in its intended
              environment, helping to identify and address issues that may only
              surface during live usage.
            </Typography>
            <Typography variant="h5">
              <strong>2. Enhanced User Experience: </strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              By testing in production, developers gain valuable insights into
              how real users interact with the software. This feedback helps
              identify usability issues, performance bottlenecks, and other
              concerns that impact the overall user experience. By addressing
              these issues proactively, software developers can create more
              user-friendly and reliable applications.
            </Typography>
            <Typography variant="h5">
              <strong>3. Faster Issue Identification and Resolution:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Testing in production enables faster feedback loops, as real-time
              data and user feedback provide immediate insights. This allows
              developers to identify and resolve issues more rapidly, leading to
              faster software improvements and quicker response times.
            </Typography>
            <Typography variant="h5">
              <strong>4. Continuous Improvement: </strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Testing in production aligns with the concept of continuous
              improvement. By gathering insights from real-world usage,
              developers can continuously enhance the software based on actual
              user behavior and requirements. This iterative process leads to a
              more refined and reliable product over time.
            </Typography>
            <Typography variant="h5">
              <strong>5. Continuous Monitoring and Adaptation:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Organizations should regularly monitor their error budget
              utilization and adjust their policies accordingly. If the error
              budget is consistently exceeded, it may indicate a need for
              increased focus on reliability. Conversely, if the error budget
              remains largely unutilized, it may indicate an opportunity for
              greater innovation.
            </Typography>
          </Typography>

          <Typography variant="h5" sx={{ marginTop: "20px" }}>
            <strong>Testing in production:</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Is a valuable approach that provides a realistic evaluation of
            software performance and enhances the user experience. By testing
            applications in the live environment, developers can identify and
            resolve issues more efficiently, leading to continuous improvement
            and the delivery of high-quality software products.
          </Typography>
        </Paper>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingBottom: "20px",
        }}
      >
        <Link to="/dev-ops">
          {" "}
          <Button>
            DEV = VELOCITY OF RELEASE, OPS = RELIABILITY AND STABILITY
          </Button>{" "}
        </Link>
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

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: "20px",
        }}
      >
        <p
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Post a comment :
        </p>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=askus@radush.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "24px",
            marginTop: "30px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Email us at<b> askus@radush.io</b>
        </a>
      </Container>
    </div>
  );
}

export default RealWorldSimulation;
