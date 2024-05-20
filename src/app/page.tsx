"use client";

import AvatarCarousel from "@/components/AvatarCarousel";
import avatar1 from "/public/avata.png";
import avatar2 from "/public/avata2.png";
import avatar3 from "/public/avata3.png";
import vector from "/public/vector.png";
import vectorLIght from "/public/vectorLight.png";
import vectorLeft from "/public/vectorLeft.png";
import InputWithButton from "@/components/CustomInput";
import React, { useState } from "react";
import JobsTab from "@/components/Tab";
import Image, { StaticImageData } from "next/image";
import pattern from "/public/Union.png";
import bg from "/public/bg1.png";
import shopify from "/public/shopify.png";
import figma from "/public/figma.png";
import data from "/public/data.png";
import webflow from "/public/webflow.png";
import dotnet from "/public/dotnet.png";
import photoshop from "/public/photoshop.png";
import AI from "/public/AI.png";
import unreal from "/public/unreal.png";
import cenima from "/public/cenima.png";
import magneto from "/public/magneto.png";
import { FaAward } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";

export default function Home() {
  const avatars = [avatar1, avatar2, avatar3];
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div></div>
      <div className="mt-16 sm:px-6 lg:px-8">
        <div className="text-[#202229] text-2xl lg:text-6xl font-extrabold text-center space-y-2">
          <span className="flex items-center gap-3 justify-center">
            <span>Finding the right fit</span>
            <AvatarCarousel images={avatars} />
            <span>has</span>
          </span>
          <span className="text-center mt-2">never been easier.</span>
        </div>
        <p className="text-[#202229] text-sm lg:text-base font-light text-center mt-6">
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
      <div className="sm:px-6 lg:px-8">
        <JobsTab />
      </div>
      <div className="w-full mb-12 ">
        {/* <AspectRatio ratio={1 / 1}> */}
        <Image src={pattern} alt="bg-img" className="h-24 w-full" />
        {/* </AspectRatio> */}
      </div>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0 -top-20">
          <Image
            src={bg}
            alt="auth-bg-pattern"
            fill
            // style={{ objectFit: "cover" }}
            className="w-full h-screen"
          />
        </div>
        <div className="relative z-10  w-full h-full mt-5 lg:mt-20">
          <div className="text-[#202229] text-xl lg:text-6xl font-extrabold text-center space-y-2">
            <span className="flex items-center gap-3 justify-center">
              <span>Your one-stop marketplace for finding</span>
            </span>
            <span className="text-center mt-2">
              {" "}
              the talent your business needs.
            </span>
          </div>
          <div className="mt-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <TechSkill
                header="Find Dev and IT professionals to scale your business."
                breakWord="to"
              />
              <TechStack data={ITData} header="IT & Development" />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <TechSkill
                header="Explore Creative individuals with a keen eye for detail.  "
                breakWord="a"
              />
              <TechStack data={designData} header="Design & Creative" />
              <div>
                <button className="bg-[#0000] p-4 border">
                  <Image
                    src={vectorLIght}
                    alt={"vector"}
                    width={40}
                    height={40}
                    className="h-4 w-6"
                  />
                </button>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <span className="font-semibold">30 more</span>
                <span className="text-[#202229CC]">to explore</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

interface IRole {
  image: StaticImageData;
  name: string;
  title: string;
}

const ITData: IRole[] = [
  {
    image: shopify,
    name: "Shopify Developer",
    title: "Shopify Developer",
  },
  {
    image: magneto,
    name: "Magento Developer",
    title: "Magento Developer",
  },
  {
    image: data,
    name: "Data Scientist",
    title: "Data Scientist",
  },
  {
    image: webflow,
    name: "Webflow Developer",
    title: "Webflow Developer",
  },
  {
    image: dotnet,
    name: "Dot-Net Developer",
    title: "Dot-Net Developer",
  },
  {
    image: vector,
    name: "",
    title: "",
  },
];

const designData: IRole[] = [
  {
    image: vectorLeft,
    name: "",
    title: "",
  },
  {
    image: figma,
    name: "UX Designer",
    title: "UX Designer",
  },
  {
    image: photoshop,
    name: "Graphics Designer",
    title: "Graphics Designer",
  },
  {
    image: AI,
    name: "Illustration Artist",
    title: "Illustration Artist",
  },
  {
    image: unreal,
    name: "Unreal Engine",
    title: "Unreal Engine",
  },
  {
    image: cenima,
    name: "Cinema 4D",
    title: "Cinema 4D",
  },
];

interface TechStackProps {
  data: IRole[];
  header: string;
}

const TechStack: React.FC<TechStackProps> = ({ data, header }) => {
  return (
    <div className="bg-white lg:h-60 p-5 rounded-md">
      <h2 className=" font-bold">{header}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 py-8">
        {data.map((role, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center">
              <Image
                src={role.image}
                alt={role.name}
                width={40}
                height={40}
                className="h-8 w-8"
              />
            </div>
            <span className="text-center">
              {role.name.split(" ").map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  {i < role.name.split(" ").length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IProps{
  header: string;
  breakWord: string;
}

const TechSkill: React.FC<IProps> = ({ header, breakWord }) => {
    const headerParts = header.split(` ${breakWord} `);
  return (
    <div className="bg-[#EDEFFF]  h-60 p-5">
      <h2 className=" font-bold">
        {" "}
        {headerParts[0]} {breakWord} <br /> {headerParts[1]}
      </h2>
      <div className="grid grid-cols-2 gap-4 py-8">
        <div>
          <FaAward className="rotate-180   text-[#A285D0]" />
          <span className="text-sm font-light text-[#202229CC]">
            989 Skills
          </span>
        </div>
        <div>
          <MdDashboard className="  text-[#A285D0]" />
          <span className="text-sm font-light text-[#202229CC]">
            45 Sub-Categories
          </span>
        </div>
        <div>
          <RiUserStarFill className="  text-[#A285D0]" />
          <span className="text-sm font-light text-[#202229CC]">
            1011 Profiles
          </span>
        </div>
      </div>
    </div>
  );
};
