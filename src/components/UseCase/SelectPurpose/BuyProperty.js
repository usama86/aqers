import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
// import Buy from "./icons/Buy.icon";

const BuyProperty = () => {
  return (
    <>
      {/* <Buy /> */}
      <ImageComponent
        height={relative_height_size_generator(80)}
        width={relative_width_size_generator(80)}
        position="relative"
        source="/select-purpose/buy.png"
      />
      <TypographyComponent
        sx={{ mt: relative_height_size_generator(29.5) }}
        variant="SelectPurposeText"
        component="span"
      >
        I want to buy property
      </TypographyComponent>
    </>
  );
};

export default BuyProperty;
