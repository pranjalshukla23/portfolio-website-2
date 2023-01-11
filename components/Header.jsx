import { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="flex flex-col md:flex-row justify-start items-center gap-x-48 bg-black p-4 sticky top-0 z-40">
      <h1 className="font-RobotoCondensed text-4xl text-blue-300">
        PranjalShukla.<span className="text-violet-600">_</span>
      </h1>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-2 text-white text-lg font-Montserrat font-bold w-1/2">
        <li>
          <a
            href="#"
            className={`hover:text-green-400 ${
              activeLink === "home" ? "text-green-400" : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#expertise"
            className={`hover:text-green-400 ${
              activeLink === "expertise" ? "text-green-400" : ""
            }`}
            onClick={() => setActiveLink("expertise")}
          >
            {" "}
            Expertise{" "}
          </a>
        </li>
        <li>
          <a
            href="#work"
            className={`hover:text-green-400 ${
              activeLink === "work" ? "text-green-400" : ""
            }`}
            onClick={() => setActiveLink("work")}
          >
            {" "}
            Work{" "}
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={`hover:text-green-400 ${
              activeLink === "experience" ? "text-green-400" : ""
            }`}
            onClick={() => setActiveLink("experience")}
          >
            {" "}
            Experience{" "}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:text-green-400 ${
              activeLink === "contact" ? "text-green-400" : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact{" "}
          </a>
        </li>
      </ul>
    </header>
  );
};