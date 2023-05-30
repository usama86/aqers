import CheckBoxComponent from "components/Base/CheckboxComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { useState } from "react";
import { getDesignSystem } from "theme/DesignToken";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import DropDownHeading from "../UI/DropDownHeading";

const OPTIONS = [
  {
    value: "houses",
    label: "Houses",
  },
  {
    value: "townhomes",
    label: "Townhomes",
  },
  {
    value: "multiFamily",
    label: "Multi-Family",
  },
  {
    value: "condos_coops",
    label: "Condos/Co-ops",
  },
  {
    value: "lots_lands",
    label: "Lots/Land",
  },
  {
    value: "apartments",
    label: "Apartments",
  },
  {
    value: "manufactured",
    label: "Manufactured",
  },
];

const INITIAL_STATE_SELECTIONS = {
  houses: false,
  townhomes: false,
  multiFamily: false,
  condos_coops: false,
  lots_lands: false,
  apartments: false,
  manufactured: false,
};

const HomeType = ({ handleClose }) => {
  const [typeSelections, setTypeSelections] = useState(
    INITIAL_STATE_SELECTIONS
  );

  const [deselectAll, setDeselectAll] = useState(false);

  return (
    <StackCompoent
      sx={{
        p: `${relative_height_size_generator(
          16
        )} ${relative_width_size_generator(16)}`,
        gap: relative_height_size_generator(16),
      }}
      direction="column"
    >
      <DropDownHeading>Home Types</DropDownHeading>
      <CheckBoxComponent
        sx={{
          "& .MuiTypography-root": {
            ...getDesignSystem(400, 14, 21),
          },
        }}
        label="Deselect All"
        checked={deselectAll}
        onChangeCheckbox={(e) => {
          const isDeselected = e.target.checked;
          setDeselectAll(e.target.checked);
          if (isDeselected) {
            setTypeSelections(INITIAL_STATE_SELECTIONS);
          }
        }}
      />
      {OPTIONS.map((eachOption) => (
        <CheckBoxComponent
          disabled={deselectAll}
          onChangeCheckbox={(e) => {
            setTypeSelections((prevState) => ({
              ...prevState,
              [eachOption.value]: e.target.checked,
            }));
          }}
          checked={typeSelections[eachOption.value]}
          key={eachOption.value}
          sx={{
            "& .MuiTypography-root": {
              ...getDesignSystem(400, 14, 21),
            },
          }}
          label={eachOption.label}
        />
      ))}
    </StackCompoent>
  );
};

export default HomeType;
