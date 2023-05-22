import PropertyCard from "components/Advance/PropertyCard";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const RelatedFeaturedProperties = () => {
  return (
    <StackCompoent
      direction="column"
      sx={{ gap: relative_height_size_generator(40) }}
    >
      <TypographyComponent variant="PropertyDetailRelatedFeaturedProperties">
        Related Featured Properties
      </TypographyComponent>
      <StackCompoent
        sx={{ gap: relative_width_size_generator(30), flexWrap: "wrap" }}
      >
        {[1, 2, 3, 4].map((eachItem) => (
          <PropertyCard key={eachItem} />
        ))}
      </StackCompoent>
    </StackCompoent>
  );
};

export default RelatedFeaturedProperties;
