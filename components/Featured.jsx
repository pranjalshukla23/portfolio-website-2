import Image from "next/image";
import Link from "next/link";
import { FeaturedItem } from "./FeaturedItem";

export const Featured = ({ projects }) => {
  return (
    <div
      id="work"
      className="flex flex-col justify-start items-center my-8 w-full"
    >
      <h1 className="font-Anton font-extrabold text-white text-3xl md:text-5xl tracking-widest uppercase my-8 text-center">
        Featured Projects
      </h1>

      {projects.slice(0, 4).map((project) => (
        <FeaturedItem project={project} key={project.id} />
      ))}
    </div>
  );
};