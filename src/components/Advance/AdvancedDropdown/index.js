import StackCompoent from "components/Base/StackCompoent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonComponent from "components/Base/ButtonComponent";
import BoxComponent from "components/Base/BoxComponent";
import { ClickAwayListener, Paper } from "@mui/material";
import { useState } from "react";

const AdvancedDropdown = ({ label, dropdownComponent }) => {
  const [opendropdown, setOpendropdown] = useState(false);
  const handleClose = () => {
    setOpendropdown(false);
  };
  return (
    <BoxComponent sx={{ position: "relative" }}>
      <ButtonComponent
        onClick={() => {
          setOpendropdown((prevState) => !prevState);
        }}
        sx={{
          backgroundColor: "#FFFFFF",
          padding: `${relative_height_size_generator(
            14
          )} ${relative_width_size_generator(30)}`,
          border: "1px solid rgba(190, 200, 212, 1)",
          borderRadius: relative_width_size_generator(5),
          cursor: "pointer",
          color: "#000000",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#ededed",
          },
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <span>{label}</span>
        <KeyboardArrowDownIcon />
      </ButtonComponent>
      {opendropdown ? (
        <ClickAwayListener onClickAway={() => handleClose()}>
          <Paper
            sx={{
              zIndex: 1000000,
              position: "absolute",
            }}
          >
            {dropdownComponent}
          </Paper>
        </ClickAwayListener>
      ) : null}
    </BoxComponent>
  );
};

AdvancedDropdown.defaultProps = {
  dropdownComponent: <>COMPONENT</>,
};

export default AdvancedDropdown;
