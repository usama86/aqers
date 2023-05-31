import styled from "@emotion/styled";
import MapComponent from "components/Advance/Map/index.js";
import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const Header = styled(TypographyComponent)(({ theme }) => ({
  marginBottom: relative_height_size_generator(18),
}));

const Map = () => {
  return (
    <BoxComponent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: relative_width_size_generator(620),
        "@media (max-width:700px)": {
          width: "auto",
        },
      }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          "@media (max-width: 700px)": {
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "2rem",
          },
        }}
      >
        <BoxComponent sx={{ flexGrow: 1, width: "300px" }}>
          <Header variant="ContactHeading2" component="h3">
            Location
          </Header>
          <TypographyComponent variant="ContactBody">
            ABC City, XYZ
          </TypographyComponent>
          <TypographyComponent variant="ContactBody">
            USA, 10001
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent sx={{ flexGrow: 1, width: "300px" }}>
          <Header variant="ContactHeading2" component="h3">
            Contact Us
          </Header>
          <TypographyComponent variant="ContactBody">
            020 7993 2905
          </TypographyComponent>
          <TypographyComponent variant="ContactBody">
            info@aqers.com
          </TypographyComponent>
        </BoxComponent>
      </BoxComponent>

      <MapComponent
        parentStyles={{
          "@media (max-width:600px)": {
            width: "300px",
            height: "300px",
            margin: "0 auto",
          },
        }}
        containerWidth={"100%"}
        containerHeight={relative_height_size_generator(467)}
      />
    </BoxComponent>
  );
};

export default Map;
