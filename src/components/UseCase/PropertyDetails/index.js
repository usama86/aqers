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

const PropertyDetailsComponent = ({ showMortgage, showFeaturedProperties }) => {
  return (
    <StackCompoent
      direction="column"
      sx={{
        p: `0 ${relative_width_size_generator(243)}`,
        pb: relative_height_size_generator(141),
      }}
    >
      <StackCompoent
        sx={{
          gap: relative_width_size_generator(22.17),
          mb: relative_height_size_generator(34.01),
        }}
      >
        <ImageGallery
          containerStyles={{
            width: relative_width_size_generator(959),
            // backgroundColor: "grey",
            height: relative_height_size_generator(580),
            border: "1px dashed grey",
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
      <Location />
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
