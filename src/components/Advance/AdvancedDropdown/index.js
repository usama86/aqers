import StackCompoent from "components/Base/StackCompoent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonComponent from "components/Base/ButtonComponent";
import BoxComponent from "components/Base/BoxComponent";
import {
  ClickAwayListener,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { useState } from "react";

const AdvancedDropdown = ({
  label,
  dropdownComponent,
  open,
  setOpen,
  dropDownWidth,
  btnStyles,
  options,
  selectVariant,
  defaultValue,
  ...props
}) => {
  const [selected, setSelected] = useState(
    defaultValue ? "" : options[0].value
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BoxComponent {...props} sx={{ position: "relative" }}>
      <ButtonComponent
        onClick={() => {
          setOpen((prevState) => !prevState);
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

          ...btnStyles,
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <span style={{ flexGrow: 1, textAlign: "left" }}>
          &nbsp;
          {selectVariant ? (selected === "" ? defaultValue : selected) : label}
        </span>
        <KeyboardArrowDownIcon />
      </ButtonComponent>
      {open ? (
        <ClickAwayListener onClickAway={() => handleClose()}>
          <Paper
            sx={{
              zIndex: 1000000,
              position: "absolute",
              borderRadius: relative_width_size_generator(10),
              width: dropDownWidth,
              "@media (max-width: 950px)": {
                right: 0,
              },
              "@media (max-width: 500px)": {
                right: 0,
                width: "250px",
              },
            }}
          >
            {dropdownComponent ? (
              dropdownComponent
            ) : (
              <List>
                {options.map((eachOption) => (
                  <ListItem key={eachOption.value} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setSelected(eachOption.value);
                        handleClose();
                      }}
                    >
                      <ListItemText primary={eachOption.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </ClickAwayListener>
      ) : null}
    </BoxComponent>
  );
};

AdvancedDropdown.defaultProps = {
  dropDownWidth: "100%",
  selectVariant: false,
  defaultValue: "",
  options: [
    { value: "any", label: "Any" },
    { value: "first", label: "First" },
    { value: "second", label: "Second" },
  ],
};

export default AdvancedDropdown;
