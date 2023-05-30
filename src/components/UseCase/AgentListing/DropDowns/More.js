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

const defaultBtnStyles = {
  ...getDesignSystem(400, 14, 16),
  textTransform: "capitalize",
  padding: `${relative_height_size_generator(
    14
  )} ${relative_width_size_generator(16)}`,
  "&:hover": {
    backgroundColor: "transparent",
  },
};

const StyledBtnGroup = styled(ButtonGroupComponent)(({ theme, ...params }) => {
  return { marginBottom: relative_height_size_generator(29) };
});

const More = ({ handleClose }) => {
  const [openMaxHOA, setOpenMaxHOA] = useState(false);
  const baseMargin = {
    p: `${relative_height_size_generator(16)} ${relative_width_size_generator(
      16
    )}`,
  };
  const [selectedListingType, setSelectedListingType] = useState(0);
  return (
    <StackCompoent direction="column">
      <DropDownHeading
        styleOverrides={{
          ...baseMargin,
          backgroundColor: "rgba(245, 245, 245, 1)",
        }}
      >
        More Filter
      </DropDownHeading>
      <StackCompoent
        direction="column"
        sx={{
          ...baseMargin,
        }}
      >
        <GreyVariantDropDown
          label="Max HOA"
          btnStyles={{ width: "100%" }}
          open={openMaxHOA}
          setOpen={setOpenMaxHOA}
          parentStyles={{ marginBottom: relative_height_size_generator(16) }}
        />
        <StackCompoent direction="column">
          <LabelText>Listing Type</LabelText>
          <StyledBtnGroup
            selected={selectedListingType}
            buttonsArr={[
              {
                props: {
                  variant: "outlined",
                  sx: {
                    ...defaultBtnStyles,
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    borderColor:
                      selectedListingType === 0 ? "primary.main" : "black",
                    color: selectedListingType === 0 ? "primary.main" : "black",
                  },
                  onClick: (e) => {
                    setSelectedListingType(0);
                  },
                },
                label: "By agent (500)",
              },
              {
                props: {
                  variant: "outlined",
                  sx: {
                    ...defaultBtnStyles,
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    borderColor:
                      selectedListingType === 1 ? "primary.main" : "black",
                    color: selectedListingType === 1 ? "primary.main" : "black",
                  },
                  onClick: (e) => {
                    setSelectedListingType(1);
                  },
                },
                label: "By owner & other (500)",
              },
            ]}
          />
        </StackCompoent>
        <StackCompoent
          alignItems="center"
          sx={{ gap: "6px", cursor: "pointer", mb: "20px" }}
        >
          <ImageComponent
            source="/Common/dropdown.png"
            width="10px"
            height="5px"
          />
          <TypographyComponent variant="FilterLabelUnselected" component="span">
            Show More
          </TypographyComponent>
        </StackCompoent>
        <StackCompoent
          direction="column"
          sx={{ gap: relative_height_size_generator(16), mb: "23px" }}
        >
          <LabelText>Property Status</LabelText>
          <CheckBoxComponent label="Coming Soon" />
          <CheckBoxComponent label="Accepting Backup Offers" />
          <CheckBoxComponent label="Pending & Under Contract" />
        </StackCompoent>
        <StackCompoent
          direction="column"
          sx={{ gap: relative_height_size_generator(16), mb: "23px" }}
        >
          <LabelText>Tours</LabelText>
          <CheckBoxComponent label="Must have open house" />
          <CheckBoxComponent label="Must have 3d tour" />
        </StackCompoent>
        <StackCompoent
          sx={{
            "& .MuiButtonBase-root": {
              flexGrow: 1,
              maxWidth: "50%",
            },
          }}
        >
          <ButtonComponent color="primary" variant="text">
            Reset All Filters
          </ButtonComponent>
          <ButtonComponent
            onClick={() => handleClose()}
            color="primary"
            sx={{ borderRadius: "14px" }}
          >
            Apply
          </ButtonComponent>
        </StackCompoent>
      </StackCompoent>
    </StackCompoent>
  );
};

export default More;
