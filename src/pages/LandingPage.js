import React from "react";
import Name from "../pageComponents/Name";
import MyProjects from "../pageComponents/MyProjects";
import { Box } from "@mui/material";
// import LetsConnect from "../pageComponents/LetsConnect";
// import AboutMe from "../pageComponents/AboutMe";
import HowIWork from "../pageComponents/HowIWork";
import GeneralButton from "../components/GeneralButton";
import Layout from "../pageComponents/Layout";
import theme from "../theme";
const styles = {
  box: {
    marginTop: "60px",
  },
  button: {
    witdh: "100%",
    display: "flex",
    justifyContent: "center",
  },
  boxWidth: {
    width: "100%",
  },
};
const LandingPage = () => {
  return (
    <>
      <Layout>
        <Box sx={styles.box}>
          <Name />
        </Box>
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          primary main
        </Box>
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.primary.medium }}
        >
          medium
        </Box>
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.primary.purple }}
        >
          purple
        </Box>{" "}
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          secondary main
        </Box>{" "}
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.black.deepSpaceBlack }}
        >
          black
        </Box>{" "}
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.grey.dark }}
        >
          dark
        </Box>{" "}
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.grey.medium }}
        >
          medium
        </Box>
        <Box
          sx={styles.boxWidth}
          style={{ backgroundColor: theme.palette.grey.light }}
        >
          light
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
