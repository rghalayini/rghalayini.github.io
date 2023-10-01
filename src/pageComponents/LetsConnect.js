import React from "react";
import { Typography, Avatar, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../theme";
import BlockHeader from "../components/BlockHeader";
import profile from "../images/RG_profile.png";
import { avatarStyle } from "../library/Constants";

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
const LetsConnect = () => {
  const emailAddress = "remyghalayini@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} sm={3}>
        <Avatar alt="Remy Sharp" src={profile} sx={avatarStyle} />
      </Grid>
      <Grid item xs={12} sm={3} mt={3}>
        <BlockHeader text="Let's connect" green variant="h3" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <a
          href="https://www.linkedin.com/in/rghalayini/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.aTag}
        >
          <LinkedInIcon sx={styles.icon} />
        </a>
        <a
          href={`mailto:${emailAddress}`}
          onClick={handleEmailClick}
          style={styles.aTag}
        >
          <EmailIcon sx={styles.icon} />
        </a>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="body1" sx={styles.bodyText}>
          Please don&apos;t hesitate to reach out if you would like to chat
          about work or side project opportunities, share your feedback and
          input, or just connect. I am always open to new conversations and will
          do my best to respond to you in a timely manner. Cheers!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LetsConnect;
