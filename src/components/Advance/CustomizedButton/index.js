import styled from "@emotion/styled";
import ButtonComponent from "components/Base/ButtonComponent";
import React from "react";
import { getDesignSystem } from "theme/DesignToken";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const StyledBtn = styled(ButtonComponent)(
  ({
    theme,
    fullWidth,
    fontWeight,
    fontSize,
    lineHeight,
    width,
    height,
    borderRadius,
  }) => ({
    ...getDesignSystem(fontWeight, fontSize, lineHeight),
    textTransform: "capitalize",
    height: relative_height_size_generator(height),
    width: fullWidth ? "100%" : relative_width_size_generator(width),
    borderRadius: relative_width_size_generator(borderRadius),
  })
);

const CustomizedButtonComponent = (props) => {
  return (
    <StyledBtn {...props} color="primary">
      {props.children}
    </StyledBtn>
  );
};

CustomizedButtonComponent.defaultProps = {
  fontWeight: 600,
  fontSize: 18,
  lineHeight: 18,
  height: 48,
  width: 185,
  borderRadius: 14,
  fullWidth: false,
};

export default CustomizedButtonComponent;
