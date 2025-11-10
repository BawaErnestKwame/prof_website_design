import React from "react";
import image from "../assets/explore.avif";
import { Link } from "react-router";

const ExploreAcademic = () => {
  return (
    <div
      className="w-full h-[40vh] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 57, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    >
      <div className="w-full text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Explore My Academic Space
        </h1>

        <p className="text-gray-200 text-sm md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          Discover a world of learning, innovation, and collaboration.
          Here, knowledge meets creativity to inspire research, academic
          excellence, and the pursuit of discovery.
        </p>

        <Link to="/about">
        <button className="bg-[#48CAE4] text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-all duration-500">
          Read More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreAcademic;
