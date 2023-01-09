import Link from "next/link";

export const Work = ({ projects }) => {
  const getStack = (msg) => {
    const splitArr = msg.split(",");
    return splitArr.join(" ");
  };

  return (
    <div
      id="work"
      className="flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center"
    >
      <h1 className="font-Anton font-extrabold text-3xl md:text-5xl tracking-widest uppercase">
        Noteworthy Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-2/3 p-12 gap-16">
        {projects &&
          projects.map((project) => (
            <Link
              href={project.github ? project.github : project.link}
              key={project.id}
            >
              <div className="project flex flex-col justify-evenly items-center bg-slate-900 rounded-md border-2 border-gray-50  hover:scale-125 hover:cursor-pointer shadow-lg shadow-slate-600 h-80 md:h-64 ">
                <h1 className="font-RobotoCondensed font-bold text-md md:text-xl tracking-widest uppercase mb-4">
                  {project.title}
                  {project.github ? (
                    <i className="fa-brands fa-github"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  )}
                </h1>
                <p className="text-slate-400 font-bold">
                  {project.description}
                </p>

                <p className="hidden md:block overflow-hidden break-words text-gray-400 mt-8 text-center">
                  {getStack(project.tools)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};