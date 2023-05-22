import BoxComponent from "components/Base/BoxComponent";
import RadioButtons from "components/Base/RadioButton";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

export const Form1 = ({ type, onChangeType }) => {
  const changeVal = (e) => {
    onChangeType(e, 0);
  };
  const changeVal1 = (e) => {
    onChangeType(e, 1);
  };
  return (
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
        label="New Property"
        sx={{ pl: "0px" }}
        selectedValue={type[0]}
        handleValueChange={changeVal}
      />
      <RadioButtons
        label="New Collection"
        selectedValue={type[1]}
        handleValueChange={changeVal1}
      />
    </BoxComponent>
  );
};
