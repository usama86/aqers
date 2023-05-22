import StackCompoent from "components/Base/StackCompoent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

const PersonalInfo = ({
  name,
  email,
  phoneNumber,
  updateName,
  updateEmail,
  updatePhoneNumber,
}) => {
  return (
    <StackCompoent
      direction="column"
      sx={{ gap: relative_height_size_generator(32) }}
    >
      <TextFieldComponent
        label="Name"
        value={name}
        onInputChange={(e) => {
          updateName(e);
        }}
      />
      <TextFieldComponent
        label="Email"
        onInputChange={(e) => {
          updateEmail(e);
        }}
        value={email}
      />
      <TextFieldComponent
        label="Phone Number"
        onInputChange={(e) => {
          updatePhoneNumber(e);
        }}
        value={phoneNumber}
      />
      <TypographyComponent
        sx={{ textTransform: "capitalize" }}
        variant="Label"
        component="label"
      >
        Are you a first time buyer?
      </TypographyComponent>
      <div>radio buttons</div>
    </StackCompoent>
  );
};

export default PersonalInfo;
