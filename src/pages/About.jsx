import React from "react";
import ramesh from "../assets/ramesh.png";
import sudha from "../assets/sudha.png";
import { Years } from "../components/Year";
import sj from "../assets/sj.jpeg";
import rakesh from "../assets/rakesh.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col items-center text-center my-12">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-heading text-lg"
        >
          Overview
        </motion.p>
        <motion.h3
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" text-4xl p-4"
        >
          Our Organization
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-5xl"
        >
          Radush was incorporated in 2022 with a vision of providing training
          and consulting services. Over time, it has slowly evolved into a
          solution provider and product re-engineering organization. We use
          cutting-edge technology with highly skilled professionals, be it in
          custom-building a new product, re-engineering an existing product, or
          building a point solution for any industry-specific problems.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center py-2 w-full max-w-5xl"
        >
          The products we engineer are maintenance-free in their true sense, as
          we use a combination of DevOps and SRE methodologies for this.
          Consulting and training have been our other lines where we provide
          consolidation and optimization services in the areas of tools,
          applications, and infrastructure. We have an army of consultants with
          long industry experience who can quickly identify areas needing
          intervention and provide solutions.
        </motion.p>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="btn hover:bg-white hover:text-heading m-4"
        >
          Know More
        </motion.button>
      </div>

      {/* About us section */}
      <div className="m-20">
        <div className="grid md:grid-cols-2 mx-auto container justify-center max-w-screen-xl w-full my-20">
          <div className="flex justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={ramesh}
              alt="ramesh"
              className="h-64 w-64 box-shadow place-content-center"
            />
          </div>
          <div>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-4xl"
            >
              Ramesh Alwan
            </motion.h3>
            <motion.h4
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-heading py-1 "
            >
              The Founder and Managing Director
            </motion.h4>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="py-2 "
            >
              A visionary techno-functional operations leader renowned for his
              innovative business strategies and client-centric solutions that
              enhance margins and drive cost reductions.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              His extensive expertise spans building profitable startup
              divisions, fostering growth in business lines, executing deal
              transformations, and optimizing operations.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              Ramesh is celebrated for his ability to assemble top-tier talent
              and cultivate high-performing cultures that consistently thrive in
              dynamic markets. As the founder and managing director of Radush
              Technologies Pvt. Ltd.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="bg-about">
        <div className="grid md:grid-cols-2 mx-auto container justify-center max-w-screen-xl w-full my-30 py-10">
          <div>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-4xl "
            >
              SJ Venkatesh
            </motion.h3>
            <motion.h4
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-heading py-1"
            >
              Director & Chief Products Officer
            </motion.h4>
            {/* <p>
            He comes with about thirty-plus years of rich experience in the
            areas of:
          </p>
          <ul>
            <li>Product</li>
            <li>Program Management.</li>
          </ul> */}
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="py-2"
            >
              He started off as a floor engineer at BEML about 35 years ago and
              moved over to IT after about five years with BEML. After a couple
              of years in a start-up,, he moved to IBM in 1998 and was with IBM
              all the way until 2023, when he finally retired.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              He started off at IBM as an application support lead and moved on
              to head and manage the application support environment for the IBM
              Global accounts in India. After about twenty years, he moved over
              to the new product and innovation division at IBM and helped build
              and roll out new offerings and products in the cloud space, in the
              service management, integration, AI operations, and data analytics
              space for IBM.
            </motion.p>
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              src={sj}
              alt="sj"
              className="mx-auto h-64 w-64 box-shadow "
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mx-auto container justify-center max-w-screen-xl w-full my-20">
        <div className="flex justify-center items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={sudha}
            alt="sudha"
            className="h-64 w-64 box-shadow place-content-center"
          />
        </div>
        <div>
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-4xl"
          >
            Sudha M Thodur
          </motion.h3>
          <motion.h4
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-heading py-1 "
          >
            Director & Chief Programs & Training Officer
          </motion.h4>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-2 "
          >
            She started off as a network operations manager in GE India and, in
            a matter of five years, moved over as the senior project manager to
            manage the service delivery of the offshore application development
            program for GE Aircraft Engines in Bangalore.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            After a brief stint of about a year, she moved over to IBM India as
            a service delivery and transition manager and served at IBM for the
            next twenty years in different capacities across India, the
            Philippines, China, and Malaysia.
          </motion.p>
        </div>
      </div>

      <div className="bg-about">
        <div className="grid md:grid-cols-2 mx-auto container justify-center max-w-screen-xl w-full my-30 py-10">
          <div>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-4xl "
            >
              Rangesh Nallan
            </motion.h3>
            <motion.h4
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-heading py-1"
            >
              Ambassador
            </motion.h4>
            {/* <p>
            He comes with about thirty-plus years of rich experience in the
            areas of:
          </p>
          <ul>
            <li>Product</li>
            <li>Program Management.</li>
          </ul> */}
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="py-2"
            >
              A seasoned entrepreneur and consultant from West Sussex, UK. With
              over three decades of expertise spanning commercial advertising,
              ICT, and end-users' solutions, he's the driving force behind
              Adventure Holdings Pte Ltd., Singapore, where he serves as
              Managing Director. Rangesh boasts extensive experience in
              marketing products across Southeast Asia, with a focus on
              Singapore, Malaysia, and South Korea.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              In 2023, Rangesh conceptualized the versatile use of QR codes,
              culminating in the launch of www.qrcode4you.com , a
              Singapore-based company. Collaborating with Radush Technologies in
              Bangalore and Singapore, along with Vanessa Busek in the UK, he
              orchestrated this innovative venture.
            </motion.p>
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              src={rakesh}
              alt="rakesh"
              className="mx-auto h-64 w-64 box-shadow "
            />
          </div>
        </div>
      </div>

      {/* years section */}
      <div className="container mx-auto flex flex-col items-center my-12">
        <h3 className="text-4xl p-4 text-center">Over the years</h3>
        {Years.map((year, index) => (
          <div key={index} className="flex w-full mb-4 justify-center gap-8">
            <div className="w-1/2 mb-2 text-sm text-right pr-4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {year.year}
              </motion.p>
            </div>
            <div className="w-1/2 mb-2 text-sm text-left pl-4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                {year.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
