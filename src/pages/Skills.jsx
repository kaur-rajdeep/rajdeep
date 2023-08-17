import React from "react";
import html from "./../assets/icons/html.png";
import bs from "./../assets/icons/bs.png";
import css from "./../assets/icons/css.png";
import js from "./../assets/icons/js.png";
import py from "./../assets/icons/py.png";
import react from "./../assets/icons/react.png";
import twind from "./../assets/icons/twind.png";

function Skills() {
  return (
    <>
      <div className="text-white grid place-items-center">
        <div className="grid place-items-center mt-[5%] lg:opacity-80 mb-[5%]">
          <p className="font-bold text-center text-5xl lg:text-8xl w-[90%]">
            Skills
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          <div className="skill">
            <img src={html} alt="html" />
          </div>
          <div className="skill">
            <img src={css} alt="css" />
          </div>
          <div className="skill">
            <img src={js} alt="js" />
          </div>
          <div className="skill">
            <img src={react} alt="react" />
          </div>
          <div className="skill">
            <img src={bs} alt="bs" />
          </div>
          <div className="skill">
            <img src={py} alt="py" />
          </div>
          <div className="skill">
            <img src={twind} alt="twind" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
