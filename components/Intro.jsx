import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { ClipLoader } from "react-spinners";

export const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [blur, setBlur] = useState(true);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowIntro(inViewport);
    getVideo();
  }, [inViewport]);

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);

  const getVideo = () => {
    return (
      <>
        <video
          autoPlay
          playsInline
          muted
          className={`video h-full hidden md:block`}
          loop
          src="/images/bg-video-2.mp4"
          onPlay={onLoad}
        />
        <video
          autoPlay
          playsInline
          muted
          className={`video h-full block md:hidden`}
          loop
          src="/images/mobile-video.mp4"
          onPlay={onLoad}
        />
      </>
    );
  };
  return (
    <section id="intro" ref={myRef} className=" mt-50 text-center relative">
      {loading && (
        <div className="hidden md:block bg-inherit absolute top-0 bottom-0 right-0 left-0 text-center">
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
        className={` h-screen flex justify-center items-center text-white text-center mt-4 relative mb-8 transition-opacity ${
          showIntro
            ? " opacity-100 duration-500 delay-500 ease-in"
            : " opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        {getVideo()}
        <div
          className={`hidden absolute top-0 left-0 right-0 bottom-0 flex-col justify-center items-center transition-[blur] duration-1000 delay-500 ease-in bg-gradient-to-br from-black via-gray-900 to-black md:bg-none ${
            !loading ? "md:flex" : "md:hidden"
          }   ${blur ? "blur-md" : "blur-none"}`}
        >
          <h1
            className={`font-Anton font-medium text-6xl text-white md:text-8xl tracking-widest uppercase  py-6 `}
          >
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