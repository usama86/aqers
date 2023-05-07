import Link from "next/link";
import Avatar from "./Avatar";
import { styles } from "./style";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "components/Base/BoxComponent";
import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "components/Base/ImageComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import { relative_width_size_generator } from "utils/helpers";
import ListComponent from "./ListComponent";
import { DRAWER_ITEMS_SIGN_IN, DRAWER_ITEMS_SIGN_OUT } from "./drawer.config";
import React, { useCallback, useEffect, Suspense, useState, lazy } from "react";
import TypographyComponent from "components/Base/TypographyComponent";

const Drawer = lazy(() => import("./ResponsiveSidebar/index"));

const direction = "left";

export default function Navbar({ path }) {
  const dispatch = useDispatch();
  const { user, isLoggedIn, initialLoad, authLoader } = useSelector(
    (state) => state.user
  );

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // if (path) {
    //   const url = redirectUrl(window?.location);
    //   setLocalStorage(LOCAL_STORAGE.REDIRECT_URL, url);
    //   dispatch(propertyResetReducer());
    // }
  }, [path]);

  const onScroll = useCallback((event) => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const [drawer, setDrawer] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer({ ...drawer, [anchor]: open });
  };

  const handleSignInButton = useCallback(() => {
    dispatch(changeAuthModalTypeAction({ type: AUTH_MODAL_TYPE["SIGN_IN"] }));
  }, []);

  const NAVBAR_ITEMS = [
    { label: "Home" },
    { label: "Buy" },
    { label: "Rent" },
    { label: "About" },
    { label: "Contact" },
    { label: "FAQs" },
  ];
  const resetDrawer = useCallback(() => {
    setDrawer({
      left: false,
    });
  }, [drawer]);
  return (
    <AppBar
      component="nav"
      sx={
        path == "/" && scrollY < 50
          ? styles.appBarHome
          : path == "/" && scrollY > 50
          ? styles.appBarHomeScroll
          : styles.appBar
      }
    >
      <Toolbar
        sx={{ ...styles.justifyBetween, ...styles.toolbarStyleOverride }}
      >
        <Box sx={styles.displayNone}>
          <Link href={path !== "/" ? "/" : ""} prefetch={false}>
            <Box sx={styles.aqersLogo}>
              <ImageComponent
                source="/Navbar/Aqers-Logo.png"
                width={relative_width_size_generator(69)}
                height="72px"
                alt="Aqers Logo"
              />
            </Box>
          </Link>
        </Box>

        <Box sx={styles.displayNoneMin}>
          <ImageComponent
            source={
              path == "/" && scrollY < 50
                ? "/common/hamburgerWhite.svg"
                : "/common/hamburgerBlack.svg"
            }
            width="25px"
            height="25px"
            alt="Hamburger"
            onClick={toggleDrawer(direction, true)}
          />
        </Box>

        <Link href={path !== "/" ? "/" : ""} prefetch={false}>
          <Box sx={styles.responsiveImage}>
            <ImageComponent
              source={
                path == "/" && scrollY < 50
                  ? "/Navbar/Aqers-Logo.png"
                  : "/Navbar/Aqers-Logo.png"
              }
              width="129px"
              height="30px"
              alt="Aqers Logo Responsive"
            />
          </Box>
        </Link>

        <Box sx={styles.flexGrowItems}>
          {NAVBAR_ITEMS?.map((item, index) => (
            <div
              style={{
                position: "relative",
                marginLeft: index !== 0 ? "56px" : "0px",
              }}
              key={index}
            >
              <ButtonComponent
                id={item.id}
                sx={styles.navbarItem}
                variant="text"
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
                ref={item.ref}
              >
                <TypographyComponent variant={"NavStyle"} component={"span"}>
                  {item.label}
                </TypographyComponent>
              </ButtonComponent>
            </div>
          ))}
          <Box sx={{ width: "185px", height: "48px", marginLeft: "240px" }}>
            <ButtonComponent color="primary" fullWidth>
              Login
            </ButtonComponent>
          </Box>
        </Box>

        <>
          <Box sx={styles.responsiveBoxSignin} />
          {!isLoggedIn && initialLoad && (
            <ButtonComponent
              variant="outlined"
              onClick={handleSignInButton}
              sx={
                path == "/"
                  ? styles.signinButton
                  : styles.signinButtonResponsive
              }
            >
              Sign In
            </ButtonComponent>
          )}
        </>
      </Toolbar>

      {drawer.left && (
        <Suspense fallback={""}>
          <Drawer
            drawer={drawer}
            closeDrawer={resetDrawer}
            toggleDrawer={toggleDrawer}
            direction={direction}
            isLoggedIn={isLoggedIn}
            listItem={isLoggedIn ? DRAWER_ITEMS_SIGN_IN : DRAWER_ITEMS_SIGN_OUT}
          />
        </Suspense>
      )}
    </AppBar>
  );
}
