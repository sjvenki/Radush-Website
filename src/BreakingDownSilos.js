// import React from 'react'

// function BreakingDownSilos() {
//   return (
//     <div>BreakingDownSilos</div>
//   )
// }

// export default BreakingDownSilos

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Paper, Typography, Container, Box, Button } from "@mui/material";
import teamImage from "./assets/team.jpg"; // Importing the image
import pexelsjonassvidrasImage from "./assets/pexels-jonas-svidras.jpg"; // Importing the image
import pexelsnemuelseretiImage from "./assets/pexels-nemuel-sereti.jpg";

function CanaryReleases() {
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
              BREAKING DOWN SILOS: DEVOPS, COLLABORATION, SRE PRACTICES, AND
              SHARED OWNERSHIPS
            </strong>
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            <strong>Canary releases and canary changes are:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            In the world of software development and IT operations, the
            traditional siloed approach often hinders efficiency, productivity,
            and collaboration. However, with the emergence of DevOps and Site
            Reliability Engineering (SRE) practices, organizations are embracing
            a new way of working that breaks down these barriers. In this blog
            post, we will explore how DevOps, collaboration, SRE practices, and
            shared ownership contribute to more effective and streamlined
            software delivery processes.
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>1.DevOps: Bridging the Gap:-</strong>
            <Typography sx={{ fontSize: "20px" }}>
              DevOps is a cultural and organizational shift that emphasizes
              collaboration, communication, and integration between development
              (Dev) and operations (Ops) teams. Here's how DevOps breaks down
              silos and fosters collaboration.
            </Typography>
            <Typography variant="h6">
              <strong>A. Cross-Functional Teams:</strong>{" "}
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              DevOps encourages the formation of cross-functional teams that
              include developers, operations personnel, quality assurance
              engineers, and other stakeholders. By working together, team
              members gain a holistic view of the software development lifecycle
              and can collectively address challenges and identify improvements.
            </Typography>
            <Typography variant="h6">
              <strong>B. Continuous Integration and Deployment:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              DevOps promotes the use of continuous integration (CI) and
              continuous deployment (CD) practices. These practices automate the
              build, test, and deployment processes, reducing manual errors,
              shortening feedback loops, and enabling teams to release software
              more frequently and reliably..
            </Typography>
            <Typography variant="h6">
              <strong>C. Shared Goals and Responsibility:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              DevOps aligns the goals of the Dev and Ops teams towards common
              objectives, emphasizing shared responsibility for the success of
              the software. This shared ownership fosters collaboration, reduces
              blame, and promotes a collective mindset where everyone works
              together to achieve common outcomes.
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={pexelsjonassvidrasImage}
              alt="pexelsjonassvidrasImage "
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>2. Collaboration: Breaking Barriers:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Collaboration is a cornerstone of successful software delivery. It
            involves open communication, knowledge sharing, and joint
            problem-solving. Here are some key aspects of collaboration in the
            context of breaking down silos:
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>1. Communication and Transparency:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "20px" }}>
            Effective collaboration requires open and transparent communication
            channels between teams and individuals. Regular meetings, stand-ups,
            and documentation help ensure that everyone is aware of project
            updates, challenges, and progress.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={pexelsnemuelseretiImage}
              alt="pexelsnemuelseretiImage"
              style={{ Width: "100%", height: "auto" }}
            />
          </Box>

          <Typography variant="h6">
            <strong>2. Breaking Down Hierarchies:</strong>{" "}
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Collaboration thrives in an environment where hierarchies are
            minimized and individuals feel empowered to contribute and share
            their ideas. This encourages innovation, diversity of thought, and a
            sense of ownership among team members.
          </Typography>
          <Typography variant="h6">
            <strong>3. Shared Tools and Processes:</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Collaborative environments benefit from shared tools and processes
            that facilitate cooperation. This may include using project
            management platforms, version control systems, and collaboration
            tools like chat platforms or project wikis to enable real-time
            collaboration and documentation.
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>3. SRE Practices: Reliability and Collaboration:</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            {" "}
            Site Reliability Engineering (SRE) practices provide a framework for
            achieving reliable and scalable systems. SRE emphasizes
            collaboration, automation, and measurement. Here's how SRE practices
            contribute to breaking down silos:
          </Typography>
          <Typography variant="h6">
            <strong>1. Error Budgets:</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            SRE introduces the concept of error budgets, which define the
            acceptable level of service disruptions within a given timeframe.
            This encourages collaboration between Dev and Ops teams to find a
            balance between releasing new features and maintaining system
            reliability.
          </Typography>
          <Typography variant="h6">
            <strong>2. Automation and Infrastructure as Code (IaC): </strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            SRE promotes automation to reduce manual labor and improve system
            reliability. Collaboratively designing and implementing
            Infrastructure as Code (IaC) enables teams to manage and scale
            infrastructure efficiently, fostering collaboration and knowledge
            sharing.
          </Typography>
          <Typography variant="h6">
            <strong>3. Post-Incident Analysis and Learning:</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            SRE emphasizes blameless post-incident analysis to understand system
            failures and learn from them. Collaboration between the Dev and Ops
            teams during these analyses promotes knowledge sharing, identifies
            improvement opportunities, and strengthens the system's overall
            resilience.
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ marginTop: "20px" }}
          >
            <strong>4. Shared Ownership: Empowering Teams:</strong>
            <Typography sx={{ fontSize: "20px" }}>
              Shared ownership is a fundamental aspect of breaking down silos
              and fostering collaboration. It involves cultivating a sense of
              accountability and responsibility across all teams involved in
              software delivery. Here's how shared ownership contributes to a
              collaborative environment:
            </Typography>
            <Typography variant="h6">
              <strong>1. Cross-Pollination of Skills:</strong>{" "}
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Shared ownership encourages team members to develop a diverse set
              of skills and knowledge beyond their primary roles. This enables
              them to better understand and support other team members,
              facilitating collaboration and smoother handovers.
            </Typography>
            <Typography variant="h6">
              <strong>2. Continuous Learning and Improvement:</strong>
            </Typography>
            <Typography v>
              Shared ownership promotes a culture of continuous learning and
              improvement. Teams take collective responsibility for identifying
              bottlenecks, sharing best practices, and implementing process
              enhancements to enhance efficiency and quality.
            </Typography>
            <Typography variant="h6">
              <strong>3.Empowered Decision-Making:</strong>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {" "}
              Shared ownership empowers team members to make informed decisions,
              collaborate on problem-solving, and take ownership of the
              outcomes. This reduces bureaucracy, fosters innovation, and
              accelerates decision-making processes.
            </Typography>

            <Typography sx={{ marginTop: "20px", fontSize: "20px" }}>
              Breaking down silos and fostering collaboration is essential for
              efficient and streamlined software delivery. DevOps,
              collaboration, SRE practices, and shared ownership all contribute
              to creating a collaborative culture where teams work together
              towards shared goals, leverage each other's expertise, and
              continuously improve their processes. By embracing these
              principles and practices, organizations can achieve higher
              productivity, faster time-to-market, and improved customer
              satisfaction.
            </Typography>
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
        <a href="/real-world-simulation">
          {" "}
          <Button>THE NEED FOR REAL-WORLD SIMULATION</Button>{" "}
        </a>
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

export default CanaryReleases;
