import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import About from "./components/About";
import Services from "./components/Services";
import Curriculum from "./components/Curriculum";
import Classes from "./components/Classes";
import Payment from "./components/Payment";
import Policies from "./components/Policies";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="m-2">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="services" element={<Services />} />
          <Route path="classes" element={<Classes />} />
          <Route path="payment" element={<Payment />} />
          <Route path="policies" element={<Policies />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
