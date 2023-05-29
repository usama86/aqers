import AdvancedDropdown from "components/Advance/AdvancedDropdown";
import BoxComponent from "components/Base/BoxComponent";
import DropDownComponent from "components/Base/DropDownComponent";
import RadioGroupComponent from "components/Base/RadioGroupComponent";
import SearchBarComponent from "components/Base/SearchBarComponent";
import StackCompoent from "components/Base/StackCompoent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import ForSell from "./DropDowns/ForSell";
import Price from "./DropDowns/Price";
import HomeType from "./DropDowns/HomeType";
import More from "./DropDowns/More";

const SearchOptions = () => {
  const [searchValue, setSearchValue] = useState("");
  const [forSellDropDown, setForSellDropDown] = useState(false);
  const [priceDropDown, setPriceDropDown] = useState(false);
  const [homeTypeDropDown, setHomeTypeDropDown] = useState(false);
  const [moreDropDown, setMoreDropDown] = useState(false);

  return (
    <>
      <SearchBarComponent
        width={relative_width_size_generator(342)}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <AdvancedDropdown
        open={forSellDropDown}
        setOpen={setForSellDropDown}
        dropdownComponent={
          <ForSell handleClose={() => setForSellDropDown(false)} />
        }
        label="For Sell"
      />
      <AdvancedDropdown
        dropDownWidth={relative_width_size_generator(363)}
        label="Price"
        open={priceDropDown}
        setOpen={setPriceDropDown}
        dropdownComponent={
          <Price handleClose={() => setPriceDropDown(false)} />
        }
      />
      <AdvancedDropdown
        label="Home Type"
        open={homeTypeDropDown}
        setOpen={setHomeTypeDropDown}
        dropdownComponent={
          <HomeType handleClose={() => setHomeTypeDropDown(false)} />
        }
      />
      <AdvancedDropdown
        dropDownWidth={relative_width_size_generator(363)}
        label="More"
        open={moreDropDown}
        setOpen={setMoreDropDown}
        dropdownComponent={<More handleClose={() => setMoreDropDown(false)} />}
      />
    </>
  );
};

export default SearchOptions;
