import { db } from "../../firestoreConfig";
import { errorHandler } from "../errorHandler";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

const USER_INTERESTED_COURSES_COLLECTION = "user_interested_courses";
const USER_CREDENTIALS_COLLECTION = "user_credentials";

const checkExists = (data, userData) => {
  const { courses } = userData;
  return courses.some((course) => course.name === data.courseTitle);
};

export const userInterested = async (id, data) => {
  try {
    const checkRecord = await getDoc(
      doc(db, USER_INTERESTED_COURSES_COLLECTION, id)
    );
    const record = checkRecord.data() || "";

    if (record) {
      if (checkExists(data, record)) {
        toast.info(
          "You have already requested this course. Please wait, our team will contact you."
        );
        return;
      }

      const newCourse = {
        name: data.courseTitle,
        id: data.courseId,
        date: Timestamp.fromDate(new Date()),
      };
      await updateDoc(doc(db, USER_INTERESTED_COURSES_COLLECTION, id), {
        courses: arrayUnion(newCourse),
      });
      console.log("User Record Updated");
    } else {
      console.log("Creating New User Document");
      const userData = await getDoc(doc(db, USER_CREDENTIALS_COLLECTION, id));
      const { user_name, user_email } = userData.data();
      const userCourseData = {
        user_name,
        user_email,
        courses: [
          {
            name: data.courseTitle,
            id: data.courseId,
            date: Timestamp.fromDate(new Date()),
          },
        ],
      };
      await setDoc(
        doc(db, USER_INTERESTED_COURSES_COLLECTION, id),
        userCourseData
      );
    }

    toast.success(
      "Your query is captured. Our team will contact you regarding the course."
    );
  } catch (err) {
    errorHandler(err);
  }
};

export const getCourseData = async () => {
  try {
    const response = await getDocs(collection(db, "user_interested_courses"));
    return response;
  } catch (err) {
    errorHandler(err);
  }
};
