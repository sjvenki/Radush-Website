// import React from 'react'

// function FaultTolerance() {
//   return (
//     <div>FaultTolerance</div>
//   )
// }

// export default FaultTolerance

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Paper, Typography, Container, Box, Button } from "@mui/material";
import alexImage from "./assets/alex-shute.jpg"; // Importing the image
import callCenterImage from "./assets/roberto-cortese.jpg"; // Importing the image
import { Link } from "react-router-dom";
function SLO() {
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
    <>
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
              <strong>
                IS FAULT TOLERANCE TESTING NECESSARY WHEN RESILIENCE IS IN
                PLACE?
              </strong>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
              In the world of software development, ensuring system reliability
              is paramount. Two important concepts, fault tolerance, and
              resilience, play a key role in achieving this goal. While
              resilience measures are designed to handle failures and promote
              system recovery, the question arises: Is fault tolerance testing
              still necessary when resilience is already in place? Let's explore
              this topic and gain insights into the importance of fault
              tolerance testing even in resilient systems.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src={alexImage}
                alt="alexImage"
                style={{ Width: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>Understanding Resilience and Fault Tolerance</strong>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
              Resilience refers to a system's ability to adapt and recover from
              failures, ensuring uninterrupted functionality. It encompasses
              strategies like error recovery mechanisms, redundancy, and
              graceful degradation. On the other hand, fault tolerance focuses
              on designing systems that can withstand failures without
              compromising overall functionality. While resilience measures
              provide a safety net for coping with failures, fault tolerance
              testing takes a proactive approach to identify vulnerabilities and
              validate the system's ability to handle a wide range of failure
              scenarios.
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>The Need for Fault Tolerance Testing </strong>
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>1. Uncovering Vulnerabilities:</strong>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
              Resilience measures may not account for all possible failure
              scenarios. Fault tolerance testing allows us to intentionally
              introduce failures, stress conditions, or extreme events to
              identify vulnerabilities and areas that require improvement. For
              example, a resilient system may have mechanisms for error
              recovery, but fault tolerance testing may reveal specific failure
              scenarios where those mechanisms fall short.
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>2. Comprehensive Coverage:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Fault tolerance testing goes beyond basic resilience measures. It
              tests redundancy mechanisms, failover processes, error handling,
              and recovery procedures. By simulating different failure
              scenarios, organizations can ensure that their systems remain
              operational and perform as expected under a wide range of fault
              conditions.
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>3. Confidence in Extreme Situations:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Fault tolerance testing provides confidence in extreme or
              unforeseen situations where resilience measures alone might not be
              sufficient. For instance, a system with resilient features may
              handle typical failures gracefully, but it's important to verify
              its behavior in extreme failure scenarios, such as catastrophic
              hardware failures or network outages.
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong>4. Compliance and Risk Mitigation:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              In some industries or regulatory environments, fault tolerance
              testing may be required to meet compliance standards. By
              conducting thorough testing, organizations can demonstrate that
              their systems meet reliability and availability criteria.
              Additionally, fault tolerance testing helps mitigate risks
              associated with failures, data loss, or service disruptions.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src={callCenterImage}
                alt="callCenterImage"
                style={{ Width: "100%", height: "500px" }}
              />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ marginTop: "20px" }}
            >
              <strong> Real-Life Examples:</strong>
            </Typography>
            <Typography sx={{ marginTop: "20px", fontSize: "20px" }}>
              Consider an e-commerce platform that implements resilience
              measures to handle sudden spikes in traffic. While the system may
              scale dynamically and handle the increased load, fault tolerance
              testing would reveal any potential failures, such as payment
              processing issues, inventory management discrepancies, or order
              fulfilment bottlenecks.
            </Typography>
            <Typography sx={{ marginTop: "20px", fontSize: "20px" }}>
              Similarly, in the healthcare sector, a resilient electronic health
              records system may recover from most errors, but fault tolerance
              testing would help identify critical failures, such as data
              corruption, system crashes during critical operations, or security
              vulnerabilities.
            </Typography>
            <Typography sx={{ marginTop: "20px", fontSize: "20px" }}>
              While resilience measures play a crucial role in system stability,
              fault tolerance testing remains essential for identifying
              vulnerabilities, ensuring comprehensive coverage, building
              confidence in extreme situations, meeting compliance requirements,
              and mitigating risks. By combining both resilience and fault
              tolerance approaches, organisations can create robust and reliable
              systems that can withstand failures and deliver uninterrupted
              services to users.
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
          <Link to="/canary-releases">
            {" "}
            <Button>
              INTRODUCTION TO CANARY RELEASES,CANARY CHANGES AND CANARY
              DEVELOPMENT
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
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
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
    </>
  );
}

export default SLO;
