import React from "react";
import { Typography, Grid, Avatar, Box } from "@mui/material";
import profile from "../images/RG_profile.png";
import theme from "../theme";
import { avatarStyle } from "../library/Constants";

const styles = {
  container: {
    //display: "flex",
    backgroundColor: theme.palette.grey.medium,
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    padding: "30px",
  },
  avatarGrid: {
    display: "flex",
    justifyContent: "center",
  },
};
const Name = () => {
  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={8}>
          <Typography variant="body1">
            I am a product manager, full-stack developer, and data scientist. As
            a tech-savy PM, I build products from scratch, love coding with the
            team, establish product teams, and set up processes ahead of scaleup
            and growth. At the moment, I am a CTO of a marketplace specialised
            in selling geospatial data and allowing customers to easily find
            drone operators globally. I love maps, geospatial data, and
            marketplaces.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={styles.avatarGrid}>
          <Avatar alt="Remy Sharp" src={profile} sx={avatarStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Name;
