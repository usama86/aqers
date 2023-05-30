import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import SelectUnstyled from "@mui/base/Select";
import OptionUnstyled from "@mui/base/Option";
import MenuItemComponent from "../MenuItemComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import TypographyComponent from "../TypographyComponent";
import StackCompoent from "../StackCompoent";

export default function SelectComponent({
  value,
  onChange,
  children,
  label,
  typeB,
  options,
  height,
  required,
  ...otherProps
}) {
  if (typeB) {
    return (
      <SelectUnstyled
        label={label}
        value={value}
        defaultValue={1}
        style={{ background: "#FFF", margin: 0, padding: 0 }}
        {...otherProps}
      >
        {options.map((eachOption) => (
          <OptionUnstyled
            style={{ listStyleType: "none", padding: "10px 14px", margin: 0 }}
            value={eachOption.value}
            key={eachOption.value}
          >
            {eachOption.label}
          </OptionUnstyled>
        ))}
      </SelectUnstyled>
    );
  }
  return (
    <StackCompoent
      direction="column"
      sx={{ gap: relative_height_size_generator(4) }}
    >
      {label ? (
        <TypographyComponent
          sx={{ textTransform: "capitalize" }}
          variant="Label"
          component="label"
        >
          {label}
          {required ? "*" : ""}
        </TypographyComponent>
      ) : null}
      <Select
        required={required}
        defaultValue={options[0].value}
        value={value}
        onChange={onChange}
        sx={{
          fontWeight: 400,
          fontSize: relative_width_font_size_generator(11.64),
          lineHeight: relative_height_size_generator(19.8),
          "& .MuiInputBase-root": {
            // height: "80px",
          },
          padding: `${relative_height_size_generator(
            20
          )} ${relative_width_size_generator(15)}`,
          borderRadius: relative_width_size_generator(14),
          "& input": {
            padding: "0",
          },
          border: "1px solid #C2C9D1",
          width: "auto",
          height: height,
        }}
        {...otherProps}
      >
        {options.map((eachOption) => (
          <MenuItemComponent
            sx={{
              fontFamily: "Roboto",
              fontSize: relative_width_size_generator(16),
              fontWeight: "400",
              lineHeight: relative_height_size_generator(19),
              letterSpacing: "0em",
              textAlign: "left",
              alignItems: "center",
            }}
            key={eachOption.value}
            value={eachOption.value}
          >
            {eachOption.label}
          </MenuItemComponent>
        ))}
      </Select>
    </StackCompoent>
  );
}

SelectComponent.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
};
SelectComponent.defaultProps = {
  children: <></>,
  onChange: () => {},
  height: relative_height_size_generator(48),
  label: "no label passed",
  options: [
    {
      value: "first",
      label: "First",
    },
    {
      value: "second",
      label: "Second",
    },
  ],
};
