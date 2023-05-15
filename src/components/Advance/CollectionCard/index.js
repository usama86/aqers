import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import { styles } from "./style";
import TypographyComponent from "components/Base/TypographyComponent";

export default function PropertyCard({ data }) {
  return (
    <BoxComponent sx={styles.mainDiv}>
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source={data.source1}
        imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
      />
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source={data.source2}
        imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
      />
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source={data.source3}
        imageStyle={{ objectFit: "cover" }}
      />
      <BoxComponent sx={{ position: "relative" }}>
        <ImageComponent
          height="190px"
          width="190px"
          position="relative"
          source={data.source4}
          imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
        />
        <BoxComponent sx={styles.shadowStyling}>
          <TypographyComponent
            variant="profileListing"
            component="p"
            sx={{
              fontSize: "32px",
              color: "#FFFFFF",
            }}
          >
            + 5
          </TypographyComponent>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
