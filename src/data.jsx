//  icons
import { FiInstagram, FiWhatsapp, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/typescript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/jesus_rosarioav/",
    color: "text-purple-500",
    colorHover: "hover:text-pink-900",
  },
  {
    icon: <FiWhatsapp />,
    href: "https://wa.me/15512755320",
    color: "text-green-500",
    colorHover: "hover:text-teal-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/jar285",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "www.linkedin.com/in/jesus-adonis-rosario-vargas-371508255",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

export const sections = [
  {
    title: "Figma Developer",
    content:
      "Experienced in Figma for UI/UX design, creating responsive layouts, and prototyping. Skilled in turning Figma designs into functional interfaces, utilizing Figma plugins, and improving workflows with Figma's API. Proficient in blending design with development for seamless application transitions."
  },
  {
    title: "Backend Developer",
    content:
      "I have minor experience developing backends using SQL databases such as MySQL and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, and have experience developing responsive and user-friendly web applications.",
  },
];