import Link from "next/link";
import { WorkItem } from "./WorkItem";

export const Work = ({ projects }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center">
      <h1 className="font-Anton text-2xl  tracking-widest uppercase">
        Other Noteworthy Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-2/3 p-12 gap-16">
        {projects &&
          projects
            .slice(4)
            .map((project) => <WorkItem project={project} key={project.id} />)}
      </div>
    </div>
  );
};