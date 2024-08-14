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

      if (!id) {
        console.log("User Not Logged In");
        return null;
      }

      if (id) {
        try {
          const response = await getUserData();
          const { role } = response.data();
          console.log("userRole", role);
          const path = window.location.pathname;
          const isAdminPath = ["/admin"].includes(path);
          const isAuthPath = [
            "/login",
            "/register",
            "/forgot-password",
          ].includes(path);

          if (role !== "admin" && isAdminPath) {
            navigate("/");
          } else if (role && isAuthPath) {
            navigate("/");
          } else {
            return 1;
          }
        } catch (error) {
          console.error("Error checking user role:", error);
          navigate("/");
        }
      }
    };
    checkUserRole();
  }, [navigate]);

  return null;
};
