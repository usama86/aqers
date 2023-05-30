import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const { default: BoxComponent } = require("components/Base/BoxComponent");
const {
  default: RadioGroupComponent,
} = require("components/Base/RadioGroupComponent");
const { useState } = require("react");

const OPTIONS = [
  {
    value: 0,
    label: "For Sale",
  },
  {
    value: 1,
    label: "For Sale",
  },
  {
    value: 2,
    label: "For Sale",
  },
];

const ForSell = ({ handleClose }) => {
  const [value, setValue] = useState(OPTIONS[0].value);

  return (
    <BoxComponent
      sx={{
        p: `${relative_height_size_generator(
          16
        )} ${relative_width_size_generator(16)}`,
        width: "max-content",
      }}
    >
      <RadioGroupComponent
        setValue={(val) => {
          setValue(val);
        }}
        value={value}
        options={OPTIONS}
        direction="column"
      />
    </BoxComponent>
  );
};

export default ForSell;
