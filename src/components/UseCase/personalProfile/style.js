import {
  relative_width_size_generator,
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
};

export const styles = {
  pageStyle: {
    // background: "rgba(245, 245, 245, 1)",
    width: "100%",
    height: "100%",
    p: `${relative_height_size_generator(40)} ${relative_width_size_generator(
      243
    )} ${relative_height_size_generator(60)} ${relative_width_size_generator(
      243
    )}`,
  },
  paddingStyle: {
    height: "100%",
    borderRadius: "10px",
    background: "#FFFFFF",
    // m: `${relative_height_size_generator(40)} ${relative_width_size_generator(
    //   243
    // )} ${relative_height_size_generator(60)} ${relative_width_size_generator(
    //   243
    // )}`,
    p: `${relative_height_size_generator(40)} ${relative_width_size_generator(
      36
    )} ${relative_height_size_generator(40)} ${relative_width_size_generator(
      56.67
    )}`,
  },
  headerStyle: { ...flexStyle, alignItems: "center" },
  avatarDiv: {
    ...flexStyle,
    flexGrow: "0.07",
  },
  avatarStyle: {
    bgcolor: "primary.main",
    width: "150px",
    height: "150px",
    background: "grey",
  },
  textDiv: {
    ...flexStyle,
    flexDirection: "column",
    gap: "1.33px",
    flexGrow: "1",
  },
  headingsStyle: {
    fontSize: relative_width_font_size_generator(35),
    color: "#313131",
  },
  subtitleStyle: {
    fontSize: relative_width_font_size_generator(20),
    color: "#696969",
  },
  BoxParent: {
    ...flexStyle,
    gap: relative_width_size_generator(23.36),
  },
  innerBox: {
    background: "#E1E9FF",
    ...flexStyle,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerHeading: {
    fontSize: relative_width_font_size_generator(40),
    color: "primary.main",
  },
  innerContent: {
    fontSize: relative_width_font_size_generator(20),
    color: "primary.main",
  },
  dividerStyle: {
    pt: relative_height_size_generator(40),
    width: "90%",
    color: "#696969",
  },
};
