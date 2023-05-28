import CustomizedButtonComponent from "components/Advance/CustomizedButton";
import RadioGroupComponent from "components/Base/RadioGroupComponent";
import SelectComponent from "components/Base/SelectComponent";
import StackCompoent from "components/Base/StackCompoent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { useRouter } from "next/router";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const AqersPlusModal = ({ setAqersPlusModal }) => {
  const router = useRouter();
  const [specializedIn, setSpecializedIn] = React.useState("buying");
  const [zipCode, setZipCode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [homeTypes, setHomeTypes] = React.useState("");
  // const [language, setLanguage] = React.useState("");
  const [amount1, setAmount1] = React.useState("");
  const [amount2, setAmount2] = React.useState("");
  return (
    <StackCompoent
      direction="column"
      sx={{
        p: `${relative_height_size_generator(
          60
        )} ${relative_width_size_generator(140)}`,
        gap: relative_height_size_generator(32),
      }}
    >
      <TypographyComponent
        component="h2"
        variant="BookTourLaterModelsTitle"
        sx={{ mb: relative_height_size_generator(12) }}
      >
        Become A Aqers+ Member
      </TypographyComponent>
      <TextFieldComponent
        value={zipCode}
        onInputChange={(e) => setZipCode(e)}
        label="Zip Code"
      />
      <TextFieldComponent
        value={city}
        onInputChange={(e) => setCity(e)}
        label="City"
      />
      <TextFieldComponent
        value={homeTypes}
        onInputChange={(e) => setHomeTypes(e)}
        label="Which home types you work with?"
      />
      <SelectComponent label="Select Language" />
      <RadioGroupComponent
        sx={{
          "& .MuiFormGroup-root": {
            "& > label": {
              flexGrow: 1,
            },
          },
        }}
        value={specializedIn}
        setValue={setSpecializedIn}
        options={[
          { value: "buying", label: "Buying" },
          { value: "selling", label: "Selling" },
          { value: "both", label: "Both" },
        ]}
        groupLabel={"Are you specialized in?"}
      />
      <StackCompoent
        sx={{
          "& > .MuiStack-root": {
            flexGrow: 1,
          },
          gap: relative_width_size_generator(16),
        }}
      >
        <TextFieldComponent
          value={amount1}
          onInputChange={(e) => setAmount1(e)}
          label="Amount"
        />
        <TextFieldComponent
          value={amount2}
          onInputChange={(e) => setAmount2(e)}
          label="Amount"
        />
      </StackCompoent>
      <CustomizedButtonComponent
        onClick={() => {
          setAqersPlusModal(false);
          router.push("/aqers-plus");
        }}
        fullWidth
      >
        Next
      </CustomizedButtonComponent>
    </StackCompoent>
  );
};

export default AqersPlusModal;
