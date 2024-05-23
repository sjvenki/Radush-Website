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
import Ramesh1Image from "./assets/QR CODE4YOU.jpeg";
import OurProduct from "./assets/Quality-Products.jpeg";
function Products() {
  return (
    <div>
      {/* <img src={ OurProduct} alt=" OurProduct" style={{ width: '100%', height: '600px', maxHeight: '90vh',objectFit:'fill' }} /> */}
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "1px",
          backgroundColor: "#F5CD2A",
          padding: "20px",
        }}
      >
        <Grid item md={3} xs={12}>
          {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
          {/* <img src={Ramesh1Image} alt="Ramesh Alwan" style={{ width: '30%', height: 'auto', objectFit:'cover' }} /> */}
          <a
            href="https://qrcode4you.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
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
                    sx={{ fontSize: "20px", textAlign: "center" }}
                  >
                    <b>QRcode4you.com</b>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body"
                    component="div"
                    sx={{ fontSize: "20px", marginLeft: "60px" }}
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </Grid>
        <Grid item md={8} xs={12}>
          {/* <div style={{marginTop:'90px'}}> */}
          <Typography
            variant="h6"
            style={{ marginBottom: "20px", color: "black", fontSize: "30px" }}
          >
            <strong>Who We Are</strong>
          </Typography>
          <ul style={{ fontSize: "20px" }}>
            <li>
              We are pioneers in the QR code revolution,dedicated to creating
              products that harness the capabilities of QR codes to benefit
              businesses, organizations, and individuals, making the world a
              more connected, safe, and efficient place.
            </li>
          </ul>
          <Typography
            variant="h6"
            style={{ marginBottom: "20px", color: "black", fontSize: "30px" }}
          >
            <strong>Our Mission</strong>
          </Typography>
          <ul style={{ fontSize: "20px" }}>
            <li>
              <a
                href="https://qrcode4you.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                At <b> QRcode4you.com </b>
              </a>{" "}
              , we are passionate about the untapped potential of QR codes and
              their power to revolutionise the way we connect, communicate, and
              engage with the world.
            </li>
          </ul>
          {/* </div> */}
        </Grid>
        {/* </div> */}
      </Grid>
    </div>
  );
}

export default Products;
