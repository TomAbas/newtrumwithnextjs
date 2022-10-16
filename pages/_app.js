import "../styles/globals.css";
import Layout from '../components/Layout.js'

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if ([`/admin`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };
  return (
    // <Layout>
    // <Component {...pageProps} />
    // </Layout>
    <>{getContent()}</>
  );
}

export default MyApp;
