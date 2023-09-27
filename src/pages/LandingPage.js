import React from "react";
import TopMenu from "../pageComponents/TopMenu";
import Name from "../pageComponents/Name";
import MyProjects from "../pageComponents/MyProjects";
import { Container, Box } from "@mui/material";
import LetsConnect from "../pageComponents/LetsConnect";
import AboutMe from "../pageComponents/AboutMe";

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
