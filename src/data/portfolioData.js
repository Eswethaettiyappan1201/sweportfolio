/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION FOR SWETHA E
 * ====================================================================
 * Update your personal URLs, project links, or certificate links here.
 * Any link set to null or an empty string will automatically display
 * an elegant "Link to be added" or "Project details coming soon" tag
 * instead of a non-functional or broken link.
 */

export const personalInfo = {
  name: "Swetha E",
  logoText: "Swetha E",
  introLabel: "HELLO, I'M",
  headline: "B.Tech AI & Data Science Student | Aspiring AI Developer",
  introParagraph:
    "I am an enthusiastic Artificial Intelligence and Data Science student at Panimalar Engineering College, passionate about building intelligent solutions that solve real-world problems. My interests include AI, Natural Language Processing, cloud technologies, and innovative software development.",
  tagline: "Building intelligent ideas into meaningful solutions.",
  
  bio: "I am Swetha E, currently pursuing a B.Tech in Artificial Intelligence and Data Science at Panimalar Engineering College. I enjoy exploring emerging technologies and applying my knowledge to develop practical, innovative solutions. Through academic projects, certifications, and technical competitions, I am continuously strengthening my problem-solving, programming, and development skills. I am particularly interested in AI-powered applications, NLP, cloud computing, and technology that creates meaningful social impact.",
  
  education: {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Panimalar Engineering College",
    location: "Chennai, Tamil Nadu, India"
  },

  interests: [
    "Artificial Intelligence",
    "NLP",
    "Cloud Computing",
    "Software Development"
  ]
};

export const contactConfig = {
  email: "ettiyappanswetha@gmail.com",
  github: "https://github.com/Eswethaettiyappan1201",
  linkedin: "https://www.linkedin.com/in/swetha-ettiyappan-52b932329/"
};

export const skillsData = [
  {
    category: "AI & Intelligent Systems",
    description: "Core conceptual foundations in machine intelligence, conversational agents, and modern language models.",
    icon: "Brain",
    skills: [
      { name: "Artificial Intelligence", level: "Core Interest" },
      { name: "Natural Language Processing", level: "Active Focus" },
      { name: "Large Language Models (LLMs)", level: "Exploration & Application" }
    ]
  },
  {
    category: "Cloud & Emerging Technologies",
    description: "Scalable cloud infrastructures and foundational decentralized architecture principles.",
    icon: "Cloud",
    skills: [
      { name: "Cloud Computing", level: "Foundations & Practice" },
      { name: "Oracle Cloud Infrastructure", level: "Certified AI Foundation" },
      { name: "Blockchain Fundamentals", level: "Architectural Concepts" }
    ]
  },
  {
    category: "Programming & Development",
    description: "Algorithmic thinking, data transformation pipelines, and visual analytical presentation.",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Primary Language" },
      { name: "Data Processing", level: "Analytics & Wrangling" },
      { name: "Data Visualization", level: "Exploratory Insights" }
    ]
  }
];

