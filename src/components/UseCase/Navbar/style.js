import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  appBar: (params) => {
    let appBarBackGroundColor = "";
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
};
