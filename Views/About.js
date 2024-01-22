import React, { useEffect, useState } from "react";
import About01v2 from "../components/About/AboutPage/About-01/About01v2";
import About02 from "../components/About/AboutPage/About-02/About02";
import About04 from "../components/About/AboutPage/About-04/About04";
import About05 from "../components/About/AboutPage/About-05/About05";
import About06 from "../components/About/AboutPage/About-06/About06";
import About07 from "../components/About/AboutPage/About-07/About07";
import BestProjects from "../components/landingpage/LandingPage/BestProjects/BestProjects";

const About = ({ data }) => {
  console.log(data);
  const [aboutData, setAboutData] = useState(
    null || {
      about01: {},
      about02: {},
      about03: {},
      description01: "",
      description02: "",
      video: "",
      _id: "",
    }
  );

  useEffect(() => {
    if (data) {
      setAboutData(data);
    }
  }, [data]);

  return (
    <>
      <About01v2 aboutData={aboutData} />
      <About02 aboutData={aboutData} />
      <About04 aboutData={aboutData} />
      <About05 aboutData={aboutData} />
      <About06 aboutData={aboutData} />
      <About07 aboutData={aboutData} />
      <BestProjects />
    </>
  );
};

export default About;
