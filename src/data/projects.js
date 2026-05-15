const projects = [
  {
    id: "thrifting",
    title: "Thrifting.LK – E-commerce Platform for Pre-Owned Items",
    image: "/projects/thrifting.jpeg",
    stack: ["ExpressJS", "React", "MongoDB", "Firebase"],
    description:
      "An e-commerce platform for buying and selling pre-owned items, designed to promote sustainable shopping with a smooth user experience for both buyers and sellers.",
    contributions: [
      "Built backend APIs for seller and product management",
      "Designed seller registration and onboarding pages",
      "Developed seller dashboard with category-based product management",
    ],
    links: {
      github: "https://github.com/Vanaiyan/Thrifting.lk",
      demo: "",
    },
  },


  {
    id: "expense",
    title: "Expense Tracker – Personal Finance Management",
    image: "/projects/expense.jpeg",
    stack: ["Next.js", "Clerk", "Tailwind CSS", "Drizzle ORM"],
    description:
      "A secure web application for tracking personal expenses with authentication, transaction management, and real-time analytics.",
    contributions: [
      "Implemented secure authentication and transaction system",
      "Built analytics dashboard with visual reports and categories",
    ],
    links: {
      github: "https://github.com/ShathuryaParamanathan/expense_tracker_app",
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
      "A machine learning system that predicts flood risk levels across Sri Lanka using environmental and geographic data, enhanced with explainable AI for transparency.",
    contributions: [
      "Built flood risk prediction model (0–100 scale)",
      "Achieved high model performance (R² ≈ 0.989)",
      "Integrated SHAP for explainable feature analysis",
      "Developed full pipeline from preprocessing to deployment",
    ],
    links: {
      github:
        "https://github.com/ShathuryaParamanathan/FloodRiskPredictor_SL",
      demo: "https://floodriskpredictor-sl.onrender.com",
    },
  },

  {
    id: "angampora",
    title: "Angampora – Cultural Static Web Experience",
    image: "/projects/angampora.png",
    stack: ["React", "Vite", "Tailwind CSS"],
    description:
      "A static web experience showcasing Angampora, the traditional Sri Lankan martial art, designed with a focus on visual storytelling and cultural representation.",
    contributions: [
      "Designed and developed static UI using React and Vite",
      "Focused on visual storytelling and cultural presentation",
      "Built responsive layout with modern UI styling",
    ],
    links: {
      github: "https://github.com/ShathuryaParamanathan/angampora-booking-system.git",
      demo: "https://angampora.netlify.app/",
    },
  },

   {
    id: "candle",
    title: "Automation in Candle Maker – Hardware System",
    image: "/projects/candlemaker.png",
    stack: ["C", "Arduino", "Blender"],
    description:
      "An automated candle-making system designed to improve production efficiency and maintain consistent quality using embedded control and mechanical design.",
    contributions: [
      "Developed Arduino firmware for controlled automation",
      "Designed mechanical components using Blender",
      "Improved production efficiency and output consistency",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  //   {
  //   id: "taskmaster",
  //   title: "Task Master – Task Management Application",
  //   image: "/projects/taskmaster.jpeg",
  //   stack: ["ExpressJS", "React", "MongoDB"],
  //   description:
  //     "A task management application that allows users to create, organize, and track tasks efficiently with a simple and responsive interface.",
  //   contributions: [
  //     "Implemented task CRUD operations with backend APIs",
  //     "Built responsive UI for task tracking and management",
  //   ],
  //   links: {
  //     github: "https://github.com/ShathuryaParamanathan/CodeAlpha_ToDoList",
  //     demo: "",
  //   },
  // },

];

export default projects;