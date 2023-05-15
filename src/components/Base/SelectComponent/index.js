import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import SelectUnstyled from "@mui/base/Select";
import OptionUnstyled from "@mui/base/Option";
import MenuItemComponent from "../MenuItemComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export default function SelectComponent({
  value,
  onChange,
  children,
  label,
  typeB,
  options,
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
    <Select
      defaultValue={options[0].value}
      value={value}
      onChange={onChange}
      sx={{
        fontFamily: "Roboto",
        fontSize: relative_width_size_generator(16),
        fontWeight: "400",
        lineHeight: relative_height_size_generator(19),
        letterSpacing: "0em",
        textAlign: "left",
        alignItems: "center",
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
  );
}

SelectComponent.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
};
SelectComponent.defaultProps = {
  children: <></>,
  onChange: () => {},
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
