import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import jobImage from "../../assets/job8.png"; 
import jobImageOverlay from "../../assets/job8.1.png"; 

const FullScreenImageWithAnimation = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const [imageStyle, setImageStyle] = useState({});
  const [overlayStyle, setOverlayStyle] = useState({});

  const updateImageSize = () => {
    if (containerRef.current && imageRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const containerWidth = containerRef.current.offsetWidth;
      const imageHeight = imageRef.current.naturalHeight;
      const imageWidth = imageRef.current.naturalWidth;

      if (!imageHeight || !imageWidth) return; 

      const scaleFactor = Math.min(containerHeight / imageHeight, containerWidth / imageWidth);
      
      setImageStyle({
        width: `${imageWidth * scaleFactor}px`, 
        height: `${imageHeight * scaleFactor}px`, 
      });

      // 计算前景图大小 & 位置（比背景图小 30%）
      setOverlayStyle({
        width: `${(imageWidth * scaleFactor) * 0.7}px`,
        bottom: "82%", // 调整位置
      });
    }
  };

  useEffect(() => {
    if (imageRef.current.complete) {
      updateImageSize();
    } else {
      imageRef.current.onload = updateImageSize;
    }

    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen flex justify-center items-center app-container overflow-hidden"
    >
      <motion.img
        ref={imageRef}
        src={jobImage}
        alt="Background Image"
        style={imageStyle}
        className="object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <img
        ref={overlayRef}
        src={jobImageOverlay}
        alt="Overlay Image"
        className="absolute left-1/2 transform -translate-x-1/2 z-10 cursor-pointer transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
        style={overlayStyle}
      />
    </div>
  );
};

export default FullScreenImageWithAnimation;