const {
  relative_width_size_generator,
  relative_height_size_generator,
} = require("utils/helpers");

const styles = {
  priceSlider: {
    marginTop: relative_height_size_generator(23),
    marginBottom: relative_height_size_generator(15),
    // "& .css-1xkjed4-MuiSlider-root": {
    color: "#6d6d6d",
    "&.css-1r5io0s-MuiSlider-thumb:hover, .css-1r5io0s-MuiSlider-thumb.Mui-focusVisible":
      {
        boxShadow: "none",
      },
    // border: "1px solid #6d6d6d",
    // },
    "& .MuiSlider-track": {
      backgroundColor: "rgba(0, 47, 52, 0.99)",
      border: "1px solid rgba(0, 47, 52, 0.99)",
    },
    "& .css-1r5io0s-MuiSlider-thumb": {
      width: relative_width_size_generator(24),
      height: relative_width_size_generator(24),
      backgroundColor: "white",
      border: "1px solid #000000",
    },
  },
};

export default styles;
