export const Intro = () => {
  return (
    <div
      id="intro"
      className="h-screen flex justify-center items-start md:items-center text-white text-center mt-2 relative"
    >
      <video autoPlay muted loop id="myVideo" className="block h-full">
        <source src="/images/bg-video.mp4" type="video/mp4"></source>
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-inherit flex flex-col justify-center items-center">
        <h1 className="font-Anton font-medium text-4xl md:text-8xl tracking-widest uppercase mt-4 py-6">
          Pranjal Shukla
        </h1>
        <h3 className="font-Montserrat font-bold text-md md:text-xl tracking-widest uppercase">
          Software engineer, Front end & App Developer.
        </h3>
      </div>
    </div>
  );
};