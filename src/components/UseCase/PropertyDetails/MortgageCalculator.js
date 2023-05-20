import PropertyDetailsCard from "components/Advance/PropertyDetailsCard";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import MortgageForm from "./MortgageForm";
import Statistics from "./Statistics";

const MortgageCalculator = () => {
  return (
    <PropertyDetailsCard
      otherStyles={{ mb: relative_height_size_generator(105) }}
      width="100%"
      padding={`${relative_height_size_generator(
        41
      )} ${relative_width_size_generator(57)}`}
    >
      <TypographyComponent
        variant="PropertyDetailsMortgageCalculatorTitle"
        component="h1"
        sx={{ mb: relative_height_size_generator(44) }}
      >
        Mortgage Calculator
      </TypographyComponent>
      <StackCompoent
        sx={{
          gap: relative_width_size_generator(104),
          "& > *": {
            flexGrow: 1,
          },
        }}
      >
        <MortgageForm />
        <Statistics />
      </StackCompoent>
    </PropertyDetailsCard>
  );
};

export default MortgageCalculator;
