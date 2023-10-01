import React from "react";
import { Grid } from "@mui/material";
import SingleProject from "./SingleProject";
import BlockHeader from "../components/BlockHeader";

const MyProjects = () => {
  return (
    <>
      <BlockHeader text="Check out my projects" />

      <Grid container>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid> */}
      </Grid>
    </>
  );
};

export default MyProjects;
