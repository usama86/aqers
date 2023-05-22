import { Typography } from "@mui/material";
import BoxComponent from "components/Base/BoxComponent";
import RadioButtons from "components/Base/RadioButton";
import TextFieldComponent from "components/Base/TextFieldComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

export const Form2 = ({ type, onChangeType }) => {
  const changeVal = (e) => {
    onChangeType(e, 0);
  };
  const changeVal1 = (e) => {
    onChangeType(e, 1);
  };
  return (
    <BoxComponent
      sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          "& > div": {
            flexGrow: 1,
          },
        }}
      >
        <TextFieldComponent label={"Property Type"} placeholder="Select here" />
        <TextFieldComponent label={"Address"} placeholder="Enter here" />
        <TextFieldComponent label={"Location"} placeholder="Enter here" />
      </BoxComponent>
      <BoxComponent
        sx={{
          display: "flex",
          gap: relative_width_font_size_generator(14),
          "& > div": {
            flexGrow: 1,
          },
        }}
      >
        <RadioButtons
          label="For Sell"
          sx={{ pl: "0px" }}
          selectedValue={type[0]}
          handleValueChange={changeVal}
        />
        <RadioButtons
          label="For Rent"
          selectedValue={type[1]}
          handleValueChange={changeVal1}
        />
      </BoxComponent>
    </BoxComponent>
  );
};
