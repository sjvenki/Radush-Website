import { toast } from "react-toastify";
export const errorHandler = (err) => {
  console.log(err.code, err.message);

  switch (err.code) {
    case "auth/user-not-found":
      return toast.error("User Not Found");
    case "auth/wrong-password":
      return toast.error("Wrong Password");
    default:
      return toast.error(err.code);
  }
};
