import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { getDesignSystem } from "theme/DesignToken";

const DropDownHeading = ({ styleOverrides, children, ...otherProps }) => {
  return (
    <TypographyComponent
      component="label"
      {...otherProps}
      sx={{
        ...getDesignSystem(500, 14, 21),
        color: "rgba(97, 101, 105, 1)",
        ...styleOverrides,
      }}
    >
      {children}
    </TypographyComponent>
  );
};

export default DropDownHeading;
