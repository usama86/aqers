import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import SearchBarComponent from "components/UseCase/SearchBar";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import BoxComponent from "components/Base/BoxComponent";

export default function Search() {
  const [activeButton, setActiveButton] = useState("buy");
  return (
    <Box sx={styles.containerBox}>
      <BoxComponent
        sx={{
          p: "50px",
          position: "absolute",
          width: "100%",
          height: "100%",
          "@media (max-width: 1000px)": {
            p: "0px",
            borderRadius: relative_width_size_generator(0),
          },
          borderRadius: relative_width_size_generator(44),
        }}
      >
        <ImageComponent
          // position="absolute"
          imageSxStyle={{
            "@media (max-width: 1000px)": {
              "& > img": {
                objectFit: "cover !important",
              },
            },
          }}
          style={
            {
              // top: 0,
              // bottom: 0,
              // left: 0,
              // right: 0,
              // zIndex: 0,
            }
          }
          source={"/HomePage/Home_Image.png"}
          objectFit="contain"
          alt="Homepage"
          width={"100%"}
          priority
          // imageStyle={{  }}
        />
      </BoxComponent>

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
        <Box
          sx={styles.titleContainer}
          style={{ marginBottom: relative_height_size_generator(50) }}
        >
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
