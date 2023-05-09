import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import {
  relative_width_size_generator,
  relative_height_size_generator,
} from "utils/helpers";

export default function FooterUrls() {
  return (
    <Box
      sx={{
        height: "465.44px",
        display: "flex",
        backgroundColor: "primary.main",
        p: `76px ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: "156.52px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        <ImageComponent
          source="/Navbar/Aqers-Logo.png"
          width={relative_width_size_generator(69)}
          height={relative_height_size_generator(72)}
          alt="Aqers Logo"
        />
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: "18px" }}
        >
          You get alot from us: Manage your application, your portfolio and
          digitize many of the processes that go with it.
        </TypographyComponent>
      </Box>
    </Box>
  );
}
