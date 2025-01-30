import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import tree from "../assets/newPage/tree.png";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const cards = [
  {
    name: "Market Size",
    bg: "bg-gradient-to-r from-blue-200 to-blue-50 shadow-xl shadow-blue-200",
    content:
      "The global market for fraud detection and prevention solutions is projected to surpass $40 billion by the late 2020s, driven by increasing digital transactions and cybersecurity threats.",
  },
  {
    name: "Technology",
    bg: "bg-gradient-to-r from-green-200 to-green-50 shadow-xl shadow-green-200",
    content:
      "AI, machine learning, biometrics, and blockchain are revolutionizing fraud detection with real-time analytics, secure authentication, and transparent transaction systems.",
  },
  {
    name: "Solutions",
    bg: "bg-gradient-to-r from-purple-200 to-purple-50 shadow-xl shadow-purple-200",
    content:
      "Comprehensive solutions like transaction monitoring, identity verification, and behavioral analytics ensure robust fraud prevention.",
  },
];

const Cards = ({ index, card, sign }) => {
  return (
    <div className="h-screen flex justify-center items-center sticky top-0">
      <div
        className={`
          w-[300px]
          h-[350px]
          rounded-md
          ${card.bg}
          flex flex-col
          items-center
          justify-center
          p-6
          transform
          transition-transform
          duration-300
          hover:scale-105
        `}
        style={{
          transform: `rotate(${sign}${(index + 0.5) * 10}deg)`,
        }}
      >
        <h2 className="text-xl font-bold mb-4">{card.name}</h2>
        <p className="text-center text-gray-700">{card.content}</p>
      </div>
    </div>
  );
};

