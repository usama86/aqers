import DropDownComponent from "components/Base/DropDownComponent";
import SearchBarComponent from "components/Base/SearchBarComponent";
import StackCompoent from "components/Base/StackCompoent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import SearchOptions from "./SearchOptions";
import { AGENT_LISTINGS } from "utils/dummy_data";
import AgentCard from "./AgentCard";

const AgentListingComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchOptions />
      <StackCompoent
        sx={{
          flexWrap: "wrap",
          // gap: relative_width_size_generator(40),
          pl: relative_width_size_generator(243),
          pr: relative_width_size_generator(243),
        }}
        justifyContent="space-between"
      >
        {AGENT_LISTINGS.map((eachAgent) => (
          <AgentCard key={eachAgent.id} {...eachAgent} />
        ))}
      </StackCompoent>
    </>
  );
};

export default AgentListingComponent;
