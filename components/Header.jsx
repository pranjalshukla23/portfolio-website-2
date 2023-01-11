export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-start items-center gap-x-48 bg-black p-4 sticky top-0 z-40">
      <h1 className="font-RobotoCondensed text-4xl text-blue-300">
        PranjalShukla.<span className="text-violet-600">_</span>
      </h1>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-2 text-white text-lg font-Montserrat font-bold w-1/2">
        <li>
          <a href="#" className="hover:text-green-400 focus:text-green-400">
            Home
          </a>
        </li>
        <li>
          <a
            href="#expertise"
            className="hover:text-green-400 focus:text-green-400"
          >
            {" "}
            Expertise{" "}
          </a>
        </li>
        <li>
          <a href="#work" className="hover:text-green-400 focus:text-green-400">
            {" "}
            Work{" "}
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-green-400 focus:text-green-400"
          >
            {" "}
            Experience{" "}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-green-400 focus:text-green-400"
          >
            Contact{" "}
          </a>
        </li>
      </ul>
    </header>
  );
};