import React, { useState, useRef, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const years = ["ALL", "2019", "2020", "2021", "2022", "2024", "2025"];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [allImages, setAllImages] = useState([]);
  const buttonsRef = useRef([]);
  const containerRef = useRef(null);

  // 读取 JSON 数据
  useEffect(() => {
    fetch("/image.json") 
      .then((res) => res.json())
      .then((data) => {

        const imagesArray = Object.keys(data)
          .map((year) =>
            data[year].map((img) => ({
              ...img,
              year: parseInt(year), 
            }))
          )
          .flat();
        setAllImages(imagesArray);
      })
      .catch((error) => console.error("加载 JSON 失败:", error));
  }, []);

  // 筛选图片
  const filteredImages =
    selectedYear === "ALL"
      ? allImages
      : allImages.filter((img) => img.year === parseInt(selectedYear));

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 年份导航 */}
      <div
        ref={containerRef}
        className="relative flex space-x-8 mb-6 border-b-2 border-gray-200"
      >
        {years.map((year, index) => (
          <button
            key={year}
            ref={(el) => (buttonsRef.current[index] = el)}
            className={`text-lg pb-2 transition-all duration-300 ${
              selectedYear === year ? "text-black font-bold" : "text-gray-500"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* 图片网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer group rounded-lg overflow-hidden"
            onClick={() => {
              setStartIndex(index);
              setOpen(true);
            }}
          >
            {image.type === "video" ? (
              <video
                src={image.src}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                controls
              />
            ) : (
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm mt-1">ツール: {image.tools}</p>
                <p className="text-sm">制作時間: {image.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={startIndex}
        slides={filteredImages}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </div>
  );
};

export default ImageGallery;