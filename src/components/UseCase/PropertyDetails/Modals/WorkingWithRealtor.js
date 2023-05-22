import RadioGroupComponent from "components/Base/RadioGroupComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";
import { StyledRadioGroupComponent } from "./PersonalInfo";
import styled from "@emotion/styled";

const RadioGroupWithMarginBottom = styled(StyledRadioGroupComponent)(
  ({ theme }) => ({
    marginBottom: relative_height_size_generator(66),
  })
);

const WorkingWithRealtor = ({ workingWithAgent, updateWorkingWithAgent }) => {
  return (
    <StackCompoent
      direction="column"
      // sx={{ mt: relative_height_size_generator(32) }}
    >
      <TypographyComponent
        sx={{
          textTransform: "capitalize",
          mb: relative_height_size_generator(35),
        }}
        variant="Label"
        component="label"
      >
        Are you currently working with a real estate agent?
      </TypographyComponent>
      <RadioGroupWithMarginBottom
        value={workingWithAgent}
        setValue={updateWorkingWithAgent}
        options={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
      />
    </StackCompoent>
  );
};

export default WorkingWithRealtor;
