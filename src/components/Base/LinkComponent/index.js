import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

export default function LinkComponent({
  prefetch,
  children,
  linkStyle,
  href,
  ...otherProps
}) {
  return (
    <Link
      {...otherProps}
      href={href}
      style={{ textDecoration: "none", color: "inherit", ...linkStyle }}
    >
      {children}
    </Link>
  );
}

LinkComponent.propTypes = {
  children: PropTypes.node,
  linkStyle: PropTypes.object,
  href: PropTypes.string.isRequired,
};
LinkComponent.defaultProps = {
  children: <></>,
  linkStyle: {},
  prefetch: false,
};
