import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const VIDEOS = [
  {
    id: 1,
    label: "氷竜の頂へ",
    src: "Art/1.mp4",
    explanation: "ライアンナは真実を求め、氷竜の頂へと旅立つ。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "女術士 - ライアンナ・ヴェルト",
          "北方の名門・ヴェルト家の令嬢。",
          "魔晶石の事故により視力を失うも、彼女は気高き誇りを失わず、決して退かぬ。",
          "遠き声に導かれ、万丈の氷竜の頂へと歩みを進める。",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: 6時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
  {
    id: 2,
    label: "欠損修道女の物語",
    src: "Art/2.mp4",
    explanation: "修道女か、それとも騎士か。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "欠損修道女 - マリリン・スコット・グランド",
          "青の国のスコット家の令嬢。絶世の美貌を持つが、生まれつき両腕を持たぬ。",
          "家のしがらみを逃れ、修道女となる。義肢を操り、祈りの姿を完璧に模倣する。",
          "しかし彼女の心は騎士への憧れに燃え続けていた。その道は、果てなき試練の連続。",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: 6.6時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
  {
    id: 3,
    label: "流浪の英雄",
    src: "Art/3.mp4",
    explanation: "帰る家はなく、終わらぬ戦いがある。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "不敗の豪傑 - アレン・エールズ",
          "剣を手に取り、若き日に誓った——山河万里を駆け巡ると。",
          "青春の熱き想いとともに戦場へと向かい、戦鼓の響きに心を馳せる。",
          "故郷の煙は遠き夢、今は寒霜にその身をさらすのみ。",
          "鉄馬は凍てつき、忠義の魂は戦塵に消え、沈む夕日がただ孤独を照らす。",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: 8時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
  {
    id: 4,
    label: "双子の旅",
    src: "Art/4.mp4",
    explanation: "互いに救いを求める、二人の物語。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "金細工師 - ケルト・クライン",
          "聡明な兄と、活発な妹。",
          "妹は修道女マリリンの熱心な信者、兄は学都での学びのために日々働く。",
          "この二人が行きつく未来とは——？",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: 6時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
  {
    id: 5,
    label: "双子の旅",
    src: "Art/5.mp4",
    explanation: "互いに救いを求める、二人の物語。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "俳優 - クリスティーナ・クライン",
          "聡明な兄と、活発な妹。",
          "妹は修道女マリリンの熱心な信者、兄は学都での学びのために日々働く。",
          "この二人が行きつく未来とは——？",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: ７時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
  {
    id: 6,
    label: "黒竜の終焉の地",
    src: "Art/6.mp4",
    explanation: "黒竜の娘が歩む、終焉の旅。",
    content: {
      role: {
        title: "キャラクター紹介",
        lines: [
          "黒竜の娘 - アミダラ",
          "黒竜の血を引く少女、そして修道女。",
          "世界とは何か—— 彼女の旅の果てに、その答えはあるのか。",
        ],
      },
      info: {
        title: "制作情報",
        lines: [
          "制作時間: ８時間",
          "使用ツール: Clip Studio Paint",
          "アニメーション: hailuoAI",
        ],
      },
      story: {
        title: "物語の詳細",
        lines: ["現在制作中..."],
      },
    },
  },
];

const VideoShowcaseGSAP = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const videoRef = useRef(null);
  const playStopButtonRef = useRef(null);
  const infoButtonRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  // 切换视频时停止播放并重置
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [activeVideoIndex]);

  // 按钮动画：鼠标悬停
  const handleButtonHover = (buttonRef) => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // 按钮动画：鼠标移开
  const handleButtonLeave = (buttonRef) => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // 按钮动画：点击
  const handleButtonClick = (buttonRef) => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "bounce.out",
        });
      },
    });
  };

  // 播放/停止视频
  const handleToggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const currentVideo = VIDEOS[activeVideoIndex];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-8">
      {/* 主要角色设定 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-[80px]">
        主要なキャラクター設定と主人公のAI対話システム
      </h2>

      {/* 顶部切换视频按钮 */}
      <div className="z-10 flex space-x-4 mt-2">
        {VIDEOS.map((v, idx) => (
          <button
            key={v.id}
            onClick={() => setActiveVideoIndex(idx)}
            className={`px-4 py-2 rounded border-2 transition ${
              idx === activeVideoIndex
                ? "border-blue-500 text-blue-500 font-bold"
                : "border-gray-400 text-gray-600"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* 视频区域 */}
      <div className="relative w-[75vw] h-[70vh] mt-4 bg-[#E8E0D1] rounded shadow-md flex items-center justify-center">
        <video
          ref={videoRef}
          src={currentVideo.src}
          loop
          className="object-contain w-full h-full rounded"
        />

        {/* 右上角：再生/停止 & 详细信息按钮 */}
        <div className="absolute top-3 right-3 z-30 flex gap-x-3">
          {/* 播放 / 停止 按钮 */}
          <button
            ref={playStopButtonRef}
            onMouseEnter={() => handleButtonHover(playStopButtonRef)}
            onMouseLeave={() => handleButtonLeave(playStopButtonRef)}
            onMouseDown={() => handleButtonClick(playStopButtonRef)}
            onClick={handleToggleVideo}
            className="px-5 py-2 rounded-lg shadow-lg text-white font-semibold 
               bg-gradient-to-r from-red-500 to-red-700 
               hover:from-red-600 hover:to-red-800 
               transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? "停止" : "再生"}
          </button>

          {/* 详细信息 按钮 */}
          <button
            ref={infoButtonRef}
            onMouseEnter={() => handleButtonHover(infoButtonRef)}
            onMouseLeave={() => handleButtonLeave(infoButtonRef)}
            onMouseDown={() => handleButtonClick(infoButtonRef)}
            onClick={() => setShowInfo(!showInfo)}
            className="px-5 py-2 rounded-lg shadow-lg text-white font-semibold 
               bg-gradient-to-r from-blue-500 to-blue-700 
               hover:from-blue-600 hover:to-blue-800 
               transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {showInfo ? "情報を閉じる" : "詳細情報"}
          </button>
        </div>

        {/* 详细信息区域 */}
        {showInfo && (
          <div className="absolute bottom-0 left-0 w-full p-4 z-20 text-white">
            <div className="bg-black/50 rounded p-4 max-h-[50%] overflow-auto">
              <h2 className="text-2xl font-bold mb-2">{currentVideo.label}</h2>
              <p className="text-lg mb-4">{currentVideo.explanation}</p>

              {/* 角色介绍 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {currentVideo.content.role.title}
                </h3>
                {currentVideo.content.role.lines.map((line, idx) => (
                  <p key={idx} className="text-md">
                    {line}
                  </p>
                ))}
              </div>

              <div className="border-t border-gray-300 my-4 opacity-50" />

              {/* 制作信息 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {currentVideo.content.info.title}
                </h3>
                {currentVideo.content.info.lines.map((line, idx) => (
                  <p key={idx} className="text-md">
                    {line}
                  </p>
                ))}
              </div>

              <div className="border-t border-gray-300 my-4 opacity-50" />

              {/* 物語の詳細 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {currentVideo.content.story.title}
                </h3>
                {currentVideo.content.story.lines.map((line, idx) => (
                  <p key={idx} className="text-md">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcaseGSAP;
