import { useState } from "react";

export const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const handleData = (data) => {
    setUserData(data);
  };
  return { userData, handleData };
};
