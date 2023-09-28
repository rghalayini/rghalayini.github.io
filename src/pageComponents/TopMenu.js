import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

const styles = {
  title: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    //letterSpacing: ".3rem",
    color: "black",
    textDecoration: "none",
    marginRight: "60px",
  },
};

const pages = [
  {
    pageName: "Projects",
    url: "",
  },
  {
    pageName: "About me",
    url: "/about",
  },
  {
    pageName: "Contact",
    url: "/contact",
  },
  {
    pageName: "Resume",
    url: "",
  },
];
const handleClick = (url) => {
  window.location.href = url;
};
const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.title}
          >
            Rémy Ghalayini
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page.url)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;