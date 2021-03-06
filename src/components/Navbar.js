// Navbar.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import profilePic from "../assets/profile-white.png";

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
      <nav className="flex flex-col px-1 pt-1 mb-5 lg:w-full lg:px-9 lg:pt-9 lg:mb-9">
        <div className="relative bg-orange/25 border-2 border-black rounded-md w-full shadow-md lg:w-4/5 lg:mx-auto">
          <h1 className=" text-black text-center border-orange border-8 rounded-md bg-orange/25 w-full text-3xl py-3 lg:text-2xl">
            Teacher Russell
            <a href="/">
              <img
                className="mx-auto py-2 block h-40"
                src={profilePic}
                alt="pic"
              />
            </a>
            Online ESL Teacher
          </h1>
        </div>
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
        <div className="toggle hidden lg:flex w-full lg:w-4/5 lg:flex-wrap lg:justify-around lg:mx-auto text-lg text-center text-black text-bold mt-5 lg:mt-0 border-t-2 border-gray lg:border-none">
          <Link
            to="/about"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            ℹ️&nbsp;&nbsp;About Me
          </Link>
          <Link
            to="/services"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            🖥&nbsp;&nbsp;Services
          </Link>
          <Link
            to="/curriculum"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            📚&nbsp;&nbsp;Curriculum
          </Link>
          <Link
            to="/classes"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            📎&nbsp;&nbsp;Classes
          </Link>
          <Link
            to="/payment"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            💳&nbsp;&nbsp;Payment
          </Link>
          <Link
            to="/policies"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            🤝&nbsp;&nbsp;Policies
          </Link>
          <Link
            to="/testimonials"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-2 border-gray lg:border-none lg:text-lg"
          >
            ✨&nbsp;&nbsp;Testimonials
          </Link>
          <Link
            to="/contact"
            className="block lg:inline-block hover:cursor-pointer px-3 py-3 border-b-4 border-gray lg:border-none lg:text-lg"
          >
            📫&nbsp;&nbsp;Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
