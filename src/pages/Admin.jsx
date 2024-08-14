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
      console.log(mappedData);
      setData(mappedData);
    }

    getData();
  }, []);

  return (
    <div className="container flex justify-center items-center">
      <div className="bg-nav text-sm font-medium tracking-wide my-10 p-4 rounded-lg">
        <table>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Intereseted Courses</th>
          </tr>
          {data?.map((doc, docIndex) => (
            <>
              <tr key={docIndex}>
                <td>{doc.user_name}</td>
                <td>{doc.user_email}</td>
                <td>
                  <table>
                    <tr>
                      <th>Course Name</th>
                      <th>Requested Date</th>
                    </tr>
                    {doc.courses?.map((course, index) => (
                      <tr key={index}>
                        <td>{course.name}</td>
                        <td>
                          {course.date
                            ? format(course.date.toDate(), "MM/dd/yyyy")
                            : "No Date Available"}
                        </td>
                      </tr>
                    ))}
                  </table>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admin;
