import Link from "next/link";
import React, { useState } from "react";

const JobsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("IT & Development");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="  mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#F8F8F8] rounded-lg p-3">
          <div className="flex text-center justify-center items-center rounded-lg">
            <div className="flex items-center bg-[#e6e3e3] rounded-lg">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "IT & Development"
                    ? " text-[#202229] bg-[#C7F4C2] rounded-lg"
                    : "text-gray-500 hover:text-gray-700 bg-[#e6e3e3] rounded-lg"
                }`}
                onClick={() => handleTabClick("IT & Development")}
              >
                IT & Development
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium  ${
                  activeTab === "Design and Creative"
                    ? " text-[#202229] bg-[#C7F4C2] rounded-lg"
                    : "text-gray-500 hover:text-gray-700 bg-[#e6e3e3] rounded-lg"
                }`}
                onClick={() => handleTabClick("Design and Creative")}
              >
                Design and Creative
              </button>
            </div>
          </div>
          <div className="px-6 pt-6 ">
            {activeTab === "IT & Development" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-4 gap-4 items-center justify-center">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>MERN Stack Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Full Stack Developer</Link>
                  </li>
                </ul>

                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Data Scientist</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Front End Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                </ul>

                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start w-full">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}> Full Stack Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}> Explore More</Link>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "Design and Creative" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start cursor-pointer">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}> Full Stack Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>MERN Stack Developer</Link>
                  </li>
                </ul>

                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Data Scientist</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                </ul>

                <ul className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Full Stack Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Front End Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Shopify Developer</Link>
                  </li>
                  <li className="text-[#959595] hover:text-[#0e0e0e] text-center lg:text-start">
                    <Link href={"#"}>Python Developer</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTab;
