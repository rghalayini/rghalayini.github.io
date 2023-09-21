import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
  },
};
const Name = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Rémy Ghalayini</Typography>
    </Box>
  );
};

export default Name;
