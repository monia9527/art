import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";

const technologies = [
  { icon: BiLogoHtml5, name: "HTML5", color: "text-orange-500", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: BiLogoCss3, name: "CSS3", color: "text-blue-500", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: BiLogoJavascript, name: "JavaScript", color: "text-yellow-400", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: BiLogoReact, name: "React", color: "text-blue-400", link: "https://react.dev/" },
  { icon: BiLogoTailwindCss, name: "Tailwind CSS", color: "text-teal-400", link: "https://tailwindcss.com/" },
  { icon: TbBrandFramerMotion, name: "Framer Motion", color: "text-pink-400", link: "https://www.framer.com/motion/" },
  { icon: TbBrandThreejs, name: "Three.js", color: "text-white", link: "https://threejs.org/" },
];

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, 
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }, 
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } }, 
    tap: { scale: 0.9, rotate: -10, transition: { duration: 0.2 } },
  };

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="text-4xl font-semibold text-black md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              className="flex flex-col items-center cursor-pointer"
            >
              <Icon className={`text-[80px] transition-all duration-300 sm:text-[100px] md:text-[120px] ${tech.color}`} />
              <motion.span
                className="mt-2 text-lg font-semibold text-gray-800 transition-all duration-300 hover:text-gray-600"
                variants={variants}
              >
                {tech.name}
              </motion.span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;

