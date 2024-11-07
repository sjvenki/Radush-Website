import React from "react";
// import { getCourseData } from "../components/functions/userFunctions";
import { useCheckUser } from "../components/functions/authFuntions";
// import { format } from "date-fns";

import { Outlet, useNavigate } from "react-router-dom";
// const Admin = () => {
//   useCheckUser();
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     async function getData() {
//       const response = await getCourseData();
//       const mappedData = response.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setData(mappedData);
//     }

//     getData();
//   }, []);

//   return (
//     <div className=" flex justify-center items-center">
//       <div className="container bg-nav text-sm font-medium tracking-wide my-10 p-4 rounded-lg">
//         <table>
//           <thead>
//             <tr>
//               <th>User Name</th>
//               <th>User Email</th>
//               <th>Course Name</th>
//               <th>Requested Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((doc, docIndex) =>
//               doc.courses?.length ? (
//                 doc.courses.map((course, index) => (
//                   <tr key={`${docIndex}-${index}`}>
//                     {index === 0 && (
//                       <>
//                         <td rowSpan={doc.courses.length}>{doc.user_name}</td>
//                         <td rowSpan={doc.courses.length}>{doc.user_email}</td>
//                       </>
//                     )}
//                     <td>{course.name}</td>
//                     <td>
//                       {course.date
//                         ? format(course.date.toDate(), "MM/dd/yyyy")
//                         : "No Date Available"}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr key={docIndex}>
//                   <td>{doc.user_name}</td>
//                   <td>{doc.user_email}</td>
//                   <td colSpan={2}>No Courses Available</td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Admin;

const AdminLayout = () => {
  useCheckUser();
  const navigate = useNavigate();
  const adminNavs = [
    { name: "Create Training Batch", path: "training-batch" },
    { name: "Send Payment Link", path: "enrollment-payment-link" },
    { name: "Manage Paid Users", path: "manage-paid-users" },
    { name: "Modify Training Batch", path: "crud-training-batch" },
  ];
  return (
    <div className="w-full grid grid-cols-12 gap-1">
      <div className="col-span-3">
        <nav className="my-2">
          {adminNavs.map((navs) => (
            <button
              key={navs.path}
              className="w-full hover:bg-[#f97316] hover:text-white flex justify-center py-4 font-semibold rounded-sm"
              onClick={() => navigate(navs.path)}
            >
              {navs.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
