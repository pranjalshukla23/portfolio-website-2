import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Expertise = () => {
  return (
    <div
      id="expertise"
      className="flex flex-col justify-center items-center text-center text-white gap-4"
    >
      <h1 className="font-Anton font-extrabold text-3xl md:text-5xl tracking-widest uppercase">
        My expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-2/3 p-12 gap-6 border-2 border-slate-100">
        <div className="border-0 md:border-r-2 md:border-white pr-2">
          <h1 className="font-RobotoCondensed font-bold text:md md:text-xl tracking-widest uppercase mb-4">
            <i className="fa-solid fa-desktop text-xl"></i>
            <span className="underline decoration-4 decoration-pink-500">
              Software
            </span>{" "}
            development
          </h1>
          <p>Experienced in both functional and OOP: JavaScript, TypeScript.</p>
        </div>
        <div className="border-0 md:border-r-2 md:border-white pr-2">
          <h1 className="font-RobotoCondensed font-bold text-xl tracking-widest uppercase mb-4">
            <i className="fa-brands fa-react text-2xl"></i>
            <span className="underline decoration-4 decoration-blue-500">
              Frontend Dev
            </span>{" "}
            <br />
            React, NextJS
          </h1>
          <p>
            Passionate about UI/UX. Over 2 years of development experience in
            HTML, CSS, JS, Tailwind CSS, Bootstrap, Material UI, React and
            NextJS frameworks.
          </p>
        </div>
        <div>
          <h1 className="font-RobotoCondensed font-bold text-xl tracking-widest uppercase mb-4">
            <i className="fa-brands fa-node-js text-2xl"></i>
            <span className="underline decoration-4 decoration-orange-500">
              Backend Dev
            </span>{" "}
            <br />
            Node, ExpressJS
          </h1>
          <p>
            Over 2 years of development experience in backend development with
            Node and ExpressJS.
          </p>
        </div>
      </div>
    </div>
  );
};