import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

const GroupHeading = ({ label, ...props }) => {
  return (
    <TypographyComponent
      sx={{
        pt: relative_height_size_generator(18),
        pb: relative_height_size_generator(18.92),
        textTransform: "uppercase",
      }}
      component="h5"
      variant="FilterHeading"
      {...props}
    >
      {label}
    </TypographyComponent>
  );
};

export default GroupHeading;
