import Link from "next/link";

export const WorkItem = ({ project }) => {
  const getStack = (msg) => {
    const splitArr = msg.split(",");
    return splitArr.join(" ");
  };
  return (
    <Link
      href={project.github ? project.github : project.link}
      key={project.id}
    >
      <div className="project flex flex-col justify-evenly items-center bg-slate-900 rounded-md border-2 border-gray-50  hover:scale-125 hover:cursor-pointer shadow-lg shadow-slate-600 p-4 h-80 lg:h-64 ">
        <h1 className="font-RobotoCondensed font-bold text-md md:text-xl tracking-widest uppercase mb-4">
          {project.title}
          {project.github ? (
            <i className="fa-brands fa-github"></i>
          ) : (
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          )}
        </h1>
        <p className="text-slate-400 font-bold">{project.description}</p>

        <p className="hidden md:block overflow-hidden break-words text-gray-400 mt-8 text-center">
          {getStack(project.tools)}
        </p>
      </div>
    </Link>
  );
};