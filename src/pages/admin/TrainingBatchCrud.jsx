import React from "react";
import { useModifyTrainingBatch } from "../../components/Hooks/adminHooks";
import { FaEdit } from "react-icons/fa";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { TextField } from "../../components/ui/TextField";

const TrainingBatchDialog = ({
  open,
  onClose,
  data,
  handleChange,
  handleUpdate,
  buttonStatus,
}) => {
  const TextfieldData = [
    {
      labelName: "Batch Details",
      value: data?.batch_details,
      field: "batch_details",
    },
    { labelName: "Batch ID", value: data?.batch_id, field: "batch_id" },
    { labelName: "Course ID", value: data?.course_id, field: "course_id" },
    {
      labelName: "Course Name",
      value: data?.course_name,
      field: "course_name",
    },
    {
      labelName: "Current Enrollment",
      value: data?.current_enrollments,
      field: "current_enrollments",
    },
    { labelName: "Duration", value: data?.duration, field: "duration" },
    { labelName: "Fees", value: data?.fees, field: "fees" },
    { labelName: "Max Seats", value: data?.max_seats, field: "max_seats" },
    { labelName: "Start Date", value: data?.start_date, field: "start_date" },
    { labelName: "Status", value: data?.status, field: "status" },
  ];

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Edit Training Batch:</DialogHeader>
      <DialogBody>
        <form className="grid grid-cols-2 gap-3 overflow-y-auto">
          {TextfieldData.map((fieldData, idx) => (
            <TextField
              label={fieldData.labelName}
              value={fieldData.value}
              key={idx + 1}
              onChange={(e) => handleChange(fieldData.field)(e)}
            />
          ))}
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          className="text-white bg-blue-500 mr-3 "
          onClick={handleUpdate}
          disabled={buttonStatus}
        >
          Update
        </Button>
        <Button className="text-white bg-red-500" onClick={onClose}>
          Close
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

const TrainingBatchCrud = () => {
  const {
    batchData,
    handleDate,
    handleClose,
    handleOpen,
    open,
    editData,
    handleChange,
    handleUpdate,
    updateButtonDisable,
  } = useModifyTrainingBatch();

  return (
    <>
      <TrainingBatchDialog
        open={open}
        onClose={handleClose}
        data={editData}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
        buttonStatus={updateButtonDisable}
      />
      <div className="p-10">
        <h1 className="text-center text-xl font-bold mb-2">
          Modify Training Batch
        </h1>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Batch Details</th>
              <th>Duration</th>
              <th>Max Seats</th>
              <th>Status</th>
              <th>Batch Created Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {batchData?.map((data) => (
              <tr key={data.id}>
                <td>{data.course_name}</td>
                <td>{data.fees}</td>
                <td>{data.start_date}</td>
                <td>{data.end_date}</td>
                <td>{data.batch_details}</td>
                <td>{data.duration}</td>
                <td>{data.max_seats}</td>
                <td>{data.status}</td>
                <td>{handleDate(data.create_date)}</td>
                <td>
                  <button
                    className="hover:bg-blue-gray-100 hover:rounded-2xl p-4"
                    onClick={() => handleOpen(data)}
                  >
                    <FaEdit color="blue" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrainingBatchCrud;
