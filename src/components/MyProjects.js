import React from "react";
import { Typography, Grid } from "@mui/material";
import SingleProject from "./SingleProject";

const MyProjects = () => {
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
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
