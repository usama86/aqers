import ImageComponent from "components/Base/ImageComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const SellProperty = () => {
  return (
    <>
      <ImageComponent
        height={relative_height_size_generator(80)}
        width={relative_width_size_generator(80)}
        position="relative"
        source="/select-purpose/buy.png"
      />
      <div>SellProperty</div>
    </>
  );
};

export default SellProperty;
