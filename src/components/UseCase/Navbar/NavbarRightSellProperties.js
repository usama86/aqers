import ImageComponent from "components/Base/ImageComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const NavbarRightSellProperties = () => {
  return (
    <div
      style={{
        background: "rgba(225, 233, 255, 1)",
        width: relative_width_size_generator(60),
        height: relative_width_size_generator(60),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
    >
      &nbsp;
    </div>
  );
};

export default NavbarRightSellProperties;
