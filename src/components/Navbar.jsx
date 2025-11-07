import React from "react";
import { NavLink, Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full h-20 flex justify-between items-center px-6 md:px-24 bg-gray-50 border-b border-gray-200">
        {/* Contact Info */}
        <div className="flex gap-8 items-center text-sm text-gray-700">
          {/* Email */}
          <div className="flex items-center gap-2">
            <MailOutlineIcon className="text-[#052d69]" />
            <p>bawarnest926@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <PhoneForwardedIcon className="text-[#052d69]" />
            <p>+233 599 316 218</p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex gap-2 items-center text-2xl font-semibold text-[#052d69]">
          <SchoolIcon sx={{ fontSize: 40, color: "#052d69" }} />
          <h1>Prof. Appiahene</h1>
        </div>

        {/* Social Links */}
        <div>
          <ul className="flex gap-3">
            <li className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B4D8] transition-all hover:text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon fontSize="inherit" />
              </a>
            </li>
            <li className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B4D8] transition-all hover:text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="inherit" />
              </a>
            </li>
            <li className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B4D8] transition-all hover:text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="inherit" />
              </a>
            </li>
            <li className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B4D8] transition-all hover:text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="inherit" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 text-sm md:px-24 bg-[#ececece1] text-black flex items-center h-16 justify-between w-full shadow-2xs">
        {/* Menu Links */}
        <ul className="hidden md:flex gap-20  font-medium text-[16px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#48CAE4]" : "hover:text-[#052d69]"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#00B4D8]" : "hover:text-[#052d69]"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B4D8] font-semibold"
                  : "hover:text-[#052d69]"
              }
            >
              Publications
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B4D8] font-semibold"
                  : "hover:text-[#052d69]"
              }
            >
              Supervisor
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B4D8] font-semibold"
                  : "hover:text-[#052d69]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <div className="flex gap-4">
          <NavLink
            to="/login"
            className=" hover:bg-[#ffffff] text-black px-4 py-1 border-gray-300 transition flex gap-2 border-r border-l "
          >
            <SendIcon fontSize="inherit"/>
            Join Research
          </NavLink>
          <NavLink
            to="/login"
            className="hover:bg-[#ffffff] text-black px-4 py-1 transition flex gap-2 border-r border-l  border-gray-300"
          >
            <AccountCircleIcon fontSize="inherit" />
            Future Member
          </NavLink>
          <NavLink
            to="/login"
            className="hover:bg-[#ffffff] text-black px-4 py-1 transition border-r border-l  border-gray-300"
          >
           
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
