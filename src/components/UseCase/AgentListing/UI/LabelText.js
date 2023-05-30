import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { getDesignSystem } from "theme/DesignToken";

const LabelText = ({ children }) => {
  return (
    <TypographyComponent
      sx={{ ...getDesignSystem(500, 14, 21), color: "#000000" }}
      component="label"
    >
      {children}
    </TypographyComponent>
  );
};

export default LabelText;
