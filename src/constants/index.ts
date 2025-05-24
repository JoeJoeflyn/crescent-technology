import { IconApi, IconBrain, IconBuildingMosque, IconBulb, IconChartBar, IconChartLine, IconCode, IconCpu, IconDatabase, IconHome, IconLeaf, IconPhone, IconPlug, IconRobot, IconServer, IconSettingsAutomation, IconShoppingCart, IconWifi } from "@tabler/icons-react";

export const NAV_ITEMS = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "IOT",
    link: "/iot",
  },
  {
    name: "⁠AI and ML",
    link: "/ai-ml",
  },
  {
    name: "⁠Cloud",
    link: "/cloud",
  },
  {
    name: "⁠Software",
    link: "/software",
  },
  {
    name: "⁠Digital Transformation",
    link: "/dt",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export const HERO_TITLE = [
  {
    text: "EMPOWERING",
  },
  {
    text: "YOU",
  },
  {
    text: "WITH",
  },
  {
    text: "AI",
    className: "text-white",
  },
];

export const CARDS = [
  {
    bgColor: "bg-gray-800",
    title: "AI/IOT Custom Development",
    description:
      "Embedding machine learning, IoT, and automation into physical infrastructure, we enable digital transformation that is both scalable and locally relevant. Our team delivers custom-built systems with a focus on low-cost deployment, real-time analytics, and adaptive intelligence tailored to client needs.",
    image: "/IOT.png",
  },
  {
    bgColor: "bg-gray-900",
    title: "Artificial Intelligence - Generative AI",
    description:
      "Enhance AI capabilities with solutions in computer vision, object recognition, and generative AI, automating content generation and driving efficiencies across industries.",
    image: "/AI.png",
  },
  {
    bgColor: "bg-primary",
    title: "Data Analytics - Insights",
    description:
      "Unlock the potential of your data with advanced analytics solutions. We integrate multiple data sources, transforming data into actionable insights using tools like Power BI, Oracle Analytics Cloud, and AWS Quick sight.",
    image: "/Analytics.png",
  },
  {
    bgColor: "bg-slate-800",
    title: "IT Strategy & Consulting",
    description:
      "Streamline your business operations with our specialized cybersecurity, IT, and business process consulting. We ensure a smooth transition that minimizes downtime and maximizes efficiency.",
    image: "/consulting.png",
  },
  {
    bgColor: "bg-blue-950",
    title: "Cloud Migration & Modernization",
    description:
      "Specializing in AWS migration, we provide expert guidance through the complexities of moving applications, databases, and entire IT infrastructures to leading cloud platforms like AWS, Azure, GCP, and Oracle Cloud, ensuring smooth, secure, and scalable transitions.",
    image: "/cloud.png",
  },
  {
    bgColor: "bg-neutral-900",
    title: "Machine Learning & Predictive Analytics",
    description:
      "Explore machine learning and predictive analytics, leveraging your data to build models that forecast trends and automate decision-making processes.",
    image: "/machine.png",
  },
  {
    bgColor: "bg-gray-900",
    title: "Custom Application & Mobile App Development",
    description:
      "Delivering tailored software solutions, we focus on custom application and mobile app development for iOS and Android, ensuring superb user experience and performance.",
    image: "/development.png",
  },
];

export const FIRST_SECTION_IMAGES = [
  {
    id: 1,
    src: "/tech-1.avif",
  },
  {
    id: 2,
    src: "/tech-2.jpg",
  },
  {
    id: 3,
    src: "/tech-3.jpg",
  },
  {
    id: 4,
    src: "/tech-4.avif",
  },
];

export const SECOND_SECTION_IMAGES = [
  {
    id: 1,
    src: "/tech-5.avif",
  },
  {
    id: 2,
    src: "/tech-6.webp",
  },
  {
    id: 3,
    src: "/tech-7.jpg",
  },
  {
    id: 4,
    src: "/tech-8.webp",
  },
];

export const CONTACT_INFO = [
  {
    title: "General Inquiries",
    location: "Global",
    email: "sales@crescentglob.com",
    phone: "",
  },
  {
    title: "Riyadh, KSA",
    location: "Riyadh, KSA",
    email: "info@crescentgcc.com",
    phone: "+966−55−403−4637",
  },
  {
    title: "Madinah, KSA",
    location: "Madinah, KSA",
    email: "info@crescentgcc.com",
    phone: "+966−53−519−6390",
  },
  {
    title: "Hyderabad, India",
    location: "Hyderabad, India",
    email: "info@crescentgcc.com",
    phone: "+91−709−319−9861",
  },
  {
    title: "Atlanta, GA, USA",
    location: "Atlanta, GA, USA",
    email: "info@crescentgcc.com",
    phone: "+1 – 678−644−8172",
  },
  {
    title: "Dubai, UAE",
    location: "Dubai, UAE",
    email: "info@crescentgcc.com",
    phone: "+971−50−235−4931",
  },
];

export const LOGO = { DEFAULT: "/logo-2.png", TRANSPARENT: "/logo-1.jpg", BIG: "/logo-3.png", LOGO_4: "/logo-4.png" };

export const HERO_WORDS = "Your Trusted AI Partners";

export const BRAND_LOGOS = [
  "/BCI.jpeg",
  "/target-arabia.jpeg",
  "/University-of-Hail.png",
  "/Al-Madinah.png",
  "/Coca-Cola.png",
  "/hershey.webp",
  "/PetSmart.webp",
  "/NIH.webp",
  "/mizkan-company.webp",
  "/invacare.webp",
  "/Symmetry-Financial.webp",
  "/lc.webp",
  "/Brookshire.webp",
  "/Flowserve.webp",
  "/Fortjames.webp",
  "/Arthur-Andersen.webp",
  "/New-Bridgestone.webp",
  "/day&zimmermann.webp",
  "/great-west-lifeco.webp",
  "/kiewit.webp",
  "/scotts.webp",
  "/Avanos.webp",
];

export const IOT = [
  {
    title: "Mosques Automation System",
    description:
      "A comprehensive smart system developed to modernize mosque operations through intelligent automation. This solution integrates environmental controls, scheduling systems, and monitoring tools, delivering enhanced operational efficiency and improved worshipper experience.",
    icon: IconBuildingMosque,
  },
  {
    title: "Datacenter Temperature and Humidity Monitoring System",
    description:
      "An enterprise-grade solution designed for datacenters to monitor and manage environmental conditions in real time. It features integrated mobile and web applications for remote alerts and control, including power management, ensuring system integrity and uptime.",
    icon: IconServer,
  },
  {
    title: "Home, Building, and Hotel Automation Solutions",
    description:
      "End-to-end automation systems for residential, commercial, and hospitality facilities. These scalable solutions provide intelligent control of lighting, HVAC, security, and energy management systems to improve operational efficiency and user comfort.",
    icon: IconHome,
  },
  {
    title: "Wireless Network Solutions",
    description:
      "Tailored wireless infrastructure solutions engineered for high-performance connectivity. Designed for enterprises and institutions, these systems ensure seamless, secure, and scalable network access across large or complex environments.",
    icon: IconWifi,
  },
  {
    title: "Integrated Technology Solutions",
    description:
      "Strategic integration of IoT, automation, and communication technologies into unified systems. Our solutions are built to enhance interoperability, reduce operational complexity, and support digital transformation goals across sectors.",
    icon: IconPlug,
  },
];

export const CLOUD_SOLUTIONS = [
  {
    title: "Cloud and Data Center Migration",
    description:
      "We design and execute mission-critical SAP landscape migrations with AI-driven capacity planning. Our migration for Georgia Pacific achieved zero downtime, optimizing performance across compute, storage, and network systems.",
    icon: IconServer,
  },
  {
    title: "S/4HANA Deployments",
    description:
      "Our S/4HANA implementations on GCP and Azure, like those for PetSmart and Avanos Medical, include readiness assessments and automated cloud scaling, ensuring robust performance and cost efficiency.",
    icon: IconDatabase,
  },
  {
    title: "High Availability & Disaster Recovery",
    description:
      "We provide HA/DR solutions with AI-powered predictive fail-over and automated orchestration. Our work with Dell and NTT DATA ensured uninterrupted operations with proactive incident prediction.",
    icon: IconWifi,
  },
  {
    title: "Cloud Optimization",
    description:
      "Our cloud solutions optimize resource allocation and performance. For example, our SAP BW on HANA migration for Scotts Miracle Co. enhanced data processing speeds by 25% through AI-driven archive/restore optimization.",
    icon: IconPlug,
  },
];

export const SOFTWARE_SOLUTIONS = [
  {
    title: "Custom Application Development",
    description:
      "We develop tailored iOS and Android applications with exceptional user experiences. Our Ghaseeli laundry app, built with React Native and Node.js, features real-time tracking and bilingual support, boosting customer retention by 18%.",
    icon: IconCode,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Our e-commerce platforms, like the Aywan al Saaha rollout, integrate AI-driven recommendation systems, increasing cross-sells and upsells by 20% through personalized customer experiences.",
    icon: IconShoppingCart,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We build high-performance, user-friendly apps with features like push notifications, offline support, and secure authentication.",
    icon: IconPhone,
  },
  {
    title: "API Development & Integration",
    description:
      "We create robust and scalable APIs that connect your systems and enable seamless data exchange. Our integration solutions ensure your applications work together harmoniously.",
    icon: IconApi,
  },
  {
    title: "SAP Integrations",
    description:
      "We specialize in SAP integrations, including S/4HANA, ECC, and C4C. Our work with Cloud3Concepts on C4C-ERP integration streamlined data replication and API mappings, reducing process times by 15%.",
    icon: IconServer,
  },
  {
    title: "Automated Testing & Tuning",
    description:
      "Our automated testing solutions, like those for Amtrak's SAP ECC migration, use AI-based anomaly detection to ensure flawless business processes and performance optimization.",
    icon: IconRobot,
  },
];

export const DT_SOLUTIONS = [
  {
    title: "IoT and AI Integration",
    description:
      "We embed IoT and AI into infrastructure for scalable solutions. Our University of Hail data center project used AI-driven anomaly detection and predictive analytics, improving uptime by 25%.",
    icon: IconCpu,
  },
  {
    title: "Advanced Data Analytics",
    description:
      "Using tools like Power BI, Oracle Analytics Cloud, and AWS QuickSight, we transform data into actionable insights. Our dashboard for University of Prince Mugrin enhanced student performance tracking by 30%.",
    icon: IconChartBar,
  },
  {
    title: "IT Strategy & Consulting",
    description:
      "Our consulting services streamline operations and enhance cybersecurity. For Coca-Cola Refreshments, our AI-enabled root-cause analysis reduced system downtime by 20%.",
    icon: IconBulb,
  },
  {
    title: "Sustainable Growth",
    description:
      "We drive sustainable growth through personalized solutions. Our smart parking system for Madinah Development Authority reduced congestion by 15%, enhancing urban mobility.",
    icon: IconLeaf,
  },
];

export const AI_SOLUTIONS = [
  {
    title: "Generative AI",
    description:
      "Our generative AI solutions automate content creation and enhance capabilities like computer vision and object recognition. From automated marketing content to advanced visual analytics, we drive efficiencies across sectors. For example, our AI recommendation engine for Aywan al Saaha boosted e-commerce cross-sells by 20%.",
    icon: IconRobot,
  },
  {
    title: "Predictive Analytics",
    description:
      "We build machine learning models to forecast trends and automate decision-making. Our work with Basic Chemical Industries used vibration data analysis to predict equipment downtime, reducing failures by 30%. Real-time alerts and predictive maintenance ensure operational continuity.",
    icon: IconChartLine,
  },
  {
    title: "AI-Driven Insights",
    description:
      "Our AI-driven anomaly detection and clustering solutions provide real-time insights. For the University of Prince Mugrin, we developed a student performance dashboard that identified underperforming segments, improving academic outcomes through targeted interventions.",
    icon: IconBrain,
  },
  {
    title: "Custom AI Integrations",
    description:
      "We integrate AI into existing systems for scalable solutions. Our smart parking system for Madinah Development Authority used AI and generative AI for demand forecasting and dynamic routing, reducing urban congestion by 15%.",
    icon: IconSettingsAutomation,
  },
];

export const ITEMS_PER_PAGE = 10;

export const PROJECTS = [
  {
    sl: 1,
    client: "University of Hail",
    description: "Data-Center IoT and AI Integration",
    aiComponents: ["AI-driven anomaly detection", "Predictive analytics"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 2,
    client: "Madinah Development Authority",
    description: "Smart parking system for Madinah city to reduce congestion and improve urban mobility",
    aiComponents: ["AI & Gen AI for demand forecasting", "Dynamic routing"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 3,
    client: "Basic Chemical Industries",
    description: "Machine-learning analysis of vibration data to predict downtime and prevent failures",
    aiComponents: ["ML-based predictive maintenance", "Real-time alerts"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 4,
    client: "University of Prince Mugrin",
    description: "Full student-performance dashboard POC to identify underperforming students and surface key KPIs",
    aiComponents: ["AI clustering of student assessments", "Automated insights"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 5,
    client: "Target Arabia",
    description: "Complete datacenter installation (design, build, network, ops) A-Z",
    aiComponents: ["AI-enabled monitoring & capacity planning"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 6,
    client: "Aywan al Saaha",
    description: "Fully integrated e-commerce rollout—company registration, website, bank & inventory integration—for a three-branch enterprise",
    aiComponents: ["AI recommendation engine for inventory & upsells"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 7,
    client: "Ghaseeli",
    description: "End-to-end on-demand laundry app (React Native + Node.js on AWS) with Apple Pay, MADA, real-time driver tracking, partner-onboarding and bilingual support (AI clustering for drivers)",
    aiComponents: ["AI clustering & route-optimization for drivers"],
    contractor: "Crescent Technology (KSA)",
  },
  {
    sl: 8,
    client: "Fort James – SAP R/3 4.6C Upgrade",
    description: "Full upgrade from R/3 311 to 4.6C, including system install, data migration, testing and cutover",
    aiComponents: ["AI-driven upgrade risk prediction", "Automated test validation"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 9,
    client: "Georgia Pacific – NetWeaver 2004s/ECC6 & BI 7.1",
    description: "ECC6 EHP and NetWeaver upgrade, plus BI 7.1 install for HR reporting",
    aiComponents: ["AI-based performance anomaly detection", "Predictive report generation"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 10,
    client: "Georgia Pacific – Data Center Migration",
    description: "Design, configure and migrate mission-critical SAP landscapes (compute, storage, network) to new data center",
    aiComponents: ["AI-driven capacity planning", "Predictive scaling"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 11,
    client: "Coca-Cola Refreshments – ECC Architecture Tuning",
    description: "R/3 ECC system performance tuning and integration with WebMethods, SRM, HR, Voice-Pick POD",
    aiComponents: ["AI-enabled root-cause analysis", "Automated integration-flow optimization"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 12,
    client: "Coca-Cola Refreshments – SCM 7.0/DB2 Z/OS",
    description: "Implemented SCM 7.0 on DB2 10 (Mainframe Z/OS), including sizing, high availability and fail-over setup",
    aiComponents: ["AI-based workload forecasting", "Automated fail-over decisioning"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 13,
    client: "IBM & Dell – HANA Appliance Deployments & OS/DB Migration",
    description: "Deployed SAP HANA appliances for 30+ clients; OS/DB migrations from Oracle, Sybase, DB2",
    aiComponents: ["AI-powered health monitoring", "Predictive maintenance for appliances"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 14,
    client: "Dell – Dana Corp & Vantage & Siemens – DB2→HANA Migration",
    description: "Migrated seven SAP landscapes from DB2 to HANA using zero-downtime tools (SharePLEX ZIMM)",
    aiComponents: ["AI-assisted data-mapping", "Migration anomaly detection"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 15,
    client: "Dell – Brookshire, Bridgestone, E5 & Solutions, E&Y, Flowerserve – HANA VM & BOBJ FIM Deployments",
    description: "Created HANA VMs for ECC, BPC, Solution Manager; deployed BOBJ Financial Information Management supplement",
    aiComponents: ["AI-enhanced deployment optimization", "Automated resource allocation"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 16,
    client: "Dell – Bridgestone, Zimmerman, Great West, Klewett, Larimer County, Merit Energy, NIH",
    description: "HANA performance analysis, SLT replication, and new S/4HANA conversions",
    aiComponents: ["AI-driven tuning recommendations", "Smart migration path planning"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 17,
    client: "Dell – Anatolia, Apogee, Boston University, Honda Trading, MKS, Noble Drilling, PNG, UGI Energy",
    description: "SAP BW on HANA scale-out HA/DR migration: blueprint, implementation and cutover",
    aiComponents: ["AI-enabled predictive failover", "Automated HA orchestration"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 18,
    client: "NTT DATA – Invacare & DALAM Ache – S/4 HANA Greenfield",
    description: "Full-stack greenfield implementation SAP S/4HANA: blueprint, build, data migration, testing, change management, go-live",
    aiComponents: ["AI-driven configuration optimization", "Predictive performance tuning"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 19,
    client: "NTT DATA – Mizkan – SAP DR Design",
    description: "Designed target DR solution: storage/replication tools, VMware, DB tools; documented fail-over/restore process",
    aiComponents: ["AI-based disaster recovery simulation", "Automated replication configuration"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 20,
    client: "PetSmart – S/4 HANA on GCP",
    description: "Migrated ECC to S/4HANA on Google Cloud Platform: readiness check, sandbox conversion, add-on cleanup, cloud connector setup",
    aiComponents: ["AI-powered readiness assessment", "Intelligent integration workflow automation"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 21,
    client: "Crescent Tech – Avanos Medical – Azure S/4 HANA",
    description: "Greenfield S/4HANA on Azure: 4-tier landscape build, go-live support, production handover",
    aiComponents: ["AI-driven go-live risk modeling", "Automated cloud scaling"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 22,
    client: "Crescent Tech – Symmetry – SAP Landscape & Infra Design",
    description: "Designed SAP landscape architecture, sizing, HA/DR, backup/recovery, virtualization",
    aiComponents: ["AI-enabled environmental analytics", "Proactive incident prediction"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 23,
    client: "Crescent Tech – Scotts Miracle Co. – BW HANA HA/DR Migration",
    description: "Led BW on HANA scale-out HA/DR migration: strategy, execution and cutover",
    aiComponents: ["AI-powered archive/restore optimization"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 24,
    client: "Crescent Tech – Hershey Co. – OS/DB Migration",
    description: "ECC 6.0 upgrade and OS/DB migration: hardware sizing, data cutover, basis administration",
    aiComponents: ["AI-assisted migration validation", "Automated issue-resolution suggestions"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 25,
    client: "Cloud3Concepts – Atlanta – S/4 HANA On-Prem & Cloud",
    description: "SAP S/4HANA implementation using SAP Activate: Agile delivery, scrum master, backlog management, testing and deployment",
    aiComponents: ["AI-driven sprint planning", "Backlog prioritization"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 26,
    client: "Cloud3Concepts – Atlanta – SAP CX/4HANA Integration",
    description: "SAP C4C integration with on-prem ERPs: CPI configuration, data replication, API mappings, cutover planning",
    aiComponents: ["AI-powered integration testing", "Automated cutover sequence optimization"],
    contractor: "Crescent Technology (USA)",
  },
  {
    sl: 27,
    client: "Amtrak DC – OS/DB Migration & Worksoft Testing Tool",
    description: "Migrated OS/DB for SAP ECC; deployed Worksoft automated testing for critical business processes",
    aiComponents: ["AI-based test automation", "Anomaly detection in process flows"],
    contractor: "Crescent Technology (USA)",
  },
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/next-codez/" },
  { name: "Twitter", href: "https://twitter.com/NextCodez" },
  { name: "Instagram", href: "https://www.instagram.com/nextcodez/" },
  { name: "Facebook", href: "https://www.facebook.com/nextcodezz" },
];
