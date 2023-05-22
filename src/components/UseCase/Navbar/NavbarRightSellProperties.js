import ButtonComponent from "components/Base/ButtonComponent";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import DropDownComponent from "components/Base/DropDownComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import TypographyComponent from "components/Base/TypographyComponent";
import IconButtonComponent from "components/Base/IconButton";
import DropdownIcon from "components/Icons/DropdownIcon";
import { getDesignSystem } from "theme/DesignToken";

const NavbarRightSellProperties = () => {
  return (
    <>
      <StackCompoent alignItems="center">
        <ButtonComponent
          color="primary"
          height={relative_height_size_generator(32)}
          style={{
            width: relative_width_size_generator(110),
            textTransform: "capitalize",
            ...getDesignSystem(500, 16, 16),
            padding: 0,
            borderRadius: relative_width_size_generator(10),
            // borderRadius: "10px",
          }}
        >
          Add Post
        </ButtonComponent>
        <DropDownComponent transparent={true}>
          <TypographyComponent
            component="span"
            color="black"
            variant="NavBarRightBuyPropertiesName"
            sx={{
              width: relative_width_size_generator(100),
              textAlign: "left",
              ml: relative_width_size_generator(30),
            }}
          >
            David
          </TypographyComponent>
        </DropDownComponent>
        {/* <DropDownComponent transparent={true}> */}
        {/* <StackCompoent
            sx={{
              gap: relative_width_size_generator(15),
              // width: relative_width_size_generator(65),
            }}
            alignItems="center"
          > */}
        <ImageComponent
          width={relative_width_size_generator(40)}
          height={relative_width_size_generator(40)}
          source="/Navbar/sell_img.png"
        />
        <DropdownIcon />
        {/* </StackCompoent> */}
        {/* </DropDownComponent> */}
      </StackCompoent>
    </>
  );
};

export default NavbarRightSellProperties;
