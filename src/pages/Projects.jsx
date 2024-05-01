import React from "react";
import Card from "../components/Card";
import ProjectData from "../Store/ProjectData";

function Projects() {
  const cards = ProjectData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="text-white grid place-items-center" id="projects">
        <div className="grid place-items-center mt-[15%] lg:opacity-80 mb-[5%] lg:mt-[6%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500  inline-block text-transparent bg-clip-text ">
            Projects
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards}
        </section>
      </div>
    </>
  );
}

export default Projects;
