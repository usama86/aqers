import AdvancedDropdown from "components/Advance/AdvancedDropdown";
import React from "react";
import styled from "@emotion/styled";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import { getDesignSystem } from "theme/DesignToken";
import LabelText from "./LabelText";

const StyledDropDown = styled(AdvancedDropdown)(({ theme }) => ({
  "& > .MuiButtonBase-root": {
    backgroundColor: "rgba(245, 245, 245, 1)",
    border: "1px solid rgba(190, 200, 212, 1)",
    borderRadius: "5px",
    "@media (max-width: 400px)": {
      "& .MuiPaper-root": {
        width: "150px",
      },
    },
  },
}));
const GreyVariantDropDown = ({ label, parentStyles, ...props }) => {
  return (
    <StackCompoent
      direction="column"
      sx={{ gap: relative_height_size_generator(4), ...parentStyles }}
    >
      <LabelText>{label ? label : null}</LabelText>
      <StyledDropDown selectVariant={true} {...props} />
    </StackCompoent>
  );
};

export default GreyVariantDropDown;
