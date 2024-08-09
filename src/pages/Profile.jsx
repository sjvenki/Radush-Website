import React, { useState, useEffect } from "react";
import { getUserData } from "../components/functions/authFuntions";
import defaultProfile from "../assets/default.svg";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  async function getData() {
    const response = await getUserData();
    if (response) {
      console.log("from home", response.data());
      setUserData(response.data());
    }
  }

  useEffect(() => {
    const id = localStorage.getItem("user_id") || "";
    if (id) {
      getData();
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      {userData && (
        <div className="grid lg:grid-cols-2 gap-1 p-4 w-full">
          <div className="bg-copy my-5 mx-20 p-2 flex items-center justify-center shadow-lg rounded-md">
            <img
              src={defaultProfile}
              alt="default profile"
              className="w-60 h-auto object-cover"
            />
          </div>
          <div className="text-md flex justify-center flex-col">
            <p>
              <b>Name:</b> {userData.user_name}
            </p>
            <p>
              {" "}
              <b>Email Id:</b> {userData.user_email}
            </p>
            <p>
              <b>Mobile Number:</b> {userData.user_mobile}
            </p>
            <p>
              <b>Address: </b>
              {userData.user_address.address}
            </p>
            <p>
              <b>Country:</b> {userData.user_address.country}
            </p>
            <p>
              <b>State:</b> {userData.user_address.state}
            </p>
            <p>
              <b>City:</b> {userData.user_address.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
