import MapComponent from "components/Advance/Map/index.js";
import PropertyDetailsCard from "components/Advance/PropertyDetailsCard";
import ButtonComponent from "components/Base/ButtonComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignSystem } from "theme/DesignToken";

const Location = () => {
  return (
    <PropertyDetailsCard
      otherStyles={{ mb: relative_height_size_generator(120) }}
      width="100%"
      padding={`${relative_height_size_generator(
        42
      )} ${relative_width_size_generator(57)}`}
    >
      <TypographyComponent
        variant="PropertyDetailsLocationTitle"
        component="h2"
        sx={{ mb: relative_height_size_generator(15.19) }}
      >
        Location
      </TypographyComponent>
      <MapComponent
        containerHeight={relative_height_size_generator(260)}
        containerWidth="100%"
        parentStyles={{ marginBottom: relative_height_size_generator(22.75) }}
      />
      <ButtonComponent
        sx={{
          ...getDesignSystem(600, 18, 18),
          textTransform: "capitalize",
          height: relative_height_size_generator(48),
          width: relative_width_size_generator(185),
          borderRadius: relative_width_size_generator(14),
        }}
        color="primary"
      >
        View Location
      </ButtonComponent>
    </PropertyDetailsCard>
  );
};

export default Location;
