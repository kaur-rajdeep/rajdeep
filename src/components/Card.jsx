import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <a href={props.live} target="_blank" rel="noopener noreferrer">
        <img
          src={props.image}
          alt="projectImage"
          className="w-[300px] h-[200px]"
        />
      </a>
      <div className="mt-6">
        <p className="font-bold text-lg text-[#ff5798]">{props.name}</p>
        <p className="text-sm text-gray-400 mt-4">{props.description}</p>
      </div>
    </div>
  );
}
