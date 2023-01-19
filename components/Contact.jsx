import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowContact(inViewport);
  }, [inViewport]);
  return (
    <section id="contact" ref={myRef}>
      <div
        className={`flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center my-32 gap-8 transition-opacity ${
          showContact
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        <h1 className="font-Anton font-extrabold text-2xl md:text-4xl tracking-widest uppercase">
          Get in touch
        </h1>
        <p className="text-slate-400 font-bold text-center">
          Have an exciting project you need help with? Send me an email or
          contact me via instant message!
          <br />
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
        <button className="border-2 px-6 py-4 hover:bg-gray-800 ">
          <a
            className="text-2xl text-slate-400"
            href="mailto: pranjalshukla23@gmail.com"
          >
            Say Hello
          </a>
        </button>
      </div>
    </section>
  );
};
