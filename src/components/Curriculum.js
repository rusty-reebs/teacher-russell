// Curriculum.js

import React from "react";
import { Link } from "react-router-dom";
import clipart from "../assets/clipart.png";
import off2class from "../assets/off2class-example.jpg";
import learnaling from "../assets/learnaling.jpg";
import crystalclear from "../assets/crystalclear.jpg";
import "../index.css";

const Curriculum = (props) => {
  const examples = [
    { name: "Off2Class", image: off2class },
    { name: "Learnaling", image: learnaling },
    { name: "Crystal Clear ESL", image: crystalclear },
  ];
  return (
    <div>
      <div className="mx-5 text-lg lg:mx-52">
        <h1 className="text-2xl tracking-wider text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Curriculum
        </h1>
        <div className="flex flex-col gap-10">
          <h2 className="text-center text-xl lg:mx-32">
            I use a variety of premium ESL websites and curriculum with my
            students.
          </h2>
          {examples.map((example, index) => {
            return (
              <div key={index} className="text-xl text-center">
                <img
                  src={example.image}
                  alt={index}
                  className="lg:w-1/2 lg:mx-auto"
                />
                <h3 className="pt-3">{example.name}</h3>
              </div>
            );
          })}
          {/* <div className="text-xl text-center">
            <img
              src={off2class}
              alt="off2class"
              className="lg:w-1/2 lg:mx-auto"
            />
            <h3 className="pt-3">Off2Class</h3>
          </div>
          <div className="text-xl text-center">
            <img
              src={learnaling}
              alt="learnaling"
              className="lg:w-1/2 lg:mx-auto"
            />
            <h3 className="pt-3">Learnaling</h3>
          </div>
          <div className="text-xl text-center">
            <img
              src={learnaling}
              alt="learnaling"
              className="lg:w-1/2 lg:mx-auto"
            />
            <h3 className="pt-3">Learnaling</h3>
          </div> */}
        </div>
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4 lg:w-3/4 lg:mx-auto">
        <Link to="/services" className="pl-2">
          &lt;&lt; Services
        </Link>
        <Link to="/classes" className="pr-2">
          Classes &gt;&gt;
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Curriculum;
