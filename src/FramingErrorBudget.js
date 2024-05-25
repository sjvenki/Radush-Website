import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Paper, Typography, Container, Box, Button } from "@mui/material";
import charlesdeluvioImage from "./assets/charlesdeluvio.jpg"; // Importing the image
import alexanderImage from "./assets/alexander.jpg"; // Importing the image
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
              FRAMING ERROR BUDGET POLICIES: BALANCING RELIABILITY AND
              INNOVATION
            </strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            In the world of software development and service management,
            striking the right balance between reliability and innovation is
            crucial. One of the key tools that organizations use to manage this
            balance is an error budget. In this blog post, we'll explore how
            organizations can frame their error budget policies, leveraging
            real-life examples to illustrate the process.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={charlesdeluvioImage}
              alt="charlesdeluvioImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>1. Understanding the Purpose of an Error Budget:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Imagine you're running a restaurant that prides itself on quick
            service. You want to ensure that orders are delivered within a
            specific time frame, but you also want to allow room for
            experimentation and new menu items. Here, an error budget can help.
            It represents the acceptable margin for errors or delays in order
            delivery, giving your team the freedom to innovate while maintaining
            overall reliability.
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>2. Real-Life Example:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Consider a popular e-commerce platform that aims to provide a
            seamless shopping experience. To balance reliability and innovation,
            the organization sets an SLO that guarantees 99.9% uptime. Based on
            this, they calculate an error budget that allows for a maximum of
            0.1% of service disruptions. This provides the development team with
            a defined threshold for errors, ensuring that they can introduce new
            features and improvements while still meeting customer expectations.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={alexanderImage}
              alt="alexanderImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>Framing Error Budget Policies:</strong>
            <Typography variant="h6">
              <strong>1. Define Business Priorities:</strong>{" "}
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Organizations need to align their error budget policies with their
              overall business priorities. For example, an online banking
              platform may prioritize security and reliability, whereas a social
              media platform may prioritise continuous feature development. The
              error budget policy should reflect these priorities.
            </Typography>
            <Typography variant="h6">
              <strong>2. Establish SLOs:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Setting clear and measurable service level objectives is the
              foundation for error budget policies. SLOs define the desired
              level of performance and reliability based on user expectations,
              industry standards, and business requirements.
            </Typography>
            <Typography variant="h6">
              <strong>3. Calculate the Error Budget:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {" "}
              Once SLOs are defined, Organizations can calculate their error
              budgets. This involves determining the acceptable threshold for
              errors or incidents within a specific timeframe. Real-life data
              and historical performance metrics can inform this calculation.
            </Typography>
            <Typography variant="h6">
              <strong>4. Allocate Resources and Prioritise Efforts: </strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              With the error budget in place, Organizations can allocate
              resources and prioritise efforts effectively. Teams can focus on
              initiatives that improve reliability while utilising a portion of
              the error budget for innovation and experimentation.
            </Typography>
            <Typography variant="h6">
              <strong>5. Continuous Monitoring and Adaptation:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Organizations should regularly monitor their error budget
              utilisation and adjust their policies accordingly. If the error
              budget is consistently exceeded, it may indicate a need for
              increased focus on reliability. Conversely, if the error budget
              remains largely unutilized, it may indicate an opportunity for
              greater innovation.
            </Typography>
          </Typography>

          <Typography sx={{ fontSize: "20px" }}>
            Framing error budget policies is a strategic process that allows
            Organizations to balance reliability and innovation. By defining
            business priorities, establishing SLOs, calculating error budgets,
            and allocating resources effectively, Organizations can foster a
            culture of continuous improvement and deliver high-quality services
            that meet customer expectations.
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
        <Link to="/false-positives">
          {" "}
          <Button>
            FALSE POSITIVES VS. NO ALERTS: NAVIGATING SOFTWARE DEVELOPMENT FOR
            NEWCOMERS
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

export default SLO;
