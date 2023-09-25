import React from "react";
import TopMenu from "../components/TopMenu";
import Name from "../components/Name";
import MyProjects from "../components/MyProjects";
import { Container, Box } from "@mui/material";
import LetsConnect from "../components/LetsConnect";
import AboutMe from "../components/AboutMe";

const styles = {
  box: {
    marginTop: "60px",
  },
};
const LandingPage = () => {
  return (
    <>
      <TopMenu />
      <Container maxWidth="lg">
        <Box sx={styles.box}>
          <Name />
        </Box>
        <Box sx={styles.box}>
          <MyProjects />
        </Box>

        <Box sx={styles.box}>
          <AboutMe />
        </Box>
        <Box sx={styles.box}>
          <LetsConnect />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
