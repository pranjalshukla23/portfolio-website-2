import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta
          name="description"
          content="Checkout the portfolio website of Pranjal Shukla who is an Associate Software Engineer in Betaflux consulting"
        />
        <meta
          name="keywords"
          content="Pranjal Shukla, Associate Software Engineer, Betaflux, web3Werx, Diebold Nixdorf, Portfolio, Front end developer, app developer"
        />
        <meta
          property="og:title"
          content="Pranjal Shukla - Software Engineer"
        />
        <meta
          name="image"
          property="og:image"
          content="%PUBLIC_URL%/portfolio.png"
        />
        <meta name="author" content="Pranjal Shukla" />
        <meta
          property="og:description"
          content="Checkout the portfolio website of Pranjal Shukla who is an Associate Software Engineer in Betaflux consulting"
        />
        <meta property="og:url" content="https://pranjalshukla.vercel.app/" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}