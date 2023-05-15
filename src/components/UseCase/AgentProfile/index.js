import DropDownComponent from "components/Base/DropDownComponent";
import SearchBarComponent from "components/Base/SearchBarComponent";
import StackCompoent from "components/Base/StackCompoent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import SearchOptions from "../AgentListing/SearchOptions";
import { AGENT_LISTINGS, cardData, collectionCardData } from "utils/dummy_data";
import AgentCard from "./AgentCard";
import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import CollectionCard from "components/Advance/CollectionCard";
import PropertyCard from "components/Advance/PropertyCard";
import { styles } from "./styles";
const AgentProfileComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <StackCompoent
        sx={{
          width: relative_width_size_generator(1432),
          margin: `${relative_height_size_generator(
            63
          )} auto ${relative_height_size_generator(70)}`,
        }}
        direction="column"
      >
        <StackCompoent
          direction="row"
          alignItems="center"
          sx={{
            gap: relative_width_size_generator(38.39),
            mb: relative_height_size_generator(40.29),
          }}
        >
          <ImageComponent
            width={relative_width_size_generator(150.71)}
            height={relative_width_size_generator(150.71)}
            source="/AgentProfile/AgentProfilePic.png"
          />
          <StackCompoent direction="column">
            <TypographyComponent component="h2" variant="AgentProfileName">
              Dahiana Waszaj
            </TypographyComponent>
            <TypographyComponent
              sx={{ backgroundColor: "transparent" }}
              component="body"
              variant="AgentProfileEmail"
            >
              johndoe@gmail.com
            </TypographyComponent>
          </StackCompoent>
        </StackCompoent>
        <TypographyComponent
          sx={{ mb: relative_height_size_generator(20) }}
          variant="AgentProfileHeading"
        >
          Listed Properties
        </TypographyComponent>
        <StackCompoent
          sx={{
            gap: relative_width_size_generator(16),
            mb: relative_height_size_generator(30),
          }}
        >
          <SearchOptions />
        </StackCompoent>
        <StackCompoent
          sx={{
            flexWrap: "wrap",
            // gap: relative_width_size_generator(40),
            // pl: relative_width_size_generator(243),
            // pr: relative_width_size_generator(243),
          }}
          justifyContent="space-between"
        >
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
            <BoxComponent
              sx={{ display: "flex", gap: "114px", flexWrap: "wrap" }}
            >
              {collectionCardData.map((data) => (
                <React.Fragment key={data.id}>
                  <CollectionCard relocateOnClicking="#" data={data} />
                </React.Fragment>
              ))}
            </BoxComponent>
          </BoxComponent>
          {/* {AGENT_LISTINGS.map((eachAgent) => (
          <AgentCard key={eachAgent.id} {...eachAgent} />
        ))} */}
        </StackCompoent>
      </StackCompoent>
    </>
  );
};

export default AgentProfileComponent;
