import type {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ValueProposition
} from '../types';

export const personalInfo = {
  name: "Akanksha Bone",
  title: "Aspiring AI Engineer",
  headline: "Aspiring AI Engineer | Machine Learning | Generative AI | RAG & LLM Applications",
  email: "akankshabone25@gmail.com",
  phone: "+91 8788135173",
  location: "Maharashtra, India",
  github: "https://github.com/Akankshabone",
  linkedin: "https://linkedin.com/in/akanksha-bone",
  resumePath: "/Akanksha_Bone_Resume.pdf",
  photoPath: "/akanksha-photo.png",
  bio: "Computer Science graduate with CDAC Kharghar PGCP-AI certification and hands-on experience in Artificial Intelligence, Machine Learning, and NLP. Specialized in architecting enterprise Retrieval-Augmented Generation (RAG) pipelines, semantic document intelligence, and full-stack AI services using FastAPI, LangChain, LangGraph, and vector databases.",
  availability: "Actively seeking full-time opportunities in AI Engineering, Generative AI, ML Engineering, and Agentic Systems."
};

export const targetRoles = [
  "AI Engineer",
  "Generative AI Engineer",
  "Machine Learning Engineer",
  "LLM / RAG Engineer",
  "Junior Agentic AI Engineer"
];

export const projectsData: Project[] = [
  {
    id: "port-lease-ai-assistant",
    title: "AI-Powered Indian Port Land Lease Management Assistant",
    subtitle: "Enterprise RAG & Agentic Document Intelligence System",
    category: "rag-agentic",
    duration: "Jul 2026 - Aug 2026",
    featured: true,
    problemStatement:
      "Port authority land lease documents, contracts, legal amendments, and land allotment registries are distributed across massive unstructured PDFs, scanned policy papers, spreadsheets, and SQL databases. Manual searching for lease tenures, compliance terms, and policy clauses is labor-intensive, slow, and prone to oversight.",
    solutionObjective:
      "Engineered an enterprise-grade Retrieval-Augmented Generation (RAG) and Agentic Assistant capable of intelligent semantic search, exact policy retrieval, and citation-backed question answering across multi-format documents and structured databases.",
    keyFeatures: [
      "Semantic chunking and dense vector embeddings with pgvector and ChromaDB",
      "Hybrid retrieval combining BM25 keyword matching with dense vector similarity search",
      "OCR pipeline powered by PaddleOCR for scanned lease agreements and historical land records",
      "Multi-document format ingestion across PDFs, MS Word, Excel sheets, and relational SQL records",
      "Reranking stage to filter the most semantically relevant context chunks before LLM synthesis",
      "Strict citation-based question answering ensuring every response is backed by document and page sources",
      "FastAPI production backend with asynchronous query endpoints and secure query execution"
    ],
    myContribution: [
      "Designed and implemented the end-to-end RAG architecture and retrieval orchestration using LangChain and LangGraph",
      "Integrated PaddleOCR and custom preprocessing logic for high-accuracy text extraction from degraded scanned documents",
      "Configured PostgreSQL with pgvector extension for high-performance cosine similarity indexing and hybrid search",
      "Implemented semantic chunking strategies that respect document boundaries and lease section headers",
      "Engineered prompt templates enforcing strict source grounding to eliminate factual hallucinations in compliance answers"
    ],
    techStack: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "PaddleOCR",
      "BM25 Search",
      "Ollama",
      "Python"
    ],
    githubUrl: "https://github.com/Akankshabone",
    architectureDetails: {
      dataSources: ["PDF Contracts", "Word Agreements", "Excel Land Records", "PostgreSQL Database"],
      retrievalType: "Hybrid Search (BM25 Keyword + pgvector Cosine Similarity) + Cross-Encoder Reranking",
      pipelineSteps: [
        {
          title: "Multi-Format Ingestion & OCR",
          desc: "Extracts text from digital PDFs, Excel, Word, and applies PaddleOCR to scanned historical documents.",
          tech: "PaddleOCR + Python Document Parsers"
        },
        {
          title: "Semantic Chunking & Embedding",
          desc: "Splits documents by legal clause and section headers; generates high-dimensional vector representations.",
          tech: "LangChain Chunkers + Vector Embeddings"
        },
        {
          title: "Hybrid Retrieval & Reranking",
          desc: "Executes BM25 sparse search and pgvector dense similarity queries in parallel, then ranks top context.",
          tech: "pgvector + BM25 + Reranker"
        },
        {
          title: "Citation-Grounded LLM Synthesis",
          desc: "LangGraph orchestration prompts the LLM to formulate strict answers citing document name, section, and page.",
          tech: "FastAPI + LangGraph + Ollama"
        }
      ]
    }
  },
  {
    id: "ai-travel-planner",
    title: "AI Travel Itinerary Planner",
    subtitle: "Generative AI Personalized Travel Scheduling Application",
    category: "generative-ai",
    duration: "Jun 2025 - Aug 2025",
    featured: false,
    problemStatement:
      "Travel planning is fragmented across multiple travel guides, booking portals, and travel forums. Travelers spend hours manually compiling day-to-day schedules that balance geographic proximity, budget, trip duration, and individual interests.",
    solutionObjective:
      "Developed an intelligent web application that automatically synthesizes customized, highly actionable daily itineraries based on user inputs including travel dates, destination, group dynamic, and personal preferences.",
    keyFeatures: [
      "Dynamic prompt engineering to tailor itineraries based on duration, place, and thematic interests",
      "Structured schedule generation with morning, afternoon, and evening recommendations",
      "Intelligent attraction clustering to minimize travel transit time between landmarks",
      "Curated lodging, dining, and activity recommendations aligned with user interests",
      "Interactive UI for customizable and exportable travel plans"
    ],
    myContribution: [
      "Engineered prompt pipelines and structured JSON schema outputs for robust itinerary synthesis",
      "Implemented preference parsing algorithms handling edge cases in user budgets and durations",
      "Built the application workflow connecting user inputs with generative AI model inference",
      "Tested and refined prompts to ensure logical time allocations for suggested activities"
    ],
    techStack: [
      "Python",
      "Generative AI",
      "LLM Prompt Engineering",
      "NLP",
      "Streamlit / Web UI"
    ],
    githubUrl: "https://github.com/Akankshabone"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction System",
    subtitle: "Supervised Machine Learning Predictive Analytics",
    category: "machine-learning",
    duration: "Oct 2025 - Dec 2025",
    featured: false,
    problemStatement:
      "Real estate property pricing is influenced by complex interactions of multidimensional variables including square footage, geographic location, room count, and amenities. Buyers and real estate professionals lack quick, objective estimations.",
    solutionObjective:
      "Built a machine learning predictive pipeline that accurately estimates residential property prices based on key property features and spatial attributes.",
    keyFeatures: [
      "Rigorous exploratory data analysis (EDA) and distribution inspection on housing market datasets",
      "Feature engineering including categorical one-hot encoding, missing value imputation, and feature scaling",
      "Comparative model evaluation across multiple regression algorithms to maximize R² score",
      "Outlier detection and multicollinearity analysis using correlation heatmaps",
      "Clear metrics reporting including Mean Absolute Error (MAE), RMSE, and explained variance"
    ],
    myContribution: [
      "Conducted extensive data cleaning and exploratory analysis in Jupyter Notebook",
      "Implemented preprocessing pipelines using Scikit-Learn, Pandas, and NumPy",
      "Trained and fine-tuned regression models, identifying optimal hyperparameters",
      "Documented regression performance comparisons and key predictive feature importances"
    ],
    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    githubUrl: "https://github.com/Akankshabone"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Generative AI & Agentic Systems",
    description: "Enterprise RAG pipelines, agent orchestration, and context retrieval",
    icon: "Brain",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "LangGraph", highlight: true },
      { name: "Agentic AI Workflows", highlight: true },
      { name: "Semantic Chunking" },
      { name: "Vector Embeddings" },
      { name: "Hybrid Search (BM25 + Dense)" },
      { name: "Reranking & Citation QA" },
      { name: "Ollama Local LLMs" },
      { name: "Prompt Engineering" }
    ]
  },
  {
    category: "Machine Learning & NLP",
    description: "Statistical modeling, supervised algorithms, and evaluation",
    icon: "Cpu",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Natural Language Processing (NLP)", highlight: true },
      { name: "Deep Learning Fundamentals" },
      { name: "Logistic Regression" },
      { name: "Support Vector Machines (SVM)" },
      { name: "Decision Trees" },
      { name: "Feature Engineering & EDA" },
      { name: "Model Evaluation & Metrics" }
    ]
  },
  {
    category: "Programming & Frameworks",
    description: "Backend API development, data pipelines, and numerical computing",
    icon: "Code",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "PaddleOCR (Document OCR)" }
    ]
  },
  {
    category: "Databases & Vector Stores",
    description: "Relational persistence and high-dimensional vector search",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "pgvector", highlight: true },
      { name: "ChromaDB", highlight: true },
      { name: "SQL Query Optimization" }
    ]
  },
  {
    category: "Developer Tools & Environment",
    description: "Version control, scientific environments, and tooling",
    icon: "Wrench",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Jupyter Notebook" },
      { name: "Anaconda Navigator" },
      { name: "Microsoft Excel" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Data Science & ML Intern",
    company: "Anyatam - Adhyayan Education services Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    duration: "Jan 2025 - Jun 2025",
    type: "Internship",
    responsibilities: [
      "Conducted end-to-end data preprocessing, exploratory data analysis (EDA), and data visualization using Python, Pandas, NumPy, and Excel.",
      "Engineered predictive features and handled class distribution imbalances across datasets.",
      "Enhanced, trained, and benchmarked machine learning classification models using Logistic Regression, Support Vector Machines (SVM), and Decision Trees.",
      "Conducted model evaluation and hyperparameter tuning in Jupyter Notebook and Anaconda Navigator to improve generalization."
    ],
    toolsUsed: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter Notebook", "Anaconda Navigator", "Excel"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "PGCP-AI (Post Graduate Certificate Programme in AI)",
    institution: "CDAC Kharghar",
    location: "Navi Mumbai, India",
    duration: "Completed",
    status: "Completed Certified Program",
    highlights: [
      "Rigorous practical curriculum covering Artificial Intelligence, Deep Learning, NLP, Generative AI, and production ML pipelines.",
      "Hands-on architectural implementation of RAG, LangChain, vector databases, and real-world AI applications."
    ]
  },
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Terna College of Engineering",
    location: "Dharashiv, Maharashtra, India",
    duration: "May 2023 - Jul 2025",
    score: "71.5%",
    highlights: [
      "Core focus on Data Structures & Algorithms, Database Management Systems, Software Engineering, and Operating Systems."
    ]
  },
  {
    degree: "Diploma in Engineering",
    institution: "Government Polytechnic",
    location: "Dharashiv, Maharashtra, India",
    duration: "Jan 2020 - Jul 2022",
    score: "82.74%",
    highlights: [
      "Strong foundational coursework in computer programming, electronics, computer networks, and system fundamentals."
    ]
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Shripatrao Bhosale Highschool",
    location: "Dharashiv, Maharashtra, India",
    duration: "Mar 2018 - Apr 2019",
    score: "82.00%"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "AWS Academy Graduate - Generative AI Foundations",
    issuer: "Amazon Web Services (AWS) Academy",
    category: "Generative AI",
    badge: "Official Training Badge"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    category: "Data Science & Analytics",
    badge: "Verified Course Completion"
  }
];

