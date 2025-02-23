import React from "react";
import { motion } from "framer-motion";

const GalleryIntro = () => {
  return (
    <section className="my-12 px-4">
      {/* 标题：从上方淡入，并带有轻微缩放 */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8"
      >
        ギャラリーへようこそ
      </motion.h1>

      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-center text-gray-700"
        >
          2019年から、私は本格的に絵画の世界に足を踏み入れ、日々筆をとりながら新たな表現を模索しています。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-center text-gray-700"
        >
          私の作品は、柔らかな鉛筆のタッチを活かし、繊細な線と深みのある陰影で表現される独自のスタイルが特徴です。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg text-center text-gray-700"
          style={{ perspective: "800px" }}
        >
          特に、吉田明彦の温かみある表現技法や、ファイナルファンタジーが醸し出す幻想的な世界観から大きな影響を受けています。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg text-center text-gray-700"
        >
          その影響を反映し、現実と夢が交差するかのような、心に響くアートを創り出すことを目指しています。
        </motion.p>
      </div>
    </section>
  );
};

export default GalleryIntro;