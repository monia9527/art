import React from "react";
import { motion } from "framer-motion";

// 1. 父级容器动画：控制子元素的“错峰”出现 (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // 子元素依次延时
    },
  },
};

// 2. 子元素动画：每个字母从下方淡入
const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Hero = () => {
  // 要进行逐字动画的标题文本
  const mainTitle = "シュウ テンウ".split("");

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent">
      {/* 外层容器：控制最大宽度、左右内边距、垂直间距 */}
      <div className="max-w-screen-md w-full px-6 py-20 mx-auto flex flex-col items-center text-center">
        
        {/* 主标题：使用 variants 做分割动画 */}
        <motion.h1
          className="text-5xl md:text-7xl font-light bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* 逐字渲染 */}
          {mainTitle.map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* 副标题：也可以做成逐字或逐词，这里用简单的淡入 */}
        <motion.h3
          className="text-2xl md:text-3xl font-light bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          web開発 / イラストレーター
        </motion.h3>

        {/* 段落介绍：淡入出现 */}
        <motion.p
          className="text-sm md:text-base text-gray-700 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          私は「最新の技術を活用し、クリエイティブなWebサービスを作ること」を目標にしています。<br />
          去年6月からプログラミングを学び始め、React、TailwindCSS、Framer Motion、Three.js
          などのフロントエンド技術を習得しました。個人プロジェクトとして
          「Nintendo紹介ページ」（React + Three.js + GSAP）や
          「オリジナルデザインサイト」（イラスト展示）
          を開発し、Webインタラクションやアニメーションの実装に取り組みました。
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
