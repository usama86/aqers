import styled from "@emotion/styled";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: relative_width_size_generator(620),
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <Header variant="ContactHeading2" component="h3">
            Location
          </Header>
          <TypographyComponent variant="ContactBody">
            ABC City, XYZ
          </TypographyComponent>
          <TypographyComponent variant="ContactBody">
            USA, 10001
          </TypographyComponent>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Header variant="ContactHeading2" component="h3">
            Contact Us
          </Header>
          <TypographyComponent variant="ContactBody">
            020 7993 2905
          </TypographyComponent>
          <TypographyComponent variant="ContactBody">
            info@aqers.com
          </TypographyComponent>
        </div>
      </div>
      <ImageComponent
        width={"100%"}
        objectFit={"fill"}
        height={relative_height_size_generator(467)}
        source="/contact/Map.png"
      />
    </div>
  );
};

export default Map;
