import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Services from "./Services";
import Curriculum from "./Curriculum";
import Classes from "./Classes";
import Payment from "./Payment";
import Policies from "./Policies";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="bg-dark1 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="services" element={<Services />} />
        <Route path="classes" element={<Classes />} />
        <Route path="payment" element={<Payment />} />
        <Route path="policies" element={<Policies />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
};

export default App;
