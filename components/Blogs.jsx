import Link from "next/link";
import { WorkItem } from "./WorkItem";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BlogItem } from "./BlogItem";

export const Blogs = () => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pranjalshukla23";

  const [showBlogs, setShowBlogs] = useState(false);
  const [blur, setBlur] = useState(true);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowBlogs(inViewport);
  }, [inViewport]);

  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);

  const [profile, setProfile] = useState({
    name: "Pranjal Shukla",
    profileImage: "",
    profileUrl: "",
  });

  const [blog, setBlog] = useState({
    items: [],
    isLoading: true,
    error: null,
  });

  const displayBlogs = () => {
    if (blog.items) {
      return blog.items.map((post, index) => (
        <BlogItem key={index} post={post} profile={profile} />
      ));
    }
  };

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        const posts = blogs.filter((post) => post.categories.length > 0);

        console.log(posts);

        setProfile((prevState) => ({
          ...prevState,
          profileUrl: link,
          profileImage: image,
        }));
        setBlog({
          items: posts,
          isLoading: false,
        });
      })
      .catch((err) => setBlog({ error: err.message }));
  }, [axios]);

  return (
    <section id='blogs' ref={myRef}>
      <div
        className={`flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center transition-opacity ${
          showBlogs
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }`}
      >
        <h1 className='font-Anton text-2xl md:text-4xl tracking-widest uppercase'>
          Blogs
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full md:w-4/5 p-8 gap-16'>
          {/* {displayProjects &&
            displayProjects.map((project) => (
              <WorkItem project={project} key={project.id} />
            ))} */}
          {blog.isLoading ? "Loading..." : displayBlogs()}
        </div>
      </div>
    </section>
  );
};
