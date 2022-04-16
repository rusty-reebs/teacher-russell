// About.js

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import clipart from "../assets/clipart.png";
import stats from "../assets/stats.jpg";
import certificate from "../assets/120hrs.png";

const About = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg">
        <h1 className="text-2xl text-center pb-4">
          <img
            src={clipart}
            style={{ display: "inline-flex", height: 40 }}
            alt="logo"
          />
          &nbsp;&nbsp;About Me
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            Hello! My name is Teacher Russell and I am from Alberta, Canada.
            I've been teaching English online with VIPKid and Palfish since
            2019. So far, I've taught over 5000 classes to more than 700
            students.
          </p>
          <img
            src={stats}
            style={{ width: "100%" }}
            className="border"
            alt="stats"
          />
          <p>
            I have a Bachelor's degree from the University of British Columbia
            in Vancouver. I've also completed a 120-hour TEFL certification for
            teaching ESL.
          </p>
          <img
            src={certificate}
            style={{ width: "100%" }}
            className="border"
            alt="tefl"
          />
          <p>
            My goal is to make learning English fun and interesting. I like to
            learn about my students and listen to them tell me about their
            families and their interests. I also like to ask questions that
            encourage students to speak in more detail. I am a patient and
            friendly teacher.
          </p>
        </div>
      </div>
      <div className="text-right text-lg w-full bg-orange text-black py-2 mt-4">
        <Link to="/services" className="pr-2">
          Services >>{" "}
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default About;
