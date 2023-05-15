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
import BoxComponent from "components/Base/BoxComponent";

const AgentListingComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <StackCompoent
        justifyContent="center"
        sx={{
          width: `calc(99vw - ${relative_width_size_generator(53.5)})`,
          marginTop: relative_height_size_generator(44),
          marginBottom: relative_height_size_generator(100),
          transform: `translateX(${relative_width_size_generator(53.5)})`,
          gap: relative_width_size_generator(16),
        }}
      >
        <SearchOptions />
      </StackCompoent>
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
