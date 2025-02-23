import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.png";

const Card = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

      <img
        src={project.img}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>

          <p className="text-black">{project.description}</p>

          {project.Web && (
            <motion.a
              href={project.Web}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 transition-all duration-300 hover:text-blue-400 hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              🔗 Webサイトを見る
            </motion.a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {project.technologies.map((tech, index) => (
          <span key={index} className="rounded-lg bg-[rgb(223,192,152)] p-3">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const projectData = [
  {
    id: "1",
    img: img1,
    title: "ポートフォリオウェブサイト",
    description:
      "モダンでレスポンシブなポートフォリオサイトで、スムーズなアニメーションでプロジェクトとスキルを紹介します。",
    Web: "https://nintendo-ochre.vercel.app",
    technologies: ["React.Vite", "TailwindCSS", "Framer Motion", "ThreeJs"],
  },
  {
    id: "2",
    img: img2,
    title: "エナジードリンクストア",
    description:
      "ダイナミックな商品表示とスムーズな決済プロセスを備えたエナジードリンクのeコマースウェブサイト。",
    Web: "https://energdrinkshop.vercel.app",
    technologies: ["React.Vite", "TailwindCSS"],
  },
  {
    id: "3",
    img: img3,
    title: "かわいいキャラクターデザイン",
    description:
      "デジタルメディアと印刷物のために制作されたかわいいキャラクターイラストとデザインのコレクション。",
    technologies: ["CSP", "Photoshop"],
  },
  {
    id: "4",
    img: img4,
    title: "ポスターデザイン",
    description: "デジタルメディアと印刷物のために制作されたポスターデザイン。",
    technologies: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-black md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-black">
        {projectData.map((project) => (
          <ScrollReveal key={project.id}>
            <Card project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
