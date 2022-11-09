// Contact.js

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import clipart from "../assets/clipart.png";
import wechatqr from "../assets/wechatqr.png";

const name = process.env.REACT_APP_NAME;
const address = process.env.REACT_APP_ADDRESS;
const phone = process.env.REACT_APP_PHONE;

const Contact = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg lg:mx-52">
        <h1 className="text-2xl tracking-wider text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Contact Me
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-xl">
            You can reach me on WeChat or by email.
          </h2>
          <img src={wechatqr} alt="qr" className="lg:w-1/4 mx-auto" />
          <p className="text-2xl text-center">
            ✉️&nbsp;
            <a
              href="mailto:russ.salonen@gmail.com"
              className="text-xl underline underline-offset-1"
            >
              russ.salonen@gmail.com
            </a>
          </p>
          <p className="text-center">{name}</p>
          <p className="text-center">{address}</p>
          <p className="text-center">{phone}</p>
        </div>
      </div>
      <div className="flex justify-start text-lg w-full bg-orange text-black py-2 mt-4 lg:w-3/4 lg:mx-auto">
        <Link to="/testimonials" className="pl-2">
          &lt;&lt; Testimonials
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Contact;
