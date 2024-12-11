import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="knu map Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="imge/png" href="/img/logo/favicon.svg" />

        {/** SEO **/}
        <meta name="keyword" content={"knu map"} />
        <meta
          name="description"
          content={"knu map project web programming subject for home work."}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
