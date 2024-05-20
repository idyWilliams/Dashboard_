import React, { useState } from "react";

const JobsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("IT & Development");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F8F8] rounded-lg p-3">
          <div className="flex text-center justify-center items-center ">
            <div className="flex items-center bg-[#e6e3e3]">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "IT & Development"
                    ? " text-[#202229] bg-[#C7F4C2] rounded-lg"
                    : "text-gray-500 hover:text-gray-700 bg-[#e6e3e3]"
                }`}
                onClick={() => handleTabClick("IT & Development")}
              >
                IT & Development
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium  ${
                  activeTab === "Design and Creative"
                    ? " text-[#202229] bg-[#C7F4C2] rounded-lg"
                    : "text-gray-500 hover:text-gray-700 bg-[#e6e3e3]"
                }`}
                onClick={() => handleTabClick("Design and Creative")}
              >
                Design and Creative
              </button>
            </div>
          </div>
          <div className="p-6  ">
            {activeTab === "IT & Development" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-4 gap-4 items-center justify-center">
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Shopify Developer
                  </div>
                  <div className="text-[#0e0e0e] text-center lg:text-start">
                    MERN Stack Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Full Stack Developer
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <div className="text-[#959595] text-center lg:text-start">
                    Data Scientist
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Front End Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Shopify Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <div className="text-[#959595] text-center lg:text-start w-full">
                    Shopify Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Full Stack Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Explore More
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Design and Creative" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <div className="text-[#959595] text-center lg:text-start">
                    Shopify Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Full Stack Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    MERN Stack Developer
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <div className="text-[#959595] text-center lg:text-start">
                    Data Scientist
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Shopify Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                  <div className="text-[#959595] text-center lg:text-start">
                    Full Stack Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Front End Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Shopify Developer
                  </div>
                  <div className="text-[#959595] text-center lg:text-start">
                    Python Developer
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTab;
