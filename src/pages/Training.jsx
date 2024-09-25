import React, { useCallback, useState, useEffect } from "react";
import { courseData } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userInterested } from "../components/functions/userFunctions";
import useRazorpay from "react-razorpay";
import { useGetCourses } from "../components/Hooks/dataHooks";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useCourseDialog } from "../components/Hooks/courseHooks";
// import Button from "../components/ui/Button";

const CourseBatchDetails = ({ open, onClose, batchData, handleEnroll }) => {
  return (
    <div className="flex justify-center container max-w-screen-lg bg-opacity-0">
      <Dialog open={open} handler={onClose} size="xl" className="blur-0">
        <DialogHeader>
          <h1 className="text-xl font-bold text-center">Training Batches:</h1>
        </DialogHeader>
        <DialogBody>
          <div className="overflow-x-auto">
            {batchData.length > 0 ? (
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>Batch ID</th>
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Course Fees</th>
                    <th>Batch Details</th>
                    <th>Status</th>
                    <th>Enroll</th>
                  </tr>
                </thead>
                <tbody>
                  {batchData &&
                    batchData?.map((batch) => (
                      <tr key={batch.id}>
                        <td className="text-center">{batch.batch_id}</td>
                        <td className="text-center">{batch.course_name}</td>
                        <td className="text-center">{batch.start_date}</td>
                        <td className="text-center">{batch.duration}</td>
                        <td className="text-center">{batch.fees}</td>
                        <td className="text-center">{batch.batch_details}</td>
                        <td className="text-center">{batch.status}</td>
                        <td>
                          <Button
                            variant="gradient"
                            color="orange"
                            onClick={() => handleEnroll(batch)}
                          >
                            Enroll
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : (
              <p>There's no training batch available now</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={onClose} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onClose}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export const Courses = () => {
  // const { coursesData } = useGetCourses();

  // console.log("from firestore", coursesData);
  const navigate = useNavigate();
  const handleNavigate = (course) => {
    let name = course.course_name.replace(/(%20|\s)/g, "-").toLowerCase();
    navigate(`/course-details/${name}`, { state: { course } });
  };
  return (
    <div className="my-10 mx-5 flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-bold">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 ">
        {courseData?.map((data, index) => (
          <div
            key={index}
            className="w-64 h-72 my-2 mx-2 bg-[#C2FCF3] p-2 rounded-md shadow-xl cursor-pointer"
            onClick={() => handleNavigate(data)}
          >
            <div className="flex justify-center items-center flex-col">
              <img
                src={data.course_image}
                alt={data.course_name}
                className="object-cover"
                width={"80%"}
                height={"auto"}
              />
              <h1 className="text-center text-xl font-bold">
                {data.course_name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CourseDetails = () => {
  const [Razorpay] = useRazorpay();
  const [isOpen, setIsOpen] = useState(false);
  const [openBenefits, setOpenBenefits] = useState(false);
  const [openTarget, setOpenTarget] = useState(false);
  const [openFaq, setOpenFaq] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { courseDialogOpen, handleCourseDialog, batchData, handleEnroll } =
    useCourseDialog();
  const { state } = useLocation();
  // const { id } = useParams();
  if (!state) {
    return alert("no courses selected");
  }
  const course = state.course;

  // useEffect(() => {
  //   // testingFire();
  //   if (typeof window.Razorpay !== "undefined") {
  //     setRazorpayLoaded(true);
  //   } else {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     script.onload = () => setRazorpayLoaded(true);
  //     script.onerror = () => console.error("Failed to load Razorpay script");
  //     document.body.appendChild(script);
  //   }
  // }, []);

  // const handleSubmit = async (data) => {
  //   const id = localStorage.getItem("user_id") || "";
  //   console.log(id, !id);
  //   if (!id) {
  //     toast.info("Please Login Before Buying the course");
  //     return;
  //   }
  //   await userInterested(id, data);
  // };

  // const handleBuy = useCallback(
  //   async (event, data) => {
  //     event.preventDefault();
  //     const id = localStorage.getItem("user_id") || "";
  //     console.log(id, !id);
  //     if (!id) {
  //       toast.info("Please Login Before Buying the course");
  //       return;
  //     }
  //     // if (!razorpayLoaded) {
  //     //   console.error("Razorpay SDK is not loaded yet.");
  //     //   return;
  //     // }

  //     try {
  //       const orderData = {
  //         amount: data.coursePrice,
  //         notes: {
  //           courseName: data.course_name,
  //           courseId: data.course_id,
  //         },
  //       };
  //       const order = await createsOrder(orderData);
  //       console.clear();
  //       var options = {
  //         // key: import.meta.env.VITE_PAYMENT_KEY,
  //         key: "rzp_test_B6bqVWAfF7BjWN",
  //         amount: order.data.amount,
  //         currency: order.data.currency,
  //         name: "Radush Technologies",
  //         description: "Test Transaction",
  //         image: "https://radush.io/assets/logo-IjrLeoFJ.png",

  //         order_id: order.data.orderId,
  //         handler: function (res) {
  //           const data = {
  //             orderId: res.razorpay_order_id,
  //             paymentId: res.razorpay_payment_id,
  //             signature: res.razorpay_signature,
  //             userId: id,
  //           };
  //           validatePayment(data);
  //         },
  //         notes: {
  //           address: "Radush Technology",
  //         },
  //         theme: {
  //           color: "#f97316",
  //         },
  //       };
  //       const paymentObject = new Razorpay(options);

  //       // paymentObject.on("payment.failed", function (response) {
  //       //   alert(response.error.code);
  //       //   alert(response.error.description);
  //       //   alert(response.error.source);
  //       //   alert(response.error.step);
  //       //   alert(response.error.reason);
  //       //   alert(response.error.metadata.order_id);
  //       //   alert(response.error.metadata.payment_id);
  //       // });

  //       paymentObject.open();
  //       console.log(order.data.orderId);
  //     } catch (err) {
  //       console.error("payment error", err);
  //     }
  //   },
  //   [Razorpay]
  // );

  return (
    <div className="m-6">
      <CourseBatchDetails
        open={courseDialogOpen}
        onClose={handleCourseDialog}
        batchData={batchData}
        handleEnroll={handleEnroll}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pl-1">
        <div className="flex justify-center items-center">
          <img
            src={course.course_image}
            alt={course.course_name}
            className="object-cover"
          />
        </div>{" "}
        <div>
          <h1 className="text-left text-xl md:text-3xl font-semibold">
            {course.course_name}
          </h1>
          {course.course_introduction?.map((data, index) => (
            <li key={index} className="py-2 font-medium">
              {data}
            </li>
          ))}
          {/* <button
            onClick={(e) => handleBuy(e, course)}
            className="px-4 py-2 my-2 mr-2 rounded text-black font-semibold bg-primary hover:text-white"
          >
            Enroll
          </button> */}
          <button
            // onClick={() => handleSubmit(course)}
            onClick={() => handleCourseDialog(course.course_id)}
            className="px-4 py-2 my-2 rounded text-black font-semibold bg-primary hover:text-white"
          >
            I'm Interested
          </button>
        </div>
      </div>
      <div>
        <div className="p-4 bg-copy rounded-lg max-h-full">
          {/* //outline */}
          <div>
            <button
              className=" w-full  text-left  font-bold text-2xl flex justify-between items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Outline
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    isOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    isOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pl-4 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="mt-2 overflow-hidden">
                {course.course_outline?.map((data, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-xl font-semibold">
                      {index + 1}. {data.title}
                    </p>

                    <ul>
                      {data.detail?.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="pl-4 list-disc list-inside"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* //outline END */}
        <div className="bg-copy mt-2 rounded-lg max-h-full p-4">
          <button
            className="w-full text-left font-bold text-2xl flex justify-between items-center"
            onClick={() => setOpenBenefits(!openBenefits)}
          >
            Benefits
            <svg
              className="fill-indigo-500 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  openBenefits && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  openBenefits && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={` grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pl-4 ${
              openBenefits
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 overflow-hidden">
              {course.course_benefits?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </div>
          </div>
        </div>
        {/* {target start} */}
        <div className="bg-copy mt-2 rounded-lg max-h-full p-4">
          <button
            className="w-full text-left font-bold text-2xl flex justify-between items-center"
            onClick={() => setOpenTarget(!openTarget)}
          >
            Audience
            <svg
              className="fill-indigo-500 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  openTarget && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  openTarget && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={` grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pl-4 ${
              openTarget
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 overflow-hidden">
              {course.course_target?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="bg-copy mt-2 rounded-lg max-h-full p-4">
          <button
            className="w-full text-left font-bold text-2xl flex justify-between items-center"
            onClick={() => setOpenFaq(!openFaq)}
          >
            FAQ
            <svg
              className="fill-indigo-500 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  openFaq && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  openFaq && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={` grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pl-4 ${
              openFaq
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 overflow-hidden">
              {course.course_faq?.map((data, index) => (
                <div key={index} className="my-2">
                  <p className="font-bold">
                    {index + 1}. {data.question}
                  </p>
                  <p>{data.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
