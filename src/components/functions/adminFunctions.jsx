import { db } from "../../firestoreConfig";
import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  updateDoc,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const createTrainingBatch = async (data) => {
  const batchDetails = {
    batch_id: data.batchId,
    course_id: data.courseId,
    course_name: data.courseName,
    fees: data.fees,
    start_date: data.startDate,
    end_date: data.endDate,
    batch_details: data.batchDetails,
    duration: data.duration,
    max_seats: data.maxSeats,
    status: data.status,
    current_enrollments: 0,
    create_date: Timestamp.fromDate(new Date()),
  };
  await addDoc(collection(db, "training_batches"), batchDetails);
  toast.success("Batch Updated successfully");
};

export const getEnrollments = async () => {
  const enrollData = await getDocs(collection(db, "course_enrollments"));
  const enrollmentUserData = await Promise.all(
    enrollData.docs.map(async (enrollmentDoc) => {
      const enrollmentData = enrollmentDoc.data();
      const userId = enrollmentData.user_id;
      const userDocRef = await getDoc(doc(db, "user_credentials", userId));
      const userData = userDocRef.data();
      if (userData) {
        return {
          ...enrollmentData,
          userName: userData.user_name,
          userEmail: userData.user_email,
          userMobile: userData.user_mobile,
        };
      } else {
        return null; // Or handle the case where user data is not found
      }
    })
  );
  return enrollmentUserData.filter((data) => data !== null);
};

export const getTrainingBatch = async () => {
  const response = await getDocs(collection(db, "training_batches"));
  const batchData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return batchData;
};

export const updateTrainingBatch = async (data) => {
  const updateRef = doc(db, "training_batches", data.id);
  await updateDoc(updateRef, data);
  return { status: 200 };
};
