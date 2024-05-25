import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import image1 from "./assets/Understanding SLO,SLA & SLI.png";
import image2 from "./assets/Understanding Error Budgets.jpg";
import image3 from "./assets/Fault Tolerance testing.jpg";
import image4 from "./assets/Canary Releases and developments.png";
import image5 from "./assets/Farming Error Budget Policies.jpg";
import image6 from "./assets/False Positives vs No Alerts.jpg";
import image7 from "./assets/Breaking Down Silos.jpg";
import image8 from "./assets/The Need For Real World.png";
import image9 from "./assets/DevOps Stability.jpg";
import serviceImage from "./assets/serviceImage.jpg"; // Import your image file
import "./App.css"; // Import your CSS file for styling

const ContentCorner = () => {
  const navigate = useNavigate();
  return (
    // <div
    //   className="service-background"
    //   style={{ backgroundColor: "white", padding: "5%" }}
    // >
    <div className="Content-background">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/slo">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image1}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Understanding SLO,SLA & SLI: Key Concepts for Service Level
                    Management
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/error-budgets">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image2}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Understanding Error Budgets and Their Role in Defining
                    Service Level Objectives
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/fault-tolerance">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image3}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Is Fault Tolerance Testing Necessary When Resilience is in
                    Place
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/canary-releases">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image4}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Introduction to canary releases and developments
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/framing-error-budgets">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image5}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Framing Error Budget Policies: Balancing Reliability and
                    Innovation
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/false-positives">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image6}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    False Positives vs No Alerts: Navigating Software
                    Development For Newcomers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/breaking-down-silos">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image7}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Breaking Down Silos: Devops,Collaboration,SRE Practices,and
                    Shared Ownership
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/real-world-simulation">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image8}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    The Need for Real-World Simulation
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="service-item-container">
          <Card sx={{ maxWidth: "80%" }}>
            <Link to="/dev-ops">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={image9}
                  alt="ramesh"
                  loading="lazy"
                />
                <CardContent>
                  <Typography level="body-sm">
                    {" "}
                    Dev = Velocity of Release,OPS = Reliability and satability
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
    // </div>
  );
};

export default ContentCorner;
