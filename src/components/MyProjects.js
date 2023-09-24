import React from "react";
import { Typography } from "@mui/material";
import SingleProject from "./SingleProject";

const MyProjects = () => {
  return (
    <>
      <Typography variant="h4">Check out my projects</Typography>
      <SingleProject url="/globhe-app" />
    </>
  );
};

export default MyProjects;
