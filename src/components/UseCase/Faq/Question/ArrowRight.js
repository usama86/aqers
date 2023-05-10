import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const ArrowRight = ({ selected }) => {
  return (
    <svg
      style={{ marginRight: relative_width_size_generator(24) }}
      width={relative_width_size_generator(10)}
      height={relative_height_size_generator(18)}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9L1 17"
        stroke={selected ? "#92198C" : "#FFDAFD"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight.defaultProps = {
  selected: false,
};

export default ArrowRight;
