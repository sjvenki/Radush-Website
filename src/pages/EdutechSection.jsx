import React from "react";
import { motion } from "framer-motion";

const EdutechSection = () => {
  const modules = [
    {
      title: "Academics Management",
      description: "Course planning, attendance, evaluation, and analytics.",
    },
    {
      title: "Research & Development",
      description:
        "Project tracking, proposal management, funding, and publication workflows.",
    },
    {
      title: "Sales & Purchase",
      description:
        "Procurement, vendor management, inventory tracking, and automated approvals.",
    },
    {
      title: "Human Resources (HR)",
      description: "Recruitment, payroll, and performance management.",
    },
    {
      title: "Ticketing System",
      description:
        "Centralized helpdesk for IT, facility, and administrative support.",
    },
    {
      title: "Visitor Management System",
      description: "Digital registration, approvals, and security integration.",
    },
    {
      title: "Hostel Management System",
      description:
        "Room allocation, occupancy, and digital payment integration.",
    },
  ];

  const outcomes = [
    "Unified platform for academics, research, and administration.",
    "Streamlined approvals and transparent reporting.",
    "Enhanced collaboration and reduced manual overhead.",
    "Modular, scalable architecture supporting future rollouts.",
  ];

  return (
    <section
      id="edutech"
      aria-labelledby="edutech-heading"
      className="container mx-auto w-full my-12 px-4"
      role="region"
    >
      <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h2
              id="edutech-heading"
              className="text-3xl md:text-4xl font-bold text-heading mb-4"
            >
              Empowering Higher Education through Digital Innovation
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-primary"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Radush Technologies, in partnership with Captive Techno Solutions,
              is leading a transformative initiative to digitize the operations
              of premier Indian institutes — IIT Dharwad, IIT Madras, and NIT
              Calicut — through the deployment of an advanced Edutech ERP built
              on the IProof Low-Code/No-Code Platform, a flagship product of
              Innovace Pvt Ltd.
            </p>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-4 flex items-center">
              <span className="w-2 h-8 bg-primary rounded mr-3"></span>
              Project Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg bg-white rounded-lg p-5 shadow-sm">
              The initiative aims to establish a unified digital backbone across
              academic, administrative, and research domains. Leveraging
              Radush's expertise in enterprise automation and delivery
              excellence, coupled with Captive's strong client relationships,
              the ERP integrates institutional processes into a single, scalable
              platform accessible through both web and mobile applications.
            </p>
          </motion.div>

          {/* Modules */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded mr-3"></span>
              Modules Implemented
            </h3>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              The Edutech ERP suite covers the end-to-end lifecycle of higher
              education management:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.15)",
                  }}
                  className="bg-white rounded-lg p-5 shadow-md border border-orange-100 hover:border-primary transition-all duration-300"
                >
                  <h4 className="font-semibold text-heading text-lg mb-2">
                    {module.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Foundation */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-4 flex items-center">
              <span className="w-2 h-8 bg-primary rounded mr-3"></span>
              Technology Foundation
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-lg p-6 shadow-md border border-orange-100">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                The ERP is powered by IProof, a low-code/no-code platform by
                Innovace Pvt Ltd, known for its flexibility, security, and rapid
                deployment capabilities. It supports workflow configuration,
                third-party API integrations, role-based access control, and
                cloud-native scalability.
              </p>
            </div>
          </motion.div>

          {/* Key Outcomes */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded mr-3"></span>
              Key Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-300"
                >
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.386 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-gradient-to-r from-primary bg-sec rounded-xl p-8 shadow-lg text-white"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Transforming Education Through Collaboration
            </h3>
            <p className="leading-relaxed text-base md:text-lg opacity-95">
              This collaboration between Radush Technologies, Captive Techno
              Solutions, and Innovace Pvt Ltd demonstrates a shared commitment
              to empowering India's leading academic institutions with
              cutting-edge digital infrastructure—fostering efficiency,
              transparency, and innovation across the education ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdutechSection;
