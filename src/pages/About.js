import React, { useEffect } from "react";
import AboutMe from "../pageComponents/AboutMe";
import Layout from "../pageComponents/Layout";

const About = () => {
  useEffect(() => {
    document.title = "About me";
  }, []);
  return (
    <Layout>
      <AboutMe />
    </Layout>
  );
};

export default About;
