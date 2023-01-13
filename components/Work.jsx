import Link from "next/link";
import { WorkItem } from "./WorkItem";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Work = ({ projects }) => {
  const [showProjects, setShowProjects] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowProjects(inViewport);
  }, [inViewport]);

  return (
    <section ref={myRef}>
      <div
        className={`flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center transition-opacity ${
          showProjects
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }`}
      >
        <h1 className="font-Anton text-2xl  tracking-widest uppercase">
          Other Noteworthy Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-2/3 p-12 gap-16">
          {projects &&
            projects
              .slice(4)
              .map((project) => (
                <WorkItem project={project} key={project.id} />
              ))}
        </div>
      </div>
    </section>
  );
};