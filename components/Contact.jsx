export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center my-32 gap-8"
    >
      <h1 className="font-Anton font-extrabold text-3xl md:text-5xl tracking-widest uppercase">
        Get in touch
      </h1>
      <p className="text-slate-400 font-bold text-center">
        Have an exciting project you need help with? Send me an email or contact
        me via instant message!
        <br />
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>
      <button className="border-2 px-6 py-4 hover:bg-gray-800 ">
        <a
          className="text-2xl text-slate-400"
          href="mailto: pranjalshukla23@gmail.com"
        >
          Say Hello
        </a>
      </button>
    </div>
  );
};