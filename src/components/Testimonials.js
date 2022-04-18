// Testimonials.js

import React from "react";
import { Link } from "react-router-dom";
import clipart from "../assets/clipart.png";
import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";
import test4 from "../assets/test-4.jpg";
import test5 from "../assets/test-5.jpg";
import test6 from "../assets/test-6.jpg";
import test7 from "../assets/test-7.jpg";
import test8 from "../assets/test-8.jpg";
import "../index.css";

const Testimonials = (props) => {
  const testimonials = [test1, test2, test3, test4, test5, test6, test7, test8];
  return (
    <div>
      <div className="mx-5 text-lg">
        <h1 className="text-2xl tracking-wider text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Testimonials
        </h1>
        <h2 className="text-center text-xl pb-6">What clients say.</h2>
      </div>
      <div className="flex flex-col gap-5">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index}>
              <img src={testimonial} alt={index} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4">
        <Link to="/policies" className="pl-2">
          &lt;&lt; Policies
        </Link>
        <Link to="/contact" className="pr-2">
          Contact &gt;&gt;
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Testimonials;
