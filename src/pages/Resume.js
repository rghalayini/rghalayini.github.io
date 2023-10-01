import React from "react";
import MyResume from "../pageComponents/MyResume";
import Layout from "../pageComponents/Layout";
import theme from "../theme";

const Resume = () => {
  return (
    <Layout
      backgroundColor={theme.palette.grey.dark}
      fullPage
      maxWidth={false}
      disableGutters
      noMarginBottom
    >
      <MyResume />
    </Layout>
  );
};

export default Resume;
