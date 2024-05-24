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
import rect from "/public/rect.png";
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
import quote from "/public/quote.svg";
import groove from "/public/groove1.png";
import groove2 from "/public/groove.png";
import J1 from "/public/j1.png";
import j2 from "/public/j2.png";
import j3 from "/public/j3.png";

export default function Home() {
  const avatars = [avatar1, avatar2, avatar3];
  const jason = [avatar3];
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <main className="flex  flex-col items-center  ">
      <div className="md:mt-56 mt-20 sm:px-6 lg:px-8">
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

        <div className="py-8 text-center mx-auto flex items-center justify-center">
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

      <div className="w-full bg-cover h-[1px] md:h-[57px] mt-14 -skew-y-2">
        <Image src={pattern} alt="bg-img" className="md:h-24 h-14  w-full" />
      </div>
      <section
        className="w-full h-full md:h-screen -skew-y-3 bg-[#EDEFFF] mt-5"
        // style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className=" z-10 w-full h-full mt-20 lg:mt-20 skew-y-3 ">
          <div className="">
            <div className="text-[#202229] text-xl lg:text-6xl font-extrabold text-center space-y-2 my-10">
              <span className="flex items-center gap-3 justify-center">
                <span>Your one-stop marketplace for finding</span>
              </span>
              <span className="text-center mt-2">
                the talent your business needs.
              </span>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              <TechSkill
                header="Find Dev and IT professionals to scale your business."
                breakWord="to"
              />
              <TechStack data={ITData} header="IT & Development" />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              <TechSkill
                header="Explore Creative individuals with a keen eye for detail."
                breakWord="a"
              />
              <TechStack data={designData} header="Design & Creative" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 lg:ml-3">
                  <button className="bg-[#000] p-4 border rounded-2xl">
                    <Image
                      src={vectorLIght}
                      alt="vector"
                      width={40}
                      height={40}
                      className="h-4 w-6"
                    />
                  </button>
                  <span>Explore more</span>
                </div>
                <div className="flex items-center gap-2 text-lg lg:hidden">
                  <span className="font-semibold">30 more</span>
                  <span className="text-[#202229CC]">to explore</span>
                </div>
              </div>
              <div className="lg:flex items-center gap-2 text-lg hidden">
                <span className="font-semibold">30 more</span>
                <span className="text-[#202229CC]">to explore</span>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="bg-[#202229] w-full h-screen relative -skew-y-3 px-8">
        <div className=" w-40  z-10 absolute -right-0 -top-4">
          <Image
            src={quote}
            alt="quote"
            className="w-40 h-40"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center  h-full w-full space-y-4 md:space-y-0 md:space-x-4 skew-y-3">
          <div className=" flex-1 h-64 flex flex-col md:items-start items-center md:justify-start justify-center text-white text-2xl">
            <div className="text-[#e6e7ee] text-xl lg:text-5xl font-extrabold  space-y-2">
              <span className="flex  gap-3 ">
                <span>How it worked</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-center ">for Jason </span>
                <AvatarCarousel images={jason} />
                <span className="text-center ">at</span>
              </span>
              <Image
                src={groove}
                alt="quote"
                className="w-40 h-18 mt-4"
                // width={40}
                // height={40}
              />
            </div>
            <p className="text-[#fff] text-sm lg:text-base font-light  mt-6 text-center md:text-left">
              Zwilt enabled us to deliver on time and they’ve
              <br />
              been heavy hitters in our corner since.
            </p>
          </div>
          <div className=" flex-1 h-64 flex  text-white text-2xl mt-0 md:mt-20">
            <div>
              <span className="flex  gap-3 ">
                <Image
                  src={groove2}
                  alt="quote"
                  // className="w-40 h-15 mt-4"
                  // width={40}
                  // height={40}
                />
                <div>
                  <span className="text-[#e6e7ee] text-xl lg:text-3xl font-extrabold  space-y-2">
                    Jason Makki
                  </span>
                  <p className="text-[#C6C4C4] text-xs  font-light ">
                    Engineer at GROOVE
                  </p>
                  <p className="text-[#C6C4C4] text-xs  font-light ">
                    San Francisco
                  </p>
                </div>
              </span>
              <p className="text-[#fff] text-sm lg:text-base font-light  mt-6">
                Zwilt enabled us to deliver on time and they’ve <br /> been
                heavy hitters in our corner since. Zwilt <br /> enabled us to
                deliver on time and they’ve been <br /> heavy hitters in our
                corner since.Zwilt enabled us <br /> to deliver on time and
                they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        className="w-full h-screen bg-cover md:bg-transparent flex flex-col justify-center items-center md:items-start px-8"
        // style={{ backgroundImage: `url(${rect.src})` }}
      >
        <div className="text-[#202229] text-2xl text-center md:text-left">
          <div className="text-[#202229] text-xl lg:text-5xl font-extrabold space-y-2">
            <span className="flex gap-3">
              <span>
                How we ensure you’re <br /> in good hands.
              </span>
            </span>
          </div>
          <p className="text-[#202229] text-sm lg:text-base font-light mt-6">
            With our comprehensive screening process, we hand-pick highly <br />{" "}
            skilled candidates so you can onboard them in a matter of days.
          </p>
        </div>
        <div className="my-8">
          <StepsComponent />
        </div>
      </section>

      <section>
        {/* <div className="text-[#202229] text-xl lg:text-5xl font-extrabold text-center  space-y-2">
          <span className="flex  gap-3 ">
            <span>Start your journey today.</span>
          </span>
        </div> */}
        <div>
          <div
            className="h-96 w-full bg-cover"
            style={{ backgroundImage: `url(${J1.src})` }}
          ></div>
          <Image
            src={j2}
            alt="quote"
            className="w-100 h-15 mt-4"
            // width={100}
            // height={100}
          />
          <Image
            src={j3}
            alt="quote"
            className="w-100 h-15 mt-4"
            // width={100}
            // height={100}
          />
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
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 py-4">
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

interface IProps {
  header: string;
  breakWord: string;
}

const TechSkill: React.FC<IProps> = ({ header, breakWord }) => {
  const headerParts = header.split(` ${breakWord} `);
  return (
    <div className="bg-transparent  md:h-60 p-4">
      <h2 className=" font-bold">
        {" "}
        {headerParts[0]} {breakWord} <br /> {headerParts[1]}
      </h2>
      <div className="flex md:grid items-center justify-between md:grid-cols-2 gap-4 py-4 md:py-8">
        <div>
          <FaAward className="rotate-180   text-[#A285D0] " />
          <span className="text-sm font-light text-[#202229CC]">
            989 Skills
          </span>
        </div>
        <div>
          <MdDashboard className="  text-[#A285D0]" />
          <span className="text-sm font-light text-[#202229CC] whitespace-nowrap">
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

const steps = [
  {
    step: "Step 1",
    title: "Resume Screening",
    description: "",
    icon: "🔲",
  },
  {
    step: "Step 2",
    title: "Video Interview",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    icon: "🔲",
  },
  {
    step: "Step 3",
    title: "Technical Evaluation",
    description: "",
    icon: "🔲",
  },
  {
    step: "Step 4",
    title: "Application Review",
    description: "",
    icon: "🔲",
  },
  {
    step: "Step 5",
    title: "Lets get to work",
    description: "",
    icon: "🔲",
  },
];

const StepCard = ({ step, title, description, icon, isHovered }: any) => (
  <div
    className={`flex items-center p-4 mb-1 border rounded-lg  transition-all duration-300 w-full ${
      isHovered ? "bg-[#fff]" : "bg-[#fff] shadow-md px-8 py-4 "
    }`}
  >
    <div
      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${
        isHovered
          ? "bg-blue-500 text-white w-8 h-8"
          : "bg-[#fff] text-black w-8 h-8"
      }`}
    >
      {icon}
    </div>
    <div className="ml-4">
      <div className="text-sm">
        {step}: {title}
      </div>
      {isHovered && description && (
        <div className="mt-2 text-sm text-gray-600">{description}</div>
      )}
    </div>
  </div>
);

const StepsComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="">
      {steps.map((step, index) => (
        <div
          className="w-full"
          key={index}
          onMouseEnter={() => setHoveredIndex(index as any)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <StepCard
            step={step.step}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isHovered={hoveredIndex === index}
          />
        </div>
      ))}
    </div>
  );
};
