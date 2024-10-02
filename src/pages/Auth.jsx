import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  userLogin,
  userRegister,
  useCheckUser,
} from "../components/functions/authFuntions";
import { useNavigate } from "react-router-dom";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  CountrySelect,
  CitySelect,
  StateSelect,
} from "react-country-state-city";
import { errorHandler } from "../components/errorHandler";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  validateEmail,
  validateAddress,
  validatePassword,
} from "../utils/validator";
import { auth } from "../firestoreConfig";

//assets
import loginI from "../assets/login.jpg";
import registerI from "../assets/register.jpg";

export const Login = () => {
  useCheckUser();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => (e) => {
    setFormdata({ ...formdata, [field]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formdata.email)) {
      newErrors.email = "Invalid Email Format";
    }
    if (formdata.password.length === 0) {
      newErrors.password = "Can't be a empty field";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNavigate = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await userLogin(formdata);
      if (response) {
        localStorage.setItem("user_id", response.user.uid);
        handleNavigate();
      }
    } else {
      toast.info("Cannot submit empty fields");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_right_top,#ffaf7b,#ffa472,#ff986a,#f99d48)]">
      <div className="py-5 my-10 mx-1 shadow-xl bg-[#ffffff] max-w-screen-sm px-14 ">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            {/* <div className="flex flex-col justify-center items-center ">
              <img
                src={login}
                alt="login image"
                className="w-36 h-auto object-cover"
              />
            </div> */}
            <h1 className="text-xl font-bold text-center">Login</h1>
            <div className="flex flex-col justify-center items-center ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col text-sm font-semibold"
              >
                <label className="mt-2" for="email">
                  Email:
                </label>
                <input
                  className="w-full border-1 p-1 rounded-md"
                  id="email"
                  name="email"
                  placeholder="Enter your Email Id"
                  type="text"
                  value={formdata.email}
                  onChange={handleChange("email")}
                />
                {errors.email && <p className="text-alert">{errors.email}</p>}
                <label className="mt-2 " for="password">
                  Password:
                </label>
                <div className="flex justify-between">
                  {" "}
                  <input
                    className="w-full border-1 p-1 rounded-md"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    type={showPassword ? "text" : "password"}
                    value={formdata.password}
                    onChange={handleChange("password")}
                  />{" "}
                  <button
                    type="button"
                    className="px-1 cursor-pointer"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        width="15"
                        height="15"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        width="15"
                        height="15"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-alert">{errors.password}</p>
                )}
                <button
                  type="submit"
                  value="submit"
                  className="bg-primary my-2 rounded-md text-white font-bold tracking-wide"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={loginI}
              alt="login"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p
            className="text-textcolor cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>

          <p>
            New here?{" "}
            <span className="text-textcolor">
              <a href="/register">Create an account and join us today!</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const Register = () => {
  useCheckUser();
  const [country, setCountry] = useState({ name: "", id: 0 });
  const [state, setState] = useState({ name: "", id: 0 });
  const [city, setCity] = useState({ name: "", id: 0 });
  const [errors, setErrors] = useState({});
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    state: "",
    city: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setFormdata({ ...formdata, [field]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formdata.email)) {
      newErrors.email = "Invalid Email Format";
    }
    if (!validatePassword(formdata.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
    if (validateAddress(formdata.address)) {
      newErrors.address = "Address can't be more than 250 characters";
    }
    if (formdata.name.length === 0) {
      newErrors.name = "Can't be empty field";
    }
    if (formdata.mobileNumber.length === 0) {
      newErrors.mobile = "Can't be empty field";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  const handleCountryChange = (e) => {
    setCountry({ id: e.id, name: e.name });
    setFormdata({ ...formdata, country: e.name });
  };

  const handleStateChange = (e) => {
    setState({ id: e.id, name: e.name });
    setFormdata({ ...formdata, state: e.name });
  };

  const handleCityChange = (e) => {
    setCity({ id: e.id, name: e.name });
    setFormdata({ ...formdata, city: e.name });
  };

  const handleNavigate = () => {
    navigate("/login");
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await userRegister(formdata);
      if (response) {
        handleNavigate();
      }
    } else {
      toast.error("Please enter the required fields for registration");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_right_top,#ffaf7b,#ffa472,#ff986a,#f99d48)]">
      <div className="py-10 my-10 mx-1 shadow-xl bg-white max-w-screen-sm px-14">
        {/* <div className="grid grid-cols-1 md:grid-cols-2">
          <div> */}
        <h1 className="text-xl font-bold text-center">Register</h1>
        <div className="flex flex-col justify-center items-center text-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="mt-2" htmlFor="name">
                  Name:
                </label>

                <input
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  type="text"
                  value={formdata.name}
                  onChange={handleChange("name")}
                />
                {errors.name && <p className="text-alert">{errors.name}</p>}
              </div>
              <div>
                <label className="mt-2" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your Email Id"
                  type="text"
                  value={formdata.email}
                  onChange={handleChange("email")}
                />
                {errors.email && <p className="text-alert">{errors.email}</p>}
              </div>
              <div>
                <label className="mt-2" htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  type="password"
                  value={formdata.password}
                  onChange={handleChange("password")}
                />
                {errors.password && (
                  <p className="text-alert">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="mt-2" htmlFor="mobileNumber">
                  Mobile Number:
                </label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your Mobile Number"
                  type="number"
                  value={formdata.mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />{" "}
                {errors.mobile && <p className="text-alert">{errors.mobile}</p>}
              </div>
              <div className="lg:col-span-2">
                <label className="mt-2" htmlFor="address">
                  Address:
                </label>
                <input
                  id="address"
                  name="address"
                  placeholder="Enter your Address"
                  type="text"
                  value={formdata.address}
                  onChange={handleChange("address")}
                />
                {errors.address && (
                  <p className="text-alert">{errors.address}</p>
                )}
              </div>
              <div>
                <label>Country</label>
                <CountrySelect
                  onChange={handleCountryChange}
                  placeHolder="Select Country"
                />
              </div>
              <div>
                <label>State</label>
                <StateSelect
                  countryid={country.id}
                  onChange={handleStateChange}
                  placeHolder="Select State"
                />
              </div>
              <div>
                <label>City</label>
                <CitySelect
                  countryid={country.id}
                  stateid={state.id}
                  onChange={handleCityChange}
                  placeHolder="Select City"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary font-bold tracking-wider my-2 px-4 py-2 w-full rounded-md text-white"
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex flex-col items-start">
          <p>
            Already have an account?{" "}
            <span className="text-textcolor">
              <a href="/login">Click here to Sign In</a>
            </span>
          </p>
        </div>
        {/* </div> */}
        {/* <div className="flex justify-center items-center">
            <img src={registerI} alt="register image" />
          </div> */}
      </div>
    </div>
  );
};

export const ForgotPassword = () => {
  useCheckUser();
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const emailValue = e.target.value;
    if (!validateEmail(emailValue)) {
      setErrors("Invalid Email Format");
    } else {
      setErrors("");
    }
    setEmail(emailValue);
    setIsSend(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors) {
      toast.error(errors);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setIsSend(true);
      toast.success("Reset email sent successfully");
    } catch (err) {
      errorHandler(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-10 my-5 mx-1 shadow-xl bg-nav max-w-96 px-14">
        <div className="text-xl font-bold text-center">
          <label className="my-2">Forgot Password</label>
          <input
            type="text"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>
        {errors && <p className="text-alert text-md">{errors}</p>}
        <p className="text-sm text-textcolor my-2">
          Note: You'll receive a reset link in the email associated with your
          account to reset your password.
        </p>
        <button
          onClick={handleSubmit}
          className={
            isSend
              ? "px-4 py-2 w-full bg-copy font-medium rounded-md text-gray"
              : "px-4 py-2 w-full bg-primary font-medium rounded-md"
          }
          disabled={isSend || errors}
        >
          Send Mail
        </button>
      </div>
    </div>
  );
};
