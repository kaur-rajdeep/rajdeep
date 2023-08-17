import React from "react";
import pink from "./../assets/pink sketch.png";
const Home = () => {
  return (
    <div className="text-white mt-[22%] md:mt-[10%] lg:mt-[0%] grid place-items-center bg-black lg:grid lg:grid-flow-col">
      <div className="lg:ml-[10%] w-[75%]">
        <p className="text-2xl text-white font-medium mb-4 text-center lg:text-left">
          Hey! This is
        </p>
        <p className="font-bold text-center text-4xl md:text-5xl lg:text-8xl lg:text-left ">
          Rajdeep Kaur
        </p>
        <p className="mt-10 text-l md:text-xl font-medium lg:text-2xl text-center lg:text-justify opacity-70">
          Front-End Developer, Open Source Contributor, full-time CSE Student
          and part-time Artist
        </p>
      </div>
      <div className="flex justify-center lg:justify-end lg:ml-[-400px]">
        <img src={pink} className="w-[70%]" alt="pink" />
      </div>
    </div>
  );
};

export default Home;
