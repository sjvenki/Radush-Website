import { useState } from "react";
import {
  getTrainingBatchDetails,
  addCourseEnrollement,
  getAllTrainingBatchDetails,
} from "../functions/userFunctions";
import { errorHandler } from "../errorHandler";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useCourseDialog = () => {
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);

  const [batchData, setBatchData] = useState("");
  const navigate = useNavigate();

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

  const getAllData = async () => {
    try {
      const response = await getAllTrainingBatchDetails();
      const mappedData = response?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return mappedData;
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
        setTimeout(() => navigate("/login"), 1000);
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
    getAllData,
  };
};
