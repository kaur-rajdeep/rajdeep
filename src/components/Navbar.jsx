import React from "react";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    //   { name: "HOME", link: "#" },
    //   { name: "ABOUT", link: "#about" },
    //   { name: "EDUCATION", link: "#education" },
    //   { name: "SKILLS", link: "#skills" },
    //   { name: "PROJECTS", link: "#projects" },
    //   { name: "CONTACT", link: "#contact" },
    {
      name: "Home",
      link: "/",
    },
    // { name: "About", link: "/about" },
    {
      name: "Education",
      link: "/education",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    // {
    //   name: "Connect",
    //   link: "/connect",
    // },
    {
      name: "Art Board",
      link: "/art",
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="grid place-items-center">
        <div className=" h-16 fixed top-0 left-0 bg-black z-10  w-[100%]">
          <div className="md:flex items-center justify-end py-4 md:px-10 px-7">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-4 cursor-pointer  md:hidden text-white mb-2"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:mt-2 md:flex md:items.center md:pb-0 absolute md:static md:z-auto z-[-1] right-6 w-[200px] md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in backdrop-blur-md bg-black/30 md:bg-transparent border-2 rounded-md border-[#f3055c] md:border-0 grid place-items-right ${
                open ? "top-20 opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-xl md:my-0 my-6 grid place-items-right"
                >
                  <a
                    href={link.link}
                    onClick={() => setOpen(!open)}
                    className="text-white/90 hover:text-gray-300 text-base duration-500"
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
