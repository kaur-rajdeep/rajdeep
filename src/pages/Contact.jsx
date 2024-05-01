import React from "react";

function Contact() {
  return (
    <>
      <div className="text-white grid place-items-center" id="contact">
        <div className="grid place-items-center mt-[15%] lg:opacity-80 mb-[5%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500  inline-block text-transparent bg-clip-text ">
            Connect
          </p>
          <hr className="h-px w-[95vw] my-8 bg-gray-200 dark:bg-gray-400" />
          <div className=" grid grid-cols-4 place-items-center gap-8 font-medium text-lg text-pink-500">
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
            <a
              href="https://instagram.com/rj_doodlie?utm_source=qr&igshid=OGU0MmVlOWVjOQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
