import BoxComponent from "components/Base/BoxComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignTokens } from "theme/DesignToken";
import { convertTo12HourFormat } from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";

const TimeSlot = ({
  isSelected,
  startTime,
  endTime,
  selectedBackgroundColor,
  setSelection,
  id,
}) => {
  return (
    <ButtonComponent
      onClick={() => setSelection(id)}
      sx={{
        p: `${relative_height_size_generator(17.5)} 0`,
        width: relative_width_size_generator(251.4),
        // width: "100%",
        textAlign: "center",
        backgroundColor: isSelected ? selectedBackgroundColor : "transparent",
        color: isSelected ? "#ffffff" : "#000000",
        borderRadius: relative_width_size_generator(10),
        cursor: "pointer",
        ...getDesignTokens(600, 16, 24),
        textTransform: "capitalize",
        "&:hover": {
          // color: "#ffffff",
          backgroundColor: isSelected ? "#000000" : "#ededed",
        },
      }}
    >
      {convertTo12HourFormat(startTime)} - {convertTo12HourFormat(endTime)}
    </ButtonComponent>
  );
};

TimeSlot.defaultProps = {
  isSelected: false,
  selectedBackgroundColor: "rgba(42, 50, 73, 1)",
  startTime: "09:00",
  endTime: "11:00",
  setSelection: (e) => {
    return;
  },
};

export default TimeSlot;
