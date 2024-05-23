import React from "react";
import {
  Typography,
  Paper,
  Grid,
  container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import officeImage from "./assets/About-us.jpg"; // Import the image from the assets folder
import overTheYearsImage from "./assets/Over the years.jpg"; // Import the image for "Over the years" section
import Ramesh1Image from "./assets/Ramesh1.png";
import rameshImage from "./assets/Sudha Thodur .png";
import sjImage from "./assets/sj1.jpeg";
import kalyanImage from "./assets/Rangesh.png";
import mehendranathImage from "./assets/Vanessa.jpeg";
import divyaImage from "./assets/divya.png";
import "./App.css"; // Import your CSS file for styling

const About = () => {
  return (
    <div>
      <img
        src={officeImage}
        alt="Office"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "70vh",
          objectFit: "cover",
        }}
      />
      <Paper elevation={3} className="about-section">
        <Typography
          variant="h5"
          component="h2"
          style={{
            color: "black",
            fontWeight: "bold",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          Overview
        </Typography>
        <div className="about-section-content">
          <Typography
            variant="body1"
            style={{ marginTop: "20px", marginLeft: "30px", fontSize: "20px" }}
          >
            Radush was incorporated in 2022 with a vision of providing training
            and consulting services. Over time, it has slowly evolved into a
            solution provider and product re-engineering organization.
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "20px", marginLeft: "30px", fontSize: "20px" }}
          >
            We use cutting-edge technology with highly skilled professionals, be
            it in custom-building a new product, re-engineering an existing
            product, or building a point solution for any industry-specific
            problems. The products we engineer are maintenance-free in their
            true sense, as we use a combination of DevOps and SRE methodologies
            for this.
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "20px", marginLeft: "30px", fontSize: "20px" }}
          >
            Consulting and training have been our other lines where we provide
            consolidation and optimization services in the areas of tools,
            applications, and infrastructure. We have an army of consultants
            with long industry experience who can quickly identify areas needing
            intervention and provide solutions.
          </Typography>

          {/* "Over the years" Section */}
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: "black",
              fontWeight: "bold",
              marginTop: "20px",
              backgroundColor: "#F5CD2A",
              padding: "10px",
            }}
          >
            Over the years
          </Typography>

          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card sx={{ maxWidth: "800px" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={overTheYearsImage}
                  alt="overTheYearsImage"
                  loading="lazy"
                />
              </Card>
              {/* </div> */}
            </Grid>
          </Grid>
          {/* "Our Management Team" Section */}
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: "black",
              fontWeight: "bold",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            Our Management Team
          </Typography>
          <Grid container spacing={2} style={{ marginTop: "30px" }}>
            <Grid item md={3} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="290"
                    image={Ramesh1Image}
                    alt="ramesh"
                    loading="lazy"
                    //  sx={{objectFit:'contain'}}
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "20px" }}
                    >
                      Ramesh Alwan
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ fontSize: "20px" }}
                    >
                      The Founder and Managing Director
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <ul>
                <li>
                  A visionary techno-functional operations leader renowned for
                  his innovative business strategies and client-centric
                  solutions that enhance margins and drive cost reductions
                </li>
                <li>
                  With a distinguished track record of transforming global
                  operational systems profitably and efficiently, Ramesh is the
                  technical force behind{" "}
                  <a
                    href="https://qrcode4you.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b> QRCode4you.com.</b>
                  </a>{" "}
                </li>
                <li>
                  His extensive expertise spans building profitable startup
                  divisions, fostering growth in business lines, executing deal
                  transformations, and optimizing operations.
                </li>
                <li>Observability</li>
                <li>
                  Ramesh is celebrated for his ability to assemble top-tier
                  talent and cultivate high-performing cultures that
                  consistently thrive in dynamic markets. As the founder and
                  managing director of Radush Technologies Pvt. Ltd.
                </li>
                <li>
                  In India and Singapore, he continues to shape the landscape of
                  technological innovation and operational excellence.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "30px" }}>
            <Grid item md={3} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={rameshImage}
                    alt="ramesh"
                    loading="lazy"
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Sudha M Thodur
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                      Director & Chief Programs and Training officer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography
                variant="body1"
                style={{
                  marginTop: "0px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                She comes with about thirty years of rich experience in the area
                of :
              </Typography>
              <ul>
                <li>Program Management,</li>
                <li>Training Management,</li>
                <li>transition management,</li>
                <li>Network management</li>
                <Typography>
                  (across various corporate bodies, like General Electric
                  Corporation, IBM India, and Kyndryl.)
                </Typography>
              </ul>
              <Typography
                variant="body1"
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                Pioneer In{" "}
              </Typography>
              <li>
                She started off as a network operations manager in GE India and,
                in a matter of five years, moved over as the senior project
                manager to manage the service delivery of the offshore
                application development program for GE Aircraft Engines in
                Bangalore.
              </li>
              <li>
                After a brief stint of about a year, she moved over to IBM India
                as a service delivery and transition manager and served at IBM
                for the next twenty years in different capacities across India,
                the Philippines, China, and Malaysia.
              </li>
              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "30px" }}>
            <Grid item md={3} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={sjImage}
                    alt="sjImage"
                    loading="lazy"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      SJ Venkatesh
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                      Director & Chief Products officer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography
                variant="body1"
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                He comes with about thirty-plus years of rich experience in the
                areas of:
              </Typography>
              <ul>
                <li>Product</li>
                <li>Program Management.</li>
              </ul>
              <Typography
                variant="body1"
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                {" "}
                Pioneer In{" "}
              </Typography>
              <li>
                He started off as a floor engineer at BEML about 35 years ago
                and moved over to IT after about five years with BEML. After a
                couple of years in a start-up,, he moved to IBM in 1998 and was
                with IBM all the way until 2023, when he finally retired.
              </li>
              <li>
                He started off at IBM as an application support lead and moved
                on to head and manage the application support environment for
                the IBM Global accounts in India. After about twenty years, he
                moved over to the new product and innovation division at IBM and
                helped build and roll out new offerings and products in the
                cloud space, in the service management, integration, AI
                operations, and data analytics space for IBM.
              </li>
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginTop: "80px",
              color: "black",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Ambassador
          </Typography>
          <Grid container spacing={2} style={{ marginTop: "30px" }}>
            <Grid item md={3} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={kalyanImage}
                    alt="Rangesh"
                    loading="lazy"
                  />
                  <CardContent style={{ background: "#CACFE0" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Rangesh Nallan
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                      Consultant
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography
                variant="h6"
                style={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "black",
                }}
              ></Typography>
              <Typography
                variant="body1"
                style={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                {" "}
              </Typography>
              <li>
                {" "}
                A seasoned entrepreneur and consultant from West Sussex, UK.
                With over three decades of expertise spanning commercial
                advertising, ICT, and end-users' solutions, he's the driving
                force behind Adventure Holdings Pte Ltd., Singapore, where he
                serves as Managing Director. Rangesh boasts extensive experience
                in marketing products across Southeast Asia, with a focus on
                Singapore, Malaysia, and South Korea.
              </li>
              <li>
                In 2020, he ventured into Ghana with the establishment of M
                Ticket, a pioneering mobile phone service provider that
                facilitates payments through text messages using Mobile Money
                and Mobile Wallet. Rangesh's adept leadership has not only
                propelled M Ticket's success but also led to the inception of
                DiGi Ticket in Nigeria, a revolutionary mobile ticketing
                solution
                <a
                  href="https://www.digiticket.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b> www.digiticket.com.ng.</b>
                </a>
              </li>
              <li>
                In 2023, Rangesh conceptualized the versatile use of QR codes,
                culminating in the launch of
                <a
                  href="https://qrcode4you.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b> www.qrcode4you.com</b>
                </a>{" "}
                , a Singapore-based company. Collaborating with Radush
                Technologies in Bangalore and Singapore, along with Vanessa
                Busek in the UK, he orchestrated this innovative venture.
              </li>
              <li>
                Rangesh is constantly pioneering groundbreaking innovations. His
                next endeavor is focusing on parking and tracking solutions
                utilizing QR codes, targeted at the African market. His
                visionary approach, coupled with his unwavering determination
                and passion for expansion, continues to redefine the landscape
                of technological solutions worldwide.
              </li>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default About;
