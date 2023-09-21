import React from "react";
import { Container, Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  contentBox: {
    width: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
  },
  icon: {
    fontSize: "50px",
  },
};
const index = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentBox}>
        <Typography variant="h3" sx={styles.title}>
          Let&apos;s connect
        </Typography>
        <LinkedInIcon sx={styles.icon} />
        <EmailIcon sx={styles.icon} />
        <Typography>
          Please don&apos;t hesitate to reach out if you would like to chat
          about work or side project opportunities, share your feedback and
          input, or just connect. I am always open to new conversations and will
          do my best to respond to you in a timely manner. Cheers!
        </Typography>
      </Box>
    </Container>
  );
};

export default index;
