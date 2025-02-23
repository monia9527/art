import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const sentenceVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CondensedStorySetting = () => {
  return (
    <section className="min-h-screen relative overflow-hidden p-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wide mb-6"
            variants={sentenceVariant}
          >
            世界設定
          </motion.h1>
          <motion.div className="space-y-4" variants={containerVariants}>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              この世界には広大な大陸と遥かなる群島が存在する。
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              かつて大陸では竜人と飛竜が激しく争い、終わりなき戦乱に包まれていたが、
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              戦いに疲れ果てた五体の神級飛竜―
              <span className="text-blue-600 font-bold">氷竜</span>、
              <span className="text-green-600 font-bold">青竜</span>、
              <span className="text-red-600 font-bold">火竜</span>、
              <span className="text-yellow-600 font-bold">雷竜</span>、
              <span className="text-gray-700 font-bold">黒竜</span>―
              は争いを捨て、群島へと飛び去った。
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              それぞれは「氷の領域」「青竜の国」「炎の大地」「砂漠の群島」「黒竜の隠れ里」といった神秘的な領域を築き、
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              北方の険しい山々に広がる「氷の領域」では、氷竜の支配のもと、巨大な山脈と輝く魔力結晶が神秘の雰囲気を醸し出し、
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              群島中央の「青竜の国」は、温暖な気候と豊かな平原に包まれ、青竜の慈愛により平和と繁栄が息づいている。
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              南部の「炎の大地」は、火竜の力が刻む灼熱の火山地帯で、溶岩と炎が絶えず流れ、
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              広大な砂漠に点在する「砂漠の群島」は、雷竜の激しい嵐と稲妻の力を宿し、
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              そして、世間の喧騒を離れた「黒竜の隠れ里」では、黒竜の影と神秘が宿る秘境として信者たちが陰と光の調和を求める。
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed" variants={sentenceVariant}>
              こうして、五大神竜の恩恵を受けた五つの地域は、かつての戦乱に終止符を打ち、新たな信仰と秩序のもとで世界の礎となった。
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CondensedStorySetting;