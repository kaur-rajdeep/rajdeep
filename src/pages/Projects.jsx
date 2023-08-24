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
        <div className="grid place-items-center mt-[15%] lg:opacity-80 mb-[5%] lg:mt-[10%]">
          <p className="font-bold text-center text-5xl lg:text-8xl w-[90%]">
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
