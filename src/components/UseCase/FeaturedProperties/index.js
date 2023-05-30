import styled from "@emotion/styled";

import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

import StackCompoent from "components/Base/StackCompoent";
import Search from "components/UseCase/HomePage/Search";
import Filters from "./Filters";
import Properties from "./Properties";

export const SearchPropertiesPageLayout = styled(StackCompoent)(
  ({ theme }) => ({
    padding: `${relative_height_size_generator(
      52
    )} ${relative_width_size_generator(0)} ${relative_height_size_generator(
      62.85
    )} ${relative_width_size_generator(243)}`,
    "@media (max-width: 1000px)": {
      padding: "1rem",
    },
  })
);

const FeaturedProperties = ({ heading }) => {
  return (
    <>
      <Search />
      <SearchPropertiesPageLayout
        spacing={relative_height_size_generator(128)}
        direction={"column"}
      >
        <StackCompoent
          sx={{
            gap: relative_width_size_generator(97),
            // "@media (max-width: 1000px)": {},
          }}
          direction={{ md: "row", sm: "column" }}
          alignItems={{ md: "flex-start", sm: "center", xs: "center" }}
        >
          <Filters />
          <Properties heading={heading} />
        </StackCompoent>
      </SearchPropertiesPageLayout>
    </>
  );
};

export default FeaturedProperties;
