import PropTypes from "prop-types";
import styled from "@emotion/styled";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const LabelStyled = styled("label")(({ theme }) => ({}));

const InputStyled = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  borderBottom: "1px solid black",
  fontFamily: "Roboto",
  fontSize: relative_width_size_generator(16),
  fontWeight: "400",
  lineHeight: relative_height_size_generator(19),
  letterSpacing: "0em",
  textAlign: "left",
  padding: `${relative_height_size_generator(
    10.5
  )} ${relative_width_size_generator(12)}`,
}));

const TextFieldComponent = ({
  placeholder,
  label,
  value,
  setValue,
  ...props
}) => {
  return (
    <div>
      <InputStyled
        id="filters-input"
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <LabelStyled htmlFor="filters-input">{label}</LabelStyled>
    </div>
  );
};

TextFieldComponent.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  label: "Default label",
  placeholder: "Enter here...",
};

export default TextFieldComponent;
