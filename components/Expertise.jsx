import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Expertise = () => {
  const [showExpertise, setShowExpertise] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowExpertise(inViewport);
  }, [inViewport]);
  return (
    <section id="expertise" ref={myRef}>
      <div
        className={`flex flex-col justify-center items-center text-center text-white gap-4 transition-opacity ${
          showExpertise
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        } `}
      >
        <h1 className="font-Anton font-extrabold text-3xl md:text-5xl tracking-widest uppercase mb-4">
          My expertise
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 lg:w-2/3 p-12 gap-6 border-2 border-slate-100">
          {/*<div className="border-0 md:border-r-2 md:border-white pr-2">*/}
          {/*  <h1 className="font-RobotoCondensed font-bold text:md md:text-xl tracking-widest uppercase mb-4">*/}
          {/*    <i className="fa-solid fa-desktop text-xl"></i>*/}
          {/*    <span className="underline decoration-4 decoration-pink-500">*/}
          {/*      Software*/}
          {/*    </span>{" "}*/}
          {/*    development*/}
          {/*  </h1>*/}
          {/*  <p>*/}
          {/*    Experienced in both functional and OOP: JavaScript, TypeScript.*/}
          {/*  </p>*/}
          {/*</div>*/}
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
          <div className="border-0 md:border-r-2 md:border-white pr-2">
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
          <div>
            <h1 className="font-RobotoCondensed font-bold text:md md:text-xl tracking-widest uppercase mb-4">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <span className="underline decoration-4 decoration-pink-500">
                Mobile dev
              </span>{" "}
              <br />
              React Native
            </h1>
            <p>
              Skilled in developing hybrid mobile apps and cross-platform
              solutions using the React Native framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
