// image
import ms from "../assets/managedServices.png";
import mobile from "../assets/mob1.jpg";
import training from "../assets/tra.jpg";
import consulting from "../assets/con1.jpg";
import cloud from "../assets/clo.jpg";
import proEng from "../assets/proEng.png";
import CDSP_Badge from "../assets/CDSP_Badge.png";
import CAIOPSF_Badge from "../assets/CAIOPSF_Badge.png";
import CSREF_Badge from "../assets/CSREF_Badge.png";
import CSREP_Badge from "../assets/CSREP_Badge.png";
import CDSOP_Badge from "../assets/CDSOP_Badge.png";
import CDSOF__Badge from "../assets/CDSOF__Badge.png";

//about us
import ramesh from "../assets/ramesh.png";
import sudha from "../assets/sudha.png";
import sj from "../assets/sj.jpeg";
import rangesh from "../assets/rakesh.png";

export const navbarList = [
  { route: "/About", name: "About us" },
  { route: "/Services", name: "Services" },
  { route: "/Products", name: "Products" },
  { route: "/courses", name: "Courses" },
  { route: "/Contact", name: "Our Global Pressence" },
  { route: "/Content", name: "Content Corner" },
];

export const courseData = [
  {
    course_id: 1,
    course_name: "Data Science Professional",
    course_image: CDSP_Badge,
    coursePrice: 50000,
    course_introduction: [
      "Thus, getting the Data Science Professional training and certification is definitely worth it for every aspiring data science professional who wants to have portable proof of his competitive generalist skill set in data science and analytics. From Radush, an approved training partner of GSDC, the certification guarantees that one shall get training that meets standards and an opportunity to gain practical experience.",

      "The CDP training provides the knowledge and skills necessary to work with the most up-to-date tools and frameworks for data handling and analysis, which allows you to develop solutions tailored to big data sets.",

      "The training affirms your competence in the utilization of sophisticated methods in machine learning, and the application of predictive models and data engineering to provide optimal and practical data-based solutions.",

      "By completing the Certified Data Science Professional program, you distinguish yourself assuring potential employers and clients that you are a professional with enhancement skills.",

      "Radush, established in 2022, specializes in offering custom solutions for various products such as tools, applications, and infrastructure which employ a pool of consultants with vast experience in searching for potential areas of improvement for the client.",
    ],
    course_outline: [
      {
        title: "Data Science Introduction",
        detail: [
          "Overview of Data Science: Definition, Importance, and Applications",

          "Key Concepts and Terminology in Data Science",

          "The Data Science Lifecycle: Problem Definition, Data Collection, Data Preparation, Data Analysis, and Interpretation",

          "Tools and Technologies in Data Science: Python, R, SQL, etc.",

          "Introduction to Data Science Roles: Data Scientist, Data Analyst, Data Engineer, and their Responsibilities",
        ],
      },
      {
        title: "Probability and Statistics for Data Science",
        detail: [
          "Basic Probability Concepts: Probability Theory, Random Variables, Probability Distributions",

          "Statistical Methods: Descriptive Statistics, Inferential Statistics, Hypothesis Testing",

          "Correlation and Regression Analysis",

          "Bayesian Statistics",

          "Importance of Probability and Statistics in Data Science",
        ],
      },
      {
        title: "Working with Big Data",
        detail: [
          "Introduction to Big Data: Definition, Characteristics, and Challenges",

          "Data Storage Solutions: HDFS, Cassandra, MongoDB",

          "Big Data Processing Frameworks: MapReduce, Spark",

          "Case Studies and Applications of Big Data",
        ],
      },
      {
        title: "Data Extraction and Visualization Techniques",
        detail: [
          "Data Extraction Techniques: Web Scraping, APIs, Databases",

          "Data Cleaning and Preparation: Handling Missing Values, Data Transformation, Data Integration",

          "Introduction to Data Visualization: Importance, Principles, and Tools",

          "Visualization Techniques: Charts, Graphs, Plots, Dashboards",

          "Tools for Data Visualization: Matplotlib, Seaborn, Plotly",
        ],
      },
      {
        title: "Data Mining and Machine Learning",
        detail: [
          "Fundamentals of Data Mining: Concepts, Techniques, and Applications",

          "Machine Learning Overview: Supervised, Unsupervised, and Reinforcement Learning",

          "Key Algorithms: Regression, Classification, Clustering, Association",

          "Model Evaluation and Validation Techniques",

          "Practical Applications of Data Mining and Machine Learning",
        ],
      },
      {
        title: "A Statistical Approach for Data Science",
        detail: [
          "Advanced Statistical Methods: Multivariate Analysis, Time Series Analysis, Survival Analysis",

          "Statistical Inference: Estimation, Confidence Intervals, Significance Testing",

          "Experimental Design and Analysis",

          "Statistical Software: R, Python (statsmodels, SciPy)",

          "Real-world Applications of Statistical Methods in Data Science",
        ],
      },
      {
        title: "Text Mining & NLP (Natural Language Processing)",
        detail: [
          "Introduction to Text Mining: Techniques, Applications, and Challenges",

          "NLP Fundamentals: Text Preprocessing, Tokenization, Stemming, Lemmatization",

          "Text Classification, Sentiment Analysis, and Topic Modeling",

          "Advanced NLP Techniques: Word Embeddings, Transformers, BERT, GPT",

          "Tools for Text Mining and NLP: NLTK, SpaCy, Gensim",
        ],
      },
      {
        title: "Data Visualization Using Tableau",
        detail: [
          "Introduction to Tableau: Overview and Installation",

          "Connecting to Data Sources in Tableau",

          "Creating Basic Visualizations: Bar Charts, Line Charts, Pie Charts",

          "Advanced Visualizations: Heat Maps, Tree Maps, Scatter Plots",

          "Building Interactive Dashboards and Storytelling with Data",
        ],
      },
      {
        title: "Data Visualization Using Tableau",
        detail: [
          "Deep Dive into Tableau Features and Functionalities",

          "Advanced Data Manipulation and Calculations in Tableau",

          "Using Tableau for Exploratory Data Analysis",

          "Integrating Tableau with Other Data Science Tools",

          "Best Practices for Effective Data Visualization and Presentation",
        ],
      },
    ],
    course_benefits: [
      "Stand out among peers in the data science field",

      "Boosted potential for higher earnings and salaries",

      "Opportunity to work on unique data science projects",

      "Greater industry visibility and acknowledgment",

      "Equipped to address intricate data issues",

      "Improved trustworthiness in data-centric decision processes",

      "Edge over competitors in the data science job market",
    ],
    course_target: [
      "Data Analysts",

      "Business Analysts",

      "Data Engineers",

      "Machine Learning Engineers",

      "Research Scientists",

      "BI Developers",

      "BI Analysts",

      "Statisticians",

      "Data Architects",

      "Big Data Engineers",

      "AI Engineers",

      "Database Administrators",

      "Software Engineers",

      "IT Managers",

      "Analytics Managers",

      "Data Managers",
    ],
    course_faq: [
      {
        question: "How would this training help professionals?",
        answer:
          "The Certified Data Science Professional boosts earning potential by 20% (source: IBM Study) and enhances job opportunities in data-centric roles.",
      },
      {
        question:
          "Who would gain the most value from pursuing the Certified Data Science Professional?",
        answer:
          "Data scientists, analysts, and engineers will gain the most, as it validates their expertise and skills in data science.",
      },
      {
        question:
          "Could you give an overview of what the Data Science Professional Training entails and how it equips certificate holders?",
        answer:
          "The Certified Data Science Professional covers data analysis, machine learning, and big data, equipping holders with practical skills for industry application.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the Certified Data Science Professional?",
        answer:
          "Certified Data Science Professionals can pursue roles like data scientist, data analyst, and machine learning engineer, which are highly sought in the world.",
      },
      {
        question:
          "In what ways is the Data Science Professional training applicable and useful within the industry?",
        answer:
          "The Certified Data Science Professional ensures proficiency in data manipulation, analysis, and visualization, making it valuable across industries (source: Deloitte Insights).",
      },
      {
        question:
          "How long does the Certified Data Science Professional remain valid before needing to be renewed?",
        answer:
          "By choosing a GSDC certification, you can be confident that it will remain valid for your professional career, without needing any renewal or fees.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved Certified Data Science Professional status?",
        answer:
          "Organizations benefit from enhanced data-driven decision-making, leading to a 15% increase in operational efficiency.",
      },
    ],
  },
  {
    course_id: 2,
    course_name: "AIOps Foundation",
    course_image: CAIOPSF_Badge,
    coursePrice: 50000,
    course_introduction: [
      "In the current society where technology as a tool for data management and analysis is on the rise, the AIOps Foundation training is very valuable for IT professionals to undertake to be professionals in AI operations.",

      "This training is standard-compliant and is intended to provide practical experience to the AI Ops Foundation to solve specific business issues with the help of AIOps implementations.",

      "Build up proficiency in artificial intelligence IT practices for optimization of processing and increased productivity and minimal unproductiveness.",

      "Understand how to apply Machine Learning to discover abnormalities and prognosis of product/asset failures.",

      "Enhance data processing abilities and automation of work with the goal of employing them for quicker issue escalation and handling.",

      "Gather expertise on DevOps and SRE practices for maintaining a product without requiring constant rectification.",

      "Improve your chances of getting hired by employers by earning recognized training in a growing field.",

      "Specialized in Audio & Video, Radush is a professional consultant and focuses on product development, rearranging, and modifying using advanced techniques.",

      "So overall, when you become AI Ops Foundation certified, you will be in a perfect place to drive innovation and optimization in the IT operations of any company, whatever sphere it might be, and develop with Radush high-quality and unique solutions for concrete problems of the industry.",
    ],
    course_outline: [
      {
        title: "Introduction to AIOps:",
        detail: [
          "AIOps Foundation: Definition, core concepts, and historical context.",

          "AIOps Implementation in Organizations: Challenges, benefits, and best practices.",
        ],
      },
      {
        title: "Data Collection and Standardization:",
        detail: [
          "Core Technologies: Data Handling: Data ingestion, cleansing, normalization, and storage techniques.",

          "Data sources and types in IT operations.",
        ],
      },
      {
        title: "Anomaly Detection:",
        detail: [
          "Core Technologies: Machine Learning (ML): Supervised and unsupervised learning algorithms for anomaly detection.",

          "Statistical methods and pattern recognition in AIOps.",
        ],
      },
      {
        title: "Causal Analysis:",
        detail: [
          "Root cause determination techniques.",

          "Correlation vs. causation in IT incidents.",
        ],
      },
      {
        title: "Prediction and Trend Identification:",
        detail: [
          "Predictive analytics in AIOps.",

          "Time series analysis and forecasting methods.",
        ],
      },
      {
        title: "Intelligent Remediation and Automation:",
        detail: [
          "Automated incident response and resolution.",

          "Self-healing systems and proactive maintenance.",
        ],
      },
      {
        title: "Streamlining Alert Management:",
        detail: [
          "AIOps and Operational Metrics: Key performance indicators (KPIs) and their optimization.",

          "Alert correlation, prioritization, and noise reduction techniques.",
        ],
      },
      {
        title: "The Future of AIOps and Data Analytics:",
        detail: [
          "Emerging trends and technologies in AIOps.",

          "Integration with other IT management paradigms (e.g., DevOps, CloudOps).",
        ],
      },
      {
        title: "AIOps Platforms:",
        detail: [
          "Overview of popular AIOps tools and platforms.",

          "Selection criteria and implementation considerations.",
        ],
      },
      {
        title: "AIOps Use Cases and Organizational Mindset:",
        detail: [
          "Real-world applications of AIOps across industries.",

          "Cultivating an AIOps culture within organizations.",
        ],
      },
      {
        title: "Evaluating the Impact of AIOps:",
        detail: [
          "Measuring ROI and performance improvements.",

          "Continuous improvement and optimization strategies.",
        ],
      },
    ],
    benefits: [
      "Expanded career prospects in emerging AI-driven operational domains.",

      "Mastery of advanced IT operational management techniques.",

      "Improved cross-functional collaboration skills.",

      "Increased earning potential and accelerated professional advancement.",

      "A recognized qualification in AI-enhanced operations.",

      "Unlocked pathways for upward mobility in tech careers.",

      "Spearheaded transformative initiatives within enterprises.",
    ],
    target: [
      "IT Operations Managers",

      "DevOps Engineers",

      "Site Reliability Engineers",

      "Network Administrators",

      "Systems Analysts",

      "Cloud Architects",

      "Data Center Managers",

      "IT Service Managers",

      "Infrastructure Specialists",

      "Automation Engineers",

      "NOC Technicians",

      "IT Project Managers",

      "Database Administrators",
    ],
    faq: [
      {
        question:
          "How would this training and certification help professionals?",
        answer:
          "The SRE Foundation training enhances professionals' skills in reliability engineering, increasing job prospects and earning potential. According to a DevOps Institute survey, 63% of organizations are adopting SRE practices, indicating a growing demand for certified professionals.",
      },
      {
        question:
          "Who would gain the most value from pursuing the SRE Foundation?",
        answer:
          "DevOps Engineers, System Administrators, and IT Operations Managers would benefit most from the SRE Foundation. A Gartner report shows these roles experienced a 58% increase in demand for SRE skills in the past year.",
      },
      {
        question:
          "Could you give an overview of what the SRE Foundation entails and how it equips certificate holders?",
        answer:
          "The SRE Foundation training and certification covers reliability principles, service level objectives, and error budgets. It equips holders with practical skills to implement SRE practices, improving system reliability by up to 25% according to a Google Cloud study.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the SRE Foundation?",
        answer:
          "Career opportunities include Site Reliability Engineer, DevOps Specialist, and Infrastructure Engineer. A recent Stack Overflow survey indicates a 40% increase in job postings requiring SRE skills across these roles.",
      },
      {
        question:
          "In what ways is the SRE Foundation applicable and useful within the industry?",
        answer:
          "The SRE Foundation training is applicable in improving system reliability, reducing downtime, and enhancing scalability. Forrester Research reports that organizations implementing SRE practices see a 45% reduction in mean time to recovery (MTTR) for incidents.",
      },
      {
        question:
          "How long does the SRE Foundation remain valid before needing to be renewed?",
        answer:
          "Lifetime validity assures certificate holders that their credentials will never require renewal payments.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved SRE Foundation status?",
        answer:
          "Organizations can expect improved system reliability, faster incident resolution, and enhanced scalability. A DORA study shows that companies with SRE-certified staff report a 35% improvement in overall system performance and availability.",
      },
    ],
  },
  {
    course_id: 3,
    course_name: "Site Reliability Engineering Foundation",
    course_image: CSREF_Badge,
    coursePrice: 50000,
    course_introduction: [
      "The Site Reliability Engineering (SRE) Foundation certification is a tool that each organization's key employee planning to stay relevant in the field of system reliability and scalability should possess.",

      "Currently, Radush is a progressive training and consulting organization operating since 2022, and this certification is crucial for IT specialists who need to learn how to contain high-stake and high-velocity systems.",

      "The SRE Foundation training is developed with a lot of precision in order to ensure that it covers all industry benchmarks and offers practical experience in the functioning of SRE concepts.",

      "As such, Radush, relying on a highly qualified staff of consultants, focuses on individual approaches aimed at the improvement of different products and employing up-to-date technologies.",

      "Forward-thinking organizations would consider themselves lucky to have someone on their team with this training as this proves that the candidate has the capacity to ensure site reliability and at the same time maintain the rate of innovation.",
    ],
    course_outline: [
      {
        title: "Module 1: SRE Overview",
        detail: [
          "Introduction to Site Reliability Engineering (SRE)",
          "Definition and core principles of SRE",

          "History and evolution of SRE",

          "Comparison with traditional IT operations",

          "The Production Environment From the Viewpoint of an SRE",

          "Understanding complex distributed systems",

          "Key components of modern production environments",

          "Scalability, reliability, and performance considerations",

          "Exercise: Mapping Your Production Environment",

          "Identifying critical services and dependencies",

          "Documenting infrastructure components",

          "Analyzing potential bottlenecks and single points of failure",
        ],
      },
      {
        title: "Module 2: TOIL",
        detail: [
          "Understanding TOIL in SRE context",
          "Definition and characteristics of TOIL",
          "Impact of TOIL on team productivity and morale",
          "Identifying TOIL in daily operations",
          "Common sources of TOIL",
          "TOIL measurement techniques",
          "Strategies for reducing and eliminating TOIL",
          "Automation opportunities",
          "Process improvements",
          "Architectural changes to reduce operational burden",
        ],
      },
      {
        title: "Module 3: SLO's, SLI's and Error Budgets",
        detail: [
          "Service Level Objectives (SLOs)",
          "Defining meaningful SLOs",
          "Balancing reliability and feature velocity",
          "Service Level Indicators (SLIs)",
          "Choosing appropriate SLIs for different services",
          "Implementing SLI measurement",
          "Error Budgets",
          "Concept and calculation of error budgets",
          "Using error budgets to drive decision-making",
          "Balancing reliability work with feature development",
        ],
      },
      {
        title: "Module 4: Monitoring and Service Level Indicators",
        detail: [
          "Fundamentals of effective monitoring",
          "Types of monitoring: black-box vs. white-box",
          "Monitoring system architecture",
          "Implementing Service Level Indicators (SLIs)",
          "Techniques for measuring SLIs",
          "Integration with monitoring systems",
          "Alert design and management",
          "Creating actionable alerts",
          "Avoiding alert fatigue",
          "Visualization and dashboards",
          "Effective data presentation",
          "Real-time vs. historical data visualization",
        ],
      },
      {
        title: "Module 5: Managing Incidents",
        detail: [
          "Incident response process",
          "Roles and responsibilities during incidents",
          "Communication protocols",
          "Incident classification and prioritization",
          "Severity levels and their implications",
          "Escalation procedures",
          "Effective troubleshooting techniques",
          "Systematic approach to problem-solving",
          "Using monitoring and logging data effectively",
          "Post-incident activities",
          "Conducting effective post-mortems",
          "Implementing and tracking follow-up actions",
        ],
      },
      {
        title: "Module 6: Anti-Fragility and Learning from Failure",
        detail: [
          "Principles of anti-fragility in systems design",
          "Building systems that improve from stress",
          "Proactive vs. reactive approaches to reliability",
          "Chaos engineering",
          "Principles and practices of chaos engineering",
          "Designing and running chaos experiments",
          "Blameless post-mortem culture",
          "Fostering a culture of learning from failures",
          "Techniques for conducting effective post-mortems",
          "Continuous improvement processes",
          "Implementing feedback loops",
          "Measuring and tracking reliability improvements",
        ],
      },
      {
        title: "Module 7: Organizational Impact of SRE",
        detail: [
          "SRE team structure and interactions",
          "Models for integrating SRE within organizations",
          "Collaboration between SRE and development teams",
          "Building and maintaining SRE culture",
          "Key cultural aspects of successful SRE teams",
          "Strategies for cultural transformation",
          "Measuring SRE effectiveness",
          "Key performance indicators for SRE",
          "Demonstrating value to stakeholders",
        ],
      },
      {
        title: "Module 8: SRE Tools and Automation",
        detail: [
          "Overview of common SRE tools",
          "Monitoring and observability platforms",
          "Configuration management and infrastructure-as-code tools",
          "Continuous integration and deployment systems",
          "Automation principles and practices",
          "Identifying automation opportunities",
          "Balancing automation with Human Oversight",
          "Developing custom tools and scripts",
          "Best practices for writing maintainable automation code",
          "Version control and documentation for tools",
          "Evaluating and adopting new technologies",
          "Assessing the impact of new tools on reliability",
          "Managing technical debt in tooling",
        ],
      },
    ],
    course_benefits: [
      "Boost your marketability and expand your professional horizons.",

      "Elevate system stability and optimize operational continuity.",

      "Streamline repetitive tasks, reducing the need for human intervention.",

      "Maximize uptime and reinforce infrastructure resilience.",

      "Gain a significant edge in the competitive employment landscape.",

      "Cultivate a trajectory of continuous skill enhancement and expertise acquisition.",

      "Develop a comprehensive grasp of system architectures and their interconnections.",

      "Implement proactive issue detection to mitigate the financial impact of failures.",

      "Collaborate with cross-functional teams to define and quantify success metrics.",
    ],
    course_target: [
      "Site Reliability Engineers",
      "DevOps Engineers",
      "Systems Administrators",
      "Network Engineers",
      "Cloud Engineers",
      "Infrastructure Engineers",
      "Platform Engineers",
      "Operations Managers",
      "IT Service Managers",
      "Software Developers",
      "Quality Assurance Engineers",
      "Database Administrators",
    ],
    faqTitle: "FAQs",
    course_faq: [
      {
        question:
          "How would this training and certification help professionals?",
        answer:
          "The SRE Foundation training enhances professionals' skills in reliability engineering, increasing job prospects and earning potential. According to a DevOps Institute survey, 63% of organizations are adopting SRE practices, indicating a growing demand for certified professionals.",
      },
      {
        question:
          "Who would gain the most value from pursuing the SRE Foundation?",
        answer:
          "DevOps Engineers, System Administrators, and IT Operations Managers would benefit most from the SRE Foundation. A Gartner report shows these roles experienced a 58% increase in demand for SRE skills in the past year.",
      },
      {
        question:
          "Could you give an overview of what the SRE Foundation entails and how it equips certificate holders?",
        answer:
          "The SRE Foundation training and certification covers reliability principles, service level objectives, and error budgets. It equips holders with practical skills to implement SRE practices, improving system reliability by up to 25% according to a Google Cloud study.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the SRE Foundation?",
        answer:
          "Career opportunities include Site Reliability Engineer, DevOps Specialist, and Infrastructure Engineer. A recent Stack Overflow survey indicates a 40% increase in job postings requiring SRE skills across these roles.",
      },
      {
        question:
          "In what ways is the SRE Foundation applicable and useful within the industry?",
        answer:
          "The SRE Foundation training is applicable in improving system reliability, reducing downtime, and enhancing scalability. Forrester Research reports that organizations implementing SRE practices see a 45% reduction in mean time to recovery (MTTR) for incidents.",
      },
      {
        question:
          "How long does the SRE Foundation remain valid before needing to be renewed?",
        answer:
          "Lifetime validity assures certificate holders that their credentials will never require renewal payments.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved SRE Foundation status?",
        answer:
          "Organizations can expect improved system reliability, faster incident resolution, and enhanced scalability. A DORA study shows that companies with SRE-certified staff report a 35% improvement in overall system performance and availability.",
      },
    ],
  },
  {
    course_id: 4,
    course_name: "SRE Practitioner",
    course_image: CSREP_Badge,
    coursePrice: 50000,
    course_introduction: [
      "The SRE Practitioner capability certification in IT gives IT practitioners a chance to advance their careers. An advanced certification that is provided by Radush, this training prepares you to tackle more intricate reliability issues in order to help turn your organization into success.",

      "Learn enhanced SRE strategies to increase the system availability and efficiency by multiple folds.",

      "Acquire strategic competencies in the creation and especially the management of complex service-level targets.",

      "The blend also helps one to understand how to manage large-scale infrastructures and drive cultural changes in IT.",

      "Acquire more knowledge in the new monitoring, automation, and incident handling approaches.",

      "Radush SRE Practitioner training, created by leaders in the field, provides tangible, usable information that can be put to use right away. This training will place you among the new generation of IT specialists ready to design and manage the sound, efficient systems that underpin the modern digital world. Future-proof your career now and become a valuable addition to the strategy of modern organizations in the IT sector.",
    ],
    course_outline: [
      {
        title: "SRE Principles & Practices",
        detail: [
          "What is Site Reliability Engineering?",

          "Resilience and Reliability Planning",

          "SRE & DevOps: What is the Difference?",

          "SRE Principles & Practices",

          "Importance and need for this SRE role",

          "Recommended Case Study: DevOps failure healed with SRE",
        ],
      },
      {
        title: "SLI/SLO/SLA & Error Budgets",
        detail: [
          "Service Level Objectives (SLO's)",

          "SLI - Indicators in Practice",

          "SLO vs SLA",

          "Guidance on setting SLOs and SLIs",

          "Control Measures",

          "Golden Signals",

          "Error Budgets",

          "Error Budget Policies",

          "Recommended Case Study: Considerable Scenarios for SLI/SLO/SLA",
        ],
      },
      {
        title: "Reducing Toil",
        detail: [
          "What is Toil?",

          "Why is Toil Bad?",

          "Doing Something About Toil",

          "How to identify a TOIL in our own space",

          "Technical Debt vs TOIL",

          "Types/categories of TOIL",

          "When we cannot consider an activity as a TOIL",

          "Recommended Case Study: How to Reduce Toils with Automation",
        ],
      },
      {
        title: "SRE Project Build & Transition Approach",
        detail: [
          "Why SRE to be involved in Build & Transition",

          "Design Assessment",

          "Potential Deliverables & Recommendations",

          "Production readiness review",

          "Risk Management - Identification, prioritization, and mitigation",
        ],
      },
      {
        title: "High Availability and Capacity Planning",
        detail: [
          "High Availability Concept",

          "Business Continuity Management",

          "Considerable DR Scenarios",

          "High Availability and handling Unpredicted Load",
        ],
      },
      {
        title: "SRE Tools & Automation",
        detail: [
          "Automation Defined (E2E Thinking)",

          "Automation Focus",

          "Hierarchy of Automation Types",

          "Secure Automation",
        ],
      },
      {
        title: "DevOps CI/CD Toolchain and Pipeline",
        detail: [
          "SDLC Model",

          "Waterfall Model",

          "Agile",

          "Lean Development",

          "DevOps Principles",

          "DevOps vs SRE",
        ],
      },
      {
        title: "Chaos Engineering",
        detail: [
          "What is Chaos Engineering?",

          "Chaos Test",

          "Alternate Chaos Test Tools",
        ],
      },
      {
        title: "Communication and Collaboration",
        detail: [
          "Why proper communication is important",

          "Effective tools for Communication",

          "Agile Approach with Lean way",
        ],
      },
      {
        title: "Testing for Reliability",
        detail: [
          "Relationships Between Testing and Mean Time to Repairs",

          "Types of Software Testing",

          "Creating a Test and Build Environment",

          "Testing at Scale",

          "Encourage Proactive Testing",
        ],
      },
      {
        title: "Managing Incidents",
        detail: [
          "Why Organizations Embrace SRE",

          "Patterns for SRE Adoption",

          "Sustainable Incident Response",

          "Blameless Post-Mortems",

          "SRE & Scale",

          "The Anatomy of an Unmanaged Incident",

          "Elements of Incident Management Process",

          "Managed Incidents",

          "Best Practices for Incident Management",

          "Recommended Case Study: Unmanaged vs Managed Incidents, Industry Use cases and practices followed by Cloud Service Providers to maintain reliability (Use Cases with Practical Mapping with Scenarios)",
        ],
      },
      {
        title: "Emergency Response",
        detail: [
          "Process of Troubleshooting",

          "Effective Troubleshooting",

          "Common Pitfalls",

          "Effective handling of RCA with Problem Management",

          "Making Troubleshooting Easier",
        ],
      },
      {
        title: "Effective Troubleshooting",
        detail: [
          "Why Organizations Embrace SRE",

          "Patterns for SRE Adoption",

          "Sustainable Incident Response",

          "Blameless Post-Mortems",

          "SRE & Scale",

          "Practices followed by Cloud Service Providers to maintain reliability",
        ],
      },
      {
        title: "Anti-Fragility & Learning from Failure",
        detail: [
          "Why Learn from Failure",

          "Benefits of Anti-Fragility",

          "Shifting the Organizational Balance",
        ],
      },
      {
        title: "SRE, Other Frameworks, Trends",
        detail: [
          "SRE & Other Frameworks",

          "SRE Evolution",

          "Culture Setting for SRE",

          "Continuous Improvement cycle",

          "SRE Project Build & Transition Approach",

          "SRE After Go-live 'Run' Approach",

          "SRE Package",
        ],
      },
    ],
    course_benefits: [
      "Broadened professional horizons",

      "Market-leading expertise advantage",

      "Elevated earning potential",

      "Boosted industry reputation and authority",

      "Improved workplace productivity and effectiveness",

      "Rich opportunities for professional connections",

      "Accelerated career growth trajectory",

      "Up-to-date industry knowledge and skills",

      "Global employment prospects unlocked",
    ],
    course_target: [
      "DevOps Engineers",

      "System Administrators",

      "Cloud Operations Engineers",

      "Infrastructure Architects",

      "IT Operations Managers",

      "Platform Engineers",

      "Network Engineers",

      "Software Developers",

      "Quality Assurance Engineers",

      "Release Engineers",

      "Performance Engineers",

      "Automation Specialists",

      "IT Service Managers",
    ],
    course_faq: [
      {
        question: "How would this certificate help professionals?",
        answer:
          "The SRE Practitioner certificate enhances professionals' advanced skills in reliability engineering, boosting career prospects and earning potential. A Puppet State of DevOps report shows that organizations with mature SRE practices are 4.1 times more likely to have high-performing IT teams.",
      },
      {
        question:
          "Who would gain the most value from pursuing the SRE Practitioner?",
        answer:
          "Experienced Site Reliability Engineers, Senior DevOps Engineers, and IT Operations Managers would benefit most from the SRE Practitioner. LinkedIn's 2023 Jobs on the Rise report indicates a 34% year-over-year growth in SRE-related roles.",
      },
      {
        question:
          "Could you give an overview of what the SRE Practitioner entails and how it equips certificate holders?",
        answer:
          "The SRE Practitioner covers advanced reliability principles, complex service level objectives, and sophisticated error budget management. It equips holders with in-depth skills to implement and lead SRE practices, improving system reliability by up to 40% according to a Google Cloud case study.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the SRE Practitioner?",
        answer:
          "Career opportunities include Senior Site Reliability Engineer, SRE Team Lead, and DevOps Architect. A recent Dice Tech Job Report shows a 52% increase in job postings requiring advanced SRE skills across these roles.",
      },
      {
        question:
          "In what ways is the SRE Practitioner applicable and useful within the industry?",
        answer:
          "The SRE Practitioner is applicable in optimizing large-scale systems, implementing advanced monitoring solutions, and driving cultural change. Gartner reports that organizations with skilled SRE practitioners achieve 60% faster time-to-market for new features.",
      },
      {
        question:
          "How long does the SRE Practitioner remain valid before needing to be renewed?",
        answer:
          "The SRE Practitioner certification is valid for a lifetime. Renewal ensures professionals stay at the forefront of evolving SRE technologies and industry best practices.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved SRE Practitioner status?",
        answer:
          "Organizations can expect significant improvements in system reliability, incident response times, and overall operational efficiency. An IDC study shows that companies with SRE Practitioner-certified staff report a 55% reduction in unplanned downtime.",
      },
    ],
  },
  {
    course_id: 5,
    course_name: "DevSecOps Foundation",
    course_image: CDSOF__Badge,
    coursePrice: 50000,
    course_introduction: [
      "The DevSecOps Foundation training is a crucial stepping stone for IT professionals aiming to integrate security seamlessly into the software development lifecycle.",

      "Where security breaches can be catastrophic, this training equips you with the skills to build and maintain secure, efficient, and reliable systems from the ground up.",

      "You'll learn to break down silos between development, operations, and security teams, fostering a culture of shared responsibility for security. By earning this training, you'll be well-prepared to lead the charge in creating more secure, resilient software systems in any organization.",

      "With Radush's expertise in cutting-edge technologies and custom solutions, you'll gain insights that are immediately relevant.",
    ],
    course_outline: [
      {
        title: "Foundations of DevSecOps",
        detail: [
          "Core concepts and definitions",

          "Historical context and evolution from DevOps",

          "Importance in modern software development",

          "Key principles and best practices",

          "Business benefits and ROI of DevSecOps",
        ],
      },
      {
        title: "Secure Development Lifecycle",
        detail: [
          "Incorporating security at every stage of SDLC",

          "Threat modeling techniques and methodologies",

          "Security requirements gathering",

          "Secure coding practices and guidelines",

          "Static and dynamic security testing",

          "Code review processes for security",
        ],
      },
      {
        title: "Automating Security",
        detail: [
          "Automation and orchestration in security processes",

          "Continuous integration and continuous delivery (CI/CD) security",

          "Infrastructure as Code (IaC) security",

          "Automated vulnerability scanning and management",

          "Security tools integration (SAST, DAST, IAST, SCA)",

          "Containerization and microservices security",
        ],
      },
      {
        title: "Culture and Collaboration",
        detail: [
          "Fostering a security-first culture",

          "Building and managing cross-functional teams",

          "Effective communication strategies for security",

          "Training and awareness programs",

          "Incident response and blameless post-mortems",

          "Metrics and KPIs for DevSecOps success",
        ],
      },
      {
        title: "Governance and Compliance",
        detail: [
          "Integrating compliance into DevSecOps processes",

          "Understanding regulatory requirements (e.g., GDPR, HIPAA, PCI-DSS)",

          "Risk management and assessment in DevSecOps",

          "Security policies and standards implementation",

          "Audit trails and documentation",

          "Third-party risk management in the software supply chain",
        ],
      },
      {
        title: "Cloud Security in DevSecOps",
        detail: [
          "Cloud-native security considerations",

          "Securing multi-cloud and hybrid environments",

          "Identity and Access Management (IAM) in the cloud",

          "Data protection and encryption strategies",
        ],
      },
      {
        title: "Continuous Monitoring and Improvement",
        detail: [
          "Real-time security monitoring and alerting",

          "Security information and event management (SIEM)",

          "Threat intelligence integration",

          "Feedback loops for continuous improvement",

          "Performance measurement and optimization",
        ],
      },
    ],
    course_benefits: [
      "Confirms cybersecurity expertise",

      "Amplifies employability prospects",

      "Unlocks professional advancement opportunities",

      "Elevates income possibilities",

      "Proves proficiency in secure DevOps practices",

      "Ensures cutting-edge knowledge retention",

      "Broadens industry connections",

      "Illustrates dedication to cybersecurity",

      "Acquires hands-on security capabilities",
    ],
    course_target: [
      "DevOps Engineers",

      "Security Engineers",

      "Software Developers",

      "IT Operations Managers",

      "Application Security Specialists",

      "Cloud Security Architects",

      "Quality Assurance Engineers",

      "Release Managers",

      "Systems Administrators",

      "Information Security Analysts",

      "Compliance Officers",

      "Network Security Engineers",

      "IT Project Managers",

      "Cyber Risk Analysts",

      "Infrastructure Engineers",

      "Scrum Masters",
    ],
    course_faq: [
      {
        question: "How would this certificate help professionals?",
        answer:
          "The DevSecOps Foundation Training enhances professionals' skills in integrating security into DevOps practices, increasing job prospects and earning potential. According to a Puppet State of DevOps report, organizations with mature DevSecOps practices are 2.6 times more likely to have high-performing IT teams.",
      },
      {
        question:
          "Who would gain the most value from pursuing the DevSecOps Foundation Training?",
        answer:
          "DevOps Engineers, Security Specialists, and Software Developers would benefit most from the DevSecOps Foundation Training. A recent GitLab survey indicates that 65% of organizations are adopting DevSecOps practices, creating a high demand for skilled professionals.",
      },
      {
        question:
          "Could you give an overview of what the DevSecOps Foundation Training entails and how it equips certificate holders?",
        answer:
          "The DevSecOps Foundation Training covers security integration throughout the software development lifecycle, automated security testing, and compliance in agile environments. It equips holders with skills to implement DevSecOps practices, potentially reducing security vulnerabilities by up to 50% according to a Synopsys study.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the DevSecOps Foundation Training?",
        answer:
          "Career opportunities include DevSecOps Engineer, Application Security Specialist, and Cloud Security Architect. A LinkedIn Emerging Jobs Report shows a 40% annual growth in roles requiring DevSecOps skills.",
      },
      {
        question:
          "In what ways is the DevSecOps Foundation Training applicable and useful within the industry?",
        answer:
          "The DevSecOps Foundation Training is applicable in enhancing software security, streamlining development processes, and ensuring regulatory compliance. Gartner reports that by 2023, 90% of software development projects will claim to follow DevSecOps practices.",
      },
      {
        question:
          "How long does the DevSecOps Foundation Training remain valid before needing to be renewed?",
        answer:
          "The DevSecOps Foundation Training stands out by not expiring, saving certificate holders time and money they would otherwise spend renewing and paying fees.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved DevSecOps Foundation Training status?",
        answer:
          "Organizations can expect improved software security, faster time-to-market, and reduced security-related costs. A Forrester study shows that companies with mature DevSecOps practices achieve 50% faster time-to-market for secure software releases.",
      },
    ],
  },
  {
    course_id: 6,
    course_name: "DevSecOps Practitioner",
    course_image: CDSOP_Badge,
    coursePrice: 50000,
    course_introduction: [
      "The DevSecOps Practitioner training and certification is a must-have for the IT staff, which endeavors to lead in integrating security into DevOps. This advanced training provides you with the necessary skills to plan for, as well as manage the best DevSecOps practices in complicated systems.",

      "Learn the best, most effective DevSecOps practices in order to increase both the security and speed of the software.",

      "Acquire skills in the Automation of security testing and the continuous assessment of Computer systems.",

      "Convene culture change initiatives to systematically instill security across organizations.",

      "Broaden your knowledge in the fields of the more intricate threat modeling, and compliance regulation.",

      "It would be advisable to play the role of a leader in relation to secure software delivery.",

      "This program helps you get ready to transform the organization and covers the topics of cloud-native security, containers, and higher pipeline orchestration.",

      "Provided by Radush that is an innovative training firm, it offers up-to-date information for the condition of the quickly growing IT world which makes the holder of this training an exceptional value for any company or enterprise.",
    ],
    course_outline: [
      {
        title: "Introduction to DevSecOps",
        detail: [
          "Defining DevSecOps and its key principles, values, and practices",

          "Understanding the benefits of integrating security into development and operations",

          "Exploring the DevSecOps lifecycle and how it brings teams together",
        ],
      },
      {
        title: "DevOps Pipeline Overview",
        detail: [
          "Reviewing the major components of a DevOps pipeline",

          "Integrating security practices and testing into the pipeline",
        ],
      },
      {
        title: "Creating a DevSecOps Pipeline",
        detail: [
          "Implementing security testing like SAST, SCA, DAST into the pipeline",

          "Leveraging Security as Code practices",
          "Promoting collaboration between teams on security",
        ],
      },
      {
        title: "Secure Software Development",
        detail: [
          "Utilizing secure coding standards and best practices",
          "Conducting code reviews and vulnerability testing",

          "Designing secure software through principles like least privilege",
        ],
      },
      {
        title: "CI/CD Pipeline Security",
        detail: [
          "Building security into CI/CD pipelines via testing and scanning",

          "Ensuring secure deployment and release processes",
        ],
      },
      {
        title: "Security Automation and Orchestration",
        detail: [
          "Leveraging automation tools to streamline security tasks",

          "Implementing security orchestration for streamlined workflows",
        ],
      },
      {
        title: "Threat Modeling and Risk Management",
        detail: [
          "Identifying risks through threat modeling exercises",
          "Implementing mitigation strategies to address risks",
        ],
      },
      {
        title: "Cloud and Container Security",
        detail: [
          "Applying cloud security best practices",
          "Securing containerized environments",
        ],
      },
      {
        title: "Incident Response and Recovery",
        detail: [
          "Developing an incident response plan",
          "Implementing security incident management processes",
        ],
      },
      {
        title: "Compliance and Governance",
        detail: [
          "Understanding regulatory and compliance requirements",
          "Establishing governance models for DevSecOps",
        ],
      },
      {
        title: "DevSecOps Tools and Technologies",
        detail: ["Evaluating and selecting appropriate tools for use cases"],
      },
    ],
    course_benefits: [
      "Certified advanced security integration capabilities",

      "Confirms mastery in safeguarding continuous deployment processes",

      "Attests to regulatory adherence proficiency",
      "Showcases aptitude with security automation technologies",
      "Indicates adeptness in identifying security risks",
      "Unlocks diverse career advancement prospects",
      "Amplifies income-generating potential",
      "Equips for executive security positions",
      "Sets apart professionals in the field",
      "Boosts market value and industry desirability",
    ],
    course_target: [
      "IT Operations Managers",
      "Application Security Leads",
      "Cloud Security Architects",
      "DevSecOps Team Leads",
      "Senior QA Engineers",
      "Release Managers",
      "Systems Architects",
      "Information Security Managers",
      "Compliance Program Managers",
      "Network Security Leads",
      "IT Project Directors",
      "Cyber Risk Managers",
      "Infrastructure Team Leads",
      "Agile Coaches",
    ],
    course_faq: [
      {
        question: "How would this training help professionals?",
        answer:
          "The DevSecOps Practitioner training and certification enhances professionals' advanced skills in integrating security into DevOps, boosting career prospects and earning potential. A Forrester study shows that organizations with mature DevSecOps practices achieve 55% faster time-to-market for secure software releases.",
      },
      {
        question:
          "Who would gain the most value from pursuing the DevSecOps Practitioner?",
        answer:
          "Senior DevOps Engineers, Security Architects, and IT Operations Managers would benefit most from the DevSecOps Practitioner certification. A recent GitLab survey indicates that 72% of security professionals are adopting DevSecOps practices, creating high demand for advanced practitioners.",
      },
      {
        question:
          "Could you give an overview of what the DevSecOps Practitioner training entails and how it equips certificate holders?",
        answer:
          "The DevSecOps Practitioner covers advanced security integration, automated compliance, and threat modeling in complex environments. It equips holders with skills to lead DevSecOps transformations, potentially reducing security vulnerabilities by up to 68% according to a Synopsys study.",
      },
      {
        question:
          "What types of career opportunities are available to those who have earned the DevSecOps Practitioner?",
        answer:
          "Career opportunities include DevSecOps Team Lead, Senior Security Architect, and Cloud Security Manager. A LinkedIn Emerging Jobs Report shows a 50% annual growth in senior roles requiring advanced DevSecOps skills.",
      },
      {
        question:
          "In what ways is the DevSecOps Practitioner applicable and useful within the industry?",
        answer:
          "The DevSecOps Practitioner is applicable in leading security integration, optimizing development processes, and ensuring regulatory compliance at scale. Gartner predicts that by 2025, 70% of enterprise DevSecOps initiatives will incorporate automated security vulnerability and configuration scanning.",
      },
      {
        question:
          "How long does the DevSecOps Practitioner remain valid before needing to be renewed?",
        answer:
          "Hassle-free lifetime validity allows this training and certification holders to avoid renewal applications and payments.",
      },
      {
        question:
          "What advantages can organizations expect from employees who have achieved DevSecOps Practitioner status?",
        answer:
          "Organizations can expect improved security posture, faster delivery of secure software, and reduced security-related costs. An IDC study shows that companies with DevSecOps Practitioner-certified staff report a 62% reduction in time spent on security remediations.",
      },
    ],
  },
];

