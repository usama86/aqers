import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import SearchBarComponent from "components/UseCase/SearchBar";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";

export default function Search() {
  const [activeButton, setActiveButton] = useState("buy");
  return (
    <Box sx={styles.containerBox}>
      <ImageComponent
        source={"/HomePage/Home_Image.png"}
        objectFit="cover"
        alt="Homepage"
        sizes="100vw"
        priority
        imageStyle={{ borderRadius: "44px" }}
      />

      <Box sx={styles.containerDiv}>
        <Box sx={styles.titleContainer}>
          <TypographyComponent
            variant="HomeBold"
            component={"h1"}
            sx={styles.headerTextWeb}
          >
            Fast & Free way to Find Property
          </TypographyComponent>
        </Box>
        <Box sx={styles.titleContainer}>
          <TypographyComponent
            variant="HomeLight"
            component={"h2"}
            sx={styles.headerlightWeb}
          >
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae Proin sodales ultrices nulla blandit volutpat.
          </TypographyComponent>
        </Box>

        <Box sx={styles.searchBar}>
          <SearchBarComponent purpose={activeButton} />
        </Box>
      </Box>
    </Box>
  );
}
