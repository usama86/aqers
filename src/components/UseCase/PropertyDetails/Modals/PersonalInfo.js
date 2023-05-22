import styled from "@emotion/styled";
import RadioGroupComponent from "components/Base/RadioGroupComponent";
import StackCompoent from "components/Base/StackCompoent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

export const StyledRadioGroupComponent = styled(RadioGroupComponent)(
  ({ theme }) => ({
    "& .MuiFormControlLabel-root": {
      flexGrow: 1,
    },
  })
);

const PersonalInfo = ({
  name,
  email,
  phoneNumber,
  firstTimeBuyer,
  updateName,
  updateEmail,
  updatePhoneNumber,
  updateFirstTimeBuyer,
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
      <StackCompoent
        direction="column"
        sx={{ mb: relative_height_size_generator(49.33) }}
      >
        <TypographyComponent
          sx={{ textTransform: "capitalize" }}
          variant="Label"
          component="label"
        >
          Are you a first time buyer?
        </TypographyComponent>
        <StyledRadioGroupComponent
          value={firstTimeBuyer}
          setValue={updateFirstTimeBuyer}
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
        />
      </StackCompoent>
    </StackCompoent>
  );
};

export default PersonalInfo;
