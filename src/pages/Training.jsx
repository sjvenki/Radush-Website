import React, { useState } from "react";
import { courseData } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();
  const handleNavigate = (course) => {
    navigate(`/course-details/${course.courseId}`, { state: { course } });
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
                src={data.image}
                alt={data.courseTitle}
                className="object-cover"
                width={"80%"}
                height={"auto"}
              />
              <h1 className="text-center text-xl font-bold">
                {data.courseTitle}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CourseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBenefits, setOpenBenefits] = useState(false);
  const [openTarget, setOpenTarget] = useState(false);
  const [openFaq, setOpenFaq] = useState(false);
  const { state } = useLocation();
  const { id } = useParams();
  if (!state) {
    return alert("no courses selected");
  }
  const course = state.course;

  console.log(course);
  return (
    <div className="m-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pl-1">
        <div className="flex justify-center items-center">
          <img
            src={course.image}
            alt={course.courseTitle}
            className="object-cover"
          />
        </div>{" "}
        <div>
          <h1 className="text-left text-xl md:text-3xl font-semibold">
            {course.courseTitle}
          </h1>
          {course.introduction?.map((data, index) => (
            <li key={index} className="py-2 font-medium">
              {data.intro}
            </li>
          ))}
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
                {course.outline?.map((data, index) => (
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
                          {point.point}
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
              {course.benefits?.map((data, index) => (
                <li key={index}>{data.point}</li>
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
              {course.target?.map((data, index) => (
                <li key={index}>{data.point}</li>
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
              {course.faq?.map((data, index) => (
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
