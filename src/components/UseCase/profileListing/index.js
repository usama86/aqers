import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
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
          <PropertyCard />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default PersonalProfiles;
