import Head from "next/head";
import { Intro } from "../components/Intro";
import { Expertise } from "../components/Expertise";
import { Work } from "../components/Work";
import projects from "../data/projects.json";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { useState } from "react";
import {
  CircleLoader,
  ClipLoader,
  RingLoader,
  RotateLoader,
} from "react-spinners";
import { Featured } from "../components/Featured";

export default function Home({ projects }) {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Head>
        <title>Pranjal Shukla - Software Engineer</title>
        <meta property="og:image" content="/images/portfolio.png" />
      </Head>

      <Intro loading={loading} setLoading={setLoading} />
      {loading ? (
        <div className="text-center h-screen">
          <ClipLoader
            color={"#fff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Expertise />
          <Featured projects={projects} />
          <Work projects={projects} />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
  };
}