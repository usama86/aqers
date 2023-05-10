import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import SelectUnstyled from "@mui/base/Select";
import OptionUnstyled from "@mui/base/Option";

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
    <Select value={value} onChange={onChange} {...otherProps}>
      {children}
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
