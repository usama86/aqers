import AdvancedDropdown from "components/Advance/AdvancedDropdown";
import DropDownComponent from "components/Base/DropDownComponent";
import RadioGroupComponent from "components/Base/RadioGroupComponent";
import SearchBarComponent from "components/Base/SearchBarComponent";
import StackCompoent from "components/Base/StackCompoent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
const OPTIONS = [
  {
    value: 0,
    label: "For Sale",
  },
  {
    value: 1,
    label: "For Sale",
  },
  {
    value: 2,
    label: "For Sale",
  },
];
const ForSell = () => {
  const [value, setValue] = useState(OPTIONS[0].value);

  return (
    <>
      <RadioGroupComponent
        setValue={setValue}
        value={value}
        options={OPTIONS}
        direction="column"
      />
    </>
  );
};

const SearchOptions = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchBarComponent
        width={relative_width_size_generator(342)}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <AdvancedDropdown dropdownComponent={<ForSell />} label="For Sell" />
      <DropDownComponent label="Price" />
      <DropDownComponent label="Home Type" />
      <DropDownComponent label="More" />
    </>
  );
};

export default SearchOptions;
