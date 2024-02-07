import Head from "next/head";
import React from "react";
import Recuitment from "../components/Recuitment/Recuitment";
const recuitment = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/logo300px.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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

      <Recuitment />
    </>
  );
};

export default recuitment;
