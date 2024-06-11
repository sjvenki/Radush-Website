import React from "react";
import product from "../assets/product.png";
import radush from "../assets/radush.png";
import ecHyre from "../assets/echyre.png";

const Products = () => {
  return (
    <div>
      {/* banner */}
      <div className="  bg-product py-4">
        <div className="w-full max-w-screen-lg  grid grid-cols-2 container mx-auto ">
          <div>
            <h3 className="text-3xl">Our Product</h3>
            <p className="text-base my-3">
              {" "}
              Our team of expert developers creates tailored software solutions
              that meet the unique needs of our clients, helping them stay ahead
              of the competition.
            </p>
          </div>
          <div className="h-60 w-60 text-center flex justify-center">
            <img
              src={product}
              className="h-full w-full items-center flex justify-center"
            />
          </div>
        </div>
      </div>

      {/* products */}
      <div className="grid md:grid-cols-2 gap-6 container mx-auto w-full max-w-screen-lg my-20">
        <div>
          <img src={radush} />
        </div>
        <div>
          <h3 className="text-3xl">QR CODE FOR YOU</h3>
          <a href="/https://qrcode4you.com/">
            <p className="text-heading">https://qrcode4you.com</p>
          </a>
          <p className="text-base mt-4">
            We are pioneers in the QR code revolution,dedicated to creating
            products that harness the capabilities of QR codes to benefit
            businesses, organizations, and individuals, making the world a more
            connected, safe, and efficient place.
          </p>
          <p className="text-base mt-3">
            At QRcode4you.com , we are passionate about the untapped potential
            of QR codes and their power to revolutionise the way we connect,
            communicate, and engage with the world.
          </p>
        </div>
      </div>

      {/* // Product2 */}
      <div className="grid md:grid-cols-2 gap-6 container mx-auto w-full max-w-screen-lg my-20">
        <div>
          <img src={ecHyre} />
        </div>
        <div>
          <h3 className="text-3xl">ecHyre</h3>
          <a href="/https://ecHyre.com/">
            <p className="text-heading">https://ecHyre.com</p>
          </a>
          <p className="text-base mt-4">
            We are pioneers in the QR code revolution,dedicated to creating
            products that harness the capabilities of QR codes to benefit
            businesses, organizations, and individuals, making the world a more
            connected, safe, and efficient place.
          </p>
          <p className="text-base mt-3">
            At QRcode4you.com , we are passionate about the untapped potential
            of QR codes and their power to revolutionise the way we connect,
            communicate, and engage with the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