export const serviceHelper = [
  {
    image: ms,
    title: `Managed Services`,
    detail: `Streamline your operations with our managed services, designed to enhance efficiency and security across your IT environment. Our offerings include:`,
    list: [
      { li: `Network and Security Services` },
      { li: `Cloud and Data Management` },
      { li: `Communication Services` },
      { li: `Software and Application Management` },
    ],
  },
  // {
  //   image: web,
  //   title: `Web Development`,
  //   detail: `Our web application development services focus on creating fast,
  //           secure, and user-friendly web solutions that drive business growth
  //           and innovation.`,
  //   list: [
  //     { li: `Full stack` },
  //     { li: `Frontend` },
  //     { li: `Backend` },
  //     { li: `Database` },
  //     { li: `Web Application` },
  //   ],
  // },
  {
    image: mobile,
    title: `Mobile Development`,
    detail: `We design and develop mobile apps for Android and iOS devices,
            providing our clients with a robust and scalable mobile presence.`,
    list: [
      { li: `IOS` },
      { li: `Andriod` },
      { li: `Flutter` },
      { li: `React Native` },
      { li: `xamarin` },
    ],
  },
  {
    image: training,
    title: `Training`,
    detail: `Our comprehensive training programs help businesses upskill their
              workforce, driving growth and innovation.`,
    list: [
      { li: `Software Development` },
      { li: `Cloud` },
      { li: `Devops, SRE & DevSecops` },
      { li: `SoftSkills` },
      { li: `DataScience and AIOps` },
    ],
  },
  {
    image: consulting,
    title: `Consulting`,
    detail: `Our team of IT consultants helps businesses optimize their
            technology infrastructure, providing strategic guidance and support
            to drive digital transformation.`,
    list: [
      { li: `DevOps` },
      { li: `SRE` },
      { li: `DevSecOps` },
      { li: `SOC set up` },
      { li: `Business Consulting` },
    ],
  },
  {
    image: cloud,
    title: `Cloud`,
    detail: `We offer cloud-based solutions that enable our clients to store,
            manage, and process data efficiently, reducing costs and increasing
            productivity.`,
    list: [
      { li: `IaaS` },
      { li: `PaaS` },
      { li: `SaaS` },
      { li: `Build and Migrate` },
      { li: `Automation Services` },
      { li: `Managed Services` },
      { li: `All Hyperscalers - AWS, Azure, Google Cloud and others` },
    ],
  },
  {
    image: proEng,
    title: `Product engineering`,
    detail: `We provide end-to-end product engineering services, integrating innovative web development to deliver scalable, high-performance solutions:`,
    list: [
      { li: `Consultation & Strategy` },
      { li: `Design & User Experience` },
      { li: `Development & Testing` },
      { li: `Point Solutions` },
      { li: `Maintenance & Support` },
    ],
  },
];

