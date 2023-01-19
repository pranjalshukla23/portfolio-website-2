import Link from "next/link";
import Image from "next/image";

export const FeaturedItem = ({ project }) => {
  const getStack = (msg) => {
    const splitArr = msg.split(",");
    return splitArr.join(" ");
  };

  return (
    <div
      className={`flex flex-col ${
        project.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } justify-center items-center w-full h-full md:w-3/4  my-4 gap-6 `}
      key={project.id}
    >
      {/*  image section */}
      <Link
        href={project.github ? project.github : project.link}
        key={project.id}
        className="w-4/5"
      >
        <Image
          src={project.imageUrl}
          alt="image"
          width={600}
          height={400}
          className="border-4 border-gray-900 rounded-md hover:scale-105"
        />
      </Link>
      {/*  information section*/}
      <div
        className={`flex flex-col justify-center items-center ${
          project.id % 2 === 0 ? "md:items-end" : "md:items-start"
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
        <div className="bg-slate-900 rounded-md border-2 border-gray-50 shadow-lg shadow-slate-600 p-4 w-full hidden md:block">
          <p className="text-slate-400 font-bold">{project.description}</p>
          <p className="hidden md:block overflow-hidden break-words text-gray-400 mt-8 text-center">
            {getStack(project.tools)}
          </p>
        </div>
      </div>
    </div>
  );
};
