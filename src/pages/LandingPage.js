import React from "react";
import TopMenu from "../pageComponents/TopMenu";
import Name from "../pageComponents/Name";
import MyProjects from "../pageComponents/MyProjects";
import { Container, Box } from "@mui/material";
import LetsConnect from "../pageComponents/LetsConnect";
import AboutMe from "../pageComponents/AboutMe";
import HowIWork from "../pageComponents/HowIWork";
import GeneralButton from "../components/GeneralButton";

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
      <TopMenu />
      <Container maxWidth="lg">
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
      </Container>
    </>
  );
};

export default LandingPage;