export const projectsData = [
  {
    id: "legal-chatbot",
    title: "Multilingual Cooperative Governance & Legal Assistance Chatbot",
    shortDescription:
      "An intelligent chatbot project designed to help users access governance-related information and legal assistance through multilingual conversational interactions. The project explores how AI can make information more accessible and user-friendly.",
    technologies: [
      "Artificial Intelligence",
      "Natural Language Processing",
      "Large Language Models",
      "Blockchain",
      "Cloud Computing"
    ],
    features: [
      "Multilingual natural language conversational assistance",
      "Democratized access to complex governance procedures",
      "Technology-assisted legal clarity for common citizens",
      "Architectural synergy of LLMs, cloud hosting, and blockchain"
    ],
    accentColor: "#F47C91",
    // Configurable URLs - set to actual links when available
    githubUrl: null, // e.g. "https://github.com/Eswethaettiyappan1201/legal-chatbot"
    demoUrl: null,   // e.g. "https://legal-chatbot-demo.example.com"
    details: {
      problemStatement:
        "Citizens frequently encounter difficult barriers when navigating bureaucratic governance guidelines and understanding legal statutory terminology due to language constraints, complex legal syntax, and lack of affordable, real-time guidance.",
      objectives:
        "Develop an accessible, conversational AI framework capable of answering legal and civic governance inquiries in multiple regional languages while preserving informational accuracy and user privacy.",
      solution:
        "The project integrates state-of-the-art NLP and Large Language Models to interpret and respond to user queries conversationally in their native tongue. It leverages Cloud Computing for high scalability and integrates Blockchain fundamentals to explore transparent, immutable records for critical advisory audit trails.",
      technologiesSummary:
        "Artificial Intelligence, Natural Language Processing (NLP), Large Language Models (LLMs), Blockchain Concepts, Cloud Infrastructure.",
      outcomes:
        "Significantly simplifies civic literacy, promotes legal awareness across language demographics, and demonstrates the practical utility of generative AI in public governance."
    }
  },
  {
    id: "waste-segregator",
    title: "Automatic Dry/Wet Waste Segregator Dustbin",
    shortDescription:
      "An automated waste-segregation project designed to distinguish dry and wet waste and support more efficient waste management. The goal is to reduce manual sorting and encourage responsible waste disposal.",
    technologies: [
      "Automated Waste Segregation",
      "Dry/Wet Sensing",
      "Smart Waste Management",
      "Environmental Tech"
    ],
    features: [
      "Automated source-level dry vs. wet discrimination",
      "Elimination of hazardous manual sorting routines",
      "Cleaner recyclable streams for waste processing units",
      "Smart sanitation support for campuses and communities"
    ],
    accentColor: "#E8A0AD",
    // Configurable URLs - set to actual links when available
    githubUrl: null, // e.g. "https://github.com/Eswethaettiyappan1201/waste-segregator"
    demoUrl: null,
    details: {
      problemStatement:
        "Unsegregated municipal waste causes severe environmental degradation, hampers recycling efficacy, and forces sanitation workers to manually sort toxic and organic refuse under unsanitary conditions.",
      objectives:
        "Engineer an automated dustbin prototype that autonomously identifies incoming refuse as dry or wet at the exact point of disposal, routing it to designated compartments without human intervention.",
      solution:
        "Utilizes specialized sensing mechanisms to detect moisture thresholds and physical characteristics of deposited waste items, triggering an automated sorting mechanism that deposits the refuse into respective bins seamlessly.",
      technologiesSummary:
        "Automated Waste Segregation, Dry/Wet Sensing, Smart Waste Management, Environmental Tech.",
      outcomes:
        "Minimizes cross-contamination of recyclables, protects sanitation personnel from direct contact with contaminated materials, and encourages proactive ecological stewardship."
    }
  }
];

export const certificationsData = [
  {
    id: "nptel-python",
    title: "Python for Data Science",
    issuer: "NPTEL",
    badge: "Data Science",
    icon: "Code",
    description: "Foundational programming, data analysis structures, scientific computing, and algorithmic problem-solving with Python.",
    verifyUrl: null // Set to verification URL when available
  },
  {
    id: "oci-ai-foundation",
    title: "Oracle Cloud Infrastructure — AI Foundation",
    issuer: "Oracle",
    badge: "Cloud & AI",
    icon: "Cloud",
    description: "Comprehensive foundation in Oracle Cloud Infrastructure services, AI workloads, ML concepts, and enterprise cloud deployment.",
    verifyUrl: null
  },
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Claude / Anthropic",
    badge: "LLMs & AI",
    icon: "Sparkles",
    description: "Core principles of Claude language models, prompting strategies, capabilities, and conversational design architectures.",
    verifyUrl: null
  },
  {
    id: "claude-mcp",
    title: "Introduction to Model Context Protocol",
    issuer: "Claude / Anthropic",
    badge: "Model Architecture",
    icon: "Cpu",
    description: "Understanding the Model Context Protocol (MCP) for connecting AI models securely with local tools, external resources, and enterprise systems.",
    verifyUrl: null
  },
  {
    id: "nasscom-data",
    title: "Data Processing and Visualization",
    issuer: "NASSCOM",
    badge: "Data Analytics",
    icon: "BarChart3",
    description: "Industry-standard methodologies for data cleaning, exploratory data analysis, visual storytelling, and statistical summarization.",
    verifyUrl: null
  },
  {
    id: "swayam-employability",
    title: "Employability Skills",
    issuer: "SWAYAM",
    badge: "Professional Skills",
    icon: "Award",
    description: "Essential professional workplace communication, critical thinking, collaborative teamwork, and problem-solving fundamentals.",
    verifyUrl: null
  }
];

export const achievementsData = [
  {
    id: "sih",
    rank: "30th",
    rankLabel: "Place",
    title: "30th Place — Smart India Hackathon",
    event: "Smart India Hackathon",
    description: "Recognized with a 30th-place achievement in the prestigious nationwide Smart India Hackathon, tackling real-world technological challenges.",
    highlightBadge: "National Level Hackathon",
    icon: "Trophy"
  },
  {
    id: "pecteam",
    rank: "6th",
    rankLabel: "Place",
    title: "6th Place — 8th International Conference, PECTEAM 2K25",
    event: "PECTEAM 2K25",
    description: "Achieved 6th place at the 8th International Conference associated with PECTEAM 2K25 for presenting research and innovative technical methodology.",
    highlightBadge: "International Conference",
    icon: "Medal"
  }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];
