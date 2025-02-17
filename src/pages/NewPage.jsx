import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import tree from "../assets/newPage/tree.png";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Input,
  Card,
  Button,
  Radio,
  CardHeader,
  CardBody,
  Alert,
  Select,
  Option,
  IconButton,
} from "@material-tailwind/react";
import { SendDemoEmail } from "../firestoreConfig";
import { toast } from "react-toastify";

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
      <Card
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
      </Card>
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
const Calendar = ({ selected, onSelect, disabled }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelected =
        selected && date.toDateString() === selected.toDateString();
      const isDisabled = disabled && disabled(date);

      days.push(
        <Button
          key={day}
          variant={isSelected ? "filled" : "text"}
          color={isSelected ? "orange" : "gray"}
          className={`h-10 w-10 p-0 ${
            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-50"
          }`}
          disabled={isDisabled}
          onClick={() => !isDisabled && onSelect(date)}
        >
          {day}
        </Button>
      );
    }
    return days;
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  return (
    <div className="w-full  flex justify-center flex-col">
      <div className="flex items-center justify-between mb-4">
        <IconButton
          variant="text"
          color="gray"
          onClick={previousMonth}
          className="rounded-full"
        >
          <FaAngleLeft className="h-4 w-4" />
        </IconButton>

        <Typography variant="h6" color="blue-gray">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Typography>

        <IconButton
          variant="text"
          color="gray"
          onClick={nextMonth}
          className="rounded-full"
        >
          <FaAngleRight className="h-4 w-4" />
        </IconButton>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <Typography
            key={day}
            variant="small"
            color="blue-gray"
            className="text-center font-medium"
          >
            {day}
          </Typography>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{generateDays()}</div>
    </div>
  );
};

const ContactDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    mobile: "",
    email: "",
    preference: "",
    date: null,
    time: "",
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  // Calculate minimum allowed date (48 hours from now)
  const getMinDate = () => {
    const minDate = new Date();
    minDate.setHours(minDate.getHours() + 48);
    return minDate;
  };

  // Generate available time slots (9 AM to 5 PM)
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minute = i % 2 === 0 ? "00" : "30";
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minute} ${period}`;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      preference: value,
      date: null,
      time: "",
    }));
    setShowCalendar(value === "watch");
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
      time: "",
    }));
  };

  const handleTimeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      time: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    try {
      await SendDemoEmail(formData);
      setFormData({
        name: "",
        companyName: "",
        mobile: "",
        email: "",
        preference: "",
        date: null,
        time: "",
      });
      setShowCalendar(false);
      setButtonStatus(false);
      toast.success(
        "Message Sent successfully! Our team will contact you soon."
      );
    } catch (error) {
      setButtonStatus(false);
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-4 shadow-lg shadow-black-500">
      <Typography className="font-bold text-2xl text-center" color="orange">
        Schedule a Demo
        {/* <Typography variant="h5" color="white">
          {formData.preference === "watch" ? "Schedule a Demo" : "Contact Us"}
        </Typography> */}
      </Typography>
      <CardBody className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              color="orange"
              // className="!border-t-blue-gray-200 focus:!border-t-orange-500"
            />

            <Input
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              color="orange"
              // className="!border-t-blue-gray-200 focus:!border-t-orange-500"
            />

            <Input
              label="Mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              color="orange"
              // className="!border-t-blue-gray-200 focus:!border-t-orange-500"
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              color="orange"
              // className="!border-t-blue-gray-200 focus:!border-t-orange-500"
            />

            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                What would you prefer?
              </Typography>
              <div className="flex flex-col gap-2">
                <Radio
                  name="preference"
                  label="Talk to Sales"
                  value="talk"
                  color="orange"
                  onChange={() => handlePreferenceChange("talk")}
                  checked={formData.preference === "talk"}
                />
                <Radio
                  name="preference"
                  label="Watch Demo"
                  value="watch"
                  color="orange"
                  onChange={() => handlePreferenceChange("watch")}
                  checked={formData.preference === "watch"}
                />
              </div>
            </div>

            {showCalendar && (
              <div className="space-y-4 flex items-center justify-center flex-col">
                <Alert color="blue" className="bg-blue-50 text-blue-900">
                  Please note that demos require a minimum of 48 hours advance
                  booking for preparation.
                </Alert>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Select Preferred Date
                  </Typography>
                  <div className="border rounded-lg p-4 max-w-xs ">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateChange}
                      className="rounded-lg border"
                      disabled={(date) => {
                        const minDate = getMinDate();
                        const day = date.getDay();
                        return date < minDate;
                      }}
                    />
                  </div>
                </div>

                {formData.date && (
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Select Preferred Time
                    </Typography>
                    <Select
                      label="Select Time"
                      value={formData.time}
                      onChange={handleTimeChange}
                      color="orange"
                    >
                      {timeSlots.map((time) => (
                        <Option key={time} value={time}>
                          {time}
                        </Option>
                      ))}
                    </Select>
                  </div>
                )}
              </div>
            )}
          </div>

          <Button
            type="submit"
            color="orange"
            fullWidth
            disabled={
              (formData.preference === "watch" &&
                (!formData.date || !formData.time)) ||
              buttonStatus
            }
            className="mt-6"
          >
            {formData.preference === "watch" ? "Schedule Demo" : "Submit"}
          </Button>
        </form>
      </CardBody>
    </Card>
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

      {/* Demo Section */}
      <ContactDemoForm />
    </div>
  );
};

export default NewPage;
