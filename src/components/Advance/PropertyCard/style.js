import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = ({ isWide }) => ({
  cardDiv: {
    // height: isWide ? "auto" : relative_height_size_generator(409),
    width: isWide
      ? relative_width_size_generator(440)
      : relative_width_size_generator(305),
    borderRadius: "10px",
    // maxWidth: 345,
    boxShadow: "0px 0px 12px 1px #0000001F",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 0px 12px 16px #0000001F",
    },
  },
  cardContent: {
    display: "flex",
    p: isWide
      ? `${relative_height_size_generator(30)} ${relative_width_size_generator(
          20
        )}`
      : `${relative_height_size_generator(
          16.53
        )} ${relative_width_size_generator(
          27.41
        )} ${relative_height_size_generator(
          16.53
        )} ${relative_width_size_generator(12)}`,
    flexDirection: "column",
    gap: relative_height_size_generator(13),
    paddingBottom: "0 !important",
  },
  iconBox: {
    display: "flex",
    gap: relative_width_size_generator(16),
    alignItems: "center",
  },
  iconTextBox: {
    display: "flex",
    gap: relative_width_size_generator(6.42),
    alignItems: "center",
  },
  cityDiv: {
    cursor: "pointer",
    display: "flex",
    gap: relative_width_size_generator(4),
    alignItems: "center",
  },
  buttonStyle: {
    height: relative_height_size_generator(37.18),
    width: relative_width_size_generator(170),
    borderRadius: relative_width_size_generator(10),
    // p: `${relative_height_size_generator(6)} ${relative_width_size_generator(
    //   30
    // )}`,
    p: 0,
    border: `${relative_width_size_generator(1)} solid #92198C`,
    color: "#92198C",
    background: "transparent",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: relative_width_size_generator(20),
    fontWeight: 700,
    letterSpacing: relative_width_size_generator(0.2),
    lineHeight: relative_height_size_generator(24.2),
    "&:hover": {
      background: "transparent",
    },
  },
  lastSection: {
    display: "flex",
    gap: relative_width_size_generator(15),
    alignItems: "center",
    mb: relative_height_size_generator(16.53),
  },
  viewSection: {
    display: "flex",
    gap: relative_width_size_generator(6),
    alignItems: "center",
    ml: isWide ? relative_width_size_generator(17) : "0",
  },
});
