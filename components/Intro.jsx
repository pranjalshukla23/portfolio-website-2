import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { ClipLoader } from "react-spinners";

export const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowIntro(inViewport);
  }, [inViewport]);

  const onLoad = () => {
    setLoading(false);
  };
  return (
    <section
      id="intro"
      ref={myRef}
      className="h-fit md:h-screen mt-50 text-center relative"
    >
      {loading && (
        <div className="bg-inherit absolute top-0 bottom-0 right-0 left-0 text-center">
          <ClipLoader
            color={"#fff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div
        className={` flex justify-center items-center text-white text-center mt-4 relative mb-8 ${
          showIntro
            ? "opacity-100 duration-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        <video
          autoPlay
          playsInline
          muted
          className="video h-full "
          loop
          src="/images/bg-video-2.mp4"
          onPlay={onLoad}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-inherit flex flex-col justify-center items-center">
          <h1 className="font-Anton font-medium text-4xl md:text-8xl tracking-widest uppercase mt-4 py-6">
            Pranjal Shukla
          </h1>
          <h3 className="font-Montserrat font-bold text-xs md:text-xl tracking-widest uppercase">
            Software engineer, Front end & App Developer.
          </h3>
        </div>
      </div>
    </section>
  );
};