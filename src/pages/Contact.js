import React, { useEffect } from "react";
import LetsConnect from "../pageComponents/LetsConnect";
import Layout from "../pageComponents/Layout";
import theme from "../theme";

const Contact = () => {
  useEffect(() => {
    document.title = "Contac";
  }, []);
  return (
    <Layout
      backgroundColor={theme.palette.grey.dark}
      fullPage
      maxWidth={false}
      disableGutters
      noMarginBottom
    >
      <LetsConnect />
    </Layout>
  );
};

export default Contact;
