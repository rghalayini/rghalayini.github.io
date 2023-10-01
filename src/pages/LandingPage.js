import React from "react";
import Name from "../pageComponents/Name";
import MyProjects from "../pageComponents/MyProjects";
import { Box } from "@mui/material";
import HowIWork from "../pageComponents/HowIWork";
import Layout from "../pageComponents/Layout";
import CallForAction from "../components/CallForAction";

const styles = {
  box: {
    marginTop: "60px",
  },
};
const LandingPage = () => {
  return (
    <>
      <Layout>
        <Name />
        <Box sx={styles.box}>
          <MyProjects />
        </Box>
        <Box sx={styles.box}>
          <HowIWork />
        </Box>
        <CallForAction label="Read more about me" url="/about" />
      </Layout>
    </>
  );
};

export default LandingPage;
