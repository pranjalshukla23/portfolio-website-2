import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowFooter(inViewport);
  }, [inViewport]);
  return (
    <section ref={myRef}>
      <div
        className={`flex flex-col justify-center items-center text-slate-400 text-2xl font-bold p-8 ${
          showFooter
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }`}
      >
        <h2>Designed & Built by Pranjal Shukla</h2>

        <div className="flex justify-between items-center gap-4">
          <a
            href="https://github.com/pranjalshukla23"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pranjalshukla/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://t.me/Pranjal23" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};