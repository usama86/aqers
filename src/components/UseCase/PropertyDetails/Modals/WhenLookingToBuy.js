import ButtonComponent from "components/Base/ButtonComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { WHEN_LOOKING_TO_BUY_TIMEFRAMES } from "config/static";

const WhenLookingToBuy = ({ selectedValue, updateSelection }) => {
  // WHEN_LOOKING_TO_BUY_TIMEFRAMES;
  return (
    <StackCompoent
      direction="column"
      sx={{ mt: relative_height_size_generator(32) }}
    >
      <TypographyComponent
        sx={{
          textTransform: "capitalize",
          mb: relative_height_size_generator(24),
        }}
        variant="Label"
        component="label"
      >
        When are you looking to buy?
      </TypographyComponent>
      <StackCompoent
        direction="column"
        sx={{
          gap: relative_height_size_generator(16),
          mb: relative_height_size_generator(40),
        }}
      >
        {WHEN_LOOKING_TO_BUY_TIMEFRAMES.map((eachTimeframe) => (
          <ButtonComponent
            onClick={() => updateSelection(eachTimeframe.value)}
            key={eachTimeframe.value}
            // onClick={() => nextPageHandler()}
            color="primary"
            sx={{
              borderRadius: relative_width_size_generator(14),
              textTransform: "capitalize",
              backgroundColor:
                selectedValue === eachTimeframe.value
                  ? "primary.main"
                  : "#F5F5F5",
              color:
                selectedValue === eachTimeframe.value
                  ? "#ffffff"
                  : "primary.main",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "primary.light",
              },
            }}
          >
            {eachTimeframe.label}
          </ButtonComponent>
        ))}
      </StackCompoent>
    </StackCompoent>
  );
};

export default WhenLookingToBuy;
