import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@mui/material/Menu'

export default function MenuComponent({ children, ...otherProps }) {
  return <Menu {...otherProps}>{children}</Menu>
}

MenuComponent.propTypes = {
  children: PropTypes.node,
}
MenuComponent.defaultProps = {
  children: <></>,
}
