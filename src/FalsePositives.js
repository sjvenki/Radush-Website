// import React from 'react'

// function FalsePositives() {
//   return (
//     <div>FalsePositives</div>
//   )
// }

// export default FalsePositives

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Paper, Typography, Container, Box, Button } from "@mui/material";
import teamworkImage from "./assets/team-work.png"; // Importing the image
import planImage from "./assets/plan.jpg"; // Importing the image
import { Link } from "react-router-dom";
function FalsePositives() {
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
            <strong>
              FALSE POSITIVES VS. NO ALERTS: NAVIGATING SOFTWARE DEVELOPMENT FOR
              NEWCOMERS
            </strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            In the realm of software development, the presence of false
            positives—alerts indicating potential issues that turn out to be
            incorrect—can be a double-edged sword. In this blog post, we will
            explore the question of whether false positives are better than
            having no alerts at all, particularly for readers who are new to the
            software development space.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={teamworkImage}
              alt="teamworkImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>1. Understanding False Positives:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            False-positives occur when testing or analysis tools mistakenly flag
            an alert for an issue that does not actually exist. While false
            positives can be frustrating, they serve an important purpose by
            bringing attention to potential risks, vulnerabilities, or code
            quality concerns that require further investigation.
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>2. The Importance of Alerts:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Having alerts, even if they occasionally result in false positives,
            is crucial for maintaining software security and reliability. Alerts
            act as a safety net, helping to identify potential problems that
            might otherwise go unnoticed. They prompt developers to investigate
            and validate the presence or absence of actual issues, thereby
            mitigating risks and preventing potential vulnerabilities.
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>3.Balancing Act:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Striking a balance between false positives and no alerts is key.
            While false positives provide an opportunity for proactive detection
            and continuous improvement, an excessive number of false alerts can
            lead to alert fatigue and hinder the effectiveness of testing
            efforts. Therefore, it is important to refine testing processes,
            fine-tune tool configurations, and address false positives to
            optimize alert accuracy.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={planImage}
              alt="planImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>Considerations for Newcomers:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            For newcomers in the software development space, understanding the
            role of false positives is vital. While false positives can
            introduce complexity and require additional effort, they contribute
            to a more thorough analysis of software and help maintain code
            quality. It is important to approach false positives with a balance
            of scepticism and attentiveness, considering the potential risks
            they indicate while remaining mindful of the possibility of
            inaccuracies.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            While false positives can be a source of frustration, they serve an
            important purpose in software development. They help identify
            potential issues, mitigate risks, and foster continuous improvement.
            By managing false positives effectively, developers can strike a
            balance between alert accuracy and minimizing necessary disruptions,
            ensuring reliable and secure software.
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
        <Link to="/breaking-down-silos">
          {" "}
          <Button>
            BREAKING DOWN SILOS: DEVOPS, COLLABORATION, SRE PRACTICES, AND
            SHARED OWNERSHIPS
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

export default FalsePositives;
