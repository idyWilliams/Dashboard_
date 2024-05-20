"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface AvatarCarouselProps {
  images: StaticImageData[];
}

const AvatarCarousel: React.FC<AvatarCarouselProps> = ({ images }) => {
  const controls = useAnimation();

  // useEffect(() => {
  //   const sequence = async () => {
  //     while (true) {
  //       await controls.start({
  //         x: ["0%", "-100%", "100%"],
  //         transition: { duration: 1, ease: "easeInOut" },
  //       });
  //       await controls.start({
  //         x: ["100%", "0%", "-100%"],
  //         transition: { duration: 1, ease: "easeInOut" },
  //       });
  //     }
  //   };

  //   sequence();
  // }, [controls]);

  return (
    <div className="relative w-12 h-12 ">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-12 h-12 rounded-full"
          style={{ zIndex: images.length - index }}
          // animate={controls}
        >
          <Image
            src={src}
            alt={`Avatar ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AvatarCarousel;
