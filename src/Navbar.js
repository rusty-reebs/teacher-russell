// Navbar.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import image from "./profile-white.png";

const Navbar = (props) => {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  });
  return (
    <div>
      <nav className="flex flex-wrap justify-between mb-5 p-5 lg:w-full lg:px-9 lg:mb-9">
        <h1 className="text-black w-80 text-2xl lg:text-2xl">
          Teacher Russell
          <a href="/">
            <img
              src={image}
              style={{ display: "block", height: 200 }}
              alt="logo"
            />
          </a>
          Online ESL Teacher
        </h1>
        <div className="absolute top-5 right-5 flex lg:hidden text-black">
          <button id="hamburger">
            <p className="toggle block text-4xl">
              <i className="fas fa-bars"></i>
            </p>
            <p className="toggle hidden text-4xl">
              <i className="fas fa-window-close"></i>
            </p>
          </button>
        </div>
        <div className="toggle hidden lg:flex w-full lg:w-auto text-center text-bold mt-5 lg:mt-0 border-t-2 border-lightblue lg:border-none">
          <Link
            to="/"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            🏠&nbsp;&nbsp;Home
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            ℹ️&nbsp;&nbsp;About
          </Link>
          <Link
            to="/services"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            🖥&nbsp;&nbsp;Services
          </Link>
          <Link
            to="/curriculum"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            📚&nbsp;&nbsp;Curriculum
          </Link>
          <Link
            to="/classes"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            📎&nbsp;&nbsp;Classes
          </Link>
          <Link
            to="/payment"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            💳&nbsp;&nbsp;Payment
          </Link>
          <Link
            to="/policies"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            🤝&nbsp;&nbsp;Policies
          </Link>
          <Link
            to="/testimonials"
            className="block lg:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            ✨&nbsp;&nbsp;Testimonials
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