export const policyRefund = {
  privacy: {
    title: "Privacy Statement",
    content: [
      {
        title: `SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
`,
        detail: `When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us, such as your name, address, and email address. When you browse our store,we also automatically receive your computer's internet protocol (IP). address in order to provide us with information that helps us learn about your browser and operating system. Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.`,
      },
      {
        title: `SECTION 2 - CONSENT
`,
        detail: `How do you get my consent? When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no. How do I withdraw my consent?If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at askus@radush.io
`,
      },
      {
        title: `SECTION 3 - DISCLOSURE
`,
        detail: `We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.`,
      },
      {
        title: `SECTION 4 - PAYMENT`,
        detail: `We use Stripe for processing payments. We, or Stripe, do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payments. Your purchase transaction data is only used for as long as it is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more insight,you may also want to read the terms and conditions of Stripe at https://stripe.com.`,
      },
      {
        title: `SECTION 5 - THIRD-PARTY SERVICES`,
        detail: `In general, the third-party providers used by us will only collect,use, and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by them. In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may be subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this privacy policy or our website's Terms of Service. Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites, and we encourage you to read their privacy statements.`,
      },
      {
        title: `SECTION 6 - SECURITY`,
        detail: `To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.`,
      },
      {
        title: `SECTION 7 - COOKIES`,
        detail: `We use cookies to maintain the session of your user. It is not used to personally identify you on other websites.`,
      },
      {
        title: `SECTION 8 - AGE OF CONSENT`,
        detail: `By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
`,
      },
      {
        title: `SECTION 9 - CHANGES TO THIS PRIVACY POLICY`,
        detail: `We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.`,
      },
      {
        title: `QUESTIONS AND CONTACT INFORMATION`,
        detail: `If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Officer at askus@radush.io`,
      },
    ],
  },
  terms: {
    title: `Terms and Conditions`,
    content: [
      {
        title: `Overview`,
        detail: `This website is operated by Radush Technologies Pvt Ltd. Throughout the On this site, the terms "we," "us," and “our” refer to Radush Technologies Pvt Ltd. By visiting our site and/or purchasing something from us, you engage in our “service” and agree to be bound by the following terms and conditions. By visiting our site and/or purchasing something from us, You engage in our “service” and agree to be bound by the following: terms and conditions (“Terms of Service," “Terms”), including those additional terms, conditions, and policies referenced herein and/or available by hyperlink. These terms of service apply to all users of the site, including, without limitation, users who are browsers, vendors, customers, merchants, and/or contributors of content. Please Read these Terms of Service carefully before accessing or using our website.
        
By accessing or using any part of the site, you agree to be bound by these terms of service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these terms of service are considered an offer, Acceptance is expressly limited to these terms of service. Any new Features or tools that are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any Changes constitute acceptance of those changes.`,
      },
      {
        title: `Section 1 - Online Store Terms`,
        detail: `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence, and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms, viruses,or any code of a destructive nature. A breach or violation of any of The terms will result in an immediate termination of your services.`,
      },
      {
        title: `SECTION 2 - GENERAL CONDITIONS`,
        detail: `We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.`,
      },
      {
        title: `SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION`,
        detail: `We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. This site may contain certain historical information. Historical information necessarily is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.`,
      },
      {
        title: `SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
`,
        detail: `Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`,
      },
      {
        title: `SECTION 5 - PRODUCTS OR SERVICES
`,
        detail: `Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
`,
      },
      {
        title: `SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
`,
        detail: `We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by agents, resellers or distributors. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. For more detail, please review our Returns Policy
.`,
      },
      {
        title: `SECTION 7 - OPTIONAL TOOLS`,
        detail: `We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.
`,
      },
      {
        title: `SECTION 8 - THIRD-PARTY LINKS`,
        detail: `Certain content, products and services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties. We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
`,
      },
      {
        title: `SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
`,
        detail: `If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service. You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.`,
      },
      {
        title: `SECTION 10 - PERSONAL INFORMATION`,
        detail: `Your submission of personal information through the store is governed by our Privacy Policy.
`,
      },
      {
        title: `SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
`,
        detail: `Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order). We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
`,
      },
      {
        title: `SECTION 12 - PROHIBITED USES`,
        detail: `In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.`,
      },
      {
        title: `SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY`,
        detail: `We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. In no case shall Radush Technologies Pvt Ltd, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.`,
      },
      {
        title: `SECTION 14 - INDEMNIFICATION
`,
        detail: `You agree to indemnify, defend and hold harmless Radush Technologies Pvt Ltdand our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.`,
      },
      {
        title: `SECTION 15 - SEVERABILITY`,
        detail: `In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.`,
      },
      {
        title: `SECTION 16 - TERMINATION`,
        detail: `The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
`,
      },
      {
        title: `SECTION 17 - ENTIRE AGREEMENT`,
        detail: `The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.`,
      },
      {
        title: `Section 19 - Changes to Terms of Service
`,
        detail: `You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes to our website.
`,
      },
      {
        title: `Section 20 - Contact Information
`,
        detail: `Questions about the Terms of Service should be sent to us at `,
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    subtitle: `Returns`,
    content1: [
      {
        c: `Our refund policy spans a 14-day period from the date of purchase. Regrettably, if more than 14 days have passed since your purchase, we are unable to offer a refund or exchange.
`,
        l: `Additional non-returnable items: Gift cards, Any item not in its original condition, is damaged or missing parts for reasons not due to our error.Downloadable software products
Some health and personal care items

`,
      },
      {
        c: `Given the nature of our electronically designed software and its downloadable format, it is inherently non-refundable. However, we are committed to adhering to the consumer rights regulations specific to your country before reaching a final decision on refunds.
`,
        l: `The list is not limited to this.
`,
      },
      {
        c: `If a refund is deemed necessary in accordance with your country's consumer rights, it must be claimed within fourteen days of the purchase date. Refund requests submitted after this timeframe will not be processed or granted. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.`,
        l: `To complete your return, we require a receipt or proof of purchase.
`,
      },
      {
        c: `Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
`,
        l: `Please do not send your purchase back to the manufacturer.
`,
      },
    ],
    content: [
      {
        title: `Refunds (if applicable)
`,
        detail: `Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.`,
      },
      {
        title: `Late or missing refunds (if applicable)
`,
        detail: `If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you've done all of this and you still have not received your refund yet, please contact us at :-askus@radush.io`,
      },
      {
        title: `Sale items (if applicable)
`,
        detail: `Only regular priced items may be refunded, unfortunately sale items cannot be refunded.

`,
      },
      {
        title: `Exchanges (if applicable)
`,
        detail: `We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at :-askus@radush.io

`,
      },
      {
        title: `Shipping
`,
        detail: `To return your product, please contact : askus@radush.io You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund. Depending on where you live, the time it may take for your exchanged product to reach you, may vary. If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.

`,
      },
      {
        title: `Gifts`,
        detail: `If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you. If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.`,
      },
    ],
  },
};
