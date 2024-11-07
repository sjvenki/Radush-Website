import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createTrainingBatch,
  getEnrollments,
  getTrainingBatch,
  updateTrainingBatch,
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

export const useModifyTrainingBatch = () => {
  const [batchData, setBatchData] = useState(null);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [updateButtonDisable, setUpdateButtonDisable] = useState(false);
  const getData = async () => {
    const response = await getTrainingBatch();
    setBatchData(response);
  };

  const handleDate = (request_date) => {
    const reqDate = new Date(
      request_date.seconds * 1000 + request_date.nanoseconds / 1000000
    ).toLocaleDateString();
    return reqDate;
  };
  useEffect(() => {
    getData();
  }, []);
  const handleOpen = (data) => {
    setEditData(data);
    setOpen(true);
    setUpdateButtonDisable(false);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  const handleChange = (field) => (e) => {
    setEditData({ ...editData, [field]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      setUpdateButtonDisable(true);
      const response = await updateTrainingBatch(editData);
      handleClose();
      if (response.status == 200) {
        toast.success("Training batch updated successfully");
      }
    } catch (err) {
      setUpdateButtonDisable(false);
      console.log("Update training batch error", err);
    }
  };
  return {
    batchData,
    handleDate,
    handleOpen,
    handleClose,
    open,
    editData,
    handleChange,
    handleUpdate,
    updateButtonDisable,
  };
};
