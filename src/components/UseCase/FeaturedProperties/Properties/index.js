import PropertyCard from "components/Advance/PropertyCard";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { FEATURED_PROPERTIES } from "utils/dummy_data";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const Properties = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <TypographyComponent
        sx={{ mb: relative_height_size_generator(8) }}
        variant="FeaturedPropertiesHeading"
        component="h1"
      >
        Featured Properties
      </TypographyComponent>
      <StackCompoent
        sx={{ flexWrap: "wrap", gap: relative_width_size_generator(30) }}
      >
        {FEATURED_PROPERTIES.map((eachProperty) => (
          <PropertyCard key={eachProperty.id} />
        ))}
      </StackCompoent>
    </div>
  );
};

export default Properties;
