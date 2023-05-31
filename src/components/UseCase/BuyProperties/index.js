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
import BoxComponent from "components/Base/BoxComponent";

const BuyPropertiesComponent = ({ purpose }) => {
  const { lat, lng } = useGetUserLocation();
  return (
    <BoxComponent>
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
          flexWrap: "wrap",
        }}
      >
        <SearchOptions />
      </StackCompoent>
      <BoxComponent
        sx={{
          display: "flex",
          gap: relative_width_size_generator(30),
          position: "relative",
          "@media (max-width: 1000px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <BoxComponent style={{ position: "sticky" }}>
          <MapComponent
            parentStyles={{
              position: "sticky",
              top: relative_height_size_generator(132),
              "@media (max-width: 1600px)": {
                width: "800px",
                height: "800px",
              },
              "@media (max-width: 1350px)": {
                width: "500px",
                height: "500px",
              },
              "@media (max-width: 500px)": {
                width: "350px",
                height: "350px",
                margin: "0 auto",
              },
            }}
            containerWidth={relative_width_size_generator(960)}
            containerHeight={relative_height_size_generator(1080)}
            lat={lat}
            lng={lng}
          />
        </BoxComponent>
        <BoxComponent>
          <TypographyComponent
            variant="AgentProfileHeading"
            sx={{
              textTransform: "capitalize",
              mb: relative_height_size_generator(30),
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}
            component="h2"
          >
            Featured Properties for {purpose}
          </TypographyComponent>
          <StackCompoent
            sx={{
              flexWrap: "wrap",
              gap: relative_width_size_generator(20),
              "@media (max-width: 900px)": {
                flexDirection: "column !important",
                margin: "0 auto",
              },
            }}
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
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

BuyPropertiesComponent.defaultProps = {
  purpose: "rent",
};

export default BuyPropertiesComponent;
