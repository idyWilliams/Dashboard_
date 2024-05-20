"use client"

import AvatarCarousel from "@/components/AvatarCarousel";
import avatar1 from "/public/avata.png";
import avatar2 from "/public/avata2.png";
import avatar3 from "/public/avata3.png";
import vector from "/public/vector.png";
import InputWithButton from "@/components/CustomInput";
import { useState } from "react";
import JobsTab from "@/components/Tab";
import Image from "next/image";
import pattern from "/public/Union.png"


export default function Home() {
  const avatars = [avatar1, avatar2, avatar3];
   const [searchTerm, setSearchTerm] = useState("");

   const handleButtonClick = () => {
     console.log("Button clicked!");
   };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>

      </div>
      <div className="mt-16">
        <div className="text-[#202229] text-6xl font-extrabold text-center space-y-2">
          <span className="flex items-center gap-3">
            <span>Finding the right fit</span>
            <AvatarCarousel images={avatars} />
            <span>has</span>
          </span>
          <span className="text-center mt-2">never been easier.</span>
        </div>
        <p className="text-[#202229] font-light text-center mt-6">
          With our rigorous pre-vetting process, you&apos;ll never have to{" "}
          <br /> worry about finding the ideal candidate ever again.
        </p>

        <div className="p-4 text-center mx-auto flex items-center justify-center">
          <InputWithButton
            value={searchTerm}
            onChange={setSearchTerm}
            buttonImageSrc={vector.src}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
      <div>
        <JobsTab />
      </div>
      <div className="w-full ">
        {/* <AspectRatio ratio={1 / 1}> */}
        <Image src={pattern} alt="bg-img"  className="h-24 w-full" />
        {/* </AspectRatio> */}
      </div>
    </main>
  );
}
