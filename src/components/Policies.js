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
        <h1 className="text-2xl tracking-wider text-center pb-5">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Policies
        </h1>
        <div className="flex flex-col gap-6 text-center">
          <div>
            <h2 className="text-xl pb-2 underline decoration-orange">
              Scheduling
            </h2>
            <p>
              Please contact me by email or WeChat to discuss availability and
              make appointments.
            </p>
          </div>
          <div>
            <h2 className="text-xl pb-2 underline decoration-orange">
              Cancellations
            </h2>
            <p>
              Cancellations must be received in writing by email or WeChat at
              least 24 hours before class.
            </p>
          </div>
          <div>
            <h2 className="text-xl pb-2 underline decoration-orange">
              Late Arrivals
            </h2>
            <p>
              Please arrive to class on time. I cannot stay longer to make up
              for the missed class time.
            </p>
          </div>
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
