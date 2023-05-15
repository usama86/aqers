import BoxComponent from "components/Base/BoxComponent";
import DividerComponent from "components/Base/DividerComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
  truncateString,
} from "utils/helpers";
import CategoryBox from "./CategoryBox";
import SelectComponent from "components/Base/SelectComponent";
import GroupHeading from "./GroupHeading";
import { CATEGORIES, COUNTRIES, LOCATIONS } from "utils/dummy_data";
import SelectionGroup from "./Group";
import LinkComponent from "components/Base/LinkComponent";
import TextFieldComponent from "./UI/TextFieldComponent";
import useToWords from "hooks/useToWords";
import SliderComponent from "components/Base/SliderComponent";
import styles from "./styles";
import CheckBoxComponent from "components/Base/CheckboxComponent";
import CheckboxCustomized from "./UI/CheckboxCustomized";
import { useCategorySelection } from "./hooks";
import { FEATURED_PROPERTIES } from "config/static";

const Filters = ({ heading, purpose }) => {
  const { CONSTRUCTION_STATE_CHECKBOXES, FEATURES_CHECKBOXES, AREA_UNITS } =
    FEATURED_PROPERTIES;
  const { convertFn } = useToWords({ currency: false });
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [selectedAreaUnitId, setSelectedAreaUnitId] = useState("");
  const [priceRange, setPriceRange] = useState([500000, 10000000000]);
  const [areaRange, setAreaRange] = useState([0, 99999]);
  const { toggleSelections, getSelectionValue } = useCategorySelection();
  const validateNumerical = (input) => !isNaN(+input);
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
          value={priceRange[0]}
          setValue={(e) => {
            if (validateNumerical) {
              setPriceRange((prevState) => [e, prevState[1]]);
            }
          }}
          helperText={
            !isNaN(+priceRange[0])
              ? truncateString(convertFn(priceRange[0]), 17)
              : ""
          }
        />
        <TextFieldComponent
          style={{ width: relative_width_size_generator(128) }}
          value={priceRange[1]}
          setValue={(e) => {
            if (validateNumerical(e)) {
              setPriceRange((prevState) => [prevState[0], e]);
            }
          }}
          helperText={
            !isNaN(+priceRange[1])
              ? truncateString(convertFn(priceRange[1]), 17)
              : ""
          }
        />
      </StackCompoent>
      <SliderComponent
        value={priceRange}
        min={0}
        max={10000000000}
        onChange={(event) => {
          setPriceRange(event);
        }}
        sx={styles.priceSlider}
      />
      <DividerComponent />
      <GroupHeading
        label="furnished"
        style={{
          marginTop: relative_height_size_generator(18),
          marginBottom: relative_height_size_generator(18.92),
        }}
      />
      <StackCompoent
        direction="column"
        sx={{
          gap: relative_height_size_generator(8),
          mb: relative_height_size_generator(25),
          pl: relative_width_size_generator(16 * 1),
        }}
      >
        {CONSTRUCTION_STATE_CHECKBOXES.map((eachState) => (
          <CheckboxCustomized
            key={eachState.id}
            checked={getSelectionValue(eachState.name)}
            label={`${eachState.label} (${eachState.number})`}
            onChecking={() => {
              toggleSelections(eachState.name);
            }}
          />
        ))}
      </StackCompoent>
      <DividerComponent />
      <GroupHeading label="features" />
      <StackCompoent
        direction="column"
        sx={{
          gap: relative_height_size_generator(8),
          pl: relative_width_size_generator(16 * 1),
        }}
      >
        {FEATURES_CHECKBOXES.map((eachState) => (
          <CheckboxCustomized
            key={eachState.id}
            checked={getSelectionValue(eachState.name)}
            label={`${eachState.label} (${eachState.number})`}
            onChecking={() => {
              toggleSelections(eachState.name);
            }}
          />
        ))}
      </StackCompoent>
      <LinkComponent
        linkStyle={{ marginTop: relative_height_size_generator(10) }}
        href=""
      >
        <TypographyComponent
          sx={{
            color: "#3A77FF",
            // pl: relative_width_size_generator(16 * 1),
            pd: relative_height_size_generator(37),
            mt: relative_height_size_generator(10),
          }}
          component="span"
          variant="FilterLabelUnselected"
        >
          View More
        </TypographyComponent>
      </LinkComponent>
      <DividerComponent sx={{ mt: relative_height_size_generator(20) }} />
      <GroupHeading
        label="Area Unit"
        style={{ marginTop: relative_height_size_generator(18) }}
      />
      {AREA_UNITS.map((eachUnit) => (
        <CategoryBox
          key={eachUnit.id}
          onSelectionChange={setSelectedAreaUnitId}
          identification={eachUnit.id}
          label={eachUnit.location}
          selectedCategoryId={selectedAreaUnitId}
          indentation={0}
        />
      ))}
      <DividerComponent sx={{ mt: relative_height_size_generator(28) }} />
      <GroupHeading
        label="area"
        style={{ marginTop: relative_height_size_generator(18) }}
      />
      <StackCompoent sx={{ gap: relative_width_size_generator(16) }}>
        <TextFieldComponent
          style={{ width: relative_width_size_generator(128) }}
          value={areaRange[0]}
          setValue={(e) => {
            {
              if (validateNumerical(e)) {
                setAreaRange((prevState) => [e, prevState[1]]);
              }
            }
          }}
        />
        <TextFieldComponent
          style={{ width: relative_width_size_generator(128) }}
          value={areaRange[1]}
          setValue={(e) => {
            {
              if (validateNumerical(e)) {
                setAreaRange((prevState) => [prevState[0], e]);
              }
            }
          }}
        />
      </StackCompoent>
    </StackCompoent>
  );
};

export default Filters;
