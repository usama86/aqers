import React from 'react'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'

export default function SelectComponent({
  value,
  onChange,
  children,
  ...otherProps
}) {
  return (
    <Select value={value} onChange={onChange} {...otherProps}>
      {children}
    </Select>
  )
}

SelectComponent.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
}
SelectComponent.defaultProps = {
  children: <></>,
  onChange: () => {},
}
