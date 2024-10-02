import React from "react";
import ban from "../assets/ban.jpeg";
import sin from "../assets/sin.jpg";
import odessa from "../assets/odessa.jpg";

const Conatct = () => {
  return (
    <div>
      {/* content */}
      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20">
        <div>
          <img
            src={ban}
            style={{ width: 350, height: 250, objectFit: "cover" }}
            alt="bangalore address"
          />
          <p className="text-xl mt-4">Radush Technologies Pvt. Ltd.</p>
          <p className="text-base"> Alpine Park</p>
          <p className="text-base"> #C-303, Begur Main Road,</p>
          <p className="text-base"> Bengaluru</p>
          <p className="text-base">560068.</p>
          <p className="text-base font-semibold">+91 6366094725</p>
        </div>
        {/* <div>
          <img
            src={sin}
            style={{ width: 350, height: 250, objectFit: "cover" }}
          />
          <p className="text-xl mt-4">Radush Technologies Pte Ltd.</p>
          <p className="text-base"> The Signature,</p>
          <p className="text-base"> 51 Changi Business Park Central</p>
          <p className="text-base">2 #04-05</p>
          <p className="text-base"> Singapore-486066</p>
          <p className="text-base font-semibold">+65 80623768</p>
        </div> */}
        <div>
          <img
            src={odessa}
            style={{ width: 350, height: 250, objectFit: "cover" }}
            alt="odesaa address"
          />
          <p className="text-xl mt-4">Radush Technologies LLC</p>
          <p className="text-base"> 3200 Living Coral Dr,</p>
          <p className="text-base"> Odessa,</p>
          <p className="text-base">FL-33556</p>
          <p className="text-base font-semibold">+1 857 444 4845</p>
        </div>
      </div>
    </div>
  );
};

export default Conatct;
