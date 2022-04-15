// Home.js

import React from "react";
import "./index.css";

const Home = (props) => {
  return (
    <div>
      <p>
        Hello! My name is Teacher Russell and I am from Alberta, Canada. I've
        been teaching English online with VIPKid and Palfish since 2019. So far,
        I've taught over 5000 classes to more than 700 students.
      </p>
      {/* <img alt="stats" /> */}
      <p>
        I have a Bachelor's degree from the University of British Columbia in
        Vancouver. I've also completed a 120-hour TEFL certification for
        teaching ESL.
      </p>
      {/* <img alt="tefl" /> */}
      <p>
        My goal is to make learning English fun and interesting. I like to learn
        about my students and listen to them tell me about their families and
        their interests. I also like to ask questions that encourage students to
        speak in more detail. I am a patient and friendly teacher.
      </p>
    </div>
  );
};

export default Home;
