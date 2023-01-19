import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { FeaturedItem } from "./FeaturedItem";

export const Featured = ({ projects }) => {
  const [showWork, setShowWork] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowWork(inViewport);
  }, [inViewport]);
  return (
    <section ref={myRef} id="work">
      <div
        className={`flex flex-col justify-start items-center w-full
        transition-opacity my-12
      ${
        showWork
          ? "opacity-100 duration-500 delay-500 ease-in"
          : "opacity-0 opacity-100 duration-100 ease-in"
      } `}
      >
        <h1 className="font-Anton font-extrabold text-white text-2xl md:text-4xl tracking-widest uppercase my-8 text-center">
          Featured Projects
        </h1>

        {projects.slice(0, 4).map((project) => (
          <FeaturedItem project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};
