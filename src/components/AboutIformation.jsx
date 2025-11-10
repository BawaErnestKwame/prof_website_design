import React from "react";
import image from "../assets/about.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutInformation = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-16 lg:px-24 flex items-center justify-center lg:h-[80vh]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 w-full">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <img
            src={image}
            alt="About section"
            className="rounded-2xl shadow-xl w-[80%] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-gray-700 w-full md:w-1/2">
          <div>
            <h2 className="text-[#48CAE4] font-semibold tracking-wide uppercase">
              About
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Who We Are
            </h1>

            {/* Divider */}
            <div className="flex items-center mt-4 gap-2">
              <span className="w-10 h-1 bg-[#48CAE4] rounded-full"></span>
              <span className="w-10 h-1 bg-amber-500 rounded-full"></span>
            </div>
          </div>

          <p className="leading-relaxed text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ut cum deserunt rem dolore pariatur praesentium corrupti
            mollitia voluptate doloribus accusantium incidunt voluptatum inventore
            magnam, distinctio eos sit, cumque vel?
          </p>

          <p className="text-gray-600 text-base md:text-lg">
            Our mission is to create a dynamic academic environment that promotes
            collaboration, research innovation, and lifelong learning for both
            educators and students.
          </p>

          <button className="flex items-center border border-[#48CAE4] text-[#48CAE4] rounded-2xl px-5 py-2.5 gap-3 font-medium transition-all duration-500 hover:bg-[#48CAE4] hover:text-white">
            Read More <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInformation;
