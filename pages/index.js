import Head from "next/head";
import { Intro } from "../components/Intro";
import { Expertise } from "../components/Expertise";
import { Work } from "../components/Work";
import projects from "../data/projects.json";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Pranjal Shukla - Software Engineer</title>
      </Head>
      <Intro />
      <Expertise />
      <Work projects={projects} />
      <Experience />
      <Contact />
    </div>
  );
}

export async function getStaticProps(context) {
  //console.log("projects", projects);
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
  };
}