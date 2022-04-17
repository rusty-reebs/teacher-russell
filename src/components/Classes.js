// Classes.js

import React from "react";
import { Link } from "react-router-dom";
import clipart from "../assets/clipart.png";
import student from "../assets/student-computer.png";
import "../index.css";

const packages = [
  {
    package: "A",
    classes: "10",
    discount: "5",
  },
  {
    package: "B",
    classes: "20",
    discount: "10",
  },
  {
    package: "C",
    classes: "30",
    discount: "15",
  },
  {
    package: "D",
    classes: "40",
    discount: "20",
  },
];

const Classes = (props) => {
  return (
    <div>
      <div className="mx-5 text-lg">
        <h1 className="text-2xl text-center pb-2">
          <img src={clipart} className="inline-flex h-10" alt="logo" />
          &nbsp;&nbsp;Classes
        </h1>
        <div className="flex flex-col gap-5 pb-5">
          <h2 className="text-center text-xl">
            Classes will take place over Zoom, ClassIn, Skype, or whichever
            platform works best for the student. The first class is free so we
            can find the right platform and curriculum.
          </h2>
          <ClassCard classTime="25" dollars="20" yuan="128" />
          <ClassCard classTime="55" dollars="40" yuan="256" />
        </div>
        <h2 className="text-center text-2xl pb-2">Packages</h2>
        <h2 className="text-xl text-center">
          I offer the following discounts for purchasing classes in bulk.
        </h2>
        <Packages />
        <div className="flex flex-col gap-4">
          <h1>
            <span className="font-bold">NOTE: </span>55-minute classes count as
            two classes in the above packages.
          </h1>
          <h1>
            <span className="font-bold">BONUS INCENTIVE: </span>If you refer a
            friend and they pay for a class, you will get one free 25-minute
            class.
          </h1>
        </div>
      </div>
      <div className="flex justify-between text-lg w-full bg-orange text-black py-2 mt-4">
        <Link to="/curriculum" className="pl-2">
          &lt;&lt; Curriculum
        </Link>
        <Link to="/payment" className="pr-2">
          Payment &gt;&gt;
        </Link>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

const ClassCard = ({ classTime, dollars, yuan }) => {
  return (
    <div className="mx-auto border-2 pb-3 w-80 rounded-full flex flex-col text-center font-bold shadow-lg">
      <img src={student} className="block h-28 mx-auto" alt="clipart" />
      <h2>{classTime}-Minute Class</h2>
      <h1>
        ${dollars} US Dollars (¥{yuan}){" "}
      </h1>
    </div>
  );
};

const Packages = (props) => {
  return (
    <div className="flex flex-col gap-4 py-5">
      {packages.map((pack, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-black border rounded-sm"
          >
            <h1 className="text-lg text-center font-bold py-2 bg-orange border-black border-b">
              Package {pack.package} - {pack.classes} Classes
            </h1>
            <h2 className="bg-orange/50 px-3 py-2">
              If you purchase {pack.classes} classes, you will receive a{" "}
              <span className="underline decoration-orange decoration-2">
                {pack.discount}% discount
              </span>
              .
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Classes;
