import React from "react";
import { Typography, Grid } from "@mui/material";
import theme from "../theme";
import BlockHeader from "../components/BlockHeader";
import GeneralButton from "../components/GeneralButton";
import pdf from "../images/Ghalayini_CV.pdf";

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  icon: {
    fontSize: "50px",
    color: theme.palette.primary.main,
  },
  aTag: {
    textDecoration: "none",
  },
  bodyText: {
    color: theme.palette.grey.white,
    paddingTop: "30px",
  },
};
const MyResume = () => {
  const pdfUrl = "../images/Ghalayini_CV.pdf";
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} sm={4} mt={3}>
        <BlockHeader text="Download my resume" green variant="h3" />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography variant="body1" sx={styles.bodyText}>
          Click on the button below to view my resume as a PDF.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} mt={3}>
        <GeneralButton
          label="Download my resume"
          onClick={() => window.open(pdfUrl, "_blank")}
          download
          url={pdf}
        />
      </Grid>
    </Grid>
  );
};

export default MyResume;
