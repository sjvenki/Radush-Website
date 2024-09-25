import { getDocs, collectionGroup } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firestoreConfig";

export const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const handleData = (data) => {
    setUserData(data);
  };
  return { userData, handleData };
};

export const useGetCourses = () => {
  const [coursesData, setCoursesData] = useState(null);
  async function getData() {
    try {
      const response = await getDocs(collectionGroup(db, "courses"));

      setCoursesData(
        response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return {
    coursesData,
  };
};
