const projects = [
  {
    id: "policylens-ai",
    title: "PolicyLens AI – AI-Powered Policy Analysis Platform",
    image: "/projects/policylens.jpeg",
    stack: [
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "MongoDB",
      "Playwright",
      "AI",
      "Agentic AI",
    ],
    description:
      "An AI-powered platform that discovers, extracts, and analyzes website policies to identify potential compliance and privacy concerns and explain them in simple language.",
    contributions: [
      "Designed an automated workflow for discovering website policy pages",
      "Built web crawling and content extraction using Playwright",
      "Developed backend APIs using FastAPI and Python",
      "Implemented MongoDB-based document storage and retrieval",
      "Designed AI-assisted policy analysis and risk explanation workflows",
      "Built the system with production-oriented validation and error handling",
    ],
    links: {
      github: "",
      demo: "",
    },
  },

  {
    id: "expense",
    title: "Expense Tracker – Personal Finance Management",
    image: "/projects/expense.jpeg",
    stack: [
      "Next.js",
      "Clerk",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    description:
      "A secure full-stack application for managing personal expenses, transactions, and spending insights through an interactive analytics dashboard.",
    contributions: [
      "Implemented secure user authentication using Clerk",
      "Built expense and transaction management workflows",
      "Developed an analytics dashboard for spending insights",
      "Designed responsive interfaces using Tailwind CSS",
      "Integrated Drizzle ORM with PostgreSQL for data management",
    ],
    links: {
      github:
        "https://github.com/ShathuryaParamanathan/expense_tracker_app",
      demo: "",
    },
  },

  {
    id: "thrifting",
    title: "Thrifting.LK – Full-Stack E-Commerce Platform",
    image: "/projects/thrifting.jpeg",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST APIs",
    ],
    description:
      "A full-stack marketplace for buying and selling pre-owned items, featuring product listings, seller onboarding, and seller management.",
    contributions: [
      "Developed REST APIs for seller and product management",
      "Built seller onboarding and registration workflows",
      "Developed a seller dashboard for product management",
      "Designed MongoDB data models for marketplace entities",
      "Integrated frontend and backend services",
    ],
    links: {
      github: "https://github.com/Vanaiyan/Thrifting.lk",
      demo: "",
    },
  },

  {
    id: "agroai",
    title: "AgroAI – Explainable Big Onion Yield Prediction System",
    image: "/projects/agroai.jpeg",
    stack: [
      "Next.js",
      "Python",
      "Flask",
      "XGBoost",
      "Scikit-learn",
      "SHAP",
      "Tailwind CSS",
      "Leaflet",
    ],
    description:
      "A final-year research system that predicts big onion yields in Sri Lanka using remote sensing and climate data while providing explainable AI insights and decision support for farmers.",
    contributions: [
      "Developed the explainability and decision-support module",
      "Integrated SHAP-based explanations for yield predictions",
      "Implemented Explainability Reliability Index (ERI) scoring",
      "Built multilingual explanations in English, Sinhala, and Tamil",
      "Developed interactive dashboards for prediction visualization",
      "Integrated geographic visualization using Leaflet",
    ],
    links: {
      github: "",
      demo: "",
    },
  },

  {
    id: "resume-genie",
    title: "Resume Genie – AI-Powered Resume Screening Platform",
    image: "/projects/resume-genie.jpeg",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    description:
      "An AI-powered recruitment platform that evaluates resumes against job requirements and provides matching scores and insights to support recruiter decision-making.",
    contributions: [
      "Developed full-stack resume evaluation workflows",
      "Integrated OpenAI-powered resume analysis",
      "Built recruiter-facing interfaces and REST APIs",
      "Implemented resume-to-job matching functionality",
      "Designed secure handling of candidate information",
    ],
    links: {
      github: "",
      demo: "",
    },
  },

  {
    id: "family-budget-planner",
    title: "Family Budget Planner – Full-Stack Finance Application",
    image: "/projects/family-budget.jpeg",
    stack: [
      "ASP.NET Core",
      "C#",
      "React",
      "TypeScript",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "REST APIs",
    ],
    description:
      "A full-stack financial management application that enables families to manage expenses, budgets, savings goals, and financial insights.",
    contributions: [
      "Developed RESTful APIs using ASP.NET Core Web API",
      "Implemented expense, budget, and savings management modules",
      "Designed SQL Server database using Entity Framework Core",
      "Implemented DTOs, validation, and layered architecture",
      "Developed the React frontend using TypeScript",
      "Implemented JWT-based authentication and authorization",
    ],
    links: {
      github:
        "https://github.com/ShathuryaParamanathan/FamilyBudgetPlanner",
      demo: "",
    },
  },

  {
    id: "flood-risk",
    title: "SL Flood Risk Predictor – Explainable ML System",
    image: "/projects/sl_flood.jpeg",
    stack: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "SHAP",
      "Flask",
      "Render",
    ],
    description:
      "An explainable machine learning system that predicts flood risk levels across Sri Lanka using environmental and geographic data.",
    contributions: [
      "Developed the flood risk prediction model",
      "Performed data preprocessing and feature engineering",
      "Integrated SHAP for explainable predictions",
      "Built an end-to-end machine learning pipeline",
      "Developed Flask APIs for model inference",
      "Deployed the application on Render",
    ],
    links: {
      github:
        "https://github.com/ShathuryaParamanathan/FloodRiskPredictor_SL",
      demo: "https://floodriskpredictor-sl.onrender.com",
    },
  },

  {
    id: "angampora",
    title: "Angampora – Cultural Web Experience",
    image: "/projects/angampora.png",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    description:
      "A responsive web experience showcasing Sri Lanka's traditional Angampora martial art through visual storytelling and interactive content.",
    contributions: [
      "Designed and developed responsive user interfaces",
      "Implemented modern layouts using React and Tailwind CSS",
      "Focused on cultural storytelling and user experience",
      "Optimized the interface for desktop and mobile devices",
    ],
    links: {
      github:
        "https://github.com/ShathuryaParamanathan/angampora-booking-system",
      demo: "https://angampora.netlify.app/",
    },
  },

  {
    id: "candle",
    title: "Automated Candle Maker – Embedded System",
    image: "/projects/candlemaker.png",
    stack: [
      "Arduino",
      "C",
      "Blender",
    ],
    description:
      "An automated candle manufacturing system designed to improve production consistency and efficiency through embedded control and mechanical automation.",
    contributions: [
      "Developed embedded control logic using Arduino and C",
      "Designed mechanical components using Blender",
      "Implemented automated production control workflows",
      "Improved manufacturing consistency through process automation",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
];

export default projects;