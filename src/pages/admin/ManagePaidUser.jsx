import React from "react";
import { useAdminOperations } from "../../components/Hooks/adminHooks";

const ManagePaidUser = () => {
  const { enrollmentData } = useAdminOperations();
  const handleDate = (request_date) => {
    const reqDate = new Date(
      request_date.seconds * 1000 + request_date.nanoseconds / 1000000
    ).toLocaleDateString();
    return reqDate;
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-xl font-bold mb-2">
        Payment verified Users
      </h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Mobile Number</th>
            <th>User Enrolled Course</th>
            <th>Payment Status</th>
            <th>Enrollment Date</th>
            {/* <th>Send Payment Link</th> */}
          </tr>
        </thead>
        <tbody>
          {enrollmentData
            ?.filter((data) => data.payment_status == "paid")
            .map((data) => (
              <tr>
                <th>{data.userName}</th>
                <th>{data.userEmail}</th>
                <th>{data.userMobile}</th>
                <th>{data.course_name}</th>
                <th>{data.payment_status}</th>
                <th>{handleDate(data.enrolled_date)}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePaidUser;