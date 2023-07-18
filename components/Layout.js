import React from 'react';
// import Footer from './FooterPage/FooterPage/Footer';
import Footer from './FooterPage/FooterPage01/FooterPage01';
import NavPage from './NavPage/NavPage01/NavPage01';
// import NavPage from "./NavPage/NavPage/NavPage";

const Layout = ({ children }) => {
  return (
    <>
      <NavPage />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
