import PropertyDetailsCard from "components/Advance/PropertyDetailsCard";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

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
      >
        Mortgage Calculator
      </TypographyComponent>
    </PropertyDetailsCard>
  );
};

export default MortgageCalculator;
