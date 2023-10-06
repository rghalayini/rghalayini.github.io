import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Container,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

const styles = {
  toolbar: {
    justifyContent: "space-between",
  },
  titleBox: {
    display: "flex",
    marginRight: { xs: 0, md: "60px" },
    alignItems: "center",
  },
  icon: {
    color: theme.palette.grey.dark,
    mr: { xs: 1, md: 3 },
  },
  title: {
    mr: 2,
    fontWeight: 700,
    color: theme.palette.grey.dark,
    textDecoration: "none",
    fontFamily: "Bebas Neue, sans-serif",
    letterSpacing: "0.3em",
  },
  menuBox: {
    display: { xs: "none", md: "flex" },
  },
  menuItem: {
    my: 2,
    color: theme.palette.grey.dark,
    display: "block",
  },
  menuIcon: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
};

const pages = [
  {
    pageName: "Work",
    url: "/",
  },
  {
    pageName: "About me",
    url: "/#/about",
  },
  {
    pageName: "Contact",
    url: "/#/contact",
  },
  {
    pageName: "Resume",
    url: "/#/my-resume",
  },
];
const handleClick = (url) => {
  window.location.href = url;
};
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="grey">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box sx={styles.titleBox}>
            <CodeIcon sx={styles.icon} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={styles.title}
            >
              Rémy Ghalayini
            </Typography>
          </Box>
          <Box sx={styles.menuBox}>
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
          <Box sx={styles.menuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => handleClick(page.url)}
                  >
                    {page.pageName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
