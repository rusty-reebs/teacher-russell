// Policies.js

import React from "react";
import { Link } from "react-router-dom";
import clipart from "../assets/clipart.png";
import alipay from "../assets/Alipay.png";
import wechat from "../assets/wechatpay.png";
import "../index.css";

const Policies = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg">
        <h1 className="text-2xl text-center pb-5">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Policies
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-xl pb-6">Scheduling</h2>
          <h2 className="text-center text-xl pb-6">Cancellations</h2>
          <h2 className="text-center text-xl pb-6">Late Arrivals</h2>
        </div>
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4">
        <Link to="/payment" className="pl-2">
          &lt;&lt; Payment
        </Link>
        <Link to="/testimonials" className="pr-2">
          Testimonials &gt;&gt;
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Policies;
