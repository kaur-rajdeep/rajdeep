import React from "react";

export default function SkillCard(props) {
  return (
    <div className="skill">
      <div className="grid place-items-center">
        <img
          src={props.image}
          alt="projectImage"
          className="w-[75px] h-[75px]"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-pink-400 text-sm">{props.name}</p>
      </div>
    </div>
  );
}
