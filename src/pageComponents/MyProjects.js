import React from "react";
import { Grid } from "@mui/material";
import SingleProject from "./SingleProject";
import BlockHeader from "../components/BlockHeader";
import theme from "../theme";
import Globhe from "../images/63a4404bcc9a62ad79fc3751_Globhe_logotype_2022_white.svg";

const removeUnderline = {
  "& a": {
    textDecoration: "none",
  },
};
const MyProjects = () => {
  return (
    <>
      <BlockHeader text="Check out my projects" />

      <Grid container>
        <Grid item xs={12} sm={4}>
          <SingleProject url="/globhe-app" image={Globhe} />
        </Grid>
        <Grid item xs={12} sm={4} sx={removeUnderline}>
          <SingleProject
            url="/developers-docs"
            color={theme.palette.grey.dark}
            text="Developers docs"
          />
        </Grid>
        <Grid item xs={12} sm={4} sx={removeUnderline}>
          <SingleProject
            url="/shopping-list"
            //color={theme.palette.grey.dark}
            text="Shopping list"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyProjects;
