import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/UseCase/Navbar";
import Footer from "components/UseCase/Footer";
import { relative_height_size_generator } from "utils/helpers";
import useRouterProps from "hooks/useRouterProps";

const configureFooterProps = (location) => {
  switch (location) {
    case "faq": {
      return {
        sectionsToShow: ["download-app", "footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "terms-and-conditions": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "privacy-policy": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    case "contact": {
      return {
        sectionsToShow: ["download-app", "footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "personal-profile": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    default: {
      return {};
    }
  }
};

const MainAppStyles = ({ path, Component }) => {
  return (
    <>
      <Navbar path={path} />
      <CssBaseline />
      {/* <SpacerComponent
        sx={
          router.asPath == "/"
            ? styles.spacerStyleNavHome
            : styles.spacerStyleNav
        }
      /> */}
      {Component}
      <Footer {...configureFooterProps(path)} />
    </>
  );
};
export default MainAppStyles;
