import React from "react";
import MapComponent from "components/Advance/Map/index.js";
import useGetUserLocation from "hooks/useGetUserLocation";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import SearchOptions from "../AgentListing/SearchOptions";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
import { FEATURED_PROPERTIES, collectionCardData } from "utils/dummy_data";
import LinkComponent from "components/Base/LinkComponent";

const BuyPropertiesComponent = ({ purpose }) => {
  const { lat, lng } = useGetUserLocation();
  return (
    <div>
      <StackCompoent
        justifyContent="center"
        sx={{
          zIndex: 100000000,
          backgroundColor: "#F5F5F5",
          top: relative_height_size_generator(144),
          left: relative_width_size_generator(502),
          // width: `calc(99vw - ${relative_width_size_generator(53.5)})`,
          marginTop: relative_height_size_generator(44),
          marginBottom: relative_height_size_generator(100),
          // transform: `translateX(${relative_width_size_generator(53.5)})`,
          gap: relative_width_size_generator(16),
        }}
      >
        <SearchOptions />
      </StackCompoent>
      <div
        style={{
          display: "flex",
          gap: relative_width_size_generator(30),
          position: "relative",
        }}
      >
        {/* style={{ width: relative_width_size_generator(960) }} */}
        <div style={{ position: "sticky" }}>
          <MapComponent
            parentStyles={{
              position: "sticky",
              top: relative_height_size_generator(132),
            }}
            containerWidth={relative_width_size_generator(960)}
            containerHeight={relative_height_size_generator(1080)}
            lat={lat}
            lng={lng}
          />
        </div>
        <div>
          <TypographyComponent
            variant="AgentProfileHeading"
            sx={{
              textTransform: "capitalize",
              mb: relative_height_size_generator(30),
            }}
            component="h2"
          >
            Featured Properties for {purpose}
          </TypographyComponent>
          <StackCompoent
            sx={{ flexWrap: "wrap", gap: relative_width_size_generator(20) }}
          >
            {FEATURED_PROPERTIES.map((eachProperty) => (
              <LinkComponent
                key={eachProperty.id}
                href={{ pathname: "property-details" }}
              >
                <PropertyCard data={eachProperty} isWide />
              </LinkComponent>
            ))}
          </StackCompoent>
        </div>
      </div>
    </div>
  );
};

BuyPropertiesComponent.defaultProps = {
  purpose: "rent",
};

export default BuyPropertiesComponent;
