import React from "react";
import { Typography, Grid, Avatar, Container } from "@mui/material";
import profile from "../images/RG_profile.png";

const styles = {
  container: {
    display: "flex",
    marginTop: "60px",
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
  },
};
const Name = () => {
  return (
    <Container sx={styles.container} maxWidth="lg">
      <Grid container sx={styles.gridContainer} spacing={4}>
        <Grid item xs={8}>
          <Typography variant="h6">
            I am a product manager, full-stack developer, and data scientist. As
            a tech-savy PM, I build products from scratch, love coding with the
            team, establish product teams, and set up processes ahead of scaleup
            and growth. At the moment, I am a CTO of a marketplace specialised
            in selling geospatial data and allowing customers to easily find
            drone operators globally. I love maps, geospatial data, and
            marketplaces.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar alt="Remy Sharp" src={profile} sx={styles.avatar} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Name;
