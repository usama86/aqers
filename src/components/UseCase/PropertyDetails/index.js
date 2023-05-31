import ImageGallery from "components/Base/ImageGallery";
import StackCompoent from "components/Base/StackCompoent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import PropertySummary from "./PropertySummary";
import BookATour from "./BookATour";
import Portion from "./Portion";
import Location from "./Location";
import MortgageCalculator from "./MortgageCalculator";
import RelatedFeaturedProperties from "./RelatedFeaturedProperties";
import Description from "./Description";

const PropertyDetailsComponent = ({
  showMortgage,
  showFeaturedProperties,
  Texts,
}) => {
  return (
    <StackCompoent
      direction="column"
      sx={{
        p: `0 ${relative_width_size_generator(243)}`,
        pb: relative_height_size_generator(141),
        "@media (max-width: 1800px)": {
          p: 0,
        },
        "@media (max-width: 900px)": {
          alignItems: "center",
        },
      }}
    >
      <StackCompoent
        sx={{
          gap: relative_width_size_generator(22.17),
          mb: relative_height_size_generator(34.01),
          "@media (max-width: 1800px)": {
            margin: "0 auto",
          },
          "@media (max-width: 1100px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <ImageGallery
          containerStyles={{
            width: relative_width_size_generator(959),
            "@media (max-width: 1500px)": {
              width: "700px",
            },
            "@media (max-width: 1300px)": {
              width: "580px",
            },
            "@media (max-width: 700px)": {
              width: "449px",
            },
            "@media (max-width: 500px)": {
              width: "350px",
            },
          }}
        />
        <StackCompoent
          direction="column"
          sx={{ gap: relative_height_size_generator(22.35) }}
        >
          <PropertySummary />
          <BookATour />
        </StackCompoent>
      </StackCompoent>
      <Portion />
      <Description />
      <Location Texts={Texts} />
      {showMortgage ? <MortgageCalculator /> : null}
      {showFeaturedProperties ? <RelatedFeaturedProperties /> : null}
    </StackCompoent>
  );
};

PropertyDetailsComponent.defaultProps = {
  showMortgage: true,
  showFeaturedProperties: true,
};

export default PropertyDetailsComponent;
