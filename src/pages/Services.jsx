import React from "react";
import react from "../assets/react1.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import flutter from "../assets/flutter.jpg";
import angular from "../assets/angular.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { serviceHelper } from "../utils/helpers";
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
        {serviceHelper?.map((data, index) => (
          <div key={index} className="shadow-lg p-3 bg-footer">
            <img
              src={data.image}
              alt={data.title}
              className="w-80 h-56 object-fill"
            />
            <p className="text-3xl mt-4">{data.title}</p>
            <p className="text-base text-gray my-3">{data.detail}</p>
            {data.list?.map((li, index) => (
              <p>
                {index + 1}. {li.li}
              </p>
            ))}
          </div>
        ))}
      </div>
      <h3 className="text-3xl  justify-center flex m-12 mb-10">
        A Diverse Technology Portfolio
      </h3>
      <div className="container h-[90px] w-full space-x-4 mx-auto max-w-screen-lg mb-20 ">
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
