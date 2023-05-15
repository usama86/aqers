import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
import CollectionCard from "components/Advance/CollectionCard";
import { styles } from "./style";

const PersonalProfiles = () => {
  return (
    <BoxComponent sx={styles.pageStyle}>
      <BoxComponent sx={styles.mainBox}>
        <TypographyComponent
          sx={{ fontSize: "32px" }}
          variant="profileListing"
          component="h1"
        >
          Listed Properties
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
            Listed Properties Collections
          </TypographyComponent>
          <BoxComponent sx={{ display: "flex", gap: "114px" }}>
            <CollectionCard />
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default PersonalProfiles;

const cardData = [
  {
    id: 1,
    featured: true,
    title: " 92 ALLIUM PLACE, ORLA...",
    bed: "4",
    bath: "4",
    dimension: "2.096",
    unit: "ft",
    location: "New York, NY",
    view: "5690",
  },
  {
    id: 2,
    featured: true,
    title: "1000 BROADWAY, NEW YORK, NY",
    bed: "3",
    bath: "2",
    dimension: "1.500",
    unit: "ft",
    location: "New York, NY",
    view: "4567",
  },
  {
    id: 3,
    featured: false,
    title: "2000 MADISON AVENUE, NEW YORK, NY",
    bed: "5",
    bath: "4",
    dimension: "3.000",
    unit: "ft",
    location: "New York, NY",
    view: "3456",
  },
  {
    id: 4,
    featured: true,
    title: "3000 PARK AVENUE, NEW YORK, NY",
    bed: "6",
    bath: "5",
    dimension: "4.500",
    unit: "ft",
    location: "New York, NY",
    view: "2345",
  },
  {
    id: 5,
    featured: false,
    title: "4000 FIFTH AVENUE, NEW YORK, NY",
    bed: "7",
    bath: "6",
    dimension: "6.000",
    unit: "ft",
    location: "New York, NY",
    view: "1234",
  },
  {
    id: 6,
    featured: true,
    title: "5000 CENTRAL PARK WEST, NEW YORK, NY",
    bed: "8",
    bath: "7",
    dimension: "7.500",
    unit: "ft",
    location: "New York, NY",
    view: "9876",
  },
  {
    id: 7,
    featured: false,
    title: "6000 UPPER EAST SIDE, NEW YORK, NY",
    bed: "9",
    bath: "8",
    dimension: "9.000",
    unit: "ft",
    location: "New York, NY",
    view: "8765",
  },
  {
    id: 8,
    featured: true,
    title: "7000 UPPER WEST SIDE, NEW YORK, NY",
    bed: "10",
    bath: "9",
    dimension: "10.500",
    unit: "ft",
    location: "New York, NY",
    view: "7654",
  },
  {
    id: 9,
    featured: false,
    title: "8000 LOWER EAST SIDE, NEW YORK, NY",
    bed: "11",
    bath: "10",
    dimension: "12.000",
    unit: "ft",
    location: "New York, NY",
    view: "6543",
  },
  {
    id: 10,
    featured: true,
    title: "9000 CHINATOWN, NEW YORK, NY",
    bed: "12",
    bath: "11",
    dimension: "13.500",
    unit: "ft",
    location: "New York, NY",
    view: "5432",
  },
  {
    id: 11,
    featured: false,
    title: "10000 LITTLE ITALY, NEW YORK, NY",
    bed: "13",
    bath: "12",
    dimension: "15.000",
    unit: "ft",
    location: "New York, NY",
    view: "4321",
  },
  {
    id: 12,
    featured: true,
    title: "11000 EAST VILLAGE, NEW YORK, NY",
    bed: "14",
    bath: "13",
    dimension: "16.500",
    unit: "ft",
    location: "New York, NY",
    view: "3210",
  },
];
