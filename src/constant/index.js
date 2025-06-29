import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaBootstrap, FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiOracle,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
  SiMicrosoftaccess,
} from "react-icons/si";
import { DiNodejs, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import website_1 from "../assets/website_1.png";
import website_2 from "../assets/website_2.png";
import website_3 from "../assets/website_3.png";
import website_4 from "../assets/website_4.png";
import weather_app from "../assets/Weather_app.png";
import uni_img from "../assets/university.png";
import college_img from "../assets/college.jpeg";
import school_img from "../assets/school.jpeg";
import ausesImage from "../assets/auses.svg";
import mlsaImage from "../assets/mlsa.svg";
// import uni_icon from '../assets/university.ico'
// import school_icon from '../assets/school.ico'
// import college_icon from '../assets/college.ico'
export const navbarData = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skill",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Projects",
    link: "project",
  },

  {
    title: "Education",
    link: "education",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const socialLinks = [
  {
    id: "facebook",
    link: "https://www.facebook.com/profile.php?id=100084960996586&mibextid=JRoKGi",
    icon: FaFacebookF,
  },
  {
    id: "twitter",
    link: "https://x.com/FaizanS76287082?t=wFe05D98LDt1ZhcL3J5rdg&s=09",
    icon: FaTwitter,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/faizan-siddique-b20962298/",
    icon: FaLinkedinIn,
  },
  {
    id: "github",
    link: "https://github.com/faizan-siddique193",
    icon: FaGithub,
  },
];
export const experience = [
  {
    name: "Auses Society",
    image: ausesImage,
    date: "Nov 2023 - Jan 2024",
    about:
      "In my first semester, I joined the AUSES Society, where I gained hands-on experience in basic web development. I worked on simple projects using HTML, CSS, and JavaScript, which helped me build a solid foundation in frontend development and sparked my interest in coding. This experience enhanced my problem-solving skills and laid the groundwork for my future studies in software engineering",
  },
  {
    name: "MLSA Society",
    image: mlsaImage,
    date: "Oct 2024 present",
    about:
      "As a team member of the developer group at MLSA society, Im actively involved in collaborating with talented developers to improve my technical skills. Although I haven’t worked on specific projects yet, this experience has been invaluable in expanding my knowledge of the latest development trends, tools, and practices. I’m excited to contribute to upcoming initiatives and grow alongside my peers in this dynamic environment.",
  },
];
export const educationData = [
  {
    AcademyName: "Air University",
    image: uni_img,
    degree: "Bachlor of Science in Software Engineering",
    date: "sep 2023 - sep 2027",
    about:
      "I am currently pursuing a Bachelor’s degree in Software Engineering at Air University Islamabad. This program equips me with a strong foundation in software development, algorithms, and system design, while fostering skills in problem-solving, teamwork, and innovation. My studies are focused on preparing me to excel in modern technological challenges and contribute to cutting-edge software solutions.",
  },
  {
    AcademyName: "Govt College of Science Samanabad Faisalabad",
    image: college_img, // Replace with your image path
    degree: "FSC in Pre-Engineering",
    date: "Apr 2021 - Apr 2022",
    about:
      "I completed my FSc in Pre-Engineering in 2022, where I focused on subjects like mathematics, physics, and chemistry. This helped me develop a strong analytical mindset and a deeper understanding of the technical principles that I continue to apply in my studies today.",
  },
  {
    AcademyName: "Govt Comprehensive Model Heigher School Samanabad Faisalabad",
    image: school_img, // Replace with your image path
    degree: "Matric in Science (Biology)",
    date: "Apr 19 - Apr 2020",
    about:
      "In 2020, I graduated with my Matriculation in Science, which introduced me to key subjects like biology, physics, and chemistry. This early education sparked my interest in engineering and set the stage for my future academic pursuits.",
  },
];

export const skillsData = [
  {
    title: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    level: 95,
  },
  {
    title: "CSS3",
    icon: FaCss3,
    color: "#663399",
    level: 85,
  },
  {
    title: "Bootstrap",
    icon: FaBootstrap,
    color: "#7952B3",
    level: 80,
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
    level: 80,
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
    level: 75,
  },
  {
    title: "React Js",
    icon: FaReact,
    color: "#61DAFB",
    level: 90,
  },
  {
    title: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    level: 85,
  },
  {
    title: "Node js",
    icon: DiNodejs,
    color: "#5FA04E",
    level: 80,
  },
  {
    title: "Express js",
    icon: SiExpress,
    color: "#000000",
    level: 85,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 80,
  },
  {
    title: "Oracle",
    icon: SiOracle,
    color: "#F80000",
    level: 75,
  },
  {
    title: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    level: 85,
  },
  {
    title: "MS Word",
    icon: SiMicrosoftword,
    color: "#2B579A",
    level: 95,
  },
  {
    title: "MS Powerpoint",
    icon: SiMicrosoftpowerpoint,
    color: "#D24726",
    level: 90,
  },
  {
    title: "MS Excel",
    icon: SiMicrosoftexcel,
    color: "#217346",
    level: 70,
  },
  {
    title: "MS Access",
    icon: SiMicrosoftaccess,
    color: "#A4373A",
    level: 65,
  },
  {
    title: "VS Code",
    icon: VscVscode,
    color: "#007ACC",
    level: 95,
  },
  {
    title: "Visualstudio",
    icon: DiVisualstudio,
    color: "#5C2D91",
    level: 80,
  },
  {
    title: "Github",
    icon: FaGithub,
    color: "#181717",
    level: 75,
  },
  {
    title: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 85,
  },
];

export const skills = [
  {
    title: "HTML5",
    icon: FaHtml5,
  },
  {
    title: "CSS3",
    icon: FaCss3,
  },
  {
    title: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    title: "React Js",
    icon: FaReact,
  },
  {
    title: "Redux",
    icon: SiRedux,
  },
  {
    title: "Node js",
    icon: DiNodejs,
  },
  {
    title: "Express js",
    icon: SiExpress,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Oracle",
    icon: SiOracle,
  },
  {
    title: "Postman",
    icon: SiPostman,
  },
];
export const projects = [
  {
    title: "SafeFundz",
    techStack: ["HTML5", "CSS3"],
    image: website_1,
    created: "December 12,2023",
    link: "https://non-profit-by-faizan.netlify.app",
    description:
      "I developed this project in my first semester, gaining hands-on experience with foundational coding skills and learning the basics of debugging and user interface design. This project laid a strong groundwork for my studies in software engineering, strengthening my problem-solving and technical abilities.",
  },
  {
    title: "Life Fitness Gym",
    techStack: ["HTML5", "CSS3"],
    image: website_2,
    created: "March 5,2024",
    link: "https://life-fitness-gym-faizan.netlify.app",
    description:
      "I developed this project as part of my work with the AUSES society in my second semester, using HTML and CSS. This role allowed me to contribute to meaningful projects, improve my front-end design skills, and gain experience in creating user-friendly interfaces.",
  },
  {
    title: "Iha Agency",
    techStack: ["HTML5", "CSS3"],
    image: website_4,
    created: "March 5,2024",
    link: "https://iha-agency-faizansiddique.netlify.app",
    description:
      "I developed this project as part of my work with the AUSES society in my second semester, using HTML and CSS. This role allowed me to contribute to meaningful projects, improve my front-end design skills, and gain experience in creating user-friendly interfaces.",
  },
  {
    title: "Todo App",
    techStack: ["React Js", "Redux Toolkit", "Talwind", "Local Storage"],
    image: website_3,
    created: "July 24,2024",
    link: "https://todo-app-faizansiddique193.netlify.app",
    description:
      "I created this Todo List project while independently learning React JS, Redux Toolkit, Tailwind CSS, and local storage. This project helped me strengthen my understanding of modern JavaScript frameworks, state management, and responsive design, enhancing my skills for dynamic web applications.",
  },
  {
    title: "Weather App",
    techStack: ["React Js", "Context Api","Weather Api","Axios",  "Talwind", "Local Storage"],
    image: weather_app,
    created: "Feburary 19,2025",
    link: "https://atmoslive.netlify.app/",
    description:
      "A clean, user-friendly weather application that displays real-time conditions, hourly forecasts, and essential atmospheric data—including temperature, RealFeel, humidity, and wind speed. Built with React.js and powered by a weather API, it delivers accurate information in a simple, intuitive interface",
  },
];
