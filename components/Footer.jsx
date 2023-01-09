export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-slate-400 text-2xl font-bold p-8">
      <h2>Designed & Built by Pranjal Shukla</h2>

      <div className="flex justify-between items-center gap-4">
        <a
          href="https://github.com/pranjalshukla23"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pranjalshukla/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://t.me/Pranjal23" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
  );
};