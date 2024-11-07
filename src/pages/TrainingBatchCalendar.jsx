import React, { useEffect, useState } from "react";
import { CourseTable } from "./Training";
import { useCourseDialog } from "../components/Hooks/courseHooks";
const TrainingBatchCalendar = () => {
  const { getAllData } = useCourseDialog();
  const [data, setData] = useState(null);
  async function getData() {
    const response = await getAllData();
    if (response) {
      setData(response);
    } else {
      console.log("No data");
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-auto p-6">
      <h1 className="text-center font-bold text-xl my-3">
        Training Batch Calendar
      </h1>
      <CourseTable batchData={data} />
    </div>
  );
};

export default TrainingBatchCalendar;
