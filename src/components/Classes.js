// Classes.js

import React from "react";
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
      <h1>Classes</h1>
      <h2>
        Classes will take place over Zoom, ClassIn, or whichever platform works
        best for the student. The first class is free so we can find the right
        platform and curriculum.
      </h2>
      <ClassCard classTime="25" dollars="20" yuan="129" />
      <ClassCard classTime="55" dollars="40" yuan="258" />
      <h1>Packages</h1>
      <h2>I offer the following discounts for purchasing classes in bulk.</h2>
      <Packages />
      <h1>
        NOTE: 55-minute classes count as two classes in the above packages.
      </h1>
      <h1>
        BONUS INCENTIVE: If you refer a friend and they pay for a class, you
        will get one free 25-minute class.
      </h1>
    </div>
  );
};

const ClassCard = ({ classTime, dollars, yuan }) => {
  return (
    <div className="border-2">
      {/* <img alt="clipart" /> */}
      <h2>{classTime}-Minute Class</h2>
      <h1>
        ${dollars} US Dollars (¥{yuan}){" "}
      </h1>
    </div>
  );
};

const Packages = (props) => {
  return (
    <div>
      {packages.map((pack, index) => {
        return (
          <div key={index}>
            <h1>
              Package {pack.package} - {pack.classes} Classes
            </h1>
            <h2>
              If you purchase {pack.classes} classes, you will receive a{" "}
              {pack.discount}% discount.
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Classes;
