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
        <div className="grid place-items-center mt-[15%] mb-[5%] lg:mt-[6%]">
          <p className="font-bold text-center text-5xl lg:text-8xl bg-gradient-to-r from-[#f3055c] via-[#e0c9d2] to-[#fd458c]  inline-block text-transparent bg-clip-text ">
            Experience
          </p>
        </div>
       
        <div >
        {/* <div className="p-4">
<p className="font-semibold text-center text-2xl lg:text-4xl text-[#e0c9d2]  inline-block">
    Work Experience
  </p>
  <div>
  <p className="text-left text-l lg:text-2xl text-[#ffe3ee]  inline-block">Software Developement Engineer - 1 : Panacea Infosec (August 2024 - Present)</p>
  
  <p className="text-left text-l lg:text-2xl text-[#ffe3ee]  inline-block">UI/UX Designer Intern: Panacea Infosec (May 2024 - July 2024)</p><br/>
  <p className="text-left text-l lg:text-2xl text-[#ffe3ee]  inline-block">Intern : The Kalgidhar Society (Jan 2024 - May 2024)</p>
   
  </div>
  </div> */}
        <p className="font-semibold text-center text-4xl lg:text-4xl text-[#e0c9d2]  inline-block p-4">
            Projects
          </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards}
        </section>
        </div>
       
      </div>
    </>
  );
}

export default Projects;
