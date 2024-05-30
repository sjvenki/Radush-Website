import React from "react";
import banner from "../assets/banner.png";
import { ReactTyped } from "react-typed";
import web from "../assets/web.png";
import cloud from "../assets/cloud.png";
import training from "../assets/training.png";
import mobile from "../assets/mobile.png";
import product from "../assets/product.png";
import consulting from "../assets/consulting.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import complete from "../assets/complete.png";
import aegan from "../assets/aegan.jpg";
import cyfir from "../assets/cyfirma.png";
import nagios from "../assets/nagios.png";
import spl from "../assets/splunk.png";
import spr from "../assets/spr.png";
import taub from "../assets/taub.png";

import { motion } from "framer-motion";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      {/* Banner */}
      <div className="grid md:grid-cols-2 container mx-auto w-full max-w-screen-lg mt-10 px-2">
        <div className=" mt-20">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-heading text-lg mt-3"
          >
            Making Educated Youth Employable
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl my-4"
          >
            Radush is known to create the right platform for launching capable &
            Skilled people.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            Traning services{" "}
          </motion.p>

          <ReactTyped
            className="text-base text-heading mt-2"
            strings={["BY THE BEST - FOR THE BEST"]}
            typeSpeed={40}
          />
          <br />
          <a href="/About">
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="btn my-4"
            >
              Know More
            </motion.button>
          </a>
        </div>

        <div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            src={banner}
          />
        </div>
      </div>

      {/* why choose us */}

      <div className=" bg-sec text-white my-8 py-9">
        <div className="flex flex-col w-full max-w-screen-lg items-center justify-center container mx-auto">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-white text-lg mt-3"
          >
            Our Competitive Advantage
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl my-4"
          >
            Why do Clients Choose Our Services?{" "}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-base text-center"
          >
            In the ever growing workforce in the country finding the right
            skills has always been a challenge. Universities churn out large
            number of educated candidates year after year but their
            employability is always under question. Companies continue to look
            for resources who are readily deployable in projects and or Steady
            state work.We want to leverage our understanding of people and help
            value add by joining hands with our clients in the expansion &
            Transformational journey. Our earlier experiences on this model for
            a couple of North American client has given us good learnings and we
            would like to bring those learnings and best practices to fulfill
            the expectations from our new clients as we move forward in this
            journey.The train n hire model helps address this skill gap by
            bringing the Provider and the client together and provides the
            following benefit to the client
          </motion.p>
        </div>
      </div>

      {/* services */}
      <h3 className="text-3xl my-4 justify-center flex">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-4 container mx-auto  text-center space-x-3 w-full max-w-screen-lg my-10">
        <div className="shadow-lg items-center text-center">
          <div className="flex items-center justify-center w-40 h-40">
            <img src={web} />
          </div>
          <div>
            <h3 className="text-3xl my-4">Web Application</h3>
            <p>
              {" "}
              web application development crafting scalable, secure, and
              user-centric web solutions that drive business growth and
              innovation.
            </p>
          </div>
        </div>
        <div className="shadow-lg p-4 text-center">
          <div className="w-40 h-40 items-center pl-30">
            <img src={product} />
          </div>
          <div className="shadow-lgp-4  items-center text-center">
            <h3 className="text-3xl my-4">Product Engineering</h3>
            <p>
              Engineer new products & reengineer existing products as part of
              migration & transformation
            </p>
          </div>
        </div>
        <div className="shadow-lg p-4  items-center text-center">
          <div className="w-40 h-40 items-center">
            <img src={mobile} />
          </div>
          <div>
            <h3 className="text-3xl my-4">Mobile Application</h3>
            <p>
              Global provider of mobile app services, secure app code, and
              resilient back ends for iOS and Android applications.
            </p>
          </div>
        </div>
        <div className="shadow-lg p-4 items-center text-center">
          <div className="w-40 h-40 items-center">
            <img src={training} />
          </div>
          <div>
            <h3 className="text-3xl my-4">Training</h3>
            <p>
              Training people in multiple technology & Skills We also provide
              Fresher Train n Hire models.
            </p>
          </div>
        </div>
        <div className="shadow-lg p-4 text-center">
          <div className="w-40 h-40 items-center">
            <img src={cloud} />
          </div>
          <div>
            <h3 className="text-3xl my-4">Cloud</h3>
            <p>
              Provides end to end services to help you design and implement your
              Cloud Landing Zone on the Cloud of your choice.
            </p>
          </div>
        </div>
        <div className="shadow-lg p-4 items-center text-center">
          <div className="w-40 h-40 items-center">
            <img src={consulting} />
          </div>
          <div>
            <h3 className="text-3xl my-4">Consulting</h3>
            <p>
              Consult and implement DevOps, SRE, DEvSecOps and
              Observability.Consult in the Legacy IT infrastructure
              Modernization space.
            </p>
          </div>
        </div>
      </div>

      {/* achievement */}
      <div className="grid md:grid-cols-2 container mx-auto w-full  mt-10">
        <div className="flex justify-center items-center">
          <img src={complete} className="h-80 w-100 items-center mt-20" />
        </div>
        <div className=" mt-20 text-white bg-sec p-10">
          <p className=" text-lg mt-3">
            Radush makes it simple with a global managed solution
          </p>
          <p className="text-base my-4">
            For your selected IT workloads, Radush will,
            <ul>
              <li>1. Help you select and consume IT services</li>
              <li>2. Operate the services (24x7, 365)</li>
              <li>3. Optimize with cognitive</li>
              <li>4. Accelerate with automation</li>
              <li>5. Migrate workloads in/out of cloud</li>
              <li>6. Provide workload resiliency</li>
              <li>7. Transform your organization</li>
            </ul>
          </p>
        </div>
      </div>
      {/* logo slider */}
      <h3 className="text-3xl  justify-center flex m-12 mb-10">
        We Partner With
      </h3>
      <div className="container h-[90px] w-full space-x-4 mx-auto max-w-screen-lg mb-20">
        <Slider {...settings}>
          <div className="h-[90px] flex justify-center items-center">
            <img src={aegan} className="h-full" alt="Angular" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={cyfir} className="h-full" alt="React" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={nagios} className="h-full" alt="Node.js" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={spl} className="h-full" alt="MongoDB" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={spr} className="h-full" alt="SQL" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={taub} className="h-full" alt="Flutter" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
