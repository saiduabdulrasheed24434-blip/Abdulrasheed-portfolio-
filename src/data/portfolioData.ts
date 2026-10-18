import { Skill, EducationItem, Project } from '../types';

export const personalInfo = {
  name: "Abdulrasheed Saidu",
  title: "ICT Specialist & Systems Developer",
  email: "saiduabdulrasheed24434@gmail.com",
  phone: "08055007306",
  tagline: "Specializing in hardware maintenance, system installations, web development, and ICT education. Bridging technical infrastructure with digital solutions.",
  aboutPrimary: "I am an ICT Specialist with a strong foundation in Computer Science from Auchi Polytechnic. My expertise spans hardware troubleshooting, operating system deployments, network setup, and front-end web technologies including HTML, CSS, and modern web applications.",
  aboutSecondary: "Alongside core ICT infrastructure, I have professional training in technical operations, Computer Studies education, and Petroleum Product Marketing with certification from the Oil & Gas Education & Research Academy.",
  githubUrl: "https://github.com/saiduabdulrasheed24434-blip"
};

export const skillsData: Skill[] = [
  {
    id: "hardware",
    icon: "fa-laptop-medical",
    title: "Hardware & Diagnostics",
    description: "Computer hardware maintenance, component diagnostic tests, system upgrades, and preventive care.",
    category: "Hardware"
  },
  {
    id: "web-dev",
    icon: "fa-code",
    title: "Web Development",
    description: "Building clean, semantic, and responsive websites using HTML, CSS, and interactive JavaScript.",
    category: "Development"
  },
  {
    id: "systems",
    icon: "fa-server",
    title: "Systems Deployment",
    description: "OS installation, configuration, driver management, network troubleshooting, and technical support.",
    category: "Systems"
  },
  {
    id: "education",
    icon: "fa-chalkboard-user",
    title: "Computer Instruction",
    description: "Teaching computer studies, digital literacy, and mentoring students in ICT principles.",
    category: "Education"
  },
  {
    id: "petroleum",
    icon: "fa-oil-well",
    title: "Petroleum Technical Ops",
    description: "Petroleum product marketing training, operations workflow, and technical safety standards.",
    category: "Certifications"
  },
  {
    id: "certifications",
    icon: "fa-certificate",
    title: "Certifications",
    description: "SoloLearn Certified Developer & Oil & Gas Education & Research Academy credentials.",
    category: "Certifications"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "auchi-hnd",
    institution: "Auchi Polytechnic",
    period: "Graduated 2017",
    title: "Higher Level Computer Science & Technology Studies",
    details: "Advanced coursework in system architecture, network fundamentals, programming, and database principles."
  },
  {
    id: "auchi-ond",
    institution: "Auchi Polytechnic — Upper Credit",
    period: "Graduated 2013",
    title: "Ordinary National Diploma (OND) in Computer Science",
    details: "Graduated with Upper Credit distinction, covering software concepts, hardware mechanics, and computer logic."
  }
];

export const certificationsData = [
  {
    name: "SoloLearn",
    description: "Certified in Web Development fundamentals & programming concepts."
  },
  {
    name: "Oil & Gas Education & Research Academy",
    description: "Petroleum Product Marketing Certification."
  },
  {
    name: "ICT Teaching & Operations",
    description: "Computer Studies instruction and practical workshop management."
  }
];

export const projectsData: Project[] = [
  {
    id: "portfolio-web",
    title: "Developer & ICT Web Portfolio",
    description: "A clean, responsive, single-page web application showcasing hardware maintenance capabilities, technical credentials, and developer projects.",
    tags: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Vite"],
    repoUrl: "https://github.com/saiduabdulrasheed24434-blip/Abdulrasheed-portfolio-",
    icon: "fa-code",
    status: "Active",
    category: "Web Application",
    highlights: [
      "Responsive navigation with mobile drawer",
      "Interactive core competencies exploration",
      "Contact integration with email & phone dispatch",
      "Optimized layout & performance"
    ]
  },
  {
    id: "hardware-diag",
    title: "Hardware Diagnostic & Maintenance Suite",
    description: "Implementation of systematic diagnostic procedures for hardware troubleshooting, system restoration, drive partitioning, and routine OS optimization.",
    tags: ["Hardware Ops", "Sys Diagnostics", "Technical Support", "OS Deployment"],
    icon: "fa-screwdriver-wrench",
    status: "Active",
    category: "Technical Systems",
    highlights: [
      "Systematic hardware failure identification",
      "Data backup & disk partition configuration",
      "BIOS/UEFI setup & clean operating system installation",
      "Thermal management & preventative routine maintenance"
    ]
  }
];
