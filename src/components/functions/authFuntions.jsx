import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firestoreConfig";
import { errorHandler } from "../errorHandler";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const userLogin = async (data) => {
  try {
    const { email, password } = data;
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = await getDoc(doc(db, "user_credentials", response.user.uid));
    localStorage.setItem("user_name", user.data().user_name);
    return response;
  } catch (err) {
    errorHandler(err);
  }
};

export const userRegister = async (data) => {
  try {
    const { email, password } = data;
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "user_credentials", response.user.uid), {
      user_name: data.name,
      user_email: data.email,
      user_mobile: data.mobileNumber,
      user_address: {
        address: data.address,
        country: data.country,
        state: data.state,
        city: data.city,
      },
      role: "user",
      user_created: Timestamp.fromDate(new Date()),
    });
    if (response) {
      return response;
    }
  } catch (err) {
    errorHandler(err);
  }
};

export const getUserData = async () => {
  const id = localStorage.getItem("user_id");
  if (id) {
    const response = await getDoc(doc(db, "user_credentials", id));
    return response;
  } else {
    return null;
  }
};

export const userSignOut = () => {
  try {
    signOut(auth);
    toast.success("Logged Out Successfully");
    localStorage.clear();
    window.location.reload();
  } catch (err) {
    errorHandler(err);
  }
};

//hooks to check the user already loggin in or not

export const useCheckUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      const id = localStorage.getItem("user_id") || "";

      // If no user ID is found, user is not logged in
      if (!id) {
        console.log("User Not Logged In");
        if (window.location.pathname.startsWith("/admin")) {
          navigate("/"); // Redirect non-logged-in users from admin routes
        }
        return null;
      }

      // If user ID exists, proceed to check their role
      if (id) {
        try {
          const response = await getUserData();
          const { role } = response.data();
          console.log("userRole", role);

          const path = window.location.pathname;
          const isAdminPath = path.startsWith("/admin"); // Check if it's any admin route
          const isAuthPath = [
            "/login",
            "/register",
            "/forgot-password",
          ].includes(path);

          // If user is not an admin and is on an admin route, redirect them
          if (role !== "admin" && isAdminPath) {
            navigate("/"); // Redirect to homepage or another public route
          }
          // If user is already logged in and is on an authentication page, redirect them
          else if (role && isAuthPath) {
            navigate("/"); // Redirect logged-in user away from login/register
          } else {
            return 1; // User is authorized
          }
        } catch (error) {
          console.error("Error checking user role:", error);
          navigate("/"); // Redirect in case of error
        }
      }
    };

    checkUserRole();
  }, [navigate]);

  return null;
};
