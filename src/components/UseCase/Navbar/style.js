import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  appBar: (params) => {
    let appBarBackGroundColor = "";
    if (params.isGrey) {
      appBarBackGroundColor = "#F5F5F5";
    } else {
      switch (params.componentVariant) {
        case "buyProperties": {
          appBarBackGroundColor = "#F5F5F5";
          break;
        }
        case "sellProperties": {
          appBarBackGroundColor = "#F5F5F5";
          break;
        }
        default: {
          appBarBackGroundColor = "#FFFFFF";
          break;
        }
      }
    }

    return {
      backgroundColor: appBarBackGroundColor,
      minHeight: relative_height_size_generator(132),
      border: "none",
      boxShadow: "none",
      display: "flex",
      justifyContent: "center",
      zIndex: 1000,
    };
  },
  aqersLogo: {
    display: { xs: "none", md: "flex" },
    mr: 1,
  },
  toolbarStyle: {
    maxWidth: "1980px",
    padding: {
      xs: `0 ${relative_width_size_generator(30)}`,
      // md: `0 ${relative_width_size_generator(243)}`,
    },
    "@media (min-width: 1800px)": {
      p: `0 ${relative_width_size_generator(243)}`,
    },
    "@media (min-width: 1500px)": {
      p: `0 ${relative_width_size_generator(162)}`,
    },
    "@media (min-width: 1000px)": {
      p: `0 ${relative_width_size_generator(108)}`,
    },
  },
};
