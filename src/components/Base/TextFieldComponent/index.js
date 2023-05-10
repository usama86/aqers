import React from "react";
import {
  TextFieldCustom,
  TextFieldAuto,
  ErrorTypographyComponent,
  TextFieldStyled,
} from "./style";
import FormControl from "@mui/material/FormControl";

export default function TextFieldComponent({
  size,
  select,
  variant,
  label,
  message,
  value,
  onInputChange,
  placeholder,
  isLabel,
  isAuto,
  fullWidth,
  focused,
  height,
  isError,
  errorMessage,
  borderRadius,
  ...otherProps
}) {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  if (isLabel || isAuto) {
    return (
      <>
        <FormControl fullWidth={fullWidth}>
          {isLabel ? (
            <TextFieldStyled
              value={value}
              select={select}
              size={size}
              error={isError}
              variant={variant}
              label={label}
              helperText={message}
              placeholder={placeholder}
              onChange={handleChange}
              inputProps={{
                autoComplete: "new-password",
              }}
              {...otherProps}
            />
          ) : (
            <TextFieldAuto
              sx={{ "& fieldset": { border: "none" } }}
              focus={focused ? true : undefined}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              height={height}
              inputProps={{
                autoComplete: "off",
              }}
              borderRadius={borderRadius}
              {...otherProps}
            />
          )}
        </FormControl>
        {errorMessage && (
          <ErrorTypographyComponent variant="caption5">
            {errorMessage}
          </ErrorTypographyComponent>
        )}
      </>
    );
  }
  return (
    <>
      <TextFieldCustom
        height={height}
        fullWidth={fullWidth}
        sx={{ "& fieldset": { border: "none" } }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        error={isError}
        color="secondary"
        inputProps={{
          autoComplete: "new-password",
        }}
        {...otherProps}
      />
      {errorMessage && (
        <ErrorTypographyComponent variant="caption5">
          {errorMessage}
        </ErrorTypographyComponent>
      )}
    </>
  );
}

TextFieldComponent.defaultProps = {
  fullWidth: true,
  select: false,
  size: "normal",
  label: "Hello World",
  variant: "standard",
  message: "",
  onInputChange: () => {},
  value: "",
  isLabel: false,
  placeholder: "",
  isAuto: false,
  height: "48px",
  borderRadius: "0px",
};
