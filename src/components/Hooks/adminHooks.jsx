import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createTrainingBatch,
  getEnrollments,
} from "../functions/adminFunctions";
import { errorHandler } from "../errorHandler";
export const useTrainingBatch = () => {
  const [formData, setFormData] = useState({
    batchId: "",
    courseId: "",
    courseName: "",
    fees: "",
    startDate: "",
    endDate: "",
    batchDetails: "",
    duration: "",
    maxSeats: "",
    status: "",
  });

  const handleChange = (field) => (event) => {
    let newValue;

    if (event.value && event.name) {
      if (field === "courseId") {
        const updatedFormData = {
          ...formData,
          courseId: event.value, // Update courseId
          courseName: event.name, // Update courseName
        };
        setFormData(updatedFormData);
        return; // Stop here because we handled both values
      }
      newValue = event.value;
    } else {
      newValue = event.target.value;
    }

    // Handle normal fields or other dropdowns
    const updatedFormData = { ...formData, [field]: newValue };

    // Validation and calculations for date range
    if (updatedFormData.startDate && updatedFormData.endDate) {
      const start = new Date(updatedFormData.startDate);
      const end = new Date(updatedFormData.endDate);

      let months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
      let days = end.getDate() - start.getDate();

      if (days < 0) {
        months -= 1;
        const previousMonthEnd = new Date(
          end.getFullYear(),
          end.getMonth(),
          0
        ).getDate();
        days += previousMonthEnd;
      }

      const duration = `${months} months and ${days} days`;
      updatedFormData.duration = duration;
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createTrainingBatch(formData);
      setFormData({
        batchId: "",
        courseId: 0,
        fees: 0,
        startDate: "",
        endDate: "",
        batchDetails: "",
        duration: "",
        maxSeats: 0,
        status: "",
      });
    } catch (err) {
      errorHandler(err);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export const useAdminOperations = () => {
  const [enrollmentData, setEnrollmentData] = useState(null);
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [existingPaymentData, setExistingPaymentData] = useState({});
  const getData = async () => {
    const response = await getEnrollments();
    setEnrollmentData(response);
  };
  const handlePaymentDialog = (data) => {
    setPaymentDialog((prev) => !prev);
    setExistingPaymentData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    enrollmentData,
    handlePaymentDialog,
    paymentDialog,
    existingPaymentData,
  };
};
