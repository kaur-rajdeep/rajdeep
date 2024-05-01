import React from "react";
import SkillCard from "../components/SkillCard";
import SkillsData from "../Store/SkillsData";

function Skills() {
  const SkillCards = SkillsData.map((item) => {
    return <SkillCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="text-white grid place-items-center" id="skills">
        <div className="grid place-items-center mt-[20%] lg:mt-[6%] lg:opacity-80 mb-[5%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500  inline-block text-transparent bg-clip-text ">
            Skills
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SkillCards}
        </section>
      </div>
    </>
  );
}
export default Skills;
