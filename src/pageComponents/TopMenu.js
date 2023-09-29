import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import theme from "../theme";

const styles = {
  title: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    //letterSpacing: ".3rem",
    color: theme.palette.black.deepSpaceBlack,
    textDecoration: "none",
    marginRight: "60px",
  },
  menuItem: {
    my: 2,
    color: theme.palette.black.deepSpaceBlack,
    display: "block",
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
    <AppBar position="fixed" color="grey">
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
                sx={styles.menuItem}
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
