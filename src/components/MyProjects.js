import React from "react";
import { Typography, Grid } from "@mui/material";
import SingleProject from "./SingleProject";
import { TextMargin } from "../library/Constants";

const MyProjects = () => {
  return (
    <>
      <Typography variant="h3" sx={TextMargin}>
        Check out my projects
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" />
        </Grid>
      </Grid>
    </>
  );
};

export default MyProjects;
