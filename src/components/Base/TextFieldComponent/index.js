import React from "react";
import {
  TextFieldCustom,
  TextFieldAuto,
  ErrorTypographyComponent,
  TextFieldStyled,
} from "./style";
import FormControl from "@mui/material/FormControl";
import TypographyComponent from "../TypographyComponent";
import StackCompoent from "../StackCompoent";
import { relative_height_size_generator } from "utils/helpers";

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
  borderradius,
  required,
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
              borderradius={borderradius}
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
    </StackCompoent>
  );
}

TextFieldComponent.defaultProps = {
  fullWidth: true,
  select: false,
  size: "normal",
  label: "",
  variant: "standard",
  message: "",
  onInputChange: () => {},
  value: "",
  isLabel: false,
  placeholder: "",
  isAuto: false,
  height: relative_height_size_generator(48),
  borderradius: "0px",
  required: false,
};
