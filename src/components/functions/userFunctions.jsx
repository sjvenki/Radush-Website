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
  addDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { v4 as uuidV4 } from "uuid";

const USER_INTERESTED_COURSES_COLLECTION = "user_interested_courses";
const USER_CREDENTIALS_COLLECTION = "user_credentials";
const USER_CONTACT_MAILS = "user_contact";

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
        name: data.course_name,
        id: data.course_id,
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
            name: data.course_name,
            id: data.course_id,
            date: Timestamp.fromDate(new Date()),
          },
        ],
      };
      console.log(userCourseData);
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

export const userContactMail = async (data) => {
  const userContact = {
    user_name: data.name,
    user_email: data.email,
    user_message: data.message,
  };
  await addDoc(collection(db, USER_CONTACT_MAILS), userContact);
};

export const getTrainingBatchDetails = async (courseId) => {
  const getTrainingBatchQuery = query(
    collection(db, "training_batches"),
    where("course_id", "==", courseId.toString()),
    orderBy("start_date", "desc")
  );
  const batchData = await getDocs(getTrainingBatchQuery);
  return batchData;
};

export const addCourseEnrollement = async (userId, details) => {
  const enrollmentId = uuidV4();
  const checkExistQuery = query(
    collection(db, "course_enrollments"),
    where("user_id", "==", userId),
    where("course_id", "==", details.course_id),
    where("batch_id", "==", details.batch_id)
  );
  const checkExist = await getDocs(checkExistQuery);
  if (checkExist.size > 0) {
    return false;
  } else {
    const courseEnrollmentDetail = {
      enrollment_id: enrollmentId,
      user_id: userId,
      course_id: details.course_id,
      course_name: details.course_name,
      batch_id: details.batch_id,
      price_agreed: "",
      payment_status: "registered",
      attendance: {},
      request_date: Timestamp.fromDate(new Date()),
      enrolled_date: "",
    };
    await setDoc(
      doc(db, "course_enrollments", enrollmentId),
      courseEnrollmentDetail
    );
    return true;
  }
};

export const getAllTrainingBatchDetails = async () => {
  const batchData = await getDocs(collection(db, "training_batches"));
  return batchData;
};
