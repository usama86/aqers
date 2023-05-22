import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import RowDatePicker from "components/Base/RowDatePicker";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignSystem } from "theme/DesignToken";
import { BOOKING_AVAILABLE_TIMINGS } from "config/static";
import TimeSlot from "./TimeSlot";
import GridComponent from "components/Base/GridComponent";
import ButtonComponent from "components/Base/ButtonComponent";

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

const Page0 = ({ choice, handleGoToPageOne, getDateSelection }) => {
  const startingDate = new Date();
  const [selectedAvailableSlot, setSelectedAvailableSlot] = useState(null);
  React.useEffect(() => {
    console.log({ selectedAvailableSlot });
  }, [selectedAvailableSlot]);
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
          mb: relative_height_size_generator(36),
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
        getSelection={(e) => {
          getDateSelection(e);
        }}
        startingDateWithoutZeroIndex={{
          date: startingDate.getDate(),
          month: startingDate.getMonth() + 1,
          year: startingDate.getFullYear(),
        }}
        selectedBGColor="rgba(42, 50, 73, 1)"
      />
      <TypographyComponent
        sx={{ mb: relative_height_size_generator(14) }}
        variant="BookTourModelText"
      >
        Available Timings
      </TypographyComponent>
      <GridComponent
        container
        columnSpacing={relative_width_size_generator(86.07)}
        rowSpacing={relative_height_size_generator(23)}
        sx={{ mb: relative_height_size_generator(50) }}
      >
        {BOOKING_AVAILABLE_TIMINGS.map((eachTimeSlot) => (
          <GridComponent xs={6} key={eachTimeSlot.id}>
            <TimeSlot
              setSelection={(e) => {
                setSelectedAvailableSlot(e);
              }}
              isSelected={eachTimeSlot.id === selectedAvailableSlot}
              {...eachTimeSlot}
            />
          </GridComponent>
        ))}
      </GridComponent>
      <ButtonComponent
        color="primary"
        disabled={selectedAvailableSlot === null}
        sx={{
          textTransform: "capitalize",
          alignSelf: "flex-start",
          borderRadius: relative_width_size_generator(14),
          width: relative_width_size_generator(185),
        }}
        onClick={() =>
          handleGoToPageOne(
            BOOKING_AVAILABLE_TIMINGS.find(
              (eachSlot) => eachSlot.id === selectedAvailableSlot
            )
          )
        }
      >
        Book Now
      </ButtonComponent>
    </StackCompoent>
  );
};

export default Page0;
