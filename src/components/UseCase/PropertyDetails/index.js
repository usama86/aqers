import ImageGallery from "components/Base/ImageGallery";
import StackCompoent from "components/Base/StackCompoent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import PropertySummary from "./PropertySummary";
import BookATour from "./BookATour";

const PropertyDetailsComponent = ({}) => {
  return (
    <StackCompoent sx={{ p: `0 ${relative_width_size_generator(243)}` }}>
      <StackCompoent sx={{ gap: relative_width_size_generator(22.17) }}>
        <ImageGallery
          containerStyles={{ width: relative_width_size_generator(959) }}
        />
        <StackCompoent
          direction="column"
          sx={{ gap: relative_height_size_generator(22.35) }}
        >
          <PropertySummary />
          <BookATour />
        </StackCompoent>
      </StackCompoent>
      {/* Portion */}
      {/* By dream home */}
      {/* Divider */}
      {/* Description */}
      {/* Location */}
      {/* Mortgage Calculator */}
      {/* Related Featured Properties */}
    </StackCompoent>
  );
};

export default PropertyDetailsComponent;
