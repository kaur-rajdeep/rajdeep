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
        <div className="grid place-items-center mt-20 mb-[5%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-[#f3055c] via-[#e0c9d2] to-[#ff5093]   inline-block text-transparent bg-clip-text ">
            Skills
          </p>
        </div>
        <section className="flex flex-wrap md:px-16 lg:gap-8">
          {SkillCards}
        </section>
      </div>
    </>
  );
}
export default Skills;
