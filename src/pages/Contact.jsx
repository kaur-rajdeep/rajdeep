import React from "react";
import linkedin from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.png";
import github from "./../assets/github.png";

function Contact() {
  return (
    <>
      <div className="text-white grid place-items-center">
        <div className="grid place-items-center mt-[15%] lg:opacity-80 mb-[5%]">
          <p className="font-bold text-center text-5xl lg:text-8xl w-[90%]">
            Contact
          </p>
          <hr className="h-px w-[95vw] my-8 bg-gray-200 dark:bg-gray-400" />
          <div className=" grid grid-cols-3 place-items-center gap-8 font-medium text-lg text-pink-500">
            <a
              href="http://www.linkedin.com/in/rajdeep-kaur-831047218"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/kaur-rajdeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://twitter.com/r_jdeep_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
