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
  mainBox: {
    ...flexStyle,
    flexDirection: "column",
    gap: "40px",
  },
  cardsBox: {
    ...flexStyle,
    gap: relative_width_size_generator(70),
  },
};
