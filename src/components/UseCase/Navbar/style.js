import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  appBar: {
    background: "#FFFFFF",
    minHeight: relative_height_size_generator(132),
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    zIndex: 100000000,
  },
  aqersLogo: {
    display: { xs: "none", md: "flex" },
    mr: 1,
  },
};
