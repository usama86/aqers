import BoxComponent from "components/Base/BoxComponent";
import RadioButtons from "components/Base/RadioButton";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

export const Form1 = () => {
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
      <RadioButtons label="New Property" sx={{ pl: "0px" }} />
      <RadioButtons label="New Collection" />
    </BoxComponent>
  );
};
