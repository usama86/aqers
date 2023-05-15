import PropTypes from "prop-types";
import styled from "@emotion/styled";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const LabelStyled = styled("label")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: relative_width_size_generator(12),
  fontWeight: "400",
  lineHeight: relative_height_size_generator(14),
  letterSpacing: "0em",
  textAlign: "left",
}));

const InputStyled = styled("input")(({ theme }) => ({
  border: "none",
  backgroundColor: "#ffffff",
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
  helperText,
  value,
  setValue,
  showHelper,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: relative_height_size_generator(6),
      }}
    >
      <InputStyled
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {showHelper ? <LabelStyled>{helperText}</LabelStyled> : null}
    </div>
  );
};

TextFieldComponent.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.any,
  helperText: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  helperText: "Default Helper",
  placeholder: "Enter here...",
};

export default TextFieldComponent;
