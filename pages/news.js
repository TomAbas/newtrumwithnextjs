import Head from "next/head";
import React from "react";
import NewPage from "../components/News/NewPage";

const news = () => {
  return (
    <>
      <Head>
        <title>News</title>
        <link rel="icon" href="/logo300px.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:ital,wght@100;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* metatag google  */}
        <meta name="description" content="We are hiring" />
        <meta
          name="keywords"
          content="Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products"
        />
        <meta name="author" content="Trum Agency" />
        <link rel="canonical" href="https://www.trumagency.com/contact" />
        {/* metatag facebook */}
        <meta property="og:url" content="https://www.trumagency.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="We are hiring" />
        <meta property="og:description" content="We are hiring" />
        <meta
          property="og:image"
          content="https://pagesmanagementapi.com/storage/logothumnail.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NewPage />
    </>
  );
};

export default news;
