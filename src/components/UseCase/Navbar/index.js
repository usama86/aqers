import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "components/Base/TypographyComponent";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonComponent from "components/Base/ButtonComponent";
import MenuItem from "@mui/material/MenuItem";
import ImageComponent from "components/Base/ImageComponent";
import LinkComponent from "components/Base/LinkComponent";
import { relative_width_size_generator } from "utils/helpers";
import { styles } from "./style";

const pages = ["Home", "Buy", "Rent", "About", "Contact", "FAQs"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          {/* logo */}
          <Box sx={styles.aqersLogo}>
            <LinkComponent href={"/"} prefetch={false} linkStyle={{}}>
              <ImageComponent
                source="/Navbar/Aqers-Logo.png"
                width={relative_width_size_generator(69)}
                height="72px"
                alt="Aqers Logo"
              />
            </LinkComponent>
          </Box>

          {/* Menu for resposnive */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo on responsive in middle */}
          <LinkComponent href={"/"} prefetch={false}>
            <Box
              sx={{
                ...styles.aqersLogo,
                ...{ display: { xs: "flex", md: "none" }, mr: 1 },
              }}
            >
              <ImageComponent
                source="/Navbar/Aqers-Logo.png"
                width={relative_width_size_generator(69)}
                height="72px"
                alt="Aqers Logo"
              />
            </Box>
          </LinkComponent>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          {/* Menu  */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#616569", display: "block" }}
              >
                <Typography variant="NavStyle" component="span">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Login */}
          <Box sx={{ flexGrow: 0, width: "185px", height: "48px" }}>
            <ButtonComponent color="primary" fullWidth>
              Login
            </ButtonComponent>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
