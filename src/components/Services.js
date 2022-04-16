// Services.js

import React from "react";
import "../index.css";
import clipart from "../assets/clipart.png";

const Services = (props) => {
  return (
    <div>
      <h1 className="text-3xl">
        <img
          src={clipart}
          style={{ display: "inline-flex", height: 40 }}
          alt="logo"
        />
        Services
      </h1>
      <h2>I provide the following services.</h2>
      <ul>
        <li>One-on-one video classes.</li>
        <li>Digital curriculum which can be viewed on a computer or iPad</li>
        <li>Free talk - you decide how little or how much for your child.</li>
        <li>Help with school homework and English speeches.</li>
        <li>
          The use of translators, online dictionaries, and image search engines
          during class to help with content comprehension.
        </li>
        <li>Online calendar scheduling.</li>
        <li>No extra charge for booking a class on short notice.</li>
        <li>Reminders in WeChat before each class.</li>
      </ul>
    </div>
  );
};

export default Services;
