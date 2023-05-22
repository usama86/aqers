import { styled } from "@mui/material/styles";
import TypographyComponent from "../TypographyComponent";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const TextFieldCustom = styled(OutlinedInput)(
  ({ theme, fullWidth, height }) => ({
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
    height: height,
    width: fullWidth ? "100%" : "auto",
  })
);

export const TextFieldAuto = styled(TextField)(
  ({ theme, focus, height, borderRadius }) => ({
    "& .MuiInputBase-root": {
      height: height,
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: "14px",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "24px",

      border: "1px solid black",
      borderBottomLeftRadius: focus && "0px",
      paddingLeft: "20px",
      paddingRight: "80px",
      borderRadius: borderRadius,
    },
    "& .Mui-focused": {
      borderBottomLeftRadius: "0px",
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiInputBase-root": {
        height: "60px",
        borderRadius: "8px",
        borderBottomLeftRadius: focus && "0px",
      },
      "& .Mui-focused": {
        borderBottomLeftRadius: "0px",
      },
    },
  })
);

export const ErrorTypographyComponent = styled(TypographyComponent)(() => ({
  color: "var(--mui-palette-error-color)",
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "var(--mui-palette-secondary-main)",
      borderWidth: "1px",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "var(--mui-palette-info-main)",
      borderWidth: "1px",
    },
  },
}));
