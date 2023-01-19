import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Experience = () => {
  const [showExperience, setShowExperience] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowExperience(inViewport);
  }, [inViewport]);
  return (
    <section id="experience" ref={myRef}>
      <div
        className={`flex flex-col justify-center items-center text-center text-white gap-4 my-24 transition-opacity ${
          showExperience
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        <h1 className="font-Anton font-extrabold text-2xl md:text-4xl text-white tracking-widest uppercase mb-8">
          Professional Experience
        </h1>
        <div className="space-y-4 w-full md:w-1/2">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8">
              <div className="font-medium text-white text-start text-md w-1/2">
                Associate Software Engineer @ BetaFlux
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jan &apos;23 - present
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Development of 10+ web applications by using responsive UI
                elements via React concepts for smooth performance
              </li>
              <li>
                Constructed 7+ user interface codes of web applications with
                frameworks ReactJS, NextJS, and JavaScript based on approved
                design
              </li>
              <li>
                Utilized libraries and frameworks like Material UI, Bootstrap
                Tailwind CSS for efficiently designing web applications
              </li>
              <li>
                Employed state management library Redux Toolkit for constructing
                redux applications
              </li>
              <li>
                Integration of user-facing elements developed by front-end
                developers with server-side logic
              </li>
              <li>
                Composed backend for websites and constructed RESTful APIs with
                NodeJS and ExpressJS
              </li>
              <li>
                Utilized relational databases and NoSQL databases to streamline
                data for user applications
              </li>
              <li>
                Managed the deployment of web applications on platforms like
                Heroku, Vercel
              </li>
            </ul>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8">
              <div className="font-medium text-white text-start text-md w-1/2">
                Full Stack Developer @ Web3Werx
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jan &apos; 21 - Dec &apos; 22
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Coding smart contracts for Ethereum blockchain using solidity
                programming language
              </li>
              <li>
                Developing decentralized applications on Ethereum and
                Hyperledger Fabric blockchain
              </li>
              <li>
                Constructing test cases using mocha and chai framework for unit
                testing of decentralized applications
              </li>
              <li>
                Designing and developing web-based applications using front-end
                frameworks React JS and Ether.js library for interacting with
                the Ethereum blockchain
              </li>
            </ul>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8">
              <div className="font-medium text-white text-start text-md w-1/2">
                Software Engineering intern @ Diebold Nixdorf
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jun &apos; 21 - Dec &apos; 21
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Development of a 360-degree customer recommendation engine using
                cypher query language and graph database system Neo4j
              </li>
              <li>
                Facilitated the research and development of business-oriented
                data science solutions on graph database systems such as Neo4j,
                Arango DB
              </li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};
