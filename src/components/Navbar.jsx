import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navbarList } from "../utils/helpers";
import { getUserData, userSignOut } from "./functions/authFuntions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const userData = localStorage.getItem("user_name") || "";

  const toggle = () => {
    setOpen(!open);
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getUserData();
      const { role } = response.data();
      setRole(role);
    }
    fetchData();
  });

  return (
    <div className=" bg-nav box-shadow py-3">
      <div className="container mx-auto w-full max-w-screen-lg px-2 ">
        <nav className="flex justify-between items-center">
          <div className="h-25 w-20 mt-3 ">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <ul className="hidden md:flex space-x-6 font-medium text-lg  ">
            {navbarList?.map((data, index) => (
              <li key={index} className=" hover:text-heading">
                <a href={data.route}>{data.name}</a>
              </li>
            ))}
          </ul>
          {userData ? (
            <div className="relative w-10 h-10 rounded-full bg-primary flex justify-center items-center font-bold hover:border-black hover:border-2">
              <button
                type="button"
                className="w-full h-full"
                onClick={handleProfile}
              >
                {userData && userData.charAt(0).toUpperCase()}
              </button>
              {profile && (
                <div className="absolute w-28 bg-white shadow-lg top-11 right-0 rounded-md p-1">
                  <ul>
                    <li
                      onClick={() => {
                        navigate("/profile");
                        setProfile(!profile);
                      }}
                      className="cursor-pointer hover:bg-sec p-2 w-full"
                    >
                      My Profile
                    </li>

                    {role == "admin" && (
                      <li
                        onClick={() => {
                          navigate("/admin");
                          setProfile(!profile);
                        }}
                        className="cursor-pointer hover:bg-sec p-2 w-full"
                      >
                        Admin
                      </li>
                    )}
                    <li
                      onClick={() => {
                        navigate("/Speak");
                        setProfile(!profile);
                      }}
                      className="cursor-pointer hover:bg-sec p-2 w-full"
                    >
                      Contact Us
                    </li>
                    <li
                      onClick={() => {
                        userSignOut();
                        setProfile(!profile);
                      }}
                      className="cursor-pointer hover:bg-sec p-2 w-full"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="hidden md:flex btn"
              >
                Login
              </button>

              <a href="/Speak" className="hidden md:flex">
                <button className="btn">Speak to us</button>
              </a>
            </>
          )}

          <button className="md:hidden" onClick={toggle}>
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Menu_Alt_01">
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </nav>
        {/* mobile nav */}
        {open && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-6 font-medium items-center text-lg toggleMenu py-6">
              {navbarList?.map((data, index) => (
                <li key={index} className=" hover:bg-primary cursor-pointer">
                  <a href={data.route}>{data.name}</a>
                </li>
              ))}
              {!userData && (
                <li className=" hover:bg-primary cursor-pointer">
                  <a href="/login">Login</a>
                </li>
              )}
              <a href="/Speak" className=" hover:bg-primary cursor-pointer">
                <button className="">Speak to us</button>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
