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
    case "dashboard": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    case "agent-listing": {
      return {
        sectionsToShow: ["download-app", "footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "profile-listing": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "profile-listing-collection": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "agent-profile": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "my-booking": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "account-setting": {
      return {
        sectionsToShow: ["footer-url"],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "buy": {
      return {
        sectionsToShow: [],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "rent": {
      return {
        sectionsToShow: [],
        isBackgroundLightDownloadApp: true,
      };
    }
    case "property-details": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    case "select-property": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }

    case "selected-property": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    case "preview-property-details": {
      return {
        sectionsToShow: ["footer-url"],
      };
    }
    case "aqers-plus": {
      return {
        sectionsToShow: [],
      };
    }

    default: {
      return {};
    }
  }
};

const MainAppStyles = ({ isGrey, path, Component, componentVariant }) => {
  return (
    <main
      style={{
        backgroundColor: isGrey
          ? "rgba(245, 245, 245, 1)"
          : componentVariant === ""
          ? "#FFFFFF"
          : "rgba(245, 245, 245, 1)",
      }}
    >
      <>
        <Navbar
          isGrey={isGrey}
          componentVariant={componentVariant}
          path={path}
        />
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
    </main>
  );
};
export default MainAppStyles;
