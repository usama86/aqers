import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import { styles } from "./style";

export default function PropertyCard() {
  return (
    <BoxComponent sx={styles.mainDiv}>
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source="/Common/test_image.png"
        imageStyle={{ objectFit: "cover" }}
      />
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source="/Common/test_image.png"
        imageStyle={{ objectFit: "cover" }}
      />
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source="/Common/test_image.png"
        imageStyle={{ objectFit: "cover" }}
      />
      <ImageComponent
        height="190px"
        width="190px"
        position="relative"
        source="/Common/test_image.png"
        imageStyle={{ objectFit: "cover" }}
      />
    </BoxComponent>
  );
}
