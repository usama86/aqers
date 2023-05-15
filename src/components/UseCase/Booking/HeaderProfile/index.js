import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import Avatar from "@mui/material/Avatar";
import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";
import { styles } from "../style";

const HeaderBooking = () => {
  return (
    <BoxComponent sx={styles.headerStyle}>
      <BoxComponent sx={styles.avatarDiv}>
        <Avatar
          sx={styles.avatarStyle}
          alt="Aqers Avatar"
          //   src="/broken-image.jpg"
        >
          B
        </Avatar>
      </BoxComponent>

      <BoxComponent sx={styles.textDiv}>
        <TypographyComponent
          variant="SellSection"
          component="h1"
          sx={styles.headingsStyle}
        >
          David Doe
        </TypographyComponent>
        <TypographyComponent
          variant="SellSectionSubTitle"
          component="h2"
          sx={styles.subtitleStyle}
        >
          daviddoe@gmail.com
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default HeaderBooking;
