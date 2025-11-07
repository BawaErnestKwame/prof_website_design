import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Publication from "./pages/Publication";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      {/* Navbar visible on all pages */}
   <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/publication" element={<Publication/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
      
      </Routes>
    </>
  );
};

export default App;
