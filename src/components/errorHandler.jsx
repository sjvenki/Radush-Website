import { toast } from "react-toastify";
export const errorHandler = (err) => {
  console.error(err.code, err.message, err);

  switch (err.code) {
    case "auth/user-not-found":
      return toast.error("User Not Found");
    case "auth/wrong-password":
      return toast.error("Wrong Password");
    default:
      return toast.error(err.code);
  }
};
