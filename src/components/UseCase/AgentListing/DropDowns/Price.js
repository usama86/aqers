import StackCompoent from "components/Base/StackCompoent";
import React from "react";
import DropDownHeading from "../UI/DropDownHeading";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import SelectComponent from "components/Base/SelectComponent";
import GreyVariantDropDown from "../UI/GreyVariantDropDown";
import { useState } from "react";
import LabelText from "../UI/LabelText";
import ButtonGroupComponent from "components/Base/ButtongroupComponent";
import styled from "@emotion/styled";
import { getDesignSystem } from "theme/DesignToken";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import CheckBoxComponent from "components/Base/CheckboxComponent";
import ButtonComponent from "components/Base/ButtonComponent";

const Price = ({ handleClose }) => {
  const [openMinimum, setOpeMinimum] = useState(false);
  const [openMaximum, setOpenMaximum] = useState(false);
  const baseMargin = {
    p: `${relative_height_size_generator(16)} ${relative_width_size_generator(
      16
    )}`,
  };
  return (
    <StackCompoent direction="column">
      <DropDownHeading
        styleOverrides={{
          ...baseMargin,
          backgroundColor: "rgba(245, 245, 245, 1)",
        }}
      >
        Price Range
      </DropDownHeading>
      <StackCompoent
        direction="column"
        sx={{
          ...baseMargin,
        }}
      >
        <StackCompoent
          sx={{
            width: "100%",
            gap: relative_width_size_generator(15),
            "& > div": {
              flexGrow: 1,
            },
          }}
        >
          <GreyVariantDropDown
            label="Minimum"
            btnStyles={{ width: "100%" }}
            open={openMinimum}
            setOpen={setOpeMinimum}
            parentStyles={{ marginBottom: relative_height_size_generator(16) }}
            defaultValue="No Min"
            options={[
              { value: 0, label: "$0" },
              { value: 100000, label: "$100,000" },
              { value: 200000, label: "$200,000" },
              { value: 300000, label: "$300,000" },
              { value: 400000, label: "$400,000" },
            ]}
          />
          <GreyVariantDropDown
            label="Maximum"
            btnStyles={{ width: "100%" }}
            open={openMaximum}
            setOpen={setOpenMaximum}
            parentStyles={{ marginBottom: relative_height_size_generator(16) }}
            defaultValue="No Max"
            options={[
              { value: 0, label: "$0" },
              { value: 100000, label: "$100,000" },
              { value: 200000, label: "$200,000" },
              { value: 300000, label: "$300,000" },
              { value: 400000, label: "$400,000" },
            ]}
          />
        </StackCompoent>

        <ButtonComponent
          onClick={() => handleClose()}
          color="primary"
          sx={{ borderRadius: "14px" }}
        >
          Apply
        </ButtonComponent>
      </StackCompoent>
    </StackCompoent>
  );
};

export default Price;
