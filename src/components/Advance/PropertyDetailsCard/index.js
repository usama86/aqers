import BoxComponent from "components/Base/BoxComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const PropertyDetailsCard = ({ padding, width, children, otherStyles }) => {
  return (
    <BoxComponent
      sx={{
        position: "relative",
        p: padding
          ? padding
          : `${relative_height_size_generator(
              17.88
            )} ${relative_width_size_generator(19)}`,
        border: "1px solid rgba(18, 18, 18, 0.2)",
        borderRadius: relative_width_size_generator(10),
        backgroundColor: "#FFFFFF",
        width: width ? width : "max-content",
        ...otherStyles,
        "@media (max-width: 500px)": {
          width: "350px",
        },
      }}
    >
      {children}
    </BoxComponent>
  );
};

export default PropertyDetailsCard;
