import Checkbox from "@mui/material/Checkbox";
import { CustomCheckBox } from "./style";
const CheckBoxComponent = ({ onChangeCheckbox, label, ...otherProps }) => {
  return (
    <CustomCheckBox
      onChange={onChangeCheckbox}
      control={<Checkbox />}
      label={label}
      {...otherProps}
    />
  );
};

export default CheckBoxComponent;
