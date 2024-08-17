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
    courseId: 1,
    courseTitle: "Data Science Professional",
    image: CDSP_Badge,
    introduction: [
      {
        intro:
          "Thus, getting the Data Science Professional training and certification is definitely worth it for every aspiring data science professional who wants to have portable proof of his competitive generalist skill set in data science and analytics. From Radush, an approved training partner of GSDC, the certification guarantees that one shall get training that meets standards and an opportunity to gain practical experience.",
      },
      {
        intro:
          "The CDP training provides the knowledge and skills necessary to work with the most up-to-date tools and frameworks for data handling and analysis, which allows you to develop solutions tailored to big data sets.",
      },
      {
        intro:
          "The training affirms your competence in the utilization of sophisticated methods in machine learning, and the application of predictive models and data engineering to provide optimal and practical data-based solutions.",
      },
      {
        intro:
          "By completing the Certified Data Science Professional program, you distinguish yourself assuring potential employers and clients that you are a professional with enhancement skills.",
      },
      {
        intro:
          "Radush, established in 2022, specializes in offering custom solutions for various products such as tools, applications, and infrastructure which employ a pool of consultants with vast experience in searching for potential areas of improvement for the client.",
      },
    ],
    outline: [
      {
        title: "Data Science Introduction",
        detail: [
          {
            point:
              "Overview of Data Science: Definition, Importance, and Applications",
          },
          {
            point: "Key Concepts and Terminology in Data Science",
          },
          {
            point:
              "The Data Science Lifecycle: Problem Definition, Data Collection, Data Preparation, Data Analysis, and Interpretation",
          },
          {
            point:
              "Tools and Technologies in Data Science: Python, R, SQL, etc.",
          },
          {
            point:
              "Introduction to Data Science Roles: Data Scientist, Data Analyst, Data Engineer, and their Responsibilities",
          },
        ],
      },
      {
        title: "Probability and Statistics for Data Science",
        detail: [
          {
            point:
              "Basic Probability Concepts: Probability Theory, Random Variables, Probability Distributions",
          },
          {
            point:
              "Statistical Methods: Descriptive Statistics, Inferential Statistics, Hypothesis Testing",
          },
          {
            point: "Correlation and Regression Analysis",
          },
          {
            point: "Bayesian Statistics",
          },
          {
            point: "Importance of Probability and Statistics in Data Science",
          },
        ],
      },
      {
        title: "Working with Big Data",
        detail: [
          {
            point:
              "Introduction to Big Data: Definition, Characteristics, and Challenges",
          },
          {
            point: "Data Storage Solutions: HDFS, Cassandra, MongoDB",
          },
          {
            point: "Big Data Processing Frameworks: MapReduce, Spark",
          },
          {
            point: "Case Studies and Applications of Big Data",
          },
        ],
      },
      {
        title: "Data Extraction and Visualization Techniques",
        detail: [
          {
            point: "Data Extraction Techniques: Web Scraping, APIs, Databases",
          },
          {
            point:
              "Data Cleaning and Preparation: Handling Missing Values, Data Transformation, Data Integration",
          },
          {
            point:
              "Introduction to Data Visualization: Importance, Principles, and Tools",
          },
          {
            point:
              "Visualization Techniques: Charts, Graphs, Plots, Dashboards",
          },
          {
            point: "Tools for Data Visualization: Matplotlib, Seaborn, Plotly",
          },
        ],
      },
      {
        title: "Data Mining and Machine Learning",
        detail: [
          {
            point:
              "Fundamentals of Data Mining: Concepts, Techniques, and Applications",
          },
          {
            point:
              "Machine Learning Overview: Supervised, Unsupervised, and Reinforcement Learning",
          },
          {
            point:
              "Key Algorithms: Regression, Classification, Clustering, Association",
          },
          {
            point: "Model Evaluation and Validation Techniques",
          },
          {
            point: "Practical Applications of Data Mining and Machine Learning",
          },
        ],
      },
      {
        title: "A Statistical Approach for Data Science",
        detail: [
          {
            point:
              "Advanced Statistical Methods: Multivariate Analysis, Time Series Analysis, Survival Analysis",
          },
          {
            point:
              "Statistical Inference: Estimation, Confidence Intervals, Significance Testing",
          },
          {
            point: "Experimental Design and Analysis",
          },
          {
            point: "Statistical Software: R, Python (statsmodels, SciPy)",
          },
          {
            point:
              "Real-world Applications of Statistical Methods in Data Science",
          },
        ],
      },
      {
        title: "Text Mining & NLP (Natural Language Processing)",
        detail: [
          {
            point:
              "Introduction to Text Mining: Techniques, Applications, and Challenges",
          },
          {
            point:
              "NLP Fundamentals: Text Preprocessing, Tokenization, Stemming, Lemmatization",
          },
          {
            point:
              "Text Classification, Sentiment Analysis, and Topic Modeling",
          },
          {
            point:
              "Advanced NLP Techniques: Word Embeddings, Transformers, BERT, GPT",
          },
          {
            point: "Tools for Text Mining and NLP: NLTK, SpaCy, Gensim",
          },
        ],
      },
      {
        title: "Data Visualization Using Tableau",
        detail: [
          {
            point: "Introduction to Tableau: Overview and Installation",
          },
          {
            point: "Connecting to Data Sources in Tableau",
          },
          {
            point:
              "Creating Basic Visualizations: Bar Charts, Line Charts, Pie Charts",
          },
          {
            point:
              "Advanced Visualizations: Heat Maps, Tree Maps, Scatter Plots",
          },
          {
            point: "Building Interactive Dashboards and Storytelling with Data",
          },
        ],
      },
      {
        title: "Data Visualization Using Tableau",
        detail: [
          {
            point: "Deep Dive into Tableau Features and Functionalities",
          },
          {
            point: "Advanced Data Manipulation and Calculations in Tableau",
          },
          {
            point: "Using Tableau for Exploratory Data Analysis",
          },
          {
            point: "Integrating Tableau with Other Data Science Tools",
          },
          {
            point:
              "Best Practices for Effective Data Visualization and Presentation",
          },
        ],
      },
    ],
    benefits: [
      {
        point: "Stand out among peers in the data science field",
      },
      {
        point: "Boosted potential for higher earnings and salaries",
      },
      {
        point: "Opportunity to work on unique data science projects",
      },
      {
        point: "Greater industry visibility and acknowledgment",
      },
      {
        point: "Equipped to address intricate data issues",
      },
      {
        point: "Improved trustworthiness in data-centric decision processes",
      },
      {
        point: "Edge over competitors in the data science job market",
      },
    ],
    target: [
      {
        point: "Data Analysts",
      },
      {
        point: "Business Analysts",
      },
      {
        point: "Data Engineers",
      },
      {
        point: "Machine Learning Engineers",
      },
      {
        point: "Research Scientists",
      },
      {
        point: "BI Developers",
      },
      {
        point: "BI Analysts",
      },
      {
        point: "Statisticians",
      },
      {
        point: "Data Architects",
      },
      {
        point: "Big Data Engineers",
      },
      {
        point: "AI Engineers",
      },
      {
        point: "Database Administrators",
      },
      {
        point: "Software Engineers",
      },
      {
        point: "IT Managers",
      },
      {
        point: "Analytics Managers",
      },
      {
        point: "Data Managers",
      },
    ],
    faq: [
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
    courseId: 2,
    courseTitle: "AIOps Foundation",
    image: CAIOPSF_Badge,
    introduction: [
      {
        intro:
          "In the current society where technology as a tool for data management and analysis is on the rise, the AIOps Foundation training is very valuable for IT professionals to undertake to be professionals in AI operations.",
      },
      {
        intro:
          "This training is standard-compliant and is intended to provide practical experience to the AI Ops Foundation to solve specific business issues with the help of AIOps implementations.",
      },
      {
        intro:
          "Build up proficiency in artificial intelligence IT practices for optimization of processing and increased productivity and minimal unproductiveness.",
      },
      {
        intro:
          "Understand how to apply Machine Learning to discover abnormalities and prognosis of product/asset failures.",
      },
      {
        intro:
          "Enhance data processing abilities and automation of work with the goal of employing them for quicker issue escalation and handling.",
      },
      {
        intro:
          "Gather expertise on DevOps and SRE practices for maintaining a product without requiring constant rectification.",
      },
      {
        intro:
          "Improve your chances of getting hired by employers by earning recognized training in a growing field.",
      },
      {
        intro:
          "Specialized in Audio & Video, Radush is a professional consultant and focuses on product development, rearranging, and modifying using advanced techniques.",
      },
      {
        intro:
          "So overall, when you become AI Ops Foundation certified, you will be in a perfect place to drive innovation and optimization in the IT operations of any company, whatever sphere it might be, and develop with Radush high-quality and unique solutions for concrete problems of the industry.",
      },
    ],
    outline: [
      {
        title: "Introduction to AIOps:",
        detail: [
          {
            point:
              "AIOps Foundation: Definition, core concepts, and historical context.",
          },
          {
            point:
              "AIOps Implementation in Organizations: Challenges, benefits, and best practices.",
          },
        ],
      },
      {
        title: "Data Collection and Standardization:",
        detail: [
          {
            point:
              "Core Technologies: Data Handling: Data ingestion, cleansing, normalization, and storage techniques.",
          },
          {
            point: "Data sources and types in IT operations.",
          },
        ],
      },
      {
        title: "Anomaly Detection:",
        detail: [
          {
            point:
              "Core Technologies: Machine Learning (ML): Supervised and unsupervised learning algorithms for anomaly detection.",
          },
          {
            point: "Statistical methods and pattern recognition in AIOps.",
          },
        ],
      },
      {
        title: "Causal Analysis:",
        detail: [
          {
            point: "Root cause determination techniques.",
          },
          {
            point: "Correlation vs. causation in IT incidents.",
          },
        ],
      },
      {
        title: "Prediction and Trend Identification:",
        detail: [
          {
            point: "Predictive analytics in AIOps.",
          },
          {
            point: "Time series analysis and forecasting methods.",
          },
        ],
      },
      {
        title: "Intelligent Remediation and Automation:",
        detail: [
          {
            point: "Automated incident response and resolution.",
          },
          {
            point: "Self-healing systems and proactive maintenance.",
          },
        ],
      },
      {
        title: "Streamlining Alert Management:",
        detail: [
          {
            point:
              "AIOps and Operational Metrics: Key performance indicators (KPIs) and their optimization.",
          },
          {
            point:
              "Alert correlation, prioritization, and noise reduction techniques.",
          },
        ],
      },
      {
        title: "The Future of AIOps and Data Analytics:",
        detail: [
          {
            point: "Emerging trends and technologies in AIOps.",
          },
          {
            point:
              "Integration with other IT management paradigms (e.g., DevOps, CloudOps).",
          },
        ],
      },
      {
        title: "AIOps Platforms:",
        detail: [
          {
            point: "Overview of popular AIOps tools and platforms.",
          },
          {
            point: "Selection criteria and implementation considerations.",
          },
        ],
      },
      {
        title: "AIOps Use Cases and Organizational Mindset:",
        detail: [
          {
            point: "Real-world applications of AIOps across industries.",
          },
          {
            point: "Cultivating an AIOps culture within organizations.",
          },
        ],
      },
      {
        title: "Evaluating the Impact of AIOps:",
        detail: [
          {
            point: "Measuring ROI and performance improvements.",
          },
          {
            point: "Continuous improvement and optimization strategies.",
          },
        ],
      },
    ],
    benefits: [
      {
        point:
          "Expanded career prospects in emerging AI-driven operational domains.",
      },
      {
        point: "Mastery of advanced IT operational management techniques.",
      },
      {
        point: "Improved cross-functional collaboration skills.",
      },
      {
        point:
          "Increased earning potential and accelerated professional advancement.",
      },
      {
        point: "A recognized qualification in AI-enhanced operations.",
      },
      {
        point: "Unlocked pathways for upward mobility in tech careers.",
      },
      {
        point: "Spearheaded transformative initiatives within enterprises.",
      },
    ],
    target: [
      {
        point: "IT Operations Managers",
      },
      {
        point: "DevOps Engineers",
      },
      {
        point: "Site Reliability Engineers",
      },
      {
        point: "Network Administrators",
      },
      {
        point: "Systems Analysts",
      },
      {
        point: "Cloud Architects",
      },
      {
        point: "Data Center Managers",
      },
      {
        point: "IT Service Managers",
      },
      {
        point: "Infrastructure Specialists",
      },
      {
        point: "Automation Engineers",
      },
      {
        point: "NOC Technicians",
      },
      {
        point: "IT Project Managers",
      },
      {
        point: "Database Administrators",
      },
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
    courseId: 3,
    courseTitle: "Site Reliability Engineering Foundation",
    image: CSREF_Badge,
    introduction: [
      {
        intro:
          "The Site Reliability Engineering (SRE) Foundation certification is a tool that each organization's key employee planning to stay relevant in the field of system reliability and scalability should possess.",
      },
      {
        intro:
          "Currently, Radush is a progressive training and consulting organization operating since 2022, and this certification is crucial for IT specialists who need to learn how to contain high-stake and high-velocity systems.",
      },
      {
        intro:
          "The SRE Foundation training is developed with a lot of precision in order to ensure that it covers all industry benchmarks and offers practical experience in the functioning of SRE concepts.",
      },
      {
        intro:
          "As such, Radush, relying on a highly qualified staff of consultants, focuses on individual approaches aimed at the improvement of different products and employing up-to-date technologies.",
      },
      {
        intro:
          "Forward-thinking organizations would consider themselves lucky to have someone on their team with this training as this proves that the candidate has the capacity to ensure site reliability and at the same time maintain the rate of innovation.",
      },
    ],
    outline: [
      {
        title: "Module 1: SRE Overview",
        detail: [
          { point: "Introduction to Site Reliability Engineering (SRE)" },
          { point: "Definition and core principles of SRE" },
          { point: "History and evolution of SRE" },
          { point: "Comparison with traditional IT operations" },
          { point: "The Production Environment From the Viewpoint of an SRE" },
          { point: "Understanding complex distributed systems" },
          { point: "Key components of modern production environments" },
          { point: "Scalability, reliability, and performance considerations" },
          { point: "Exercise: Mapping Your Production Environment" },
          { point: "Identifying critical services and dependencies" },
          { point: "Documenting infrastructure components" },
          {
            point:
              "Analyzing potential bottlenecks and single points of failure",
          },
        ],
      },
      {
        title: "Module 2: TOIL",
        detail: [
          { point: "Understanding TOIL in SRE context" },
          { point: "Definition and characteristics of TOIL" },
          { point: "Impact of TOIL on team productivity and morale" },
          { point: "Identifying TOIL in daily operations" },
          { point: "Common sources of TOIL" },
          { point: "TOIL measurement techniques" },
          { point: "Strategies for reducing and eliminating TOIL" },
          { point: "Automation opportunities" },
          { point: "Process improvements" },
          { point: "Architectural changes to reduce operational burden" },
        ],
      },
      {
        title: "Module 3: SLO's, SLI's and Error Budgets",
        detail: [
          { point: "Service Level Objectives (SLOs)" },
          { point: "Defining meaningful SLOs" },
          { point: "Balancing reliability and feature velocity" },
          { point: "Service Level Indicators (SLIs)" },
          { point: "Choosing appropriate SLIs for different services" },
          { point: "Implementing SLI measurement" },
          { point: "Error Budgets" },
          { point: "Concept and calculation of error budgets" },
          { point: "Using error budgets to drive decision-making" },
          { point: "Balancing reliability work with feature development" },
        ],
      },
      {
        title: "Module 4: Monitoring and Service Level Indicators",
        detail: [
          { point: "Fundamentals of effective monitoring" },
          { point: "Types of monitoring: black-box vs. white-box" },
          { point: "Monitoring system architecture" },
          { point: "Implementing Service Level Indicators (SLIs)" },
          { point: "Techniques for measuring SLIs" },
          { point: "Integration with monitoring systems" },
          { point: "Alert design and management" },
          { point: "Creating actionable alerts" },
          { point: "Avoiding alert fatigue" },
          { point: "Visualization and dashboards" },
          { point: "Effective data presentation" },
          { point: "Real-time vs. historical data visualization" },
        ],
      },
      {
        title: "Module 5: Managing Incidents",
        detail: [
          { point: "Incident response process" },
          { point: "Roles and responsibilities during incidents" },
          { point: "Communication protocols" },
          { point: "Incident classification and prioritization" },
          { point: "Severity levels and their implications" },
          { point: "Escalation procedures" },
          { point: "Effective troubleshooting techniques" },
          { point: "Systematic approach to problem-solving" },
          { point: "Using monitoring and logging data effectively" },
          { point: "Post-incident activities" },
          { point: "Conducting effective post-mortems" },
          { point: "Implementing and tracking follow-up actions" },
        ],
      },
      {
        title: "Module 6: Anti-Fragility and Learning from Failure",
        detail: [
          { point: "Principles of anti-fragility in systems design" },
          { point: "Building systems that improve from stress" },
          { point: "Proactive vs. reactive approaches to reliability" },
          { point: "Chaos engineering" },
          { point: "Principles and practices of chaos engineering" },
          { point: "Designing and running chaos experiments" },
          { point: "Blameless post-mortem culture" },
          { point: "Fostering a culture of learning from failures" },
          { point: "Techniques for conducting effective post-mortems" },
          { point: "Continuous improvement processes" },
          { point: "Implementing feedback loops" },
          { point: "Measuring and tracking reliability improvements" },
        ],
      },
      {
        title: "Module 7: Organizational Impact of SRE",
        detail: [
          { point: "SRE team structure and interactions" },
          { point: "Models for integrating SRE within organizations" },
          { point: "Collaboration between SRE and development teams" },
          { point: "Building and maintaining SRE culture" },
          { point: "Key cultural aspects of successful SRE teams" },
          { point: "Strategies for cultural transformation" },
          { point: "Measuring SRE effectiveness" },
          { point: "Key performance indicators for SRE" },
          { point: "Demonstrating value to stakeholders" },
        ],
      },
      {
        title: "Module 8: SRE Tools and Automation",
        detail: [
          { point: "Overview of common SRE tools" },
          { point: "Monitoring and observability platforms" },
          {
            point: "Configuration management and infrastructure-as-code tools",
          },
          { point: "Continuous integration and deployment systems" },
          { point: "Automation principles and practices" },
          { point: "Identifying automation opportunities" },
          { point: "Balancing automation with Human Oversight" },
          { point: "Developing custom tools and scripts" },
          { point: "Best practices for writing maintainable automation code" },
          { point: "Version control and documentation for tools" },
          { point: "Evaluating and adopting new technologies" },
          { point: "Assessing the impact of new tools on reliability" },
          { point: "Managing technical debt in tooling" },
        ],
      },
    ],
    benefits: [
      {
        point:
          "Boost your marketability and expand your professional horizons.",
      },
      {
        point: "Elevate system stability and optimize operational continuity.",
      },
      {
        point:
          "Streamline repetitive tasks, reducing the need for human intervention.",
      },
      { point: "Maximize uptime and reinforce infrastructure resilience." },
      {
        point:
          "Gain a significant edge in the competitive employment landscape.",
      },
      {
        point:
          "Cultivate a trajectory of continuous skill enhancement and expertise acquisition.",
      },
      {
        point:
          "Develop a comprehensive grasp of system architectures and their interconnections.",
      },
      {
        point:
          "Implement proactive issue detection to mitigate the financial impact of failures.",
      },
      {
        point:
          "Collaborate with cross-functional teams to define and quantify success metrics.",
      },
    ],
    target: [
      { point: "Site Reliability Engineers" },
      { point: "DevOps Engineers" },
      { point: "Systems Administrators" },
      { point: "Network Engineers" },
      { point: "Cloud Engineers" },
      { point: "Infrastructure Engineers" },
      { point: "Platform Engineers" },
      { point: "Operations Managers" },
      { point: "IT Service Managers" },
      { point: "Software Developers" },
      { point: "Quality Assurance Engineers" },
      { point: "Database Administrators" },
    ],
    faqTitle: "FAQs",
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
    courseId: 4,
    courseTitle: "SRE Practitioner",
    image: CSREP_Badge,
    introduction: [
      {
        intro:
          "The SRE Practitioner capability certification in IT gives IT practitioners a chance to advance their careers. An advanced certification that is provided by Radush, this training prepares you to tackle more intricate reliability issues in order to help turn your organization into success.",
      },
      {
        intro:
          "Learn enhanced SRE strategies to increase the system availability and efficiency by multiple folds.",
      },
      {
        intro:
          "Acquire strategic competencies in the creation and especially the management of complex service-level targets.",
      },
      {
        intro:
          "The blend also helps one to understand how to manage large-scale infrastructures and drive cultural changes in IT.",
      },
      {
        intro:
          "Acquire more knowledge in the new monitoring, automation, and incident handling approaches.",
      },
      {
        intro:
          "Radush SRE Practitioner training, created by leaders in the field, provides tangible, usable information that can be put to use right away. This training will place you among the new generation of IT specialists ready to design and manage the sound, efficient systems that underpin the modern digital world. Future-proof your career now and become a valuable addition to the strategy of modern organizations in the IT sector.",
      },
    ],
    outline: [
      {
        title: "SRE Principles & Practices",
        detail: [
          {
            point: "What is Site Reliability Engineering?",
          },
          {
            point: "Resilience and Reliability Planning",
          },
          {
            point: "SRE & DevOps: What is the Difference?",
          },
          {
            point: "SRE Principles & Practices",
          },
          {
            point: "Importance and need for this SRE role",
          },
          {
            point: "Recommended Case Study: DevOps failure healed with SRE",
          },
        ],
      },
      {
        title: "SLI/SLO/SLA & Error Budgets",
        detail: [
          {
            point: "Service Level Objectives (SLO's)",
          },
          {
            point: "SLI - Indicators in Practice",
          },
          {
            point: "SLO vs SLA",
          },
          {
            point: "Guidance on setting SLOs and SLIs",
          },
          {
            point: "Control Measures",
          },
          {
            point: "Golden Signals",
          },
          {
            point: "Error Budgets",
          },
          {
            point: "Error Budget Policies",
          },
          {
            point:
              "Recommended Case Study: Considerable Scenarios for SLI/SLO/SLA",
          },
        ],
      },
      {
        title: "Reducing Toil",
        detail: [
          {
            point: "What is Toil?",
          },
          {
            point: "Why is Toil Bad?",
          },
          {
            point: "Doing Something About Toil",
          },
          {
            point: "How to identify a TOIL in our own space",
          },
          {
            point: "Technical Debt vs TOIL",
          },
          {
            point: "Types/categories of TOIL",
          },
          {
            point: "When we cannot consider an activity as a TOIL",
          },
          {
            point:
              "Recommended Case Study: How to Reduce Toils with Automation",
          },
        ],
      },
      {
        title: "SRE Project Build & Transition Approach",
        detail: [
          {
            point: "Why SRE to be involved in Build & Transition",
          },
          {
            point: "Design Assessment",
          },
          {
            point: "Potential Deliverables & Recommendations",
          },
          {
            point: "Production readiness review",
          },
          {
            point:
              "Risk Management - Identification, prioritization, and mitigation",
          },
        ],
      },
      {
        title: "High Availability and Capacity Planning",
        detail: [
          {
            point: "High Availability Concept",
          },
          {
            point: "Business Continuity Management",
          },
          {
            point: "Considerable DR Scenarios",
          },
          {
            point: "High Availability and handling Unpredicted Load",
          },
        ],
      },
      {
        title: "SRE Tools & Automation",
        detail: [
          {
            point: "Automation Defined (E2E Thinking)",
          },
          {
            point: "Automation Focus",
          },
          {
            point: "Hierarchy of Automation Types",
          },
          {
            point: "Secure Automation",
          },
        ],
      },
      {
        title: "DevOps CI/CD Toolchain and Pipeline",
        detail: [
          {
            point: "SDLC Model",
          },
          {
            point: "Waterfall Model",
          },
          {
            point: "Agile",
          },
          {
            point: "Lean Development",
          },
          {
            point: "DevOps Principles",
          },
          {
            point: "DevOps vs SRE",
          },
        ],
      },
      {
        title: "Chaos Engineering",
        detail: [
          {
            point: "What is Chaos Engineering?",
          },
          {
            point: "Chaos Test",
          },
          {
            point: "Alternate Chaos Test Tools",
          },
        ],
      },
      {
        title: "Communication and Collaboration",
        detail: [
          {
            point: "Why proper communication is important",
          },
          {
            point: "Effective tools for Communication",
          },
          {
            point: "Agile Approach with Lean way",
          },
        ],
      },
      {
        title: "Testing for Reliability",
        detail: [
          {
            point: "Relationships Between Testing and Mean Time to Repairs",
          },
          {
            point: "Types of Software Testing",
          },
          {
            point: "Creating a Test and Build Environment",
          },
          {
            point: "Testing at Scale",
          },
          {
            point: "Encourage Proactive Testing",
          },
        ],
      },
      {
        title: "Managing Incidents",
        detail: [
          {
            point: "Why Organizations Embrace SRE",
          },
          {
            point: "Patterns for SRE Adoption",
          },
          {
            point: "Sustainable Incident Response",
          },
          {
            point: "Blameless Post-Mortems",
          },
          {
            point: "SRE & Scale",
          },
          {
            point: "The Anatomy of an Unmanaged Incident",
          },
          {
            point: "Elements of Incident Management Process",
          },
          {
            point: "Managed Incidents",
          },
          {
            point: "Best Practices for Incident Management",
          },
          {
            point:
              "Recommended Case Study: Unmanaged vs Managed Incidents, Industry Use cases and practices followed by Cloud Service Providers to maintain reliability (Use Cases with Practical Mapping with Scenarios)",
          },
        ],
      },
      {
        title: "Emergency Response",
        detail: [
          {
            point: "Process of Troubleshooting",
          },
          {
            point: "Effective Troubleshooting",
          },
          {
            point: "Common Pitfalls",
          },
          {
            point: "Effective handling of RCA with Problem Management",
          },
          {
            point: "Making Troubleshooting Easier",
          },
        ],
      },
      {
        title: "Effective Troubleshooting",
        detail: [
          {
            point: "Why Organizations Embrace SRE",
          },
          {
            point: "Patterns for SRE Adoption",
          },
          {
            point: "Sustainable Incident Response",
          },
          {
            point: "Blameless Post-Mortems",
          },
          {
            point: "SRE & Scale",
          },
          {
            point:
              "Practices followed by Cloud Service Providers to maintain reliability",
          },
        ],
      },
      {
        title: "Anti-Fragility & Learning from Failure",
        detail: [
          {
            point: "Why Learn from Failure",
          },
          {
            point: "Benefits of Anti-Fragility",
          },
          {
            point: "Shifting the Organizational Balance",
          },
        ],
      },
      {
        title: "SRE, Other Frameworks, Trends",
        detail: [
          {
            point: "SRE & Other Frameworks",
          },
          {
            point: "SRE Evolution",
          },
          {
            point: "Culture Setting for SRE",
          },
          {
            point: "Continuous Improvement cycle",
          },
          {
            point: "SRE Project Build & Transition Approach",
          },
          {
            point: "SRE After Go-live 'Run' Approach",
          },
          {
            point: "SRE Package",
          },
        ],
      },
    ],
    benefits: [
      {
        point: "Broadened professional horizons",
      },
      {
        point: "Market-leading expertise advantage",
      },
      {
        point: "Elevated earning potential",
      },
      {
        point: "Boosted industry reputation and authority",
      },
      {
        point: "Improved workplace productivity and effectiveness",
      },
      {
        point: "Rich opportunities for professional connections",
      },
      {
        point: "Accelerated career growth trajectory",
      },
      {
        point: "Up-to-date industry knowledge and skills",
      },
      {
        point: "Global employment prospects unlocked",
      },
    ],
    target: [
      {
        point: "DevOps Engineers",
      },
      {
        point: "System Administrators",
      },
      {
        point: "Cloud Operations Engineers",
      },
      {
        point: "Infrastructure Architects",
      },
      {
        point: "IT Operations Managers",
      },
      {
        point: "Platform Engineers",
      },
      {
        point: "Network Engineers",
      },
      {
        point: "Software Developers",
      },
      {
        point: "Quality Assurance Engineers",
      },
      {
        point: "Release Engineers",
      },
      {
        point: "Performance Engineers",
      },
      {
        point: "Automation Specialists",
      },
      {
        point: "IT Service Managers",
      },
    ],
    faq: [
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
    courseId: 5,
    courseTitle: "DevSecOps Foundation",
    image: CDSOF__Badge,
    introduction: [
      {
        intro:
          "The DevSecOps Foundation training is a crucial stepping stone for IT professionals aiming to integrate security seamlessly into the software development lifecycle.",
      },
      {
        intro:
          "Where security breaches can be catastrophic, this training equips you with the skills to build and maintain secure, efficient, and reliable systems from the ground up.",
      },
      {
        intro:
          "You'll learn to break down silos between development, operations, and security teams, fostering a culture of shared responsibility for security. By earning this training, you'll be well-prepared to lead the charge in creating more secure, resilient software systems in any organization.",
      },
      {
        intro:
          "With Radush's expertise in cutting-edge technologies and custom solutions, you'll gain insights that are immediately relevant.",
      },
    ],
    outline: [
      {
        title: "Foundations of DevSecOps",
        detail: [
          {
            point: "Core concepts and definitions",
          },
          {
            point: "Historical context and evolution from DevOps",
          },
          {
            point: "Importance in modern software development",
          },
          {
            point: "Key principles and best practices",
          },
          {
            point: "Business benefits and ROI of DevSecOps",
          },
        ],
      },
      {
        title: "Secure Development Lifecycle",
        detail: [
          {
            point: "Incorporating security at every stage of SDLC",
          },
          {
            point: "Threat modeling techniques and methodologies",
          },
          {
            point: "Security requirements gathering",
          },
          {
            point: "Secure coding practices and guidelines",
          },
          {
            point: "Static and dynamic security testing",
          },
          {
            point: "Code review processes for security",
          },
        ],
      },
      {
        title: "Automating Security",
        detail: [
          {
            point: "Automation and orchestration in security processes",
          },
          {
            point:
              "Continuous integration and continuous delivery (CI/CD) security",
          },
          {
            point: "Infrastructure as Code (IaC) security",
          },
          {
            point: "Automated vulnerability scanning and management",
          },
          {
            point: "Security tools integration (SAST, DAST, IAST, SCA)",
          },
          {
            point: "Containerization and microservices security",
          },
        ],
      },
      {
        title: "Culture and Collaboration",
        detail: [
          {
            point: "Fostering a security-first culture",
          },
          {
            point: "Building and managing cross-functional teams",
          },
          {
            point: "Effective communication strategies for security",
          },
          {
            point: "Training and awareness programs",
          },
          {
            point: "Incident response and blameless post-mortems",
          },
          {
            point: "Metrics and KPIs for DevSecOps success",
          },
        ],
      },
      {
        title: "Governance and Compliance",
        detail: [
          {
            point: "Integrating compliance into DevSecOps processes",
          },
          {
            point:
              "Understanding regulatory requirements (e.g., GDPR, HIPAA, PCI-DSS)",
          },
          {
            point: "Risk management and assessment in DevSecOps",
          },
          {
            point: "Security policies and standards implementation",
          },
          {
            point: "Audit trails and documentation",
          },
          {
            point: "Third-party risk management in the software supply chain",
          },
        ],
      },
      {
        title: "Cloud Security in DevSecOps",
        detail: [
          {
            point: "Cloud-native security considerations",
          },
          {
            point: "Securing multi-cloud and hybrid environments",
          },
          {
            point: "Identity and Access Management (IAM) in the cloud",
          },
          {
            point: "Data protection and encryption strategies",
          },
        ],
      },
      {
        title: "Continuous Monitoring and Improvement",
        detail: [
          {
            point: "Real-time security monitoring and alerting",
          },
          {
            point: "Security information and event management (SIEM)",
          },
          {
            point: "Threat intelligence integration",
          },
          {
            point: "Feedback loops for continuous improvement",
          },
          {
            point: "Performance measurement and optimization",
          },
        ],
      },
    ],
    benefits: [
      {
        point: "Confirms cybersecurity expertise",
      },
      {
        point: "Amplifies employability prospects",
      },
      {
        point: "Unlocks professional advancement opportunities",
      },
      {
        point: "Elevates income possibilities",
      },
      {
        point: "Proves proficiency in secure DevOps practices",
      },
      {
        point: "Ensures cutting-edge knowledge retention",
      },
      {
        point: "Broadens industry connections",
      },
      {
        point: "Illustrates dedication to cybersecurity",
      },
      {
        point: "Acquires hands-on security capabilities",
      },
    ],
    target: [
      {
        point: "DevOps Engineers",
      },
      {
        point: "Security Engineers",
      },
      {
        point: "Software Developers",
      },
      {
        point: "IT Operations Managers",
      },
      {
        point: "Application Security Specialists",
      },
      {
        point: "Cloud Security Architects",
      },
      {
        point: "Quality Assurance Engineers",
      },
      {
        point: "Release Managers",
      },
      {
        point: "Systems Administrators",
      },
      {
        point: "Information Security Analysts",
      },
      {
        point: "Compliance Officers",
      },
      {
        point: "Network Security Engineers",
      },
      {
        point: "IT Project Managers",
      },
      {
        point: "Cyber Risk Analysts",
      },
      {
        point: "Infrastructure Engineers",
      },
      {
        point: "Scrum Masters",
      },
    ],
    faq: [
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
    courseId: 6,
    courseTitle: "DevSecOps Practitioner",
    image: CDSOP_Badge,
    introduction: [
      {
        intro:
          "The DevSecOps Practitioner training and certification is a must-have for the IT staff, which endeavors to lead in integrating security into DevOps. This advanced training provides you with the necessary skills to plan for, as well as manage the best DevSecOps practices in complicated systems.",
      },
      {
        intro:
          "Learn the best, most effective DevSecOps practices in order to increase both the security and speed of the software.",
      },
      {
        intro:
          "Acquire skills in the Automation of security testing and the continuous assessment of Computer systems.",
      },
      {
        intro:
          "Convene culture change initiatives to systematically instill security across organizations.",
      },
      {
        intro:
          "Broaden your knowledge in the fields of the more intricate threat modeling, and compliance regulation.",
      },
      {
        intro:
          "It would be advisable to play the role of a leader in relation to secure software delivery.",
      },
      {
        intro:
          "This program helps you get ready to transform the organization and covers the topics of cloud-native security, containers, and higher pipeline orchestration.",
      },
      {
        intro:
          "Provided by Radush that is an innovative training firm, it offers up-to-date information for the condition of the quickly growing IT world which makes the holder of this training an exceptional value for any company or enterprise.",
      },
    ],
    outline: [
      {
        title: "Introduction to DevSecOps",
        detail: [
          {
            point:
              "Defining DevSecOps and its key principles, values, and practices",
          },
          {
            point:
              "Understanding the benefits of integrating security into development and operations",
          },
          {
            point:
              "Exploring the DevSecOps lifecycle and how it brings teams together",
          },
        ],
      },
      {
        title: "DevOps Pipeline Overview",
        detail: [
          { point: "Reviewing the major components of a DevOps pipeline" },
          {
            point:
              "Integrating security practices and testing into the pipeline",
          },
        ],
      },
      {
        title: "Creating a DevSecOps Pipeline",
        detail: [
          {
            point:
              "Implementing security testing like SAST, SCA, DAST into the pipeline",
          },
          { point: "Leveraging Security as Code practices" },
          { point: "Promoting collaboration between teams on security" },
        ],
      },
      {
        title: "Secure Software Development",
        detail: [
          { point: "Utilizing secure coding standards and best practices" },
          { point: "Conducting code reviews and vulnerability testing" },
          {
            point:
              "Designing secure software through principles like least privilege",
          },
        ],
      },
      {
        title: "CI/CD Pipeline Security",
        detail: [
          {
            point:
              "Building security into CI/CD pipelines via testing and scanning",
          },
          { point: "Ensuring secure deployment and release processes" },
        ],
      },
      {
        title: "Security Automation and Orchestration",
        detail: [
          { point: "Leveraging automation tools to streamline security tasks" },
          {
            point:
              "Implementing security orchestration for streamlined workflows",
          },
        ],
      },
      {
        title: "Threat Modeling and Risk Management",
        detail: [
          { point: "Identifying risks through threat modeling exercises" },
          { point: "Implementing mitigation strategies to address risks" },
        ],
      },
      {
        title: "Cloud and Container Security",
        detail: [
          { point: "Applying cloud security best practices" },
          { point: "Securing containerized environments" },
        ],
      },
      {
        title: "Incident Response and Recovery",
        detail: [
          { point: "Developing an incident response plan" },
          { point: "Implementing security incident management processes" },
        ],
      },
      {
        title: "Compliance and Governance",
        detail: [
          { point: "Understanding regulatory and compliance requirements" },
          { point: "Establishing governance models for DevSecOps" },
        ],
      },
      {
        title: "DevSecOps Tools and Technologies",
        detail: [
          { point: "Evaluating and selecting appropriate tools for use cases" },
        ],
      },
    ],
    benefits: [
      { point: "Certified advanced security integration capabilities" },
      {
        point:
          "Confirms mastery in safeguarding continuous deployment processes",
      },
      { point: "Attests to regulatory adherence proficiency" },
      { point: "Showcases aptitude with security automation technologies" },
      { point: "Indicates adeptness in identifying security risks" },
      { point: "Unlocks diverse career advancement prospects" },
      { point: "Amplifies income-generating potential" },
      { point: "Equips for executive security positions" },
      { point: "Sets apart professionals in the field" },
      { point: "Boosts market value and industry desirability" },
    ],
    target: [
      { point: "IT Operations Managers" },
      { point: "Application Security Leads" },
      { point: "Cloud Security Architects" },
      { point: "DevSecOps Team Leads" },
      { point: "Senior QA Engineers" },
      { point: "Release Managers" },
      { point: "Systems Architects" },
      { point: "Information Security Managers" },
      { point: "Compliance Program Managers" },
      { point: "Network Security Leads" },
      { point: "IT Project Directors" },
      { point: "Cyber Risk Managers" },
      { point: "Infrastructure Team Leads" },
      { point: "Agile Coaches" },
    ],
    faq: [
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
// {
//     courseId: 0,
//     image: badge,
//     introduction: [{ intro: `` }],
//     outline: [{ title: ``, detail: [{ point: `` }] }],
//     benefits: [{ point: `` }],
//     target: [{ point: `` }],
//   },
//   {
//     courseId: 0,
//     image: badge,
//     introduction: [{ intro: `` }],
//     outline: [{ title: ``, detail: [{ point: `` }] }],
//     benefits: [{ point: `` }],
//     target: [{ point: `` }],
//   },
//   {
//     courseId: 0,
//     image: badge,
//     introduction: [{ intro: `` }],
//     outline: [{ title: ``, detail: [{ point: `` }] }],
//     benefits: [{ point: `` }],
//     target: [{ point: `` }],
//   },
//   {
//     courseId: 0,
//     image: badge,
//     introduction: [{ intro: `` }],
//     outline: [{ title: ``, detail: [{ point: `` }] }],
//     benefits: [{ point: `` }],
//     target: [{ point: `` }],
//   },