export const valueProps: ValueProposition[] = [
  {
    title: "End-to-End RAG Architecture",
    description:
      "Deep understanding of document ingestion, semantic chunking, embedding generation, dense & sparse hybrid retrieval, and citation-grounded LLM synthesis.",
    icon: "Layers",
    impact: "Reduces hallucination and delivers reliable factual search over complex enterprise knowledge bases."
  },
  {
    title: "Agentic AI & Orchestration",
    description:
      "Practical experience building graph-based agentic workflows using LangGraph and LangChain for multi-step AI reasoning and tool-calling.",
    icon: "Network",
    impact: "Enables autonomous problem-solving beyond static single-prompt interactions."
  },
  {
    title: "Document Intelligence & OCR",
    description:
      "Hands-on expertise processing scanned, degraded, and heterogeneous document formats (PDFs, Word, Excel, Images) via PaddleOCR pipelines.",
    icon: "FileSearch",
    impact: "Unlocks inaccessible enterprise records for automated vector search and analysis."
  },
  {
    title: "Production Backend Integration",
    description:
      "Ability to serve models and RAG pipelines via performant asynchronous FastAPI endpoints connected to PostgreSQL with pgvector.",
    icon: "Server",
    impact: "Bridges the gap between experimental notebook prototypes and deployable, production-grade AI microservices."
  },
  {
    title: "Rigorous ML Foundations",
    description:
      "Strong background in exploratory data analysis, feature engineering, classification and regression modeling, and empirical metric evaluation.",
    icon: "BarChart3",
    impact: "Ensures data quality, sensible baseline models, and sound scientific methodology."
  },
  {
    title: "Continuous Learner with CDAC Training",
    description:
      "Solid theoretical and applied AI foundation developed through CDAC Kharghar's specialized Post Graduate AI curriculum.",
    icon: "GraduationCap",
    impact: "Rapid onboarding and swift adaptation to state-of-the-art AI advancements."
  }
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Fluent" },
  { name: "Marathi", level: "Native / Mother Tongue" }
];
