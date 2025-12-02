// Projects data - Easy to add more projects in the future
export const projects = [
  {
    id: 1,
    title: "University Website",
    slug: "university-website",
    description: "A comprehensive educational platform featuring a complete student portal system, news and events management, online application processing, and an intuitive admin dashboard. Built with modern React and designed for scalability.",
    shortDescription: "Educational platform with student portal system",
    technologies: ["React", "Node.js", "Express", "MySQL", "Vite"],
    features: [
      "Student Portal with Dashboard",
      "News & Events Management",
      "Online Application System",
      "Admin Dashboard",
      "Responsive Design",
      "Authentication System",
      "Multi-role Portal (Student, Professor, Registrar, Admin)"
    ],
    demoUrl: "https://university-demo-evy0f2lda-augustos-projects-5f2d55de.vercel.app",
    videoPlaceholder: true, // Will be replaced with actual video/gif
    category: "Web Application",
    year: "2024"
  },
  {
    id: 2,
    title: "Barangay Community Website",
    slug: "barangay-website",
    description: "A community management system designed for local governance, featuring certificate request processing, news announcements, event management, and a comprehensive admin dashboard for efficient barangay operations.",
    shortDescription: "Community management system for local governance",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    features: [
      "Certificate Request System",
      "News & Announcements",
      "Admin Dashboard",
      "Event Management",
      "Responsive Design",
      "Document Management",
      "Application Tracking"
    ],
    demoUrl: "https://barangay-website-three.vercel.app",
    videoPlaceholder: true, // Will be replaced with actual video/gif
    category: "Web Application",
    year: "2024"
  }
  // Easy to add more projects here in the future!
  // Just copy the structure above and modify the details
];

export const stats = {
  experience: "2",
  projectsCompleted: "2+",
  technologiesUsed: "7+"
};

export const techStack = [
  { name: "React", icon: "FaReact" },
  { name: "Node.js", icon: "FaNodeJs" },
  { name: "PHP", icon: "FaPhp" },
  { name: "MySQL", icon: "FaDatabase" },
  { name: "JavaScript", icon: "FaJs" },
  { name: "HTML/CSS", icon: "FaHtml5" },
  { name: "Vite", icon: "SiVite" }
];

export const services = [
  {
    id: 1,
    title: "Custom Website Development",
    description: "Tailored websites built specifically for your needs, whether you're a student project or a growing business.",
    icon: "FaCode"
  },
  {
    id: 2,
    title: "Web Applications",
    description: "Interactive web applications with user-friendly interfaces and powerful backend systems.",
    icon: "FaLaptopCode"
  },
  {
    id: 3,
    title: "CMS Systems",
    description: "Easy-to-manage content management systems that you can update without technical knowledge.",
    icon: "FaCog"
  }
];

export const timeline = {
  planning: "1-2 weeks",
  development: "4-8 weeks",
  testing: "1-2 weeks",
  launch: "Ongoing support"
};
