import React from "react";
import { useTrainingBatch } from "../components/Hooks/adminHooks";
import {
  TextField,
  MultiTextField,
  DropDown,
} from "../components/ui/TextField";
import Button from "../components/ui/Button";
import { courseData } from "../utils/helpers";
// const courseData = ["1", "2", "3", "4", "5"];
const statusData = ["Published", "Started", "Finished"];

const TrainingBatch = () => {
  const { formData, handleChange, handleSubmit } = useTrainingBatch();
  return (
    <div className="w-full flex justify-center my-4">
      <form
        onSubmit={handleSubmit}
        className="p-4 w-full max-w-screen-lg shadow-md rounded-md border-2 border-blue-gray-100"
      >
        <h1 className="font-bold text-2xl mb-1 text-center">
          Create Training Batch
        </h1>
        <TextField
          label={"Training Batch ID:"}
          value={formData.batchId}
          onChange={handleChange("batchId")}
        />
        <DropDown
          label={"Course ID"}
          name={"courseId"}
          id={"courseId"}
          value={formData.courseId}
          onChange={handleChange("courseId")}
          list={courseData}
          type="number"
          data={true}
        />
        <TextField
          label={"Fees:"}
          value={formData.fees}
          onChange={handleChange("fees")}
          type="number"
        />
        <TextField
          label={"Start Date:"}
          value={formData.startDate}
          onChange={handleChange("startDate")}
          type="date"
        />
        <TextField
          label={"End Date:"}
          value={formData.endDate}
          onChange={handleChange("endDate")}
          type="date"
        />
        <MultiTextField
          label={"Batch Details:"}
          value={formData.batchDetails}
          onChange={handleChange("batchDetails")}
        />
        <TextField
          label={"Max Seats:"}
          value={formData.maxSeats}
          onChange={handleChange("maxSeats")}
          type="number"
        />
        <DropDown
          label={"Status"}
          name={"status"}
          id={"status"}
          value={formData.status}
          onChange={handleChange("status")}
          list={statusData}
        />
        <Button type="submit" buttonName={"Create"} />
      </form>
    </div>
  );
};

export default TrainingBatch;
