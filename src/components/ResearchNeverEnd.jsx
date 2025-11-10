import React from "react";
import prof1 from "../assets/prof_office1.jpeg";
import prof2 from "../assets/prof_office2.jpeg";

const ResearchNeverEnd = () => {
  return (
    <div className="w-full py-12 flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-50 bg-gray-50 h-screen gap-20 lg:gap-40">
      
      {/* Left Section */}
      <div className=" space-y-6">
        <p className="text-[#48CAE4] font-semibold uppercase tracking-wide">
          My Academic Space
        </p>

        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
          Research is <br /> Never Ending
        </h1>

        {/* Divider */}
        <div className="flex items-center mt-3 gap-2">
          <span className="w-10 h-1 bg-amber-600 rounded-full"></span>
          <span className="w-10 h-1 bg-[#48CAE4] rounded-full"></span>
        </div>

        {/* Experience Box */}
        <div className="flex items-center bg-[#e3f2fd] rounded-xl px-6 py-4 shadow-md w-fit mt-6">
          <h1 className="text-4xl font-bold text-[#0077b6] mr-3">15+</h1>
          <p className="text-gray-700 font-medium">
            Years of Research Experience
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed max-w-md">
          Dedicated to continuous discovery and innovation in science and
          technology. My journey is fueled by curiosity, collaboration, and the
          belief that every question opens the door to new possibilities.
        </p>

        {/* Button */}
        <button className="bg-[#48CAE4] text-white px-6 py-3 rounded font-semibold hover:bg-amber-600 transition-all duration-500">
          Contact
        </button>
      </div>

      {/* Right Section (Images) */}
      <div className="flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="flex flex-col gap-3 relative right-0">
          <img
            src={prof1}
            alt="Professor in office 1"
            className="shadow-lg w-[350px] h-[275px] object-cover rounded-lg"
          />
          <img
            src={prof2}
            alt="Professor in office 2"
            className="shadow-lg w-[350px] h-[275px] object-cover rounded-lg relative bottom-16 left-14 border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchNeverEnd;
