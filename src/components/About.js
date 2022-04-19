// About.js

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import clipart from "../assets/clipart.png";
import stats from "../assets/stats.jpg";
import certificate from "../assets/120hrs.png";
import family from "../assets/family.jpg";
import monkey from "../assets/monkey.jpeg";

const About = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg lg:mx-52">
        <h1 className="text-2xl tracking-wider text-center pb-4">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;About Me
        </h1>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          <p className="lg:order-1">
            Hello! My name is Teacher Russell and I am from Alberta, Canada.
            I've been teaching English online with VIPKid and Palfish since
            2019. So far, I've taught over 5000 classes to more than 700
            students.
          </p>
          <img
            src={stats}
            className="border w-100 shadow-lg lg:w-100 lg:order-2"
            alt="stats"
          />
          <p className="lg:order-4 lg:self-center">
            I have a Bachelor's degree from the University of British Columbia
            in Vancouver. I've also completed a 120-hour TEFL certification for
            teaching ESL.
          </p>
          <img
            src={certificate}
            className="border w-100 shadow-lg lg:w-3/4 lg:order-3"
            alt="tefl"
          />
          <p className="lg:order-5 lg:col-span-2 lg:mx-auto lg:py-6">
            My goal is to make learning English fun and interesting. I like to
            learn about my students and listen to them tell me about their
            families and their interests. I also like to ask questions that
            encourage students to speak in more detail. I am a patient and
            friendly teacher.
          </p>
          <img
            src={family}
            className="w-full border shadow-lg lg:w-auto lg:order-6"
            alt="family"
          />
          <img
            src={monkey}
            className="w-full border shadow-lg lg:w-auto lg:order-7"
            alt="monkey"
          />
        </div>
      </div>
      <div className="text-right text-lg w-full bg-orange text-black py-2 mt-4 lg:w-3/4 lg:mx-auto">
        <Link to="/services" className="pr-2">
          Services &gt;&gt;{" "}
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default About;
