export const relative_width_size_generator = (
  pixelValue,
  totalFrameWidthInPixels
) => {
  try {
    let width;
    if (!totalFrameWidthInPixels) {
      width = 1920;
    } else {
      width = totalFrameWidthInPixels;
    }
    if (+pixelValue === NaN) {
      return { error: true, msg: "first param must only be number" };
    }

    return { value: `${(+pixelValue * 100) / width}vw`, error: false };
  } catch (err) {
    return { error: true, msg: err.message };
  }
};
export const relative_height_size_generator = (
  pixelValue,
  totalFrameHeightInPixels
) => {
  try {
    let height;
    if (!totalFrameHeightInPixels) {
      height = 1920;
    } else {
      height = totalFrameHeightInPixels;
    }
    if (+pixelValue === NaN) {
      return { error: true, msg: "first param must only be number" };
    }

    return { value: `${(+pixelValue * 100) / height}vh`, error: false };
  } catch (err) {
    return { error: true, msg: err.message };
  }
};
