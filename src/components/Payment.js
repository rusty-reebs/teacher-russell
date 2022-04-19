// Payment.js

import React from "react";
import { Link } from "react-router-dom";
import clipart from "../assets/clipart.png";
import alipay from "../assets/Alipay.png";
import wechat from "../assets/wechatpay.png";
import "../index.css";

const Payment = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg lg:mx-52">
        <h1 className="text-2xl tracking-wider text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Payment
        </h1>
        <h2 className="text-center text-xl pb-6 lg:mx-32">
          I accept the following forms of payment.
        </h2>
        <div className="flex flex-col gap-4 mx-auto">
          <img src={alipay} alt="alipay" className="mx-auto w-60" />
          <img src={wechat} alt="wechat" className="mx-auto w-60" />
        </div>
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4 lg:w-3/4 lg:mx-auto">
        <Link to="/classes" className="pl-2">
          &lt;&lt; Classes
        </Link>
        <Link to="/policies" className="pr-2">
          Policies &gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default Payment;
