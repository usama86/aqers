import PropTypes from "prop-types";
import React from "react";
import Stack from "@mui/material/Stack";

export default function StackCompoent({
  children,
  spacing,
  direction,
  ...otherProps
}) {
  return (
    <Stack spacing={spacing} direction={direction} {...otherProps}>
      {children}
    </Stack>
  );
}

StackCompoent.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.string,
};
StackCompoent.defaultProps = {
  children: <></>,
  spacing: 0,
  direction: "row",
};
