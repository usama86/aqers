import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
import CollectionCard from "components/Advance/CollectionCard";
import { styles } from "./style";
import { cardData, collectionCardData } from "utils/dummy_data";

const Booking = ({ heading, heading2 }) => {
  return (
    <BoxComponent sx={styles.pageStyle}>
      <BoxComponent sx={styles.mainBox}>
        <TypographyComponent
          sx={{ fontSize: "32px" }}
          variant="profileListing"
          component="h1"
        >
          {heading}
        </TypographyComponent>
        <BoxComponent sx={styles.cardsBox}>
          {cardData.map((data) => (
            <React.Fragment key={data.id}>
              <PropertyCard data={data} type="drop" />
            </React.Fragment>
          ))}
        </BoxComponent>
        <BoxComponent
          sx={{
            pt: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <TypographyComponent
            sx={{ fontSize: "32px" }}
            variant="profileListing"
            component="h2"
          >
            {heading2}
          </TypographyComponent>
          <BoxComponent
            sx={{ display: "flex", gap: "114px", flexWrap: "wrap" }}
          >
            {collectionCardData.map((data) => (
              <React.Fragment key={data.id}>
                <CollectionCard data={data} />
              </React.Fragment>
            ))}
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default Booking;
