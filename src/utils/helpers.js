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
      height = 1080;
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

export const relative_width_font_size_generator = (
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

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function removeCommas(str) {
  return str.replace(/,/g, "");
}

export function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

export function convertTo12HourFormat(time24) {
  // Split the time string into hours and minutes
  const [hours, minutes] = time24.split(":");

  // Parse the hours and minutes as integers
  const parsedHours = parseInt(hours, 10);
  const parsedMinutes = parseInt(minutes, 10);

  // Determine if it's AM or PM
  const period = parsedHours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  let convertedHours = parsedHours % 12;
  convertedHours = convertedHours === 0 ? 12 : convertedHours;

  // Construct the 12-hour time string
  const time12 = `${convertedHours}:${minutes} ${period}`;

  return time12;
}
