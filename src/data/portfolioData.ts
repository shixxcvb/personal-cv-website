export interface Project {
  id: string;
  num: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  liveUrl: string;
  githubUrl?: string; // StudyFlow & BookNest
  accentColor: string;
  accentBg: string;
  darkAccentBg: string;
  symbol: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  yearLevel?: string;
  status: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Charlene Calamba",
    nickname: "Charlene",
    title: "Frontend Developer & IT Student",
    supportingDescription: "Information Technology Student | Aspiring Web Developer | Creative Tech Enthusiast",
    course: "Bachelor of Science in Information Technology",
    yearSection: "Fourth Year",
    school: "Davao del Norte State College",
    location: "Panabo City, Philippines",
    email: "charlenecalamba00@gmail.com",
    phone: "0993 752 5604",
    githubUrl: "https://github.com/shixxcvb",
    linkedinUrl: "https://www.linkedin.com/in/charlene-calamba-a89666446/",
    facebookUrl: "https://www.facebook.com/charlenecalamba30",
    avatarUrl: "/assets/charlene-transparent.png",
    heroHeadline: "Hey, I'm Charlene!",
    heroSubheading: "Frontend Developer & IT Student",
    heroManifesto: "I turn curiosity into code and creativity into digital experiences.",
    welcomeKicker: "Charlene's Creative Universe",
    aboutIntro:
      "Hi! I'm Charlene, an Information Technology student who enjoys exploring web development, creative design, and new technologies. I love turning ideas into digital experiences and continuously learning through hands-on projects.",
    careerObjective:
      "To continue improving my technical and creative skills, gain real-world experience, and contribute to meaningful digital solutions.",
  },

  skills: [
    { name: "HTML", category: "code", level: "Semantic Markup", icon: "Code2", color: "#F97316" },
    { name: "CSS", category: "code", level: "Responsive Styling", icon: "FileCode2", color: "#3B82F6" },
    { name: "JavaScript", category: "code", level: "Dynamic Web Apps", icon: "Braces", color: "#EAB308" },
    { name: "Git", category: "tools", level: "Version Control", icon: "GitBranch", color: "#F05032" },
    { name: "GitHub", category: "tools", level: "Collaboration", icon: "Github", color: "#7C3AED" },
    { name: "Visual Studio Code", category: "tools", level: "Primary IDE", icon: "Terminal", color: "#007ACC" },
    { name: "Figma", category: "design", level: "UI/UX & Systems", icon: "Figma", color: "#A259FF" },
    { name: "Canva", category: "design", level: "Creative Graphics", icon: "Palette", color: "#00C4CC" },
  ],

  projects: [
    {
      id: "studyya",
      num: "01",
      name: "StudyYa",
      tagline: "Smart Study Assistant",
      category: "Productivity",
      description:
        "A student-focused web application designed to support academic organization, study planning, and productivity through an intuitive digital experience.",
      highlights: ["Study Planning", "Academic Organization", "Student Productivity"],
      liveUrl: "https://studyya-six.vercel.app/",
      githubUrl: undefined, // No repo URL invented
      accentColor: "#9333EA",
      accentBg: "#F5EEFD",
      darkAccentBg: "#2A183D",
      symbol: "✧",
    },
    {
      id: "studyflow",
      num: "02",
      name: "StudyFlow",
      tagline: "Student Productivity Planner",
      category: "Academic Utility",
      description:
        "An interactive academic productivity application for organizing tasks, managing schedules, and supporting focused study sessions.",
      highlights: ["Task Management", "Study Calendar", "Focus Timer"],
      liveUrl: "https://study-flow-emf5.vercel.app/",
      githubUrl: "https://github.com/shixxcvb/study-flow",
      accentColor: "#7C3AED",
      accentBg: "#F3E8FF",
      darkAccentBg: "#26153B",
      symbol: "✦",
    },
    {
      id: "pennywise",
      num: "03",
      name: "PennyWise",
      tagline: "Personal Expense Tracker",
      category: "FinTech",
      description:
        "A personal finance application designed to help users track expenses, manage budgets, and understand spending patterns.",
      highlights: ["Expense Tracking", "Budget Management", "Financial Analytics"],
      liveUrl: "https://penny-wise-r4rc.vercel.app/",
      githubUrl: undefined, // No repo URL invented
      accentColor: "#059669",
      accentBg: "#ECFDF5",
      darkAccentBg: "#112C23",
      symbol: "◈",
    },
    {
      id: "booknest",
      num: "04",
      name: "BookNest",
      tagline: "Digital Bookstore",
      category: "E-Commerce",
      description:
        "An interactive bookstore experience for discovering books, exploring titles, saving favorites, and managing a demonstration shopping cart.",
      highlights: ["Book Discovery", "Wishlist", "Shopping Cart"],
      liveUrl: "https://book-nest-five-beryl.vercel.app/",
      githubUrl: "https://github.com/shixxcvb/book-nest",
      accentColor: "#E11D48",
      accentBg: "#FFF1F2",
      darkAccentBg: "#3B1422",
      symbol: "✪",
    },
  ],

  education: [
    {
      id: "dnsc",
      institution: "Davao del Norte State College",
      degree: "Bachelor of Science in Information Technology",
      yearLevel: "Fourth Year",
      status: "Currently Studying",
      current: true,
      description:
        "Actively developing production-ready web applications, collaborating on software laboratory systems, and refining modern UI/UX design workflows.",
      highlights: [
        "Major in Information Technology",
        "Live student web application deployments",
        "Team collaborative laboratory exercises",
      ],
    },
    {
      id: "sdnhs",
      institution: "Southern Davao National High School",
      degree: "Secondary Education",
      status: "Completed",
      current: false,
      description:
        "Solid foundational coursework emphasizing analytical thinking, early computer literacy, and collaborative teamwork.",
      highlights: [
        "Junior & Senior High School completion",
        "Early discovery of digital tools and tech curiosities",
      ],
    },
    {
      id: "pces",
      institution: "Panabo Central Elementary School SPED Center",
      degree: "Elementary Education",
      status: "Completed",
      current: false,
      description:
        "Foundational elementary education building the groundwork for creative inquiry, communication, and discipline.",
      highlights: [
        "Primary education milestone",
        "Participation in academic and cultural school activities",
      ],
    },
  ],

  academicExperience: [
    {
      title: "Academic Web & Frontend Development",
      category: "Coursework & Labs",
      description:
        "Developed multiple interactive client-side web applications using semantic HTML, responsive CSS layouts, and modern JavaScript DOM logic.",
      deliverables: ["Responsive Multi-Device Layouts", "Client-Side State & Logic", "Clean Semantic Coding"],
    },
    {
      title: "Full Application Development Practice",
      category: "Software Projects",
      description:
        "Conceptualized, engineered, and deployed four functional web tools (StudyYa, StudyFlow, PennyWise, and BookNest) on Vercel to solve student and daily needs.",
      deliverables: ["Productivity & Task Tracking Systems", "Personal Finance Tracking", "Interactive Digital Storefront"],
    },
    {
      title: "UI/UX Prototyping & Visual Systems",
      category: "Design Practice",
      description:
        "Transformed problem statements into user journey flows, wireframes, and high-fidelity interface prototypes using Figma and Canva.",
      deliverables: ["Design System Foundations", "Accessibility & Contrast Standards", "Delightful Micro-Interactions"],
    },
    {
      title: "Git Collaboration & Repository Hygiene",
      category: "Team Workflow",
      description:
        "Practiced version control workflows, repository management, branch integration, and peer reviews during university IT laboratory projects.",
      deliverables: ["Branching & Commit Workflows", "GitHub Project Hosting", "Vercel Continuous Deployments"],
    },
  ],

  continuousLearning: [
    {
      title: "Building Real-World Web Apps",
      desc: "Translating course concepts into live, accessible, and functional web applications on Vercel.",
      badge: "Real Builds",
    },
    {
      title: "Modern Frontend Craft",
      desc: "Exploring expressive typography, micro-interactions, responsive flex/grid math, and UI performance.",
      badge: "UI Engineering",
    },
    {
      title: "Creative Interface Design",
      desc: "Studying aesthetic color harmonies, whimsical illustration, motion design, and user psychology.",
      badge: "Design Direction",
    },
    {
      title: "Tooling & Version Control",
      desc: "Refining daily workflows across VS Code, Git CLI, GitHub repositories, and automated builds.",
      badge: "Developer Habits",
    },
  ],
};
