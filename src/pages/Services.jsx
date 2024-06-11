import React from "react";
import we1 from "../assets/we1.jpg";
import mob1 from "../assets/mob1.jpg";
import tra from "../assets/tra.jpg";
import con1 from "../assets/con1.jpg";
import clo from "../assets/clo.jpg";
import proEng from "../assets/proEng.png";
import react from "../assets/react1.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import flutter from "../assets/flutter.jpg";
import angular from "../assets/angular.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
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
      {/* banner */}
      <div className="bg-product py-12 flex flex-col justify-center text-center">
        <div className="w-full max-w-screen-lg container mx-auto ">
          <div>
            <h3 className="text-3xl">Our Services</h3>
            <p className="text-base my-3">
              {" "}
              We specialize in providing world-class software development
              services, delivering innovative and cutting-edge solutions that
              help our clients stay ahead of the curve. Our team of expert
              software engineers and developers are dedicated to creating
              high-quality, scalable, and secure software products that meet the
              unique needs of our clients. With a focus on collaboration,
              communication, and client satisfaction, we work closely with our
              clients to turn their ideas into reality and drive their business
              success.
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20">
        <div className="shadow-lg p-3 bg-footer">
          <img src={we1} />
          <p className="text-3xl mt-4">Web Development</p>
          <p className="text-base text-gray my-3">
            Our web application development services focus on creating fast,
            secure, and user-friendly web solutions that drive business growth
            and innovation.
          </p>
          <ul>
            <li>1. Full stack </li>
            <li>2. Frontend </li>
            <li>3. Backend </li>
            <li>4. Database </li>
            <li>5. Web Application</li>
          </ul>
        </div>
        <div className="shadow-lg p-3 bg-footer">
          <img src={mob1} />
          <p className="text-3xl mt-4">Mobile Development</p>
          <p className="text-base text-gray my-3">
            We design and develop mobile apps for Android and iOS devices,
            providing our clients with a robust and scalable mobile presence.
          </p>
          <ul>
            <li>1. IOS </li>
            <li>2. Andriod </li>
            <li>3. Flutter </li>
            <li>4. React Native </li>
            <li>5. xamarin</li>
          </ul>
        </div>
        <div className="shadow-lg p-3 bg-footer">
          <img src={tra} />
          <p className="text-3xl mt-4">Training</p>
          <p className="text-base text-gray my-3">
            {" "}
            Our comprehensive training programs help businesses upskill their
            workforce, driving growth and innovation.
          </p>
          <ul>
            <li>1. Software Development</li>
            <li>2. Cloud</li>
            <li>3. Devops, SRE & DevSecops</li>
            <li>4. SoftSkills</li>
            <li>5. DataScience and AIOps</li>
          </ul>
        </div>
      </div>

      {/* services -2 */}
      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20">
        <div className="shadow-lg p-3 bg-footer">
          <img src={con1} />
          <p className="text-3xl mt-4">Consulting</p>
          <p className="text-base text-gray my-3">
            Our team of IT consultants helps businesses optimize their
            technology infrastructure, providing strategic guidance and support
            to drive digital transformation.
          </p>
          <ul>
            <li>1. DevOps </li>
            <li>2. SRE </li>
            <li>3. DevSecOps </li>
            <li>4. SOC set up </li>
            <li>5. Business Consulting</li>
          </ul>
        </div>
        <div className="shadow-lg p-3 bg-footer">
          <img src={clo} />
          <p className="text-3xl mt-4">Cloud</p>
          <p className="text-base text-gray my-3">
            We offer cloud-based solutions that enable our clients to store,
            manage, and process data efficiently, reducing costs and increasing
            productivity.
          </p>
          <ul>
            <li>1. IaaS </li>
            <li>2. PaaS</li>
            <li>3. SaaS </li>
            <li>4. Build and Migrate </li>
            <li>5. Automation Services</li>
            <li>6. Managed Services</li>
            <li>7. All Hyperscalers - AWS, Azure, Google Cloud and others</li>
          </ul>
        </div>
        <div className="shadow-lg p-3 bg-footer">
          <img src={proEng} />
          <p className="text-3xl mt-4">Product engineering</p>
          <p className="text-base text-gray my-3">
            {" "}
            We offer world-class product engineering services, delivering
            innovative and scalable solutions that meet the unique needs of our
            clients.{" "}
          </p>
          <ul>
            <li>1. Consult</li>
            <li>2. Design</li>
            <li>3. Build & Test</li>
            <li>4. Maintain & Manage</li>
            <li>5. Point Solutions</li>
          </ul>
        </div>
      </div>

      <h3 className="text-3xl  justify-center flex m-12 mb-10">
        A Diverse Technology Portfolio
      </h3>
      <div className="container h-[90px] w-full space-x-4 mx-auto max-w-screen-lg mb-20">
        <Slider {...settings}>
          <div className="h-[90px] flex justify-center items-center">
            <img src={angular} className="h-full" alt="Angular" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={react} className="h-full" alt="React" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={node} className="h-full" alt="Node.js" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={mongo} className="h-full" alt="MongoDB" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={sql} className="h-full" alt="SQL" />
          </div>
          <div className="h-[90px] flex justify-center items-center">
            <img src={flutter} className="h-full" alt="Flutter" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
