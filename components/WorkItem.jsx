import Link from "next/link";
import Image from "next/image";

export const WorkItem = ({ project }) => {
  const getStack = (msg) => {
    const splitArr = msg.split(",");
    return splitArr;
  };
  return (
    <Link
      href={project.github ? project.github : project.link}
      key={project.id}
    >
      <div className="group flex flex-col justify-evenly items-center bg-slate-900 rounded-md border-2 border-gray-50 hover:scale-100 hover:cursor-pointer shadow-lg shadow-slate-600 p-2 h-80 lg:h-64 gap-4 z-10 overflow-hidden">
        <div className="relative w-full h-3/4 ">
          <Image src={project.imageUrl} fill={true} />
        </div>
        <h1 className="font-RobotoCondensed font-bold text-md tracking-widest uppercase mb-2">
          {project.title}
          {project.github ? (
            <i className="fa-brands fa-github"></i>
          ) : (
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          )}
        </h1>
        <div className="absolute bg-zinc-800 top-0 bottom-16 left-0 right-0 z-30 flex flex-col justify-center items-center flex-wrap gap-2 transition-transform -translate-y-[15rem] group-hover:translate-y-0 opacity-90">
          <p>{project.description}</p>
          <div className="flex justify-center items-center flex-wrap">
            {getStack(project.tools).map((tool) => (
              <span key={tool} className="bg-blue-500 p-2 m-2">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
