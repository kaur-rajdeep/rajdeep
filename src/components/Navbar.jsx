import React from "react";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "EDUCATION", link: "#education" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="grid place-items-center">
        <div className="shadow-md  h-16 fixed top-0 left-0 bg-black backdrop-blur-lg z-10 border-2 border-pink-500 rounded-md m-4 w-[95%]">
          <div className="md:flex items-center justify-end py-4 md:px-10 px-7">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-4 cursor-pointer  md:hidden text-white mb-2"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items.center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]  left-0 w-full md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in  bg-black md:bg-transparent border-2 rounded-md border-pink-500 md:border-0  ${
                open ? "top-20 opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-6">
                  <a
                    href={link.link}
                    className="text-gray-100 hover:text-gray-400 font-medium duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
