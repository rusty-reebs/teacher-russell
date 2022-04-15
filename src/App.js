import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="italic">
      TEACHER RUSSELL
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
