import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

export default function LinkComponent({ children, linkStyle, ...otherProps }) {
  return (
    <Link
      {...otherProps}
      style={{ textDecoration: 'none', color: 'inherit', ...linkStyle }}
    >
      {children}
    </Link>
  )
}

LinkComponent.propTypes = {
  children: PropTypes.node,
  linkStyle: PropTypes.object,
}
LinkComponent.defaultProps = {
  children: <></>,
  linkStyle: {},
}
