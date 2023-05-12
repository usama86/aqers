import IconButtonComponent from "components/Base/IconButton";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import DropDownComponent from "components/Base/DropDownComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const NavbarRightBuyProperties = () => {
  return (
    <StackCompoent
      alignItems="center"
      sx={{ gap: relative_width_size_generator(16) }}
    >
      <div
        style={{
          background: "rgba(225, 233, 255, 1)",
          width: relative_width_size_generator(60),
          height: relative_width_size_generator(60),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "#000000",
        }}
      >
        <DropDownComponent iconBtn={true}>
          <ImageComponent
            width={relative_width_size_generator(18.91)}
            height={relative_height_size_generator(20)}
            source="/Navbar/notification_icon.png"
          />
        </DropDownComponent>
      </div>
      <IconButtonComponent
        sx={{
          width: relative_width_size_generator(60),
          height: relative_width_size_generator(60),
          padding: 0,
        }}
      >
        <ImageComponent
          wkdth="100%"
          height="100%"
          source="/Navbar/buy_img.png"
        />
      </IconButtonComponent>
      <DropDownComponent transparent={true}>
        <TypographyComponent
          component="span"
          color="black"
          variant="NavBarRightBuyPropertiesName"
          sx={{ width: relative_width_size_generator(100), textAlign: "left" }}
        >
          Julian Wan
        </TypographyComponent>
      </DropDownComponent>
    </StackCompoent>
  );
};

export default NavbarRightBuyProperties;
