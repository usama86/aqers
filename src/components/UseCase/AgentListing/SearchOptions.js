import DropDownComponent from "components/Base/DropDownComponent";
import SearchBarComponent from "components/Base/SearchBarComponent";
import StackCompoent from "components/Base/StackCompoent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const SearchOptions = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <StackCompoent
      justifyContent="center"
      style={{
        transform: `translateX(${relative_width_size_generator(53.5)})`,
      }}
      sx={{
        width: `calc(99vw - ${relative_width_size_generator(53.5)})`,
        marginTop: relative_height_size_generator(44),
        marginBottom: relative_height_size_generator(100),
        gap: relative_width_size_generator(16),
      }}
    >
      <SearchBarComponent
        width={relative_width_size_generator(342)}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <DropDownComponent label="For Sell" />
      <DropDownComponent label="Price" />
      <DropDownComponent label="Home Type" />
      <DropDownComponent label="More" />
    </StackCompoent>
  );
};

export default SearchOptions;
