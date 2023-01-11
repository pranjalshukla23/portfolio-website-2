import Image from "next/image";
import Link from "next/link";

export const Featured = ({ projects }) => {
  const getStack = (msg) => {
    const splitArr = msg.split(",");
    return splitArr.join(" ");
  };

  return (
    <div id="work" className="flex flex-col justify-start items-center my-8">
      <h1 className="font-Anton font-extrabold text-white text-3xl md:text-5xl tracking-widest uppercase my-8 text-center">
        Featured Projects
      </h1>

      {projects.slice(0, 4).map((project) => (
        <div
          className={`flex ${
            project.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } w-full h-full md:w-3/4 md:h-1/2 my-4 gap-6`}
          key={project.id}
        >
          {/*  image section */}
          <Link
            href={project.github ? project.github : project.link}
            key={projects[0].id}
            className="w-full hidden md:block"
          >
            <Image
              src={project.imageUrl}
              alt="image"
              width={690}
              height={400}
              className="border-4 border-gray-900 rounded-md hover:scale-105"
            />
          </Link>
          {/*  information section*/}
          <div
            className={`flex flex-col justify-center ${
              project.id % 2 === 0 ? "items-end" : "items-start"
            } w-full text-white`}
          >
            <Link
              href={project.github ? project.github : project.link}
              className="font-RobotoCondensed font-bold text-md md:text-2xl tracking-widest uppercase mb-4 hover:text-red-500"
            >
              {project.title}
              {project.github ? (
                <i className="fa-brands fa-github"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              )}
            </Link>
            <div className="bg-slate-900 rounded-md border-2 border-gray-50 hover:cursor-pointer shadow-lg shadow-slate-600 p-4 w-full">
              <p className="text-slate-400 font-bold">{project.description}</p>
              <p className="hidden md:block overflow-hidden break-words text-gray-400 mt-8 text-center">
                {getStack(project.tools)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};