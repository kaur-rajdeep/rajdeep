import React from "react";
import me from "./../assets/me.png";
const About = () => {
  return (
    <div
      className="text-white bg-black lg:mt-[10%] mt-[15%] mb-[10%]"
      id="about"
    >
      <div className=" flex justify-center bg-black">
        <img src={me} alt="me" className="w-[90%] md:w-[80%] lg:opacity-50" />
      </div>

      <div className="grid place-items-center mt-[5%] lg:mt-[-32%] lg:opacity-80">
        <p className="font-bold text-center text-5xl lg:text-8xl lg:text-left w-[90%] md:w-[70%] bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500  inline-block text-transparent bg-clip-text ">
          About Myself
        </p>
        <p className="mt-10 text-l md:text-xl font-medium lg:text-2xl text-justify w-[90%] md:w-[80%] lg:w-[70%]">
          I'm a Computer Science Student, all by coincidences. I didn't know a
          lot about how to code initially, so I started with learning python,
          then did the basic DSA, later on found about frontend development, I
          love working with websites, you know the part when you feel good about
          building things as you imagine, so here I am. I volunteer for
          Techshilla, Baru Sahib. A startup based upon uplifting girls. I've
          also been part of GirlScript Summer of Code 2023, as an Open Source
          Contributor. Filled with hope and compassion I believe this world can
          be a better place to live in.
        </p>
      </div>
    </div>
  );
};

export default About;
