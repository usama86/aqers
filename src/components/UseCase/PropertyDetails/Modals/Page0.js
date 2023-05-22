import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import RowDatePicker from "components/Base/RowDatePicker";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignSystem } from "theme/DesignToken";

const StyledDateRowPicker = styled(RowDatePicker)(({ theme }) => ({
  marginBottom: relative_height_size_generator(86),
  "& .single-date-row-date-picker": {
    width: relative_width_size_generator(54),
  },

  "& *": {
    ...getDesignSystem(500, 18, 27),
    fontFamily: "poppins",
  },
}));

const Page0 = ({ choice }) => {
  const startingDate = new Date();

  return (
    <StackCompoent
      sx={{
        p: `${relative_height_size_generator(
          60
        )} ${relative_width_size_generator(80)}`,
      }}
      direction="column"
    >
      <TypographyComponent
        sx={{
          textTransform: "capitalize",
          color: "rgba(17, 16, 41, 1)",
          textAlign: "center",
        }}
        variant="BookTourModelTitle"
        component="h1"
      >
        Book {choice.split("-").join(" ")} Tour
      </TypographyComponent>
      <TypographyComponent variant="BookTourModelText">
        Select Date
      </TypographyComponent>
      <StyledDateRowPicker
        startingDateWithoutZeroIndex={{
          date: startingDate.getDate(),
          month: startingDate.getMonth() + 1,
          year: startingDate.getFullYear(),
        }}
        selectedBGColor="rgba(42, 50, 73, 1)"
      />
      <TypographyComponent variant="BookTourModelText">
        Available Timings
      </TypographyComponent>
    </StackCompoent>
  );
};

export default Page0;
