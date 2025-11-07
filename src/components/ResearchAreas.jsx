import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { AiFillOpenAI, AiOutlineApartment, AiOutlineCloudServer, AiOutlineDeploymentUnit } from "react-icons/ai";
import bgImage from "../assets/bgImage.jpg"; // <-- Add your image here

const ResearchAreas = () => {
  const areas = [
    { title: "Machine Learning", image: <AiOutlineDeploymentUnit /> },
    { title: "Artificial Intelligence", image: <AiFillOpenAI /> },
    { title: "ICT 4 Development", image: <AiOutlineCloudServer /> },
    { title: "Social Network Analysis", image: <AiOutlineApartment /> },
  ];

  return (
    <div
      className="w-full flex justify-center items-center px-4 md:px-16 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(5,45,105,0.85), rgba(5,45,105,0.85)), url(${bgImage})`,
      }}
    >
      <div className="py-8 text-center w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#48CAE4] font-semibold tracking-wide">
            RESEARCH AREAS
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mt-2">
            FOCUSED RESEARCH AREAS
          </h1>

          {/* Divider */}
          <div className="flex justify-center items-center mt-4 gap-2">
            <span className="w-10 h-1 bg-amber-600 rounded-full"></span>
            <span className="w-10 h-1 bg-white rounded-full"></span>
            <span className="w-10 h-1 bg-[#48CAE4] rounded-full"></span>
          </div>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition duration-300 flex flex-col hover:scale-105 group"
            >
              {/* Icon */}
              <div className="flex justify-center items-center py-4">
                <h1 className="group-hover:-translate-y-1 text-7xl text-white  group-hover:text-[#48CAE4] transition-colors">
                  {area.image}
                </h1>
              </div>

              {/* Title */}
              <div className=" flex flex-col items-center text-center flex-grow">
                <h3 className="text-lg font-semibold text-gray-50">
                  {area.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;
