import CheckBoxComponent from "components/Base/CheckboxComponent";
import styled from "@emotion/styled";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignSystem } from "theme/DesignToken";

const CheckboxStyled = styled(CheckBoxComponent)(({ theme }) => ({
  width: relative_width_size_generator(240),

  // height: relative_height_size_generator(24),
  "& .MuiFormControlLabel-label": {
    ...getDesignSystem(400, 14, 16),
    color: "rgba(0, 47, 52, 0.64)",
  },
  "& .MuiCheckbox-root": {
    height: relative_width_size_generator(24),
    width: relative_width_size_generator(24),
    marginRight: relative_width_size_generator(8),
  },
}));

const CheckboxCustomized = ({ onChecking, ...props }) => {
  return (
    <CheckboxStyled
      onChange={(e) => {
        onChecking(e.target.checked);
      }}
      {...props}
    />
  );
};

export default CheckboxCustomized;
