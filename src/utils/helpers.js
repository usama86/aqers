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
      return 0;
    }

    return `${(+pixelValue * 100) / width}vw`;
  } catch (err) {
    return 0;
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

    return `${(+pixelValue * 100) / height}vh`;
  } catch (err) {
    return 0;
  }
};
