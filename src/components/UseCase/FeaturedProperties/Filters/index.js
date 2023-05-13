import BoxComponent from "components/Base/BoxComponent";
import DividerComponent from "components/Base/DividerComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import CategoryBox from "./CategoryBox";
import SelectComponent from "components/Base/SelectComponent";
import GroupHeading from "./GroupHeading";
import { CATEGORIES, COUNTRIES, LOCATIONS } from "utils/dummy_data";
import SelectionGroup from "./Group";
import LinkComponent from "components/Base/LinkComponent";
import TextFieldComponent from "./UI/TextFieldComponent";

const Filters = ({ heading, purpose }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [priceMin, setPriceMin] = useState("500,000");
  const [priceMax, setPriceMax] = useState("10,000,000,000");
  return (
    <StackCompoent
      direction="column"
      style={{ width: relative_width_size_generator(304) }}
    >
      <TypographyComponent
        variant="FiterTitle"
        component="h4"
        sx={{ mb: relative_height_size_generator(20) }}
      >
        Filters
      </TypographyComponent>
      <DividerComponent />
      <GroupHeading label="Categories" />
      <CategoryBox
        onSelectionChange={setSelectedCategoryId}
        identification="all-categories"
        label="All Categories"
        indentation={1}
        selectedCategoryId={selectedCategoryId}
      />
      {purpose === "buy" || purpose == "sell" ? (
        <CategoryBox
          indentation={2}
          onSelectionChange={setSelectedCategoryId}
          identification="properties-to-buy-sell"
          label={
            purpose === "buy" ? "Properties to Buy" : "Properties for Sale"
          }
          selectedCategoryId={selectedCategoryId}
        />
      ) : null}
      {CATEGORIES.map((eachCategory) => (
        <CategoryBox
          key={eachCategory.id}
          onSelectionChange={setSelectedCategoryId}
          identification={eachCategory.id}
          label={eachCategory.type}
          number={eachCategory.number}
          selectedCategoryId={selectedCategoryId}
          indentation={3}
        />
      ))}
      <DividerComponent sx={{ pt: relative_height_size_generator(36) }} />
      <TypographyComponent
        sx={{
          pt: relative_height_size_generator(18),
          pb: relative_height_size_generator(18.92),
          textTransform: "uppercase",
        }}
        component="h5"
        variant="FilterHeading"
      >
        Locations
      </TypographyComponent>
      <SelectComponent
        options={[
          ...COUNTRIES.map((eachCountry) => ({
            label: eachCountry.label,
            value: eachCountry.code,
          })),
        ]}
        style={{
          width: relative_width_size_generator(272),
          height: relative_height_size_generator(48),
          border: "1px solid black",
        }}
      />
      <CategoryBox
        style={{ marginTop: relative_height_size_generator(20) }}
        onSelectionChange={setSelectedLocationId}
        identification="pakistan"
        label="Pakistan"
        indentation={1}
        selectedCategoryId={selectedLocationId}
      />
      {LOCATIONS.map((eachLocation) => (
        <CategoryBox
          key={eachLocation.id}
          onSelectionChange={setSelectedLocationId}
          identification={eachLocation.id}
          label={eachLocation.location}
          number={eachLocation.number}
          selectedCategoryId={selectedLocationId}
          indentation={2}
        />
      ))}
      <LinkComponent href="">
        <TypographyComponent
          sx={{
            color: "#3A77FF",
            pl: relative_width_size_generator(16 * 2),
            pd: relative_height_size_generator(37),
          }}
          component="span"
          variant="FilterLabelUnselected"
        >
          View More
        </TypographyComponent>
      </LinkComponent>
      <GroupHeading
        label="Price"
        style={{ mb: relative_height_size_generator(18.92) }}
      />
      <StackCompoent sx={{ gap: relative_width_size_generator(16) }}>
        <TextFieldComponent
          style={{ width: relative_width_size_generator(128) }}
          value={priceMin}
          setValue={setPriceMin}
        />
        <TextFieldComponent
          style={{ width: relative_width_size_generator(128) }}
          value={priceMax}
          setValue={setPriceMax}
        />
      </StackCompoent>
    </StackCompoent>
  );
};

export default Filters;
