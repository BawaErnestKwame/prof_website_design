import React from "react";
import hero from "../assets/Appiahene.png"; 
import GradeIcon from '@mui/icons-material/Grade';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import prof1 from '../assets/prof1.jpeg';
import prof2 from '../assets/prof2.jpeg';
import prof3 from '../assets/prof3.jpeg';
import prof4 from '../assets/prof4.jpeg';
import prof5 from '../assets/prof5.jpeg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 px-6 md:px-24 flex flex-col md:flex-row  justify-between gap-12">
      {/* hero-text */}
      <div className="md:w-1/2 text-center md:text-left mt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-[#052d69] leading-tight mb-2">
        <span className="welcome">  WELCOME TO </span><br />
          <span className="text-[#36454f] ">
            MY ACADEMIC SPACE
          </span>
         
        </h1>

        <p className="text-gray-700 text-[16px] md:text-xl leading-6 mb-8">
          A modern digital environment that empowers educators, researchers, and
          students to share ideas, publish research, and grow together in pursuit
          of knowledge.
        </p>

   

        <div className=" flex gap-0 mt-4 mb-6 items-center">
        <div className=" flex">
          <img src={prof1} alt="" className="w-13 h-13 rounded-full" />
          <img src={prof2} alt="" className="w-13 h-13 rounded-full relative right-3" />
          <img src={prof3} alt="" className="w-13 h-13 rounded-full relative right-6" />
          <img src={prof4} alt="" className="w-13 h-13 rounded-full relative right-9" />
          <img src={prof5} alt="" className="w-13 h-13 rounded-full relative right-12" />
          <h1 className="w-13 h-13 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl relative right-15">+</h1>
        </div>
        <div className=" relative right-10">
          <div className=" flex gap-0 text-[#48CAE4] mb-1">
            <GradeIcon/>
            <GradeIcon/>
            <GradeIcon/>
            <GradeIcon/>
            <StarHalfIcon/>
            <p className="text-black">(4.5)</p>
          </div>
          <p>1000+ <b>Reviews</b> on researches</p>
        </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center hover:border-2 w-55 transition-colors rounded-2xl pl-2">
          <ArrowCircleRightIcon sx={{fontSize:40, color:"#052d69" }}/>
          <button className="  text-black px-6 py-4 rounded-md font-semibold duration-500 transition">
            READ MORE
          </button>
         
        </div>
      </div>

      {/* hero-image */}
      <div className="md:w-1/2 flex justify-center mt-8">
        <img
          src={hero}
          alt="Academic illustration"
          className="w-full max-w-md md:max-w-sm rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
