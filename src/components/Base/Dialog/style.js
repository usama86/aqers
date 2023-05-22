import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  mainDiv: {
    display: "flex",
    p: "89px 140px 86px 140px",
    flexDirection: "column",
  },
  headerDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dialogText: {
    textAlign: "left",
    color: "#313131",
    fontSize: relative_width_size_generator(36),
    whiteSpace: "nowrap",
  },
  dialogSubtitle: {
    textAlign: "left",
    color: "#2A3249",
    fontSize: relative_width_size_generator(18),
    whiteSpace: "nowrap",
  },
  dialogAction: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "flex-end",
  },
  saveButton: {
    height: relative_height_size_generator(48),
    width: relative_width_size_generator(488),
    borderRadius: "14px",
    // padding: "10px 20px 10px 20px",
    color: "#FFFFFF",
    background: "#92198C",
    "&:hover": {
      backgroundColor: "#92198C",
    },
  },
  buttonBox: { display: "flex", alignSelf: "center" },
};
