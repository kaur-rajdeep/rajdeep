import React from "react";
import aak from "./../assets/aak.jpg";
import eu from "./../assets/eu.jpg";
function Education() {
  return (
    <>
      <div className="text-white grid place-items-center" id="education">
        <div className="grid place-items-center mt-[20%] lg:mt-[6%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-[#f3055c] via-[#e0c9d2] to-[#ff5093]  inline-block text-transparent bg-clip-text ">
            Education
          </p>
        </div>
        {/* ----------Cards ------------ */}
        <div className="grid place-items-center md:grid-cols-2 gap-10 lg:gap-24 p-4 m-4">
          <div className="card border-2 border-[#ff5093]">
            <p className="text-[#e0c9d2] text-xl font-bold m-[10%]">
              HIGH SCHOOL
            </p>
            <div className="flex justify-center">
              <img src={aak} alt="aak" className="w-[50%]" />
            </div>
            <p className="text-white text-lg p-4">Akal Academy Kajri</p>
            <p>PCM</p>
            <p>Batch: 2019-2020</p>
            <p>Percentage: 90%</p>
          </div>
          <div className="card border-2 border-[#ff5093]">
            <p className="text-[#e0c9d2] text-xl font-bold m-[10%]">
              UNIVERSITY
            </p>
            <div className="flex justify-center">
              <img src={eu} alt="eu" className="w-[100%]" />
            </div>
            <p className="text-white text-lg p-4">Eternal University</p>
            <p>Btech CSE</p>
            <p>Batch: 2020-2024</p>
            <p>OCPA: 8.51 </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
