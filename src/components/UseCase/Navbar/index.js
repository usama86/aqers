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

  // const NAVBAR_ITEMS = NavbarConfig();
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
                  ? "/home-page-images/GraanaLogoResponsive.svg"
                  : "/home-page-images/GraanaLogo.svg"
              }
              width="129px"
              height="30px"
              alt="Graana Logo Responsive"
            />
          </Box>
        </Link>

        <Box sx={styles.flexGrowItems}>
          {[]?.map((item, index) => (
            <div style={{ position: "relative" }} key={index}>
              <ButtonComponent
                id={item.id}
                sx={styles.navbarItem}
                variant="text"
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
                ref={item.ref}
              >
                {item.id == "investButton" ? (
                  <a
                    style={styles.navbarItemInvest}
                    href={`${config.BASE_URL}/projects/list`}
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </ButtonComponent>

              {item.id !== "investButton" ? (
                <div
                  style={{
                    ...styles.popOverContainer,
                    display: !item.open && "none",
                  }}
                  onMouseEnter={item.onMouseEnter}
                  onMouseLeave={item.onMouseLeave}
                >
                  <div
                    style={{
                      ...styles.popover,
                      display: !item.open && "none",
                    }}
                    onMouseEnter={item.onMouseEnter}
                    onMouseLeave={item.onMouseLeave}
                  >
                    <ListComponent
                      key={index}
                      sx={styles.listMenu}
                      onMouseEnter={() => {
                        item.ref.current.style.backgroundColor = "#f2f2f2";
                      }}
                      onMouseLeave={() =>
                        (item.ref.current.style.backgroundColor = "transparent")
                      }
                      listArray={item.listArray}
                      listTypes={item.types}
                      purpose={item.purpose === "buy" ? "sale" : item.purpose}
                      disableTypography
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </Box>

        <>
          {path !== "/wanted" && (
            <Box sx={styles.displayNoneResponsive}>
              <Link
                href={`/wanted`}
                prefetch={false}
                style={styles.wantedStyle}
              >
                <ButtonComponent
                  variant="outlined"
                  color="secondary"
                  sx={styles.wantedStyle}
                >
                  Wanted
                </ButtonComponent>
              </Link>
            </Box>
          )}
          {authLoader ? (
            <>
              <Box
                sx={{
                  paddingRight: "80px",
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              >
                {/* <AvatarSkeleton /> */}
              </Box>
              <Box sx={styles.responsiveBoxSignin} />
            </>
          ) : (
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
              {isLoggedIn && initialLoad && <Avatar />}
            </>
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
