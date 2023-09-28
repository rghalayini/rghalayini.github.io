import React from "react";
import Name from "../pageComponents/Name";
import MyProjects from "../pageComponents/MyProjects";
import { Box } from "@mui/material";
// import LetsConnect from "../pageComponents/LetsConnect";
// import AboutMe from "../pageComponents/AboutMe";
import HowIWork from "../pageComponents/HowIWork";
import GeneralButton from "../components/GeneralButton";
import Layout from "../pageComponents/Layout";

const styles = {
  box: {
    marginTop: "60px",
  },
  button: {
    witdh: "100%",
    display: "flex",
    justifyContent: "center",
  },
};
const LandingPage = () => {
  return (
    <>
      <Layout>
        <Box sx={styles.box}>
          <Name />
        </Box>
        <Box sx={styles.box}>
          <MyProjects />
        </Box>
        <Box sx={styles.box}>
          <HowIWork />
        </Box>
        <Box sx={{ ...styles.box, ...styles.button }}>
          <GeneralButton label="Read more about me" url="/about" />
        </Box>
        {/* <Box sx={styles.box}>
          <AboutMe />
        </Box>
        <Box sx={styles.box}>
          <LetsConnect />
        </Box> */}
      </Layout>
    </>
  );
};

export default LandingPage;
