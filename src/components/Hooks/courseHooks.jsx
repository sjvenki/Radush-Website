import { useState } from "react";
import {
  getTrainingBatchDetails,
  addCourseEnrollement,
} from "../functions/userFunctions";
import { errorHandler } from "../errorHandler";
import { toast } from "react-toastify";

export const useCourseDialog = () => {
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);

  const [batchData, setBatchData] = useState("");
  const handleCourseDialog = (id) => {
    getData(id);
    setCourseDialogOpen((prev) => !prev);
  };
  const getData = async (id) => {
    try {
      const response = await getTrainingBatchDetails(id);
      const mappedData = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBatchData(mappedData);
    } catch (err) {
      errorHandler(err);
    }
  };

  const handleEnroll = async (details) => {
    try {
      const id = localStorage.getItem("user_id") || "";
      if (!id) {
        setCourseDialogOpen((prev) => !prev);
        toast.info("Please Login Before Buying the course");
        return;
      }
      const check = await addCourseEnrollement(id, details);
      setCourseDialogOpen((prev) => !prev);
      if (!check) {
        toast.info(
          "You have already submitted your enrollment, our team will contact you soon"
        );
        return;
      }

      toast.success("Your query was added. Our team will contact you");
    } catch (err) {
      errorHandler(err);
    }
  };
  return {
    courseDialogOpen,
    handleCourseDialog,
    batchData,
    handleEnroll,
  };
};
