// Services.js

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import clipart from "../assets/clipart.png";

const Services = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg lg:mx-52">
        <h1 className="text-2xl tracking-wider text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Services
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-xl lg:mx-32">
            I provide the following services.
          </h2>
          <div className="mx-3">
            <ul className="list-disc list-outside space-y-3">
              <li>One-on-one English immersion video classes.</li>
              <li>
                Premium digital curriculum which can be viewed on a computer or
                iPad
              </li>
              <li>In-class free talk -- you decide how little or how much.</li>
              <li>
                Help with school homework and English speeches/presentations.
              </li>
              <li>
                The use of translators, online dictionaries, and image search
                engines during class to help with content comprehension.
              </li>
              <li>Regular assessments during class (on request).</li>
              <li>
                Additional textbooks, workbooks, eBooks, test preparation
                materials, etc. (on request).
              </li>
              <li>Manual scheduling in WeChat.</li>
              <li>No extra charge for booking a class on short notice.</li>
              <li>Reminders in WeChat before each class.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4 lg:w-3/4 lg:mx-auto">
        <Link to="/about" className="pl-2">
          &lt;&lt; About Me
        </Link>
        <Link to="/curriculum" className="pr-2">
          Curriculum &gt;&gt;
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Services;
