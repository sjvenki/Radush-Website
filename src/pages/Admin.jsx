import React, { useEffect, useState } from "react";
import { getCourseData } from "../components/functions/userFunctions";
import { useCheckUser } from "../components/functions/authFuntions";
import { format } from "date-fns";
const Admin = () => {
  useCheckUser();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await getCourseData();
      const mappedData = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(mappedData);
    }

    getData();
  }, []);

  return (
    <div className=" flex justify-center items-center">
      <div className="container bg-nav text-sm font-medium tracking-wide my-10 p-4 rounded-lg">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Course Name</th>
              <th>Requested Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((doc, docIndex) =>
              doc.courses?.length ? (
                doc.courses.map((course, index) => (
                  <tr key={`${docIndex}-${index}`}>
                    {index === 0 && (
                      <>
                        <td rowSpan={doc.courses.length}>{doc.user_name}</td>
                        <td rowSpan={doc.courses.length}>{doc.user_email}</td>
                      </>
                    )}
                    <td>{course.name}</td>
                    <td>
                      {course.date
                        ? format(course.date.toDate(), "MM/dd/yyyy")
                        : "No Date Available"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr key={docIndex}>
                  <td>{doc.user_name}</td>
                  <td>{doc.user_email}</td>
                  <td colSpan={2}>No Courses Available</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
