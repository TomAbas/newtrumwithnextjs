import Head from 'next/head';
import React from 'react';
import Login from '../components/Login/Login';

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/logo300px.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap'
          rel='stylesheet'
        />
        {/* metatag google  */}
        <meta name='description' content='We are hiring' />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href='https://www.trumagency.com/contact' />
        {/* metatag facebook */}
        <meta property='og:url' content='https://www.trumagency.com' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='We are hiring' />
        <meta property='og:description' content='We are hiring' />
        <meta
          property='og:image'
          content='https://pagesmanagementapi.com/storage/logothumnail.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <Login />
    </>
  );
};

export default login;