const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ScrollRevealGrid = () => {
  const challenges = [
    "False Positives",
    "Evolving Fraud Techniques",
    "Regulatory Compliance",
    "Data Privacy Concerns",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-10">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Key Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, i) => (
          <motion.div
            key={i}
            className="w-full md:w-48 h-48 bg-white rounded-xl flex items-center justify-center text-center p-4 text-gray-800 text-lg font-medium shadow-lg border border-gray-200"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
          >
            {challenge}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const NewPage = () => {
  const data = [
    {
      label: "Market Size",
      value: "market",
      desc: "The global fraud detection market is projected to surpass $40 billion by the late 2020s, driven by increasing digital transactions, rising cybercrime, and the adoption of AI and ML technologies.",
      len: [
        {
          title: "AI/ML",
          desc: "Artificial intelligence and machine learning enable real-time fraud detection by analyzing large datasets.",
        },
        {
          title: "Biometrics",
          desc: "Biometric authentication methods like fingerprints and facial recognition enhance identity verification.",
        },
        {
          title: "Big Data",
          desc: "Big data analytics helps detect unusual patterns in transaction histories and customer behavior.",
        },
        {
          title: "Blockchain",
          desc: "Blockchain technology ensures secure and transparent transactions, reducing fraud risks.",
        },
        {
          title: "Cloud",
          desc: "Cloud-based solutions offer scalability and cost-efficiency for fraud detection systems.",
        },
        {
          title: "Analytics",
          desc: "Advanced analytics tools improve fraud detection accuracy and reduce false positives.",
        },
      ],
    },
    {
      label: "Technology",
      value: "tech",
      desc: "AI, machine learning, biometrics, and blockchain are leading innovation in fraud detection, enabling real-time analytics and secure authentication.",
      len: [
        {
          title: "AI/ML",
          desc: "AI and ML technologies continuously learn and adapt to detect evolving fraud techniques.",
        },
        {
          title: "Biometrics",
          desc: "Biometric authentication prevents unauthorized access and enhances security.",
        },
        {
          title: "Big Data",
          desc: "Big data analytics identifies patterns and anomalies in customer behavior.",
        },
        {
          title: "Blockchain",
          desc: "Blockchain ensures transparency and security in financial transactions.",
        },
        {
          title: "Cloud",
          desc: "Cloud-based fraud detection solutions are scalable and cost-effective.",
        },
        {
          title: "Analytics",
          desc: "Analytics tools improve fraud detection accuracy and operational efficiency.",
        },
      ],
    },
    {
      label: "Solutions",
      value: "solutions",
      desc: "Comprehensive fraud detection solutions include transaction monitoring, identity verification, and behavioral analytics.",
      len: [
        {
          title: "Transaction Monitoring",
          desc: "Real-time monitoring of transactions to flag suspicious activities.",
        },
        {
          title: "Identity Verification",
          desc: "Methods like document verification and biometrics ensure secure customer identification.",
        },
        {
          title: "Behavioral Analytics",
          desc: "Analyzes user behavior to detect deviations indicating potential fraud.",
        },
        {
          title: "Card Protection",
          desc: "Monitors credit card transactions to prevent unauthorized use.",
        },
        {
          title: "Risk Assessment",
          desc: "Assesses potential risks and vulnerabilities in financial systems.",
        },
        {
          title: "Compliance",
          desc: "Ensures adherence to regulatory standards like GDPR and PSD2.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8">
          <h1 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[1.2]">
            Financial Fraud Detection
            <span className="block mt-2 text-[#ea580c]">
              Securing Digital Transactions
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-[600px]">
            Fraud detection is a critical part of risk management in industries
            like finance, banking, and e-commerce. It helps identify and prevent
            fraudulent activities proactively, safeguarding the reputation of
            financial institutions.
          </p>

          <button
            className="flex items-center rounded-3xl border border-black bg-[#ea580c] hover:bg-[#d14a0a] transition-all duration-300 px-4 py-2 md:px-5 md:py-3 group"
            aria-label="Learn more about fraud detection"
          >
            <span className="text-white font-semibold text-lg md:text-xl">
              Learn More
            </span>
            <MdArrowOutward className="ml-3 text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-inherit">
          <video
            playsInline
            autoPlay
            loop
            muted
            poster={tree}
            className="border-none"
            aria-hidden="true"
          >
            <source
              src="https://d11j04fs8rnatz.cloudfront.net/hero/hero_tree_new.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="max-h-[330vh] md:relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 sm:h-full md:h-screen sm:fixed md:sticky top-0">
            <h2 className="text-3xl font-bold">Market Overview</h2>
            <p className="text-gray-600 text-lg">
              The global fraud detection market is projected to surpass $40
              billion by the late 2020s, driven by increasing digital
              transactions, rising cybercrime, and the adoption of AI and ML
              technologies. Key growth drivers include the rise in mobile
              payments, digital wallets, and strict regulatory compliance
              standards.
            </p>
          </div>
          <div className="relative mt-8 md:mt-0">
            {cards.map((item, index) => (
              <Cards card={item} index={index} key={index} sign={"-"} />
            ))}
          </div>
        </div>
      </div>

      {/* Technology Trends Section */}
      <div className="max-h-[300vh] relative sm:top-10 md:m-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8">
            <h2 className="text-3xl font-bold">Technology Trends</h2>
            <p className="text-gray-600 text-lg">
              Innovation in AI, machine learning, and blockchain is transforming
              fraud detection. Key trends include:
              <ul className="list-disc pl-6 mt-4">
                <li>AI and ML for real-time fraud detection.</li>
                <li>
                  Biometric authentication for secure identity verification.
                </li>
                <li>Big Data Analytics for pattern recognition.</li>
                <li>Blockchain for secure and transparent transactions.</li>
              </ul>
            </p>
          </div>
          <div className="relative">
            <ScrollRevealGrid />
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Solutions
            </h2>
            <Tabs value="market">
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc, len }) => (
                  <TabPanel key={value} value={value}>
                    <p className="text-gray-600 mb-6">{desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {len.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center min-h-[180px] border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ea580c]"
                        >
                          <h3 className="text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Key Players Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Key Players</h2>
          <p className="text-gray-600 text-lg text-center mb-8">
            Leading companies in the fraud detection market include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SAS Institute",
              "FICO",
              "ACI Worldwide",
              "IBM",
              "Sift",
              "Other Innovators",
            ].map((player, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-md flex items-center justify-center text-center min-h-[120px] border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ea580c]"
              >
                {player}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Industry Challenges
          </h2>
          <p className="text-gray-600 text-lg text-center mb-8">
            The fraud detection industry faces several challenges, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "False Positives",
              "Evolving Fraud Techniques",
              "Regulatory Compliance",
              "Data Privacy Concerns",
            ].map((challenge, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center text-center min-h-[120px] border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ea580c]"
              >
                {challenge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
